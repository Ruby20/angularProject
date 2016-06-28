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
var FavDirective = (function () {
    function FavDirective() {
        this.isFavorite = true;
        this.hovering = false;
    }
    FavDirective.prototype.onMouseEnter = function () {
        this.hovering = true;
    };
    FavDirective.prototype.onMouseLeave = function () {
        this.hovering = false;
    };
    Object.defineProperty(FavDirective.prototype, "mvFav", {
        set: function (value) {
            this.isFavorite = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.HostBinding('class.is-favorite'), 
        __metadata('design:type', Object)
    ], FavDirective.prototype, "isFavorite", void 0);
    __decorate([
        core_1.HostBinding('class.is.favorite-hovering'), 
        __metadata('design:type', Object)
    ], FavDirective.prototype, "hovering", void 0);
    __decorate([
        core_1.HostListener('mouseenter'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FavDirective.prototype, "onMouseEnter", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], FavDirective.prototype, "onMouseLeave", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FavDirective.prototype, "mvFav", null);
    FavDirective = __decorate([
        core_1.Directive({
            selector: '[mwFavs]',
        }), 
        __metadata('design:paramtypes', [])
    ], FavDirective);
    return FavDirective;
}());
exports.FavDirective = FavDirective;
//# sourceMappingURL=fav.directive.js.map