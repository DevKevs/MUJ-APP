import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string): any[] {
    if (texto === '') {
      console.log(arreglo);
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter(item =>{
     return item.nombreProducto.toLowerCase()
              .includes(texto);
    });
  }

}
