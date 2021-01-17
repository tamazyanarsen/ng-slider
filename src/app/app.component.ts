import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private sliderBarElement: any;
  private sliderLineElement: any;

  // @ts-ignore
  @ViewChild('sliderBar') private sliderBar: ElementRef;
  // @ts-ignore
  @ViewChild('sliderLine') private sliderLine: ElementRef;

  ngAfterViewInit(): void {
    this.sliderBarElement = this.sliderBar.nativeElement;
    this.sliderLineElement = this.sliderLine.nativeElement;
  }

  sliderBarMove(event: DragEvent): void {
    setTimeout(() => {
      this.setOffsetLeft(event.clientX);
    }, 50);
  }

  private setOffsetLeft(value: number): void {
    this.sliderBarElement.style.left = `${Math.min(value, this.sliderLineElement.clientWidth)}px`;
  }

  drag(event: DragEvent): void {
    this.setOffsetLeft(event.clientX);
  }

  touchMove(event: TouchEvent): void {
    this.setOffsetLeft(event.touches[0].clientX);
  }
}
