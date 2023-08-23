import type {CreateContactCommand} from './createContactCommand';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateContactCommand(createContactCommand: CreateContactCommand | undefined = {} as CreateContactCommand) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { createContactCommand.address = n.getStringValue(); },
        "city": n => { createContactCommand.city = n.getStringValue(); },
        "email": n => { createContactCommand.email = n.getStringValue(); },
        "firstName": n => { createContactCommand.firstName = n.getStringValue(); },
        "lastName": n => { createContactCommand.lastName = n.getStringValue(); },
        "phoneNumber": n => { createContactCommand.phoneNumber = n.getStringValue(); },
        "zipCode": n => { createContactCommand.zipCode = n.getStringValue(); },
    }
}
