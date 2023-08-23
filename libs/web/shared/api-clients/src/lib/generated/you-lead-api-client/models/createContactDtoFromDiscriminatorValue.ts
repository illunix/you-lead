import {deserializeIntoContactDto} from './deserializeIntoContactDto';
import {ContactDto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactDtoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactDto;
}
