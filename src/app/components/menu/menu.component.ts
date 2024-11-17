import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {LoggerService} from "../../core/services/logger.service";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private loggerService: LoggerService, private router: Router) {
  }

  navigate(path: string) {
    this.loggerService.logPath(path);
    this.router.navigate([path]); // Redirection vers le chemin spécifié
  }
}
