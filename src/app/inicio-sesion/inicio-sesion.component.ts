import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor(private auth: AuthService, private router:Router) { }

  iniciar={
    correo:'',
    contrasenia:''
  }

  ngOnInit(): void {
  }

  login(){
    this.auth.loginUsuario(this.iniciar).subscribe(
      (res)=>{
        console.log(res)
      },
      (err) => console.log(err)
    );
  }

}
