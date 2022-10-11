import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './component/agregar/agregar.component';
import { EditarComponent } from './component/editar/editar.component';
import { ListarComponent } from './component/listar/listar.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';



const routes: Routes = [

    {path: '', pathMatch:'full', redirectTo:'listar'},
    {path: 'agregar', component:AgregarComponent},
    {path: 'listar', component: ListarComponent},
    {path: 'editar/:id', component:EditarComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
