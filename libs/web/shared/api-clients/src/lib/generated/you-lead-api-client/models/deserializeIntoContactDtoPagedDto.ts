import type {ContactDto} from './contactDto';
import type {ContactDtoPagedDto} from './contactDtoPagedDto';
import {createContactDtoFromDiscriminatorValue} from './createContactDtoFromDiscriminatorValue';
import {serializeContactDto} from './serializeContactDto';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoContactDtoPagedDto(contactDtoPagedDto: ContactDtoPagedDto | undefined = {} as ContactDtoPagedDto) : Record<string, (node: ParseNode) => void> {
    return {
        "items": n => { contactDtoPagedDto.items = n.getCollectionOfObjectValues<ContactDto>(createContactDtoFromDiscriminatorValue); },
        "pageNumber": n => { contactDtoPagedDto.pageNumber = n.getNumberValue(); },
        "pageSize": n => { contactDtoPagedDto.pageSize = n.getNumberValue(); },
        "totalItems": n => { contactDtoPagedDto.totalItems = n.getNumberValue(); },
        "totalPages": n => { contactDtoPagedDto.totalPages = n.getNumberValue(); },
    }
}
