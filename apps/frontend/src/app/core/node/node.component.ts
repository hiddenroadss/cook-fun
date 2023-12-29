import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [CommonModule],
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

  @Output() next: EventEmitter<void> = new EventEmitter();

  goNext() {
    this.next.emit();
  }
}
