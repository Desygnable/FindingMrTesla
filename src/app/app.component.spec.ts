import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LeafletModule} from '@asymmetrik/ngx-leaflet';

import * as Leaflet from 'leaflet';
import '../assets/greyscale/tileLayer.Grayscale.js';

declare var tileLayer;

describe('AppComponent', () => {

  beforeEach(async(() => {
  this.tileLayer = new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  });
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        LeafletModule
      ],
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to finding-mr-tesla!');
  // }));
});
