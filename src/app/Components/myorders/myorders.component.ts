import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})
export class MyordersComponent implements OnInit {

  user:any;
  userdata: any;
  result: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.storageData()
    this.GetMyOrders()
  }
  storageData(){
    this.userdata = sessionStorage.getItem('MyUser')
    this.user = JSON.parse(this.userdata)
    console.log(this.user)
  }
  GetMyOrders(){
    this.http.get('https://localhost:44370/api/Pedidos/usuario/' + this.user.id).subscribe(obj => {
      this.result = obj
    })
  }

}
