import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon: 'uil-estate'
    },
    {
      name: 'Buscar',
      icon: 'uil-search'
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil-chart'
    }
  ]

  accessLink: Array<any> = [
    {
      name: 'Crear lista',
      icon: 'uil-plus-square'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }
  ]

  customOptions: Array<any> = [
    {
      name: 'Mi lista °1'
    },
    {
      name: 'Mi lista °2'
    },
    {
      name: 'Mi lista °3'
    },
    {
      name: 'Mi lista °4'
    }
  ]
}
