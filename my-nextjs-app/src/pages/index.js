import React from 'react';
import { WelcomeCard, Counter, StudentInfo } from '../components/ExampleComponent';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className="header-title">React Components Showcase</h1>
      </header>

      <main className="content">
        <section className="component-section">
          <h2 className="section-title">Welcome Card Component</h2>
          <WelcomeCard name="User" />
        </section>

        <section className="component-section">
          <h2 className="section-title">Counter Component</h2>
          <Counter />
        </section>

        <section className="component-section">
          <h2 className="section-title">Student Info Form</h2>
          <StudentInfo />
        </section>
      </main>

      <footer>
        <p>by Vince Jerby P. Labiste</p>
      </footer>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          background: #181818;
          font-family: 'Poppins', sans-serif;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #181818;
        }
        header {
          width: 100%;
          background: rgb(32, 32, 32);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          box-sizing: border-box;
        }
        .header-title {
          font-family: 'WDXL Lubrifont TC', sans-serif;
          font-size: 2rem;
          font-weight: 500;
          color: rgb(60, 255, 0);
          letter-spacing: 10px;
          border-right: 5px solid rgb(255, 253, 253);
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3s steps(38, end), cursor .4s step-end infinite alternate;
          text-align: center;
        }
        @keyframes cursor {
          50% { border-color: transparent; }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        .content {
          flex: 1;
          width: 100%;
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .component-section {
          background: rgb(32, 32, 32);
          border: 2px solid rgb(60, 255, 0);
          border-radius: 16px;
          padding: 2rem;
          width: 80%;
          max-width: 600px;
          box-shadow: 0 4px 24px 0 rgba(60,255,0,0.08);
          animation: appear 0.5s ease-out;
        }
        @keyframes appear {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-title {
          font-family: 'WDXL Lubrifont TC', sans-serif;
          color: rgb(60, 255, 0);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        .welcome-card {
          background: rgba(60, 255, 0, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: center;
          color: #fff;
          font-size: 1.2rem;
        }
        .counter {
          text-align: center;
          color: #fff;
        }
        .counter h2 {
          color: #fff;
        }
        .counter button {
          margin: 0 0.5rem;
          padding: 0.5rem 1.5rem;
          background: rgb(60, 255, 0);
          color: #181818;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .counter button:hover {
          background: rgb(50, 200, 0);
          transform: translateY(-2px);
        }
        .student-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .student-info input {
          padding: 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgb(60, 255, 0);
          border-radius: 4px;
          color: #fff;
          font-size: 1rem;
        }
        .student-info input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }
        .student-info button {
          padding: 0.8rem;
          background: rgb(60, 255, 0);
          color: #181818;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.3s ease;
        }
        .student-info button:hover {
          background: rgb(50, 200, 0);
          transform: translateY(-2px);
        }
        footer {
          width: 100%;
          background: rgb(32, 32, 32);
          padding: 1.5rem;
          text-align: center;
          color: rgb(60, 255, 0);
          font-family: 'WDXL Lubrifont TC', sans-serif;
        }
        @media (max-width: 768px) {
          .component-section {
            width: 90%;
            padding: 1.5rem;
          }
          .header-title {
            font-size: 1.2rem;
            letter-spacing: 5px;
          }
        }
      `}</style>
    </div>
  );
}