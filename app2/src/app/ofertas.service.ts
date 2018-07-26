import { Oferta } from './shared/oferta.model'
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get('http://localhost:3000/ofertas')
            .toPromise()
            .then((resposta : any) => resposta) 
    }

}