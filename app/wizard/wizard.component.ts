import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BidBasicDetailsComponent } from '../bid-basic-details/bid-basic-details.component';
import { Activity } from '../activity';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})

export class WizardComponent implements OnInit {
  activities: Activity[];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.activities = [
      new Activity(BidBasicDetailsComponent, {name: 'Bid Basic Details'})
    ];
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */