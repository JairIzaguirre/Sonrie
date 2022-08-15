import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent, DialogData } from './dialog/dialog.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent implements OnInit {
  title = 'Sonreir';
  mobRes:boolean = true;
  slides:DialogData[] = [{
    imgUrl: 'assets/images/slider1b.webp',
    imgMob: 'assets/images/slidermob1.webp',
    header: 'Clínica Dental',
    subheader: 'Sonreir | Dental Center | Clínica dental',
    txt: 'Somos una Empresa Venezolano-Mexicana orientada al servicio y atención odontológica integral...',
    description: 'Somos una Empresa Venezolano-Mexicana orientada al servicio y atención odontológica integral conformada por odontólogos Generales, Especialistas, Asistentes Dentales y Personal Administrativo altamente calificados y comprometidos con la paciente para brindarles la mejor experiencia en odontología y así poder transformar su sonrisa y recuperar su salud bucal.'
  },
  {
    imgUrl: 'assets/images/slider2.webp',
    imgMob: 'assets/images/slidermob2.webp',
    header: 'Nuestra Misión',
    subheader: '',
    txt: 'Brindar asistencia odontológica profesional, confiable, segura y de excelencia...',
    description: 'Somos una Empresa Venezolano-Mexicana orientada al servicio y atención odontológica integral conformada por odontólogos Generales, Especialistas, Asistentes Dentales y Personal Administrativo altamente calificados y comprometidos con la paciente para brindarles la mejor experiencia en odontología y así poder transformar su sonrisa y recuperar su salud bucal.'
  },
  {
    imgUrl: 'assets/images/slider3.webp',
    imgMob: 'assets/images/slidermob3.webp',
    header: 'Socia Media',
    subheader: '',
    txt: 'Obten atención personalizada por medio de nuestras redes sociales...',
    description: 'Somos una Empresa Venezolano-Mexicana orientada al servicio y atención odontológica integral conformada por odontólogos Generales, Especialistas, Asistentes Dentales y Personal Administrativo altamente calificados y comprometidos con la paciente para brindarles la mejor experiencia en odontología y así poder transformar su sonrisa y recuperar su salud bucal.'
  }];

  constructor(config: NgbCarouselConfig, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      if(window.screen.availWidth > 1000){
        this.mobRes = false;
      }
  }

  openDialog(i:number):void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data:this.slides[i]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  redirectTo(url: string): void {
    window.open(url, '_blank');
  }

  setSlideImage(index:number):string{
    return this.mobRes ? this.slides[index].imgMob : this.slides[index].imgUrl ;
  }

}
