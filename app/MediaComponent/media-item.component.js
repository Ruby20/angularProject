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
var core_1 = require('@angular/core');
var media_component_1 = require('./media.component');
var category_list_pipe_1 = require('./category-list.pipe');
var media_item_service_1 = require('./media-item.service');
var MediaItemComponent = (function () {
    function MediaItemComponent(service) {
        this.service = service;
        this.medium = '';
        this.mediaItems = [];
    }
    MediaItemComponent.prototype.ngOnInit = function () {
        this.getMediaItems(this.medium);
    };
    MediaItemComponent.prototype.onMediaItemDeleted = function (mediaItem) {
        this.service.deleteItem(mediaItem);
    };
    MediaItemComponent.prototype.getMediaItems = function (medium) {
        var _this = this;
        this.medium = medium;
        this.service.getItems()
            .subscribe(function (mediaItems) {
            _this.mediaItems = mediaItems;
        });
    };
    MediaItemComponent = __decorate([
        core_1.Component({
            selector: 'media-item-list',
            directives: [media_component_1.MediaComponent],
            pipes: [category_list_pipe_1.CategoryListPipe],
            templateUrl: 'app/MediaComponent/media-item-list.component.html',
            styleUrls: ['app/MediaComponent/media-item-list.component.css']
        }), 
        __metadata('design:paramtypes', [media_item_service_1.MediaItemService])
    ], MediaItemComponent);
    return MediaItemComponent;
}());
exports.MediaItemComponent = MediaItemComponent;
//# sourceMappingURL=media-item.component.js.map