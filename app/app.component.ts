import { Component,OnInit } from '@angular/core';
import {HeroService } from './HeroesComponent/hero.service';
import {HeroesComponent} from './HeroesComponent/heroes.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './HeroesComponent/hero-detail.component';

@Component({
    selector: 'hello-world',//'my-app',
    //directives: [ RedditComponent/**TodoListComponent, FriendComponent, TalkComponent, ROUTER_DIRECTIVES**/ ],
    directives:[ROUTER_DIRECTIVES],
    providers:[HeroService,ROUTER_PROVIDERS],
    templateUrl:'app/app.component.html',
    styleUrls: ['app/app.component.css']

})

@RouteConfig([
    {
        path:'/heroes',
        name:'Heroes',
        component:HeroesComponent
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component:DashboardComponent,
        useAsDefault:true
    },
    {
        path:'/detail/id',
        name:'HeroDetail',
        component:HeroDetailComponent
    }
])

export class AppComponent{
    title = 'Tour of heroes';

}

