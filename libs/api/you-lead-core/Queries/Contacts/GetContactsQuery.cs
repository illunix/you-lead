namespace YouLead.Core.Queries.Contacts;

public sealed record GetContactsQuery(
    string Email,
    int PageNumber,
    int PageSize
) : IQuery<PagedDto<ContactDto>>;