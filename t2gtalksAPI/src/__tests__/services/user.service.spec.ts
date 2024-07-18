import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import {v4 as uuid} from 'uuid'
import { userService } from "../../services/user.service";
import { user } from "../../interfaces/user";

jest.mock('@prisma/client', ()=>{
    const PrismaClient = jest.fn().mockImplementation(()=>{
        return {
            user: {
                create: jest.fn(),
                findUnique:jest.fn(),
                findMany: jest.fn(),
                delete: jest.fn(),
                update: jest.fn()
            }
        }
    })

    return {PrismaClient}
})

jest.mock('bcryptjs', ()=> {
    return {
        hashSync: jest.fn()
    }
})

jest.mock("uuid", ()=>{
    return {
        v4: jest.fn()
    }
})

const mockPrisma = new PrismaClient()

const mockUser: user = {
    id: "1",
    name: "Test User",
    username: "testUser",
    email: "test@yopmail.com",
    password: "hashedPassword",
    bio: "Test bio",
    location: "Test Location",
    d_o_b: "15/3/2010",
    website: "http://example.com",
    profileImage: "profile.png",
    headerImage: "header.jpg"
}

describe('userService', ()=>{
    let service: userService

    beforeEach(()=>{
        service = new userService();
        service.prisma = mockPrisma;
        (uuid as jest.Mock).mockReturnValue('1');
        (bcrypt.hashSync as jest.Mock).mockReturnValue('hashedPassword')
    })

    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("should create a user", async()=>{
        (mockPrisma.user.create as jest.Mock).mockResolvedValueOnce(mockUser)

        const result = await service.createUser(mockUser)

        expect(mockPrisma.user.create).toHaveBeenCalledWith({
            data: {
                id: "1",
                name: "Test User",
                username: "testUser",
                email: "test@yopmail.com",
                password: "hashedPassword",
                bio: "Test bio",
                location: "Test Location",
                d_o_b: "15/3/2010",
                website: "http://example.com",
                profileImage: "profile.png",
                headerImage: "header.jpg"
            }
        })

        expect(result).toEqual({message: "Account creation success"});
    })

    it("should update a user", async()=>{
        (mockPrisma.user.findUnique as jest.Mock).mockResolvedValueOnce(mockUser);
        (mockPrisma.user.update as jest.Mock).mockResolvedValueOnce(mockUser);

        const result = await service.updateUser('1', mockUser)

        expect(mockPrisma.user.update).toHaveBeenCalledWith({
            where:{id: '1'},
            data:{
                name: "Test User",
                username: "testUser",
                email: "test@yopmail.com",
                bio: "Test bio",
                location: "Test Location",
                d_o_b: "15/3/2010",
                website: "http://example.com",
                profileImage: "profile.png",
                headerImage: "header.jpg"
            }
        })

        expect(result).toEqual({
            message: "User updated successfully",
            response: mockUser 
        })
    })

    it("should view all users", async()=>{
        (mockPrisma.user.findMany as jest.Mock).mockResolvedValueOnce([mockUser])

        const result = await service.viewAllUsers()

        expect(mockPrisma.user.findMany).toHaveBeenCalled()
        expect(result).toEqual({users: [mockUser]}) 
    })

    it("should view one user", async()=>{
        (mockPrisma.user.findUnique as jest.Mock).mockResolvedValueOnce(mockUser);

        const result = await service.viewOneUser("1")

        expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
            where: {id: "1"}
        }) 
        expect(result).toEqual({user: mockUser}) 
    })

    it("should delete a user", async ()=>{
        (mockPrisma.user.delete as jest.Mock).mockResolvedValueOnce(mockUser)

        const result = await service.deleteUser("1")

        expect(result).toEqual({message: "Account deleted successfully"})
    })
})