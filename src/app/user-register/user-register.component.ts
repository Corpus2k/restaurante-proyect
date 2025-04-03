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

    this.seats = Array.from({ length: 18 }, () => ({
      available: true,
      selected: false,
    }));

    if (storedUsername) {
      this.username = storedUsername;
    } else {
      this.username = '';
    }
  }

  saveSeats() {
    if (!this.username.trim()) return;
    localStorage.setItem(
      `reservation_${this.username}`,
      JSON.stringify(this.seats)
    );
  }

  selectSeat(index: number) {
    if (this.seats[index].available) {
      if (this.seats[index].selected) {
        this.seats[index].selected = false;
      } else if (this.getSelectedSeatsCount() < 3) {
        this.seats[index].selected = true;
      }
      this.saveSeats();
    }
  }

  getSelectedSeatsCount(): number {
    return this.seats.filter((seat) => seat.selected).length;
  }

  canSubmit(): boolean {
    return (
      this.username.trim() !== '' &&
      (this.selectedSeatsCount !== 'custom' || this.customSeats > 0) &&
      this.getSelectedSeatsCount() > 0
    );
  }

  startOrder() {
    let validationMessage = '';

    if (!this.username.trim()) {
      validationMessage += '⚠️ Debes ingresar un nombre de usuario.\n';
    }
    if (this.selectedSeatsCount === 'custom' && this.customSeats <= 0) {
      validationMessage +=
        '⚠️ Debes ingresar una cantidad válida de asientos.\n';
    }
    if (this.getSelectedSeatsCount() === 0) {
      validationMessage += '⚠️ Debes seleccionar al menos un asiento.\n';
    }

    if (validationMessage) {
      alert(validationMessage);
      return;
    }

    const selectedSeats = this.seats
      .map((seat, index) => (seat.selected ? index + 1 : null))
      .filter((seat) => seat !== null);

    alert(
      `✅ Pedido realizado con éxito ✅\n\n` +
        `📌 Nombre: ${this.username}\n` +
        `📌 Número de asientos: ${this.selectedSeatsCount}\n` +
        `📌 Mesas seleccionadas: ${selectedSeats.join(', ')}`
    );

    this.resetForm();
  }

  resetForm() {
    this.username = '';
    this.selectedSeatsCount = '3';
    this.customSeats = 1;
    this.seats = Array.from({ length: 18 }, () => ({
      available: true,
      selected: false,
    }));

    localStorage.removeItem('username');
  }
}
