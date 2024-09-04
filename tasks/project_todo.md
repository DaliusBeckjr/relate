blogging platform
backend flask
frontend react
database mongodb
other tech: Markdown for content formatting, OAuth for social login
CI/CD with Github actions
NGINX for serving static files and reverse proxy


project structure

file structure:
my_flask_app/
│
├── app/
│   ├── __init__.py
│   ├── config.py
│   ├── main/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── errors.py
│   │
│   ├── auth/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── forms.py
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── post.py
│   │
│   ├── static/
│   └── templates/
│
├── migrations/
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py
│   ├── test_routes.py
│   └── test_models.py
│
├── .env
├── .gitignore
├── requirements.txt
└── run.py



this file structure is suppose to benefit more for bigger projects using flask blueprint