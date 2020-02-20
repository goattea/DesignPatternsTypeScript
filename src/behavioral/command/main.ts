import { CommandController } from './command-controller';
import { LightBulb } from './devices/light-bulb';
import { CeilingFan } from './devices/ceiling-fan';
import { GarageDoor } from './devices/garage-door';
import { TurnOnLightBulbCommand } from './device-commands/light-bulb';
import { TurnOnCeilingFanCommand, SetCeilingFanSpeedToHighCommand } from './device-commands/ceiling-fan';
import { OpenGarageDoorCommand, CloseGarageDoorCommand } from './device-commands/garage-door';

const controller = new CommandController();

const livingRoomLight = new LightBulb('Living Room');
const bedroomCeilingFan = new CeilingFan('Bedroom');
const mainGarageDoor = new GarageDoor('Main');
const bedroomLight = new LightBulb('Bedroom');

const commandLivingRoomLightOn = new TurnOnLightBulbCommand(livingRoomLight); 
const commandBedroomLightOn = new TurnOnLightBulbCommand(bedroomLight); 
const commandBedroomCeilingFanOn = new TurnOnCeilingFanCommand(bedroomCeilingFan);
const commandBedroomCeilingSetSpeedHigh = new SetCeilingFanSpeedToHighCommand(bedroomCeilingFan);
const commandGarageDoorOpen = new OpenGarageDoorCommand(mainGarageDoor);
const commandGarageDoorClose = new CloseGarageDoorCommand(mainGarageDoor);

controller.addToQueue(commandBedroomLightOn);
controller.addToQueue(commandBedroomCeilingFanOn);
controller.addToQueue(commandBedroomCeilingSetSpeedHigh);

controller.executeCommand(commandGarageDoorOpen);
controller.executeCommand(commandGarageDoorClose);
controller.executeCommand(commandLivingRoomLightOn);

console.log('Undo last...');
controller.undoLast();


console.log('Execute all queued commands...');
controller.executeAll();

console.log('Undo all...');
controller.undoAll();