import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu.component'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatIconModule, MatListModule, RouterModule],
  exports: [MenuComponent]
})
export class MenuModule {}
