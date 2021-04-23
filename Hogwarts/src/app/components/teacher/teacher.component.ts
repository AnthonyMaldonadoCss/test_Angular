import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})



export class TeacherComponent implements OnInit {

  lista: any;


  ngOnInit(): void {
    this.lista = [];
    let arreglo = JSON.parse(localStorage.getItem("actividades"));
    if (arreglo != null)
      for (let actividad of arreglo)
        this.lista.push(actividad);
  }

  agregar() {
    this.lista.push(this.name.value);
    localStorage.setItem('actividades', JSON.stringify(this.lista));
    this.name.setValue('');
  }

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    name: ['Harry Potter'],
    patronus: [''],
    age: ['']
  });

  submit() {
    console.log(this.registerForm.value);
  }

  refrescar() {
    this.registerForm.patchValue({
      name: '',
      patronus: '',
      age: ''
    });
  }

}
