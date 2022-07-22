import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';
import { ProdutoModel } from 'src/app/model/produto-model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;

  form: FormGroup;
  produto: ProdutoModel = {};
 
  barcodeValue: string;
  barcodeAtivo: boolean;

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

  iniciarLeitura(){
    if(!this.barcodeAtivo){
      this.barcodeScanner.start();
      this.barcodeAtivo = true;
    } else{
      this.barcodeScanner.stop();
      this.barcodeAtivo = false;
    }
    
  }


  onValueChanges(result) {
    console.log("Resultados: ");
    this.barcodeValue = result.codeResult.code;
    console.log("Aqui: ", this.barcodeValue);
    
  }

  onStarted(started) {
    console.log("Iniciou a leitura: ");
    
    console.log(started);
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
