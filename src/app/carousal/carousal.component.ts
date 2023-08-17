import { Component, Input, OnInit } from '@angular/core';
interface carousalImages{
  imageSrc:string;
  imageAlt:string;

}
@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit{
  @Input() images: carousalImages[]=[];
  selectedIndex=0;
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=3000;
ngOnInit(): void {

  if(this.autoSlide){
    this.autoSlideImages();
  }
}
autoSlideImages():void{
  setInterval(()=>{
    this.onNextClick();
  },this.slideInterval)
}


selectedImage(index:number): void{
  this.selectedIndex=index;

}
onPrevClick():void{
  if(this.selectedIndex===0){
    this.selectedIndex=this.images.length-1;

  }
  else{
    this.selectedIndex--;
  }
}
onNextClick():void{
  if(this.selectedIndex===this.images.length-1){
    this.selectedIndex=0;
  }
  else{
    this.selectedIndex++;
  }
}
}
