import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  Empleados:any;

  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
      this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
        console.log(respuesta);
        this.Empleados=respuesta;
      });

  }

  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea Borrar el Registro?")){
      this.crudService.BorrarEmpleado(id).subscribe((respuesta)=>{
        this.Empleados.splice(iControl,1);
      });
    }

  }

}
