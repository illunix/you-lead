﻿namespace YouLead.Api.Exceptions.Middlewares;

internal sealed class ErrorHandlerMiddleware : IMiddleware
{
    private readonly IExceptionToResponseMapper _mapper;
    private readonly ILogger<ErrorHandlerMiddleware> _logger;

    public ErrorHandlerMiddleware(
        IExceptionToResponseMapper mapper,
        ILogger<ErrorHandlerMiddleware> logger
    )
    {
        _mapper = mapper;
        _logger = logger;
    }

    public async Task InvokeAsync(
        HttpContext ctx,
        RequestDelegate next
    )
    {
        try
        {
            await next(ctx);
        }
        catch (Exception ex)
        {
            _logger.LogError(
                ex,
                ex.Message
            );

            await HandleError(
                ctx,
                ex
            );
        }
    }

    private async Task HandleError(
        HttpContext ctx,
        Exception ex
    )
    {
        var errRes = _mapper.Map(ex);
        ctx.Response.StatusCode = (int)(errRes?.Code ?? HttpStatusCode.InternalServerError);
        var res = errRes?.Response;
        if (res is null)
            return;

        await ctx.Response.WriteAsJsonAsync(res);
    }
}