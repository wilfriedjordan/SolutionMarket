import { Component,OnInit,Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit  {
  @Input() article!: Article;
  constructor(private router: Router){}
  ngOnInit(): void {

  }
  viewArticle(){
    this.router.navigateByUrl(`article/${this.article.id}`)
  }
}
