import { Routes } from '@angular/router';

import { ListheroComponent } from './components/listhero/listhero.component';
import { HeroinfoComponent } from './components/heroinfo/heroinfo.component';
import { FormComponent } from './components/form/form.component';
import { ErrorComponent } from './components/error/error.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';


export const routes: Routes = [
    { path: 'home', component: AcceuilComponent },
    { path: 'heroes', component: ListheroComponent },
    { path: 'hero/:id', component: HeroinfoComponent },
    { path: 'addhero', component: FormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent },
];
