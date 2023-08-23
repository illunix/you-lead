import type {ContactDto} from './contactDto';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactDto(writer: SerializationWriter, contactDto: ContactDto | undefined = {} as ContactDto) : void {
        writer.writeStringValue("address", contactDto.address);
        writer.writeStringValue("city", contactDto.city);
        writer.writeStringValue("email", contactDto.email);
        writer.writeStringValue("firstName", contactDto.firstName);
        writer.writeNumberValue("id", contactDto.id);
        writer.writeStringValue("lastName", contactDto.lastName);
        writer.writeStringValue("phoneNumber", contactDto.phoneNumber);
        writer.writeStringValue("zipCode", contactDto.zipCode);
}
