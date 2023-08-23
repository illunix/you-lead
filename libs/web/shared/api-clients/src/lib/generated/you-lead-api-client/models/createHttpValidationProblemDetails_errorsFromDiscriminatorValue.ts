import {deserializeIntoHttpValidationProblemDetails_errors} from './deserializeIntoHttpValidationProblemDetails_errors';
import {HttpValidationProblemDetails_errors} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHttpValidationProblemDetails_errorsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHttpValidationProblemDetails_errors;
}
