import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogDetail{
  header:string
  subheader?:string;
  detail:string;
  type:string;
  imgUrl?:string;
}

export interface DialogData {
  imgUrl: string
  imgMob?: string
  header: string
  subheader?: string
  shortDescription: string
  detail?:DialogDetail[],
  images?:string[],
  type?:string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  //details:DialogDetail[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void { 
    //this.details = this.data.detail;
  }

  isOdd(index:number):boolean{
    return index % 2 !== 0;
  }

  // toChips(detail:string):string[]{
  //   return 
  // }





}
