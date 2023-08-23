import type {HttpValidationProblemDetails_errors} from './httpValidationProblemDetails_errors';
import type {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';
import {ApiError} from '@microsoft/kiota-abstractions';

export interface HttpValidationProblemDetails extends AdditionalDataHolder, ApiError, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The detail property
     */
    detail?: string | undefined;
    /**
     * The errors property
     */
    errors?: HttpValidationProblemDetails_errors | undefined;
    /**
     * The instance property
     */
    instance?: string | undefined;
    /**
     * The status property
     */
    status?: number | undefined;
    /**
     * The title property
     */
    title?: string | undefined;
    /**
     * The type property
     */
    type?: string | undefined;
}
