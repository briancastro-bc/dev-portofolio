import { Component, OnInit } from '@angular/core';

import { Skills } from '@app/common/interfaces';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	skills: Skills[];

	constructor() {
		this.skills = [
			{
				name: 'Python',
				value: '90',
			},
			{
				name: 'MySQL',
				value: '80',
			},
			{
				name: 'Typescript',
				value: '70',
			},
			{
				name: 'C-Sharp',
				value: '60',
			},
			{
				name: 'HTML5',
				value: '90',
			},
			{
				name: 'Angular',
				value: '70',
			},
		];
	}

	ngOnInit(): void {}
}
