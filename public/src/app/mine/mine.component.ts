import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer = {
    answer: '',
  }
  numbers = [];
  wrong = false;
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
    console.log(this.answer.answer);
    if(this.answer.answer === "Ricardo"){
      this.addToNumbersMine(1);
      this.correct = true;
      this.wrong = false;
    } else {
      console.log("Wronggg")
      this.wrong = true;
      this.correct = false;
    }
  }
  getNumbers(){
    this.numbers = this._httpService.shareNumbers();
  }
  addToNumbersMine(num){
    this._httpService.addToNumbersMine(num);
  }

}



