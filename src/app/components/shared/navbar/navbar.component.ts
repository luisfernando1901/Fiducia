import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Categorías',
        items: [
          {
            label: 'Ramos',
            items: [
              { label: 'Project' },
              { label: 'Other' },
            ]
          },
          { label: 'Box floral' },
          { label: 'Peluches' },
          { label: 'Globos' },
          { label: 'Cajas pe' }
        ]
      }
    ];
  }

}
