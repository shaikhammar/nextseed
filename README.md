NextSeed
NextSeed is a robust and modern starter kit for building web applications with Next.js. It comes pre-configured with essential features like authentication and email verification, providing a solid foundation for your next project. Built with developer experience in mind, NextSeed leverages powerful libraries to get you up and running quickly.

✨ Features
Next.js 15+: A powerful React framework for building full-stack web applications.

Better Auth: Comprehensive and flexible authentication solution, giving you full control over your user authentication flows.

Email and Password authentication.

Session management.

Nodemailer: Integrated for reliable email sending, specifically configured for email verification during user registration.

Tailwind CSS 4: Utility-first CSS framework for rapid and consistent styling.

Shadcn/ui: Beautiful and accessible UI components built with Radix UI and Tailwind CSS.

Sonner: A beautiful and customizable toast library for notifications.

TypeScript: For type-safe development and improved code quality.

🚀 Getting Started
Follow these steps to get your NextSeed project up and running on your local machine.

Prerequisites
Make sure you have the following installed:

Node.js (LTS version recommended)

npm or Yarn (npm is used in examples)

Git

Installation
Clone the repository:

git clone https://github.com/your-username/nextseed.git
cd nextseed

Create .env.local:
Copy the contents of sample-env to a new file named .env.local in the root of your project:

cp sample-env .env.local

Install dependencies:

npm install

# or yarn install

Environment Variables
NextSeed uses environment variables for configuration. Create a .env.local file in the root of your project (if you haven't already copied it from sample-env) and populate it with the following:

APP_NAME: The internal name of your application, used for server-side configurations.

NEXT_PUBLIC_APP_NAME: The public-facing name of your application, accessible on both client and server.

BETTER_AUTH_SECRET: A strong, random string used by Better Auth for signing tokens. Change this to a unique, secure value.

BETTER_AUTH_URL: The base URL for your Better Auth API routes (e.g., http://localhost:3000/api/auth). Change this to your actual application URL.

NEXT_PUBLIC_API_URL: The public base URL for your API endpoints, accessible on the client. Change this to your actual application URL.

DATABASE_URL: Your database connection string (e.g., for SQLite, PostgreSQL, MySQL). Change this to your database connection string.

SMTP_HOST: The hostname of your SMTP server (e.g., smtp.gmail.com).

SMTP_PORT: The port for your SMTP server (e.g., 587 for TLS/STARTTLS, 465 for SMTPS).

NODEMAILER_USER: The email address used to authenticate with the SMTP server (the sender's email).

NODEMAILER_APP_PASSWORD: The password or app-specific password for the NODEMAILER_USER email account. For providers like Gmail, this often needs to be an App Password if 2FA is enabled.

# .env.local example

APP_NAME="NextSeed"
NEXT_PUBLIC_APP_NAME="NextSeed"
BETTER_AUTH_SECRET="your_strong_secret_key"
BETTER_AUTH_URL="http://localhost:3000/api/auth"
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
DATABASE_URL="file:./dev.db"
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
NODEMAILER_USER="your_email@example.com"
NODEMAILER_APP_PASSWORD="your_email_app_password"

Running Locally
Start the development server:

npm run dev

# or yarn dev

Open http://localhost:3000 in your browser to see the application.

💡 Usage
NextSeed provides a basic structure for:

User Registration: Navigate to /auth/register to create a new account. Email verification is integrated.

User Login: Navigate to /auth/login to sign in.

Profile Page: A protected route (e.g., /profile) that demonstrates authenticated access and allows users to sign out.

🛠️ Further Enhancements
NextSeed is a starting point. Better Auth offers a wide array of advanced features that you can easily integrate:

Social Logins: Add Google, GitHub, Apple, and other social authentication providers.

Multi-Factor Authentication (MFA): Enhance security with 2FA.

Magic Links: Allow passwordless login via email.

Password Reset: Implement a "Forgot Password" flow.

Organizations/Teams: Build multi-tenant applications with user roles and permissions.

Passkeys: Modern, phishing-resistant authentication.

Explore the Better Auth documentation to leverage its full potential.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details
