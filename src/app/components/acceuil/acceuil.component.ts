import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { hero } from '../../model/hero/hero';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-acceuil',
  imports: [FooterComponent],
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  heroes: hero[] = [];
 
   constructor(private heroService: HeroService) {}
 
   ngOnInit(): void {
     // Subscribe to heroes$ to get the latest list whenever it updates
     this.heroService.heroes$.subscribe((heroes) => {
      this.heroes = heroes
        .sort((a, b) => (b.score ?? 0) - (a.score ?? 0)) // Sort heroes by score in descending order
        .slice(0, 5); // Get the top 5 heroes
    });
  }
 

}