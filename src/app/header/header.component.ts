import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <h1>My Angular Work2</h1>
  <nav>
    <a routerLink="">{{navItem1}}</a>
    <a routerLink="mydetails">{{navItem2}}</a>
    <a routerLink="portfolio">{{navItem2}}</a>
  </nav>
</header>
<hr/>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  title="My Angular Work2";
  navItem1="project";
  navItem2="Mydetails";
  navItem3="Myportfolio";
}






