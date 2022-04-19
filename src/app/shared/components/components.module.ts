import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { AddListComponent } from './add-list/add-list.component';

@NgModule({
  declarations: [CardComponent, ButtonComponent, AddTaskComponent, AddListComponent],
  imports: [CommonModule, FormsModule],
  exports: [CardComponent, ButtonComponent, AddTaskComponent, AddListComponent],
})
export class ComponentsModule {}
