import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
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

  getinfo(x){
    this._httpService.personalStats(x);
    }

}