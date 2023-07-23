import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    LoadingComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent,
    NavigationComponent
  ],
})
export class SharedComponentsModule { 

}
