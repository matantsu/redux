import { CounterComponent } from './components/counter.componnent';
import { CounterActions } from './store/counter/actions';
import { rootReducer, initialState, AppState } from './store/store';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {NgReduxModule , NgRedux, DevToolsExtension} from 'ng2-redux';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgReduxModule
  ],
  declarations: [
    AppComponent,
    CounterComponent
  ],
  providers: [
    CounterActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private appRef: ApplicationRef,
              private ngRedux: NgRedux<AppState>,
              private devTools: DevToolsExtension) {

    let middlewares = [];
    let enhancers = [];

    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    ngRedux.configureStore(rootReducer, initialState, middlewares, enhancers);
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
