import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit, OnDestroy {

  products: any;
  product: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  ok = false;
  result: any;

  //request body variables
  id: any;
  name: any;
  resume: any;
  price: any;
  type: any;
  img: any;
  auxImg = "https://www.creativefabrica.com/wp-content/uploads/2020/02/12/Food-Logo-Graphics-1-99-580x386.jpg";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetProducts()
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      dom: 'Bfrtip',
    }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  loadPhoto(e: any){
    console.log(e)
    this.img = e[0].base64;
  }

  GetProducts(){
    this.http.get('https://localhost:44370/api/Productos').subscribe(obj => {
      this.products = obj
      this.dtTrigger.next(this.products);
    })
  }
  ReloadProducts(){
    this.http.get('https://localhost:44370/api/Productos').subscribe(obj => {
      this.products = obj
    })
  }
  PostProduct(){
    const requestBody={
      nombreProducto: this.name,
      descripcion: this.resume,
      precio: this.price,
      foto: this.img,
      categoria: this.type
    }
    this.http.post('https://localhost:44370/api/Productos', requestBody).subscribe(obj => {
      this.result = obj
      this.confirmAlert()
      this.ReloadProducts()
    }, (error) => {
      this.erroalert()
    });
  }
  pickData(obj: any){
    this.name = obj.nombreProducto
    this.resume = obj.descripcion
    this.price = obj.precio
    this.type = obj.categoria
    this.img = obj.foto
    this.id = obj.id
  }
  clear(){
    this.name = null
    this.resume = null
    this.price = null
    this.type = null
    this.img = null
    this.ok = false
  }
  PutProduct(){
    const requestBody={
      id: this.id,
      nombreProducto: this.name,
      descripcion: this.resume,
      precio: this.price,
      foto: this.img,
      categoria: this.type
    }
    this.http.put('https://localhost:44370/api/Productos/'+this.id, requestBody).subscribe(obj => {
      this.result = obj

      this.ReloadProducts()
      this.confirmAlert()
    }, (error) => {
      this.erroalert()
    });
  }
  DeleteProduct(){
    this.http.delete('https://localhost:44370/api/Productos/'+this.id).subscribe(obj => {
      this.result = obj
      this.confirmAlert()
      this.ReloadProducts()
    }, (error) => {
      this.erroalert()
    })
  }
  confirmAlert(){
    Swal.fire('Excelente!', 'Operacion exitosa!', 'success')
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
