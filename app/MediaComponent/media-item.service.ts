import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class MediaItemService{


  constructor(private http:Http){

  }

  get(){
      return this.http.get('mediaitems')
                      .map( response=>{ //observable
                          return response.json().mediaItems;
          });
  }


    /**
     * Data for the service
     * @type {any[]}
     */
  mediaItems:any = [{
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1294166565384,
    isFavorite: false
  },{
    id: 2,
        name: "The Small Tall",
    medium: "Movies",
    category: "Comedy",
    year: 2015,
    watchedOn: null,
    isFavorite: true
    }, {
    id: 3,
        name: "The Redemption",
        medium: "Movies",
        category: "Action",
        year: 2016,
        watchedOn: null,
        isFavorite: false
    }, {
    id: 4,
        name: "Hoopers",
        medium: "Series",
        category: "Drama",
        year: null,
        watchedOn: null,
        isFavorite: true
    }, {
    id: 5,
        name: "Happy Joe: Cheery Road",
        medium: "Movies",
        category: "Action",
        year: 2015,
        watchedOn: 1457166565384,
        isFavorite: false
    }];


    /**
     * Methods on the service
     */

    getItems(){
        return this.mediaItems;
    }

    addItems(item){
        this.mediaItems.push(item);
    }

    deleteItem(item){
        var index = this.mediaItems.indexOf(item);
        if(index >= 0){
            this.mediaItems.splice(index,1);
        }


    }



}