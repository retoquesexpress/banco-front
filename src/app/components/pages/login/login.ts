import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../datos/Services/s-login';



@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginService = inject(LoginService);
  router = inject(Router);

  LoginData = {
    userName: '',
    password: ''
  }
  userAndPasswordErrorMessage: string | null = null;
  passwordErrorMessage: string | null = null;


  login() {
    this.userAndPasswordErrorMessage = null;
    this.passwordErrorMessage = null;

    if (!this.LoginData.userName || !this.LoginData.password) {
      this.userAndPasswordErrorMessage = 'El usuario y la contraseña son obligatorios.';
      return;
    }

    this.loginService.login(this.LoginData.userName, this.LoginData.password).subscribe({

      next: data => {
        this.loginService.saveToken(data.token);
        this.router.navigate(['/cuentas']);
      },
      error: err => {
        console.log('Error del back:', err);

        const backendMessage = err.error || '';

        if (backendMessage.includes('User not found')) {
          this.userAndPasswordErrorMessage = 'El usuario o contraseña introducido no existe.';
        } else if (err.status === 401 || backendMessage.includes('Password')) {
          this.passwordErrorMessage = 'La contraseña es incorrecta.';
        } else {
          this.userAndPasswordErrorMessage = 'Ocurrió un error inesperado. Inténtelo de nuevo.';
        }
      }
    });
  }
}
