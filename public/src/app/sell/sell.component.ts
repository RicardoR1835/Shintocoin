import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  sell = {
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
    console.log(this.sell.amount)
    this.sellCoins(this.sell.amount);
    this.correct = true;
    this.sell.amount = 0;
  }
  getNumbers(){
    this.numbers = this._httpService.shareNumbers();
  }
  sellCoins(num){
    this._httpService.sellCoins(num);
  }

}






