🌿 MemoirLeaves
A collaborative journaling platform where users create and share meaningful entries (“leaves”) with titles, text, and images — all within a clean, minimalist, and elegant interface.

📌 Features
📝 Create, read, update, and delete (CRUD) journal entries

🌄 Upload and display images alongside text entries

👥 Dual roles: Authors and viewers with tailored experiences

📱 Fully responsive design for desktop and mobile

🗄️ Persistent storage using MySQL

🔗 Built with a clean REST API architecture

🛠️ Tech Stack
Frontend: React.js, CSS

Backend: Node.js, Express.js

Database: MySQL

API Protocol: RESTful

🚀 Getting Started
Clone the repository
bash
Copy
Edit
git clone https://github.com/yourusername/memoirleaves.git
cd memoirleaves
Set up the backend
Navigate to the server folder:

bash
Copy
Edit
cd server
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file and configure your DB connection:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=memoirleaves
Run database migrations (if any) or set up tables manually.

Start the backend:

bash
Copy
Edit
npm start
Set up the frontend
Navigate to the client folder:

bash
Copy
Edit
cd client
Install dependencies:

bash
Copy
Edit
npm install
Start the frontend:

bash
Copy
Edit
npm start
The app will run on http://localhost:3000 and communicate with the backend on your configured port (e.g., http://localhost:3001).

📁 Project Structure
graphql
Copy
Edit
memoirleaves/
│
├── client/              # React frontend
│   ├── components/      # UI components like EntryForm, EntryList, etc.
│   └── App.js
│
├── server/              # Node backend
│   ├── routes/          # API endpoints
│   ├── controllers/     # Logic for CRUD operations
│   └── db/              # MySQL DB connection config
