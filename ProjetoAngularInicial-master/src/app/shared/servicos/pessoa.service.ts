import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }
  api_URL = 'http://localhost:3000/';

  public getPessoas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api_URL}pessoas`);
  }

  public getPessoaID(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api_URL}pessoas/${id}`);
  }
  alterarPessoa(pessoa: any): Observable<any> {
    return this.http.patch<any>(`${this.api_URL}pessoas/${pessoa.id}`, pessoa);
  }
  cadastrarPessoa(pessoa: any): Observable<any> {
    return this.http.post<any>(`${this.api_URL}pessoas`, pessoa);
  }
  excluirPessoa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.api_URL}pessoas/${id}`);
  }

}
