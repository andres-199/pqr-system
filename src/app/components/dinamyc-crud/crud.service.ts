import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CrudService {
  private urlBase = environment.BACKEND_URL
  constructor(private http: HttpClient) {}

  public findAll(origin) {
    const url = this.urlBase + origin
    return this.http.get<any[]>(url)
  }

  public create(origin, data) {
    const url = this.urlBase + origin
    return this.http.post(url, data)
  }

  public update(origin, data) {
    const url = this.urlBase + origin
    return this.http.put(url, data)
  }

  public delete(origin) {
    const url = this.urlBase + origin
    return this.http.delete(url)
  }
}
