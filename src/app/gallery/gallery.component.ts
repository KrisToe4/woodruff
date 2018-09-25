import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {

      this.galleryOptions = [
        {
            width: '600px',
            height: '400px',
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide
        },
        // max-width 800
        {
            breakpoint: 800,
            width: '100%',
            height: '600px',
            imagePercent: 80,
            thumbnailsPercent: 20,
            thumbnailsMargin: 20,
            thumbnailMargin: 20
        },
        // max-width 400
        {
            breakpoint: 400,
            preview: false
        }
    ];

    this.galleryImages = [
        {
            small: '../../assets/gallery/1.jpeg',
            medium: '../../assets/gallery/1.jpeg',
            big: '../../assets/gallery/1.jpeg'
        },
        {
            small: '../../assets/gallery/2.jpeg',
            medium: '../../assets/gallery/2.jpeg',
            big: '../../assets/gallery/2.jpeg'
        },
        {
            small: '../../assets/gallery/3.jpeg',
            medium: '../../assets/gallery/3.jpeg',
            big: '../../assets/gallery/3.jpeg'
        },
        {
            small: '../../assets/gallery/4.jpeg',
            medium: '../../assets/gallery/4.jpeg',
            big: '../../assets/gallery/4.jpeg'
        },
        {
            small: '../../assets/gallery/5.jpeg',
            medium: '../../assets/gallery/5.jpeg',
            big: '../../assets/gallery/5.jpeg'
        },
        {
            small: '../../assets/gallery/6.jpeg',
            medium: '../../assets/gallery/6.jpeg',
            big: '../../assets/gallery/6.jpeg'
        },
        {
            small: '../../assets/gallery/7.jpeg',
            medium: '../../assets/gallery/7.jpeg',
            big: '../../assets/gallery/7.jpeg'
        },
        {
            small: '../../assets/gallery/8.jpeg',
            medium: '../../assets/gallery/8.jpeg',
            big: '../../assets/gallery/8.jpeg'
        },
        {
            small: '../../assets/gallery/9.jpeg',
            medium: '../../assets/gallery/9.jpeg',
            big: '../../assets/gallery/9.jpeg'
        },
        {
            small: '../../assets/gallery/10.jpeg',
            medium: '../../assets/gallery/10.jpeg',
            big: '../../assets/gallery/10.jpeg'
        },
        {
            small: '../../assets/gallery/11.jpeg',
            medium: '../../assets/gallery/11.jpeg',
            big: '../../assets/gallery/11.jpeg'
        },
        {
            small: '../../assets/gallery/12.jpeg',
            medium: '../../assets/gallery/12.jpeg',
            big: '../../assets/gallery/12.jpeg'
        },
        {
            small: '../../assets/gallery/13.jpeg',
            medium: '../../assets/gallery/13.jpeg',
            big: '../../assets/gallery/13.jpeg'
        },
        {
            small: '../../assets/gallery/14.jpeg',
            medium: '../../assets/gallery/14.jpeg',
            big: '../../assets/gallery/14.jpeg'
        },
        {
            small: '../../assets/gallery/15.jpeg',
            medium: '../../assets/gallery/15.jpeg',
            big: '../../assets/gallery/15.jpeg'
        },
        {
            small: '../../assets/gallery/16.jpeg',
            medium: '../../assets/gallery/16.jpeg',
            big: '../../assets/gallery/16.jpeg'
        },
        {
            small: '../../assets/gallery/17.jpeg',
            medium: '../../assets/gallery/17.jpeg',
            big: '../../assets/gallery/17.jpeg'
        },
        {
            small: '../../assets/gallery/18.jpeg',
            medium: '../../assets/gallery/18.jpeg',
            big: '../../assets/gallery/18.jpeg'
        }
    ];
  }

}
