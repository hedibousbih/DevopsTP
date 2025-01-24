import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { hero } from '../model/hero/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroes: BehaviorSubject<hero[]> = new BehaviorSubject<hero[]>([
    { id: 1, nom: 'Superman', score: 95, enRepos: true },
    { id: 2, nom: 'Batman', score: 90, enRepos: false },
    { id: 3, nom: 'Wonder Woman', score: 92, enRepos: true },
  ]);
  private currentId: number = 3; 
  heroes$: Observable<hero[]> = this.heroes.asObservable();

  getHeroes(): hero[] {
    return this.heroes.getValue();
  }

  getHeroById(id: number): hero | undefined {
    return this.heroes.getValue().find((hero) => hero.id === id);
  }

  deleteHero(id: number): void {
    const updatedHeroes = this.heroes.getValue().filter((hero) => hero.id !== id);
    this.heroes.next(updatedHeroes);
  }



  /**
   * Incrémente le score d'un héros par son id
   * @param id Id du héros dont on souhaite augmenter le score
   */
  voteForHero(id: number): void {
    const heroes = this.heroes.getValue(); // Récupère la liste actuelle des héros
    const hero = heroes.find((h) => h.id === id);
  
    if (hero && typeof hero.score === 'number') {
      // Vérifie que le héros existe et que le score est bien un nombre
      hero.score++;
    }
  
    this.heroes.next(heroes); // Met à jour l'état des héros
  }

  /**
   * Décrémente le score d'un héros par son id
   * @param id Id du héros dont on souhaite diminuer le score
   */
  downvoteHero(id: number): void {
    const heroes = this.heroes.getValue();
    const hero = heroes.find((h) => h.id === id);
    if (hero) {
      if (hero && typeof hero.score === 'number') {
        hero.score--;
      }
    }
    this.heroes.next(heroes);
  }

  /**
   * Ajoute un nouveau héros à la liste
   * @param newHero Nouveau héros à ajouter
   */
  addHero(newHero: hero): void {
    this.currentId += 1;
    newHero.id = this.currentId;
    const heroes = this.heroes.getValue();
    heroes.push(newHero);
    this.heroes.next(heroes);
  }

  /**
   * Modifie l'état de repos d'un héros
   * @param id Id du héros dont on veut modifier l'état
   * @param enRepos Nouveau statut de repos
   */
  toggleHeroRest(id: number, enRepos: boolean): void {
    const heroes = this.heroes.getValue();
    const hero = heroes.find((h) => h.id === id);
    if (hero) {
      hero.enRepos = enRepos;
    }
    this.heroes.next(heroes);
  }

  constructor() {}
}
