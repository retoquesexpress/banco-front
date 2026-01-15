import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AccountResponse } from '../../../datos/Models/i-user-data';
import { RouterLink } from "@angular/router";
import { SFuncionalidades } from '../../../datos/Services/s-funcionalidades';
import { LoginService } from '../../../datos/Services/s-login';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit {
  private funcionalidadesService = inject(SFuncionalidades);
  private loginService = inject(LoginService);

  accounts: AccountResponse[] = [];

  ngOnInit() {
    this.cargarCuentas();
  }

  cargarCuentas() {
    const dni = this.loginService.getDni();
    this.funcionalidadesService.getAccounts(dni || undefined).subscribe({
      next: (data) => {
        this.accounts = data;
      },
      error: (err) => {
        console.error('Error al cargar las Cuentas:', err);
      }
    });
  }

  formatIBAN(iban: string): string {
    if (iban.length >= 8) {
      const start = iban.substring(0, 4);
      const end = iban.substring(iban.length - 4);
      return `${start} •••• ${end}`;
    }
    return iban;
  }

  getTotalBalance(): number {
    return this.accounts.reduce((acc, curr) => acc + curr.balance, 0);
  }

}

