import type {HttpValidationProblemDetails_errors} from './httpValidationProblemDetails_errors';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeHttpValidationProblemDetails_errors(writer: SerializationWriter, httpValidationProblemDetails_errors: HttpValidationProblemDetails_errors | undefined = {} as HttpValidationProblemDetails_errors) : void {
        writer.writeAdditionalData(httpValidationProblemDetails_errors.additionalData);
}
