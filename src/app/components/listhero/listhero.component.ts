import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { hero } from '../../model/hero/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listhero',
  templateUrl: './listhero.component.html',
  styleUrls: ['./listhero.component.scss'],
})
export class ListheroComponent implements OnInit {
  heroes: hero[] = [];
  showAllHeroes: boolean = true;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to heroes$ to get the latest list whenever it updates
    this.heroService.heroes$.subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  deleteHero(heroId: number): void {
    console.log('Attempting to delete hero with ID:', heroId); // Debugging
    this.heroService.deleteHero(heroId);
  
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['heroes']); 
    });
  }

  goToHeroDetails(heroId: number): void {
    this.router.navigate(['hero/', heroId]); 
  }
  masquer(): void {
    this.showAllHeroes = !this.showAllHeroes;
    this.heroService.heroes$.subscribe((heroes) => {
      if (this.showAllHeroes) {
        this.heroes = heroes;
      } else {
        this.heroes = heroes.filter((hero) => !hero.enRepos);
      }
    });
  }
}
