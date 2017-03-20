
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 * Created by rafael on 20/03/17.
 */

const host = 'http://dbapi.io/db/coll';

@Injectable()
export class ContatoComponentService {

  constructor(private http: Http) {

  }

  enviarContato(contatoForm: any): Observable<Response> {
    let nome = contatoForm.nome;
    let email = contatoForm.contato.email;
    let mensagem = contatoForm.contato.mensagem;

    return this.http.post(host,{email:email,from: nome, mensagem: mensagem});
  }
}
