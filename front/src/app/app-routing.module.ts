import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAreaComponent } from './area/view-area/view-area.component';
import { EditAreaComponent } from './area/edit-area/edit-area.component';
import { NewAreaComponent } from './area/new-area/new-area.component';
import { NewSingleChoiceQuestionsComponent } from './single-choice-questions/new-single-choice-questions/new-single-choice-questions.component';
import { EditSingleChoiceQuestionsComponent } from './single-choice-questions/edit-single-choice-questions/edit-single-choice-questions.component';
import { ViewSingleChoiceQuestionsComponent } from './single-choice-questions/view-single-choice-questions/view-single-choice-questions.component';
import { NewConnectingQuestionsComponent } from './connecting-questions/new-connecting-questions/new-connecting-questions.component';
import { NewMultipleChoiceQuestionsComponent } from './multiple-choice-question/new-multiple-choice-questions/new-multiple-choice-questions.component';
import { EditMultipleChoiceQuestionsComponent } from './multiple-choice-question/edit-multiple-choice-questions/edit-multiple-choice-questions.component';
import { ViewMultipleChoiceQuestionsComponent } from './multiple-choice-question/view-multiple-choice-questions/view-multiple-choice-questions.component';
import { KvizComponent } from './kviz/kviz.component';
import { KvizSingleChoiceComponent } from './kviz/kviz-single-choice/kviz-single-choice.component';
import { KvizStartComponent } from './kviz/kviz-start/kviz-start.component';
import { KvizPostavkeComponent } from './kviz/kviz-postavke/kviz-postavke.component';
import { KvizMultipleChoiceComponent } from './kviz/kviz-multiple-choice/kviz-multiple-choice.component';
import { KvizTrueFalseComponent } from './kviz/kviz-true-false/kviz-true-false.component';
import { KvizConnectingQuestionsComponent } from './kviz/kviz-connecting-questions/kviz-connecting-questions.component';
import { RangTabelaComponent } from './kviz/rang-tabela/rang-tabela.component';
import { RangTabelaKrajComponent } from './kviz/rang-tabela-kraj/rang-tabela-kraj.component';
import { ViewConnectingQuestionsComponent } from './connecting-questions/view-connecting-questions/view-connecting-questions.component';
import { ViewTrueFalseQuestionsComponent } from './true-false-question/view-true-false-questions/view-true-false-questions.component';

const routes: Routes = [
  { path: '', redirectTo: '/oblast', pathMatch: 'full' }, //Ukoliko ne postoji putanja prikazuje se ViewAreaComponent
  { path: 'oblast', component: ViewAreaComponent },
  { path: 'oblast/:id', component: EditAreaComponent },
  { path: 'kreiraj-oblast', component: NewAreaComponent },
  { path: 'new-single-choice', component: NewSingleChoiceQuestionsComponent },
  { path: 'single-choice/:id', component: EditSingleChoiceQuestionsComponent },
  { path: 'single-choice', component: ViewSingleChoiceQuestionsComponent },
  {
    path: 'new-connecting-question',
    component: NewConnectingQuestionsComponent,
  },
  {
    path: 'new-multiple-choice',
    component: NewMultipleChoiceQuestionsComponent,
  },
  {
    path: 'multiple-choice/:id',
    component: EditMultipleChoiceQuestionsComponent,
  },
  { path: 'multiple-choice', component: ViewMultipleChoiceQuestionsComponent },
  { path: 'kviz-start', component: KvizStartComponent },
  { path: 'kviz-postavke', component: KvizPostavkeComponent },
  { path: 'kviz-single-choice', component: KvizSingleChoiceComponent },
  { path: 'kviz-multiple-choice', component: KvizMultipleChoiceComponent },
  { path: 'kviz-true-false', component: KvizTrueFalseComponent },
  { path: 'kviz-connecting', component: KvizConnectingQuestionsComponent },
  { path: 'rang-tabela', component: RangTabelaComponent },
  { path: 'rang-tabela-kraj', component: RangTabelaKrajComponent },
  { path: 'rang-tabela', component: RangTabelaComponent },
  {
    path: 'new-connecting-question',
    component: NewConnectingQuestionsComponent,
  },
  {
    path: 'view-connecting-questions',
    component: ViewConnectingQuestionsComponent,
  },
  {
    path: 'view-true-false-questions',
    component: ViewTrueFalseQuestionsComponent,
  },
  {
    path: 'new-connecting-questions',
    component: NewConnectingQuestionsComponent,
  },
  { path: '**', component: ViewAreaComponent }, // Za rute koje ne postoje prikazuje se ViewAreaComponent, prikaz oblasti
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
