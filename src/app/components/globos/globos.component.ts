import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globos',
  templateUrl: './globos.component.html',
  styleUrls: ['./globos.component.css']
})
export class GlobosComponent implements OnInit {
  sources:string[] = ["../../../assets/icons/gift.jpeg","../../../assets/icons/flower.jpeg",
                      "../../../assets/icons/bunny.jpeg","../../../assets/icons/baloon.jpeg ",
                      "../../../assets/icons/diamond.jpeg"];
  categorias:string[] = ['Boxes','Flores','Peluches','Globos','Sorpresas'];
  globos_estructura = {
    sources1: ["../../../assets/icons/regalo.svg","../../../assets/icons/regalo.svg",
    "../../../assets/icons/regalo.svg","../../../assets/icons/regalo.svg",
    "../../../assets/icons/regalo.svg"],
    categorias1: ['Boxes','Flores','Peluches','Globos','Sorpresas']

  };
  constructor() { }

  ngOnInit(): void {
  }

}
