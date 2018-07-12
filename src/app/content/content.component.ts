import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
<h1> my courses </h1>
<ul>
<li *ngFor="let course of result ">{{course. name}}</li>
</ul>
<button type="button" (click)="getItemDetails()">get data</button>
{{courses}} 
<p class="content"> 
  is it your first post:{{getMessage()}} 
</p>
<hr/>
   `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  result=[];
  getItemDetails(){
    //console.log("this is regarding getItems details project")

let myURL="https://api.github.com/repositories?since=364";

fetch(myURL).then(response=> response.json())
            .then(response=> this.result=response)

  }
content="my first post on template";
getMessage(content){
  return content; 
}
courses=['html5','css3','javascript','jquery','ajax']


}
