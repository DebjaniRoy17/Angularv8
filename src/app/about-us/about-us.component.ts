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
        image: 'design_eng'
      },
      {
        brand:' Design Validation as per code requirements',
        image: 'design_eng'
      },
      {
        brand:' Feasibility study',
        image: 'design_eng'
      },
      {
        brand:' Material Handling Planning',
        image: 'design_eng'
      },
      {
        brand:' Fault Finding',
        image: 'design_eng'
      },{
        brand:' Solid Modelling',
        image: 'design_eng'
      },{
        brand:' Detail Engineering',
        image: 'design_eng'
      }]
        
    }

    ngOnInit() {
        
    }

}
