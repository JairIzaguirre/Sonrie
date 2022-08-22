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
  imgMob: string
  header: string
  subheader: string
  shortDescription: string
  detail:DialogDetail[]
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

  // toChips(detail:string):string[]{
  //   return 
  // }





}
