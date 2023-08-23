namespace YouLead.Core.Commands.Contacts.Handlers;

[PrimaryConstructor]
public sealed partial class CreateContactCommandHandler : ICommandHandler<CreateContactCommand>
{
    private readonly IYouLeadDbContext _ctx;
    private readonly ContactMapper _mapper;

    public async ValueTask<Unit> Handle(
        CreateContactCommand cmd,
        CancellationToken ct
    )
    {
        _ctx.Contacts.Add(_mapper.MapCreateContactCommandToContact(cmd));

        await _ctx.SaveChanges();

        return Unit.Value;
    }
}