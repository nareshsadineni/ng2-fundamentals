import { Injectable } from '@angular/core'

import { Heroes } from './mock-heroes'
import { Hero } from './hero'

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(Heroes);
    }

     getHeroesSlowly(): Promise<Hero[]> {
         return new Promise(resolve => {
             setTimeout(() => resolve(this.getHeroes()), 2000);
         });
     }
}