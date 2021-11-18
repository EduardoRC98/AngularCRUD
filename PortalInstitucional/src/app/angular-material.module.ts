import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    exports: [
      MatTableModule,
      MatSelectModule,
      MatTabsModule,
      MatCardModule,
      MatPaginatorModule,
      MatSortModule,
      MatInputModule,
      MatButtonModule
    ]
})

export class MaterialModule { }
