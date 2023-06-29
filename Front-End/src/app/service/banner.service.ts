import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  url: string = '';

  constructor(private storage: Storage) { }

  public uploadBanner($event: any, name: string) {
    const file = $event.target.files[0];
    const bannerRef = ref(this.storage, 'banners/' + name);
    uploadBytes(bannerRef, file)
      .then(response => {
        this.getBannerURL();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getBannerURL() {
    const bannersRef = ref(this.storage, 'banners');
    list(bannersRef)
      .then(async response => {
        for (let item of response.items) {
          this.url = await getDownloadURL(item);
          console.log('La URL del banner es: ' + this.url);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}
