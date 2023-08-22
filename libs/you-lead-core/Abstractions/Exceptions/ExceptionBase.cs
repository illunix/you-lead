namespace YouLead.Core.Abstractions.Exceptions;

public abstract class ExceptionBase : Exception
{
    protected ExceptionBase(string msg) : base(msg) { }
}