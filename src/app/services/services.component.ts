import { Component, OnInit, ViewChild } from '@angular/core';
//import {MatExpansionModule,MatAccordion} from '@angular/material/expansion';
import {Observable, Observer} from 'rxjs';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
 
  
 
  designs:any;
  analysis:any;
  solutions:any
  
  constructor() {
    
    this.designs=[
      {
        name:"•	Basic Engineering"
      },
      {
        name:"•	Feasibility study"
      },
      {
        name: "•	Design validation",
       
      },
      {
        name: "•	Detail engineering",
       
      },
      {
        name: "•	Equipment design",
       
      },
      {
        name: "•	Custom made design",
       
      },
      {
        name: "•  Process design",
       
      },
      {
        name: "•  Solid modelling",
       
      }
    ];
    this.analysis=[
      {
        name:"•  Material handling"
      },
      {
        name:"•  Web page design"
      },
      {
        name: "•  Banner design",
      }
    ];
    this.solutions=[
      {
        name:"•  Material handling"
      },
      {
        name:"•  Web page design"
      },
      {
        name: "•  Banner design",
      },
      {
        name:"•	 Documentation"
      },
      {
        name:"•  Presentation"
      }
    ];
   }
 

  ngOnInit() {
  }

  

}
