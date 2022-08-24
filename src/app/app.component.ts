import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i18-angular';

  constructor(private translateService: TranslateService){}

  selectLanguage(x:any){
    this.translateService.use(x.target.value);
  }
}
