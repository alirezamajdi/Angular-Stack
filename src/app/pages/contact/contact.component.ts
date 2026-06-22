import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly name = signal('');
  readonly message = signal('');
  readonly submitted = signal(false);

  handleSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}
