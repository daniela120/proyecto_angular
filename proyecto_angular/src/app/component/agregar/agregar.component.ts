import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioDeEmpleados:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 
      this.formularioDeEmpleados=this.formulario.group({

        nombre:[''],
        correo:['']
      })

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
      console.log(this.formularioDeEmpleados.value);

      this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{ 
      this.ruteador.navigateByUrl('/listar');
      });
  }

}
