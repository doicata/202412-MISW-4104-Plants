import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantsService } from '../plants.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

 //Variable para almacenar las plantas
 plants: Array<Plant> = [];

 constructor(private plantsService: PlantsService) { }

 //Metodo para obtener las plantas
 getPlants() {
  this.plantsService.getPlants().subscribe((plants: Plant[]) => {
    this.plants = plants;
  })
 }
 
 ngOnInit() {
   this.getPlants();
 }

}
