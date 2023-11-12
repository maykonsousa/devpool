export const typeDefs = `#graphql
  
  enum UserType {
    admin
    developer
    recruiter
    
  }

  enum Status {
    success
    error
  }

  ##USERS

  type User {
    id: String
    name: String
    email: String
    type: UserType
    role: String
    seniority: String
    city: String
    state: String
    bio: String
    username: String
    avatar_url: String
    cover_url: String
    createdAt: String
    updatedAt: String
  }
  input GetUserByEmailInput {
    email: String!
  }

  type GetUserByEmailPayload {
    user: User
    status: String!
    message: String! 
  }

  type getAllUsersPayload {
    users: [User!]
    status: Status!
    message: String!
  }

  input UserInput {
    name: String
    email: String
    type: UserType
    username: String
    avatar_url: String
    cover_url: String
    password: String
    bio: String
    role: String
    seniority: String
    city: String
    state: String
  }

  

  input UpdateUserInput {
    id: String!
    data: UserInput!
  }

  type CreateUserPayload {
    status: Status!
    message: String!
    
  }

  input DeleteUserInput {
    userId: String!
  }

  type DeleteUserPayload {
    status: Status!
    message: String!
  }

  ##ROLES

  type RolePayload {
    roles: [Role!]
    status: Status!
    message: String!
  }

  type Role {
    id: String
    name: String
    
  }

  ##TECHNOLOGIES

  type Technology {
    id: String
    name: String
   
  }

  type TechnologyPayload {
    technologies: [Technology!]
    status: Status!
    message: String!
  }

  ##PROJECTS

  input ProjectInput {
    name: String
    description: String
    image_url: String
    repo_url: String
    deployed_url: String
    githubId: String
    user_id: String
    
  }

  type TechnologyProject {
    id: String
    name: String
  }

  type Project {
    id: String
    name: String
    description: String
    image_url: String
    repo_url: String
    deployed_url: String
    githubId: String
    userId: String
    createdAt: String
    updatedAt: String
    technologies: [TechnologyProject!]
  }

  input GetProjectsByUserInput {
    userId: String!
  }

  type getProjetsPayload {
    projects: [Project!]
    status: Status!
    message: String!
  }

  input CreateProjectInput {
    project: ProjectInput
    technologies: [String]
  
  }


  type CreateProjectPayload {
    status: Status!
    message: String!
    projectId: String
  }

  input DeleteProjectInput {
    projectId: String!
    userId: String!
  }

  type DeleteProjectPayload {
    status: Status!
    message: String!
  }

  

  type Query {
    getAllUsers: getAllUsersPayload!
    getProjectsByUser(input: GetProjectsByUserInput!): getProjetsPayload!
    getUserByEmail(input: GetUserByEmailInput!): GetUserByEmailPayload!
    getRoles: RolePayload!
    getTechnologies: TechnologyPayload!

  }
  type Mutation {
    createUser(input: UserInput): CreateUserPayload!
    createProject(input:CreateProjectInput): CreateProjectPayload!
    updateUser(input: UpdateUserInput): CreateUserPayload!
    deleteProjectUser(input: DeleteProjectInput): DeleteProjectPayload!
    deleteUser(input: DeleteUserInput): DeleteUserPayload!
  }
`;
