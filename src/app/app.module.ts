import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { NgxBarcodeScannerModule } from '@eisberg-labs/ngx-barcode-scanner';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    BarcodeScannerLivestreamModule,
    NgxBarcodeScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
