"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleComponent = void 0;
var core_1 = require("@angular/core");
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(router) {
        this.router = router;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent.prototype.viewArticle = function () {
        this.router.navigateByUrl("article/" + this.article.id);
    };
    __decorate([
        core_1.Input()
    ], ArticleComponent.prototype, "article");
    ArticleComponent = __decorate([
        core_1.Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrl: './article.component.scss'
        })
    ], ArticleComponent);
    return ArticleComponent;
}());
exports.ArticleComponent = ArticleComponent;
