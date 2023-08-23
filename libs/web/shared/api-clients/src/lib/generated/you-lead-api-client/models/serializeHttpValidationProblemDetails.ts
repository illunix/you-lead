import type {HttpValidationProblemDetails} from './httpValidationProblemDetails';
import type {HttpValidationProblemDetails_errors} from './httpValidationProblemDetails_errors';
import {serializeHttpValidationProblemDetails_errors} from './serializeHttpValidationProblemDetails_errors';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {ApiError} from '@microsoft/kiota-abstractions';

export function serializeHttpValidationProblemDetails(writer: SerializationWriter, httpValidationProblemDetails: HttpValidationProblemDetails | undefined = {} as HttpValidationProblemDetails) : void {
        writer.writeStringValue("detail", httpValidationProblemDetails.detail);
        writer.writeObjectValue<HttpValidationProblemDetails_errors>("errors", httpValidationProblemDetails.errors, serializeHttpValidationProblemDetails_errors);
        writer.writeStringValue("instance", httpValidationProblemDetails.instance);
        writer.writeNumberValue("status", httpValidationProblemDetails.status);
        writer.writeStringValue("title", httpValidationProblemDetails.title);
        writer.writeStringValue("type", httpValidationProblemDetails.type);
        writer.writeAdditionalData(httpValidationProblemDetails.additionalData);
}
