import { Component, Inject, Input, inject } from '@angular/core';
import {Image} from '../../../models/image.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thumbnail',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './thumbnail.component.html',
  styleUrl: './thumbnail.component.scss',
})

export class ThumbnailComponent {

@Input() name!: string; 
@Input() mainImage!: Image;
@Input() park_id!: string;

constructor(){}

  }






