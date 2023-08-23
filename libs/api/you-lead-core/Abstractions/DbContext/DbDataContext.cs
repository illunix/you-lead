namespace YouLead.Core.Abstractions.DbContext;

public abstract class DbDataContext :
    Microsoft.EntityFrameworkCore.DbContext,
    IDataContext
{
    protected DbDataContext(DbContextOptions options) : base(options) { }

    public async Task<int> SaveChanges()
        => await base.SaveChangesAsync();
}