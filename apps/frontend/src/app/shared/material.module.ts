import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const matComponents = [
  MatButtonModule
]

@NgModule({
  imports: [
  ],
  exports: [...matComponents]
})
export class MaterialModule { }
