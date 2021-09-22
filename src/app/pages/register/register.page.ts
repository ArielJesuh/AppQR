import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  users = JSON.parse(localStorage.getItem('data'));

  usuario = new FormControl('');
  pass = new FormControl('');

  usuarioRecuperado = new FormGroup({
    usuario: new FormControl(''),
    pass: new FormControl('')
  })

  revisarUsuario(nombre: string){
    
    for (var i = 0; i < this.users.length; i++) {
      console.log("Comparamos ")
      console.log("this.users[",i,"]"," = ",this.users[i].nombre);
      console.log("y","nombre: string de funcion revisarUsuario = ",nombre);
      if (this.users[i] === nombre) {
        return true;
      }
    }
  }

  registrar() {
    if(this.revisarUsuario(this.usuarioRecuperado.controls.name.value)){
      console.log("Intentando registrar usuario.");
    }
    else{
      console.log("El usuario ya existe.");
    }
  }

  goForgot(){
    this.route.navigate(['/forgot-p']);
  }

}
