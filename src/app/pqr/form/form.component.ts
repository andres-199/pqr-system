import { Component, OnInit } from '@angular/core'
import { CrudService } from 'src/app/components/dinamyc-crud/crud.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {
  public campos: any[]
  public pqr = {}
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getLists()
  }

  private getLists() {
    const origin = 'campos/list'
    this.crudService.findAll(origin).subscribe(campos => {
      this.campos = campos
      console.log(campos)
    })
  }
}
