import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CertificateUploadComponent } from './components/certificate/certificate-upload.component';
import { ListComponent } from './components/list/list.component';
import { CertificateService } from './services/certificate.service';
import { CertificateInfoComponent } from './components/certificate-info/certificate-info.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CertificateUploadComponent,
    ListComponent,
    CertificateInfoComponent,
  ],
  providers: [CertificateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
