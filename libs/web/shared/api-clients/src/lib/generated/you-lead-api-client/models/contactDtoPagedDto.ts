import type {ContactDto} from './contactDto';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactDtoPagedDto extends Parsable {
    /**
     * The items property
     */
    items?: ContactDto[] | undefined;
    /**
     * The pageNumber property
     */
    pageNumber?: number | undefined;
    /**
     * The pageSize property
     */
    pageSize?: number | undefined;
    /**
     * The totalItems property
     */
    totalItems?: number | undefined;
    /**
     * The totalPages property
     */
    totalPages?: number | undefined;
}
