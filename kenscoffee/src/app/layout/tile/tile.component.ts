import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
	selector: 'app-layout-tile',
	templateUrl: './tile.component.html',
	styleUrls: ['./tile.component.scss']
})
export class TileComponent {
	@Input() active = false;
}

