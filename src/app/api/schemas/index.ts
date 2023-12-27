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
    current_company: String
    avatar_url: String
    cover_url: String
    pcd: Boolean
    createdAt: String
    updatedAt: String
    contacts: Social
  }

  type Recruiter {
    id: String
    name: String
    email: String
    avatar_url: String
    role: String
    seniority: String
    company: String
    contacts: Social
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

  input GetRecruiterByIdInput {
    id: String!
    userId: String!
  }

  type GetRecruiterByIdPayload {
    recruiter: Recruiter
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
    current_company: String
    avatar_url: String
    cover_url: String
    password: String
    bio: String
    role: String
    seniority: String
    city: String
    state: String
    pcd: Boolean
  }

  input Filters {
    technologies: [String]
    roles: [String]
    states: [String]
    seniorities: [String]
    pcd: Boolean
    language: String
    level: String
  }

  input GetUsersByFilterInput {
    filters: Filters
  }

  type getUsersByFilterPayload {
    users: [User!]
    status: Status!
    message: String!
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

  input GetLinkedinUserInput {
    token: String!
  }

  type LinkedinLocale {
    country: String
    language: String
  }

  type LinkedinUser {
    sub: String
    name: String
    given_name: String
    family_name: String
    picture: String
    locale: LinkedinLocale
    email: String
    email_verified: Boolean
  }

  type GetLinkedinUserPayload {
    linkedinUserData: LinkedinUser
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
  email: String
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

  input SendMailInput {
    name: String
    subject: String
    email: String
    message: String
    toName: String
    toEmail: String
  }

  type SendMailPayload {
    status: Status!
    message: String!
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

  type Language {
    id: String
    name: String
    level: String
    userId: String
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
    pcd: Boolean
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
    languages: [Language!]
  }

  type getProfilePayload {
    user: Profile
    status: Status!
    message: String!
  }

  ##LANGUAGES
  input LanguageInput {
    name: String
    level: String
    userId: String
  }

  input UpdateLanguageInput {
    languageId: String
    userId: String
    newLevel: String
  }

  input DeleteLanguageInput {
    languageId: String
    userId: String
  }

  

  type LanguageCombobox {
    id: String
    name: String
  }

  type getAllLanguagesPayload {
    languages: [LanguageCombobox!]
    status: Status!
    message: String!
  }

  type CreateLanguagePayload {
    status: Status!
    message: String!
  }

  input getLanguagesByUserInput {
    userId: String
    username: String
  }

  type getLanguagesByUserPayload {
    languages: [Language!]
    status: Status!
    message: String!
  }

  ## POSITIONS

  enum PositionType {
    CLT
    PJ
    Freelancer
    cooperado

  }

  enum PositionModel {
    Presencial
    Remoto
    Hibrido
  }

  type Position {
    id: String
    city: String
    company: String
    createdAt: String
    description: String
    language: String
    language_level: String
    model: PositionModel
    role: String
    seniority: String
    state: String
    type: PositionType
    userId: String
    is_resposible: Boolean
    url: String
    email: String
    techs: [TechnologyProject]
  }


  input CreatePositionInput {
    city: String
    company: String
    description: String
    language: String
    language_level: String
    model: PositionModel
    role: String
    seniority: String
    state: String
    type: PositionType
    userId: String
    is_resposible: Boolean
    url: String
    email: String
    techs: [String]
  }

  type CreatePositionPayload {
    status: Status!
    message: String!
  }





  

  type Query {
    ##USERS
    getAllUsers: getAllUsersPayload!
    getUserByEmail(input: GetUserByEmailInput!): GetUserByEmailPayload!
    getProfile(input: GetProfileInput!): getProfilePayload!
    getUserByUsername(input: GetUserByUsernameInput!): GetUserByUsernamePayload!
    getusersByFilter(input: GetUsersByFilterInput): getUsersByFilterPayload!
    getLinkedinUserByToken(input: GetLinkedinUserInput!): GetLinkedinUserPayload!
    getRecruiterById(input: GetRecruiterByIdInput!): GetRecruiterByIdPayload!

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

    ##LANGUAGES
    getAllLanguages: getAllLanguagesPayload!
    getLanguagesByUser(input: getLanguagesByUserInput): getLanguagesByUserPayload!

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
    sendMail(input: SendMailInput): SendMailPayload!


    ##FEEDBACK
    createFeedback(input: CreateFeedbackInput): CreateFeedbackPayload!

    ##LANGUAGES
    createLanguage(input: LanguageInput): CreateLanguagePayload!
    updateLanguage(input: UpdateLanguageInput): CreateLanguagePayload!
    deleteLanguage(input: DeleteLanguageInput): CreateLanguagePayload!

    ##POSITIONS
    createPosition(input: CreatePositionInput): CreatePositionPayload!
  }
`;
