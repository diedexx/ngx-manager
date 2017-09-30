# `ngx-manager`
>Simply add form elements to your angular 4.0+ project.

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