fastbook-may-2016
=================

FastTrack'D Group Assignment  
April/May 2016  
Memphis, TN

Assignment to create a quick and dirty facebook clone. Exercises group development and project planning skills. Especially fun for the teachers, who get to be the evil dungeon masters they've always wanted to be.

Reference Material
------------------

### git
- CodeSchool: [Try Git in the Browser](https://try.github.io)  
  15 minute interactive course that's great for newcomers to git. Teaches mostly commandline git and some GitHub-specific concepts.
- Atlassian: [Git Workflows and Tutorials](https://www.atlassian.com/git/tutorials/comparing-workflows/)  
  Learn about and compare different git workflows.

#### git flow
- nvie (Vincent Driessen): [A Successful Git Branching Model](http://nvie.com/posts/a-successful-git-branching-model/)  
  This article first laid out the principles of git flow. Long and conceptual.
- Atlassian: [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)  
  Another explanation of the principles of git flow. Shorter, and more practical.
- Daniel Kummer: [git-flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)  
  Great for visual learners. Lays out the concepts of git flow in a graphical and intuitive fashion.
- nvie (Vincent Driessen): [gitflow on GitHub](https://github.com/nvie/gitflow)  
  Commandline git extensions supporting git flow.

### angular
- angular.js: [Angular Developer Guide](https://docs.angularjs.org/guide)  
  A guided tour of Angular's major features, aimed at new developers.
- angular.js: [Angular API Documentation](https://docs.angularjs.org/api)  
  Full API documentation for Angular.
- johnpapa: [Angular 1 Styleguide](https://material.angularjs.org/latest/)  
  Thorough, specific, well-reasoned, and widely adopted styleguide for Angular 1 in pre-ES2015 (read: older JavaScript) environments. Angular-team-approved.

#### angular-material
- [Angular Material](https://material.angularjs.org/latest/)  
  Homepage for the angular-material component library, with lots of demos (with code examples!) and documentation. Be sure to select the version of the library you are including in the project!
- Google: [Material Design Specification](https://www.google.com/design/spec/material-design/)  
  The ui-design specification (manifesto?) Google uses to design web and mobile applications. Angular Material is a so-called reference implementation of this specification.

Version 0.2.0 (Day Two)
-----------------------

### Technologies

#### Text Editors and IDEs
- Eclipse
- Atom

#### Version Control
- git (VCS)
- Git Kraken (git GUI)

#### Backend
- Java (primary language)
- Maven (build tool & dependency management)
- Wildfly (application server)
- MySQL (persistence store)
- Hibernate (ORM framework)
- Spring Framework (IoC container)
- Spring MVC (for RESTful webservices)

#### Frontend
- JavaScript (primary language)
- Angular.js (ui framework)
  - angular-ui-router (routing framework)
  - angular-material (component library)
    - angular-animate (animation)
    - angular-aria (accessibility)
    - angular-messages (messages / client-side validation)
    - Roboto Font Family
    - Material Icons

Roadmap
-------

### Version 0.2.0 (Day Two)

#### New in Version 0.2.0

##### Stories
###### a USER
  - CAN create a group
    - IF the USER is logged in
    - IN ORDER TO
      - become the new group's owner
  - CAN view group pages
    - IF the USER is logged in
    - IN ORDER TO
      - view the group's owner
      - view a list of the group's members
      - leave a comment on the group's timeline
      - join or leave the group
  - CAN join a group
    - IF the USER is logged in
    - AND the USER is not the owner of the group (owners are permanent members)
    - AND the USER is not a member of the group
    - IN ORDER TO
      - be able to leave a comment on the group's timeline
  - CAN leave a group
    - IF the USER is logged in
    - AND the USER is not the owner of the group (owners are permanent members)
    - AND the USER is a member of the group
  - CAN leave a comment on a group's timeline
    - IF the USER is logged in
    - AND the USER is a member (OR owner) of the group
  - CAN leave a comment on a user's timeline
    - IF the USER is logged in
    - AND the USER is friends with the target user

##### Screen Fragments
###### Timeline
  - Found on user profiles and group pages
  - DISPLAY DATA
    - list of Comments left on the Timeline
      - reverse-chronological order (newest at the top, oldest at the bottom)
  - ACTIONS
    - Leave a Comment

###### Comment
  - Found in the contents of Timelines
  - DISPLAY DATA
    - comment text
    - creation timestamp
      - human readable format
    - author
      - user's full name
      - should link to target user's profile

###### Comment Form
  - Found at the top of Timelines
    - INPUT DATA
      - Comment Text
        - required
        - at least one character
    - ACTIONS
      - Leave a Comment
        - DISABLED
          - IF INPUT requirements are not met
          - OR
            - IF Timeline is on a user profile
            - AND LOGGED IN USER is not friends with the target user
          - OR
            - IF Timeline is on a group page
            - AND LOGGED IN USER is not the owner or a member of the target group

##### Screens
###### Create Group
  - ACTIONS
    - Submit
      - DISABLED if INPUT requirements are not met
  - INPUT DATA
    - Group Name
      - required
      - unique
      - at least one character

###### Group Page
  - Timeline (_screen fragment_)
  - ACTIONS
    - Join Group
      - DISABLED if the LOGGED IN USER is already a member of the Group
      - DISABLED if the LOGGED IN USER is the owner of the Group (owners are considered members)
    - Leave Group
      - DISABLED if the LOGGED IN USER is not a member of the Group
      - DISABLED if the LOGGED IN USER is the owner of the Group (owners cannot leave their Groups)
  - DISPLAY DATA
    - Owner (with link to owner's user profile)
    - List of Members (each link to the appropriate user profile


#### Changed from Version 0.1.0

##### Stories
###### a USER
  - CAN search for other users **and groups** (and themselves)
    - IF the USER is logged in
    - by full or partial name
    - IN ORDER TO
      - view a list of search results
      - select a user's profile from the list of results to view
      - **select a group page from the list of results to view**
  - CAN view other user's profiles (and their own)
    - IF the USER is logged in
    - IN ORDER TO
      - view the selected user's profile information
      - view the selected user's list of friends
      - **view the selected user's owned pages**
      - send the selected user a friend request
      - **leave a comment on the selected user's timeline**

##### Screen Fragments
###### App Bar
  - Found on every screen
  - IF logged in
    - DISPLAY DATA
      - Full Name of LOGGED IN USER
    - ACTIONS
      - Search Users **and Groups**
        - DISABLED if search INPUT field is empty
      - Go to LOGGED IN USER's User Profile
      - **Create Group**
      - View Pending Friend Requests
      - Logout
  - IF logged out
    - ACTIONS
      - Go to User Login
      - Go to User Registration

##### Screens
###### ~~User~~ Search Result List
  - ACTIONS
    - Go to User's Profile
      - one for each **User-type** search result in the DISPLAY DATA
    - **Go to Group Page**
      - **one for each Group-type search result in the DISPLAY DATA**
  - DISPLAY DATA
    - List of Users **and Groups** whose ~~full~~ names match the search criteria

###### User Profile
  - **Timeline (_screen fragment_)**
  - DISPLAY DATA
    - Full Name (first name and last name)
    - Birthday (day and month)
    - Age (years)
    - Friend List (each with a link to the friend's profile)
    - **Owned Group List (each with a link to the group page)**
  - ACTIONS
    - Send Friend Request
      - DISABLED
        - IF the LOGGED IN USER and the TARGET USER already have a pending friend request between each other
        - OR the LOGGED IN USER and the TARGET USER are already friends
