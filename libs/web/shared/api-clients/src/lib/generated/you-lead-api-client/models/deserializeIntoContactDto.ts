import type {ContactDto} from './contactDto';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactDto(contactDto: ContactDto | undefined = {} as ContactDto) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { contactDto.address = n.getStringValue(); },
        "city": n => { contactDto.city = n.getStringValue(); },
        "email": n => { contactDto.email = n.getStringValue(); },
        "firstName": n => { contactDto.firstName = n.getStringValue(); },
        "id": n => { contactDto.id = n.getNumberValue(); },
        "lastName": n => { contactDto.lastName = n.getStringValue(); },
        "phoneNumber": n => { contactDto.phoneNumber = n.getStringValue(); },
        "zipCode": n => { contactDto.zipCode = n.getStringValue(); },
    }
}
