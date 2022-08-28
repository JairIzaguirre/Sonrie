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
    imgUrl: 'assets/images/slider01-new.png',
    imgMob: 'assets/images/slider1-mob-required.png',
    header: 'Clínica Dental',
    subheader: 'Sonreir | Dental Center | Clínica dental',
    shortDescription: 'Somos una Empresa Venezolano-Mexicana orientada al servicio y atención odontológica integral...',
    detail:[{
      header:'Misión',
      subheader:'',
      detail:'Brindar asistencia odontológica profesional, confiable, segura y de excelencia a precio justo, con calidad humana, compromiso y responsabilidad en todas las especialidades odontológicas, para beneficio de todos nuestros pacientes y de su círculo familiar',
      type:'P'
    },{
      header:'Valores',
      subheader:'',
      detail:'Confianza, Calidad, Excelencia, Puntualidad, Compromiso',
      type: 'L'
    },
    {
      header:'Visión',
      subheader:'',
      detail:'Convertirnos en la Clínica Dental por excelencia de CDMX, con el mejor equipo humano y tecnológico, realizando los tratamientos más exitosos y confiables en cada especialidad, logrando la confianza, fidelidad y compromiso total de nuestros pacientes, alcanzando niveles óptimos de atención Odontológica que nos permitirá expandir nuestros servicios a otras ciudades del país',
      type: 'P'
    }
    ]
  },
  {
    imgUrl: 'assets/images/slider2-required.png',
    imgMob: 'assets/images/slider2-mob-required.png',
    header: 'Casos Clínicos',
    subheader: '',
    shortDescription: 'Reconstrucción total de Sonrisa con escáner e impresión digital, garantizado de por vida con Zirconios de última generación e implantes dentales.',
    detail:[{
      header:'',
      subheader:'',
      detail:'',
      type: 'I',
      imgUrl:'assets/images/misc/diseno-sonrisa.jpeg'
    }],
    images:['assets/images/misc/diseno-sonrisa.jpeg', 'assets/images/casos-clinicos/casos-clinicos-01.jpeg', 'assets/images/casos-clinicos/casos-clinicos-02.jpeg', 'assets/images/casos-clinicos/casos-clinicos-03.jpeg', 'assets/images/casos-clinicos/casos-clinicos-04.jpeg', 'assets/images/casos-clinicos/casos-clinicos-05.jpeg', 'assets/images/casos-clinicos/casos-clinicos-06.jpeg', 'assets/images/casos-clinicos/casos-clinicos-07.jpeg', 'assets/images/casos-clinicos/casos-clinicos-08.jpeg'],
    type:'G'
  },
  {
    imgUrl: 'assets/images/slider3-required.png',
    imgMob: 'assets/images/slider3-mob-required.png',
    header: 'Promociones Vigentes',
    subheader: '',
    shortDescription: 'Conoce nuestras promociones vigentes.',
    detail:[{
      header:'',
      subheader:'',
      detail:'Implantes, Ortodoncia, Resinas',
      type: 'L'
    }],
    type:'R',
    sectionId:'#promociones'
  },
  {
    imgUrl: 'assets/images/slider4-required.png',
    imgMob: 'assets/images/slider4-mob-required.png',
    header: 'Tecnología de Vanguardia',
    subheader: '',
    shortDescription: 'Valoración sin costo',
    detail:[{
      header:'',
      subheader:'',
      detail:'Implantes, Ortodoncia, Resinas',
      type: 'L'
    }],
    type:'R',
    sectionId:'#tecnologia'
  }];

  promociones:DialogData[] = [
    {
      imgUrl: 'assets/images/promociones/promociones-1.jpeg',
      imgMob: 'assets/images/promociones/promociones-1.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/promociones/promociones-2.jpeg',
      imgMob: 'assets/images/promociones/promociones-2.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/promociones/promociones-3.jpeg',
      imgMob: 'assets/images/promociones/promociones-3.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/promociones/promociones-4.jpeg',
      imgMob: 'assets/images/promociones/promociones-4.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
  ]

  tecnologias:DialogData[] = [
    {
      imgUrl: 'assets/images/tecnologia/tech-04.jpeg',
      imgMob: 'assets/images/tecnologia/tech-04.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/tecnologia/tech-03.jpeg',
      imgMob: 'assets/images/tecnologia/tech-03.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/tecnologia/tech-02.jpeg',
      imgMob: 'assets/images/tecnologia/tech-02.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/tecnologia/tech-01.jpeg',
      imgMob: 'assets/images/tecnologia/tech-01.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/itero1.jpg',
      imgMob: 'assets/images/itero1.jpg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/itero2.jpg',
      imgMob: 'assets/images/itero2.jpg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
    {
      imgUrl: 'assets/images/3d-printer.jpeg',
      imgMob: 'assets/images/3d-printer.jpeg',
      header: 'Tecnología de Vanguardia',
      subheader: '',
      shortDescription: 'Valoración sin costo',
      detail:[{
        header:'',
        subheader:'',
        detail:'Implantes, Ortodoncia, Resinas',
        type: 'L'
      }]
    },
  ]

  constructor(config: NgbCarouselConfig, public dialog: MatDialog) {
  }

  ngOnInit(): void {
      if(window.screen.availWidth > 1000){
        this.mobRes = false;
      }
  }

  openDialog(i:number):void {
    const selected:DialogData = this.slides[i];
    if(selected.type && selected.type == 'R'){
      location.href = (selected.sectionId) ? selected.sectionId : '' ;
    } else {
      const dialogRef = this.dialog.open(DialogComponent, {
        data:selected
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  redirectTo(url: string): void {
    window.open(url, '_blank');
  }

  setSlideImage(index:number):string|undefined{
    return this.mobRes ? this.slides[index].imgMob : this.slides[index].imgUrl ;
  }

}
