import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { hero } from '../../model/hero/hero'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listhero',
  imports: [CommonModule],
  templateUrl: './listhero.component.html',
  styleUrl: './listhero.component.scss'
})
export class ListheroComponent {
  heroes: hero[] | undefined; // Déclaration d'un tableau pour stocker les héros
  constructor(
    private heroService: HeroService

  ) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes) // Récupérez les héros depuis le service
  }

  deleteHero(heroId: number): void {
    this.heroService.deleteHero(heroId); // Supprimez un héros via le service
    this.heroes = this.heroService.getHeroes(); // Mettez à jour la liste des héros
  }

  goToHeroDetails(heroId: number): void {
    //this.router.navigate(['/infoHero', heroId]); // Naviguez vers la page de détails du héros
  }

}
