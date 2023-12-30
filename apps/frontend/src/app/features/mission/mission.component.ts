import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NodeComponent } from '@shared/components/node/node.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, SharedModule, NodeComponent],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
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
