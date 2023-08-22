namespace YouLead.Core.Queries.Contacts.Handlers;

[PrimaryConstructor]
public sealed record GetContactsQueryHandler : IQueryHandler<GetContactsQuery, IReadOnlyList<ContactDto>>
{
    private readonly IYouLeadDbContext _ctx;
    private readonly ContactMapper _mapper;

    public async ValueTask<IReadOnlyList<ContactDto>> Handle(
        GetContactsQuery qry,
        CancellationToken ct
    )
        => await _ctx.Contacts
            .AsNoTracking()
            .Select(q => _mapper.MapContactToContactDto(q))
            .ToListAsync(ct);
}