import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private auth:AngularFireAuth,
              private router:Router) { }

  ngOnInit(): void {
  }

  ingresar(email:string,password:string){
    this.auth.signInWithEmailAndPassword(email,password)
    .then(params=>this.router.navigate(['fiduciaAdmin/content']));
    
  }
}
