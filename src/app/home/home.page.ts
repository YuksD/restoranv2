// import { Component, OnInit } from '@angular/core';
// import { RestoranlarService } from '../api/restoranlar.service';
// import { HttpResponse } from '@angular/common/http';
 

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss']
// })
// export class HomePage implements OnInit {

//   restoranlar: any []= [];

//   constructor(private restoranlarService: RestoranlarService) { }
//   runPost() {
//     this.getRestoranlar();

//   }
//   ngOnInit(): void {
//     this.getRestoranlar();
     
     
//   }

//   getRestoranlar(): void {
//     const latitude = 39.586010; 
//     const longitude = 26.920470; 
//     const skip = 0;
//     const limit = 10; 

//     this.restoranlarService.postRestoran(latitude, longitude, skip, limit)
//       .subscribe({
//       next: (data: any) => {
//         this.restoranlar = data.response; 
//         console.log(data)
        
//       },
//       error: (error: any) => {
//         console.error('Hata:', error);
//       }
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { RestoranlarService } from '../api/restoranlar.service';
import { HttpResponse } from '@angular/common/http';
import * as geolib from 'geolib';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  restoranlar: any[] = [];
  skip: number = 0;
  limit: number = 10;
  loading: boolean = false;

  constructor(private restoranlarService: RestoranlarService) { }

  ngOnInit(): void {
    this.getRestoranlar();
  }
  getRestoranlar(): void {
    const latitude = 33;
    const longitude = 35;
    this.loading = true;
    this.restoranlarService.postRestoran(latitude, longitude, this.skip, this.limit)
      .subscribe({
        next: (data: any) => {


          this.restoranlar = data.response;
          this.loading = false;
          console.log(data)

        },
        error: (error: any) => {
          console.error('Hata:', error);
          this.loading = false;
        }
      });
  }

  calculateDistance(latitude: number, longitude: number): number {
    const destination = { latitude: 33, longitude: 35 }; 
    const restoranCoordinate = { latitude, longitude };
    const distanceInMetres = geolib.getDistance(restoranCoordinate, destination);
    const distanceInKm = distanceInMetres / 1000; 
    return Number(distanceInKm.toFixed(0));
  }


  loadMoreRestoranlar(event: any): void {
    this.skip += this.limit;
    const latitude = 33;
    const longitude = 35;

    this.restoranlarService.postRestoran(latitude, longitude, this.skip, this.limit)
      .subscribe({
        next: (data: any) => {

          this.restoranlar = this.restoranlar.concat(data.response);
          

          setTimeout(() => {
            event.target.complete();

          }, 700)
          
          if (data.response.length === 0) {
            event.target.disabled = true;
          }
        },
        error: (error: any) => {
          console.error('Hata:', error);
          event.target.complete();
        }
      });
  }
}
