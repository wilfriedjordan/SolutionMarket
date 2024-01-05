"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LangingPageComponent = void 0;
var core_1 = require("@angular/core");
var LangingPageComponent = /** @class */ (function () {
    function LangingPageComponent(articleService) {
        this.articleService = articleService;
    }
    LangingPageComponent.prototype.ngOnInit = function () {
        this.Articles = this.articleService.getAllArticles();
        //Premier slider
        var controle = document.querySelectorAll('.span > span');
        var btn_direction = document.querySelectorAll('.wrapper > i');
        var carousel = document.querySelector('.carousel');
        if (btn_direction && carousel) {
            btn_direction.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    var element = e.currentTarget;
                    if (element.id === 'right') {
                        //largeur du conteneur de carousel
                        var scrollwidth = document.querySelector('.wrapper');
                        var largeur = scrollwidth.offsetWidth;
                        if (carousel) {
                            carousel.scrollLeft += largeur;
                            if (carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth) {
                                // Reviens au premier slider
                                carousel.scrollLeft = 0;
                            }
                        }
                    }
                    else if (element.id === 'left') {
                        //largeur du conteneur de carousel
                        var scrollwidth = document.querySelector('.wrapper');
                        var largeur = scrollwidth.offsetWidth;
                        if (carousel) {
                            carousel.scrollLeft -= largeur;
                        }
                    }
                });
            });
        }
        if (controle) {
            controle.forEach(function (arg) {
                arg.addEventListener('click', function (e) {
                    var arg = e.target;
                    if (arg.id === 'span-right') {
                        var scrollWidth = document.querySelector('.container');
                        var widthCaroul = scrollWidth.offsetWidth;
                        var carousel_1 = document.querySelector('.carousel');
                        if (carousel_1) {
                            carousel_1.scrollLeft += widthCaroul;
                        }
                    }
                });
            });
        }
        setInterval(function () {
            if (carousel) {
                var scrollwidth = document.querySelector('.wrapper');
                var largeur = scrollwidth.offsetWidth;
                carousel.scrollLeft += largeur;
            }
        }, 5000);
        var allQuestion = document.querySelectorAll('.question');
        if (allQuestion) {
            allQuestion.forEach(function (element) {
                element.addEventListener('click', function (e) {
                    var element = e.target;
                    if (element.classList) {
                        element.classList.add('active');
                    }
                    for (var i = 0; i < allQuestion.length; i++) {
                        if (allQuestion[i] !== element) {
                            allQuestion[i].classList.remove('active');
                        }
                    }
                });
            });
        }
    };
    LangingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-langing-page',
            templateUrl: './langing-page.component.html',
            styleUrl: './langing-page.component.scss'
        })
    ], LangingPageComponent);
    return LangingPageComponent;
}());
exports.LangingPageComponent = LangingPageComponent;
