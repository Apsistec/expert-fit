import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  zoom = 17;
  options: google.maps.MapOptions = {
    center: {
      lat: 32.021493,
      lng: -102.107034
    },
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 3,
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          {
            color: '#242f3e'
          }
        ]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#746855'
          }
        ]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#242f3e'
          }
        ]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'geometry.stroke',
        stylers: [
          {
            // color: '#263c3f'
            color: '#6b9a76'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#263c3f'
            // color: '#3b1a76'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.stroke',
        stylers: [
          {
            // color: '#263c3f'
            color: '#fb1a76'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [
          {
            // color: '#263c3f'
            color: '#6b9a76'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#6b9a76'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            color: '#38414e'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#212a37'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#9ca5b3'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          {
            color: '#746855'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#1f2835'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#f3d19c'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#2f3948'
          }
        ]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#d59563'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#17263c'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#515c6d'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#17263c'
          }
        ]
      }
    ]
  };
  marker: new () => google.maps.Marker;
  markerO: google.maps.MarkerOptions = {
    position: this.options.center,
    title: 'Xpert Fitness'
  };
  // info: {
  //   content:{
  //    '<div id="content">' +
  //   '<h1 id="firstHeading" class="firstHeading">Xpert Fitness</h1>' +
  //   '<div id="bodyContent">' +
  //   '<p><b>Xpert Fitness</b> is considered to be' +
  //   'one of the best personal fitness gyms in town.</p>' +
  //   '</div>';
  //   }
  // };
  // markerOpts: google.maps.MarkerOptions = {
  // };

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
