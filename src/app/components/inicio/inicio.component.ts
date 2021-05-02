import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService){
    /** spinner starts on init */
    spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      spinner.hide();
    }, 3000);
  }

  ngOnInit(): void {
  }

}
