# Dream Jobs
A simple full-stack Job Seeking website. This job listing website where users can post jobs, search & apply jobs etc.
## Project features
-  Home page have a `Navbar`, `Banner`, `A banner section. Inside the banner there have a Heading Title, Short Description and a Search Input Field with a button.` `Footer` `Navbar` `with Active Route`.

- The `Job by category `have a tab system for Job by Category as  `All Jobs` `On Site Job` `Remote Job` `Hybrid` & `Part time Job`.

- On clicking `Any Tab` button, the user show each job card with `View Details Button`. When a user is not logged in and if he/ she clicks on the View Details button, notify the user with a message User have to log in first to view details by using a toast/ notification/ anything. Also, redirect him/ her to the login page. Without a login, user can not visit the single job details page.

- The `navbar` have `website name` with `logo`, `Home`, `User profile picture, Add A Job, My Jobs and Applied Jobs` and `Login`

 - This web app implemented `Email and password based Authentication`. User can the Registration and the login. Users can toggle between Login and Registration view.

 - On the Registration page, display errors when:

        The password
        is less than 6 characters
        don't have a capital letter
        don't have a special character

- On the Login page, display errors when:

        - password doesn't match
        - email doesn't match


- Also, implemented  `one extra login` which is  `Google`.

- After `Successful logged` in user show's a `toast`.

- Once logged in, the user name, profile picture and the logout button appear on the header.

- If the user clicks on the `Logout` button on `Navbar`, log him/her out.

- Added two more routes `Featured Employee` & `Top Career Advice`. These two routes will be private.

- `404 page` implemented. 
- `Add A Job ` route user can add new Job and it's saved into database.


- Clicking on the `Update button` user cad update existing product. It's also `Protected Route` 

## Live Site Link
- [Click Here to Open Live Site](https://dream-jobs-mahmud.web.app/)