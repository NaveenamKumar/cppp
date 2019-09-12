import { Injectable } from '@angular/core';
import { Activity } from './activity';

import { BidBasicDetailsComponent } from './bid-basic-details/bid-basic-details.component';
import { NoopComponent } from './noop/noop.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { BidScheduleComponent } from './bid-schedule/bid-schedule.component';


@Injectable()
export class ApiService {



  constructor() { }



  getWorkable(){
    // wokable - bid
    return {
      ministry: 'Ministry of Highways',
      department: 'NHAI',
      buyer_name: 'Director - NCR',
      bid_classifications: ['EPC', 'ICT'],
      bid_types: ['Single', 'Limited']
    }

  }

  getActivities() {
    let activities = [
      new Activity(BidBasicDetailsComponent, {name: 'Bid Basic Details',workable: this.getWorkable()}),
      new Activity(ChooseTemplateComponent, {name: 'Choose Template',workable: this.getWorkable()}),
      new Activity(BidScheduleComponent, {name: 'Bid Schedule',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Pre Qualifications Criterion',workable: this.getWorkable()}),
      new Activity(NoopComponent, {name: 'Specifications',workable: this.getWorkable()})
    ];

    let promise =  new Promise((resolve, reject) => { 
        resolve(activities);
    })
    return promise
    
  }
}