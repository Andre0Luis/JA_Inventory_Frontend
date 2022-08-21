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


  leitura(){
    if(!this.barcodeAtivo){
      this.barcodeAtivo = true;
      this.loopVerificador();
    } else{
      this.barcodeAtivo = false;
      this.service.stop();
    }
    
  }

  loopVerificador(){
    console.log("Entrou No metotodo do loop");
    
    console.log("VALUE: ", this.value);
  
     setTimeout(()=> {
      console.log("Está procurando value ", this.value);
        if(this.value){
          console.log("VALUE NAO NULL: ", this.value);
        
        this.onValueChanges(this.value);
        this.value = null;
        this.leitura();
    
        } else {
          console.log("Não achou");
          this.loopVerificador();
          
        }
     }, 1000);   

  }

  onValueChanges(result: string):void {
    console.log("Resultados: ");
    this.form.controls['cod_barras'].setValue(result)
    console.log("Resultado Aqui: ", result);
    
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
