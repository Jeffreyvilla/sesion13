import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividad-13';

  jsonTexto = [
    {
      apellido: 'Alexander',
      casado: false,
      direccion: 'Calle 35 peru',
      nombre: 'Diego',
      telefono: 3855541
    },
    {
      apellido: 'Arotoma',
      casado: true,
      direccion: 'Av peru 156',
      nombre: 'Jeffrey',
      telefono: 888888

    },
    {
      apellido: 'lazo',
      casado: true,
      direccion: 'Calle 66 peru',
      nombre: 'Karen',
      telefono: 22222

    }
  ];
}
