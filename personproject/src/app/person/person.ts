import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person-service';
import { PersonModel } from '../Models/person-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  standalone: false,
  templateUrl: './person.html',
  styleUrl: './person.css',
})
export class Person {
  person !: FormGroup;
  constructor(private fb: FormBuilder, private personService: PersonService, private router: Router){
    this.person = this.fb.group({
      pid: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.person.valid){
      const newPerson: PersonModel = this.person.value;
      this.personService.addPerson(newPerson).subscribe(
        response => {
          console.log('Person added: ', response);
          this.person.reset();
          this.router.navigate(['/person-list']);
        },
        error => {
          console.error("Error Adding Person: ", error);
        }
      )
    }
  }
}
