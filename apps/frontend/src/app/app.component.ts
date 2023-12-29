import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  public nodes = Array(10).fill(0).map((x,i)=>i);
  currentNodeIndex = 0;


  goToNextNode(event: any, index: number) {
    if (this.currentNodeIndex === index) {
      this.currentNodeIndex += 1;
    }
  }


  public coordinates(node: number, index: number) {
    return {
      x: index * 50,
      y: index * 100
    };
  }

  public isDisabled(index: number): boolean {
    return index > this.currentNodeIndex;
  }
}
