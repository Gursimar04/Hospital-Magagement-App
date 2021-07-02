import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../card-info'
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  card: CardInfo = { name: 'Dr ABC', date: new Date() }

  constructor() { }

  ngOnInit(): void {
  }

}
