import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowhide]'
})
export class ShowhideDirective {
  private showPassword : boolean = false;

  constructor(private elmentRef: ElementRef) { 
    this.setupDirective();
  }
  toggle(span: HTMLElement){
    this.showPassword = !this.showPassword;
    if(this.showPassword){
      this.elmentRef.nativeElement.setAttribute('type','text');
      span.innerHTML='<i class="bi bi-eye-slash" style="right: 14px; top:7px; position:absolute; cursor: pointer;"></i>';
    }else{
      this.elmentRef.nativeElement.setAttribute('type','password');
      span.innerHTML='<i class="bi bi-eye" style="right: 14px; top:7px; position:absolute; cursor: pointer;"></i>';
    }
  }
  setupDirective(){
    const parent = this.elmentRef.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML='<i class="bi bi-eye" style="right: 14px; top:7px; position:absolute; cursor: pointer;"></i>';
    span.addEventListener('click', (event) =>{
      this.toggle(span);
    })
    parent.appendChild(span)
  }


}
