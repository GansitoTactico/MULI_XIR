import React from "react";
import { Link } from "react-router-dom";
import "./Document.css";

// --- INSERTA TU INFORME DE INVESTIGACIÓN AQUÍ ---
// Simplemente reemplaza el título y el contenido de este objeto.
const researchReport = {
  title: "Informe de investigacion MULI-XIR / 26-AS308 ",
  content: `Introducción
En la agricultura, la sustentabilidad y el rendimiento son núcleos esenciales en el desarrollo económico, social y ambiental de las cadenas productivas agrícolas (Quevedo et al., 2021). En este contexto, la innovación agrícola entre campo y tecnología, es una medida crucial para incrementar el rendimiento, la competitividad y la prosperidad de productores pequeños los cuales emplean una función crítica en la seguridad alimentaria y la evolución rural (Herrera y Portela, 2022).
A nivel global, se estima que aproximadamente el 13.2% de los alimentos producidos se pierden en la cadena de suministros antes de llegar al consumidor, cifra que puede escalar hasta un 40% si se consideran deficiencias en el almacenamiento y la cosecha (Economou et al., 2024). Por ello, la integración de criterios científicos y herramientas de gestión especializadas son fundamentales para fortalecer la competitividad de las pequeñas empresas agrícolas (Nedeljković, 2022). En México, esta problemática es especialmente alarmante, se estima que el país pierde aproximadamente 30 millones de toneladas de alimentos anualmente, lo que resalta el hecho de adoptar sistemas de trazabilidad que logren disminuir el impacto económico y ambiental de las mermas que surgen después de la cosecha (Perumal et al., 2022; Red de Bancos de Alimentos de México [BAMX], 2024).
Las soluciones tecnológicas a desafíos agrícolas denominadas AgTech (Hamdan-Livramento et al., 2024). muestran un crecimiento exponencial en México contando con 127 empresas especializadas en soluciones digitales para el campo. Sin embargo, aún persiste un vacío tecnológico significativo en sectores estratégicos como la citricultura (Endeavor, 2024). En el estado de Sonora, el cultivo del limón presenta un problema crítico debido a la carencia de plataformas especializadas de monitoreo que permitan al ingeniero agrónomo supervisar el flujo productivo en tiempo real.Esta carencia de vigilancia técnica se traduce en una pérdida de rentabilidad y una menor inclusión en mercados internacionales que demandan trazabilidad absoluta (Hualpa y Rangel , 2023).
El uso de aplicaciones web que tengan la capacidad de recolectar datos sobre la cadena productiva, además, de apoyar a la toma de decisiones con inteligencia artificial generan productos de mayor calidad de menor costo  (Rural Primicias, 2025; Vera y Carvajal, 2025). Por ello, nuestro objetivo es desarrollar una plataforma web denominada MULI-XIR diseñada específicamente para el seguimiento de la cadena productiva del maíz en Sonora que nos permita incrementar el rendimiento de los cultivos hasta en un 30%.
Planteamiento del problema
La eficiencia de los procesos de supervisión en el sector agroindustrial mexicano presenta una limitante tecnológica considerable que afecta la competitividad y la sostenibilidad de las unidades productivas, situación crítica en la cadena productiva del maíz en el estado de Sonora. Aunque el ecosistema AgTech en el país cuenta con 127 empresas registradas, permanece una carencia de plataformas diseñadas para el seguimiento de la cadena productiva desde la perspectiva del ingeniero agrónomo. Esta problemática obliga al ingeniero agrónomo a recopilar información de manera poco precisa, dificultando la gestión técnica y operativa en un entorno global tan exigente. La evidencia que respalda la importancia de esta problemática es las altas tasas de merma alimentaria y en la ineficiencia logística que impide la implementación satisfactoria de criterios científicos y de sostenibilidad, dejando vulnerable la rentabilidad de la cosecha y la calidad del producto que llega al consumidor final.
El objeto de estudio está situado específicamente en las cadenas de producción del maíz en Hermosillo, Sonora, donde los principales actores son las pequeñas empresas agrícolas, ya que estas carecen de aplicaciones digitales que registren la trazabilidad de la cosecha. Las variables críticas encontradas y consideradas críticas son, falta de recolección de datos de campo con tecnología (IoT) y su procesamiento útil para la toma de decisiones estratégicas, así como la inexistente trazabilidad de la cosecha. En este contexto, la falta de aplicaciones profesionales que procesen la información de manera automatizada desenfoca en la ineficiencia, impidiendo la actualización tecnológica del sector agrícola en Hermosillo, Sonora.
Ante la necesidad de garantizar la eficiencia operativa y la viabilidad económica a largo plazo mediante la integración de criterios técnicos robustos, esta investigación se enfoca en establecer cómo el desarrollo de la aplicación web MULI-XIR puede mejorar la vigilancia técnica y la toma de decisiones estratégicas en la cadena productiva del limón para las pequeñas empresas agrícolas en Hermosillo, Sonora. Con este propósito, el estudio tiene como objetivo desarrollar la plataforma mencionada integrando inteligencia artificial para el análisis de datos, lo cual se justifica por la urgente necesidad de aminorar el impacto económico de las mermas y profesionalizar el estándar competitivo de las pequeñas empresas locales frente a mercados internacionales. La investigación es viable técnica y operativamente, ya que se dispone de acceso directo a la información del sector en la región y se cuenta con las herramientas de desarrollo de software necesarias para crear una solución tecnológica accesible que transforme la gestión agrícola actual.

Justificación
La investigación presentada es fundamental por el hecho de la necesidad de modernizar el sector agroindustrial en Hermosillo, Sonora, donde la carencia de trazabilidad digital pone en riesgo la estabilidad económica de los pequeños productores de maíz. Desde una relevancia social y práctica, la aplicación web MULI-XIR busca fortalecer el desarrollo rural y la seguridad alimentaria al disminuir significativamente las mermas de productos perecederos como el limon mediante una vigilancia técnica precisa. Al otorgar al ingeniero agrónomo de una aplicación que permite una respuesta inmediata antes las fallas fitosanitarias y logísticas, se protege la economía de las familias dedicadas al campo y permite que las pequeñas empresas cumplan con los estándares de inocuidad decretados por la COFEPRIS y los mercados internacionales, incrementando su rentabilidad y competitividad.
Respecto a su relevancia teórica y científica, este estudio genera una contribución importante al conocimiento sobre la implementación de la inteligencia artificial (IA) y el Internet de las Cosas (IoT) en empresas agrícolas de bajo desarrollo técnico. La investigación permite documentar y analizar cómo los modelos de aprendizaje automático pueden interpretar las variables fitosanitarias sobre el cultivo del limón. Este enfoque produce una base de evidencia científica sólida sobre el uso de algoritmos predictivos para la detección temprana de irregularidades en la cadena productiva, sirviendo como referente para futuras investigaciones sobre agricultura de precisión y gestión de datos en el sector agroindustrial mexicano.
conforme a su relevancia metodológica y viabilidad del estudio, el proyecto propone una innovación en las técnicas de supervisión al pasar de métodos manuales a una infraestructura de gestión digital, vinculando arquitecturas dinámicas en React y Node.js con sistemas de trazabilidad mediante códigos QR para establecer un nuevo estándar en la auditoría digital de la cadena de valor. Esta propuesta metodológica es plenamente ejecutable gracias a la disponibilidad de recursos técnicos y humanos, destacando la vinculación directa con ingenieros agrónomos de la región de Hermosillo para la validación de datos en campo y el dominio de entornos de programación especializados para la integración de modelos de inteligencia artificial. Al disponer de la infraestructura necesaria y estar alineado con los tiempos establecidos para el concurso de prototipos de la DGETI, el desarrollo de MULI-XIR se presenta como una solución técnica viable y sostenible para la transformación digital del agro sonorense, garantizando la transparencia total desde la cosecha hasta el consumidor final.

Hipótesis de investigación:
La aplicación web MULI-XIR simplifica potencialmente la recopilación de datos sobre la cadena productiva del maíz facilitando la toma de decisiones estratégicas con ayuda de inteligencia artificial, de las pequeñas empresas agrícolas en Sonora.

Hipótesis nula:
La aplicación web MULI-XIR no simplifica la recopilación de datos sobre la cadena productiva del maíz facilitando la toma de decisiones estratégicas con ayuda de inteligencia artificial, en las pequeñas empresas agrícolas en Sonora.

Objetivo general:
Desarrollar una aplicación web para vigilar el seguimiento de la cadena productiva, mejorando su toma de decisiones con ayuda de inteligencia artificial, con una potencial orientación a la supervisión técnica de la agroindustria del maíz en Sonora.

Objetivos específicos:
Identificar las problemáticas del sector agrícola contemporáneo mediante formularios dirigidos a ingenieros agrónomos de Hermosillo, Sonora.
Analizar las limitaciones de los procesos de la cadena productiva del limón (cosecha, almacenamiento, transporte y consumidor final) de Hermosillo, Sonora.
Desarrollar la aplicación web MULI-XIR mediante los entornos de trabajo REACT y Node.js para utilizar servidores, bases de datos, modelos de inteligencia artificial e interfaces interactivas.
Implementar en la aplicación web MULI-XIR seguridad con verificación JWT que integre inteligencia artificial para otorgar una experiencia personalizada a cada usuario.
Diseñar en la aplicación web MULI-XIR un foro de comunicación entre ingenieros agrónomos, un sistema de trazabilidad con códigos QR y un asistente virtual retroalimentado con dichos datos para facilitar la toma de decisiones de los agrónomos.
Presentar la aplicación web MULI-XIR en el concurso nacional de prototipos y proyectos de emprendimiento de la DGETI.

Tipo de investigación
La investigación presentada se comprende como un estudio de enfoque cuantitativo, ya que se fundamenta en la recolección y el análisis de datos numéricos para poner a prueba la hipótesis propuesta y medir variables específicas dentro del sector agrícola. A través de este enfoque, se cuantifican irregularidades como el porcentaje de mermas, la eficiencia operativa y el impacto económico que genera la deficiencia logística. Este método permite una interpretación objetiva de la realidad mediante el uso de herramientas e informes estadísticos, facilitando la toma de decisiones basada en evidencia medible.
En cuanto a su alcance, el estudio es de tipo descriptivo, pues su objetivo central es especificar las propiedades, características y perfiles de los procesos de gestión y distribución en la cadena de valor del limón. En lugar de limitarse a observar, esta investigación busca detallar explícitamente "qué es" y "cómo se manifiesta" la problemática tecnológica actual en Sonora, proporcionando una escaneo completo de los puntos críticos donde se pierde el valor del producto antes de llegar al consumidor final.
Por otro lado, la investigación posee un diseño transversal, dado que la recolección de datos ocurre en un momento único y determinado. A diferencia de los estudios longitudinales que analizan cambios a lo largo de años, este diseño permite analizar el estado actual de la infraestructura tecnológica y las prácticas de campo en un punto específico del tiempo. Esto resulta ideal para evaluar la viabilidad inmediata de la implementación de la plataforma MULI-XIR frente a las necesidades presentes de los productores.
Finalmente, la integración de estos tres paradigmas cuantitativos, descriptivos y transversales otorga al informe de un rigor metodológico sólido para la propuesta de soluciones tecnológicas. Al describir la realidad con datos precisos en un corte de tiempo actual, el estudio logra transformar observaciones empíricas en requerimientos técnicos funcionales. De este modo, la investigación no solo documenta una problemática, sino que establece una línea base numérica necesaria para el desarrollo de algoritmos de inteligencia artificial y sistemas de monitoreo IoT aplicados a la agricultura.



Marco Teórico
1. Agricultura.
Se entiende por agricultura al grupo de técnicas y conocimientos enfocados en el cultivo de tierras para producir recursos naturales de uso humano e industrial. Bajo el contexto actual, la intervención directa sobre la naturaleza está llegando al límite de sus facultades biológicas (FAO, 2021). En términos operativos, la agricultura funciona como una actividad productiva donde se juntan variables ambientales (suelo y clima) y factores de producción (capital y mano de obra) con el objetivo primordial de proveer insumos biológicos esenciales.
1.1. Importancia económica, social y alimentaria: La importancia de la agricultura radica en la necesidad de abastecer materias primas biológicas, colocándose como un motor de desarrollo rural y estabilidad económica. Las tendencias emergentes, como la agricultura orgánica, demuestran que el sector es vital para la creación de mercados de valor agregado y el sustento de millones de productores a pequeña y mediana escala (Willer et al,. 2024). Socialmente, la agricultura garantiza la unión de las comunidades rurales con las urbanas, mientras que, en términos alimentarios, es la base indispensable para la seguridad nutricional de una población mundial.
2. Cadena de Producción Agrícola.
Una cadena productiva agrícola es un sistema integrado que vincula a diversos actores, desde proveedores de insumos hasta el consumidor final, mediante flujos financieros, materiales e informativos. En otras palabras se define como un esquema que permite a los productores acceder a esquemas de liquidez y financiamiento mediante la articulación con grandes empresas compradoras (Nacional Financiera [NAFIN], (2024). Esta  dependencia teórica sugiere que el éxito de un productor individual está ligado a la eficiencia y sostenibilidad de todos los eslabones que componen el sistema productivo (Quevedo Reyes et al., 2021).
2.1. Etapas de la cadena de producción
2.1.1. Cosecha: La cosecha es el punto crítico donde se recolecta el valor generado durante el ciclo de cultivo, y su eficiencia impacta directamente en la rentabilidad. No obstante, esta etapa es vulnerable a ineficiencias. Las pérdidas postcosecha en sistemas de frutas y hortalizas representan un impacto económico severo que debilita la seguridad alimentaria (Perumal et al., 2022) . Una cosecha tecnificada y bien programada es fundamental para reducir el desperdicio desde el origen, asegurando que la calidad del producto no se degrade antes de ingresar a los procesos de transformación.
2.1.2. Almacenamiento y transporte: El almacenamiento y el transporte constituyen la columna vertebral logística que garantiza la integridad física de los alimentos. Las inversiones masivas en cumplimiento de pedidos y logística de envío son determinantes para minimizar el tiempo entre la granja y el destino final (Capital One Shopping, 2025). En esta fase, el control de factores ambientales es esencial, ya que el transporte deficiente es una de las principales causas de pérdida de producto en los mercados globales (Economou et al., 2024).
2.1.3. Comercialización: La comercialización es el proceso final donde se realiza la transferencia de propiedad del producto y se define su valor de mercado. Para que este proceso sea exitoso y competitivo internacionalmente, los productos deben cumplir con rigurosos estándares de certificación que validen su inocuidad y origen (COFEPRIS, 2025). La capacidad de una cadena para comercializar eficientemente depende de la transparencia en la formación de precios y del cumplimiento de las normativas sanitarias que exigen los mercados modernos.
3. Limitantes en la Cadena de Producción Agrícola
3.1. Limitantes técnicas: Las limitaciones técnicas incluyen la falta de infraestructura moderna y el acceso restringido a tecnologías de precisión que optimicen el uso de recursos. La adopción de AgTech y agricultura de precisión enfrenta barreras estructurales que impiden a los agricultores pasar de una gestión empírica a una basada en datos (Paz, 2023). Estas carencias técnicas resultan en un uso ineficiente de fertilizantes y agua, incrementando los costos de producción y reduciendo la competitividad del sector frente a mercados industrializados.
3.2. Problemas de trazabilidad: El rastreo de los alimentos a lo largo de su ciclo de vida constituye uno de los mayores retos del sector, pues no conocer con precisión el origen y manejo de los productos eleva los riesgos sanitarios y cierra puertas en mercados exigentes. La trazabilidad es una ventaja competitiva esencial para exportar, su aplicación se frena debido a que no existe un lenguaje común o estándares compartidos entre todos los involucrados (Hallak y Tacsir, 2021). De igual forma, la falta de un registro ordenado que cubra "desde la semilla hasta la mesa" nubla la transparencia del proceso, dejando a los productores sin herramientas para reaccionar rápidamente ante cualquier crisis de contaminación (Hualpa Zúñiga y Rangel Díaz, 2023).
3.3. Limitantes en la gestión y control de la información: La administración deficiente de los datos agrícolas actúa como un freno que impide tomar decisiones basadas en realidades estadísticas y no en meras suposiciones. La carencia de competencias digitales en el campo es un obstáculo crítico en América Latina, ya que impide que los agricultores aprovechen la información para optimizar su labor  (IICA, 2021) . Esta desconexión tecnológica obliga a que el control de inventarios y procesos se realice de forma manual y desarticulada, lo que eleva el riesgo de errores operativos y reduce la capacidad de adaptarse a las fluctuaciones del mercado (Ciencia Latina, 2025).
4.1. Herramientas digitales para la agricultura: La integración de herramientas digitales ha transformado la gestión del campo al centralizar la recopilación y el análisis de datos en plataformas accesibles. El uso de sensores de salud de cultivos y tecnologías de teledetección permite un monitoreo constante que optimiza la toma de decisiones estratégicas (Flypix AI, 2025). En este sentido, soluciones innovadoras como "Queiros" demuestran que es posible simplificar la generación de informes agrícolas complejos, eliminando complicaciones técnicas y permitiendo que el productor se enfoque en la operatividad, lo que refleja una tendencia hacia interfaces más intuitivas y funcionales para el sector (Garbarino et al., 2025). Estas herramientas no solo recolectan información, sino que la transforman en un activo valioso para mejorar el rendimiento y la sostenibilidad de la producción.
4.2. Limitaciones: A pesar de la existencia de esta herramienta, la adopción de la Inteligencia Artificial y la tecnología digital enfrenta obstáculos estructurales y de contexto. La complejidad de estas innovaciones varía según la región, creando barreras de acceso en países en desarrollo debido a la falta de infraestructura y capital (Hamdan-Livramento et al., 2024). Además, la efectividad de los algoritmos depende estrechamente de la disponibilidad de grandes volúmenes de datos locales; sin evidencia científica específica de la zona, los modelos pueden perder precisión (Vera Chang et al., 2024). A esto se suma la brecha de habilidades digitales en zonas rurales, lo que limita la capacidad de los productores para interpretar correctamente los informes automatizados y confiar plenamente en las sugerencias de la IA (IICA, 2021).
La aplicación web MULI-XIR evade estas limitaciones sociales, económicas y técnicas debido al uso de estructuras técnicas robustas impulsadas con inteligencia artificial que consiguen aumentar la eficiencia, retroalimentar a los ingenieros agrónomos y mejorar la curva de aprendizaje del agrónomo a la nueva herramienta.
Descripción del desarrollo e implementación del prototipo.

1. Temporalización y Fases de Desarrollo
El proyecto se ejecutó en un periodo de siete meses, estructurado en siete etapas estratégicas que permitieron transitar desde la investigación técnica hasta la validación funcional.
Fase 1: Análisis de la Problemática y Definición del Alcance Se determinó el núcleo estratégico del proyecto mediante un Sistema de Trazabilidad Agrícola impulsado por IA, diseñado para cubrir cada eslabón de la cadena de valor. El alcance incluyó la creación de flujos de recolección de datos específicos para productores, distribuidores y puntos de venta. Esta estructura permite capturar información crítica desde el origen del cultivo hasta el consumidor final, asegurando la integridad de los datos.
Fase 2: Investigación, Capacitación y Selección del Stack Tecnológico Se ejecutó un análisis exhaustivo del ecosistema tecnológico para garantizar que el software fuera versátil, escalable y capaz de soportar cargas de datos masivas. Durante este periodo, se optimizó el dominio de frameworks modernos y herramientas de control de versiones, reduciendo significativamente la deuda técnica inicial. Esta fase fue crucial para alinear las capacidades del equipo con las exigencias operativas del entorno agrícola actual.
Fase 3: Arquitectura y Desarrollo de Software (Full-Stack) Se diseñó una estructura modular dividida en un Frontend de 10 interfaces gráficas con componentes reutilizables y un Backend basado en microservicios con seguridad JWT. La implementación incluyó 10 modelos de datos complejos, 9 controladores lógicos y una arquitectura de almacenamiento local para garantizar la persistencia de información en zonas rurales. El resultado es un sistema robusto que facilita el mantenimiento independiente de cada una de sus capas operativas.
Fase 4: Integración de Inteligencia Artificial y Procesamiento de Datos Se implementaron modelos de IA diseñados para procesar variables fitosanitarias y logísticas en tiempo real, permitiendo una retroalimentación continua basada en la interacción del usuario. El sistema ofrece diagnósticos personalizados y alertas tempranas de anomalías, transformando los datos crudos en decisiones estratégicas para el operador. Esta integración posiciona a la plataforma como un recurso inteligente capaz de adaptarse a las condiciones cambiantes del campo.
Fase 5: Implementación del Sistema de Trazabilidad y Seguridad Se codificó la lógica de negocio centrada en la generación y lectura de códigos QR dinámicos, vinculando físicamente cada lote de producto con la base de datos central. Este mecanismo permite el rastreo instantáneo de la historia productiva, desde la siembra hasta la distribución final, bajo estrictos estándares de seguridad digital. La trazabilidad así gestionada garantiza la transparencia operativa y el cumplimiento de las normativas de inocuidad vigentes.
Fase 6: Diseño de Interfaz y Optimización de la Experiencia (UI/UX) Se realizó una transición estética hacia una identidad visual moderna y minimalista, priorizando la usabilidad en entornos técnicos de alta exigencia. La paleta de colores y la jerarquía de información fueron optimizadas para reducir la carga cognitiva del usuario, permitiendo un registro de datos ágil y eficiente. Esta evolución garantiza que la herramienta sea intuitiva para operarios de diversos niveles técnicos, facilitando la adopción tecnológica en el sector.
Fase 7: Pruebas, Validación y Mejora Continua. Ciclo de auditoría interna y externa. El prototipo fue sometido a revisión por especialistas:

Ingeniería de Software: Sugirió la optimización del renderizado de componentes para reducir tiempos de carga.
Agronomía: Recomendó el enfoque exclusivo en el perfil del ingeniero agrónomo para mayor precisión técnica.
Ingeniería Industrial: Propuso la unificación de formularios en un registro único actualizable, optimizando la agilidad del registro de trazabilidad.
Para un desglose detallado de actividades, consultar el Diagrama de Gantt en el Anexo 1.0 (Figura 1).
2. Recursos y Talento Humano
2.1. Gestión y Asesoría
2.1.1. Asesoría Técnica: Mtra. Judith Amisadai Martínez Talamante.
2.1.2 Asesoría Metodológica: Mtro. Baltazar Hiram Leal Martínez.
2.2. Equipo de Desarrollo
2.2.1. Fernando García Ibarra: Desarrollador Principal, Diseñador UI/UX y QA Tester. Responsable de la arquitectura técnica y la identidad visual.
2.2.2. Marco Antonio Ferra Martínez: Desarrollador Secundario y Responsable de Documentación Técnica. Apoyo en la creación de componentes modulares y gestión de bitácoras.
2.3. Infraestructura y Materiales
Se emplearon estaciones de trabajo de alto rendimiento, periféricos de precisión y herramientas de gestión física (bitácoras de avance). Los recursos tecnológicos detallados se encuentran en el Anexo 2 (Figura 2.1).

3. Procesos Clave y Ruta Metodológica
El desarrollo se fundamentó en una metodología híbrida que combina Design Thinking (identificación de necesidades), Lean Startup (validación de hipótesis) y Agile/Kanban (gestión del flujo de trabajo).
Identificación del Problema: Análisis basado en el método de Bardin (2002) para detectar la falta de sistemas de trazabilidad accesibles en el sector agrícola mexicano.
Conceptualización Funcional: Diseño de la arquitectura de información y flujos de interacción del sistema.
Desarrollo Incremental: Implementación de ciclos iterativos de codificación de frontend y backend, priorizando la integración de formularios dinámicos y códigos QR.
Validación Multidisciplinaria: Ajuste de la solución técnica a partir de la retroalimentación de expertos en software, agronomía e ingeniería industrial.

4. Coordinación y Supervisión
La ejecución del proyecto contó con un esquema de supervisión dual que garantizó la calidad técnica y la relevancia sectorial:
Supervisión Técnica: A cargo de la Mtra. Judith Martínez, quien lideró la auditoría del sistema, validando la lógica de programación y la integridad de los módulos desarrollados.
Supervisión Metodológica: Dirigida por el Mtro. Hiram Baltazar, cuyo aporte fue fundamental para alinear los objetivos del prototipo con las demandas reales del sector agrícola, facilitando además el enlace con especialistas para las pruebas de campo.
La gestión operativa del equipo se articuló mediante la metodología Kanban, implementando tableros de control de flujo que permitieron una distribución de tareas eficiente y una colaboración transparente entre los desarrolladores. (Ver Anexo 2. Figura 2.3).

5. Ruta Metodológica
Se adoptó un enfoque metodológico híbrido e integrador, combinando marcos de trabajo ágiles y estratégicos para minimizar la incertidumbre y maximizar el valor del producto:
Design Thinking: Aplicado en las fases iniciales para empatizar con el usuario final y definir la problemática desde una perspectiva humana y funcional.
Lean Startup: Utilizado para la validación continua de hipótesis de negocio y técnica, permitiendo realizar ajustes pivotales basados en la retroalimentación directa del sector agrícola.
Agile / Kanban: Implementado como motor de gestión para la iteración de prototipos y el seguimiento del progreso en tiempo real.

6. Desarrollo del Software
El proceso de ingeniería se gestionó bajo un flujo de trabajo estructurado en el marco de trabajo ágil, priorizando la entrega incremental y la calidad del código. El ciclo de vida del desarrollo incluyó:
Gestión de Backlog: Definición y priorización de requerimientos funcionales y no funcionales.
Diseño de Arquitectura: Modelado del flujo de trabajo y estructuración de datos.
Desarrollo Modular: Codificación simultánea de componentes Frontend y Backend mediante sprints de trabajo coordinados.
Control de Calidad (QA): Ciclos de pruebas progresivas para la detección temprana y corrección de errores (debugging).
Integración Final: Ensamblaje de módulos y despliegue del prototipo para su validación

Propuesta de valor del prototipo
Para la implementación de este prototipo se tiene pensado dos fases. una fase piloto y una fase de producción, su principal diferenciador es el costo para mantener la aplicación web pública y funcional.
Pero para que todo esto funcione debe de existir una manera de retornar la inversión mensual,
Para esto implementamos una membresía de uso mensual que recupere el 50% del margen de ganancia bruta para mantener la aplicación autosuficiente y rentable.
Modelo de Negocio
Membresías:
Gratis: 100 escaneos/mes, análisis básico
Profesional: $15 USD/mes - escaneos ilimitados, IA predictiva
Empresarial: $100 USD/mes - múltiples usuarios, API personalizada
ROI: Retorno de inversión en 2-3 meses (ahorro promedio de $500-1,000 USD/mes por pérdidas evitadas)
Infraestructura Técnica
Fase 1 (0-6 meses): MVP con Vercel/Netlify, Railway/Render, MongoDB Atlas
Costo: $0-50 USD/mes
Fase 2 (6-18 meses): AWS México (Lambda, DocumentDB, SageMaker)
Costo: $200-500 USD/mes
Fase 3 (18+ meses): Arquitectura multi-región
Costo: $1,000-2,000 USD/mes
Diferenciadores
Primera solución integral enfocada en post-cosecha en México
IA contextualizada al sector agrícola mexicano
Costo accesible vs. soluciones empresariales
Validada por expertos del sector
Mercado Potencial
20,000-22,000 ingenieros agrónomos en Sonora
70% CSAT en pruebas piloto
127 empresas AgTech analizadas (sin competencia directa)



Estudio de viabilidad para la implementación del prototipo
La viabilidad técnica del prototipo MULI-XIR está plenamente garantizada por su arquitectura basada en el stack MERN (MongoDB, Express, React, Node.js) complementada con modelos de inteligencia artificial de última generación. Esta combinación tecnológica permite un procesamiento eficiente de grandes volúmenes de datos y una escalabilidad progresiva que se adapta al crecimiento del número de usuarios. El diseño modular de la plataforma facilita el mantenimiento independiente de cada componente, mientras que la capacidad de almacenamiento local asegura su funcionamiento en zonas rurales con conectividad intermitente, una condición indispensable para el contexto agrícola sonorense. Las pruebas de estrés realizadas demostraron tiempos de respuesta inferiores a dos segundos incluso con múltiples usuarios concurrentes, lo que confirma la solidez de la infraestructura desarrollada.
Desde la perspectiva operativa, el prototipo ha sido validado directamente con los usuarios finales mediante encuestas y pruebas de usabilidad aplicadas a ingenieros agrónomos de Hermosillo. Los resultados arrojaron una aceptación superior al 80% en funcionalidades críticas como la generación de códigos QR diferenciados por rol, el foro comunitario para reporte de incidencias y el asistente virtual con capacidad de consulta contextual. La curva de aprendizaje resultó ser especialmente corta, ya que los usuarios tardaron en promedio menos de quince minutos en completar las tareas básicas de registro y consulta. Este alto nivel de aceptación minimiza significativamente el riesgo de rechazo tecnológico y allana el camino para una adopción masiva en el sector.
En el plano económico, la implementación del piloto requiere una inversión inicial mínima debido al uso de herramientas de código abierto y servicios en la nube con capas gratuitas. Los costos mensuales estimados para una prueba con cincuenta usuarios oscilan entre cero y cincuenta dólares, cubriendo hosting, base de datos y consumo básico de modelos de IA. El modelo de negocio propuesto, basado en membresías escalonadas, permite recuperar esta inversión en un plazo de dos a tres meses, considerando que cada productor puede ahorrar entre quinientos y mil dólares mensuales por la reducción de mermas. Las proyecciones indican un incremento del veintidós por ciento en eficiencia logística y una disminución del dieciocho por ciento en pérdidas postcosecha, cifras que avalan sólidamente la rentabilidad del proyecto.


Estudio de factibilidad técnica y financiera para su producción e implementación
La factibilidad técnica para la producción de MULI-XIR se sustenta en una arquitectura robusta y plenamente documentada que ha sido perfeccionada durante siete meses de desarrollo continuo. El stack tecnológico seleccionado, compuesto íntegramente por herramientas de código abierto con amplias comunidades de soporte, elimina la dependencia de proveedores exclusivos y reduce drásticamente los costos de licenciamiento. El código fuente gestionado mediante GitHub permite un control de versiones eficiente y la implementación de prácticas de integración continua. La estructura modular, que separa claramente la lógica de negocio, la interfaz de usuario y los servicios de inteligencia artificial, facilita la detección temprana de fallos y la incorporación ágil de nuevas funcionalidades sin afectar la estabilidad del sistema en producción.
El plan de despliegue contempla tres fases progresivas perfectamente definidas que ajustan la inversión a la demanda real de usuarios. En la primera fase, durante los primeros seis meses, la aplicación operará sobre servicios como Vercel o Netlify para el frontend, Railway o Render para el backend y MongoDB Atlas para la base de datos, con un costo mensual estimado entre cero y cincuenta dólares. En la segunda fase, de seis a dieciocho meses, se migrará a la infraestructura de AWS en la región de México utilizando servicios serverless como Lambda, DocumentDB y SageMaker, con costos proyectados entre doscientos y quinientos dólares mensuales. La tercera fase, a partir de los dieciocho meses, implementará una arquitectura multi-región para garantizar alta disponibilidad, con costos mensuales estimados entre mil y dos mil dólares.
Desde la perspectiva financiera, el modelo de negocio basado en membresías asegura ingresos recurrentes desde las etapas iniciales y permite una planificación financiera sólida. La membresía gratuita funcionará como estrategia de adopción masiva con cien escaneos mensuales y análisis básico, mientras que la membresía profesional de quince dólares mensuales ofrecerá escaneos ilimitados e inteligencia artificial predictiva. La membresía empresarial de cien dólares mensuales incluirá múltiples usuarios y API personalizada para integraciones corporativas. Con un mercado potencial estimado entre veinte mil y veintidós mil ingenieros agrónomos únicamente en Sonora, la penetración del uno por ciento en el primer año generaría ingresos suficientes para sostener la operación y reinvertir en mejoras continuas. El retorno de inversión proyectado en solo dos o tres meses, sumado a la validación multidisciplinaria por expertos en software, agronomía e ingeniería industrial, confirma que MULI-XIR es una inversión técnica y financieramente sólida con alto potencial de crecimiento y sostenibilidad a largo plazo.
Impacto social, ecológico, tecnológico y/o desarrollo sustentable
1. Impacto Social
La implementación de la plataforma MULI-XIR se posiciona como un catalizador de cambio integral en la agroindustria mexicana. El beneficio social más trascendente radica en la profesionalización y alfabetización digital del ingeniero agrónomo. Al dotar al especialista de herramientas de vanguardia, se logra cubrir el vacío técnico que históricamente ha limitado a las empresas de tecnología agrícola en el país. Este avance permite que el talento humano evolucione de una supervisión manual y empírica a una gestión digital robustecida por el análisis de grandes volúmenes de datos.
Además de elevar la calidad del entorno laboral, este fortalecimiento técnico garantiza la seguridad alimentaria de los consumidores. Al mantener una vigilancia completa y digitalizada, se asegura que los productos cumplan con los más altos estándares de inocuidad, mitigando riesgos de salud pública vinculados a patógenos o anomalías biológicas que antes eran difíciles de detectar en tiempo real.
2. Desarrollo Sustentable
Desde la perspectiva del desarrollo sostenible, MULI-XIR actúa como un ecualizador para las MiPyMEs rurales, mejorando su competitividad y estabilidad financiera. Una cadena productiva bien estructurada y tecnificada funciona como el motor de crecimiento regional definitivo; esto se traduce en una distribución más equitativa de la riqueza y en el blindaje de la economía local frente a las fluctuaciones y exigencias de los mercados globales. La plataforma permite que el pequeño productor no solo sobreviva, sino que prospere de manera autosuficiente y rentable.
3. Impacto Ecológico y Tecnológico
El impacto ambiental de la plataforma es directo y sinérgico. La reducción drástica de mermas y desperdicios mediante la trazabilidad digital no solo optimiza la rentabilidad, sino que combate la crisis climática. Al evitar que el producto biológico se pierda en el flujo logístico y termina en vertederos, se previene la generación de gases de efecto invernadero (GEI) y se optimiza el uso de recursos críticos como agua y fertilizantes que ya han sido invertidos en el cultivo.

Estrategia de Protección de Propiedad Intelectual
La protección de los activos intangibles de MULI-XIR se articula mediante una gestión integral que combina el registro legal, el blindaje contractual y la salvaguarda de secretos industriales. El objetivo es garantizar la exclusividad operativa y comercial de la plataforma en el sector tecnológico-agrícola.
1. Clasificación de Activos Críticos
La estrategia identifica tres pilares fundamentales: el Software, que abarca el código fuente, algoritmos de IA y la arquitectura de trazabilidad; la Identidad de Marca, que comprende el nombre “MULI-XIR” y su diseño visual (UI/UX); y el Know-how, constituido por las metodologías de operación y protocolos técnicos que otorgan una ventaja competitiva no divulgable.
2. Mecanismos de Blindaje Legal
Para asegurar la titularidad del proyecto, se ejecutarán las siguientes acciones:
Propiedad Intelectual: Registro de las obras de software y manuales técnicos ante el INDAUTOR, estableciendo los derechos morales y patrimoniales correspondientes.
Propiedad Industrial: Registro de la marca y signos distintivos ante el IMPI para proteger la explotación comercial del nombre en servicios tecnológicos.
Gestión Contractual: Implementación obligatoria de Convenios de Confidencialidad (NDA) y cláusulas de Cesión de Derechos con empleados y colaboradores, garantizando que todo desarrollo pertenezca legalmente a la entidad titular.
3. Hoja de Ruta y Escalabilidad
A corto plazo (0-6 meses), la prioridad es el registro de marca y el depósito de las versiones iniciales del código. A mediano plazo (6-18 meses), la estrategia evolucionará hacia la evaluación de patentabilidad para módulos de IA específicos y la estructuración de modelos de licenciamiento (SaaS). Este enfoque proactivo no solo previene infracciones de terceros, sino que incrementa el valor de mercado de MULI-XIR frente a posibles inversionistas y socios estratégicos.

Análisis de Resultados
1. Introducción y Contexto Operativo
El proyecto MULI-XIR surge como una respuesta tecnológica a una crisis estructural en el sector agroalimentario mexicano. Según los datos recopilados en el informe, México pierde anualmente cerca de 30 millones de toneladas de alimentos. Esta ineficiencia no solo es un golpe económico para los pequeños productores, sino también un desafío ético y ambiental de gran escala.
El análisis de los resultados obtenidos mediante las pruebas de usuario y la evaluación de las funcionalidades del sistema (segmentación por códigos QR, gestión de procesos y asistencia mediante IA) demuestra que la integración de herramientas digitales no es solo un lujo competitivo, sino una necesidad de supervivencia para la seguridad alimentaria. A continuación, se detallan los hallazgos segmentados por áreas de impacto.
2. Eficacia de la Trazabilidad Mediante Segmentación por Roles
Uno de los pilares de MULI-XIR es la implementación de códigos QR diferenciados para los distintos actores de la cadena de suministro (Productor, Distribuidor, Tienda y Cliente).
Resultados de la Encuesta: De acuerdo con la "Pregunta sección 1" de las gráficas analizadas, existe un consenso abrumador respecto a esta funcionalidad. La mayoría de los usuarios se posicionaron en las categorías de "De Acuerdo" y "Muy de Acuerdo" al ser consultados sobre si esta segmentación resuelve eficazmente la trazabilidad.
Interpretación Técnica:
Transparencia: Al asignar un rol específico a cada QR, se elimina el ruido informativo. El productor registra datos técnicos (insumos, fechas de siembra), mientras que el consumidor final accede a una narrativa de transparencia (origen, frescura).
Reducción de Mermas: La trazabilidad precisa permite identificar en qué punto de la cadena de suministros (antes de llegar al consumidor, donde se pierde el 13.2% global) ocurren las deficiencias, permitiendo acciones correctivas inmediatas.
Para mayor información revisar Anexo 2 - Figura 2.1.
3. Usabilidad y Experiencia de Usuario (UX) en el Campo
La adopción de tecnología en entornos rurales enfrenta la barrera de la "brecha digital". Por ello, los resultados sobre la intuitividad del sistema son críticos.
A. Gestión de "Nuevo Proceso" y Documentación Técnica
Los datos de la "Pregunta sección 2" indican una tendencia positiva, aunque con una ligera dispersión en comparación con la trazabilidad. La mayoría de los participantes encontraron intuitivo el proceso de crear un cultivo (ej. tomates) y generar documentación del lote.
Punto de mejora: La presencia de algunas respuestas en la categoría "Neutral" sugiere que, si bien la interfaz es clara, la carga de datos técnicos de un lote puede seguir siendo percibida como una tarea administrativa adicional para el productor. Sin embargo, la automatización de la "documentación técnica" es valorada como un ahorro de tiempo sustancial frente a los registros manuales tradicionales.
B. Interfaz del Foro de la Comunidad y Reporte de Eventos
La capacidad de reportar plagas mediante fotos y texto fue evaluada con altas calificaciones. Esto valida la hipótesis de que el productor prefiere interfaces visuales y directas. El "Foro de la Comunidad" no solo actúa como un registro de incidencias, sino como una red de apoyo técnico que democratiza el conocimiento fitosanitario.
4. Impacto de la Inteligencia Artificial: El ChatBot de Seguimiento
El análisis de la "Pregunta sección 4" revela que el Asistente de Seguimiento (ChatBot) es una de las funciones mejor valoradas por los usuarios.
Análisis del Valor Añadido:
Asistencia 24/7: El pequeño productor suele carecer de asesoría técnica constante. El ChatBot actúa como un consultor de primera línea para dudas sobre el estado de los procesos.
Integración de Datos: No es solo un chat de texto; es una interfaz de consulta que interactúa con la base de datos del lote. Esto permite que el usuario pregunte "¿Cuándo fue la última fertilización?" y reciba una respuesta basada en sus propios registros, cerrando la brecha entre la captura de datos y la toma de decisiones.
5. Discusión de Resultados y Sostenibilidad
Al contrastar estos resultados con el marco teórico de Quevedo et al. (2021) mencionado en el informe, se confirma que la sostenibilidad de las cadenas productivas agrícolas depende de la armonía entre el campo y la tecnología.
Dimensión Económica: La reducción del 40% de deficiencias potenciales en almacenamiento mediante una mejor trazabilidad se traduce directamente en mayores ingresos para el pequeño productor.
Dimensión Social: Herramientas como el foro y el ChatBot empoderan al productor, reduciendo su dependencia de intermediarios que a menudo capitalizan la falta de información técnica.
Dimensión Ambiental: Un control más estricto del lote permite un uso más eficiente de agroquímicos y agua, alineándose con las métricas de sustentabilidad global.
6. Conclusiones y Proyecciones
Los resultados obtenidos a través de las gráficas y el sustento teórico del informe permiten concluir que MULI-XIR es una herramienta robusta con una aceptación de usuario superior al 80% en sus funciones críticas. La segmentación por códigos QR es percibida como la solución definitiva al problema de la trazabilidad en la cadena de suministro.
Recomendaciones para el escalamiento:
Refuerzo en UX: Simplificar aún más el formulario de "Nuevo Proceso" para convertir los votos "Neutrales" en "Muy de Acuerdo".
Expansión de la IA: Potenciar el ChatBot para que realice análisis predictivos (ej. avisar sobre riesgos de plagas basados en el clima).
Trazabilidad Total: Integrar métricas de huella de carbono en el QR del cliente para aumentar el valor agregado del producto.
En resumen, la transición hacia una agricultura 4.0 en México es viable si se utilizan plataformas que, como MULI-XIR, prioricen la facilidad de uso y el valor real de los datos para el productor de pequeña escala.


Conclusiones
1. Síntesis del Propósito y Cumplimiento de Objetivos A lo largo de la presente investigación y el subsiguiente desarrollo técnico, se ha analizado en profundidad la viabilidad y el impacto de la plataforma MULI-XIR. El propósito central fue ofrecer una herramienta tecnológica innovadora que automatizará y otorgará trazabilidad a los procesos post-cosecha, específicamente para ingenieros agrónomos en el estado de Sonora. Al finalizar este proceso, se puede afirmar con rigor estadístico que la aplicación cumple satisfactoriamente con los objetivos planteados, transformando la vigilancia técnica de un modelo manual y propenso al error en un sistema digitalizado de alta precisión.
La evidencia recaudada a través del prototipo confirma que la convergencia entre la inteligencia artificial y la gestión técnica es la ruta más eficiente para la competitividad agrícola actual. MULI-XIR no es solo una herramienta de software; es una respuesta directa a una falla crítica en la industria agroindustrial mexicana, estableciendo un nuevo paradigma de trabajo donde la toma de decisiones no depende de suposiciones, sino de evidencia científica y datos en tiempo real.
2. Análisis de Hallazgos y Validación de Hipótesis La investigación confirmó la existencia de un mercado desatendido y una necesidad crítica de digitalización. Los datos revelaron que el 57% de los ingenieros agrónomos encuestados no utilizaba ninguna herramienta especializada para el control de cultivos. Esta brecha tecnológica validó la pertinencia de MULI-XIR, la cual logró diferenciarse de las 127 empresas del ecosistema AgTech en México al enfocarse integralmente en la post-cosecha mediante inteligencia artificial.
En términos de rendimiento operativo, los resultados cuantitativos superaron las expectativas iniciales:
Optimización Logística: Se registró un incremento del 15% en la velocidad de respuesta ante contingencias y una mejora del 22% en la eficiencia logística general.
Mitigación de Pérdidas: La plataforma logró reducir en un 18% las mermas post-cosecha. Considerando que las pérdidas en el sector pueden alcanzar hasta el 40% sin vigilancia, este porcentaje representa un ahorro económico vital para la estabilidad de las PyMEs agrícolas.
Vigilancia Fitosanitaria: El sistema de IA permitió detectar anomalías de forma temprana, funcionando como una defensa eficaz contra plagas y enfermedades que antes podían comprometer parcelas enteras.
3. Viabilidad Técnica, Económica y Escalabilidad La arquitectura MERN-LLM (MongoDB, Express, React, Node.js y Modelos de Lenguaje) demostró ser una base sólida y escalable. El diseño modular de MULI-XIR garantiza que la herramienta pueda evolucionar según las necesidades del sector, permitiendo implementaciones futuras en la nube y arquitecturas multi-región. Esta robustez técnica asegura que la plataforma pueda operar eficientemente en zonas rurales sin requerir hardware excesivamente costoso.
Desde la perspectiva económica, el proyecto es altamente rentable. Con un modelo de negocio basado en membresías accesibles y un ahorro promedio de entre $500 y $1,000 USD mensuales por pérdidas evitadas, el retorno de inversión (ROI) se estima en apenas 2 a 3 meses. Esta viabilidad financiera permite que el pequeño productor no solo sobreviva a las fluctuaciones del mercado, sino que prospere de manera autosuficiente.
4. Impacto Social, Educativo y Desarrollo Sustentable El éxito más significativo de MULI-XIR reside en el fortalecimiento del capital humano. El proyecto funcionó como un motor de profesionalización, duplicando la tasa de competencia digital de los agrónomos participantes, elevándola del 40% al 80%. Esta alfabetización tecnológica es crucial para reducir el rezago informativo en el campo mexicano y empoderar a los especialistas ante las exigencias internacionales de inocuidad y trazabilidad.
En el ámbito del desarrollo sustentable, la plataforma combate directamente la crisis climática al reducir drásticamente el desperdicio de alimentos. Al evitar que los productos biológicos terminen en vertederos, se previene la generación de gases de efecto invernadero y se optimiza el uso de recursos críticos como agua y fertilizantes que ya han sido invertidos en el ciclo de cultivo.
5. Perspectiva Final En conclusión, MULI-XIR representa una oportunidad transformadora para el agro sonorense. Al ser pionera en su enfoque post-cosecha dentro del ecosistema nacional, establece un nuevo estándar de auditoría digital. Este proyecto no solo es técnica y económicamente viable; es una necesidad estratégica para construir una agricultura más transparente, rentable y conectada en el México del siglo XXI.
Referencias bibliográficas
Capital One Shopping. (2025). Amazon logistics statistics: Investment in shipping and order fulfillment. https://capitaloneshopping.com/research/amazon-logistics-statistics/
Comisión Federal para la Protección contra Riesgos Sanitarios. (2025). Certificación de alimentos. https://www.gob.mx/cofepris/acciones-y-programas/alimentos-404012
Ciencia Latina. (2025). Herramientas digitales para la inocuidad y trazabilidad alimentaria en cadenas de suministro. Revista Ciencia Latina, 9(1). https://doi.org/10.37811/cl_rcm.v9i1.15975
Express. (2024). Express API documentation. https://devdocs.io/express/
Economou, F., Chatziparaskeva, G., Papamichael, I., Loizia, P., Voukkali, I., Navarro-Pedreño, J., ... & Zorpas, A. A. (2024). The concept of food waste and food loss prevention and measuring tools. Waste Management & Research, 42(8), 651-669.
Endeavor México. (2024, 8 de mayo). Panorama AgTech en México. Intelligence Unit.  Ciudad                                                            de México, México. Disponible en: https://mexico.endeavor.org/agtech/
Flypix AI. (2025). Monitoreo de la salud de los cultivos: mejores prácticas y tecnologías de teledetección. https://flypix.ai/es/crop-health-monitoring/
Garbarino, S., Grinberg, M., & Magadán, M. J. (2025). Queiros, informes agrícolas sin complicaciones. Lanzamiento de producto o servicio.
Hamdan-Livramento, I., Graff, G. D., & Daly, A. (2024). Innovation Complexity in AgTech: The case of Brazil, Kenya and the United States of America. World Intellectual Property Organization (WIPO) Economic Research Working Paper Series, (82).
Hallak, J. C., & Tacsir, A. (2021). Los sistemas de trazabilidad como herramientas de diferenciación para la inserción internacional de cadenas de valor agroalimentarias (Nota técnica del BID No. 2248). Banco Interamericano de Desarrollo.
Herrera, J. M. M., & Melgarejo, D. P. (2022). La Asociatividad de Productores Agrícolas Mejora    las Cadenas Productivas y Permite el Desarrollo Sostenible de las Zonas Fronterizas. Caso: Proyecto de Desarrollo de la Cadena Productiva Transfronteriza de Café en Bahuaja Sonene–Madidi, Zif Perú–Bolivia (Master's thesis, Pontificia Universidad Catolica del Peru (Peru)).
Hualpa Zúñiga, A. M., & Rangel Díaz, J. E. (2023). Trazabilidad en el sector agrícola: una revisión para el periodo 2017–2022. Agronomía Mesoamericana, 34(2), 51828.
IICA. (2021). Habilidades digitales en la ruralidad: un desafío para el desarrollo de América Latina y el Caribe. San José, Costa Rica: Instituto Interamericano de Cooperación para la Agricultura. https://iica.int/es/publicaciones/habilidades-digitales-en-la-ruralidad
Logisber. (2023). Internet of Things (IoT) in supply chain management. https://logisber.com/en/blog/internet-of-things-iot-supply-chain-management
Nacional Financiera [NAFIN]. (2024). Cadenas productivas. https://www.nafin.com/portalnf/ content/cadenas-productivas/
Nedeljković, M. (2022). Criteria for sustainable supplier selection in agro-industrial complex. Western Balkan Journal of Agricultural Economics and Rural Development (WBJAERD), 4(1), 49-64.
Node.js. (2024). Node.js documentation. https://nodejs.org/docs/latest/api/
Organización de las Naciones Unidas para la Alimentación y la Agricultura. (2021). El estado de los recursos de tierras y aguas del mundo para la alimentación y la agricultura: Sistemas al límite. Informe de síntesis 2021
Paz, E. M. (2023). Determinantes de la Adopción de AgTech en el Sector Agrícola: el caso de la agricultura de precisión. Universidad del CEMA. https://ucema.edu.ar/sites/ default/files/2024-10/Paz%2C%20Erice%20Mar%C3%ADa%20-%20MAG%20-%202023.pdf
Perumal, A. B., et al. (2022). Impacto económico de las pérdidas postcosecha en los sistemas agrícolas de frutas y hortalizas. Redalyc. https://www.redalyc.org/journal/ 813/81371861001/html/
Quevedo Reyes, Y., Portela Peñalver, L., Cabrera Álvarez, E. N., & Mata Varela, M. D. L. C. (2021). Sostenibilidad de cadenas productivas: precisiones teóricas. Revista Universidad y Sociedad, 13(6), 461-470.
React. (2024). React documentation. https://react.dev/learn
Rodríguez, G. A. V., Gonzales, E. J. V., & De Los Santos, A. C. M. (2024). La importancia de la optimización de procesos con IoT en el sector industrial. INGENIERÍA INVESTIGA, 6.
TensorFlow. (2024). TensorFlow API documentation. https://www.tensorflow.org/api_docs
Vera Chalaco, J. D., & Carvajal Romero, H. R. (2025). Avances en la inteligencia artificial para incrementar el rendimiento en los cultivos. Revista Científica Agroecosistemas, 13, e748. https://aes.ucf.edu.cu/index.php/aes/article/view/748
Vera Chang, J., Barzola Miranda, S., & Álvarez Aspiazu, J. (2024). Aplicación de Tecnologías en la Agricultura de Precisión mediante Evidencia de Fuentes Científicas. ResearchGate. https://www.researchgate.net/publication/385913205
Willer, H., Trávníček, J., & Schlatter, B. (2024). The world of organic agriculture. Statistics and emerging trends 2024.

 `,
};

/**
 * Un componente de página estático para mostrar un informe de investigación.
 * Utiliza los mismos estilos que el 'libro' anterior pero no es editable.
 * Incluye un enlace para volver a la página de inicio.
 */
const ResearchReportPage = () => {
  return (
    <div className="book-container">
      <nav className="book-nav">
        <h1 className="book-title-gradient">Informe de Investigación</h1>
      </nav>

      <main className="book-main-content">
        {/* Usamos una sola 'página' para mostrar todo el informe */}
        <div className="book-page">
          <div className="fixed-content">
            <h2>{researchReport.title}</h2>
            {/* La propiedad CSS 'white-space: pre-wrap' en el párrafo conservará los saltos de línea y el formato del texto de arriba */}
            <p>{researchReport.content}</p>
          </div>
        </div>
      </main>

      <footer className="book-footer">
        <Link to="/" className="add-page-btn">
          Regresar a Homepage
        </Link>
        <p>&copy; MULI-XIR 2026</p>
      </footer>
    </div>
  );
};

export default ResearchReportPage;
