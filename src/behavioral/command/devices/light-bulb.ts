export class LightBulb {

    constructor(public readonly name: string) {
        
    }

    public turnOn(): void {
        console.log(`Turning on ${this.name} light bulb`)
    }

    public turnOff(): void {
        console.log(`Turning off ${this.name} light bulb`)
    }
}