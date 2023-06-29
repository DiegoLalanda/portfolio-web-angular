import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service.service';
import { NewExperienciaComponent } from './components/curriculum/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/curriculum/experiencia/edit-experiencia.component';
import { ExperienciaComponent } from './components/curriculum/experiencia/experiencia.component';
import { EducacionComponent } from './components/curriculum/educacion/educacion.component';
import { NeweducacionComponent } from './components/curriculum/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/curriculum/educacion/editeducacion.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditInicioComponent } from './components/inicio/edit-inicio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    AcercaDeComponent,
    CurriculumComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    ExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    EditInicioComponent,
    EditProyectosComponent,
    NewProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
