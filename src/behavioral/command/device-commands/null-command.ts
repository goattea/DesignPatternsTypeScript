import { ICommand } from './ICommand'

export class NullCommand implements ICommand {
    execute(): void {
        return;
    }    
    
    public undo(): void {
        return;
    }
}