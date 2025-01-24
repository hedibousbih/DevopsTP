import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListheroComponent } from './listhero.component';
import { HttpClient } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';

describe('ListheroComponent', () => {
  let component: ListheroComponent;
  let fixture: ComponentFixture<ListheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListheroComponent,HeroService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
