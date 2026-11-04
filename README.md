# My Portfolio – Laravel + Inertia.js + React

Midterm Laboratory Activity: Portfolio CRUD with Validation
IT ELEC01 – Advanced Web Development

## Dynamic Section
[Skills/Projects/etc.] – full CRUD with validation.

## Requirements
- PHP 8.2+
- Composer
- Node.js 18+ and npm
- MySQL or SQLite

## Setup
1. Clone the repository
   git clone https://github.com/USERNAME/REPO.git
   cd REPO
2. Install dependencies
   composer install
   npm install
3. Set up the environment
   cp .env.example .env
   php artisan key:generate
4. Configure your database in .env
5. Run migrations
   php artisan migrate
6. (If using image uploads)
   php artisan storage:link
7. Start the app (two terminals)
   php artisan serve
   npm run dev
8. Open http://localhost:8000

## Pages
- Public portfolio: /
- Manage [section]: /[your-route]

## Author
Your Name
