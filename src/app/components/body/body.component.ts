import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrar = true;

  desarrolladores: string[] = [
    'Juan',
    'Erik',
    'Karen',
    'Gael'
  ];

}
