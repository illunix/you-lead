namespace YouLead.Infrastructure;

public static class Extensions
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration config
    )
    {
        services.AddMssql(config);

        return services;
    }

    private static IServiceCollection AddMssql(
        this IServiceCollection services,
        IConfiguration config
    )
    {
        services
            .AddOptions<MssqlOptions>()
            .Bind(config.GetSection(MssqlOptions.SectionName))
            .ValidateOnStart();

        var options = (string option)
            => config[$"{MssqlOptions.SectionName}:{option}"];

        return services.AddDbContext<IYouLeadDbContext, YouLeadDbContext>(q =>
        {
            var connStrBuilder = new SqlConnectionStringBuilder
            {
                DataSource = options("server"),
                InitialCatalog = options("database"),
                UserID = options("user"),
                Password = options("password")
            };

            q.UseSqlServer(connStrBuilder.ToString());
        });
    }
}