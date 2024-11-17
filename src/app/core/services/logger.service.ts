// src/app/services/logger.service.ts
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private apiUrl = 'https://www.dcl2025reims.com/api/logger';

  constructor(private http: HttpClient) {
  }

  logPath(path: string) {
    const logData = {
      userAgent: navigator.userAgent,
      referer: window.location.href,
      remote_ip: '', // Le backend récupérera l'IP
      path: path,
    };

    // Envoi des données de log
    this.http.post(this.apiUrl, logData).subscribe({
      next: () => console.log('Données envoyées avec succès : ', logData),
      error: (error) => console.error("Erreur lors de l'envoi des données", error),
    });
  }
}
