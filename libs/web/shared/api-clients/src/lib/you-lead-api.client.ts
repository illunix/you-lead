import { Injectable } from "@angular/core";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { YouLeadApiClientGenerated } from "./generated/you-lead-api-client/youLeadApiClientGenerated";
import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions";

@Injectable({ providedIn: 'root' })
export class YouLeadApiClient extends YouLeadApiClientGenerated {
    public constructor() {
        const adapter = new FetchRequestAdapter(new AnonymousAuthenticationProvider());
        adapter.baseUrl = 'https://localhost:7211';

        super(adapter);
    }
}