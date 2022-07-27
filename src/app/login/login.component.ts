import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = 'kethianilkumar1@gmail.com';
  password: any = 'admin';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
  }

  goToItems() {
    // alert(this.email)
    // console.log(this.email, this.password);
    const data = { "email": this.email, "password": this.password };
    this.dataService.login(data).subscribe((response: any) => {
      // console.log(response.data.token)
      localStorage.setItem('userDetails', response.data.user)
      localStorage.setItem('token', response.data.token)
      this.router.navigate(['/dashboard']);
    })
  }

}
