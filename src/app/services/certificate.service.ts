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
    console.log('get', this.changeSubject$.value);
    return this.changeSubject$.asObservable();
  }

  uploadCertificate(certificate: Certificate): void {
    const currentValue = this.changeSubject$.value;
    console.log(currentValue);
    const updatedValue = [...currentValue, certificate];
    console.log('updated', updatedValue);
    this.changeSubject$.next(updatedValue);
    console.log('set', this.changeSubject$.value);
    localStorage.setItem(this.key, JSON.stringify(this.changeSubject$.value));
  }

  ngOnDestroy(): void {
    console.log('destroy', this.changeSubject$.value);
  }
}
