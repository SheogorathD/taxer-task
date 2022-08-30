import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  showOrAdd = true;

  getIndex(certificateIndex): number {
    return certificateIndex;
  }

  changeAppearance() {
    this.showOrAdd = !this.showOrAdd;
  }
}
