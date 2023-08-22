namespace YouLead.Core;

public static class Extensions
{
    public static IServiceCollection AddCore(this IServiceCollection services)
        => services
            .AddMediator(q => q.ServiceLifetime = ServiceLifetime.Transient)
            .AddMappers();

    private static IServiceCollection AddMappers(this IServiceCollection services)
        => services.AddSingleton<ContactMapper>();
}