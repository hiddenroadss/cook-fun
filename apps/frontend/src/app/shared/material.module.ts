import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';



const matComponents = [
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatExpansionModule,
  MatGridListModule
]

@NgModule({
  imports: [
  ],
  exports: [...matComponents]
})
export class MaterialModule { }
