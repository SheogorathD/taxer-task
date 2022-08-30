import { ChangeDetectionStrategy, Component } from '@angular/core';
import ASN1 from '@lapo/asn1js';
import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models/certificate';

@Component({
  selector: 'app-certificate-upload',
  templateUrl: './certificate-upload.component.html',
  styleUrls: ['./certificate-upload.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateUploadComponent {
  constructor(private readonly certificateService: CertificateService) {}

  setFile($event: any): void {
    const file = $event.target.files[0];
    const fileReader: FileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onloadend = () => {
      const result = ASN1.decode(fileReader.result);
      if (result.typeName() !== 'SEQUENCE') {
        throw 'Неправильна структура конверта сертифіката (очікується SEQUENCE)';
      }
      const certificate: Certificate = {
        commonName: result.sub[0].sub[5].sub[1].sub[0].sub[1].content(),
        issuerCN: result.sub[0].sub[3].sub[2].sub[0].sub[1].content(),
        validFrom: result.sub[0].sub[4].sub[0].content(),
        validTill: result.sub[0].sub[4].sub[1].content(),
      };
      this.certificateService.uploadCertificate(certificate);
    };
  }
}
