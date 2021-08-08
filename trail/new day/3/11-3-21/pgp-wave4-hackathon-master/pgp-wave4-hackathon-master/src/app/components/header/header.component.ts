import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TranscationService } from 'src/app/service/transcation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:TranscationService) { }
  public transaction=new Transaction;
  public des;
public totalAmount:number=0;
public income:number=0;
public expense:number=0;
public tran;
  ngOnInit(): void {
    this.get();
  }
  get(){
    this.service.gettran().subscribe(data=>{
      this.tran=data;
    });
  }
  onSubmit() {
      this.service.addtran(this.transaction).subscribe(data => {
        this.get();
  });
  
}

}
