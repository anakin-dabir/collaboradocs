<p align="center">
  <img src="https://anakin-dabir.github.io/public/collabs.png" />
</p>
<p align="center">Real-time collaboration, anywhere, anytime</p>
<p align="center">
<img src="https://img.shields.io/badge/react-v18.2-teal" />
<img src="https://img.shields.io/badge/redux-v5.0.1-purple" />
<img src="https://img.shields.io/badge/express-v4.18.2-blue" />
<img src="https://img.shields.io/badge/mongoose-v8.1.2-darkgreen" />
<img src="https://img.shields.io/badge/socket.io-v4.7.4-white" />
</p>
<p align="center">
<img src="https://img.shields.io/badge/@mui/material-v5.15.7-darkblue" />
<img src="https://img.shields.io/badge/@tiptap/react-v2.2.4-orange" />
<img src="https://img.shields.io/badge/tailwindcss-v3.4.1-cadetblue" />

</p>

<hr />

### Introduction

Collaboradocs is a web application that offers comprehensive features for storing, tracking, sharing and managing project documentation seamlessly, ensuring efficient communication and productivity throughout the project lifecycle.

### Project Features

- Users can signup into their accounts with email confirmation link and login with password
- Public (non-authenticated) users & authenticated users can access all the public documents without any interaction
- Authenticated users can create projects to organize documents and access them
- Authenticated users can also access the projects they are members of and collaborte into the documents that are public and shared
- Members of projects can edit documents in react-time and also track changes made by different users
- User can create request to collaborate in others documents in real-time
- Real-time notifications
- User can star documents (it's a "like" feature)
- Version control to track document revisions, allowing users to revert to previous versions
- Document permissions for visibility = Public, Private, and Shared
- Collaborative editing tools with enrich text editor and presence indicators
- Document search functionality
- Robust security measures to protect sensitive project data with secure user authentication and authorization using JWT authorization

## Run Locally

- Clone the project

```bash
  git clone https://github.com/anakin-dabir/collaboradocs.git
```

- Go to the project directory

```bash
  cd collaboradocs
```

- Install dependencies in both server and client folders

```bash
  cd client && yarn & cd server && yarn
```

<li>You need the following environment variables to add on server in .env file:
<ol>
<li>
<code>MONGO</code> mongodb url</li>
<li>
<code>SERVER</code> server side url</li>
<li>
<code>CLIENT</code> client side url</li>
<li>
<code>TOKEN</code> secret token for JWT creation</li>
</ol>
</li>

- Start both client and server side servers separately by

```bash
  yarn dev
```

### API Endpoints

- Authentication
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `POST` | /auth/register | To sign up a new user account |
  | `POST` | /auth/login | To login an existing user account |
  | `POST` | /auth/search | To search a user |
  | `POST` | /auth/updateName | To update user credentials |
  | `DELETE` | /auth/delete | To delete a user account |

- Project
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /project/getAll | To retrieve all projects of the user including the ones they are member of |
  | `GET` | /project/get | To retrieve all projects of current user |
  | `POST` | /project/create | To create a new project |
  | `POST` | /project/update | To edit the details of a project |
  | `DELETE` | /project/delete | To delete an existing project |

- Documents
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /document/getAll | To retrieve all documents that are public |
  | `GET` | /document/get/:docId | To retrieve details of document by it's \_id |
  | `GET` | /document/getByProjectId/:projectId | To retrieve all documents under the project |
  | `POST` | /document/create | To create a new document |
  | `POST` | /document/edit | To edit the details of a document |
  | `POST` | /document/star/:documentId | To star the document |
  | `DELETE` | /document/delete | To delete an existing document |
  | `DELETE` | /document/unstar/:documentId | To unstar the document |

- Request
  | HTTP | Endpoints | Action |
  | ---------- | -------------------- | -------------------------------------- |
  | `GET` | /request/goingToAdmin | To retrieve all requests that are going to Admin of the project |
  | `GET` | /request/goingFromAdmin | To retrieve all requests that Admin of the project is making |
  | `POST` | /request/create | To create a new request of collaboration |
  | `POST` | /request/accept | To accept the request to collaborate |
  | `DELETE` | /request/reject | To reject the request to collaborate |
