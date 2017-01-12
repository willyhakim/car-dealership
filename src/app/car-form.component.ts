import { Component, OnInit } from '@angular/core';
import { Car } from './car'

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent {
	fuelTypes = ['petrol', 'diesel', 'hybrid', 'Electric'];
	bodyStyles = ['convertibles', 'coupes', 'Hatchbacks', 'Vans', 
					'Sedans', 'SUVs', 'Trucks', 'Wagons'];
	model = new Car(1, 'BMW', 'X5', this.fuelTypes[1], this.bodyStyles[5], 250, 250);

	get diagnostic() {return JSON.stringify(this.model); }

}
