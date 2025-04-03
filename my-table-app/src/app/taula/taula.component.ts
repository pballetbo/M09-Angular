import { Component } from '@angular/core';

export interface Empleat {
  id: number;
  name: string;
  surname: string;
  department: string;
  salary: number;
}
const EMPLEATS_DATA: Empleat[] = [
  { id: 1, name: 'John', surname: 'Doe', department: 'IT', salary: 55000 },
  { id: 2, name: 'Jane', surname: 'Smith', department: 'HR', salary: 45000 },
  {
    id: 3,
    name: 'Jack',
    surname: 'Johnson',
    department: 'Sales',
    salary: 65000,
  },
  {
    id: 4,
    name: 'Jill',
    surname: 'Williams',
    department: 'Marketing',
    salary: 75000,
  },
  {
    id: 5,
    name: 'Jim',
    surname: 'Brown',
    department: 'Operations',
    salary: 55000,
  },
];

@Component({
  selector: 'app-taula',
  standalone: false,
  templateUrl: './taula.component.html',
  styleUrl: './taula.component.css',
})
export class TaulaComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'surname',
    'department',
    'salary',
  ];
  dataSource = EMPLEATS_DATA;
}
