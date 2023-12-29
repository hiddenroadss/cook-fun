import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss']
})
export class MissionDetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<MissionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

}
