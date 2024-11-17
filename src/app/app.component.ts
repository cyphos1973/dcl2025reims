import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DCL 2025 Reims';

  constructor(private loggerService: LoggerService) {}

   ngOnInit() {
    this.loggerService.logPath('/test');
   }
}
