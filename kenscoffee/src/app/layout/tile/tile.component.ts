import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-layout-tile',
	templateUrl: './tile.component.html',
	styleUrls: ['./tile.component.scss']
})
export class TileComponent {
	@Input() active = false;
}
