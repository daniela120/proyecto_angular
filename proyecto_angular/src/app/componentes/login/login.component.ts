import { Component, OnInit } from '@angular/core';

import { CruduserService } from 'src/app/servicio/cruduser.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //contacto: FormGroup;
  submitted = false

  contacto2 = {
    id: null,
    correo: null,
    contra: null
  }

  constructor(
    private cruduserService:CruduserService,
    private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ){}
  ngOnInit(): void {
    /*this.contacto = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contra: ['', Validators.required]
    });*/
  }
/*
  get f() {return this.contacto.controls; }

  IniciarSeccion() { //funcion de formulario iniciar session
    this.submitted = true;

    if (this.contacto.invalid){
      return;
    }
    this.Iniciar_seccion(this.contacto);
  }

  Iniciar_seccion(contacto){

    this.cruduserService.user(contacto.vale.correo,contacto.vale.contra)
  }*/
}
