import { Component, Input, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { CardInfo } from '../card-info';
import {DoctorInfo} from '../doctor-info'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardInfo = { name: 'Dr ABC', date: new Date()}
  doctor: DoctorInfo = { name: 'Dr ABC', type: 'ENT', hospital: 'XYZ'}
  @Input() isDoctor:boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

}
