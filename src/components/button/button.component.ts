import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-button',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class ButtonComponent {

    // Inputs.
    @Input() public value: string;
    @Input() public icon: string;
    @Input() public loading: boolean;
    @Input() public disabled: boolean;
    @Input() public type = 'button';
    @Input() public color = 'green';

}
