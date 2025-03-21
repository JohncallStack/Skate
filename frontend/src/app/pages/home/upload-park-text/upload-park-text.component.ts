import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-park-text',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './upload-park-text.component.html',
  styleUrl: './upload-park-text.component.scss'
})
export class UploadParkTextComponent {
  constructor(private router: Router) {}
}
