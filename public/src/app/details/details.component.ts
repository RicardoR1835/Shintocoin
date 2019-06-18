import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  data;
  numbers = [];
  correct = false;
  info = {
    action: "",
    amount: 0,
    value: 0,
    id: 0,
  }

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getPersonal()
    this.getNumbers()
    console.log(this.numbers)
    this.getStats()
  }

  getNumbers(){
    this.numbers = this._httpService.shareNumbers();
  }

  getStats(){
    this.data = this._httpService.shareStats();
    console.log(this.data);
  }

  getPersonal(){
    this.info = this._httpService.sharePersonal();
    }

}
