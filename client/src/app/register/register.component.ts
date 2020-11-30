import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

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
        this.toastr.error(error.error);
      }
    )
  }

  cacnel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }

}
