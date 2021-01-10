import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  pieChart: any;

  constructor() {
  }

  ngOnInit(): void {
    this.pieChart = new Chart("pieChart", {
      type: "doughnut",
      data: {
        labels: ["Haushalt", "Einkauf", "Auto", "Versicherung", "Sonstige"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }]

      },
      options: {
        title: {
          display: true,
          text: 'Ausgaben der letzten Monate',
          fontSize: 22,
          fontStyle: "italic"
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: "#333",
            fontSize: 16,
          }
        }
      }

    })
  }

}
