import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // @ts-ignore
  @ViewChild('sliderBar') private sliderBar: ElementRef;
  // @ts-ignore
  @ViewChild('sliderLine') private sliderLine: ElementRef;

  sliderBarMove(event: DragEvent): void {
    setTimeout(() => {
      this.setOffsetLeft(event.clientX);
    }, 50);
  }

  private setOffsetLeft(value: number): void {
    const sliderBar: any = this.sliderBar.nativeElement;
    sliderBar.style.left = `${value}px`;
  }

  drag(event: DragEvent): void {
    this.setOffsetLeft(event.clientX);
  }

  touchMove(event: TouchEvent): void {
    this.setOffsetLeft(event.touches[0].clientX);
  }
}
