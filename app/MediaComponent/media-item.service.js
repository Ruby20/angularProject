"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var MediaItemService = (function () {
    function MediaItemService(http) {
        this.http = http;
        /**
         * Data for the service
         * @type {any[]}
         */
        this.mediaItems = [{
                id: 1,
                name: "Firebug",
                medium: "Series",
                category: "Science Fiction",
                year: 2010,
                watchedOn: 1294166565384,
                isFavorite: false
            }, {
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
    }
    MediaItemService.prototype.get = function () {
        return this.http.get('mediaitems')
            .map(function (response) {
            return response.json().mediaItems;
        });
    };
    /**
     * Methods on the service
     */
    MediaItemService.prototype.getItems = function () {
        return this.mediaItems;
    };
    MediaItemService.prototype.addItems = function (item) {
        this.mediaItems.push(item);
    };
    MediaItemService.prototype.deleteItem = function (item) {
        var index = this.mediaItems.indexOf(item);
        if (index >= 0) {
            this.mediaItems.splice(index, 1);
        }
    };
    MediaItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MediaItemService);
    return MediaItemService;
}());
exports.MediaItemService = MediaItemService;
//# sourceMappingURL=media-item.service.js.map