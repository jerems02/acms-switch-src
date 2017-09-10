import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcmsSwitchComponent } from './acms-switch.component';

export * from './acms-switch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AcmsSwitchComponent
  ],
  exports: [
    AcmsSwitchComponent
  ]
})
export class AcmsSwitchModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AcmsSwitchModule,
      providers: []
    };
  }
}
