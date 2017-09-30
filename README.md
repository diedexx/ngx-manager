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

`NgxManagerModule` should be registered in the `AppModule` with `forRoot()` static method.

```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {NgxManagerModule} from '@bravobit/ngx-manager';

import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        NgxManagerModule.forRoot({
            languages: {}
        })
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```
To get the global styles into your project you should include our file in the `styles.scss`

```scss
@import '~@bravobit/ngx-manager/styles/styles.scss';
```