namespace YouLead.Core.Abstractions;

public interface IYouLeadDbContext : IDataContext
{
    public DbSet<Contact> Contacts { get; init; }
}