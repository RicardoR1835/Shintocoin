import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buy = {
    amount: 0,
  }
  numbers = [];
  correct = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getNumbers()
    console.log(this.numbers)
  }

  onSubmit() {
    console.log(this.buy.amount)
    this.addToNumbersBuy(this.buy.amount);
    this.correct = true;
    this.buy.amount = 0;
  }
  getNumbers(){
    this.numbers = this._httpService.shareNumbers();
  }
  addToNumbersBuy(num){
    this._httpService.addToNumbersBuy(num);
  }

}