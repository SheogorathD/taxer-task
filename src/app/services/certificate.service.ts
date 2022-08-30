import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Certificate } from '../models/certificate';

@Injectable({ providedIn: 'root' })
export class CertificateService implements OnDestroy {
  private changeSubject$: BehaviorSubject<Certificate[]> = new BehaviorSubject(
    []
  );
  localStorageKey = 'certificate';

  constructor() {
    this.changeSubject$.next(
      JSON.parse(localStorage.getItem(this.localStorageKey)) ?? []
    );
  }

  getCertificateList(): Observable<Certificate[]> {
    return this.changeSubject$.asObservable();
  }

  getCertificate(index: number): Certificate {
    return this.changeSubject$.value[index];
  }

  uploadCertificate(certificate: Certificate): void {
    const currentValue = this.changeSubject$.value;
    const updatedValue = [...currentValue, certificate];
    this.changeSubject$.next(updatedValue);
    localStorage.setItem(
      this.localStorageKey,
      JSON.stringify(this.changeSubject$.value)
    );
  }

  ngOnDestroy(): void {
    this.changeSubject$.complete();
  }
}
