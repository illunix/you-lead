import type {ContactDto} from './contactDto';
import type {ContactDtoPagedDto} from './contactDtoPagedDto';
import {serializeContactDto} from './serializeContactDto';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContactDtoPagedDto(writer: SerializationWriter, contactDtoPagedDto: ContactDtoPagedDto | undefined = {} as ContactDtoPagedDto) : void {
        writer.writeCollectionOfObjectValues<ContactDto>("items", contactDtoPagedDto.items, serializeContactDto);
        writer.writeNumberValue("pageNumber", contactDtoPagedDto.pageNumber);
        writer.writeNumberValue("pageSize", contactDtoPagedDto.pageSize);
        writer.writeNumberValue("totalItems", contactDtoPagedDto.totalItems);
}
