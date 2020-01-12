import { BrewsService } from './../brews.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brew',
  templateUrl: './brew.component.html',
  styleUrls: ['./brew.component.scss']
})
export class BrewComponent implements OnInit {
     datas;
  constructor(private _fetch :BrewsService ) {
     this.datas =  this._fetch.brewData()
   
   }

  ngOnInit() {
    console.log(this.datas[0])
  }

}
