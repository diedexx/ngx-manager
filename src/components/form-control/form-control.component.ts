import {Component, Input} from '@angular/core';

@Component({
    selector: 'bb-form-control',
    styleUrls: ['./form-control.component.scss'],
    templateUrl: './form-control.component.html'
})
export class FormControlComponent {

    // Inputs.
    @Input() public icon: string;
    @Input() public label: string;
    @Input() public grouped = true;

}
