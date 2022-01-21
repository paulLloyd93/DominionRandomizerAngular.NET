import { Component, OnInit } from '@angular/core';
import { DominionService } from 'src/app/dominion.service';


@Component({
  selector: 'parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css'],
})
export class ParametersComponent implements OnInit {

  constructor(private dominionService: DominionService) { }

  dominion: boolean = false;
  intrigue: boolean = false;
  prosperity: boolean = false;

  allowAttacks: boolean = false;
  requireDraw: boolean = false;
  requireBuy: boolean = false;
  requireActions: boolean = false;
  requireGain: boolean = false;
  requireTrash: boolean = false;
  evenCostDistribution: boolean = false;

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
