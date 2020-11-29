import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model:any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(
      resoponse => {
        console.log(resoponse);
        this.cacnel();
      },
      error => {
        console.log(error);
      }
    )
  }

  cacnel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }

}
