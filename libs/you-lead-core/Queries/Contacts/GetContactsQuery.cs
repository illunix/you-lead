namespace YouLead.Core.Queries.Contacts;

public sealed record GetContactsQuery(string Email) : IQuery<IReadOnlyList<ContactDto>>;
