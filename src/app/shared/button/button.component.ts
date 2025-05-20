import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button', // Custom HTML tag to use this component: <app-button>
  standalone: true,       // Declares this component as standalone
  imports: [CommonModule], // Uses CommonModule for Angular structural directives
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  // Label shown on the button (default: "Submit")
  @Input() label: string = 'Submit';

  // Type determines styling (mapped to Bootstrap classes in the template)
  // 'chequing' → blue, 'savings' → green, 'default' → gray
  @Input() type: 'chequing' | 'savings' | 'default' = 'default';

  // Disable state of the button (default: false)
  @Input() disabled: boolean = false;
}
