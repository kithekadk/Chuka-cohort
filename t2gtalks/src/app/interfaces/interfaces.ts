export interface post {
    id: string,
    content: string,
    images?: string[],
    authorId?: string,
    authorName?: string,
    createdAt?: string,
    updatedAt?: string
    commentsCount: number
}

export interface new_post{
    content: string,
    images?: string[],
    authorId?: string
}

export interface login_details {
    email: string,
    password: string
}

export interface user {
    id: string
    username: string
    email: string
    password: string
    name?: string
    bio?: string
    location?: string
    d_o_b?: string
    website?: string
    profileImage?: string
    headerImage?: string
}

export interface new_user { 
    name: string, 
    username: string, 
    email: string, 
    password: string 
}

export interface token_details {
    info?: {
        id: string,
        username: string,
        email: string
        name: string
        role: string
    },
    error?: {
        message: string
    }
}

export interface comment {
    id: string
    content: string
    postId: string
    authorId: string
    authorName: string
    updatedAt: string
}

export interface new_comment {
    comment: string,
    post_id: string,
    authorId: string
}