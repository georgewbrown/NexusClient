import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TransferService {

  constructor() { }

  private data;

  setData(data){
    this.data = data;
    console.log(this.data)
  }

  getData(){
    let temp = this.data;
    this.clearData();
    console.log(temp)
    return temp;
  }

  clearData(){
    this.data = undefined;
  }

}