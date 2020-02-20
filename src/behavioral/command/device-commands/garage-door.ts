import { ICommand } from './ICommand';
import { GarageDoor } from '../devices/garage-door';

export class OpenGarageDoorCommand implements ICommand {

    constructor(private receiver: GarageDoor) { }
    
    public execute(): void {
        this.receiver.openDoor();
    }    
    
    public undo(): void {
        this.receiver.closeDoor();
    }
}

export class CloseGarageDoorCommand implements ICommand {

    constructor(private receiver: GarageDoor) { }
    
    public execute(): void {
        this.receiver.closeDoor();
    }    
    
    public undo(): void {
        this.receiver.openDoor();
    }
}