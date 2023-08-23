import {ContactDtoPagedDto, HttpValidationProblemDetails} from '../models/';
import type {CreateContactCommand} from '../models/createContactCommand';
import {createContactDtoPagedDtoFromDiscriminatorValue} from '../models/createContactDtoPagedDtoFromDiscriminatorValue';
import {createHttpValidationProblemDetailsFromDiscriminatorValue} from '../models/createHttpValidationProblemDetailsFromDiscriminatorValue';
import {deserializeIntoCreateContactCommand} from '../models/deserializeIntoCreateContactCommand';
import {deserializeIntoHttpValidationProblemDetails} from '../models/deserializeIntoHttpValidationProblemDetails';
import {serializeCreateContactCommand} from '../models/serializeCreateContactCommand';
import {serializeHttpValidationProblemDetails} from '../models/serializeHttpValidationProblemDetails';
import {ContactsRequestBuilderGetRequestConfiguration} from './contactsRequestBuilderGetRequestConfiguration';
import {ContactsRequestBuilderPostRequestConfiguration} from './contactsRequestBuilderPostRequestConfiguration';
import {ContactsItemRequestBuilder} from './item/contactsItemRequestBuilder';
import type {Parsable, ParsableFactory, RequestAdapter, RequestOption} from '@microsoft/kiota-abstractions';
import {BaseRequestBuilder, HttpMethod, RequestInformation, getPathParameters} from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /contacts
 */
export class ContactsRequestBuilder extends BaseRequestBuilder {
    /**
     * Gets an item from the ApiSdk.contacts.item collection
     * @param id Unique identifier of the item
     * @returns a ContactsItemRequestBuilder
     */
    public byId(id: number) : ContactsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["id"] = id
        return new ContactsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new ContactsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        super(pathParameters, requestAdapter, "{+baseurl}/contacts{?email*,pageNumber*,pageSize*}");
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContactDtoPagedDto
     */
    public get(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined) : Promise<ContactDtoPagedDto | undefined> {
        const requestInfo = this.toGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter.sendAsync<ContactDtoPagedDto>(requestInfo, createContactDtoPagedDtoFromDiscriminatorValue, undefined);
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
    public post(body: CreateContactCommand, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : Promise<void> {
        const requestInfo = this.toPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping = {
            "422": createHttpValidationProblemDetailsFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>;
        return this.requestAdapter.sendNoResponseContentAsync(requestInfo, errorMapping);
    };
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toGetRequestInformation(requestConfiguration?: ContactsRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    public toPostRequestInformation(body: CreateContactCommand, requestConfiguration?: ContactsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body, serializeCreateContactCommand);
        return requestInfo;
    };
}
