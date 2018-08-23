import { Oferta } from './shared/oferta.model'
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { URL_API } from '../app/app.api'


@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta : any) => resposta) 
    }

    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta : any) => resposta) 
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.shift())
    }

    public getComoUsarOfertaPorId(id: number): Promise<String> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.shift().descricao)
    }

    public getOndeFicaOfertaPorId(id: number): Promise<String> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.shift().descricao)
    }

}