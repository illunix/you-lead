﻿namespace YouLead.Api.Exceptions.Models;

public sealed record ErrorsResponse(params Error[] Errors);