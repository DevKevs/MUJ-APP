import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any;
  search = "";
  user:any;
  userdata: any;
  result: any;
  //request body variables
  id: any;
  name: any;
  resume: any;
  price: any;
  type: any;
  img: any;
  quantity = 1;
  comment: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetProducts()
    this.storageData()
  }
  GetProducts(){
    this.http.get('https://localhost:44370/api/Productos').subscribe(obj => {
      this.products = obj
    })
  }
  pickData(obj: any){
    this.name = obj.nombreProducto
    this.resume = obj.descripcion
    this.price = obj.precio
    this.type = obj.categoria
    this.img = obj.foto
    this.id = obj.id
  }
  movieFilter(event: any){
    this.search = event.target.value
  }
  storageData(){
    this.userdata = sessionStorage.getItem('MyUser')
    this.user = JSON.parse(this.userdata)
    console.log(this.user)
  }
  postOrder(){
    const requestBody={
      nombreProducto: this.name,
      descripcion: this.resume,
      precio: this.price,
      foto: this.img,
      categoria: this.type,
      cantidad: this.quantity,
      estado: "En espera",
      idUsuario: this.user.id,
      comentario: this.comment
    }
    this.http.post('https://localhost:44370/api/Pedidos', requestBody).subscribe(obj => {
      this.result = obj
      this.confirmAlert()
    }, (error) => {
      this.erroalert()
    });
  }
  confirmAlert(){
    Swal.fire('Gracias!', 'su orden ha sido procesada satisfactoriamente!', 'success')
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
