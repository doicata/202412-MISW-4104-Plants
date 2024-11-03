/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PlantListComponent } from './plant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Plant } from '../plant';
import { fa, faker } from '@faker-js/faker';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    //Ciclo para crear actores
    for (let i = 0; i < 3; i++) {
      //Creamos actor
      const plant = new Plant(
        i + 1,
        faker.lorem.word(),
        faker.lorem.word(),
        'Interior',
        faker.number.int({ min: 10, max: 200 }),
        faker.lorem.word(),
        faker.lorem.paragraph()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create rows for each plant plus thead', () => {
    const debug = fixture.debugElement;
    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(4);
    // Suponiendo que generaste 3 plantas });
  });
});
