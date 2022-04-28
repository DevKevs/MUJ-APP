import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  result: any;
  orders: any;
  //request body variables
  id: any;
  name: any;
  resume: any;
  price: any;
  type: any;
  img: any;
  quantity = 1;
  comment: any;
  state: any;
  userId: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetOrders()
  }
  GetOrders(){
    this.http.get('https://localhost:44370/api/Pedidos').subscribe(obj => {
      this.orders = obj
    })
  }
  confirmAlert(){
    Swal.fire('Bien!', 'El estado de su orden ha sido actualizado!', 'success')
  }
  erroalert()
  {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo salio mal!',
    })
  }
  pickData(obj: any){
    this.name = obj.nombreProducto
    this.resume = obj.descripcion
    this.price = obj.precio
    this.type = obj.categoria
    this.img = obj.foto
    this.id = obj.id
    this.quantity = obj.cantidad
    this.comment = obj.comentario
    this.state = obj.estado
    this.userId = obj.idUsuario
  }
  putOrder(){
    const requestBody={
      id: this.id,
      nombreProducto: this.name,
      descripcion: this.resume,
      precio: this.price,
      foto: this.img,
      categoria: this.type,
      cantidad: this.quantity,
      estado: this.state,
      idUsuario: this.userId,
      comentario: this.comment
    }
    this.http.put('https://localhost:44370/api/Pedidos/'  + this.id, requestBody).subscribe(obj => {
      this.result = obj
      this.confirmAlert()
      this.GetOrders()
    }, (error) => {
      this.erroalert()
    });
  }
}
