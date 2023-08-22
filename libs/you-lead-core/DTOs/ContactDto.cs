namespace YouLead.Core.DTOs;

public sealed record ContactDto(
    string FirstName,
    string LastName,
    string Email,
    string PhoneNumber,
    string Address,
    string City,
    string ZipCode
);