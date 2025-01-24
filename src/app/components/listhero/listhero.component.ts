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
  
    // Refresh the page
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['']); // Replace '/listHero' with your actual route
    });
  }

  goToHeroDetails(heroId: number): void {
    this.router.navigate(['infoHero/', heroId]); // Navigates to the hero details route
  }
}
