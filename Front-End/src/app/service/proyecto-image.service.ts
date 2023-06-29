import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProyectoImageService {

  private latestImageUrl: string = '';

  constructor(private storage: Storage) { }

  public uploadImageProject($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, 'proyecto/' + name);

    uploadBytes(imgRef, file)
      .then(() => this.getDownloadURL(imgRef))
      .then(url => {
        this.latestImageUrl = url;
        console.log('La URL de la imagen del proyecto es: ' + this.latestImageUrl);
      })
      .catch(error => {
        console.log(error);
      });
  }

  public getLatestImageUrl(): string {
    return this.latestImageUrl;
  }

  private getDownloadURL(imgRef: any): Promise<string> {
    return getDownloadURL(imgRef);
  }
}