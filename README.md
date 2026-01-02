# Urbitia

App inmobiliaria

# official guides

## others

- [create flask service with testing](https://flask.palletsprojects.com/en/stable/tutorial/)
- [recommend way to manage branches and environments according to AWS](https://docs.aws.amazon.com/prescriptive-guidance/latest/choosing-git-branch-approach/visual-overview-of-the-git-hub-flow-strategy.html)

## Github

- [fastest way to create a Github Actions' workflow](https://docs.github.com/en/actions/writing-workflows/quickstart)
- [envirnoments accorging to github actions](https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment#about-environments)
- [manually trigger environments](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#workflow_dispatch)

```mermaid
sequenceDiagram
    participant U as Usuario
    participant F as Formulario Login
    participant Z as Validador Zod
    participant A as NextAuth
    participant DB as Base de Datos
    participant B as bcrypt
    participant M as Middleware
    participant P as Página Protegida

    Note over U,P: Flujo de Autenticación - Login
    U->>F: Envía email/contraseña
    F->>Z: Valida formato de datos
    Z-->>F: Datos válidos/inválidos
    alt Datos inválidos
        F-->>U: Muestra errores de validación
    else Datos válidos
        F->>A: Credenciales validadas
        A->>DB: Busca usuario por email
        DB-->>A: Retorna datos de usuario
        A->>B: Compara contraseña con hash
        B-->>A: Contraseña correcta/incorrecta
        alt Contraseña incorrecta
            A-->>F: Error de autenticación
            F-->>U: Mensaje de error
        else Contraseña correcta
            A->>A: Genera JWT con AUTH_SECRET
            A-->>F: Token de sesión
            F-->>U: Redirección a dashboard
        end
    end

    Note over U,P: Flujo de Acceso a Rutas Protegidas
    U->>P: Intenta acceder a página
    P->>M: Middleware verifica sesión
    M->>A: Valida JWT token
    A-->>M: Token válido/inválido
    alt Token inválido
        M-->>U: Redirecciona a /login
    else Token válido
        M->>P: Permite acceso
        P-->>U: Muestra contenido protegido
    end

    Note over U,P: Flujo de Registro (si existe)
    U->>F: Envía datos de registro
    F->>Z: Valida datos
    Z->>B: Hash contraseña + salt
    B->>DB: Guarda usuario con Prisma
    DB-->>U: Usuario creado exitosamente

```
