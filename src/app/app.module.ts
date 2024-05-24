import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { PipeComponent } from './pipe/pipe.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { CountComponent } from './count/count.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChildComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    UserComponent,
    PipeComponent,
    LifecyclehookComponent,
    CountComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
