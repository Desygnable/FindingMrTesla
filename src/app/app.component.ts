import { Component } from '@angular/core';
import { latLng, circle, polygon, marker } from 'leaflet';

import '../assets/greyscale/tileLayer.Grayscale.js';

/** They greyscale variable for Leaflet */
declare var tileLayer;

/** The App Component */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Finding Mr. Tesla';

  /** Sample Location Object */
  public location = {
    title: 'The Radio Wave Building (Gerlach Hotel)',
    address: '49 W. 27th St.',
    // tslint:disable-next-line:max-line-length
    description: 'The Radio Wave Building, at #49 West 27th just east of 6th Avenue, is one of the handsomer buildings in the area. It’s called the Radio Wave Building because one of history’s most unsung inventors and scientists lived here.',
    source: 'http://forgotten-ny.com/2014/01/27th-street/',
    author: 'Forgotten New York',
    imageUrl: '../assets/Gerlach.jpg',
    imgTitle: `Palm trees wave from the roof in 1895.
              The artist creatively added a few floors for impact --
              "King's Photographic Views of New York" (copyright expired)`
    // original img url: http://daytoninmanhattan.blogspot.com/2013/09/the-1883-hotel-gerlach-nos-49-55-west.html
  };

  /** Leaflet */
  public options = {
    layers: [
      tileLayer.grayscale('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    //  zoom: 10,
    //  center: latLng(46.879966, -121.726909)
    zoom: 16,
    center: latLng([40.742037, -73.987563])
  };
  public layers = [
    circle([40.745342, -73.990191], { radius: 25, fillColor: '#2e86de', fillOpacity: .9, color: '#54a0ff', opacity: .6, weight: 15 }),
    marker([40.742037, -73.987563])
  ];
  public layersControl = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    },
    // overlays: {
    //   'Big Circle': circle([46.95, -122], { radius: 5000 }),
    //   'Big Square': polygon([[46.8, -121.55], [46.9, -121.55], [46.9, -121.7], [46.8, -121.7]])
    // }
  };

}
