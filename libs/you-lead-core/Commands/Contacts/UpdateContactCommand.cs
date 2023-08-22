namespace YouLead.Core.Commands.Contacts;

public sealed record UpdateContactCommand(
    [property: JsonIgnore] Guid Id,
    string FirstName,
    string LastName,
    string Email,
    string PhoneNumber,
    string Address,
    string City,
    string ZipCode
) : ICommand;