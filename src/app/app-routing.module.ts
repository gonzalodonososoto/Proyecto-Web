import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoemergenciaComponent } from './contactoemergencia/contactoemergencia.component';
import { ForoComponent } from './foro/foro.component';
import { HomeComponent } from './home/home.component';
import { InformateComponent } from './informate/informate.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'inicio-sesion', component:InicioSesionComponent},
  {path: 'foro', component:ForoComponent},
  { path: 'quienessomos', component:QuienesSomosComponent},
  { path: 'contactosemergencia', component:ContactoemergenciaComponent},
  { path: 'informate', component:InformateComponent},
  {path: 'preguntasfrecuentes', component:PreguntasfrecuentesComponent },
  { path: 'registro', component:RegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
