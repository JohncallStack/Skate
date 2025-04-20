import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

//API URL

  constructor (private http: HttpClient) {}

  // Returns an observable
  upload(file: File):Observable<any> {
    const subject = new Subject<any>();
    const reader = new FileReader();

    reader.onload = () => {
      const base64 = (reader.result as string).split(',')[1];
    

    const payload = {
      filename: file.name,
      fileContent: base64,
      mimeType: file.type
    };

    // Create form data
    const formData = new FormData();

    // Append file to form data
    formData.append('file', file);

    // Make POST request to upload file
    this.http.post('/api/uploadImage', payload).subscribe({
      next: (res) => subject.next(res),
      error: (err) => subject.error(err),
      complete: () => subject.complete()
    });
  };

  reader.readAsDataURL(file);
  
  return subject.asObservable();
  }

}
