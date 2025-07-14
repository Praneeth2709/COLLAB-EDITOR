# COLLAB-EDITOR

*COMPANY* : CODETECH IT SOLUTIONS

*NAME* : UDDARAJU PRANEETH VARMA

*INTERN ID* :CT08DM1019

*DURATION* : 8 WEEKS

*MENTOR* : NEELA SANTOSH

##The aim of this task is to develop a real-time collaborative document editor, where multiple users can edit the same document at the same time and see each other’s changes instantly. The main focus is on creating a dynamic and responsive user interface, as well as ensuring that all edits are synchronized in real time across all connected users.

For the frontend, I used a modern JavaScript framework—React.js—to build a user interface that updates quickly and efficiently as users type or make changes. React’s component-based structure makes it easier to manage the different parts of the editor, such as the text area, user list, and document controls. The design is made responsive with CSS, so the editor works well on both desktop and mobile devices.

On the backend, Node.js was chosen to handle the server-side logic and manage real-time communication between users. The backend is responsible for receiving updates from one user and broadcasting those changes to everyone else who is editing the same document. This is typically done using WebSocket technology, which allows for fast, two-way communication between the server and all connected clients.

For data storage, MongoDB was used to save the document content and keep track of changes. This allows the application to store documents in a flexible format and retrieve them quickly when users open or edit a document. The backend connects to the database to save updates in real time, so no changes are lost even if a user disconnects.

The development process included:
- Building the frontend with React.js, including the main editor area and features for real-time updates.
- Setting up the backend with Node.js to handle user connections and synchronize document changes.
- Integrating MongoDB to store document data and ensure persistence.
- Using WebSocket connections to keep all users’ views in sync as they edit the document together.

The application can be run locally or deployed to a server, and users can access it through any modern web browser. The structure also makes it possible to add more features in the future, such as user authentication, document version history, or support for different document types. The main goal was to keep the editor simple, responsive, and focused on real-time collaboration, using widely adopted frameworks and tools for both the frontend and backend.


#output:
<img width="594" height="230" alt="Image" src="https://github.com/user-attachments/assets/4c96a8e7-6fa3-4332-96f7-189e59e710c4" />
