import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComponent } from "./lista/lista.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lista-compras';
}
