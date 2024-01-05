import { Component,OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../services/article.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit {
  article!: Article;
  constructor(private route:ActivatedRoute,private articleService:ArticleService ){}
  ngOnInit(): void {
    const idParametre = +this.route.snapshot.params['id'];
    this.article = this.articleService.getArticleByIg(idParametre);

  }
}
