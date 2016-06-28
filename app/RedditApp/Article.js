"use strict";
var Article = (function () {
    function Article(title, link, vote) {
        this.vote = vote || 0;
        this.link = link;
        this.title = title;
    }
    Article.prototype.voteUp = function () {
        this.vote += 1;
    };
    Article.prototype.voteDown = function () {
        this.vote -= 1;
    };
    return Article;
}());
exports.Article = Article;
//# sourceMappingURL=Article.js.map