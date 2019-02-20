import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaComponent} from './lista/lista.component';
import {CadastrarPessoaComponent} from './cadastrar-pessoa/cadastrar-pessoa.component';
import {AlterarPessoaComponent} from './alterar-pessoa/alterar-pessoa.component';

const routes: Routes = [
  {path: '', component: ListaComponent},
  {path:'cadastrar', component: CadastrarPessoaComponent},
  {path:'alterar/:id', component: AlterarPessoaComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
