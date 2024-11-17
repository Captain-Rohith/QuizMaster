# Quiz Master

A simple and interactive **quiz hosting website** built using **React**, allowing users to sign up, log in, select a quiz category, answer questions, and view their results.  

## Features  

- **User Authentication**  
  - Signup with username and password.  
  - Login functionality with error handling.  

- **Category Selection**  
  - Choose from multiple quiz categories such as Science, Sports, and History.  

- **Quiz Functionality**  
  - Display questions one by one with multiple-choice answers.  
  - Smooth navigation between questions.  
  - Timer for questions (optional).  

- **Results Page**  
  - Displays participant's score, percentage, and feedback.  
  - Option to retake the quiz or select another category.  

- **Responsive Design**  
  - Mobile-friendly with light and dark theme toggle.  

## Tech Stack  

- **Frontend:** React  
- **State Management:** React Hooks (useState, useEffect)  
- **Styling:** CSS/SCSS  

## Installation and Setup  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/quiz-hosting-website.git  
   cd quiz-hosting-website  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Run the development server:  
   ```bash  
   npm start  
   ```  

4. Open the application in your browser:  
   ```
   http://localhost:3000  
   ```  

## Folder Structure  

- **/src**  
  - **/components**: Reusable components like `Login`, `Signup`, `Quiz`, and `ResultsPage`.  
  - **/pages**: Individual pages such as `HomePage` and `CategorySelectionPage`.  
  - **/data**: Sample quiz questions for each category.  
  - **/styles**: CSS/SCSS files for styling.  

## Usage  

1. Navigate to the **Homepage** and sign up or log in with your credentials.  
2. Select a category of your choice from the **Category Selection Page**.  
3. Answer quiz questions one by one.  
4. View your score and feedback on the **Results Page**.  
5. Retake the quiz or select another category.  

## Contributing  

Contributions are welcome! To contribute:  
1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature/your-feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add your message here"  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature/your-feature-name  
   ```  
5. Open a Pull Request.  

## License  

This project is licensed under the [MIT License](LICENSE).  
