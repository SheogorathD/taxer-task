import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from './models/certificate';
import { CertificateService } from './services/certificate.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @Input() index = 0;
  chosenCertificate: Certificate;
  certificateList$: Observable<Certificate[]>;
  showOrAdd = true;

  constructor(private readonly certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateList$ = this.certificateService.getCertificateList();
    this.chosenCertificate = this.certificateService.getCertificate(this.index);
  }

  getIndex(e: number): void {
    this.index = e;
    this.chosenCertificate = this.certificateService.getCertificate(e);
  }

  changeAppearance(): void {
    this.showOrAdd = !this.showOrAdd;
  }
}
