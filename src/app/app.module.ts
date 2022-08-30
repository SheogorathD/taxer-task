import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { ListComponent } from './components/list/list.component';
import { CertificateService } from './services/certificate.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CertificateComponent, ListComponent],
  providers: [CertificateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
