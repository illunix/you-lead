import {deserializeIntoContactDtoPagedDto} from './deserializeIntoContactDtoPagedDto';
import {ContactDtoPagedDto} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createContactDtoPagedDtoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoContactDtoPagedDto;
}
