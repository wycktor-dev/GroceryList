import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  item: string = '';
  lista: ItemLista[] = [];

  constructor() {
    this.loadItems();
  }

  loadItems() {
    const listaStorage = localStorage.getItem('lista');
    if (listaStorage) {
      this.lista = JSON.parse(listaStorage);
    }
  }

  addItem() {
    if (!this.item.trim()) return; // Evita adicionar itens vazios

    const itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1; // Considere um ID mais robusto
    itemLista.comprado = false;

    this.lista.push(itemLista);
    this.updateLocalStorage();
    this.item = '';
    console.table(this.lista);
  }

  riscarItem(item: ItemLista) {
    item.comprado = !item.comprado;
    this.updateLocalStorage();
  }

  removerItem(item: ItemLista) {
    const index = this.lista.indexOf(item);
    if (index > -1) {
      this.lista.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  limparLista() {
    this.lista = [];
    localStorage.removeItem('lista');
  }

  private updateLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(this.lista));
  }
}