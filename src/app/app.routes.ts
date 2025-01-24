import { Routes } from '@angular/router';

import { ListheroComponent } from './components/listhero/listhero.component';
import { HeroinfoComponent } from './components/heroinfo/heroinfo.component';
import { FormComponent } from './components/form/form.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    { path: 'home', component: ListheroComponent },
    { path: 'hero/:id', component: HeroinfoComponent },
    { path: 'add-hero', component: FormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
