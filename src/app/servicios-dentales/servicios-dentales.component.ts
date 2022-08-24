import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent, DialogData } from '../dialog/dialog.component';

@Component({
  selector: 'app-servicios-dentales',
  templateUrl: './servicios-dentales.component.html',
  styleUrls: ['./servicios-dentales.component.css']
})
export class ServiciosDentalesComponent implements OnInit {

  servicios:DialogData[] = [
    {
      header:'Estética Dental',
      shortDescription:'La especialidad abarca una gran variedad de procedimientos. El cirujano maxilofacial realiza desde complejas intervenciones de cirugía plástica hasta extracciones de muelas del juicio, apicectomías o colocación de implantes dentales.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Estética-Dental.jpg'
    },
    {
      header:'Implantes',
      shortDescription:'La implantología tiene como objetico sustituir dientes perdidos mediante la colocación quirúrgica De un implante dental en el hueso maxilar o mandibular. El implante dental es un tornillo de titanio que se inserta en el hueso de la mandíbula o del maxilar para sustituir el diente que falta como si de un diente natural se tratara. El éxito de un implante radica en un buen diagnostico por parte de los especialistas involucrados, y en Sonreír Dental Center los más calificados tenemos para ti.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Implantes.jpg'
    },
    {
      header:'Odontopediatría',
      shortDescription:'Los problemas bucales de los bebes y de los niños son tratados por el área de la odontopediatría. Esta rama está especializada en dar solución a las necesidades que los más pequeños puedan tener en relación con la salud de su boca. También en Sonreír Dental Center contamos con las odontopediatrías más dedicadas y conscientes de la responsabilidad de atender a nuestros peques.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Odontopediatría.jpg'
    },
    {
      header:'Rehabilitación protéstica',
      shortDescription:'Si devolver la función estetica y la armonia oral es lo que requerimos, en Sonreir Dental Center nuestros clientes especialistas mediante la protesis dentales solucionan las perdidas de dientes, siempre buscando una oclusióm y función estética.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Rehabilitación-Protéstica.jpg'
    },
    {
      header:'Ortodoncia',
      shortDescription:'Nuestros especialistas son miembros de las sociedades científicas nacionales e internacionales mas importantes en el ámbito de la ortodoncia, asimismo cuentan con certificación en los sistemas mas avanzados tales como damon, Invisalign, CCO, entre otros.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Ortodoncía.jpg'
    },
    {
      header:'Endodoncia',
      shortDescription:'Valoramos tus dientes! Y en nuestro principio conservador tenemos a la endodoncia como una gran aliada. La Endodoncia (o tratamiento de Conducto) es un procedimiento que consiste en reparar y salvar un diente gravemente dañado o infectado en vez de extraerlo. En Sonreír Dental Center tenemos los mejores especialistas en endodoncia que te garantizan una solucion definitiva, efectiva y garantizada.',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Endodoncia.jpg'
    },
    {
      header:'Cirugía Maxilofacial',
      shortDescription:'La especialidad abarca una gran variedad de procedimientos. El cirujano maxilofacial realiza desde complejas intervenciones de cirugía plástica hasta extracciones de mueleas del juicio, apicectomias o colocación de implantes dentales',
      imgUrl:'assets/images/instagram/Imagen_Servicios_Cirugía-Maxilofacial.jpg'
    },
  ]
  arr: number[] = [1, 2, 3];
  totalCards: number = this.servicios.length;
  currentPage: number = 1;
  pagePosition: string = "0%";
  cardsPerPage: number = 1;
  totalPages: number = 20;
  overflowWidth: string = '';
  cardWidth: string = '';
  containerWidth: number = 1;
  @ViewChild("container", { static: true, read: ElementRef })
  container: any = null;
  @HostListener("window:resize") windowResize() {
    let newCardsPerPage = this.getCardsPerPage();
    if (newCardsPerPage != this.cardsPerPage) {
      this.cardsPerPage = newCardsPerPage;
      this.initializeSlider();
      if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
        this.populatePagePosition();
      }
    }
  }

constructor(public dialog: MatDialog){

}

  ngOnInit() {
    this.cardsPerPage = this.getCardsPerPage();
    this.initializeSlider();
  }

  initializeSlider() {
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
      10}px)`;
    this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
      10}px) / ${this.cardsPerPage})`;
  }

  getCardsPerPage() {
    return Math.floor(this.container.nativeElement.offsetWidth / 200);
  }

  changePage(incrementor:any) {
    this.currentPage += incrementor;
    this.populatePagePosition();
  }

  populatePagePosition() {
    this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
      (this.currentPage - 1)}px)`;
  }

  openDialog(i:number):void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data:this.servicios[i]
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
