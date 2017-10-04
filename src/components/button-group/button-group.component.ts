import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-button-group',
    styleUrls: ['./button-group.component.scss'],
    templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {

    @Input() type = 'left';
    @Input() full = false;

}
