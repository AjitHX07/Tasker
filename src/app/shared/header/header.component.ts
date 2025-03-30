import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../../../../public/scss/atoms/button/button.component";

@Component({
  selector: 'app-header',
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() data:string | undefined;
  @Input() backgroud:string | undefined;
  @Input() color:string | undefined;

}
