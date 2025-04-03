const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Task 1",
        "description": "Complete the report for Q1.",
        "taskDate": "2025-03-07",
        "category": "Report",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Task 2",
        "description": "Fix the bug in the login page.",
        "taskDate": "2025-03-08",
        "category": "Bug Fix",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskNumber": 3,
        "title": "Task 3",
        "description": "Update the team on the progress of ongoing projects.",
        "taskDate": "2025-03-09",
        "category": "Meeting",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Rahul",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Task 1",
        "description": "Prepare budget for the next quarter.",
        "taskDate": "2025-03-07",
        "category": "Budgeting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Task 2",
        "description": "Update client about project status.",
        "taskDate": "2025-03-10",
        "category": "Client Communication",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Neha",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Task 1",
        "description": "Complete training module on new software.",
        "taskDate": "2025-03-06",
        "category": "Training",
        "active": true,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Task 2",
        "description": "Assist team with project deployment.",
        "taskDate": "2025-03-09",
        "category": "Deployment",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Task 3",
        "description": "Prepare documentation for the new system.",
        "taskDate": "2025-03-12",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Priya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Task 1",
        "description": "Review marketing strategy for the upcoming campaign.",
        "taskDate": "2025-03-07",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskNumber": 2,
        "title": "Task 2",
        "description": "Create social media posts for the new product launch.",
        "taskDate": "2025-03-10",
        "category": "Social Media",
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskNumber": 3,
        "title": "Task 3",
        "description": "Analyze customer feedback for improvements.",
        "taskDate": "2025-03-12",
        "category": "Analysis",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
  }

  