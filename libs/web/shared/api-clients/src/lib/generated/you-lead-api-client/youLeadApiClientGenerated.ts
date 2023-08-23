import {ContactsRequestBuilder} from './contacts/contactsRequestBuilder';
import {BaseRequestBuilder, ParseNodeFactoryRegistry, SerializationWriterFactoryRegistry, enableBackingStoreForSerializationWriterFactory, registerDefaultDeserializer, registerDefaultSerializer} from '@microsoft/kiota-abstractions';
import type {RequestAdapter} from '@microsoft/kiota-abstractions';
import {FormParseNodeFactory, FormSerializationWriterFactory} from '@microsoft/kiota-serialization-form';
import {JsonParseNodeFactory, JsonSerializationWriterFactory} from '@microsoft/kiota-serialization-json';
import {MultipartSerializationWriterFactory} from '@microsoft/kiota-serialization-multipart';
import {TextParseNodeFactory, TextSerializationWriterFactory} from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export class YouLeadApiClientGenerated extends BaseRequestBuilder {
    /**
     * The contacts property
     */
    public get contacts(): ContactsRequestBuilder {
        return new ContactsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new YouLeadApiClientGenerated and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(requestAdapter: RequestAdapter) {
        super({}, requestAdapter, "{+baseurl}");
        registerDefaultSerializer(JsonSerializationWriterFactory);
        registerDefaultSerializer(TextSerializationWriterFactory);
        registerDefaultSerializer(FormSerializationWriterFactory);
        registerDefaultSerializer(MultipartSerializationWriterFactory);
        registerDefaultDeserializer(JsonParseNodeFactory);
        registerDefaultDeserializer(TextParseNodeFactory);
        registerDefaultDeserializer(FormParseNodeFactory);
    };
}
