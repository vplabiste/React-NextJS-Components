# My Next.js App

This is a simple Next.js application that demonstrates the use of functional components, state management, and form handling. The project includes several components that showcase different functionalities.

## Project Structure

```
my-nextjs-app
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   └── ExampleComponent.js
│   ├── pages
│   │   ├── _app.js
│   │   └── index.js
│   ├── styles
│   │   └── globals.css
│   └── utils
│       └── helpers.js
├── .gitignore
├── package.json
├── next.config.js
└── README.md
```

## Components

### WelcomeCard
- Displays a welcome message.
- Accepts props to customize the message.

### Counter
- An interactive counter that manages its own state.
- Allows users to increment and decrement a count.

### StudentInfo
- Handles form inputs for student information.
- Displays the entered information dynamically.

## Pages

### _app.js
- Customizes the default App component in Next.js.
- Allows for global styles and layout configurations.

### index.js
- Main entry point for the application.
- Renders the `WelcomeCard`, `Counter`, and `StudentInfo` components.

## Styles

### globals.css
- Contains global CSS styles for the application.
- Ensures a consistent look and feel across all components.

## Utilities

### helpers.js
- Includes utility functions for formatting and validation.
- Can be used across different components.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/vplabiste/React-NextJS-Components
   ```

2. Navigate to the project directory:
   ```
   cd my-nextjs-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## License

This project is licensed under the MIT License.