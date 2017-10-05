import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-form-control',
    styleUrls: ['./form-control.component.scss'],
    templateUrl: './form-control.component.html'
})
export class FormControlComponent {

    /**
     * The material-icon identifier.
     * @type {string}
     */
    @Input() public icon: string;

    /**
     * The label for the form-control.
     * @type {string}
     */
    @Input() public label: string;

    /**
     * If the icon should be reversed.
     * @type {boolean}
     */
    @Input() public reversed = false;

    /**
     * If the form-control should have bottom margin.
     * @type {boolean}
     */
    @Input() public grouped = true;

}
