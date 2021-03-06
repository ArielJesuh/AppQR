import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) { }


  //Creacion de Nombre y Contraseña
  elNombre = new FormControl('');
  laPass = new FormControl('');

  // Creacion de la (PERSONA)
  persona = new FormGroup({
    elNombre: new FormControl(''),
    laPass: new FormControl('')
  });

  //AUXILIAR
  perso: any;

  // Arreglo que guarda los Usuarios(PERSONAS)
  users = new Array();

  //MOSTRAR EN CONSOLA LOS USUARIOS
  cambiarDatos() {
    console.log(this.users);
  }
  //MOSTRAR PERSONA  Y ADEMAS LO AÑADE AL ARREGLO DE USUARIOS
  grabar() {
    console.log(this.persona.value);
    this.perso = {
      nombre: this.persona.controls.elNombre.value,
      pass: this.persona.controls.laPass.value
    };
    this.users.push(this.perso);
    var data = this.users;
    //GUARDAR EN LOCALSTORAGE.
    localStorage.setItem('data', JSON.stringify(data));
  }
  listar() {
    console.log(localStorage.getItem('data'));
  }
  // Preguntar si el usuario ingresado existe.
  revisarUsuario(usuario: String) {
    for (var i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element[0] == usuario) {
        return true;
      }
      else {
        return false;
      }
    }
  }

  getPasswordFromUser(usuario: String) {
    for (var i = 0; i < this.users.length; i++) {
      const element = this.users[i];
      if (element[0] == usuario) {
        return element[1];
      }
      else {
        return false;
      }
    }
  }

  recuperarContraseña(usuario: String) {
    if(this.revisarUsuario(usuario)){
      console.log(this.getPasswordFromUser(usuario));
      
    }
  }

  goLogin(){
    this.route.navigate(['/login']);
  }

  goRegister(){
    this.route.navigate(['/register']);
  }

  goForgot(){
    this.route.navigate(['/forgot-p']);
  }
}


