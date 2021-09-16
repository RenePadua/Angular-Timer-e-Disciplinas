import { Component, OnInit } from '@angular/core';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  constructor(public grade: GradeService) {}

  ngOnInit() {}
}
