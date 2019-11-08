import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('link_aboutUs', { static: false }) aboutUS: ElementRef;
  @ViewChild('link_company', { static: false }) home: ElementRef;
  @ViewChild('link_services', { static: false }) service: ElementRef;
  @ViewChild('link_contactUs', { static: false }) contact: ElementRef;
  @ViewChild('logoClick', { static: false }) logoClick: ElementRef;

  

  title = 'mecha-sol';

 
  onAboutUs($event){
    this.aboutUS.nativeElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }
  onHome($event){
    this.home.nativeElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }
  onServices($event){
    this.service.nativeElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }
  onContactUs($event){
    this.contact.nativeElement.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  }
  
   
  ngAfterViewInit() {
    this.logoClick.nativeElement.addEventListener('click', this.onAboutUs.bind(this));
  }


}
