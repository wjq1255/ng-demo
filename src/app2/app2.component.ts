import {Component} from '@angular/core';

@Component({
  selector: 'app2',
  template: `
    <div class="content">
      	<p>使用Angular框架的子系统</p>

      	<a [routerLink]="['/subroute1']" routerLinkActive="active">菜单1</a>
    	<a [routerLink]="['/subroute2']">菜单2</a>
		<div style="padding: 20px;">
			<router-outlet></router-outlet>
		</div>
    </div>
    
  `,
  styles: [`
	.content{
		margin: 20px;
	}
	.content a{
		font-weight:600;
	}
  `]
})
export class App2 {
}
