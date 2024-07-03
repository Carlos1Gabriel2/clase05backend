/*
SISTEMA DE GESTION DE ESTUDIANTES

Crear un sistema para gestionar estudiantes y cursos.

Estudiante
Curso
Escuela

Cada clase debe tener las siguientes funcionalidades:

Estudiantes:
    Propiedades: nombre, edad, cursos (array)
    Metodos: matricularCurso

Curso:

    Propiedades: nombre, estudiantes (array)
    Métodos: agregarEstudiante
Escuela:

    Propiedades: nombre, estudiantes(array), cursos(array)
    Métodos: agregarEstudiante, agregarCurso, matricularEstudianteEnCurso
*/


class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.cursos = [];
    }

    matricularCurso(curso) {
        this.cursos.push(curso);
        curso.agregarEstudiante(this);
    }
}


class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
}


class Escuela {
    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
        this.cursos = [];
    }

    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    agregarCurso(curso) {
        this.cursos.push(curso);
    }

    matricularEstudianteEnCurso(nombreEstudiante, nombreCurso) {
        const estudiante = this.estudiantes.find(est => est.nombre === nombreEstudiante);
        const curso = this.cursos.find(cur => cur.nombre === nombreCurso);

        if (estudiante && curso) {
            estudiante.matricularCurso(curso);
        } else {
            console.log(`Estudiante o curso no encontrado.`);
        }
    }
}


const escuela = new Escuela("Escuela Primaria");
const estudiante1 = new Estudiante("Carlos", 10);
const estudiante2 = new Estudiante("Maria", 8);
const curso1 = new Curso("Matematicas");
const curso2 = new Curso("Ciencias");

escuela.agregarEstudiante(estudiante1);
escuela.agregarEstudiante(estudiante2);
escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);


escuela.matricularEstudianteEnCurso("Carlos", "Ciencias");
escuela.matricularEstudianteEnCurso("Maria", "Matematicas");


console.log(estudiante1);
console.log(estudiante2);
console.log(curso1);
console.log(curso2);
