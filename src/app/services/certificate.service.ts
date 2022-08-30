import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Certificate } from '../models/certificate';

@Injectable({ providedIn: 'root' })
export class CertificateService implements OnDestroy {
  private changeSubject$: BehaviorSubject<Certificate[]> = new BehaviorSubject(
    []
  );
  key = 'certificate';

  constructor() {
    this.changeSubject$.next(JSON.parse(localStorage.getItem(this.key)) ?? []);
  }

  getCertificateList() {
    return this.changeSubject$.asObservable();
  }

  getCertificate(index: number) {
    let certificateList = [];
    this.changeSubject$.asObservable().subscribe((data) => {
      certificateList = data;
    });
    return certificateList[index];
  }

  uploadCertificate(certificate: Certificate): void {
    const currentValue = this.changeSubject$.value;
    const updatedValue = [...currentValue, certificate];
    this.changeSubject$.next(updatedValue);
    localStorage.setItem(this.key, JSON.stringify(this.changeSubject$.value));
  }

  ngOnDestroy(): void {
    this.changeSubject$.complete();
  }
}
