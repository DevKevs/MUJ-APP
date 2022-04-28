import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: any;
  passw: any;
  result: any;
  ok = false;
  message:any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }
  authenticate(){
    const requestBody={
      nombreUsuario: this.username,
      contrasena: this.passw,
    }
    this.http.post('https://localhost:44370/api/Authenticate', requestBody).subscribe(obj => {
      this.result = obj
      sessionStorage.setItem('MyUser', JSON.stringify(this.result))
      this.route.navigate(['home'])
      console.log(this.result)
    }, (error) => {
      this.erroalert()
    });
  }
  erroalert()
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal!',
    })
  }

}
