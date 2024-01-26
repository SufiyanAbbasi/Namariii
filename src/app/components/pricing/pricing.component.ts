import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricing = {
    title:"YOUR CHOICE",
    description:"We have the right package for you",
    pricingBlock:[
      {id:1,
       title:"Personal",
       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       subtitle:"The standard version",
       currency:"Rs",
       price:1000 ,
       featured:false,
        downloads:"5 Downloads",
        extensions:"2 Extensions",
        tutorails:"Tutorials",
        support:"Forum Support",
        update:"1 year free updates",
        buttontxt:"BUY TODAY"
      },
      {id:2,
       title:"Student",
       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       subtitle:"Most popular choice",
       currency:"Rs",
       price:2000 ,
       featured:true,
        downloads:"15 Download",
        extensions:"5 Extensions",
        tutorials:"Tutorials with files",
        support:"Forum Support",
        update:"2 Years Free Update",
        buttontxt:"Buy Today"
      },
      {id:3,
       title:"Business",
       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
       subtitle:"For the whole team",
       currency:"Rs",
       price:3500,
       featured:false,
        downloads:"Unlimited Downloads",
        extensions:"Unlimited Extensions",
        tutorials:"HD Video Tutorials",
        support:"Chat Support",
        update:"Lifetime free updates",
        buttontxt:"Buy Today"
      },
    ]
  }

}