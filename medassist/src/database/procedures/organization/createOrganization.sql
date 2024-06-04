
CREATE OR ALTER PROCEDURE createOrganization(
    @id VARCHAR(255),
    @name VARCHAR(255),
    @description VARCHAR(255),
    @profile_image VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Organizations(id, name, description, profile_image)
    VALUES(@id, @name, @description, @profile_image)
END