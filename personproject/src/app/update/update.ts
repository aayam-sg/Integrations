import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../services/person-service';
import { PersonModel } from '../Models/person-model';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit {
  person: PersonModel = {
    pid: 0, name: '', age: 0, gender: ''
  };
  constructor(private route: ActivatedRoute, private personService: PersonService, private router: Router){}
  ngOnInit(): void {
    const pid = Number(this.route.snapshot.paramMap.get('pid'));
    this.personService.getPersonById(pid).subscribe({
      next: (data) => {
        this.person = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  updatePerson(): void {
    this.personService.updatePerson(this.person).subscribe({
      next: () => {
        alert('Person Updated Successfully');
        this.router.navigate(['/person-list']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
