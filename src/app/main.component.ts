import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <div *ngIf="locationDetail">
    <div>State: {{locationDetail.name}}</div>  
    <div>Abbr: {{locationDetail.abbr}}</div>  
    
  </div>
  <location-component (locationDetailEvent)="quickLocationDetail($event)"></location-component>

<router-outlet></router-outlet>

  `,
})
export class MainComponent {
  private locationDetail: any;
  quickLocationDetail(locationDetail: any) {
    console.log("Reached");
    this.locationDetail = locationDetail;
  }
}
