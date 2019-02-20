import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher} from '../shared/my.error.state.matcher';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../shared/servicos/pessoa.service';
import {ActivatedRoute, Router} from '@angular/router';
import toastr from "toastr";
@Component({
  selector: 'app-alterar-pessoa',
  templateUrl: './alterar-pessoa.component.html',
  styleUrls: ['./alterar-pessoa.component.scss']
})
export class AlterarPessoaComponent implements OnInit {

  constructor(    private route: ActivatedRoute,
                  private router: Router,
                   private pessoaService: PessoaService) {
  }


  ngOnInit() {
    this.route.params.subscribe(
      (parametros) => {

        this.pessoaService.getPessoaID(parametros.id).subscribe(
          (data: any) => {
            this.formulario.get('id').setValue(data.id);
            this.formulario.get('nome').setValue(data.nome);
            this.formulario.get('CPF').setValue(data.CPF);
            this.formulario.get('grupo').setValue(data.grupo);
            this.formulario.get('ativo').setValue(data.ativo);
          }
        );
      });
  }

  matcher = new MyErrorStateMatcher();
  formulario: FormGroup = new FormGroup(
    {
      id: new FormControl( null, [ Validators.required]),
      nome: new FormControl( null, [ Validators.required]),
      CPF: new FormControl( null, [ Validators.required]),
      grupo: new FormControl( null, [ Validators.required]),
      ativo: new FormControl( null, [ Validators.required]),
    }
  );

  alterar() {

    this.pessoaService.alterarPessoa(this.formulario.value).subscribe(
      (retorno) => {
        this.router.navigate([ '/']);
        toastr.success('Informações Alteradas!');
      },
      error => {
        console.log('erro');
      }
    );
  }

  voltar() {
    this.router.navigate([ '/']);
  }

}
