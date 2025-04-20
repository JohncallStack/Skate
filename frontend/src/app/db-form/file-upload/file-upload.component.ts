import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {

  loading:boolean = false;
  file: File | null = null;

  constructor(private fileUploadService: FileUploadService) {}

  ngOnInit(): void { }

  //On File select
  onChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input?.files) {
      this.file = input.files[0];
    }
  }

    onUpload(): void {
      if(!this.file) return;
      this.loading = true;

      this.fileUploadService.upload(this.file).subscribe(
      {next: (res) => {
      console.log(`Uploaded successfully`, res);
      this.loading = false
      },
    error: (err) => {
      console.error(`Error uploading`, err);
      }
      });

  }
  

}
