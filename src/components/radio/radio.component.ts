import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Component, forwardRef, Input} from '@angular/core';

@Component({
    selector: 'bb-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent implements ControlValueAccessor {

    /**
     * The value of the radio.
     * @type {string}
     */
    @Input() public value: string;

    /**
     * The label for the radio.
     * @type {string}
     */
    @Input() public label: string;

    /**
     * If the radio is disabled.
     * @type {boolean}
     */
    @Input() public disabled: boolean;

    /**
     * If the radio should have bottom margin.
     * @type {boolean}
     */
    @Input() public grouped = false;

    /**
     * If the radio is checked.
     * @type {boolean}
     */
    @Input() public checked: boolean;

    // ControlValueAccessor callbacks.
    public onTouchedCallback: () => void = () => {
    };
    public onChangeCallback: (_: boolean) => void = () => {
    };

    /**
     * Saves the new value.
     *
     * @param {boolean} value The new value of the radio button.
     */
    public writeValue(value: boolean): void {
        if (this.checked !== value) {
            this.checked = value;
        }
    }

    /**
     * Registers a change in the input.
     *
     * @param {(_: boolean) => void} method The onChange callback.
     */
    public registerOnChange(method: (_: boolean) => void): void {
        this.onChangeCallback = method;
    }

    /**
     * Registers a touch.
     *
     * @param {() => void} method The touch callback.
     */
    public registerOnTouched(method: () => void): void {
        this.onTouchedCallback = method;
    }

    /**
     * Triggers when the input is set to a disabled state.
     *
     * @param {boolean} isDisabled Boolean if the input is disabled.
     */
    public setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

}
