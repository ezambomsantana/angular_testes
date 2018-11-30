import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'

import { interval, Observer, Observable } from 'rxjs';
//import { timeInterval } from 'rxjs/operators'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { 
  }

  ngOnInit() {
    //console.log(this.route.snapshot.params['id'])
    //this.route.params.subscribe((parametro: any) => { console.log(parametro) })
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
      })



    
     // console.log("concluido")
     // this.route.params.subscribe(
     //   (parametro: any) => {console.log(parametro)},
    //    (erro: any) => {console.log(erro)}
     // )

 //   let val = interval(500)

 //   val.subscribe((interval: number) => {
 //     console.log(interval)
 //   })

 //     let observable = new Observable((observer: Observer<string>) => {
  //      observer.next('teste evento')
  //      observer.error('erro')
  //   })

  //    observable.subscribe(
  //      (resultado: any) => console.log(resultado),
  //      (erro: string) => console.log(erro),
  //      () => console.log('finalizou')
  //    )


  }

}
