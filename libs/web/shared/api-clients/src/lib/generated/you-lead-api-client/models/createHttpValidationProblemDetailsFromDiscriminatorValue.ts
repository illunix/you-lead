import {deserializeIntoHttpValidationProblemDetails} from './deserializeIntoHttpValidationProblemDetails';
import {HttpValidationProblemDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHttpValidationProblemDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHttpValidationProblemDetails;
}
