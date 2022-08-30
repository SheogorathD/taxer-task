import { Component } from '@angular/core';
import ASN1 from '@lapo/asn1js';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models/certificate';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent {
  file: any;
  certificate: Certificate = {
    commonName: '',
    issuerCN: '',
    validFrom: '',
    validTill: '',
  };

  constructor(private readonly certificateService: CertificateService) {}

  setFile($event: any) {
    this.file = $event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsBinaryString(this.file);
    fileReader.onloadend = () => {
      const result = ASN1.decode(fileReader.result);
      if (result.typeName() !== 'SEQUENCE') {
        throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
      }
      this.certificate.commonName =
        result.sub[0].sub[5].sub[1].sub[0].sub[1].content();
      this.certificate.issuerCN =
        result.sub[0].sub[3].sub[2].sub[0].sub[1].content();
      this.certificate.validFrom = result.sub[0].sub[4].sub[0].content();
      this.certificate.validTill = result.sub[0].sub[4].sub[1].content();
      this.certificateService.uploadCertificate(this.certificate);
    };
  }
}
