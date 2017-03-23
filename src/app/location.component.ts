import { Component, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { LocationService } from './location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'location-component',
    template: `
             <div *ngIf="locationList.length != 0">
                   <h3> Location List</h3>
               </div> 
            <ul>
                <li *ngFor="let location of locationList">
                    <i (click)="emitLocationDetails(location)" style="color:slategray">(QuickDetails)</i> 
                        {{location.name}} 
                    <a [routerLink]="['/details', location.abbr]"><i>FullDetails</i></a>
                </li>
            </ul>
            <div>
                <button (click)="getAllLocationList()">Show Locations</button>
                <div *ngIf="locationList.length == 0">
                    No records
               </div>
             </div> 
            
            `
            
            
            ,
})
export class LocationComponent implements AfterViewInit {
    @Output() locationDetailEvent: EventEmitter<any> = new EventEmitter();
    ngAfterViewInit(): void {
       // this.getAllLocationList();
    }

    /** DI with type hinting */
    constructor(private locationService: LocationService) {
        this.locationList = [];
    }

    locationList: Object[];
    getAllLocationList() {
        this.locationService.getLocationDetails("all")
            .subscribe(res => {
                this.locationList = res;
            });

    }

    emitLocationDetails(location: any) {
        console.log(location);
        this.locationDetailEvent.emit(location);
    }

}





































@Component({
    selector: 'location-detail-component',
    template: `
    <div style="position: fixed;top: 10px;right: 58px;">
        <h3>Location Detail</h3>
        <div *ngIf="locationDetails">
            <div>Name: {{locationDetails.name}}</div>
            <div>Area: {{locationDetails.area}}</div>
            <div>Abbr: {{locationDetails.abbr}}</div>
            <div>Area: {{locationDetails.area}}</div>
            <div>Largest City: {{locationDetails.largest_city}}</div>  
            <div>Capital: {{locationDetails.capital}}</div>
        </div>
    </div>`,
})
export class LocationDetailComponent implements AfterViewInit {
    @Output() locationDetailEvent: EventEmitter<any> = new EventEmitter();
    ngAfterViewInit(): void {
        this.route.params.subscribe((params) => {
            if (params["code"]) {
                this.getSingleLocatonDetails(params["code"]);
            }
        });
    }

    constructor(private locationService: LocationService, private route: ActivatedRoute) {}
    
    locationDetails: object;
    getSingleLocatonDetails(stateCode: string) {
        this.locationService.getLocationDetails(stateCode)
            .subscribe(res => {
                this.locationDetails = res;
            });

    }


}




