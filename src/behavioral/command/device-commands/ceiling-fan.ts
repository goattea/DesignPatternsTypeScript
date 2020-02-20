import { ICommand } from './ICommand';
import { CeilingFan, CeilingFanSpeed } from '../devices/ceiling-fan';

export class TurnOnCeilingFanCommand implements ICommand {

    constructor(private receiver: CeilingFan) { }

    public execute(): void {
        this.receiver.turnOn();
    }

    public undo(): void {
        this.receiver.turnOff();
    }
}

export class TurnOffCeilingFanCommand implements ICommand {

    constructor(private receiver: CeilingFan) { }

    public execute(): void {
        this.receiver.turnOff();
    }

    public undo(): void {
        this.receiver.turnOn();
    }
}

export class SetCeilingFanSpeedToLowCommand implements ICommand {
    private _previousSpeed: CeilingFanSpeed;

    constructor(private receiver: CeilingFan) { 
        this._previousSpeed = receiver.currentSpeed;
    }

    public execute(): void {
        this._previousSpeed = this.receiver.currentSpeed;
        this.receiver.setFanSpeed(CeilingFanSpeed.Low);
    }

    public undo(): void {
        this.receiver.setFanSpeed(this._previousSpeed);
    }
}

export class SetCeilingFanSpeedToMediumCommand implements ICommand {
    private _previousSpeed: CeilingFanSpeed;

    constructor(private receiver: CeilingFan) { 
        this._previousSpeed = receiver.currentSpeed;
    }

    public execute(): void {
        this._previousSpeed = this.receiver.currentSpeed;
        this.receiver.setFanSpeed(CeilingFanSpeed.Medium);
    }

    public undo(): void {
        this.receiver.setFanSpeed(this._previousSpeed);
    }
}

export class SetCeilingFanSpeedToHighCommand implements ICommand {
    private _previousSpeed: CeilingFanSpeed;

    constructor(private receiver: CeilingFan) { 
        this._previousSpeed = receiver.currentSpeed;
    }

    public execute(): void {
        this._previousSpeed = this.receiver.currentSpeed;
        this.receiver.setFanSpeed(CeilingFanSpeed.High);
    }

    public undo(): void {
        this.receiver.setFanSpeed(this._previousSpeed);
    }
}