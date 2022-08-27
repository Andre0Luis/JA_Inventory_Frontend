import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxBarcodeScannerService } from '@eisberg-labs/ngx-barcode-scanner';
import { ProdutoModel } from 'src/app/model/produto-model';
import { getMainBarcodeScanningCamera } from '../acesso-camera/acesso-camera';
import Quagga from '@ericblade/quagga2';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;
  produto: ProdutoModel = {};
  barcodeValue: string;

  constructor(private fb: FormBuilder,
    private service: NgxBarcodeScannerService) {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      cod_barras: ['', [Validators.required]],
      valor: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  onValueChanges(result: string): void {
    this.form.controls['cod_barras'].setValue(result)
  }

  novoProduto() {
    this.produto = this.form.value;
  }

  enviarDados() {
    this.novoProduto();
  }


}
