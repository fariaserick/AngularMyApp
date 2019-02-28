import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	template: `
		<div>Countries
			<ol>
			<li>Argentina</li>
			<li>Brazil</li>
			<li>Camarao</li>
			</ol>
		</div>
	`,
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	test = "Testing";
}