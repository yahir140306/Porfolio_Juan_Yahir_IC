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
    location: 'Zacualtipán de Ángeles, Hidalgo, México',
    email: 'isidrocej@gmail.com',
    phone: '+52-771-350-4237',
    // website: 'https://juanyahiric.vercel.app',
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
    'Estudiante de Ingeniería en TI con enfoque en Desarrollo Web (Fullstack), con experiencia práctica utilizando Astro, Supabase y TypeScript. Apasionado por la resolución de problemas y la creación de sistemas escalables. Busco aplicar mis habilidades técnicas en un entorno profesional de alto impacto.',
    'Ahora enfocado y estudiando Frameworks como Angular y Node.js',
  ];

  education = [
    {
      institution: 'Universidad Tecnológica de la Sierra Hidalguense',
      area: 'Tecnologías de la Información e Innovación Digital',
      grade: '5°',
      startDate: '2024-08',
      endDate: 'actualidad',
      location: 'Zacualtipán de Ángeles, Hidalgo, México',
    },
  ];

  projects = [
    {
      name: 'RANTU',
      url: 'https://project-liard-alpha-81.vercel.app/',
      startDate: '2025-06',
      endDate: 'actualidad',
      summary:
        'Creé una plataforma web para ayudar a estudiantes a encontrar y rentar cuartos de forma fácil.',
      highlights: [
        'Desarrollé la página usando Astro y Tailwind CSS para que sea rápida y se vea bien en celulares.',
        'Configuré el inicio de sesión con correo y códigos de seguridad (OTP) usando Supabase.',
        'Hice que los dueños puedan subir fotos de sus cuartos, editarlos o borrarlos fácilmente.',
        'Agregué una sección para que los usuarios dejen comentarios y calificaciones con estrellas.',
      ],
    },
  ];

  skills = [
    {
      label: 'Frontend',
      details:
        'HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Astro, Angular',
    },
    {
      label: 'Backend/DB',
      details: 'Supabase, MySQL, MariaDB, Python, Go',
    },
    {
      label: 'Herramientas',
      details: 'Git, GitHub, Linux (WSL/Arch), Vercel',
    },
  ];

  extracurricular = [
    'Estudio de manera autodidacta lenguajes y sistemas de alto rendimiento como Golang y Python.',
  ];
}
