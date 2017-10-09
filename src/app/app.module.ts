import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';


@NgModule({
/* 
1. declarations section add only components, directives, or pipes 
2. privta by default
3. Every component ,directive and pipe we create muct belong to "one & only one" Angular module
4. dont add other classes ,services, or modules to declarative array.
5. never redeclare the same component to other module for eg startComponent to another module not an good idea
*/
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo:'welcome', pathMatch: 'full'},
        {path: 'welcome', component: WelcomeComponent},
        {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
      ]
    ),
    ProductModule
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
