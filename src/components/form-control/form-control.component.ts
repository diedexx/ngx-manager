import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-form-control',
    styleUrls: ['./form-control.component.scss'],
    templateUrl: './form-control.component.html'
})
export class FormControlComponent {

    /**
     * The material-icon.
     * @type {string}
     */
    @Input() public icon: string;

    /**
     * The label for the form-control.
     * @type {string}
     */
    @Input() public label: string;

    /**
     * If the form-control should have bottom margin.
     * @type {boolean}
     */
    @Input() public grouped = true;

}
