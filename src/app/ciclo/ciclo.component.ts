import { Component, 
         DoCheck, 
         Input, 
         OnChanges, 
         OnInit, 
         SimpleChanges, 
         AfterContentInit, 
         ContentChild, 
         AfterViewInit, 
         ViewChild, 
         ElementRef, 
         OnDestroy 
        } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  imports: [],
  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.css'
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy {

  @ContentChild('myElement') element: ElementRef|null;
  @Input() name: string;
  message: string;
  counter: number = 0;
  @ViewChild('myParagraph') paragraph: ElementRef;

  constructor() {
    this.message = 'Mensagem';
    this.name = '';
    this.element = null;
    this.paragraph = new ElementRef('conteúdo do parágrafo. Construtor.');
  }

  /*
  1. **ngOnChanges**
2. **ngOnInit**
3. **ngDoCheck**
4. **ngAfterContentInit**
5. **ngAfterContentChecked**
6. **ngAfterViewInit**
7. **ngAfterViewChecked**
8. **ngOnDestroy**
 */
  ngOnInit() {
    this.message = 'ngOnInit. Componente inicializado!';
    console.log('ngOnInit');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit :: Conteúdo inicializado:', this.element?.nativeElement.innerHTML);
   }
   ngAfterViewInit() {
    console.log('ngAfterViewInit :: Elemento de parágrafo:', this.paragraph.nativeElement);
  }
  ngDoCheck() {
    console.log('ngDoCheck :: Verificação de alterações executada.');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['name']) {
      this.message = 'Olá, ' + this.name + '!';
    } else {
      this.message = 'Ooops!';
    }
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy :: Componente Ciclo destruído! ');
  }
}
