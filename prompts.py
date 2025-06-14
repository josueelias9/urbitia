
empresa = 'Remax'
prompt1 = f'''ok quiero que me des flujo que explica la forma en que {empresa} gana dinero. se lo mas explicito posible. el resultado tiene que ser en mermaid.'''



prompt =f'''
1. REQUERIMIENTO
Requiero un análisis detallado de {empresa}, una empresa que se dedica al sector inmobiliario. IMPORTANTE: buscar en internet información actualizada de {empresa}, incluyendo su página web oficial y otras fuentes confiables. El análisis debe incluir las siguientes secciones:

1.1. SECCION 1: ANALISIS DEL MODELO DE NEGOCIO
- detalla en palabras claras cual el modelo de negocio de {empresa}. Agrega una diagrama de flujo que explique el modelo de negocio.
- como se relaciona con sus clientes, proveedores y competidores?
- Esta perdiiendo dinero por un lado para ganar market share?
- detecta cuales son los actores necesarios para el funcionamiento de {empresa}. En base a ello has un diagrama de flujo de cada uno donde se detalle los pasos que sigue cada uno de ellos en la empresa.

1.2. SECCION 2: ANALISIS FINANCIERO
- incluye un diagrama de pie donde se detallen los ingresos y egresos de {empresa} anuales. Usa datos del año 2024 (de preferencia). 
- ingresos:
    - indica cuales son los tipos de ingresos que tiene {empresa} y como se relacionan entre si.
    - segun el campo anterior, detalla cuanto gana {empresa} en cada tipo de ingreso.
    - da un balance general de ingresos
- egresos:
    - indica cuales son los tipos de egresos que tiene {empresa} y como se relacionan entre si.
    - da un valance general de egresos
- da un reporte final donde se indique el balance general de {empresa} y si es rentable o no.
- los valores deben ser aproximados y no necesariamente exactos y deben ser en soles peruanos.

1.3. SECCION 3: ANALISIS DE MERCADO
- incluye competencias y como se discuten el market share
- incluye un diagrama de flujo donde se detalle el marketshare en base a sus principales competidores.

al final debes de darme todas las referencias y fuentes de donde sacaste la información. Estas deben estar listadas y con links a las páginas de donde sacaste la información.

2. SOBRE EL CONTENIDO
- el texto debe ser lo suficientemente largo como para que el lector entienda el tema.
- Ten la libertad de explciar lo que consideres necesario para que el lector entienda el tema.
- el texto debe ser claro y conciso ya que quien leera el documento no es una persona tecnica.
- el texto debe estar en español y en un tono formal.
- cada grafica mermaid debe tener su respectivo titulo y leyenda.

3. FORMATO
- para el caso de los diagramas mermaid, dentro de los corchetes "[]" no pongas parentesis "()" porque no es reconocido.
- el texto debe estar listo para copiar y pegar en un documento de markdown
- de ser necesario, incluir tablas, gráficos en mermaid, diagramas de flujo, diagramas de gantt, etc 
'''

print(prompt)


referncia ="""
- quiero formar una empresa.
- quiero no repetir errores de otras empresas

quiero seguir "guias" mundialmente reconocidas, usadas, actualizadas y sobre todo populares para poder diseñar, formar, mantener y hacer crecer mi empresa.

estas "guias" pueden ser libros, cursos, videos, etc. pero tienen que ser de personas reconocidas mundialmente y que tengan un nombre en el mercado.

el indicador principal es que la "guia" sea popular y usada por muchas personas en el mundo.

dame una lista de 10 "guias" que cumplan con lo que te acabo de decir.


"""



corregir = "Everything I say from this point forward must be corrected into formal and polite English or Spanish, depending on the language the text is written."

