# `ngx-manager`
>Simply add manager aspects to your Angular 4.0+ project. This library contains form elements such as input-wrapper/checkbox/radio/select. It also includes services for translating and notifying the user.

## <a name="get-started"></a> Get Started

### <a name="installation"></a> Installation

You can install this package locally with npm or yarn.

```bash
# To get the latest stable version

npm install @bravobit/ngx-manager --save

# or

yarn add @bravobit/ngx-manager
```

### <a name="usage"></a> Usage

You should import our global `styles.scss` file into your project to get the CSS resets and normalize.

```scss
@import '~@bravobit/ngx-manager/styles/styles.scss';
```

You should add the following declare module to the `typings.d.ts` file to be able to add languages to the `forRoot` method call.

```typescript
declare module '*.json' {
    const value: any;
    export default value;
}
```

After you have added this statement to the `typings.d.ts` file you should be able to import JSON files into your project.
```typescript
import * as dutch from '../languages/dutch.language.json';
``` 

`NgxManagerModule` should be registered in the `AppModule` with `forRoot()` static method to get access to all our components/pipes/services/directives.

```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgxManagerModule} from '@bravobit/ngx-manager';

import {AppComponent}  from './app.component';

import * as dutch from '../languages/dutch.language.json';

@NgModule({
    imports: [
        BrowserModule,
        NgxManagerModule.forRoot({
            languages: {nl: dutch}
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

## <a name="components"></a> Components

### <a name="form-control"></a> Form-control

```html
<!-- Input (text/number/date/etc.) -->

<bb-form-control [label]="'My email input'" [icon]="'email'">
    <input [(ngModel)]="myEmail" placeholder="johndoe@gmail.com">
</bb-form-control>

<!-- Textarea -->

<bb-form-control [label]="'My email textarea'" [icon]="'email'">
    <textarea [(ngModel)]="myEmail" placeholder="johndoe@gmail.com" rows="10"></textarea>
</bb-form-control>
```

### <a name="checkbox"></a> Checkbox

```html
<!-- NgModel -->

<bb-checkbox [(ngModel)]="myCheckbox" [label]="'My checkbox'"></bb-checkbox>

<!-- Reactive forms -->

<form [formGroup]="form">
    <bb-checkbox [formControlName]="myCheckbox" [label]="'My checkbox'"></bb-checkbox>
</form>
```

### <a name="radio"></a> Radio

```html
<!-- Coming soon -->
```

## <a name="other"></a> Other

### <a name="translations"></a> Translations

The `TranslationsService` can be used by using the dependency injection in Angular.

```typescript
import {TranslationsService} from '@bravobit/ngx-manager';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    
    public constructor(private translations: TranslationsService) {
    }
    
    public ngOnInit(): void {
        // Set a new language.
        this.translations.use('de');
        
        // Translate a sentence.
        const translated = this.translations.instant('My form control placeholder');
    }
    
}
```

The `TranslationPipe` can be used in an Angular component template.

```html
{{ 'Hello world!' | translate }}
```