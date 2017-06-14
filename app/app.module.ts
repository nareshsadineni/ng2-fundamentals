import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { PageNotFoundComponent } from './PageNotFoundModule/app.not-found.component';
import { CrisisComponent } from './CrisisCenterModule/app.crisis.component'

const appRoutes: Routes = [
    { path: 'crisis-center', component: CrisisComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
    {
        path: 'heroes',
        component: HeroesComponent,
        data: { title: 'Heroes List' }
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        PageNotFoundComponent,
        CrisisComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }