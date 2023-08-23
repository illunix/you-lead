namespace YouLead.Core.Exceptions.Contacts;

internal sealed class ContactNotFoundException : ExceptionBase
{
    public ContactNotFoundException(int id) : base($"Contact with ID: '{id}' was not found.") { }
}