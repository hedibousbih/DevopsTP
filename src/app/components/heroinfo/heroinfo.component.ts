import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { hero } from '../../model/hero/hero';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-heroinfo',
  imports: [CommonModule],
  templateUrl: './heroinfo.component.html',
  styleUrl: './heroinfo.component.scss'
})
export class HeroinfoComponent {
  hero: hero | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = this.heroService.getHeroById(id);
  }

  vote(value: number): void {
    if (this.hero) {
      this.heroService.voteForHero(this.hero.id);
    }
  }
}
