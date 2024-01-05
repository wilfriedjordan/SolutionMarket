import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LangingPageComponent } from './core/component/langing-page/langing-page.component';
import { ArticleDetailComponent } from './core/component/article-detail/article-detail.component';

const routes: Routes = [
    {path:'',component: LangingPageComponent},
    {path: 'article/:id', component:ArticleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
