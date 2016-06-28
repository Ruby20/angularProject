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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var media_item_service_1 = require('./media-item.service');
/**
 * using the FormBuilder service we can get rid of the ControlGroup component
 */
var MediaItemFormComponent = (function () {
    function MediaItemFormComponent(formBuilder, service, lookupLists) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.lookupLists = lookupLists;
    }
    MediaItemFormComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            'medium': new common_1.Control('Movies'),
            'name': new common_1.Control('', common_1.Validators.compose([common_1.Validators.required,
                common_1.Validators.pattern('[\\w\\-\\s\\/]+')])),
            'category': new common_1.Control(''),
            'year': new common_1.Control('', this.yearValidator)
        });
    };
    //custom validators
    MediaItemFormComponent.prototype.yearValidator = function (control) {
        if (control.value.trim().length === 0)
            return null;
        var year = parseInt(control.value);
        var minYear = 1900;
        var maxYear = 2100;
        if (year >= minYear && year <= maxYear)
            return null;
        return { 'year': true };
    };
    MediaItemFormComponent.prototype.onSubmit = function (mediaItem) {
        console.log(mediaItem);
        this.service.addItems(mediaItem);
    };
    MediaItemFormComponent = __decorate([
        core_1.Component({
            selector: 'media-item-form',
            // providers:[MediaItemService],
            templateUrl: 'app/MediaComponent/media-item-form.component.html',
            styleUrls: ['app/MediaComponent/media-item-form.component.css']
        }),
        __param(2, core_1.Inject('LOOKUP_LISTS')), 
        __metadata('design:paramtypes', [common_1.FormBuilder, media_item_service_1.MediaItemService, Object])
    ], MediaItemFormComponent);
    return MediaItemFormComponent;
}());
exports.MediaItemFormComponent = MediaItemFormComponent;
//# sourceMappingURL=media-item-form.component.js.map