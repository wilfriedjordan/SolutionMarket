import { Article } from './../../models/article.model';
import { Component, OnInit,  } from '@angular/core';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrl: './langing-page.component.scss'
})
export class LangingPageComponent implements OnInit {
  Articles!:Article[]
  constructor(private articleService: ArticleService){}
  ngOnInit(): void {
    this.Articles = this.articleService.getAllArticles();
    //Premier slider
    const controle = document.querySelectorAll('.span > span')
    const btn_direction = document.querySelectorAll('.wrapper > i');
    const carousel = document.querySelector('.carousel');

    if(btn_direction && carousel){
      btn_direction.forEach(element=>{
        element.addEventListener('click',(e:Event)=>{
          const element = e.currentTarget as HTMLElement;
          if(element.id === 'right'){
            //largeur du conteneur de carousel
            const scrollwidth = document.querySelector('.wrapper') as HTMLElement;
            const largeur = scrollwidth.offsetWidth;
            if(carousel){
              carousel.scrollLeft += largeur ;
              if (carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth) {
                // Reviens au premier slider
                carousel.scrollLeft = 0;
              }
            }
          }else if(element.id === 'left'){
            //largeur du conteneur de carousel
            const scrollwidth = document.querySelector('.wrapper') as HTMLElement;
            const largeur = scrollwidth.offsetWidth;
            if(carousel){
              carousel.scrollLeft -= largeur ;
            }
          }
        })
      })
    }
    if(controle){
      controle.forEach(arg=>{
        arg.addEventListener('click',(e:Event)=>{
          const arg = e.target as HTMLInputElement
          if(arg.id ==='span-right'){
            const scrollWidth = document.querySelector('.container') as HTMLLIElement
            const widthCaroul = scrollWidth.offsetWidth;
            const carousel = document.querySelector('.carousel')
            if(carousel){
              carousel.scrollLeft +=widthCaroul
            }
          }
        })
      })
    }

    setInterval(()=>{
      if(carousel){
        const scrollwidth = document.querySelector('.wrapper') as HTMLElement;
        const largeur = scrollwidth.offsetWidth;
        carousel.scrollLeft += largeur;
      }

    },5000)

    const allQuestion = document.querySelectorAll('.question');
    if(allQuestion){
      allQuestion.forEach(element => {
        element.addEventListener('click', (e:Event) => {
          const element = e.target as HTMLElement;
          if(element.classList) {
            element.classList.add('active');
          }
          for(let i = 0; i < allQuestion.length; i++) {
            if(allQuestion[i] !== element) {
              allQuestion[i].classList.remove('active');
            }
          }
        })
      })
    }

  }

}
