import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAreaComponent } from './area/view-area/view-area.component';
import { NewAreaComponent } from './area/new-area/new-area.component';
import { EditAreaComponent } from './area/edit-area/edit-area.component';
import { EditConnectingQuestionsComponent } from './connecting-questions/edit-connecting-questions/edit-connecting-questions.component';
import { NewConnectingQuestionsComponent } from './connecting-questions/new-connecting-questions/new-connecting-questions.component';
import { ViewConnectingQuestionsComponent } from './connecting-questions/view-connecting-questions/view-connecting-questions.component';
import { ViewMultipleChoiceQuestionsComponent } from './multiple-choice-question/view-multiple-choice-questions/view-multiple-choice-questions.component';
import { EditMultipleChoiceQuestionsComponent } from './multiple-choice-question/edit-multiple-choice-questions/edit-multiple-choice-questions.component';
import { NewMultipleChoiceQuestionsComponent } from './multiple-choice-question/new-multiple-choice-questions/new-multiple-choice-questions.component';
import { NewSingleChoiceQuestionsComponent } from './single-choice-questions/new-single-choice-questions/new-single-choice-questions.component';
import { EditSingleChoiceQuestionsComponent } from './single-choice-questions/edit-single-choice-questions/edit-single-choice-questions.component';
import { ViewSingleChoiceQuestionsComponent } from './single-choice-questions/view-single-choice-questions/view-single-choice-questions.component';
import { ViewTrueFalseQuestionsComponent } from './true-false-question/view-true-false-questions/view-true-false-questions.component';
import { NewTrueFalseQuestionsComponent } from './true-false-question/new-true-false-questions/new-true-false-questions.component';
import { EditTrueFalseQuestionsComponent } from './true-false-question/edit-true-false-questions/edit-true-false-questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { KvizComponent } from './kviz/kviz.component';
import { HeaderComponent } from './header/header.component';
import { KvizSingleChoiceComponent } from './kviz/kviz-single-choice/kviz-single-choice.component';
import { KvizMultipleChoiceComponent } from './kviz/kviz-multiple-choice/kviz-multiple-choice.component';
import { KvizTrueFalseComponent } from './kviz/kviz-true-false/kviz-true-false.component';
import { KvizConnectingQuestionsComponent } from './kviz/kviz-connecting-questions/kviz-connecting-questions.component';
import { KvizStartComponent } from './kviz/kviz-start/kviz-start.component';
import { KvizPostavkeComponent } from './kviz/kviz-postavke/kviz-postavke.component';
import { RangTabelaComponent } from './kviz/rang-tabela/rang-tabela.component';
import { RangTabelaKrajComponent } from './kviz/rang-tabela-kraj/rang-tabela-kraj.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewAreaComponent,
    NewAreaComponent,
    EditAreaComponent,
    EditConnectingQuestionsComponent,
    NewConnectingQuestionsComponent,
    ViewConnectingQuestionsComponent,
    ViewMultipleChoiceQuestionsComponent,
    EditMultipleChoiceQuestionsComponent,
    NewMultipleChoiceQuestionsComponent,
    NewSingleChoiceQuestionsComponent,
    EditSingleChoiceQuestionsComponent,
    ViewSingleChoiceQuestionsComponent,
    ViewTrueFalseQuestionsComponent,
    NewTrueFalseQuestionsComponent,
    EditTrueFalseQuestionsComponent,
    KvizComponent,
    HeaderComponent,
    KvizSingleChoiceComponent,
    KvizMultipleChoiceComponent,
    KvizTrueFalseComponent,
    KvizConnectingQuestionsComponent,
    KvizStartComponent,
    KvizPostavkeComponent,
    RangTabelaComponent,
    RangTabelaKrajComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
