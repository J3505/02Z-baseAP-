import { Component, OnInit } from '@angular/core';
import { Chart, ChartType  } from 'chart.js/auto';

@Component({
  selector: 'app-pie',
  imports: [],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss',
})
export class PieComponent implements OnInit {
  // Atributo que almacena los datos del chart
  public chart: Chart | undefined; // Chart es el tipo de la gráfica,
 
  ngOnInit(): void {
    // datos
    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
 
     // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'pie' as ChartType, // tipo de la gráfica 
      data: data, // datos 
    });
  }
}
