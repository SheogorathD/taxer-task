import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
export class ListComponent implements OnInit {
  certificateList$: Observable<Certificate[]>;
  @Output() newIndex = new EventEmitter<number>();

  constructor(private readonly certificateService: CertificateService) {}

  ngOnInit(): void {
    this.certificateList$ = this.certificateService.getCertificateList();
  }

  getIndex(certificateIndex: number): void {
    this.newIndex.emit(certificateIndex);
  }

  trackFn(index: number, item: Certificate): number {
    return index;
  }
}
