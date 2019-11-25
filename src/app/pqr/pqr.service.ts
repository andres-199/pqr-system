import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class PqrService {
  private urlBase = environment.BACKEND_URL
  constructor(private http: HttpClient) {}

  public get allPqrs(): Observable<any> {
    const url = this.urlBase + 'pqrs'
    return this.http.get(url)
  }
}
