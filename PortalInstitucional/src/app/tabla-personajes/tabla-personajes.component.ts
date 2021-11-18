import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PersonajesInterface } from '../models/personajes-interface';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-tabla-personajes',
  templateUrl: './tabla-personajes.component.html',
  styleUrls: ['./tabla-personajes.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TablaComponent implements AfterViewInit, OnChanges {
  nowYear: number = new Date().getFullYear();
  @Input() persona!: PersonajesInterface[];

  displayedColumns: string[] = ['name', 'patronus', 'age', 'image'];

  dataSource = new MatTableDataSource<PersonajesInterface>(this.persona);
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit(): void {

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

  }
  ngOnChanges({ persona: { currentValue } }: any): void {
      if (currentValue) {
          this.dataSource.data = currentValue as PersonajesInterface[];
      }
  }
}
