import { Component } from '@angular/core';
//import { SubmittedArticlesComponent } from './RedditApp/submitted-articles.component';


@Component({
    selector: 'reddit',//'my-app',
   // directives:[SubmittedArticlesComponent],
    template: `
               <h2>I am in {{componentName}}</h2>
               <form class = "ui large form segment">
                  <h1 class = "ui header">Add a Link</h1>
                  <div class="field">
                   <label for="title">Title</label>
                   <input name ="title" #newtitle>
                  </div>
                  <div class="field">
                    <label for="link">Link</label>
                    <input name="link" #newlink>
                  </div>
                 <button (click) = "addArticle(newtitle,newlink)"
                 class="ui positive right floated button">Submit link</button>
              </form>
              <div class="data-grid">
                 <my-article *ngFor="let foo of articles"
                  [article] = "foo"
                 ></my-article>
              </div>
               `


})

export class RedditComponent{
      componentName:string;


      constructor(){
          this.componentName = 'RedditComponent';
      }

      addArticle(title: HTMLInputElement, link: HTMLInputElement):void{
          console.log(`Adding article title : ${title.value} link: ${link.value}`);

      }

}
