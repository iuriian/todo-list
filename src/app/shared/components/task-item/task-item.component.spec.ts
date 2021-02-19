import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the received task title', () => {
    component.title = 'Lorem Ipsum';
    fixture.detectChanges();

    const p = fixture.debugElement.queryAll(By.css('.card__data'));
    expect(p[0].nativeElement.textContent).toContain(component.title);
  });

  it('should display the received priority', () => {
    component.priority = 'Baixa';
    fixture.detectChanges();

    const p = fixture.debugElement.queryAll(By.css('.card__data'));
    expect(p[1].nativeElement.textContent).toContain(component.priority);
  });
});
