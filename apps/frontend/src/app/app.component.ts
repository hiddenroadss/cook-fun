import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  public nodes = Array(6).fill(0).map((x,i)=>i);
  currentNodeIndex = 0;
  nodeSize: number = 150;


  goToNextNode(event: any, index: number) {
    if (this.currentNodeIndex === index) {
      this.currentNodeIndex += 1;
    }
  }


  public coordinates(node: number, index: number) {
    return {
      x: (index * this.nodeSize) % 1000 + 20, 
      y: (index * this.nodeSize) % 1000 + 20
    };
  }

  public isDisabled(index: number): boolean {
    return index > this.currentNodeIndex;
  }
}
