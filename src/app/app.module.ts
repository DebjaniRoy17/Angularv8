import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyComponent } from './company/company.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {TabMenuModule} from 'primeng/tabmenu';
import {CarouselModule} from 'primeng/carousel';
import {TabViewModule} from 'primeng/tabview';
import {ListboxModule} from 'primeng/listbox';
import {PanelModule} from 'primeng/panel';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CompanyComponent,
    ServicesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatTabsModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    TabMenuModule,
    CarouselModule,
    TabViewModule,
    ListboxModule,
    PanelModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
