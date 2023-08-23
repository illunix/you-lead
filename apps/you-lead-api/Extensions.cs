﻿namespace YouLead.Api;

internal static class Extensions
{
    public static IServiceCollection AddApi(this IServiceCollection services)
    {
        services.AddErrorHandling();
        services.AddCors();
        services.AddSwagger();

        services.AddValidatorsFromAssemblyContaining<Program>();

        return services;
    }

    public static WebApplication UseApi(this WebApplication app)
    {
        app.UseErrorHandling();
        app.UseCors("web-client");

        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        return app;
    }

    private static IServiceCollection AddErrorHandling(this IServiceCollection services)
        => services
            .AddSingleton<ErrorHandlerMiddleware>()
            .AddSingleton<IExceptionToResponseMapper, ExceptionToResponseMapper>();

    private static IApplicationBuilder UseErrorHandling(this IApplicationBuilder app)
        => app.UseMiddleware<ErrorHandlerMiddleware>();

    private static IServiceCollection AddCors(this IServiceCollection services)
        => services.AddCors(q =>
        {
            q.AddPolicy(
                "web-client",
                q =>
                {
                    q.AllowCredentials();
                    q
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("http://localhost:4200");
                }
            );
        });

    private static IServiceCollection AddSwagger(this IServiceCollection services)
        => services
            .AddEndpointsApiExplorer()
            .AddSwaggerGen();
}