# Product Requirements Document (PRD) – Versión Ágil (Scrum)

## Nombre del Proyecto

```sh

```

**Inmo360** – Plataforma inmobiliaria integral

---

## Objetivo del Producto

Crear una plataforma web donde usuarios puedan publicar anuncios de propiedades (casas, departamentos, terrenos) y donde personas interesadas puedan contactarlos. Una vez iniciado el contacto, la plataforma ofrecerá servicios integrales como abogacía, notaría, asesoría legal, remodelación, tasaciones, entre otros, facilitando todo el proceso de compraventa desde un solo lugar.

---

## Público objetivo

- Personas que quieren vender su casa, terreno o departamento (dueños directos, sin intermediarios).
- Compradores interesados en propiedades en su zona.
- Personas que buscan una experiencia completa y segura en el proceso de compra-venta (sin trámites complicados ni estafas).
- Profesionales (abogados, arquitectos, notarios) interesados en ofrecer sus servicios.

---

## Funcionalidades clave (Product Backlog Inicial)

| Prioridad | Historia de Usuario | Criterios de Aceptación |
|-----------|---------------------|--------------------------|
| Alta | Como **vendedor**, quiero publicar una propiedad con fotos y descripción para que posibles compradores la vean. | Se puede subir al menos 5 fotos, ingresar dirección, precio, descripción, y tipo de propiedad. |
| Alta | Como **comprador**, quiero filtrar propiedades por ubicación, precio y tipo. | El filtro funciona correctamente; se muestran propiedades relevantes. |
| Alta | Como **comprador**, quiero contactar al vendedor por un formulario de contacto o WhatsApp. | El contacto se envía exitosamente; el vendedor recibe una notificación. |
| Media | Como **usuario**, quiero crear una cuenta y tener un perfil para gestionar mis propiedades o contactos. | Registro y login funcional; se pueden ver propiedades propias. |
| Media | Como **usuario**, quiero calificar los servicios recibidos (abogados, notarios, etc.). | Al cerrar una compraventa, se puede dejar una calificación. |
| Alta | Como **usuario**, quiero solicitar servicios legales, notariales o de remodelación una vez haya un contacto iniciado. | Desde el panel, se puede elegir servicios complementarios. |
| Media | Como **admin**, quiero revisar y moderar los anuncios antes de publicarlos. | Los anuncios no se publican automáticamente; hay revisión. |
| Baja | Como **comprador**, quiero ver propiedades destacadas o con descuento. | Se muestra una sección de "Ofertas destacadas". |

---

## Requisitos No Funcionales

- Plataforma responsiva (adaptable a móvil y escritorio).
- Alta disponibilidad y escalabilidad.
- Seguridad en el manejo de datos personales y de contacto.
- Tiempos de carga rápidos (<2s por página).

---

## Casos de uso clave

1. Publicación de propiedad por dueño particular.
2. Búsqueda de propiedades por ubicación y precio.
3. Contacto inicial entre comprador y vendedor.
4. Ofrecimiento de servicios adicionales (abogados, notaría).
5. Cierre de compraventa con calificación de experiencia.

---

## Stakeholders

- **Product Owner**: Tú (o quien represente la visión del producto).
- **Scrum Master**: [Por definir]
- **Equipo de desarrollo**: Frontend, Backend, QA.
- **Usuarios finales**: Vendedores, Compradores, Profesionales de servicios.
- **Colaboradores externos**: Notarios, abogados, arquitectos, etc.

---

## Definición de Hecho (DoD)

Un ítem del backlog está "hecho" cuando:

- Funciona según lo esperado.
- Está testeado (unit tests + pruebas manuales).
- Está documentado (mínimamente).
- Está desplegado en staging o producción.
- Tiene criterios de aceptación cumplidos.

---

## Roadmap Tentativo (1er trimestre)

| Sprint | Objetivo |
|--------|----------|
| 1 | MVP con publicación y visualización de propiedades |
| 2 | Sistema de contacto y perfiles de usuario |
| 3 | Integración de servicios legales y notaría |
| 4 | Panel de administración y calificaciones |
| 5 | Mejora de filtros, UI responsive, optimización general |

---

## MVP (Producto Mínimo Viable)

- Registro y login de usuarios
- Publicación de propiedades
- Búsqueda y filtrado
- Contacto entre usuarios
- Solicitud básica de servicios adicionales

---

## Tecnologías sugeridas

- **Frontend**: React / Next.js
- **Backend**: Django + Django REST Framework
- **Base de datos**: PostgreSQL
- **Autenticación**: JWT o Auth0
- **Despliegue**: Docker, Railway o Vercel + AWS S3 para imágenes
- **Integraciones futuras**: API de WhatsApp, servicios de geolocalización