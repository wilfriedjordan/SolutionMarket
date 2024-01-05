"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleService = void 0;
var core_1 = require("@angular/core");
var ArticleService = /** @class */ (function () {
    function ArticleService(router) {
        this.router = router;
        this.Articles = [
            {
                id: 1,
                title: 'Iphone',
                img: '../../assets/image/electronique/6.jpg',
                description: 'Iphone',
                price: 600,
                createAt: new Date()
            },
            {
                id: 2,
                title: 'Casque',
                img: '../../assets/image/electronique/3.jpg',
                description: 'Casque',
                price: 120,
                createAt: new Date()
            },
            {
                id: 3,
                title: 'Drone',
                img: '../../assets/image/electronique/1.jpg',
                description: 'Drone',
                price: 1200,
                createAt: new Date()
            },
            {
                id: 4,
                title: "Lait",
                img: '../../../../assets/image/cosmetique/1.jpg',
                description: "Lait",
                price: 20,
                createAt: new Date()
            },
            {
                id: 5,
                title: 'Souris',
                img: '../../assets/image/electronique/4.jpg',
                description: 'Souris',
                price: 10,
                createAt: new Date()
            },
            {
                id: 6,
                title: 'Fruit',
                img: '../../../../assets/image/agricole/3.jpg',
                description: 'Fruit',
                price: 1,
                createAt: new Date()
            },
            {
                id: 7,
                title: 'Clavier',
                img: '../../assets/image/electronique/5.jpg',
                description: 'Clavier',
                price: 20,
                createAt: new Date()
            },
            {
                id: 8,
                title: 'Ordinateur',
                img: '../../assets/image/electronique/7.jpg',
                description: 'Casque',
                price: 120,
                createAt: new Date()
            },
            {
                id: 9,
                title: 'Jeux',
                img: '../../assets/image/electronique/2.jpg',
                description: 'Jeux',
                price: 10,
                createAt: new Date()
            },
            {
                id: 10,
                title: 'objectif',
                img: '../../assets/image/electronique/8.jpg',
                description: 'objectif',
                price: 120,
                createAt: new Date()
            },
            {
                id: 11,
                title: 'objectif',
                img: '../../assets/image/electronique/10.jpg',
                description: 'objectif',
                price: 120,
                createAt: new Date()
            },
            {
                id: 12,
                title: 'Drone',
                img: '../../assets/image/electronique/15.jpg',
                description: 'drone',
                price: 200,
                createAt: new Date()
            },
            {
                id: 13,
                title: 'Ordinateur',
                img: '../../assets/image/electronique/14.jpg',
                description: 'Casque',
                price: 120,
                createAt: new Date()
            },
            {
                id: 14,
                title: 'Carte Mere',
                img: '../../assets/image/electronique/16.jpg',
                description: 'carte mere',
                price: 80,
                createAt: new Date()
            },
            {
                id: 15,
                title: 'Papaye',
                img: '../../../../assets/image/agricole/2.jpg',
                description: 'Mandarine',
                price: 1,
                createAt: new Date()
            },
            {
                id: 16,
                title: 'Ordinateur',
                img: '../../assets/image/electronique/7.jpg',
                description: 'Ordinateur',
                price: 12000,
                createAt: new Date()
            },
            {
                id: 17,
                title: "Creme",
                img: '../../../../assets/image/cosmetique/2.jpg',
                description: "Creme",
                price: 15,
                createAt: new Date()
            },
            {
                id: 18,
                title: 'Savon',
                img: '../../../../assets/image/cosmetique/3.jpg',
                description: 'Savon',
                price: 10,
                createAt: new Date()
            },
            {
                id: 18,
                title: 'parfun',
                img: '../../../../assets/image/cosmetique/4.jpg',
                description: 'parfun',
                price: 15,
                createAt: new Date()
            },
            {
                id: 19,
                title: 'creme',
                img: '../../../../assets/image/cosmetique/16.jpg',
                description: 'creme',
                price: 15,
                createAt: new Date()
            },
            {
                id: 20,
                title: 'parfun',
                img: '../../../../assets/image/cosmetique/15.jpg',
                description: 'parfun',
                price: 20,
                createAt: new Date()
            },
            {
                id: 21,
                title: 'Lait',
                img: '../../../../assets/image/cosmetique/12.jpg',
                description: ' Lait',
                price: 15,
                createAt: new Date()
            },
            {
                id: 22,
                title: 'parfun',
                img: '../../../../assets/image/cosmetique/22.jpg',
                description: 'parfun',
                price: 25,
                createAt: new Date()
            },
            {
                id: 23,
                title: 'fond de teint',
                img: '../../../../assets/image/cosmetique/7.jpg',
                description: 'fond de teint',
                price: 20,
                createAt: new Date()
            },
            {
                id: 24,
                title: 'Deodorant',
                img: '../../../../assets/image/cosmetique/4.jpg',
                description: 'deodorant',
                price: 18,
                createAt: new Date()
            },
            {
                id: 25,
                title: 'Mandarine',
                img: '../../../../assets/image/agricole/6.jpg',
                description: 'Mandarine',
                price: 1,
                createAt: new Date()
            },
            {
                id: 26,
                title: 'Savon',
                img: '../../../../assets/image/cosmetique/5.jpg',
                description: 'Savon',
                price: 10,
                createAt: new Date()
            },
            {
                id: 27,
                title: 'Fruit',
                img: '../../../../assets/image/agricole/3.jpg',
                description: 'Fruit',
                price: 1,
                createAt: new Date()
            },
            {
                id: 28,
                title: 'fruit',
                img: '../../../../assets/image/agricole/2.jpg',
                description: 'Mandarine',
                price: 2,
                createAt: new Date()
            }
        ];
    }
    //  Recuperation des articles
    /**
     *
     * @returns Article
     */
    ArticleService.prototype.getAllArticles = function () {
        return this.Articles;
    };
    //  Recuperation d'un article par id
    ArticleService.prototype.getArticleByIg = function (ArticleId) {
        var article = this.Articles.find(function (article) { return article.id === ArticleId; });
        if (article) {
            return article;
        }
        else {
            throw new Error('Article not found');
        }
    };
    ArticleService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
