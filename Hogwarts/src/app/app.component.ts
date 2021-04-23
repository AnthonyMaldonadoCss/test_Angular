import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Hogwarts';

  form1: any;

  datosPersonajes = null;
  datoEstudiante = null;
  datoProfesores = null;

  constructor(public json: JsonService) {
    this.json.getJson('http://hp-api.herokuapp.com/api/characters/house/gryffindor').subscribe((res: any) => {
      this.datosPersonajes = res;
    });

    this.json.getJson('http://hp-api.herokuapp.com/api/characters/students').subscribe((res: any) => {
      this.datoEstudiante = res;
    })

    this.json.getJson('http://hp-api.herokuapp.com/api/characters/staff').subscribe((res: any) => {
      this.datoProfesores = res;
    })

    this.form1 = new FormGroup({})

  }

}

