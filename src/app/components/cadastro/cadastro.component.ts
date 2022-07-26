import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamOverlayComponent } from 'ngx-barcode-scanner';
import { ProdutoModel } from 'src/app/model/produto-model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @ViewChild(BarcodeScannerLivestreamOverlayComponent)
    barcodeScanner: BarcodeScannerLivestreamOverlayComponent;
  // @ViewChild(BarcodeScannerLivestreamComponent)
  // barcodeScanner: BarcodeScannerLivestreamComponent;

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

  // iniciarLeitura(){
  //   if(!this.barcodeAtivo){
  //     this.barcodeScanner.start();
  //     this.barcodeAtivo = true;
  //   } else{
  //     this.barcodeScanner.stop();
  //     this.barcodeAtivo = false;
  //   }
    
  // }

  iniciarLeitura(){
    if(!this.barcodeAtivo){
      this.barcodeScanner.show();
      this.barcodeAtivo = true;
    } else{
     
      this.barcodeAtivo = false;
    }
    
  }

  onValueChanges(result: QuaggaJSResultObject):void {
    console.log("Resultados: ");
    this.barcodeValue = result.codeResult.code;
    console.log("Aqui: ", this.barcodeValue);
    
  }

  onStarted(event):void {
    console.log("On started: ");
    
    console.log("Started",event);
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
