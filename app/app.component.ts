import { Component } from '@angular/core';
// import {CommonModule} from '@angular/common'

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>ID: {{hero.id}} </label> </div>
        <div><label> Name: </label> <input [(ngModel)]= "hero.name" placeholder="name"/> </div>
        
        <ul>
        <li *ngFor="let hero of heroes">
        <label>{{hero.id}}</label>
        <label>{{hero.name}}</label>
        </li>
        </ul>
        `
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: "Windstorm"
    };

    Heroes: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    heroes = this.Heroes;

    //ngOnInit() {
    //    this.getData();
    //}

    //public getData() {
    //    this.http.get("http://webapiwithazuredatabase20170605114137.azurewebsites.net/api/values/1")
    //        .map(result => JSON.parse(result.json()));
    //}
}

export class Hero {
    id: number;
    name: string;
}