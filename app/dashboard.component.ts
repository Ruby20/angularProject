import { Component,OnInit } from '@angular/core';
import {HeroService } from './HeroesComponent/hero.service';
import {Hero} from './HeroesComponent/hero';
import { Router } from '@angular/router-deprecated';


@Component({
    selector: 'my-dash',
    //directives: [ RedditComponent/**TodoListComponent, FriendComponent, TalkComponent, ROUTER_DIRECTIVES**/ ],
    directives:[],
    providers:[],
    templateUrl:'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})

export class DashboardComponent implements OnInit{
       ngOnInit() {
        this.service.getHeroes()
        .then(heroes =>
                this.heroes = heroes.slice(1,6));
       }
       heroes:Hero[]=[];

       constructor(private service:HeroService, private router:Router){}

       gotoDetail(hero:Hero){

           let link = ['HeroDetail', {id: hero.id}];
           this.router.navigate(link);
       }


}