import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificate } from '../../models/certificate';

@Component({
  selector: 'app-certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrls: ['./certificate-info.component.css'],
})
export class CertificateInfoComponent implements OnInit {
  @Input() certificate;

  ngOnInit() {}
}
