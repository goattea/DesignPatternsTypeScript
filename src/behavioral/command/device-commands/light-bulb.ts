import { ICommand } from './ICommand';
import { LightBulb } from '../devices/light-bulb';


export class TurnOnLightBulbCommand implements ICommand {
    
    constructor(private receiver: LightBulb) { }
    
    
    public execute(): void {
        this.receiver.turnOn();
    }

    public undo(): void {
        this.receiver.turnOff();
    }
}

export class TurnOffLightBulbCommand implements ICommand {
    
    constructor(private receiver: LightBulb) { }
    
    
    public execute(): void {
        this.receiver.turnOff();
    }

    public undo(): void {
        this.receiver.turnOn();
    }
}