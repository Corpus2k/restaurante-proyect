import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [CommonModule, FormsModule],
})
export class UserRegisterComponent {
  username: string = '';
  selectedSeatsCount: string = '3';
  customSeats: number = 1;
  seats: Array<{ available: boolean; selected: boolean }> = [];

  constructor() {
    this.loadSeats();
  }

  loadSeats() {
    const storedUsername = localStorage.getItem('username');

    // Inicializar las mesas siempre como disponibles y sin selección
    this.seats = Array.from({ length: 18 }, () => ({
      available: true,
      selected: false,
    }));

    // Mantener solo el nombre del usuario
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  saveSeats() {
    localStorage.setItem('username', this.username);
  }

  selectSeat(index: number) {
    if (this.seats[index].available) {
      // Si el asiento ya está seleccionado, lo deseleccionamos
      if (this.seats[index].selected) {
        this.seats[index].selected = false;
      } else if (this.getSelectedSeatsCount() < 3) {
        // Si no ha llegado al límite de 3 asientos, seleccionamos
        this.seats[index].selected = true;
      }
      this.saveSeats();
    }
  }

  getSelectedSeatsCount(): number {
    return this.seats.filter((seat) => seat.selected).length;
  }

  startOrder() {
    if (this.canSubmit()) {
      const selectedSeats = this.seats
        .map((seat, index) => (seat.selected ? index + 1 : null))
        .filter((seat) => seat !== null);
      alert(
        `Nombre: ${this.username}\nNúmero de asientos: ${
          this.selectedSeatsCount
        }\nMesas seleccionadas: ${selectedSeats.join(', ')}`
      );
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  canSubmit() {
    return (
      this.username.trim() !== '' &&
      (this.selectedSeatsCount !== 'custom' || this.customSeats > 0) &&
      this.getSelectedSeatsCount() > 0
    );
  }
}
