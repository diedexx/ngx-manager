import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-button-group',
    styleUrls: ['./button-group.component.scss'],
    templateUrl: './button-group.component.html'
})
export class ButtonGroupComponent {

    /**
     * The type of the button-group (left|right).
     * @type {string}
     */
    @Input() type = 'left';

    /**
     * If the button group should take the full width.
     * @type {boolean}
     */
    @Input() full = false;

}
