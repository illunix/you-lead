namespace YouLead.Core.Queries.Contacts.Handlers;

[PrimaryConstructor]
public sealed partial class GetContactsQueryHandler : IQueryHandler<GetContactsQuery, PagedDto<ContactDto>>
{
    private readonly IYouLeadDbContext _ctx;
    private readonly ContactMapper _mapper;

    public async ValueTask<PagedDto<ContactDto>> Handle(
        GetContactsQuery qry,
        CancellationToken ct
    )
        => await _ctx.Contacts
            .AsNoTracking()
            .Where(ConstructFilterExpression(qry))
            .Select(q => _mapper.MapContactToContactDto(q))
            .ToPaged(
                qry.PageNumber,
                qry.PageSize
            );

    private Expression<Func<Contact, bool>> ConstructFilterExpression(GetContactsQuery qry)
    {
        var predicate = PredicateBuilder.True<Contact>();

        if (!string.IsNullOrEmpty(qry.Email))
            predicate = predicate.And(q => q.Email.Contains(qry.Email));

        return predicate;
    }
}