import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Не забывай импортировать FormsModule

@Component({
  selector: 'app-about-me',
  standalone: true,  // Это позволяет компоненту работать без модуля
  imports: [CommonModule, FormsModule],  // Добавляем CommonModule и FormsModule для ngModel
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  studentInfo = {
    name: 'Амангелді Мадина',
    title: 'Студент 4 курса',
    university: 'КБТУ',
    major: 'Информационные Системы',
    bio: 'Привет! Я изучаю информационные системы в КБТУ.',
    contacts: [
      {
        icon: 'fa-phone',
        label: 'Телефон',
        value: '+7 (707) 906-20-51',  
        link: ''     
      },
      {
        icon: 'fa-envelope',
        label: 'Email',
        value: 'm_amangeldi@kbtu.kz',  
        link: 'mailto:m_amangeldi@kbtu.kz'
      }
    ]
  };

  constructor() { }

  onContactClick(contact: any) {
    if (contact.link) {
      window.open(contact.link, '_blank');
    }
  }

  // Event Binding Methods
  sendEmail() {
    alert('Email отправлен!');
  }

  showAlert() {
    alert('Имя студента: ' + this.studentInfo.name);
  }
}
