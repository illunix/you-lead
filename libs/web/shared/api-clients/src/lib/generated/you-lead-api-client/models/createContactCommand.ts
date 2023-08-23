import type {Parsable} from '@microsoft/kiota-abstractions';

export interface CreateContactCommand extends Parsable {
    /**
     * The address property
     */
    address?: string | undefined;
    /**
     * The city property
     */
    city?: string | undefined;
    /**
     * The email property
     */
    email?: string | undefined;
    /**
     * The firstName property
     */
    firstName?: string | undefined;
    /**
     * The lastName property
     */
    lastName?: string | undefined;
    /**
     * The phoneNumber property
     */
    phoneNumber?: string | undefined;
    /**
     * The zipCode property
     */
    zipCode?: string | undefined;
}
