namespace YouLead.Core.DTOs;

public sealed record ContactDto(
    int Id,
    string FirstName,
    string LastName,
    string Email,
    string PhoneNumber,
    string Address,
    string City,
    string ZipCode
);