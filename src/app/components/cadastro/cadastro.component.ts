import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }


  criarFormularioDeUsuario() {
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      cpf: [''],
      nascimento: [''],
      senha: [''],
      confirmarSenha: ['']
    });
  }

  ngOnInit(): void {
  }

  enviarDados() {
    console.log(this.form.value);
  }


}
