import {HttpValidationProblemDetails} from '../../models/';
import {createHttpValidationProblemDetailsFromDiscriminatorValue} from '../../models/createHttpValidationProblemDetailsFromDiscriminatorValue';
import {deserializeIntoHttpValidationProblemDetails} from '../../models/deserializeIntoHttpValidationProblemDetails';
import {deserializeIntoUpdateContactCommand} from '../../models/deserializeIntoUpdateContactCommand';
import {serializeHttpValidationProblemDetails} from '../../models/serializeHttpValidationProblemDetails';
import {serializeUpdateContactCommand} from '../../models/serializeUpdateContactCommand';
import type {UpdateContactCommand} from '../../models/updateContactCommand';
import {ContactsItemRequestBuilderPutRequestConfiguration} from './contactsItemRequestBuilderPutRequestConfiguration';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /contacts/{id}
 */
export class ContactsItemRequestBuilder extends BaseRequestBuilder {
    /**
     * Instantiates a new ContactsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/contacts/{id}");
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public put(body: UpdateContactCommand, requestConfiguration?: ContactsItemRequestBuilderPutRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPutRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "422": createHttpValidationProblemDetailsFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPutRequestInformation(body: UpdateContactCommand, requestConfiguration?: ContactsItemRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeUpdateContactCommand);
        return requestInfo;
    };
}
