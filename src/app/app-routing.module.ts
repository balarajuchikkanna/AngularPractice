import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { PipeComponent } from './pipe/pipe.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"nav", component: NavComponent},
  {path:"main", component: MainComponent},
  {path:"footer", component: FooterComponent},
  {path:"child", component: ChildComponent},
  {path:"header", component: HeaderComponent},
  {path:"user/:id/:name", component: UserComponent},
  {path:"pipe", component: PipeComponent},
  {path:"lifeCycleComponent", component: LifecyclehookComponent},
  {path:"formcomponent", component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
