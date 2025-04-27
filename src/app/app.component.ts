import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

import { PieComponent } from "./pie/pie.component";
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import { LineComponent } from "./line/line.component";


@Component({
  selector: 'app-root',
  imports: [BarChartComponent, LineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor( private router:Router){

  }

  ngOnInit(){
    this.router.events.subscribe((event: Event) =>{
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    })
  }


}
