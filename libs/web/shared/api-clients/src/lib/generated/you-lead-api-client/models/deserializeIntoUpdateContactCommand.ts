import type {UpdateContactCommand} from './updateContactCommand';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateContactCommand(updateContactCommand: UpdateContactCommand | undefined = {} as UpdateContactCommand) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { updateContactCommand.address = n.getStringValue(); },
        "city": n => { updateContactCommand.city = n.getStringValue(); },
        "email": n => { updateContactCommand.email = n.getStringValue(); },
        "firstName": n => { updateContactCommand.firstName = n.getStringValue(); },
        "lastName": n => { updateContactCommand.lastName = n.getStringValue(); },
        "phoneNumber": n => { updateContactCommand.phoneNumber = n.getStringValue(); },
        "zipCode": n => { updateContactCommand.zipCode = n.getStringValue(); },
    }
}
