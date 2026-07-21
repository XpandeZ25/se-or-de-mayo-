export const INSTITUTE_INFO = {
  name: "Instituto Técnico Señor de Mayo",
  anniversary: "25 Años",
  jubileeYear: "1999 - 2026",
  accreditation: "Resolución Ministerial R.M. N° 0677/2023",
  address: "Calle Illampu N° 614 (Entre Graneros y Sta. Cruz)",
  city: "La Paz, Bolivia",
  phones: ["+591 2 2456789", "+591 76543210"],
  whatsapp: "59176543210",
  email: "contacto@senordemayo.edu.bo",
  hours: "Lunes a Viernes: 08:00 - 18:30 | Sábados: 09:00 - 13:00",
  careerName: "Técnico Medio en Enfermería",
  duration: "2 Años (4 Semestres) / 2,400 Horas Académicas",
  degree: "Título Profesional a Nivel Técnico Medio"
};

export const STATS = [
  { value: "+25", label: "Años de Trayectoria", subtext: "Formando líderes en salud desde 1999" },
  { value: "10+", label: "Convenios de Salud", subtext: "Prácticas en hospitales de 1er, 2do y 3er nivel" },
  { value: "100%", label: "Acreditación Ministerial", subtext: "Resolución Ministerial R.M. N° 0677/2023" }
];

export const RESOLUTIONS = [
  {
    year: "1999",
    title: "Fundación Institucional",
    resolutionCode: "Fundación 1999",
    description: "Inauguración oficial de actividades académicas e incubación del proyecto educativo en salud.",
    detail: "Fundado con el firme propósito de democratizar la educación técnica en enfermería, formando profesionales con alta vocación de servicio."
  },
  {
    year: "2005",
    title: "Acreditación y Homologación Ministerial",
    resolutionCode: "R.M. N° 484/05",
    description: "Homologación oficial de planes y programas de estudio a nivel Técnico Medio por el Ministerio de Educación.",
    detail: "Se consolida la estructura curricular adaptada a las nuevas normas del Sistema Nacional de Salud del Estado Plurinacional de Bolivia."
  },
  {
    year: "2015",
    title: "Expansión de Convenios Hospitalarios",
    resolutionCode: "Convenios SEDES",
    description: "Firma de alianzas estratégicas con la red de hospitales gubernamentales y centros asistenciales de 3er nivel.",
    detail: "Equipamiento de laboratorios de simulación clínica y firma de internado rotatorio asistido en red asistencial de salud."
  },
  {
    year: "2023",
    title: "Resolución Ministerial R.M. N° 0677/2023",
    resolutionCode: "R.M. N° 0677/2023",
    description: "Reacreditación quinquenal con máxima calificación académica y aprobación de la nueva malla curricular de 2400 horas.",
    detail: "Aprobación de la resolución ministerial oficial del Ministerio de Educación que certifica el Título Profesional en Provisión Nacional."
  }
];

export const HOSPITALS = [
  { id: 1, name: "Hospital Materno Infantil", type: "Tercer Nivel", location: "La Paz", badge: "Convenio Activo" },
  { id: 2, name: "Hospital del Niño", type: "Especializado", location: "La Paz", badge: "Pediatría" },
  { id: 3, name: "Hospital La Paz", type: "Segundo Nivel", location: "Plaza España", badge: "Prácticas Intensivas" },
  { id: 4, name: "Hospital de Clínicas", type: "Complejo Miraflores", location: "La Paz", badge: "Internado Rotatorio" },
  { id: 5, name: "Hospital Arco Iris", type: "Tercer Nivel", location: "Villa Fátima", badge: "Emergencias" },
  { id: 6, name: "Hospital del Norte", type: "Tercer Nivel", location: "El Alto", badge: "Complejo Quirúrgico" },
  { id: 7, name: "Hospital de Salud Mental", type: "Especializado", location: "La Paz", badge: "Salud Mental" },
  { id: 8, name: "Instituto de Gastroenterología", type: "Especializado", location: "La Paz", badge: "Investigación" },
  { id: 9, name: "Instituto de Rehabilitación", type: "Especializado", location: "La Paz", badge: "Fisioterapia & Cuidados" },
  { id: 10, name: "Red de Salud Cotahuma", type: "Atención Primaria", location: "Zona Sur", badge: "Primer Nivel" }
];

export const CURRICULUM_YEARS = [
  {
    year: "1° Año",
    subtitle: "Fundamentos teóricos, anatomía y primeros auxilios",
    subjects: [
      { code: "ENF-101", name: "Anatomía y Fisiología Humana", hours: "160 hrs" },
      { code: "ENF-102", name: "Ética, Deontología y Bioética", hours: "80 hrs" },
      { code: "ENF-103", name: "Fundamentos Básicos de Enfermería", hours: "240 hrs" },
      { code: "ENF-104", name: "Salud Comunitaria y Epidemiología", hours: "180 hrs" },
      { code: "ENF-105", name: "Microbiología y Parasitología Médica", hours: "120 hrs" },
      { code: "ENF-106", name: "Farmacología Aplicada I", hours: "120 hrs" }
    ]
  },
  {
    year: "2° Año",
    subtitle: "Especialización clínica, internado rotatorio y titulación",
    subjects: [
      { code: "ENF-201", name: "Enfermería Materno-Infantil y Obstétrica", hours: "200 hrs" },
      { code: "ENF-202", name: "Enfermería Quirúrgica y Medidas Asépticas", hours: "200 hrs" },
      { code: "ENF-203", name: "Primeros Auxilios, Urgencias y RCP", hours: "160 hrs" },
      { code: "ENF-204", name: "Salud Pública y Gestión Institucional", hours: "140 hrs" },
      { code: "ENF-205", name: "Prácticas Hospitalarias e Internado Rotatorio", hours: "800 hrs" }
    ]
  }
];

export const AUTHORITIES = [
  {
    role: "Gerencia General",
    name: "Lic. María del Rosario Revollo Paz",
    description: "Líder institucional orientada a la excelencia en gestión educativa y alianzas de salud en Bolivia.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    role: "Dirección General",
    name: "Lic. Olga Rosemary Yujra Magne",
    description: "Encargada de la visión curricular, rigurosidad académica y acreditación ministerial ante el Estado.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
  },
  {
    role: "Coordinación Académica",
    name: "Lic. Dayan Lilian Miranda Callisaya",
    description: "Supervisora del plan docente, campos de práctica hospitalaria y seguimiento a estudiantes.",
    avatar: "https://images.unsplash.com/photo-1594824813566-88855ce75907?auto=format&fit=crop&q=80&w=400"
  }
];

export const INITIAL_NEWS = [
  {
    id: 1,
    title: "Convocatoria Abierta: Inscripciones Gestión 2026",
    category: "Admisiones",
    date: "15 Julio 2026",
    summary: "Se abren los cupos oficiales para la carrera de Técnico Medio en Enfermería. Descuentos por pre-inscripción.",
    content: "El Instituto Técnico Señor de Mayo invita a todos los bachilleres y personas interesadas a inscribirse en la carrera de Enfermería. Contamos con turno mañana, tarde y noche."
  },
  {
    id: 2,
    title: "Renovación R.M. N° 0677/2023 Acreditación Ministerial",
    category: "Institucional",
    date: "02 Mayo 2026",
    summary: "Conmemoramos un cuarto de siglo formando a los mejores profesionales en salud de Bolivia.",
    content: "En un emotivo acto académico se hizo entrega de reconocimientos al cuerpo docente y convenios renovados con la red de hospitales gubernamentales."
  },
  {
    id: 3,
    title: "Taller Intensivo de Simulación Quirúrgica",
    category: "Académico",
    date: "28 Junio 2026",
    summary: "Estudiantes de 2° Año completaron con éxito la simulación de atención en emergencias y trauma.",
    content: "Nuestros laboratorios de la Calle Illampu contaron con equipamiento biomédico completo para garantizar la práctica directa antes del internado."
  }
];

export const REQUIREMENTS_LIST = [
  "Fotocopia simple de Cédula de Identidad (Vigente)",
  "Certificado de Nacimiento Original o Fotocopia Legalizada",
  "Fotocopia Legalizada del Título de Bachiller",
  "4 Fotografías 4x4 con fondo azul suave",
  "Formulario de Pre-Inscripción impreso o digital"
];

