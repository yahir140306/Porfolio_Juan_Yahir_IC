import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio-app';

  personalInfo = {
    name: 'Juan Yahir Isidro Cervantes',
    location: 'Zacualtipán de Ángeles, Hidalgo, Mexico',
    email: 'isidrocej@gmail.com',
    phone: '+52-771-350-4237',
    socialNetworks: [
      {
        network: 'LinkedIn',
        username: 'Juan Yahir Isidro Cervantes',
        url: 'https://www.linkedin.com/in/juan-yahir-isidro-cervantes',
      },
      {
        network: 'GitHub',
        username: 'yahir140306',
        url: 'https://github.com/yahir140306',
      },
    ],
  };

  welcome = [
    'Software Development student currently in their fifth semester, seeking a professional internship opportunity where they can apply their programming knowledge, strengthen their technical skills, and gain experience in a professional environment.',
    'A responsible, motivated individual with a willingness to learn, interested in software development and problem-solving in collaborative environments.',
  ];

  education = [
    {
      institution: 'Universidad Tecnológica de la Sierra Hidalguense',
      area: 'Information Technologies and Digital Innovation',
      grade: '5°',
      startDate: '2024-08',
      endDate: 'present',
      location: 'Zacualtipán de Ángeles, Hidalgo, Mexico',
    },
  ];

  projects = [
    {
      name: 'RANTU',
      url: 'https://project-liard-alpha-81.vercel.app/',
      startDate: '2025-06',
      endDate: 'present',
      summary: 'A web application for renting rooms and apartments',
      highlights: [
        'Development of a modern web application using Astro, Supabase and Tailwind CSS, designed for comprehensive rental management.',
        'I implemented a secure authentication system (Email and OTP) and route protection middleware for session management using cookies.',
        'I designed and integrated a complete CRUD application for owners, including optimized image uploads and a storage system on Supabase Storage.',
        'I developed an interactive, real-time rating and review system with user validation and automatic statistics.',
      ],
    },
  ];

  skills = [
    {
      label: 'Programming',
      details:
        'Proficient with HTML, CSS, JavaScript, TypeScript, MySQL, Linux, Git, and GitHub; good understanding of Web, app development',
    },
    {
      label: 'Languages',
      details: 'English A1',
    },
  ];

  extracurricular = [
    'Self-directed study of high-performance languages ​​and systems such as Go and Python.',
  ];
}
