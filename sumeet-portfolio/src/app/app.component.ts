import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sumeet-portfolio';

  constructor(private router: Router){

  }
  onTabChanged(event: any): void{
    switch(event.index){
      case 0: this.router.navigate(['/about']);
              break;
      case 1: this.router.navigate(['/work']);
              break;
      case 2: this.router.navigate(['/contact']);
              break;
    }
  }

}
