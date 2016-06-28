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
//import { RedditComponent } from './RedditApp/reddit.component.ts';
//import { Article } from './RedditApp/Article';
var SubmittedArticlesComponent = (function () {
    // articles:Article[];
    //article:Article;
    function SubmittedArticlesComponent() {
        this.componentName = 'SubmittedArticlesComponent';
    }
    SubmittedArticlesComponent = __decorate([
        core_1.Component({
            selector: 'my-article',
            template: "\n               <div class=\"four wide column center aligned votes\">\n                <div class=\"ui statistic\">\n                <div class=\"value\">\n                {{ article.vote }}\n                </div>\n                 <div class=\"label\">\n                    Points\n                 </div>\n                 </div>\n                </div>\n                <div class=\"twelve wide column\">\n                <a class=\"data-grid\" href=\"{{ article.link }}\">\n                 <h2>{{ article.title }}</h2>\n                </a>\n                <ul class=\"ui big horizontal list voters\">\n                <li class=\"item\">\n                <a href (click)=\"voteUp()\">\n                <i class=\"arrow up icon\"></i>\n                upvote\n                </a>\n                </li>\n                <li class=\"item\">\n                <a href (click)=\"voteDown()\">\n                <i class=\"arrow down icon\"></i>\n                downvote\n                </a>\n                </li>\n               </ul>\n               </div>\n\n\n               "
        }), 
        __metadata('design:paramtypes', [])
    ], SubmittedArticlesComponent);
    return SubmittedArticlesComponent;
}());
exports.SubmittedArticlesComponent = SubmittedArticlesComponent;
//# sourceMappingURL=submitted-articles.component.js.map