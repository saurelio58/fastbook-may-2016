### Version 0.1.0 (Day One)

#### Stories
User stories are used to describe functionality in a way that focuses on the actions a User can take at any given point and the outcomes expected by the User for those actions.
##### a USER
  - CAN register
    - IN ORDER TO be able to log in
  - CAN login
    - IF the USER has registered
    - AND the USER is not already logged in
    - IN ORDER TO
      - search for other users (and themselves)
      - view other user's profiles (and their own)
      - send friend requests to other users
      - review pending requests
  - CAN search for other users (and themselves)
    - IF the USER is logged in
    - by full or partial name
    - IN ORDER TO
      - view a list of search results
      - select a user's profile from the list of results to view
  - CAN view other user's profiles (and their own)
    - IF the USER is logged in
    - IN ORDER TO
      - view the selected user's profile information
      - view the selected user's list of friends
      - send the selected user a friend request
  - CAN send a friend request to a target user
    - IF the USER is logged in
    - AND the target user is not the same as the USER
    - AND the target user is not already a friend of the USER
    - AND neither user has a pending friend request from the other
  - CAN review pending friend requests from other users
    - IF the USER is logged in
    - IN ORDER TO
      - accept or decline any number of pending friend requests from other users
  - CAN log out
    - IF the USER is logged in

#### Screen Aliases

##### Home Page
  - DISPLAY
    - IF the browser url does not match any other screens
    - OR immediately after logging in or out
  - IF logged in
    - show the LOGGED IN USER's User Profile
  - IF logged out
    - show User Login

#### Screen Fragments
##### App Bar
  - Found on every screen
  - IF logged in
    - DISPLAY DATA
      - Full Name of LOGGED IN USER
    - ACTIONS
      - Search Users
        - DISABLED if search INPUT field is empty
      - Go to LOGGED IN USER's User Profile
      - View Pending Friend Requests
      - Logout
  - IF logged out
    - ACTIONS
      - Go to User Login
      - Go to User Registration

#### Screens
##### User Registration
  - ACTIONS
    - Submit
      - DISABLED if INPUT requirements are not met
    - Reset
      - DISABLED if all INPUT fields are empty or uninitialized
      - clears INPUT fields / sets defaults
  - INPUT DATA
    - Profile Data
      - First Name
        - required
        - at least one character
      - Last Name
        - required
        - at least one character
      - Birth Date
        - required
        - must be in the past
    - Login Credentials
      - Email Address
        - required
        - unique
        - must contain `@` character
        - at least three characters (ex. `x@y`)
      - Password
        - required
        - at least one character
        - obscured (dots, not characters)
        - hashed before storage in database

##### User Login
  - ACTIONS
    - Login
      - DISABLED if INPUT requirements are not met
    - Reset
      - DISABLED if all INPUT fields are empty or uninitialized
      - clears INPUT fields
  - INPUT DATA
    - Email Address
      - required
    - Password
      - required
      - obscured

##### User Search Result List
  - ACTIONS
    - Go to User's Profile
      - one for each search result in the DISPLAY DATA
  - DISPLAY DATA
    - List of Users whose full names match the search criteria

##### User Profile
  - DISPLAY DATA
    - Full Name (first name and last name)
    - Birthday (day and month)
    - Age (years)
    - Friend List (each with a link to the friend's profile)
  - ACTIONS
    - Send Friend Request
      - DISABLED if the LOGGED IN USER and the TARGET USER already have a pending friend request between each other
      - DISABLED if the LOGGED IN USER and the TARGET USER are already friends

##### Pending Friend Request List
  - DISPLAY DATA
    - List of Users who have sent the LOGGED IN USER a friend request
  - ACTIONS
    - Accept
      - one for each pending request in the DISPLAY DATA
    - Reject
      - one for each pending request in the DISPLAY DATA
