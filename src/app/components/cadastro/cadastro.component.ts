import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoModel } from 'src/app/model/produto-model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  produto: ProdutoModel = {};

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      cod_barras: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });
  }



  ngOnInit(): void {
  }


  
  novoProduto(){
    this.produto = this.form.value;
    console.log("Produto aqui");
    
    console.log(this.produto);
  }

  enviarDados() {
    this.novoProduto();
    console.log("Tá aqui");
   
  }


}
