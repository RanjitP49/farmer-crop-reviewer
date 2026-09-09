import { Component } from "@angular/core";

@Component({
  selector: "rj-background",
  template: `
    <div class="login-background"></div>
  `,
  styles: `
    .login-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/app-background.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -2;

   @media (max-width: 480px) {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
}
  `
})
export class AppBackgroundComponent {
  errorMessage: string | null = null;
}