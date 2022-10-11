import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CruduserService } from 'src/app/servicio/cruduser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formUsers:FormGroup;
  
  constructor(
    public formulario:FormBuilder,
    private cruduserService:CruduserService,
    private ruteador:Router
  ) { 
    this.formUsers=this.formulario.group({

      correo:[''],
      contra:['']
    })
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log(this.formUsers.value);

    this.cruduserService.AgregarUser(this.formUsers.value).subscribe(respuesta=>{ 
    this.ruteador.navigateByUrl('/listar');
    });
}
}
