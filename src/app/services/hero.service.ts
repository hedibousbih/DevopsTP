import { Injectable } from '@angular/core';
import { hero } from '../model/hero/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: hero[] = [
    { id: 1, nom: 'Superman', score: 95, enRepos: true },
    { id: 2, nom: 'Batman', score: 90, enRepos: false },
    { id: 3, nom: 'Wonder Woman', score: 92, enRepos: true }
  ];

  getHeroes(): hero[] {
    return this.heroes;

  }

  getHeroById(id: number): hero | undefined {
    return this.heroes.find(hero => hero.id === id);
  }

  deleteHero(id: number): void {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }

  constructor() {}
}
