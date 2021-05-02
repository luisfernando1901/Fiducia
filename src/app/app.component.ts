import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fiducia';

  constructor(private spinner: NgxSpinnerService){
    /** spinner starts on init */
    spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      spinner.hide();
    }, 5000);
  }

  ngOnInit() {

  }
}
