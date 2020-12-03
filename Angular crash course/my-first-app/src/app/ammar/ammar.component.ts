import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ammar',
  templateUrl: './ammar.component.html',
  styleUrls: ['./ammar.component.css']
})
export class AmmarComponent implements OnInit {
  userName = ''
  showName = false
  showPara = true
  sayItBaby = []

  ngOnInit(): void {
  }
  onClick(){
    this.sayItBaby.push(this.userName)
  }

  show(){
    this.showPara = !this.showPara
    this.sayItBaby.push(this.sayItBaby.length)
  }
}
