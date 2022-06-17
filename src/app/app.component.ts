import { Component } from '@angular/core';
import { CasasService } from './casas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  casas: Observable<any>;
  constructor(private servicioCasas: CasasService){
    this.casas = this.servicioCasas.casas
  }

  borraCasa(idCasa:any){
    this.servicioCasas.borraCasa(idCasa)
  }
}
