import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { hero } from '../../model/hero/hero'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() newHero = new EventEmitter<hero>();

  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private heroService: HeroService, private router: Router) {
    this.heroForm = this.fb.group({
      nom: ["   ", [Validators.required, Validators.minLength(3), Validators.maxLength(35)]], 
      enRepos: [false, Validators.required]
    });
  }
  onSubmit(): void {
    if (this.heroForm.valid) {
      const formVal = this.heroForm.getRawValue(); 
      const newHero: hero = {
        id: Date.now(), 
        nom: formVal.nom, 
        enRepos: formVal.enRepos, 
        score: 0, 
      };
  
      this.heroService.addHero(newHero); 
      this.heroForm.reset(); 
      this.router.navigate(['/home']);
    } else {
      alert('Invalid form');
    }
  }
}
