import { Component, OnInit } from '@angular/core';
import { NgxBarcodeScannerService } from '@eisberg-labs/ngx-barcode-scanner';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-leitor',
  templateUrl: './leitor.component.html',
  styleUrls: ['./leitor.component.css']
})
export class LeitorComponent implements OnInit {

  barcodeAtivo: boolean;
  stopRead: boolean;
  value: string;
  isError = false;

  constructor(private cadastro: CadastroComponent,
    private service: NgxBarcodeScannerService) { }

  ngOnInit(): void {
  }

  async leitura() {
    if (!this.barcodeAtivo) {
      this.barcodeAtivo = true;
      this.stopRead = false;
      this.loopVerificador();
    } else {
      this.barcodeAtivo = false;
      this.stopRead = true;
      this.service.stop();
    }

  }

  loopVerificador() {
    setTimeout(() => {
      if (this.value) {
        this.cadastro.onValueChanges(this.value)
        this.value = null;
        this.leitura();
      } else {
        if (!this.stopRead) {
          this.loopVerificador();
        }
      }
    }, 1000);
  }

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }

}
