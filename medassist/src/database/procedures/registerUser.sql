CREATE OR ALTER PROCEDURE registerUser(
    @id VARCHAR(255),
    @name VARCHAR(255),
    @email VARCHAR(255),
    @phone_number VARCHAR(20),
    @createdAt VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Users(id, name, phone_number, email, password, createdAt) 
    VALUES(@id, @name, @phone_number, @email, @password, @createdAt)
END