namespace YouLead.Infrastructure.DAL.Configurations;

internal sealed class ContactConfiguration : IEntityTypeConfiguration<Contact>
{
    public void Configure(EntityTypeBuilder<Contact> builder)
    {
        builder.HasKey(q => q.Id);
        builder
            .HasIndex(q => q.Email)
            .IsUnique();
        builder
            .Property(q => q.FirstName)
            .HasMaxLength(30)
            .IsRequired();
        builder
            .Property(q => q.LastName)
            .HasMaxLength(30)
            .IsRequired();
        builder
            .Property(q => q.Email)
            .HasMaxLength(30)
            .IsRequired();
        builder
            .Property(q => q.PhoneNumber)
            .HasMaxLength(10)
            .IsRequired();
        builder
            .Property(q => q.Address)
            .HasMaxLength(50)
            .IsRequired();
        builder
            .Property(q => q.City)
            .HasMaxLength(20)
            .IsRequired();
        builder
            .Property(q => q.ZipCode)
            .HasMaxLength(10)
            .IsRequired();
    }
}
