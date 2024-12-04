import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token: string | null = null;

  login(username: string, password: string): boolean {

    // Simulando autenticação. Substituir por chamada de API.
    if (username === 'secretaria' && password === '12345') {
      this.token = 'admin-token'; // Gerar token real em produção.
      return true;
    }
    
    return false;
  }

  logout(): void {
    this.token = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  getToken(): string | null {
    return this.token;
  }
}