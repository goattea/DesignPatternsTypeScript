export class CeilingFan {
    private _currentSpeed: CeilingFanSpeed = CeilingFanSpeed.Low;
    public get currentSpeed(): CeilingFanSpeed { return this._currentSpeed }

    constructor(public readonly name: string) {
    }

    public turnOn() {
        console.log(`Turning on ${this.name} ceiling fan`);
    }

    public turnOff() {
        console.log(`Turning off ${this.name} ceiling fan`);
    }

    public setFanSpeed(speed: CeilingFanSpeed): void {
     
        this._currentSpeed = speed;
        console.log(`${this.name} ceiling fan speed set to ${this._currentSpeed}`);

    }
}

export enum CeilingFanSpeed {
    Low = 'LOW',
    Medium = 'Medium',
    High = 'HIGH',
}