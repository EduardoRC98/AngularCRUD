import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";
import { AgregarRequest } from "../models/personajes-interface";
import { DataService } from "../services/data.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
    displayedColumns = ['name', 'lastName', 'email', 'house'];
    houses: string[] = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    solicitudes!: AgregarRequest[];
    solicitudForm!: any;

    dataSource = new MatTableDataSource<AgregarRequest>(this.solicitudes);
    constructor(private fb: FormBuilder,
    private dataService: DataService) { }

    ngOnInit(): void {
        this.solicitudForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(1)]],
            lastName: ['', [Validators.required, Validators.minLength(1)]],
            email: ['', [Validators.required, Validators.email]],
            house: ['', Validators.required]
        });
        this.solicitudes = this.dataService.getLocalStorage() as AgregarRequest[];
        this.dataSource.data = this.dataService.getLocalStorage() as AgregarRequest[];
    }

    onSubmit(): void {
        this.dataService.apply(this.solicitudForm.value);
        this.solicitudes = this.dataService.getLocalStorage() as AgregarRequest[];
        this.dataSource.data = this.dataService.getLocalStorage() as AgregarRequest[];
        this.clearForm();
    }
    clearForm(): void {
        this.solicitudForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(1)]],
            lastName: ['', [Validators.required, Validators.minLength(1)]],
            email: ['', [Validators.required, Validators.email]],
            house: ['', Validators.required]
        });
    }
}
