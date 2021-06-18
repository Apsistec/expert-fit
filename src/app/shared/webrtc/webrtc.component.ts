import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Component({
  selector: 'app-webrtc',
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.scss'],
})
export class WebrtcComponent implements OnInit {

  webcamButton;
  webcamVideo;
  callButton;
  callInput;
  answerButton;
  remoteVideo;
  hangupButton;

  constructor() { }

  ngOnInit() {
    const disabled: boolean =null;
    const servers = {
      iceServers: [
        {
          urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
        }
      ],
      iceCandidatePoolSize: 10
    };

    // Global State
    const pc = new RTCPeerConnection(servers);
    let localStream = null;
    let remoteStream = null;

    // HTML elements

    this.webcamButton = document.getElementById('webcamButton');
    this.webcamVideo = document.getElementById('webcamVideo');
    this.callButton = document.getElementById('callButton');
    this.callInput = document.getElementById('callInput');
    this.answerButton = document.getElementById('answerButton');
    this.remoteVideo = document.getElementById('remoteVideo');
    this.hangupButton = document.getElementById('hangupButton');

    // 1. Setup media sources

    this.webcamButton.onclick = async () => {
      localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      remoteStream = new MediaStream();

      // Push tracks from local stream to peer connection
      localStream.getTracks().forEach((track) => {
        pc.addTrack(track, localStream);
      });

      // Pull tracks from remote stream, add to video stream
      pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track);
        });
      };

      this.webcamVideo.srcObject = localStream;
      this.remoteVideo.srcObject = remoteStream;

      this.callButton = !disabled;
      this.answerButton = !disabled;
      this.webcamButton = disabled;
      this.hangupButton = !disabled;

    };

    // 2. Create an offer
    this.callButton.onclick = async () => {
      // Reference Firestore collections for signaling
      const callDoc = firebase.default.app().firestore().collection('calls').doc();
      const offerCandidates = callDoc.collection('offerCandidates');
      const answerCandidates = callDoc.collection('answerCandidates');

      this.callInput.value = callDoc.id;

      // Get candidates for caller, save to db
      pc.onicecandidate = (event) => {
        event.candidate && offerCandidates.add(event.candidate.toJSON());
      };

      // Create offer
      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type
      };

      await callDoc.set({ offer });

      // Listen for remote answer
      callDoc.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      });

      // When answered, add candidate to peer connection
      answerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });

    };

    // 3. Answer the call with the unique ID
    this.answerButton.onclick = async () => {
      const callId = this.callInput.value;
      const callDoc = firebase.default.app().firestore().collection('calls').doc(callId);
      const answerCandidates = callDoc.collection('answerCandidates');
      const offerCandidates = callDoc.collection('offerCandidates');

      pc.onicecandidate = (event) => {
        event.candidate && answerCandidates.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      const offerDescription = callData.offer;
      await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);

      const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp
      };

      await callDoc.update({ answer });

      offerCandidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          console.log(change);
          if (change.type === 'added') {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    };

}
};
