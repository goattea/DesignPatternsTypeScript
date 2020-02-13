interface IVehicle {
	wheels: number;
	drive(): string;
}

class Bicycle implements IVehicle {
	public readonly wheels: number;

	constructor() {
		this.wheels = 2;
	}

	public drive(): string {
		return 'You are driving a bicycle.';
	}
}

class Tricycle implements IVehicle {
	public readonly wheels: number;

	constructor() {
		this.wheels = 3;
	}

	public drive(): string {
		return 'You are driving a tricycle.';
	}
}

class Car implements IVehicle {
	public readonly wheels: number;

	constructor() {
		this.wheels = 4;
	}

	public drive(): string {
		return 'You are driving a car.';
	}
}

enum Vehicles {
	Bicycle,
	Tricycle,
	Car,
}

abstract class VehicleFactory {
	public static GetVehicle(type: Vehicles): IVehicle {
		switch (type) {
			case Vehicles.Bicycle:
				return new Bicycle();
			case Vehicles.Car:
				return new Car();
			case Vehicles.Tricycle:
				return new Tricycle();
			default:
				throw new Error('Unrecognized vehicle type!');
		}
	}
}

let bike = VehicleFactory.GetVehicle(Vehicles.Bicycle);
console.log(bike.drive());
