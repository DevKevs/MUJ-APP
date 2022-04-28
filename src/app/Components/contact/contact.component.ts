import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  result: any
  //request body variables
  issuerName: any;
  mail: any;
  message: any;
  ok = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postIssue(){
    const requestBody={
      nombreEmisor: this.issuerName,
      correo: this.mail,
      queja1: this.message
    }
    this.http.post('https://localhost:44370/api/Quejas', requestBody).subscribe(obj => {
      this.result = obj
      this.confirmAlert()
      this.issuerName = ""
      this.mail = ""
      this.message = ""
    }, (error) => {
      this.erroalert()
    });
  }
  confirmAlert(){
    Swal.fire('Gracias!', 'su mensaje fue enviado satisfactoriamente!', 'success')
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
