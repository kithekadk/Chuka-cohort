CREATE OR ALTER PROCEDURE updateOrganization(
    @id VARCHAR(255),
    @name VARCHAR(255),
    @description VARCHAR(255),
    @profile_image VARCHAR(255)
)
AS
BEGIN
    UPDATE Organizations SET id=@id, name=@name, description=@description, profile_image=@profile_image WHERE id=@id
END