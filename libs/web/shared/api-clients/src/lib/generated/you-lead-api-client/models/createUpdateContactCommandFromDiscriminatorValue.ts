import {deserializeIntoUpdateContactCommand} from './deserializeIntoUpdateContactCommand';
import {UpdateContactCommand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateContactCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateContactCommand;
}
