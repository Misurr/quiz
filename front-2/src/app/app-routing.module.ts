import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAreaComponent } from './quiz-crud/area/view-area/view-area.component';
import { EditAreaComponent } from './quiz-crud/area/edit-area/edit-area.component';
import { NewAreaComponent } from './quiz-crud/area/new-area/new-area.component';
import { NewSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/new-single-choice-questions/new-single-choice-questions.component';
import { EditSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/edit-single-choice-questions/edit-single-choice-questions.component';
import { ViewSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/view-single-choice-questions/view-single-choice-questions.component';
import { NewConnectingQuestionsComponent } from './quiz-crud/connecting-questions/new-connecting-questions/new-connecting-questions.component';
import { EditConnectiongQuestionsComponent } from './quiz-crud/connecting-questions/edit-connectiong-questions/edit-connectiong-questions.component';
import { ViewConnectingQuestionsComponent } from './quiz-crud/connecting-questions/view-connecting-questions/view-connecting-questions.component';
import { NewMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/new-multiple-choice-questions/new-multiple-choice-questions.component';
import { EditMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/edit-multiple-choice-questions/edit-multiple-choice-questions.component';
import { ViewMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/view-multiple-choice-questions/view-multiple-choice-questions.component';
import { NewTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/new-true-false-questions/new-true-false-questions.component';
import { EditTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/edit-true-false-questions/edit-true-false-questions.component';
import { ViewTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/view-true-false-questions/view-true-false-questions.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'area', component: ViewAreaComponent },
  { path: 'area/:id', component: EditAreaComponent },
  { path: 'create-area', component: NewAreaComponent },
  { path: 'new-single-choice', component: NewSingleChoiceQuestionsComponent },
  { path: 'single-choice/:id', component: EditSingleChoiceQuestionsComponent },
  {
    path: 'single-choice-questions',
    component: ViewSingleChoiceQuestionsComponent,
  },
  {
    path: 'new-connecting-question',
    component: NewConnectingQuestionsComponent,
  },
  {
    path: 'connecting-question/:id',
    component: EditConnectiongQuestionsComponent,
  },
  { path: 'connecting-questions', component: ViewConnectingQuestionsComponent },
  {
    path: 'new-multiple-choice',
    component: NewMultipleChoiceQuestionsComponent,
  },
  {
    path: 'multiple-choice/:id',
    component: EditMultipleChoiceQuestionsComponent,
  },
  {
    path: 'multiple-choice-questions',
    component: ViewMultipleChoiceQuestionsComponent,
  },
  {
    path: 'new-true-false-question',
    component: NewTrueFalseQuestionsComponent,
  },
  { path: 'true-false/:id', component: EditTrueFalseQuestionsComponent },
  { path: 'true-false-questions', component: ViewTrueFalseQuestionsComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
