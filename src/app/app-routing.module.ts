import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import {RouterModule, Routes} from '@angular/router';


const routes : Routes = [
  { path: 'menu',component: MenuSuperiorComponent},
  /* { path: 'oferta/:id, component: oferta} */
]

@NgModule({
  declarations: [MenuSuperiorComponent,],
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
