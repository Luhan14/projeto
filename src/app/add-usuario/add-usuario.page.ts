import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

id: string = "";
nome: string = "";
cpf: string = "";
dataNascimento: string = ""; 
genero: string = ""; 
email: string = ""; 
senha: string = ""; 


  constructor(private route: Router, private provider: Post, private routerAct: ActivatedRoute) { }

  ngOnInit() {
    this.routerAct.params.subscribe((data:any)=>{
      this.id = data.id;
      this.nome = data.nome;
      this.cpf = data.cpf;
      this.dataNascimento = data.dataNascimento;
    });

  }

}
