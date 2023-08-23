namespace YouLead.Core.Commands.Contacts.Handlers;

[PrimaryConstructor]
public sealed partial class UpdateContactCommandHandler : ICommandHandler<UpdateContactCommand>
{
    private readonly IYouLeadDbContext _ctx;
    private readonly ContactMapper _mapper;

    public async ValueTask<Unit> Handle(
        UpdateContactCommand cmd,
        CancellationToken ct
    )
    {
        var contact = await _ctx.Contacts
            .Where(q => q.Id == cmd.Id)
            .FirstOrDefaultAsync(ct) ?? 
                throw new ContactNotFoundException(cmd.Id);

        _mapper.MapUpdateContactCommandToContact(
            cmd,
            contact
        );

        _ctx.Contacts.Update(contact);

        await _ctx.SaveChanges();

        return Unit.Value;
    }
}