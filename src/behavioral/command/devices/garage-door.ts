export class GarageDoor {

    constructor(public readonly name: string) { }

    public openDoor(): void {
        console.log(`Opening ${this.name} garage door`)
    }

    public closeDoor(): void {
        console.log(`Closing ${this.name} garage door`)
    }
}