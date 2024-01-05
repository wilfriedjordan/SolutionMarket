"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleDetailComponent = void 0;
var core_1 = require("@angular/core");
var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(route, articleService) {
        this.route = route;
        this.articleService = articleService;
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        var idParametre = +this.route.snapshot.params['id'];
        this.article = this.articleService.getArticleByIg(idParametre);
    };
    ArticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-article-detail',
            templateUrl: './article-detail.component.html',
            styleUrl: './article-detail.component.scss'
        })
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());
exports.ArticleDetailComponent = ArticleDetailComponent;
