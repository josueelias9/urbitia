# urbania

```mermaid
flowchart TD;
    A[Usuarios interesados en inmuebles] --> B[Navegan en Urbania.pe];
    B --> C[Buscan propiedades en venta o alquiler];
    C --> D[Encuentran anuncios de propiedades];

    D --> E[Los anuncios fueron publicados por];
    E --> F1[Personas particulares];
    E --> F2[Agentes inmobiliarios];
    E --> F3[Constructoras];

    F1 --> G1[Publicación gratuita o paga - opcional];
    F2 --> G2[Planes pagos para más visibilidad];
    F3 --> G3[Contratos con Urbania para paquetes de anuncios];

    G1 & G2 & G3 --> H[Urbania cobra por servicios de publicación y visibilidad];
    H --> I[Servicios adicionales de monetización];

    I --> J1[Publicidad contextual - banners en la web];
    I --> J2[Venta de datos o insights de mercado a empresas];
    I --> J3[Publicaciones destacadas con costo adicional];
    I --> J4[Envío de leads cualificados a agentes y constructoras];

    J1 & J2 & J3 & J4 --> K[Ingresos para Urbania];

    K --> L[Ganancias por modelo B2C y B2B];

```



```mermaid
flowchart TD;
    subgraph CLIENTES;
        A1[Personas particulares];
        A2[Agentes inmobiliarios];
        A3[Constructoras];
        A4[Empresas de publicidad];
    end;

    subgraph INGRESOS;
        B1[Venta de anuncios];
        B2[Planes de visibilidad premium];
        B3[Publicidad display y programática];
        B4[Venta de datos e informes];
        B5[Servicios a constructoras - landing pages, campañas, leads];
    end;

    subgraph NEGOCIO_INTERNO;
        C1[Marketing y adquisición de usuarios];
        C2[Desarrollo y mantenimiento del portal];
        C3[Equipo comercial y atención al cliente];
        C4[Análisis de datos y BI];
        C5[Soporte a empresas y constructoras];
    end;

    subgraph COSTOS;
        D1[Infraestructura - servidores, hosting];
        D2[Salarios y RRHH];
        D3[Publicidad propia - Google, redes];
        D4[Costos de tecnología y licencias];
    end;

    A1 --> B1;
    A2 --> B1;
    A2 --> B2;
    A3 --> B1;
    A3 --> B2;
    A3 --> B5;
    A4 --> B3;

    B1 & B2 & B3 & B4 & B5 --> E[Ingresos Totales];

    E --> F[Finanzas Urbania];
    F --> NEGOCIO_INTERNO;
    F --> COSTOS;

    F --> G[Ganancia Neta];

```

# infocasas

Perfecto. A continuación te doy el flujo en **Mermaid** para **InfoCasas**, un portal inmobiliario que opera en varios países de América Latina. Su modelo es similar al de Urbania, pero tiene un enfoque más fuerte en los **servicios tecnológicos para constructoras** y la **automatización de leads**.

---

### 🏘️ **Flujo de cómo InfoCasas gana dinero**

```mermaid
flowchart TD
    subgraph USUARIOS
        A1[Personas interesadas en inmuebles]
        A2[Agencias inmobiliarias]
        A3[Constructoras]
        A4[Anunciantes externos]
    end

    subgraph PLATAFORMA
        B1[InfoCasas Web & App]
        B2[Buscador de propiedades]
        B3[Landing pages exclusivas]
        B4[Plataforma de leads y seguimiento]
    end

    A1 --> B1
    A1 --> B2

    A2 --> C1[Publican propiedades en InfoCasas]
    A3 --> C2[Contratan landing pages exclusivas y campañas]
    A3 --> C3[Acceden a plataforma de leads y analítica]

    C1 --> D1[Pago por publicación o plan mensual]
    C2 --> D2[Pago por paquete o servicio personalizado]
    C3 --> D3[Pago por acceso y gestión de leads]

    A4 --> D4[Contratan espacios de publicidad display]

    subgraph INGRESOS
        D1
        D2
        D3
        D4
    end

    INGRESOS --> E[Facturación total InfoCasas]
```

---

### 💼 **Modelo de negocio interno y flujo financiero de InfoCasas**

```mermaid
flowchart TD
    subgraph FUENTES_DE_INGRESO
        F1[Planes para agencias]
        F2[Servicios a constructoras]
        F3[Publicidad programática]
        F4[Generación y automatización de leads]
        F5[Consultoría en marketing inmobiliario]
    end

    subgraph COSTOS_OPERATIVOS
        G1[Desarrollo tecnológico y hosting]
        G2[Salarios: ventas, IT, marketing]
        G3[Publicidad en redes y buscadores]
        G4[Soporte a clientes y leads]
    end

    F1 & F2 & F3 & F4 & F5 --> H[Ingresos brutos]
    H --> I[Balance financiero]

    I --> COSTOS_OPERATIVOS
    I --> J[Ganancia neta reinvertida]
```

---

### 🔍 Puntos clave del modelo de InfoCasas:

* **Constructoras son su cliente principal**: compran servicios como micrositios, leads, y campañas.
* **Tiene un enfoque tech-oriented**: CRM inmobiliario, automatización, landing pages, analytics.
* **Diversifica con publicidad**: además del core inmobiliario.
* **Expansión regional**: opera en varios países, lo que implica soporte escalable y multilingüe.

¿Querés que arme también un flujo comparativo Urbania vs. InfoCasas en un solo diagrama?
