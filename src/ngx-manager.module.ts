import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CookieModule} from 'ngx-cookie';

import {HelloWorldComponent} from './components';
import {TranslationsService} from './services';
import {TranslatePipe} from './pipes';

import {LibraryConfig} from './interfaces/library-config.interface';

@NgModule({
    declarations: [
        // Components.
        HelloWorldComponent,
        // Pipes.
        TranslatePipe
    ],
    imports: [
        CookieModule.forRoot()
    ],
    providers: [
        TranslationsService
    ],
    exports: [
        // Components.
        HelloWorldComponent,
        // Pipes.
        TranslatePipe
    ]
})
export class NgxManagerModule {

    public static forRoot(config: LibraryConfig): ModuleWithProviders {
        return {
            ngModule: NgxManagerModule,
            providers: [
                {provide: LibraryConfig, useValue: config}
            ]
        };
    }

    public constructor(@Optional() @SkipSelf() parentModule: NgxManagerModule) {
        if (parentModule) {
            throw new Error('NgxManagerModule is already loaded. Import it in the AppModule only');
        }
    }

}
