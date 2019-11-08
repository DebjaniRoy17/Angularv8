import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { AboutUsComponent } from "./about-us/about-us.component";
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [
  // {path:'',component: CompanyComponent},
  // {path: 'aboutUs', component: AboutUsComponent},
  // {path: 'home', component: CompanyComponent},
  // {path: 'services', component: ServicesComponent},
  // {path: 'contactUs', component: ContactUsComponent},
  // {path:'redirect',component:AppComponent},
  // {path:'',redirectTo:'redirect',pathMatch:'full'}
  // {path: 'aboutUs', component: AppComponent},
  // {path: 'home', component: AppComponent},
  // {path: 'services', component: AppComponent},
  // {path: 'contactUs', component: AppComponent},

  {path:'home',component: AppComponent},
  {path:'',redirectTo:'home',pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent,CompanyComponent,ServicesComponent,ContactUsComponent];
