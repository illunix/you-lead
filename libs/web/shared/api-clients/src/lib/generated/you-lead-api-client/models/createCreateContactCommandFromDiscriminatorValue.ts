import {deserializeIntoCreateContactCommand} from './deserializeIntoCreateContactCommand';
import {CreateContactCommand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateContactCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateContactCommand;
}
