﻿namespace YouLead.Api.Exceptions.Models;

public sealed record Error(
    string Code,
    string Message
);