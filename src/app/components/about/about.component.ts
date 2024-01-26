import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  about = {
    title: "Success",
    description: "How We Help You To Sell Your Product",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do /n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!!",
    buttontext: "START CREATING TODAY",
    IconBlocks: [
      { id: 1, icon:"fa-html5", title: "HTML5 &amp; CSS3", description: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico" },
      { id: 2, icon:"fa-bolt", title: "Easy to Use", description: "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sitdetracto mediocrem disputationi" },
      { id: 3, icon:"fa-tablet", title: "Fully Responsive", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum" },
      { id: 4, icon:"fa-rocket", title: "Parallax Effect", description: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum" }
    ]
  }

}
