namespace YouLead.Core.Abstractions;

public interface IDataContext : IDisposable
{
    Task<int> SaveChanges();
}