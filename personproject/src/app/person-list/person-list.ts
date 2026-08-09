import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person-service';
import { PersonModel } from '../Models/person-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: false,
  templateUrl: './person-list.html',
  styleUrl: './person-list.css',
})
export class PersonList implements OnInit {
  persons: PersonModel[] = [];
  constructor(private personService: PersonService, private router: Router){}
  ngOnInit(){
    this.loadPersons();
  }
  loadPersons(){
    this.personService.getPerson().subscribe(
      data => {
        this.persons = data;
      },
      error => {
        console.error("Error fetching products:", error);
      }
    );
  }
  onClickUpdate(person: PersonModel): void{
    this.router.navigate(['/update', person.pid]);
  }
  onClickDelete(pid: number): void{
    if(confirm('Are you sure you want to delete this person?')){
      this.personService.deletePerson(pid).subscribe({
        next: () => {
          console.log("Person deleted");
          this.loadPersons();
        },
        error: (err) => {
          console.error('Error Deleting person:', err);
        }
      });
    }
    }
}
