import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule, FormsModule],
})
export class AppComponent {
  title = 'proyect-restaurant';
}
