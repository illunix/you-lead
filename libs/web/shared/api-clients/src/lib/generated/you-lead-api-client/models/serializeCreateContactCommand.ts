import type {CreateContactCommand} from './createContactCommand';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCreateContactCommand(writer: SerializationWriter, createContactCommand: CreateContactCommand | undefined = {} as CreateContactCommand) : void {
        writer.writeStringValue("address", createContactCommand.address);
        writer.writeStringValue("city", createContactCommand.city);
        writer.writeStringValue("email", createContactCommand.email);
        writer.writeStringValue("firstName", createContactCommand.firstName);
        writer.writeStringValue("lastName", createContactCommand.lastName);
        writer.writeStringValue("phoneNumber", createContactCommand.phoneNumber);
        writer.writeStringValue("zipCode", createContactCommand.zipCode);
}
