import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService } from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';
import { Router } from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl:'app/HeroesComponent/heroes.component.html',
    styleUrls:['app/HeroesComponent/heroes.component.css'],
    directives:[HeroDetailComponent],
    providers:[]
})

export class HeroesComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;
    private addingHero:boolean = false;
    error:any;

    constructor(private service:HeroService,private router:Router){}

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero:Hero){
        this.selectedHero = hero;
    }

    getHeroes():void {
        this.service.getHeroes().then(
                heroes =>{
                this.heroes = heroes;
            }
        );
    }

    gotoDetail(){
        this.router.navigate(['HeroDetail',{
            id:this.selectedHero.id
        }]);
    }

    addHero(){
        this.addingHero = true;
        this.selectedHero= null;
    }

    close(savedHero:Hero){
        this.addingHero=false;
        if(savedHero){this.getHeroes();}
    }

    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.service
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error); // TODO: Display error message
    }


}