import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonModel } from '../Models/person-model';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private apiUrl = 'http://localhost:5000/persons';
    constructor(private http: HttpClient) {}

    getPerson(): Observable<PersonModel[]>{
        return this.http.get<PersonModel[]>(this.apiUrl+ "/all");
    }

    getPersonById(pid: number): Observable<PersonModel>{
        return this.http.get<PersonModel>(`${this.apiUrl}/${pid}`);
    }

    addPerson(person: PersonModel): Observable<PersonModel>{
        return this.http.post<PersonModel>(this.apiUrl, person);
    }

    updatePerson(person: PersonModel): Observable<PersonModel>{
        return this.http.put<PersonModel>(`${this.apiUrl}/${person.pid}`, person);
    }
    deletePerson(pid: number): Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${pid}`);
    }
}
