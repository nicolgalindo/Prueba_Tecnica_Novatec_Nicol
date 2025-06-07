import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = [
    { id: 1, nombre: 'Nicol Galindo', correo: 'nicol@correo.com' },
    { id: 2, nombre: 'Maria Mojica', correo: 'maria@correo.com' },
    { id: 3, nombre: 'Carlos Perez', correo: 'carlos@correo.com' }
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }
}
