namespace YouLead.Infrastructure.Options;

internal sealed class MssqlOptions
{
    public const string SectionName = "mssql";

    public required string Server { get; init; }
    public required string Database { get; init; }
    public required string User { get; init; }
    public required string Password { get; init; }
}
