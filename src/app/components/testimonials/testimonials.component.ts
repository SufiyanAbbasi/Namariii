import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
   testm = {
    title:"FEEDBACKS",
    subtitle:"What our Customers saying",
    test:[
      {id:1,img:"./assets/images/user-images/user-1.jpg",comnt:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore
      et dolore magna aliqua`,name:"John Doe - Happy Customer"},
      {id:2,img:"./assets/images/user-images/user-2.jpg",comnt:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore
      et dolore magna aliqua`,name:"Roslyn Doe - Happy Customer"},
      {id:3,img:"./assets/images/user-images/user-3.jpg",comnt:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore
      et dolore magna aliqua`,name:"Thomas Doe - Happy Customer"},
    ]
   }
}