import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  numbers = [];
  transaction = {
  };
  holder = [];
  info = {
    action: "",
    amount: 0,
    value: 0,
    id: 0,
  }

  constructor(private _http: HttpClient) { }

  shareNumbers() {
    return this.numbers;
  }
  addToNumbersMine(num: any) {
    this.numbers.push(num);
    this.transaction['id'] = Math.floor(Math.random() * 9999999);
    this.transaction['action'] = "Mined";
    this.transaction['amount'] = 1;
    this.transaction['value'] = this.numbers.length;
    let x = this.numbers.length;
    console.log(this.numbers);

    console.log(this.transaction);
    this.holder.push([Math.floor(Math.random() * 9999999), "Mined", 1, x])
  }
  addToNumbersBuy(num: any) {
    for (let i = 0; i < num; i++) {
      this.numbers.push(1);
      console.log("pushed 1")
    }
    this.transaction['id'] = Math.floor(Math.random() * 9999999);
    this.transaction['action'] = "Bought";
    this.transaction['amount'] = num;
    this.transaction['value'] = this.numbers.length;
    let x = this.numbers.length;
    this.holder.push([Math.floor(Math.random() * 9999999), "Bought", num, x])
    console.log(this.numbers);
    console.log();
  }

  sellCoins(num: any) {
    for (let i = 0; i < num; i++) {
      this.numbers.pop();
    }
    this.transaction['id'] = Math.floor(Math.random() * 9999999);
    this.transaction['action'] = "Sold";
    this.transaction['amount'] = num;
    this.transaction['value'] = this.numbers.length;
    let x = this.numbers.length;
    this.holder.push([Math.floor(Math.random() * 9999999), "Sold", num, x])
  }

  shareStats() {
    return this.holder;
  }

  personalStats(x) {
    for(let i = 0; i < this.holder.length; i++){
      this.info.id = x[0]
      this.info.action = x[1]
      this.info.amount = x[2]
      this.info.value = x[3]
      console.log(this.info)
      break;
    }
  }

  sharePersonal(){
    return this.info;
  }

}