import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBarcodeScannerService } from '@eisberg-labs/ngx-barcode-scanner';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent, BarcodeScannerLivestreamOverlayComponent } from 'ngx-barcode-scanner';
import { ProdutoModel } from 'src/app/model/produto-model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // @ViewChild(BarcodeScannerLivestreamOverlayComponent)
  //   barcodeScanner: BarcodeScannerLivestreamOverlayComponent;
  // @ViewChild(BarcodeScannerLivestreamComponent)
  // barcodeScanner: BarcodeScannerLivestreamComponent;

  form: FormGroup;
  produto: ProdutoModel = {};
 
  barcodeValue: string;
  barcodeAtivo: boolean;


  value: string;
  isError = false;

  constructor(private fb: FormBuilder,
  private service: NgxBarcodeScannerService){ 
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
      this.barcodeAtivo = true;
      this.loopVerificador();
    } else{
      this.barcodeAtivo = false;
      this.service.stop();
    }
    
  }

  loopVerificador(){
    while(!this.value){
      setTimeout(()=> {
        console.log("No loop");
      }, 100)
      
      
    } 
   console.log("Saiu do loop");
   
    this.onValueChanges(this.value);
    this.value = null;

  }

  onValueChanges(result: string):void {
    console.log("Resultados: ");
    this.form.controls['cod_barras'].setValue(result)
    console.log("Aqui: ", result);
    
  }

  onError(error: any) {
    console.error(error);
    this.isError = true;
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
