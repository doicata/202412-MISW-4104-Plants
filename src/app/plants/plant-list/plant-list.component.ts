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
 Houseplants: number = 0;
 Outdoorplants: number = 0;


 constructor(private plantsService: PlantsService) { }

 //Metodo para obtener las plantas
 getPlants() {
  this.plantsService.getPlants().subscribe((plants: Plant[]) => {
    this.plants = plants;
    for(let plant of this.plants){
      if(plant.tipo === "Interior"){
        this.Houseplants += 1;
      }else if(plant.tipo === "Exterior"){
        this.Outdoorplants += 1;
      }
    }
  })
 }
 
 ngOnInit() {
   this.getPlants();
 }

}
