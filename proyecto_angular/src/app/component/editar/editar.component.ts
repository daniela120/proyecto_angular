import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder} from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  elID:any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador:Router
  ) {
      this.elID=this.activeRoute.snapshot.paramMap.get('id');
      console.log(this.elID);
      this.crudService.ObtenerEmpleado(this.elID).subscribe(
        respuesta=>{
          console.log(respuesta);
          this.formularioDeEmpleados.setValue({     
              nombre:respuesta[0]['nombre'],
              correo:respuesta[0]['correo']
          });
        }
      );

      this.formularioDeEmpleados=this.formulario.group(
        {       
        nombre:[''],
        correo:['']
        }
      );

   }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeEmpleados.value);
    this.crudService.EditarEmpleado(this.elID,this.formularioDeEmpleados.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar');
    });
  }
}
