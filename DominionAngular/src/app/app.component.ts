import { Component } from '@angular/core';
import { DominionService } from './dominion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dominionAngular';
  tenCards: any[] = [];

  constructor(private dominionService: DominionService){}

  ngOnInit(){
    this.dominionService.getAllCards().subscribe((data: any[]) =>
    data.forEach(card => this.tenCards.push(card)));
  }
}
