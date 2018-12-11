import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class TransferService {
  data: string;

  constructor() { }

  

  setData(data){
    this.data = data;
    console.log(this.data)
  }

  getData(){
    console.log(this.data)
    return this.data;
  }

}