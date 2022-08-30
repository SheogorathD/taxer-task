import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/certificate';
import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  certificateList$: Observable<Certificate[]>;
  @Output() newIndex = new EventEmitter();

  getIndex(certificateIndex) {
    this.newIndex.emit(certificateIndex);
  }

  constructor(private readonly certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateList$ = this.certificateService.getCertificateList();
  }

  ngOnDestroy(): void {}
}
