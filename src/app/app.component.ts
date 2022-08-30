import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from './models/certificate';
import { CertificateService } from './services/certificate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  certificateList = [];
  showOrAdd = true;
  certificateIndex = 0;
  certificate = this.getCertificate(this.certificateIndex);

  constructor(private readonly certificateService: CertificateService) {}

  getCertificate(certificateIndex): Certificate {
    const certificate = {
      commonName: '',
      issuerCN: '',
      validFrom: '',
      validTill: '',
    };

    this.certificateService.getCertificateList().subscribe((data) => {
      this.certificateList = data;
    });

    certificate.commonName = this.certificateList[certificateIndex].commonName;
    certificate.issuerCN = this.certificateList[certificateIndex].issuerCN;
    certificate.validFrom = this.certificateList[certificateIndex].validFrom;
    certificate.validTill = this.certificateList[certificateIndex].validTill;

    return certificate;
  }

  changeAppearance() {
    this.showOrAdd = !this.showOrAdd;
    console.log(this.certificate);
  }
}
