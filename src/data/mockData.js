export const INSTITUTE_INFO = {
  name: "INSTITUTO TÉCNICO \"SEÑOR DE MAYO\"",
  anniversary: "25 Años",
  jubileeYear: "2000 - 2025",
  accreditation: "Resolución Ministerial R.M. 0040/2025",
  address: "Calle Illampu N° 614 (Esquina Plaza Eguino, Zona El Rosario)",
  city: "La Paz, Bolivia",
  phones: ["2450031", "72565773"],
  whatsapp: "59172565773",
  email: "contacto@senordemayo.edu.bo",
  hours: "Lunes a Viernes: 08:30 a 12:30 | 14:30 a 22:00 (Sábado cerrado)",
  careerName: "Técnico Medio en Enfermería",
  duration: "2 Años (4 Semestres) / 2,400 Horas Académicas",
  degree: "Título Profesional a Nivel Técnico Medio"
};

export const STATS = [
  { value: "+25", label: "Años de Trayectoria", subtext: "Formando líderes en salud desde el 2000" },
  { value: "+10", label: "Convenios de Salud", subtext: "Prácticas en hospitales de 1er, 2do y 3er nivel" },
  { value: "100%", label: "Acreditación Ministerial", subtext: "Resolución Ministerial R.M. 0040/2025" }
];

export const RESOLUTIONS = [
  {
    year: "2000",
    title: "Fundación del Instituto",
    resolutionCode: "Fundado el 22 de agosto del 2000",
    description: "Inició sus actividades con la formación de Auxiliares de Enfermería.",
    detail: "Establecido en La Paz con el propósito de formar profesionales técnicos en enfermería con calidad y responsabilidad social."
  },
  {
    year: "2001",
    title: "Autorización de Funcionamiento",
    resolutionCode: "R.M. 051/2001",
    description: "El Ministerio de Educación autoriza oficialmente su funcionamiento.",
    detail: "Otorgada el 7 de febrero de 2001 por el Ministerio de Educación, Cultura y Deportes de Bolivia."
  },
  {
    year: "2007",
    title: "Renovación de Autorización",
    resolutionCode: "R.M. 100/2007",
    description: "Renovación oficial de la autorización y consolidación institucional.",
    detail: "Otorgada el 8 de febrero de 2007, registrando 834 egresados titulados hasta esa fecha."
  },
  {
    year: "2012",
    title: "Carrera de Enfermería (Técnico Medio)",
    resolutionCode: "R.M. 748/2012",
    description: "Autorización oficial para impartir la carrera a nivel Técnico Medio.",
    detail: "Emitida el 24 de octubre de 2012 por el Ministerio de Educación."
  },
  {
    year: "2018",
    title: "Ratificación de Funcionamiento",
    resolutionCode: "R.M. 1258/2018",
    description: "Ratificación oficial de funcionamiento del programa curricular.",
    detail: "Emitida el 20 de diciembre de 2018."
  },
  {
    year: "2025",
    title: "Ratificación y Bodas de Plata",
    resolutionCode: "R.M. 0040/2025",
    description: "Última ratificación emitida el 28 de enero de 2025, certificando la excelencia académica.",
    detail: "Llegamos a 25 años de trayectoria con 34 promociones y 873 egresados y titulados en la carrera de Enfermería."
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
    name: "Lic. Olga Rosmery Yujra Magne",
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
    title: "Renovación R.M. 0040/2025 Acreditación Ministerial",
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

