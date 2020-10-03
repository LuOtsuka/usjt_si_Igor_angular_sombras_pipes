import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: 'table'
})

export class SombraDirective {

  @HostBinding('style.boxShadow') sombra: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 
    
  }

  @HostListener('mouseover') quandoOMousePassarPorCima() {
    // this.renderer.setStyle(
    // this.elementRef.nativeElement,
    // 'box-shadow',
    // '10px 10px');
    this.sombra = '10px 10px';
  } // fim do método quandoOMousePassarPorCima

  @HostListener('mouseleave') quandoOMouseSair(){
    // this.renderer.removeStyle(
    //   this.elementRef.nativeElement,
    //   'box-shadow'
    // );

    this.sombra = '';
  }



}