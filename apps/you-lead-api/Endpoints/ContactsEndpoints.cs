namespace YouLead.Api.Endpoints;

internal static class ContactsEndpoints
{
    public static RouteGroupBuilder MapContactsEndpoints(this WebApplication app)
    {
        var group = app.MapGroup("contacts");

        group.MapGet(
                "/",
                GetContacts
            )
            .WithName("Get contacts")
            .Produces<IReadOnlyList<ContactDto>>()
            .Produces(StatusCodes.Status400BadRequest);

        group.WithTags("Contacts");

        return group;
    }

    private static async Task<IResult> GetContacts(
        IMediator mediator,
        GetContactsQuery qry
    )
        => Results.Ok(await mediator.Send(qry));
}