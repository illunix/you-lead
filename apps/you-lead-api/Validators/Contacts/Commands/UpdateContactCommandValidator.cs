namespace YouLead.Api.Validators.Contacts.Commands;

public sealed class UpdateContactCommandValidator : AbstractValidator<UpdateContactCommand>
{
    public UpdateContactCommandValidator()
    {
        RuleFor(q => q.FirstName)
            .MaximumLength(30)
            .NotEmpty();
        RuleFor(q => q.LastName)
            .MaximumLength(30)
            .NotEmpty();
        RuleFor(q => q.Email)
            .MaximumLength(30)
            .NotEmpty()
            .EmailAddress();
        RuleFor(q => q.PhoneNumber)
            .MaximumLength(10)
            .NotEmpty();
        RuleFor(q => q.Address)
            .MaximumLength(50)
            .NotEmpty();
        RuleFor(q => q.City)
            .MaximumLength(20)
            .NotEmpty();
        RuleFor(q => q.ZipCode)
            .MaximumLength(10)
            .NotEmpty();
    }
}