import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionDetailsComponent } from '@shared/components/mission-details/mission-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [CommonModule, MissionDetailsComponent],
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input({required: true}) value: any;
  @Input() isSelected: boolean = false;
  @Input() disabled: boolean = false;

  @HostBinding('class.disabled') get makeDisabled() {
    return this.disabled;
  }

  @HostBinding('class.selected') get makeSelected() {
    return this.isSelected;
  }

  @HostListener('click') onClick() {
    this.openDialog()
  }



  @Output() next: EventEmitter<void> = new EventEmitter();
  
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(MissionDetailsComponent, {
      data: {title: `Сирники ${this.value}`, description: 'Зроби сирники, лох'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goNext() {
    this.next.emit();
  }
}
