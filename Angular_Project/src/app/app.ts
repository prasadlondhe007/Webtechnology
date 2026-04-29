import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  newTaskText = signal('');
  tasks = signal<Task[]>([]);

  // Computed signals for stats
  totalTasks = computed(() => this.tasks().length);
  completedTasks = computed(() => this.tasks().filter(t => t.completed).length);
  pendingTasks = computed(() => this.totalTasks() - this.completedTasks());

  addTask() {
    const text = this.newTaskText().trim();
    if (text) {
      const newTask: Task = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date()
      };
      this.tasks.update(tasks => [newTask, ...tasks]);
      this.newTaskText.set('');
    }
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(t => t.id !== id));
  }
}
