# ToDo List Application

A simple ToDo List application built using React and Vite. This application allows users to add tasks, mark them as complete, and delete them.

## Features

- **Add Task:** Users can add a new task along with a description.
- **Complete Task:** Users can mark a task as complete by clicking on the complete icon. The task will then be moved to the completed section.
- **Delete Task:** Users can delete a task by clicking on the delete icon.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    cd todo-list-app
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Or using yarn:
    ```bash
    yarn install
    ```

### Running the Application

1. **Start the development server:**

    Using npm:
    ```bash
    npm run dev
    ```

    Or using yarn:
    ```bash
    yarn dev
    ```

2. Open your browser and go to `http://localhost:3000` to see the application running.

### Building for Production

To build the application for production, run:

Using npm:
```bash
npm run build

Project-Structure

├── public
│   └── ...
├── src
│   ├── components
│   │   ├── TaskItem.jsx
│   │ 
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── vite.config.js
└── ...

