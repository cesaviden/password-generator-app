import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Password Generator';
  length = 7;
  numbers = false;
  symbols = false;
  letters = false;
  password: any;
  
  onInputChange(event: Event) {
    this.length = parseInt((<HTMLInputElement>event.target).value);
  }

  onButtonClick() {
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    if (this.letters) {
      validChars += letters;
    }

    if (this.numbers) {
      validChars += numbers;
    }

    if (this.symbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    if (!this.letters && !this.numbers && !this.symbols) {
      alert('Please select at least one character type');
      this.password = '';
      return;
    } else if(this.length === 0) {
      alert('Please enter a length');
      this.password = '';
      return;
    } else {
      this.password = generatedPassword;
    }
  }
  
}
