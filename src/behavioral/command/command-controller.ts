import { ICommand } from './device-commands/ICommand';
import { NullCommand } from './device-commands/null-command';

export class CommandController {
    private _commandQueue: Array<ICommand> = [];
    private _executedCommands: Array<ICommand> = [];

    public addToQueue(command: ICommand): void {
        this._commandQueue.push(command);
    }

    public executeCommand(command: ICommand): void {
        command.execute();
        this._executedCommands.push(command);
    }

    public executeAll(): void {
        this._commandQueue.forEach((c) => {
            c.execute();
            this._executedCommands.push(c);
        });
    }

    public undoLast(): void {
        const lastCommand = this._executedCommands.pop() || new NullCommand();
        lastCommand.undo();
    }

    public undoAll(): void {
        while(this._executedCommands.length) {
            this.undoLast();
        }
    }
}