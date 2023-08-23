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
            .Produces<PagedDto<ContactDto>>()
            .Produces(StatusCodes.Status400BadRequest);

        group.MapPost(
                "/",
                CreateContact
            )
            .WithName("Create contact")
            .Produces(StatusCodes.Status201Created)
            .Produces(StatusCodes.Status400BadRequest)
            .Produces(StatusCodes.Status500InternalServerError)
            .ProducesValidationProblem(StatusCodes.Status422UnprocessableEntity)
            .AddEndpointFilter<ValidationFilter<CreateContactCommand>>();

        group.MapPut(
                "/{id}",
                UpdateContact
            )
            .WithName("Update contact")
            .Produces(StatusCodes.Status204NoContent)
            .Produces(StatusCodes.Status400BadRequest)
            .Produces(StatusCodes.Status500InternalServerError)
            .ProducesValidationProblem(StatusCodes.Status422UnprocessableEntity)
            .AddEndpointFilter<ValidationFilter<UpdateContactCommand>>();

        group.WithTags("Contacts");

        return group;
    }

    private static async Task<IResult> GetContacts(
        IMediator mediator,
        string? email,
        int pageNumber = 0,
        int pageSize = 10
    )
        => Results.Ok(await mediator.Send(new GetContactsQuery(
            email,
            pageNumber,
            pageSize
        )));

    private static async Task<IResult> CreateContact(
        CreateContactCommand qry,
        IMediator mediator
    )
    {
        await mediator.Send(qry);

        return Results.Created();
    }

    private static async Task<IResult> UpdateContact(
        UpdateContactCommand qry,
        int id,
        IMediator mediator
    )
    {
        await mediator.Send(qry with { Id = id });

        return Results.NoContent();
    }
}