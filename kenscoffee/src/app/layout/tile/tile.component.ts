import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-layout-tile',
	templateUrl: './tile.component.html',
	styleUrls: ['./tile.component.scss']
})
export class TileComponent {
	@Input() active = false;
	@Input() selectable = false;
	selected = false;

	onClick() {
		this.selected = this.selectable ? !this.selected : false;
	}
}
