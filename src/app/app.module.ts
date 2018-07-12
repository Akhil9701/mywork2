import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { MyportfolioComponent } from './myportfolio/myportfolio.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, FooterComponent, ContentComponent, MydetailsComponent, MyportfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path:"mydetails",
          component:MydetailsComponent
        },
         {
          path:"",
          component:AppComponent
        },
        {
          path:"portfolio",
          component:MyportfolioComponent
        },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

