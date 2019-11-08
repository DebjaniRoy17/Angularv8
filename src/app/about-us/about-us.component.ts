import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

  cars: any[];


    constructor() { 
      this.cars=[
        {
        brand:'Design & Engineering Consultancy',
        image: 'design_eng.jpg'
      },
      {
        brand:' Feasibility study',
        image: 'image_1.png'
      },
      {
        brand:' Design Validation as per code requirements',
        image: 'service_5.png'
      },
      
      {
        brand:' Material Handling Planning',
        image: 'service_4.jpg'
      },
      {
        brand:' Fault Finding',
        image: 'image_2.jpg'
      },{
        brand:' Solid Modelling',
        image: 'image_3.jpeg'
      },{
        brand:' Detail Engineering',
        image: 'image_4.jpg'
      }]
        
    }

    ngOnInit() {
        
    }

}
