import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';


const rotas:Routes=
[
  // Direciono uma rota default
  // https://angular.io/tutorial/toh-pt5
  //{path:'',redirectTo:'./app-loja',pathMatch:'full'},
  {path:'app-loja',component:LojaComponent},
  {path:'app-root',redirectTo:'app-loja',pathMatch:'full'}
  
];
@NgModule({
  declarations: [
    AppComponent,
    LojaComponent
  ],
  imports: [
    //Aqui adiciono o modulo de rotas.
    RouterModule.forRoot
    (
      rotas,{enableTracing:true}
    ),
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{

 }
