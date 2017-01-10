import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

const angularModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  RouterModule
];

function toArray(obj: any) {
  return Object.keys(obj).map((k) => obj[k]);
}

const declarations: any[] = [

];

@NgModule({
  imports: [...angularModules],
  declarations: [...declarations],
  exports: [
    ...angularModules,
    ...declarations
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
