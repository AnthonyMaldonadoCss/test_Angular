import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})



export class TeacherComponent implements OnInit {



  ngOnInit() {

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
