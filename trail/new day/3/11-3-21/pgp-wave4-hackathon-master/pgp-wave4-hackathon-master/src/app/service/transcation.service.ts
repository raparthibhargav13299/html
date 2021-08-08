import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction';
@Injectable({
  providedIn: 'root'
})
export class TranscationService {

  constructor(private http :HttpClient) { }
  
  gettran(){
    return this.http.get('http://localhost:3000/transaction');
  }
  addtran(tran){
    return this.http.post('http://localhost:3000/transaction',tran)
  }
}
