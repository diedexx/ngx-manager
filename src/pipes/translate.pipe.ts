import {TranslationsService} from '../services/translations.service';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'translate',
    pure: true
})
export class TranslatePipe implements PipeTransform {

    /**
     * Default constructor.
     *
     * @param {TranslationsService} translations The translations service.
     */
    public constructor(private translations: TranslationsService) {
    }

    /**
     * Transforms the given value to the translated variant.
     *
     * @param {string} value The initial value.
     * @param {any[]} args Optional arguments (not used).
     *
     * @returns {string} The translated string.
     */
    public transform(value: string, args: any[]): string {
        if (!value) {
            console.warn('translate.pipe.ts :: The value was not properly received', value);
            return null;
        }

        return this.translations.instant(value);
    }

}
