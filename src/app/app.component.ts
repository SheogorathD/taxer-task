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
  otherCertificate = [];
  certificateList$: Observable<Certificate[]>;
  certificateList = [];
  showOrAdd = true;
  certificateIndex = 0;

  getIndex(e) {
    this.index = e;
    this.otherCertificate = this.certificateService.getCertificate(e);
  }

  changeAppearance() {
    this.showOrAdd = !this.showOrAdd;
  }

  constructor(private readonly certificateService: CertificateService) {}

  findCertificate() {
    this.certificateList$.subscribe((data) => {
      this.certificateList = data;
    });
  }

  ngOnInit(): void {
    this.certificateList$ = this.certificateService.getCertificateList();
    this.otherCertificate = this.certificateService.getCertificate(this.index);
  }
}
