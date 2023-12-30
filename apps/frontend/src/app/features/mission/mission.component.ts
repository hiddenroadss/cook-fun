import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { NodeComponent } from '@shared/components/node/node.component';

class Random {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  nextFloat(): number {
    this.seed = (this.seed * 1664525 + 1013904223) % 4294967296;
    return this.seed / 4294967296;
  }

  nextInRange(min: number, max: number): number {
    return min + this.nextFloat() * (max - min);
  }
}

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, SharedModule, NodeComponent],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent {
  public nodes = Array(10).fill(0).map((x,i)=>i);
  currentNodeIndex = 0;
  nodeSize: number = 150;
  random = new Random(12345); // Replace with any seed


  goToNextNode(event: any, index: number) {
    if (this.currentNodeIndex === index) {
      this.currentNodeIndex += 1;
    }
  }


  public coordinates(node: number, index: number) {
    // return {
    //   x: (index * this.nodeSize) % 1000 + 20, 
    //   y: (index * this.nodeSize) % 1000 + 20
    // };
    const nodeSizeWithGap = this.nodeSize * 2;
    const nodesPerRow: number = Math.floor(1000 / nodeSizeWithGap);
    const rowNumber: number = Math.floor(index / nodesPerRow);
    let x: number, y: number;

    const randGap: number = this.random.nextInRange(-20, 20);
    
    // If row number is even, proceed normally from left to right
    // If row number is odd, proceed in reverse from right to left to create serpentine effect
    if (rowNumber % 2 === 0) {
        x = (index % nodesPerRow) * nodeSizeWithGap + randGap;
    } else {
        x = (nodesPerRow - 1 - index % nodesPerRow) * nodeSizeWithGap - randGap;
    }
    
    y = rowNumber * nodeSizeWithGap + randGap;
    
    return {
      x: Math.max(0, Math.min(x + 10, 1000 - this.nodeSize)), // Avoid going out of bounds
      y: Math.max(0, Math.min(y + 10, 1000 - this.nodeSize)) // Avoid going out of bounds
    };
  }

  public isDisabled(index: number): boolean {
    return index > this.currentNodeIndex;
  }

  getStartPoint (node: number, i: number) {
    return {
      x: this.coordinates(node, i).x + this.nodeSize / 2,
      y: this.coordinates(node, i).y + this.nodeSize / 2
    };
  }
  
  getControlPoint1 (node: number, i: number) {
    return {
      x: this.coordinates(node, i).x + this.nodeSize,
      y: this.coordinates(node, i).y + this.nodeSize /2
    };
  }
  
  getControlPoint2 (node: number, i: number) {
    return {
      x: this.coordinates(node, i).x,
      y: this.coordinates(node, i).y + this.nodeSize / 2
    };
  }
}
