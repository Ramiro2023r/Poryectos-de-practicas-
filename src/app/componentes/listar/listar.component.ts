import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{

  personas: any = [];

  constructor(private personaService: PersonaService) {
  }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas()
      .subscribe(
        res => {
          this.personas = res;
        },
        err => console.error(err)
      );
  }
}
