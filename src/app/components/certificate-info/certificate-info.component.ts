import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-info',
  templateUrl: './certificate-info.component.html',
  styleUrls: ['./certificate-info.component.css'],
})
export class CertificateInfoComponent implements OnInit {
  @Input() certificate;

  ngOnInit() {}
}
