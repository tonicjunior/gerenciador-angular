import { Component, OnInit } from '@angular/core';
import {MyErrorStateMatcher} from '../shared/my.error.state.matcher';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PessoaService} from '../shared/servicos/pessoa.service';
import {ActivatedRoute, Router} from '@angular/router';
import toastr from "toastr";

@Component({
  selector: 'app-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.scss']
})
export class CadastrarPessoaComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,
    private router: Router,
     private pessoaService: PessoaService) { }
  ngOnInit() {
    this.route.params.subscribe(
      (parametros) => {

        this.pessoaService.getPessoas().subscribe(
          (data: any) => {           
            this.formulario.get('id').setValue(data[data.length-1] <= 0 ? data[data.length-1]['id']+1 : 0);
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

  cadastrar() {
    
    this.pessoaService.cadastrarPessoa(this.formulario.value).subscribe(
      (retorno) => {
        this.router.navigate([ '/']);
        toastr.success('Cadastro Realizados!');
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
