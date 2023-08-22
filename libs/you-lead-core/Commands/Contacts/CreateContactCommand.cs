namespace YouLead.Core.Commands.Contacts;

public sealed record CreateContactCommand(
    string FirstName,
    string LastName,
    string Email,
    string PhoneNumber,
    string Address,
    string City,
    string ZipCode
) : ICommand;