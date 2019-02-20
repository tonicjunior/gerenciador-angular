import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {PessoaService} from '../shared/servicos/pessoa.service';
import toastr from "toastr";
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  COLORS = 'red';


  displayedColumns = ['nome', 'CPF', 'acoes'];
  excluirCategoria: any;
  pageSize;
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private router: Router,
              private pessoaService: PessoaService
             ) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.pessoaService.getPessoas().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  page(evento: any) {
    this.pageSize = evento.pageSize;
    localStorage.setItem('pageSize', this.pageSize);
  }

  adicionar() {
    this.router.navigate(['/cadastrar']);
  }

  alterar(id: number) {
    this.router.navigate([`/alterar/${id}`]);
  }

  excluir(id: number) {
    this.pessoaService.excluirPessoa(id).subscribe(
      (retorno) => {
        toastr.success('Registro Excluido');
        this.atualizarLista();
      },
      error => {
        toastr.error('Error ao Excluir');
      }
    );
  }
}
