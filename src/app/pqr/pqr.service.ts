import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class PqrService {
  private urlBase = environment.BACKEND_URL
  constructor(private http: HttpClient) {}

  public get allPqrs(): Observable<any> {
    const url = this.urlBase + 'pqrs'
    const params = { include: JSON.stringify(['Campo', 'TipoPqr', 'Estado']) }
    return this.http
      .get(url, { params })
      .pipe(map((pqrs: any[]) => pqrs.map(this.mapDataPqr)))
  }

  private mapDataPqr(pqr) {

    pqr.Campo = pqr.Campo || {}
    pqr.TipoPqr = pqr.TipoPqr || {}
    pqr.Estado = pqr.Estado || {}
    return {
      ...pqr,
      campo: pqr.Campo.nombre || '',
      tipo: pqr.TipoPqr.nombre || '',
      estado: pqr.Estado.nombre || ''
    }
  }
}
