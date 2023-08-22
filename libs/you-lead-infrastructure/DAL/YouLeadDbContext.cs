namespace YouLead.Infrastructure.DAL;

public sealed class YouLeadDbContext : 
    DbDataContext,
    IYouLeadDbContext
{
    public DbSet<Contact> Contacts { get; init; }

    public YouLeadDbContext(DbContextOptions<YouLeadDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
        => builder.ApplyConfigurationsFromAssembly(GetType().Assembly);
}