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

        group.MapPost(
                "/",
                CreateContact
            )
            .WithName("Create contact")
            .Produces(StatusCodes.Status201Created)
            .Produces(StatusCodes.Status400BadRequest);

        group.MapPut(
                "/{id}",
                UpdateContact
            )
            .WithName("Update contact")
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status400BadRequest);

        group.WithTags("Contacts");

        return group;
    }

    private static async Task<IResult> GetContacts(
        IMediator mediator,
        [AsParameters] GetContactsQuery qry
    )
        => Results.Ok(await mediator.Send(qry));

    private static async Task<IResult> CreateContact(
        IMediator mediator,
        CreateContactCommand qry
    )
    {
        await mediator.Send(qry);

        return Results.Created();
    }

    private static async Task<IResult> UpdateContact(
        IMediator mediator,
        Guid id,
        UpdateContactCommand qry
    )
    {
        await mediator.Send(qry with { Id = id });

        return Results.NoContent();
    }
}