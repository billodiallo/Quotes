import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) {
//   @HostListener("mouseenter") onmouseenter(){
//     this.colorChange("red")
//   }
//   @HostListener("mouseleave") onmouseleave(){
//     this.colorChange("aqua")
//   }
//  private colorChange(tap:string){
//   this.elem.nativeElement.style.color=tap;
//  }
 this.elem.nativeElement.style.background="blue";
}

}
