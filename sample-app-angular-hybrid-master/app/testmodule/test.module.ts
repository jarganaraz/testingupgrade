/*import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { TestComponent } from './test.component';
import { testState } from './test.states';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

let PREFS_STATES = [ testState ];

/** The NgModule for the Preferences feature */
/*@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterUpgradeModule.forChild({ states: PREFS_STATES })
  ],
  declarations: [ TestComponent ],
})
class Testmodule {}

export {Testmodule};*/


import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
//import { PrefsComponent } from './prefs.component';
//import { prefsState } from './prefs.states';
import {testState} from './test.states';
import { TestComponent } from "./test.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

let PREFS_STATES = [ testState ];

/** The NgModule for the Preferences feature */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UIRouterUpgradeModule.forChild({ states: PREFS_STATES })
  ],
  declarations: [ TestComponent ],
})
class TestModule {}

export {TestModule};