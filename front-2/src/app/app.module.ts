import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAreaComponent } from './quiz-crud/area/edit-area/edit-area.component';
import { NewAreaComponent } from './quiz-crud/area/new-area/new-area.component';
import { ViewAreaComponent } from './quiz-crud/area/view-area/view-area.component';
import { EditConnectiongQuestionsComponent } from './quiz-crud/connecting-questions/edit-connectiong-questions/edit-connectiong-questions.component';
import { NewConnectingQuestionsComponent } from './quiz-crud/connecting-questions/new-connecting-questions/new-connecting-questions.component';
import { ViewConnectingQuestionsComponent } from './quiz-crud/connecting-questions/view-connecting-questions/view-connecting-questions.component';
import { EditMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/edit-multiple-choice-questions/edit-multiple-choice-questions.component';
import { NewMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/new-multiple-choice-questions/new-multiple-choice-questions.component';
import { ViewMultipleChoiceQuestionsComponent } from './quiz-crud/multiple-choice-questions/view-multiple-choice-questions/view-multiple-choice-questions.component';
import { EditSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/edit-single-choice-questions/edit-single-choice-questions.component';
import { NewSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/new-single-choice-questions/new-single-choice-questions.component';
import { ViewSingleChoiceQuestionsComponent } from './quiz-crud/single-choice-questions/view-single-choice-questions/view-single-choice-questions.component';
import { EditTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/edit-true-false-questions/edit-true-false-questions.component';
import { NewTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/new-true-false-questions/new-true-false-questions.component';
import { ViewTrueFalseQuestionsComponent } from './quiz-crud/true-false-questions/view-true-false-questions/view-true-false-questions.component';
import { HeaderComponent } from './quiz-crud/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditAreaComponent,
    NewAreaComponent,
    ViewAreaComponent,
    EditConnectiongQuestionsComponent,
    NewConnectingQuestionsComponent,
    ViewConnectingQuestionsComponent,
    EditMultipleChoiceQuestionsComponent,
    NewMultipleChoiceQuestionsComponent,
    ViewMultipleChoiceQuestionsComponent,
    EditSingleChoiceQuestionsComponent,
    NewSingleChoiceQuestionsComponent,
    ViewSingleChoiceQuestionsComponent,
    EditTrueFalseQuestionsComponent,
    NewTrueFalseQuestionsComponent,
    ViewTrueFalseQuestionsComponent,
    HeaderComponent,
    HomepageComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
