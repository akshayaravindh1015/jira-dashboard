import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListsContainerComponent } from './lists-container/lists-container.component';
import { ComponentsModule } from '../shared/components/components.module';

@NgModule({
  declarations: [DashboardComponent, ListsContainerComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
