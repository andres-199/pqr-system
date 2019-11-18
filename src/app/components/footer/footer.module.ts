import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterComponent } from './footer.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatCardModule],
  exports:[FooterComponent]
})
export class FooterModule {}
