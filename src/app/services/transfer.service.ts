import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class TransferService {

  constructor() { }

  private data;

  setData(data){
    this.data = data;
    console.log(this.data)
  }

  getData(){
    console.log(this.data)
    return this.data;
  }

  clearData(){
    this.data = undefined;
  }

}