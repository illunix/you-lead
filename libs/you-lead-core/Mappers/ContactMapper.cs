﻿namespace YouLead.Core.Mappers;

[Mapper]
internal sealed partial class ContactMapper
{
    public partial ContactDto MapContactToContactDto(Contact contact);
    public partial Contact MapCreateContactCommandToContact(CreateContactCommand cmd);
    public partial void MapUpdateContactCommandToContact(
        UpdateContactCommand cmd,
        Contact contact
    );
}