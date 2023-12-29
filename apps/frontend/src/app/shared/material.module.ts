import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const matComponents = [
  MatButtonModule,
  MatDialogModule
]

@NgModule({
  imports: [
  ],
  exports: [...matComponents]
})
export class MaterialModule { }
