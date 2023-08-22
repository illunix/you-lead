var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApi()
    .AddCore()
    .AddInfrastructure(builder.Configuration);

var app = builder.Build();

app.MapContactsEndpoints();

app
    .UseApi()
    .Run();