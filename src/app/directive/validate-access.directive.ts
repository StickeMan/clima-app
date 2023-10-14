import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {UserInterface} from '../interfaces';
@Directive({
  selector: '[appValidateAccess]'
})
export class ValidateAccessDirective {

  @Input('appValidateAccess') dataAccess!: UserInterface;
  constructor(private value: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.dataAccess) {
      const { role } = this.dataAccess;
      if (role === 1 || role === 2) {
        this.renderer.setStyle(this.value.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.value.nativeElement, 'display', 'none');
      }
    }
  }
}
