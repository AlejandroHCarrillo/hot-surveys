import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-barras-horizontal',
  templateUrl: './grafica-barras-horizontal.component.html',
  styleUrls: ['./grafica-barras-horizontal.component.css']
})

export class GraficaBarrasHorizontalComponent implements OnDestroy {

  results: any[] = [
    {
      "name": "Game 1",
      "value": 335
    },
    {
      "name": "Game 2",
      "value": 555
    },
    {
      "name": "Game 3",
      "value": 425
    },
    {
      "name": "Game 4",
      "value": 725
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights'; 

  intervalo :any;
  constructor() {
    this.intervalo  = setInterval(()=>{
      console.log("heart beating" );
      let newResults = [...this.results];

      for (let item in newResults) {
        newResults[item].value = Math.round(Math.random()*500);
      }
      this.results = [...newResults]
    }, 1500);

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }

  onSelect(event) {
    console.log(event);
  }


}
