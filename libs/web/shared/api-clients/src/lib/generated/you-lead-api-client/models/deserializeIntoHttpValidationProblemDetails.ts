import {createHttpValidationProblemDetails_errorsFromDiscriminatorValue} from './createHttpValidationProblemDetails_errorsFromDiscriminatorValue';
import type {HttpValidationProblemDetails} from './httpValidationProblemDetails';
import type {HttpValidationProblemDetails_errors} from './httpValidationProblemDetails_errors';
import {serializeHttpValidationProblemDetails_errors} from './serializeHttpValidationProblemDetails_errors';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {ApiError} from '@microsoft/kiota-abstractions';

export function deserializeIntoHttpValidationProblemDetails(httpValidationProblemDetails: HttpValidationProblemDetails | undefined = {} as HttpValidationProblemDetails) : Record<string, (node: ParseNode) => void> {
    return {
        "detail": n => { httpValidationProblemDetails.detail = n.getStringValue(); },
        "errors": n => { httpValidationProblemDetails.errors = n.getObjectValue<HttpValidationProblemDetails_errors>(createHttpValidationProblemDetails_errorsFromDiscriminatorValue); },
        "instance": n => { httpValidationProblemDetails.instance = n.getStringValue(); },
        "status": n => { httpValidationProblemDetails.status = n.getNumberValue(); },
        "title": n => { httpValidationProblemDetails.title = n.getStringValue(); },
        "type": n => { httpValidationProblemDetails.type = n.getStringValue(); },
    }
}
