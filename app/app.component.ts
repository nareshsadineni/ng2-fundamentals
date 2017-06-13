import { Component, Input, OnInit } from '@angular/core';

import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
          <h1>{{title}}</h1> 
       		<ul class="heroes">
            <li *ngFor="let hero of heroes" (click)="this.onSelect(hero)" [class.selected]="hero === selectedHero" >
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
          
          <hero-detail [hero] = 'selectedHero'></hero-detail>
          `,
  providers: [HeroService],
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  heroService: HeroService;

  constructor(private heroSvc: HeroService) {
    this.heroService = heroSvc;
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getData(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getData();
  }

  //public getData() {
  //    this.http.get("http://webapiwithazuredatabase20170605114137.azurewebsites.net/api/values/1")
  //        .map(result => JSON.parse(result.json()));
  //}
}