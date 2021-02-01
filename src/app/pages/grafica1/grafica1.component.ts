import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels0: string[] = ['Moodle', 'Página', 'Redes'];

  public data0 = [
    [35, 8, 30],
  ];

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data1 = [
    [10, 15, 40],
  ];

  public labels2: string[] = ['Remera', 'Pantalon', 'Campera'];

  public data2 = [
    [25, 2, 60],
  ];

  public labels3: string[] = ['Asado', 'Carbón', 'Ensalada'];

  public data3 = [
    [20, 2, 15],
  ];

}
