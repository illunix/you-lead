import type {UpdateContactCommand} from './updateContactCommand';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateContactCommand(writer: SerializationWriter, updateContactCommand: UpdateContactCommand | undefined = {} as UpdateContactCommand) : void {
        writer.writeStringValue("address", updateContactCommand.address);
        writer.writeStringValue("city", updateContactCommand.city);
        writer.writeStringValue("email", updateContactCommand.email);
        writer.writeStringValue("firstName", updateContactCommand.firstName);
        writer.writeStringValue("lastName", updateContactCommand.lastName);
        writer.writeStringValue("phoneNumber", updateContactCommand.phoneNumber);
        writer.writeStringValue("zipCode", updateContactCommand.zipCode);
}
