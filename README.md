Frontend: MENTOR AND STUDENT ASSIGNING
  
1. Overview :
       
   -  The frontend is developed using React.js.

   -  It communicates with the backend API to allow users to create mentors and students, assign students to mentors, change mentor      assignments, and view students' mentor history.

 2. Features :

    -  Create Mentor
  
       A form for creating a mentor by sending a POST request to the backend's /api/mentors endpoint. On submission, the form sends mentor details such as name and email to the backend and provides success/error

    feedback to the user.

    -  Create Student
    
          A form for creating a student by sending a POST request to /api/students. After submitting the form, the student is added to the database, and the user is notified of the result.

    -  Assign Students to Mentor

          A UI that allows the user to select a mentor and assign multiple students to them using the /api/mentors/:mentorId/assign API. Students already assigned to a mentor are not shown in the list.

    -  Change Mentor Assignment

          An interface where the user can select a student and reassign them to a different mentor by using the /api/students/:studentId/change-mentor API.

    -  View All Students for a Mentor
 
          A page where users can view all students assigned to a specific mentor by fetching data from /api/mentors/:mentorId/students.

    -  View Previous Mentors for a Student

          A page where users can view the mentor history for a particular student by calling the /api/students/:studentId/previous-mentors API.

    3. Frontend Setup Process :

          -  Use React.js to Build the UI : Create components like MentorForm, StudentForm, AssignStudents, and MentorList to handle various parts of the application.

          -  Communicate with the Backend : Use axios or the fetch API to send requests to the backend for creating mentors, students, and assigning them. Handle responses and show feedback to the user.

          - Validation and Error Handling : Validate inputs on the frontend before sending data to the backend. Implement error handling in case of failed API requests.

          - Routing : Use react-router-dom to create routes for different pages (e.g., Create Mentor, Assign Students, View Mentor's Students).

          - Deploy and Test : Once everything is set up, deploy the frontend and backend and test interactions like creating mentors, assigning students, and changing assignments.
      
            
