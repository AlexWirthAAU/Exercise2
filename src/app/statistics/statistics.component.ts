import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  piechart: Chart;
  barChartCat: Chart;
  barChartPay: Chart;


  showCatPie: boolean = true;
  showCatBar: boolean = true;
  showPayBar: boolean = true;

  formData: any;

  constructor() { 
    this.formData = new FormGroup({
      fromdate: new FormControl(''),
      todate: new FormControl('')
    })
  }

  ngOnInit(): void {

    this.piechart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Aufteilung der Ausgaben',
          fontSize: 18,
        },
      }
    })

    this.barChartCat = new Chart("barChartCat", {
      type: 'bar',
      data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
          data: [2478, 5267, 734, 784, 433]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Aufteilung der Ausgaben',
          fontSize: 18,
        },
        legend: {
          display: false,
        }
      }

    })

    this.barChartPay = new Chart("barChartPay", {
      type: 'bar',
      data: {
        labels: ["Auszahlungen", "Einzahlungen"],
        datasets: [{
          label: "Zahlungen",
          backgroundColor: ["#ad1818", "#046b12"],
          data: [2478, 5267]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Einnahmen und Ausgaben',
          fontSize: 18,
        },
        legend: {
          display: false,
        }
      }

    })
  }

  filterOrderStatistics() {

  }

  selectChart(type) {
    console.log("Clicked")

    if(type === '1') {
      this.showCatPie = !this.showCatPie;
    } else if (type === '2') {
      this.showCatBar = !this.showCatBar;
    } else if (type === '3') {
      this.showPayBar = !this.showPayBar;
    }

  }

}
