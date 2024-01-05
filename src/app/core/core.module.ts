import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LangingPageComponent } from './component/langing-page/langing-page.component';
import { HeaderComponent } from './component/header/header.component';
import { ArticleComponent } from './component/article/article.component';
import { FooterComponent } from './component/footer/footer.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LangingPageComponent,
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    ],
  exports:[
    LangingPageComponent,
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    ArticleDetailComponent
  ]
})
export class CoreModule {}
