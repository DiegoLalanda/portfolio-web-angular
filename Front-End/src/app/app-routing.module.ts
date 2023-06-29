import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/curriculum/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/curriculum/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/curriculum/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/curriculum/educacion/editeducacion.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editacercade/:id', component: EditAcercaDeComponent },
  { path: 'editinicio/:id', component: EditInicioComponent },
  { path: 'editproyectos/:id', component: EditProyectosComponent },
  { path: 'newproyecto', component: NewProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
