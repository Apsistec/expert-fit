// import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ConferenceData } from './conference-data';
import { darkStyle } from './map-dark-style';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapCanvas', { static: true }) mapElement: ElementRef;

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public confData: ConferenceData,
    private modalController: ModalController
  ) { }

  ngOnInit() {}
  async ngAfterViewInit() {
    const appEl = this.doc.querySelector('ion-app');
    let style = [];
    // if (appEl.classList.contains('dark-theme')) {
    style = darkStyle;
    // }

    const googleMaps = await this.getGoogleMaps(
      'AIzaSyBiBxbmdVNvYMRdFSJDf-uWRsQ7Y7DPjbg'
    );

    let map;

    this.confData.getMap().subscribe((mapData: any) => {
      const mapEle = this.mapElement.nativeElement;

      map = new googleMaps.Map(mapEle, {
        center: mapData.find((d: any) => d.center),
        zoom: 16,
        styles: style,
      });

      mapData.forEach((markerData: any) => {
        const infoWindow = new googleMaps.InfoWindow({
          content: `<h3><b>${markerData.name}</b></h3><h5>${markerData.address}</h5><h4>${markerData.phone}</h4>`,
        });

        const marker = new googleMaps.Marker({
          position: markerData,
          map,
          title: markerData.name,
        });

        infoWindow.open(map, marker);
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });

      googleMaps.event.addListenerOnce(map, 'idle', () => {
        mapEle.classList.add('show-map');
      });
    });
  }

  getGoogleMaps(apiKey: string): Promise<any> {
    const win = window as any;
    const googleModule = win.google;
    if (googleModule && googleModule.maps) {
      return Promise.resolve(googleModule.maps);
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=beta`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = () => {
        const googleModule2 = win.google;
        if (googleModule2 && googleModule2.maps) {
          resolve(googleModule2.maps);
        } else {
          reject('google maps not available');
        }
      };
    });
}

dismissModal() {
  this.modalController.dismiss();
}
}
