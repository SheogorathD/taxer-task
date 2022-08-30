import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Certificate } from '../../models/certificate';

@Component({
  selector: 'app-certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrls: ['./certificate-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateInfoComponent {
  @Input() certificate: Certificate;
}
