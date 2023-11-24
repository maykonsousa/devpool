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

  input GetUserByUsernameInput {
    username: String!
  }

  type GetUserByUsernamePayload {
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

  input AddOrRemoveTechnologyUserInput {
    userId: String!
    technologyId: String!
  }

  type AddOrRemoveTechnologyUserPayload {
    status: Status!
    message: String!
  }

  type TechnologyPayload {
    technologies: [Technology!]
    status: Status!
    message: String!
  }

  input GetTechsByUserInput {
    userId: String!
  }

  type TechUser {
    id: String
    techId: String
    name: String
  }

  type GetTechsByUserPayload {
    techs: [TechUser!]
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
    userId: String
    username: String
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

  ##COURSES
  input CourseInput {
    courseUrl: String
    description: String
    duration: Int
    name: String
    progress: Int
    school: String
    type: String
  }

  input CreateCourseInput {
    userId: String!
    data: CourseInput!
  }

  type CreateCoursePayload {
    status: Status!
    message: String!
    id: String
  }

  type Course {
    id: String
    courseUrl: String
    description: String
    duration: Int
    name: String
    progress: Int
    school: String
    type: String
    userId: String
    createdAt: String
    updatedAt: String
  }

  input GetCoursesByUserInput {
    userId: String!
  }

  type CoursePayload {
    courses: [Course!]
    status: Status!
    message: String!
  }

  input DeleteCourseInput {
    courseId: String!
    userId: String!
  }

  type DeleteCoursePayload {
    status: Status!
    message: String!
  }

  input UpdateCourseInput {
    courseId: String!
    userId: String!
    data: CourseInput!
  }

  type UpdateCoursePayload {
    id: String
    status: Status!
    message: String!
  }

  ##JOBS

  input JobInput {
    name: String
    company: String
    description: String
    startDate: String
    endDate: String
    isCurrent: Boolean
  }

  input CreateJobInput {
    userId: String!
    data: JobInput!
    technologies: [String]
  }

  type CreateJobPayload {
    id: String
    status: Status!
    message: String!
  }

  input GetJobsByUserInput {
    userId: String
    username: String
  }

  type Job {
    id: String
    name: String
    company: String
    description: String
    startDate: String
    endDate: String
    isCurrent: Boolean
    userId: String
    createdAt: String
    updatedAt: String
    technologies: [TechnologyProject]
  }

  type JobPayload {
    jobs: [Job!]
    status: Status!
    message: String!
  }

  input DeleteJobInput {
    userId: String!
    jobId: String!
  }

  type DeleteJobPayload {
    status: Status!
    message: String!
  }

  ##CONTACTS

  type Social {
  id: String 
  userId: String
  linkedin_url: String
  instagram_url: String
  github_url: String
  personal_website: String
  cell_phone: String
  twitter_url: String
  createdAt: String 
  updatedAt: String      
  }

  input SocialInput {
    linkedin_url: String
    instagram_url: String
    github_url: String
    personal_website: String
    cell_phone: String
    twitter_url: String
  }

  input GetContactsInput {
    userId: String
    username: String
  }

  type GetContactsPayload {
    contacts: Social
    status: Status!
    message: String!
  }

  input UpdateContactsInput {
    userId: String!
    data: SocialInput!
  }

  type UpdateContactsPayload {
    status: Status!
    message: String!
  }

  ##FEEDBACK

  input FeedbackInputData {
    name: String
    email: String
    phone: String
    message: String
  }

  input CreateFeedbackInput {
    feedback: FeedbackInputData
  }

  type CreateFeedbackPayload {
    status: Status!
    message: String!
  }

  ##PROFILE
  input GetProfileInput {
    username: String!
  }

  type Profile {
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
    technologies: [TechnologyProject!]
    projects: [Project!]
    jobs: [Job!]
    courses: [Course!]
    contacts: Social
  }

  type getProfilePayload {
    user: Profile
    status: Status!
    message: String!
  }



  

  type Query {
    ##USERS
    getAllUsers: getAllUsersPayload!
    getUserByEmail(input: GetUserByEmailInput!): GetUserByEmailPayload!
    getProfile(input: GetProfileInput!): getProfilePayload!
    getUserByUsername(input: GetUserByUsernameInput!): GetUserByUsernamePayload!

    ##PROJECTS
    getProjectsByUser(input: GetProjectsByUserInput!): getProjetsPayload!

    ##ROLES
    getRoles: RolePayload!

    ##TECHNOLOGIES
    getTechnologies: TechnologyPayload!

    ##COURSES
    getCoursesByUser(input: GetCoursesByUserInput): CoursePayload!

    ##JOBS
    getJobsByUser(input: GetJobsByUserInput): JobPayload!

    ##TECHNOLOGIES
    getTechsByUser(input: GetTechsByUserInput): GetTechsByUserPayload!

    ##CONTACTS
    getContacts(input: GetContactsInput): GetContactsPayload!

  }
  type Mutation {
    ##USERS
    createUser(input: UserInput): CreateUserPayload!
    updateUser(input: UpdateUserInput): CreateUserPayload!
    deleteUser(input: DeleteUserInput): DeleteUserPayload!

    ##PROJECTS
    createProject(input:CreateProjectInput): CreateProjectPayload!
    deleteProjectUser(input: DeleteProjectInput): DeleteProjectPayload!

    ##COURSES
    createCourse(input: CreateCourseInput): CreateCoursePayload!
    deleteCourseUser(input: DeleteCourseInput): DeleteCoursePayload!
    updateCourseUser(input: UpdateCourseInput): UpdateCoursePayload!

    ##JOBS
    createJob(input: CreateJobInput): CreateJobPayload!
    deleteJobUser(input: DeleteJobInput): DeleteJobPayload!

    ##TECHNOLOGIES
    addOrRemoveTechnologyUser(input: AddOrRemoveTechnologyUserInput): AddOrRemoveTechnologyUserPayload!

    ##CONTACTS
    updateContacts(input: UpdateContactsInput): UpdateContactsPayload!

    ##FEEDBACK
    createFeedback(input: CreateFeedbackInput): CreateFeedbackPayload!
  }
`;
