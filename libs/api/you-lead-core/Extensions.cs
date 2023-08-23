namespace YouLead.Core;

public static class Extensions
{
    public static IServiceCollection AddCore(this IServiceCollection services)
        => services
            .AddMediator(q =>
            {
                q.Namespace = "YouLead.Core.Mediator";
                q.ServiceLifetime = ServiceLifetime.Transient;
            })
            .AddMappers();

    public static async Task<PagedDto<T>> ToPaged<T>(
        this IQueryable<T> source,
        int pageNumber,
        int pageSize
    )
    {
        var totalItems = await source.CountAsync();
        var items = await source
            .Skip(pageNumber * pageSize)
            .Take(pageSize)
            .ToListAsync();

        return new()
        {
            Items = items,
            PageNumber = pageNumber,
            PageSize = pageSize,
            TotalItems = totalItems
        };
    }

    private static IServiceCollection AddMappers(this IServiceCollection services)
        => services.AddSingleton<ContactMapper>();
}
