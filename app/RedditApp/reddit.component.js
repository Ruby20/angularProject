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
//import { SubmittedArticlesComponent } from './RedditApp/submitted-articles.component';
var RedditComponent = (function () {
    function RedditComponent() {
        this.componentName = 'RedditComponent';
    }
    RedditComponent.prototype.addArticle = function (title, link) {
        console.log("Adding article title : " + title.value + " link: " + link.value);
    };
    RedditComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            // directives:[SubmittedArticlesComponent],
            template: "\n               <h2>I am in {{componentName}}</h2>\n               <form class = \"ui large form segment\">\n                  <h1 class = \"ui header\">Add a Link</h1>\n                  <div class=\"field\">\n                   <label for=\"title\">Title</label>\n                   <input name =\"title\" #newtitle>\n                  </div>\n                  <div class=\"field\">\n                    <label for=\"link\">Link</label>\n                    <input name=\"link\" #newlink>\n                  </div>\n                 <button (click) = \"addArticle(newtitle,newlink)\"\n                 class=\"ui positive right floated button\">Submit link</button>\n              </form>\n              <div class=\"data-grid\">\n                 <my-article *ngFor=\"let foo of articles\"\n                  [article] = \"foo\"\n                 ></my-article>\n              </div>\n               "
        }), 
        __metadata('design:paramtypes', [])
    ], RedditComponent);
    return RedditComponent;
}());
exports.RedditComponent = RedditComponent;
//# sourceMappingURL=reddit.component.js.map