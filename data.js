var DATA = {
  "traits": [
    {
      "name": "Vitalidad Aumentada",
      "cost": 1,
      "costText": "1 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura posee una constitución más resistente que la media de su ND.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: Aumenta la Resistencia máxima de la criatura en +10.\nPuede comprarse varias veces.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo de la criatura soporta más castigo del esperado. Puede deberse a masa corporal, órganos redundantes, grasa, placas internas, energía vital abundante o entrenamiento físico."
    },
    {
      "name": "Concepto Adicional",
      "cost": 2,
      "costText": "2 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura posee un campo de experiencia adicional además de su Tipo.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene un Concepto adicional.\nCuando ese Concepto aplica a una acción, la criatura puede usarlo según las reglas normales del sistema.\nRestricción:\nEl Concepto debe definirse al crear la criatura y debe tener sentido para su identidad.\nDESCRINiveles de ConjuroIÓN:\nEste rasgo representa aprendizaje, oficio, entrenamiento, memoria heredada, programación, instinto especializado o conocimiento adquirido."
    },
    {
      "name": "Especialización de Concepto",
      "cost": 2,
      "costText": "2 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura destaca especialmente en un Concepto que posee.\nCUÁNDO: Cuando usa el Concepto elegido en una tirada.\nQUÉ HACE: Obtiene +1 a esa tirada.\nRestricción:\nEl Concepto debe definirse al crear la criatura.\nEste rasgo no puede aplicarse al Concepto innato otorgado por su Tipo de criatura. Debe aplicarse a un Concepto obtenido por Herencia, rasgo, equipo, formación, diseño o función específica.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo posee ese campo de experiencia: lo usa con una precisión superior a la media."
    },
    {
      "name": "Naturaleza Adicional",
      "cost": 1,
      "costText": "1 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura puede actuar de forma coherente usando más de una Naturaleza.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene una Naturaleza adicional.\nPuede usar esa Naturaleza cuando describa acciones que encajen con ella, siguiendo las reglas normales del sistema.\nRestricción:\nLa Naturaleza debe tener sentido para la criatura.\nDESCRINiveles de ConjuroIÓN:\nEste rasgo representa una criatura con un rango conductual más amplio. Puede ser una bestia que alterna entre ferocidad y cautela, un NNiveles de Conjuro entrenado para mantener la calma, un espíritu que actúa con frialdad o un monstruo capaz de pasar del sigilo a la brutalidad."
    },
    {
      "name": "Naturaleza Dominante",
      "cost": 2,
      "costText": "2 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura encarna una Naturaleza con fuerza inusual.\nCUÁNDO: Una vez por ronda, cuando realiza una tirada usando la Naturaleza elegida.\nQUÉ HACE: Obtiene +1 al resultado de esa tirada.\nRestricción:\nLa Naturaleza debe definirse al crear la criatura.\nLímite:\nSolo puede comprarse una vez para una misma Naturaleza.\nDESCRINiveles de ConjuroIÓN:\nLa criatura actúa de esa forma con una intensidad marcada. No solo es feroz, cautelosa, metódica o siniestra: esa forma de actuar domina su cuerpo y decisiones."
    },
    {
      "name": "Sinergia de Concepto y Naturaleza",
      "cost": 3,
      "costText": "3 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura tiene una combinación especialmente fuerte entre lo que sabe hacer y la forma en que actúa.\nCUÁNDO: Una vez por ronda, cuando una tirada use al mismo tiempo un Concepto definido y una Naturaleza definida.\nQUÉ HACE: Obtiene +2 al resultado de esa tirada.\nRestricción:\nEl Concepto y la Naturaleza deben definirse al crear la criatura.\nNota:\nEste rasgo no se acumula con Especialización de Concepto ni Naturaleza Dominante en la misma tirada. Si más de uno aplicaría, usa solo el mayor bono.\nDESCRINiveles de ConjuroIÓN:\nLa criatura tiene una identidad muy enfocada. Caza Silenciosamente, combate Brutalmente, custodia Tenazmente, engaña Astutamente o ejecuta órdenes Metódicamente."
    },
    {
      "name": "Instinto Experto",
      "cost": 2,
      "costText": "2 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura aplica su Tipo como Concepto innato con especial claridad.\nCUÁNDO: Una vez por ronda, cuando realiza una tirada usando su Tipo como Concepto innato.\nQUÉ HACE: Obtiene +1 al resultado de esa tirada.\nRestricción:\nSolo aplica al Tipo de criatura, no a Conceptos adicionales.\nDESCRINiveles de ConjuroIÓN:\nLa criatura expresa su naturaleza con una precisión excepcional. Una Bestia rastrea mejor, un Elemental reconoce mejor su elemento, un Artificial ejecuta mejor su función y un Espíritu se mueve con más claridad dentro de su lógica invisible."
    },
    {
      "name": "Afinidad con Conjuros",
      "cost": 1,
      "costText": "1 PR por rango",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura posee entrenamiento, instinto, poder interno o estructura sobrenatural suficiente para desarrollar Conjuros propios.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene 1 Nivel de Conjuro adicional. Puede comprarse varias veces. Cada compra otorga +1 Nivel de Conjuro.\nNota: Los Niveles de Conjuro obtenidos por este rasgo se suman a los Niveles de Conjuro gratuitos que la criatura reciba por ND.\nDESCRIPCIÓN: Este rasgo representa criaturas con dones espirituales, runas, fórmulas arcanas, programación mágica o capacidades sobrenaturales que se expresan en Conjuros."
    },
    {
      "name": "Persistencia Instintiva",
      "cost": 2,
      "costText": "2 PR",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "La criatura insiste, repite patrones o arrastra ecos de memoria que le permiten corregir un fallo.\nCUÁNDO: Cuando falla una tirada relacionada directamente con su identidad o función principal.\nQUÉ HACE: Una vez por combate, puede repetir esa tirada y quedarse con el segundo resultado.\nRestricción:\nLa función debe definirse al crear la criatura.\nEjemplos: custodiar una puerta, perseguir una presa, proteger a su manada, ejecutar una orden, mantener un ritual, cazar en oscuridad.\nDESCRINiveles de ConjuroIÓN:\nLa criatura vuelve a intentar aquello para lo que fue hecha. No se rinde ante el primer fallo cuando actúa dentro de su función central.\n2. Rasgos de Tipo y Escala\nEstos rasgos modifican la relación de la criatura con su Tipo o su peso general dentro del sistema.\nNo indican si la criatura será usada como jefe, amenaza menor o criatura común. Eso lo decide el Director de Juego al usarla. Estos rasgos solo indican que la criatura tiene una relación especial con su Tipo o que está por encima o por debajo del ejemplar estándar de su ND."
    },
    {
      "name": "Habilidad de Tipo Adicional",
      "cost": 2,
      "costText": "2 PR",
      "category": "2. Rasgos de Tipo y Escala",
      "text": "La criatura desarrolla una segunda capacidad propia de su Tipo.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene una Habilidad de Tipo adicional de su mismo Tipo.\nLa habilidad elegida debe pertenecer al Tipo de la criatura.\nEjemplos:\nUna Bestia puede adquirir otra habilidad de Bestia.\nUn Elemental puede adquirir otra habilidad de Elemental.\nUn NNiveles de Conjuro puede adquirir otra habilidad de NNiveles de Conjuro.\nUn Artificial puede adquirir otra habilidad de Artificial.\nLímite:\nEste rasgo puede comprarse hasta dos veces.\nUna criatura no puede tener más de tres Habilidades de Tipo en total: la gratuita inicial y hasta dos adicionales compradas con este rasgo.\nRestricción:\nLa criatura no puede elegir Habilidades de Tipo de otro Tipo mediante este rasgo.\nDESCRINiveles de ConjuroIÓN:\nAlgunas criaturas expresan su naturaleza con más fuerza que otras. Un depredador puede ser instintivo y también actuar en manada. Un constructo puede tener mente mecánica y además un protocolo de combate. Un NNiveles de Conjuro puede tener vocación y también entrenamiento de veterano."
    },
    {
      "name": "Hibridación de Tipo",
      "cost": 3,
      "costText": "3 PR",
      "category": "2. Rasgos de Tipo y Escala",
      "text": "La criatura posee una naturaleza híbrida, contaminada, alterada o construida a partir de más de una lógica biológica o sobrenatural.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene una Habilidad de Tipo perteneciente a un Tipo distinto al suyo.\nLa elección debe justificarse en la identidad de la criatura.\nLímite:\nEste rasgo solo puede comprarse una vez.\nRestricción:\nLa criatura no cambia su Tipo principal. El nuevo Tipo solo sirve para la Habilidad de Tipo adquirida.\nEjemplos:\nUna Bestia corrompida puede adquirir una habilidad de Corrupto.\nUn Artificial poseído puede adquirir una habilidad de Espíritu.\nUn Monstruo de origen divino puede adquirir una habilidad de Exaltado.\nUn NNiveles de Conjuro transformado por energía elemental puede adquirir una habilidad de Elemental.\nDESCRINiveles de ConjuroIÓN:\nEste rasgo sirve para criaturas mixtas, contaminadas, bendecidas, poseídas, modificadas o nacidas de cruces raros entre naturalezas incompatibles."
    },
    {
      "name": "Criatura Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "2. Rasgos de Tipo y Escala",
      "text": "La criatura es una versión excepcional de su especie: más fuerte, más vieja, mejor adaptada, bendecida, mutada, entrenada o simplemente más peligrosa que un ejemplar común.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene todos estos beneficios:\n+15 a su Resistencia máxima.\n+1 a Defensa.\n+1 Nivel de Conjuro.\nVentaja en Salvaciones contra el estado Asustado.\nRestricción: La criatura debe tener al menos ND 1. No puede tomarse si posee la desventaja Criatura Menor."
    },
    {
      "name": "Alcance Mejorado",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura posee extremidades, cuello, cola, lengua, tentáculos, ramas, látigos corporales u otros apéndices capaces de golpear más lejos de lo normal.\nCUÁNDO: Siempre activa.\nQUÉ HACE: El alcance de sus ataques cuerpo a cuerpo naturales sube a Cerca (equivalente al de una criatura Grande).\nEste rasgo solo aplica a ataques realizados con partes del propio cuerpo."
    },
    {
      "name": "Alcance Mejorado Superior",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede golpear a una distancia muy superior a la de una criatura común de su tamaño.\nCUÁNDO: Siempre activa.\nQUÉ HACE: El alcance de sus ataques cuerpo a cuerpo naturales sube a Lejos (equivalente al de una criatura Enorme).\nEste rasgo reemplaza Alcance Mejorado, no se suma con él."
    },
    {
      "name": "Arrollar",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura usa su peso, impulso o volumen para abrirse paso entre enemigos más pequeños.\nCUÁNDO: Cuando se mueve a través del espacio ocupado por una criatura de tamaño inferior.\nQUÉ HACE: La criatura puede atravesar el espacio de criaturas de menor tamaño. Cada criatura atravesada debe superar una Salvación de Destreza contra ND 10 o queda Derribada.\nUna criatura solo puede ser afectada por este rasgo una vez por turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nRestricción:\nLa criatura debe ser al menos de tamaño Grande o tener una justificación anatómica clara, como cuerpo rodante, masa gelatinosa, enjambre compacto, carga sobrenatural o impulso extraordinario.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no esquiva. Pasa por encima, empuja, barre piernas o aplasta con su propio cuerpo."
    },
    {
      "name": "Ataque Adicional",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede atacar más de una vez en su turno.\nCUÁNDO: En su turno, cuando realiza una acción de ataque.\nQUÉ HACE: Puede realizar un ataque adicional.\nEl ataque adicional no suma Atributo al daño.\nLímite:\nEste rasgo puede comprarse varias veces. Cada compra permite realizar un ataque adicional más durante el turno.\nUna criatura no puede realizar más ataques adicionales mediante este rasgo que el número de veces que lo haya comprado.\nNota:\nSi la criatura obtiene ataques adicionales por Conjuros, Comportamiento u otros rasgos, el Diseñador debe revisar que no se generen cadenas de ataques sin límite.\nDESCRINiveles de ConjuroIÓN:\nLa criatura posee más miembros, más bocas, más entrenamiento o más capacidad de coordinación que un atacante común."
    },
    {
      "name": "Ataque Poderoso",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede golpear con más fuerza a cambio de perder precisión.\nCUÁNDO: Antes de realizar un ataque cuerpo a cuerpo.\nQUÉ HACE: La criatura sufre −2 a la tirada de ataque. Si el ataque impacta, inflige +3 de daño.\nDebe declararse antes de tirar.\nDESCRINiveles de ConjuroIÓN:\nLa criatura carga todo su peso en el golpe. No busca precisión: busca romper."
    },
    {
      "name": "Ataque Vorpal",
      "cost": 4,
      "costText": "4 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura causa heridas catastróficas cuando conecta un golpe crítico limpio.\nCUÁNDO: Cuando obtiene un golpe crítico con un ataque natural y la suma supera la Defensa del objetivo.\nQUÉ HACE: El ataque hace daño máximo según las reglas normales de crítico. Además, añade +6 de daño adicional.\nSi el crítico no supera la Defensa del objetivo, no se añade este daño adicional. Se aplica el crítico normal.\nDESCRINiveles de ConjuroIÓN:\nCuando el golpe entra en el punto exacto, la herida no es normal. Algo se parte, se abre o queda inútil."
    },
    {
      "name": "Carga Imparable",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura convierte el movimiento en fuerza de impacto.\nCUÁNDO: Cuando se movió durante su turno antes de realizar un ataque cuerpo a cuerpo.\nQUÉ HACE: Si el ataque impacta, inflige +1d6 de daño adicional.\nSolo puede aplicarse una vez por turno."
    },
    {
      "name": "Combate a Ciegas",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede combatir sin depender de la vista.\nCUÁNDO: Cuando ataca a una criatura que no puede ver, pero que puede detectar mediante otro sentido.\nQUÉ HACE: No sufre penalizaciones a sus ataques por no poder ver a su objetivo.\nRestricción:\nDebe definirse el sentido alternativo que usa: ecolocalización, vibración, calor, olor, presión del aire, percepción espiritual u otro mecanismo equivalente.\nEste rasgo no permite atacar objetivos que la criatura no pueda detectar de ninguna forma.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no necesita ojos para encontrar carne, calor, alma, movimiento o respiración."
    },
    {
      "name": "Corrosión",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura posee ácido, saliva corrosiva, enzimas, óxido vivo, fuego digestivo, secreciones o energía capaz de degradar protecciones físicas.\nCUÁNDO: Cuando impacta con un ataque Corrosivo.\nQUÉ HACE: Además del daño normal, el objetivo reduce en 1 el bono de Armadura otorgado por la armadura portada.\nEste rasgo no reduce escudos, Defensa natural ni bonificadores que no provengan de armadura portada.\nLa reducción dura hasta que la armadura sea reparada.\nSi el bono de Armadura de la armadura portada llega a 0 por efecto de este rasgo, la armadura se rompe. Una armadura rota de esta forma queda inutilizable y no puede repararse.\nDESCRINiveles de ConjuroIÓN:\nLa mordida no solo abre carne. Deja metal opaco, cuero comido, placas agrietadas y correas deshechas."
    },
    {
      "name": "Crítico Mejorado",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura aprovecha mejor las aberturas cuando obtiene un golpe crítico.\nCUÁNDO: Cuando obtiene un golpe crítico con un ataque y la suma supera la Defensa del objetivo.\nQUÉ HACE: El ataque hace daño máximo según las reglas normales de crítico. Además, añade +2 de daño adicional.\nSi el crítico no supera la Defensa del objetivo, no se añade este daño adicional. Se aplica el crítico normal.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo acierta. Sabe abrir la herida donde duele."
    },
    {
      "name": "Drenaje Menor",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura recupera parte de su energía al dañar a otros.\nCUÁNDO: Cuando inflige daño directo con uno de sus ataques.\nQUÉ HACE: Recupera Resistencia igual a la mitad del daño infligido, redondeando hacia abajo.\nSolo puede beneficiarse de este rasgo una vez por turno.\nLa recuperación no puede superar su Resistencia máxima.\nEl daño persistente, como Sangrado, Veneno o Quemadura de Contacto, no activa este rasgo salvo que otro rasgo indique lo contrario.\nDESCRINiveles de ConjuroIÓN:\nLa criatura bebe sangre, calor, fuerza vital, memoria, humedad, energía espiritual o cualquier otra sustancia que su cuerpo pueda convertir en recuperación inmediata."
    },
    {
      "name": "Drenaje",
      "cost": 4,
      "costText": "4 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura convierte el daño causado en recuperación inmediata.\nCUÁNDO: Cuando inflige daño directo con uno de sus ataques.\nQUÉ HACE: Recupera Resistencia igual al daño infligido.\nSolo puede beneficiarse de este rasgo una vez por turno.\nLa recuperación no puede superar su Resistencia máxima.\nEl daño persistente, como Sangrado, Veneno o Quemadura de Contacto, no activa este rasgo salvo que otro rasgo indique lo contrario.\nPrerequisito:\nDrenaje Menor.\nDESCRINiveles de ConjuroIÓN:\nCada herida alimenta a la criatura. La sangre, el alma, la sombra o el calor robado cierran sus propias grietas."
    },
    {
      "name": "Engarro",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura posee garras, pinzas, mandíbulas, tentáculos, lengua, cola u otras extremidades diseñadas para sujetar presas.\nCUÁNDO: Cuando impacta con un ataque cuerpo a cuerpo.\nQUÉ HACE: Después de impactar, puede intentar una maniobra de Apresar como Acción Rápida.\nDebe tener una extremidad, mandíbula o apéndice capaz de mantener la presa.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo hiere. Se queda pegada a su víctima, hunde las garras, cierra las mandíbulas o enrolla sus miembros para impedir la huida."
    },
    {
      "name": "Estado Añadido",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "Los ataques de la criatura pueden imponer un estado alterado físico que no sea Envenenado.\nCUÁNDO: Cuando impacta con un ataque definido al crear la criatura.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o sufrir el estado alterado físico elegido.\nEl estado debe provenir de un mecanismo corporal o físico claro: parálisis muscular, dolor intenso, rigidez, espasmos, agotamiento, daño interno, presión corporal, frío físico, descarga nerviosa, secreción entumecedora u otro efecto similar.\nDuración:\nEl estado dura hasta el final del próximo turno del objetivo, salvo que el estado elegido tenga una duración menor o una condición de cierre más específica.\nRestricción:\nEl estado y el mecanismo deben definirse al crear la criatura.\nEste rasgo no puede usarse para aplicar Envenenado ni estados mentales como miedo, confusión, compulsión, fascinación o control mental. Esos efectos deben cubrirse con rasgos específicos.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDESCRINiveles de ConjuroIÓN:\nEl golpe no solo hiere. El cuerpo se traba, se entumece, se dobla o pierde respuesta."
    },
    {
      "name": "Influencia Mental",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "Los ataques, mirada, voz, aura, presencia, canto, feromonas, contacto espiritual o poder psíquico de la criatura pueden imponer un estado alterado mental.\nCUÁNDO: Cuando impacta con un ataque definido al crear la criatura o cuando una criatura entra en contacto con el mecanismo mental definido.\nQUÉ HACE: El objetivo debe superar una Salvación de Aura contra ND 10 o sufrir el estado alterado mental elegido.\nEl estado debe provenir de un mecanismo mental, emocional, espiritual o perceptivo claro: miedo, encanto, fascinación, confusión, compulsión, sugestión, presión espiritual, canto hipnótico, mirada paralizante, aura inquietante, perfume embriagador u otro efecto similar.\nDuración:\nEl estado dura hasta el final del próximo turno del objetivo, salvo que el estado elegido tenga una duración menor o una condición de cierre más específica.\nRestricción:\nEl estado y el mecanismo deben definirse al crear la criatura.\nEste rasgo no puede usarse para aplicar estados físicos como Derribado, Inmovilizado, Aturdido físico, Envenenado, Quemado, Fatiga o efectos causados por daño corporal directo. Esos efectos deben cubrirse con rasgos específicos.\nLímite:\nUna misma criatura solo puede sufrir este rasgo una vez por ronda por parte del mismo atacante.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDESCRINiveles de ConjuroIÓN:\nEl ataque no solo toca el cuerpo. Entra por miedo, deseo, voz, memoria o presión espiritual."
    },
    {
      "name": "Francotirador",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura está adaptada o entrenada para atacar a larga distancia.\nCUÁNDO: Cuando ataca a larga distancia con un arma de rango, proyectil natural, descarga, escupitajo, espina, aguijón lanzado u otro ataque a distancia definido.\nQUÉ HACE: No sufre penalizadores por distancia, viento, lluvia, clima adverso, humo ligero u otras condiciones ambientales menores que dificulten ataques a distancia.\nEste rasgo no permite ignorar cobertura sólida, oscuridad total, invisibilidad, barreras físicas ni la imposibilidad de detectar al objetivo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura corrige el tiro por instinto, entrenamiento o anatomía. La distancia y el clima le importan menos que a otros."
    },
    {
      "name": "Furia",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura se vuelve más peligrosa cuando está herida.\nCUÁNDO: Mientras tenga la mitad o menos de su Resistencia máxima.\nQUÉ HACE: Sus ataques infligen +1d6 de daño adicional.\nEste daño adicional solo puede aplicarse una vez por turno.\nDESCRINiveles de ConjuroIÓN:\nCuanto más cerca está de caer, más peligroso se vuelve su cuerpo. Ya no pelea para vencer. Pelea para no morir."
    },
    {
      "name": "Golpe Debilitante",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "Los ataques de la criatura entorpecen al objetivo mediante toxina, descarga nerviosa, frío, presión espiritual, dolor intenso o daño muscular.\nCUÁNDO: Cuando impacta con un ataque.\nQUÉ HACE: El objetivo sufre −1 a todas sus tiradas hasta el final de su próximo turno.\nLímite:\nUna misma criatura solo puede sufrir este penalizador una vez por ronda por parte del mismo atacante.\nDESCRINiveles de ConjuroIÓN:\nEl golpe deja algo atrás: temblor, espasmo, dolor o una presión que vuelve torpes las siguientes acciones."
    },
    {
      "name": "Inducir Fatiga",
      "cost": 3,
      "costText": "3 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede agotar físicamente a sus víctimas.\nCUÁNDO: Cuando inflige daño con un ataque definido al crear la criatura.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o gana 1 nivel de Fatiga.\nLímite:\nUna misma criatura solo puede ganar Fatiga por este rasgo una vez por combate.\nRestricción:\nEl mecanismo debe definirse al crear la criatura: veneno, absorción vital, frío extremo, enfermedad, presión espiritual, pérdida de sangre u otro efecto equivalente.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDESCRINiveles de ConjuroIÓN:\nLa herida pesa más de lo normal. El cuerpo pierde aire, calor, sangre o fuerza."
    },
    {
      "name": "Ráfaga",
      "cost": 3,
      "costText": "3 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura puede encadenar un ataque cuando derriba a una presa.\nCUÁNDO: Cuando reduce a una criatura enemiga a 0 de Resistencia con un ataque.\nQUÉ HACE: Puede realizar un ataque adicional como Acción Rápida contra otra criatura a su alcance.\nEl ataque adicional no suma Atributo al daño.\nLímite:\nEste rasgo solo puede activarse una vez por turno.\nDESCRINiveles de ConjuroIÓN:\nLa caída de una presa no detiene a la criatura. La anima. Salta sobre el siguiente cuerpo antes de que la sangre del primero toque el suelo."
    },
    {
      "name": "Sangrado",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "Los ataques Cortantes o Penetrantes de la criatura abren heridas difíciles de cerrar.\nCUÁNDO: Cuando impacta con un ataque Cortante o Penetrante.\nQUÉ HACE: El objetivo sufre 1d6 de daño al inicio de su próximo turno.\nLímite:\nUna misma criatura solo puede sufrir este daño una vez por ronda por parte del mismo atacante.\nEste daño no se acumula consigo mismo por impactos múltiples del mismo atacante durante la misma ronda.\nDESCRINiveles de ConjuroIÓN:\nSus colmillos, garras o espinas no hacen cortes limpios. Rasgan carne, rompen vasos y dejan heridas que siguen perdiendo sangre después del impacto."
    },
    {
      "name": "Veneno de Contacto",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura produce veneno mediante colmillos, aguijón, piel, saliva, secreciones, esporas, sangre contaminada u otro mecanismo definido.\nCUÁNDO: Cuando impacta con un ataque capaz de transmitir el veneno.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o queda Envenenado.\nMientras esté Envenenado por este rasgo, sufre 1d6 de daño Corrosivo al inicio de su turno.\nAl final de cada uno de sus turnos puede repetir la Salvación. Si tiene éxito, el efecto termina.\nRestricción:\nEl método de transmisión debe definirse al crear la criatura.\nLímite:\nUna criatura puede sufrir más de una instancia de Veneno de Contacto a la vez solo si provienen de fuentes diferentes.\nDos impactos de la misma criatura, veneno o fuente no crean instancias separadas del mismo veneno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDESCRINiveles de ConjuroIÓN:\nEl veneno entra por mordida, aguijón, piel abierta o esporas. No siempre mata rápido, pero obliga al cuerpo a pelear contra sí mismo."
    },
    {
      "name": "Quemadura de Contacto",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura transmite fuego, hielo extremo, escarcha abrasiva, calor interno, contacto ígneo, frío sobrenatural o energía térmica dañina mediante su cuerpo o ataques.\nCUÁNDO: Cuando impacta con un ataque capaz de transmitir la quemadura.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o queda Quemado.\nMientras esté Quemado por este rasgo, sufre 1d6 de daño al inicio de su turno. El tipo de daño debe definirse al crear la criatura: Fuego o Hielo.\nAl final de cada uno de sus turnos puede repetir la Salvación. Si tiene éxito, el efecto termina.\nRestricción:\nEl método de transmisión debe definirse al crear la criatura.\nLímite:\nUna misma criatura puede sufrir más de una instancia de Quemadura de Contacto a la vez solo si provienen de fuentes diferentes.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDESCRINiveles de ConjuroIÓN:\nEl contacto deja una marca que sigue quemando o congelando después del golpe."
    },
    {
      "name": "Presa Marcada",
      "cost": 1,
      "costText": "1 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura fija su atención en una presa concreta y se vuelve más peligrosa contra ella.\nCUÁNDO: Al inicio de su turno, como Acción Rápida.\nQUÉ HACE: Elige una criatura visible o detectable dentro de Lejos. Hasta el inicio del próximo turno de la criatura, obtiene +1 a sus tiradas de ataque contra ese objetivo.\nLímite: Solo una a la vez."
    },
    {
      "name": "Daño Energético Añadido",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "Los ataques de la criatura están cargados con energía elemental, divina, corrupta, espiritual o sobrenatural.\nCUÁNDO: Cuando impacta con un ataque definido al crear la criatura.\nQUÉ HACE: El ataque inflige +1d6 de daño adicional de un tipo elegido al crear la criatura.\nEjemplos: Fuego, Hielo, Corrosivo, Radiante, Sombra, Mental u otro tipo permitido por el sistema.\nLímite:\nEste daño adicional solo puede aplicarse una vez por turno.\nRestricción:\nEl tipo de daño y el mecanismo deben definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nEl ataque lleva algo más que fuerza física: fuego, hielo, luz, sombra, corrupción, pensamiento o poder espiritual."
    },
    {
      "name": "Hambre Insaciable",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura recupera fuerzas al abatir a una presa.\nCUÁNDO: Cuando reduce a una criatura enemiga a 0 de Resistencia con un ataque cuerpo a cuerpo.\nQUÉ HACE: Recupera 1d6 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nLímite:\nSolo puede activarse una vez por turno.\nDESCRINiveles de ConjuroIÓN:\nCuando una presa cae, la criatura se alimenta del momento: sangre, carne, miedo, calor o pura satisfacción depredadora."
    },
    {
      "name": "Explosión de Impacto",
      "cost": 2,
      "costText": "2 PR",
      "category": "3. Rasgos Ofensivos",
      "text": "La criatura libera una descarga secundaria cuando conecta un golpe.\nCUÁNDO: Una vez por turno, cuando impacta con un ataque definido al crear la criatura.\nQUÉ HACE: Todas las criaturas adyacentes al objetivo principal sufren 1d6 de daño del tipo elegido al crear la criatura.\nRestricción:\nEl tipo de daño y el mecanismo deben definirse al crear la criatura.\nNota:\nEste rasgo no afecta al objetivo principal dos veces. El objetivo principal recibe solo el daño normal del ataque.\nDESCRINiveles de ConjuroIÓN:\nEl golpe estalla, salpica, descarga o libera una onda que castiga a quienes estén demasiado cerca.\n4. Rasgos Defensivos\nEstos rasgos aumentan la supervivencia de una criatura, reducen daño, dificultan que sea controlada, le permiten recuperarse o castigan a quienes la atacan.\nUn rasgo defensivo debe explicar por qué la criatura resiste: piel gruesa, placas óseas, núcleo vital redundante, instinto de evasión, magia protectora, armadura natural, regeneración, fisiología extraña o voluntad sobrenatural."
    },
    {
      "name": "Absorción de Daño",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura no solo ignora un tipo de daño: lo convierte parcialmente en recuperación.\nCUÁNDO: Cuando recibe daño de un tipo elegido al crear la criatura.\nQUÉ HACE: La criatura es inmune al tipo de daño elegido. Además, recupera Resistencia igual a la mitad del daño que habría recibido, redondeando hacia abajo.\nLa recuperación no puede superar su Resistencia máxima.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se alimenta de aquello que debería dañarla. Puede absorber fuego, electricidad, corrupción, hielo, veneno, sombra u otra energía compatible con su naturaleza."
    },
    {
      "name": "Armadura Natural",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee placas, escamas, caparazón, hueso externo, piel endurecida, corteza, metal orgánico o una protección equivalente.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Aumenta su Defensa en +1.\nPuede comprarse varias veces.\nLímite:\nLa Defensa final de una criatura no puede superar 16.\nDESCRINiveles de ConjuroIÓN:\nLa protección forma parte del cuerpo de la criatura. No puede quitarse como una armadura equipada común."
    },
    {
      "name": "Corazón Doble",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee un segundo corazón, núcleo redundante, alma fragmentada, reserva vital o sistema interno capaz de mantenerla en pie cuando debería caer.\nCUÁNDO: La primera vez en un combate que la criatura llegaría a 0 de Resistencia.\nQUÉ HACE: En lugar de caer a 0, queda con Resistencia igual a la mitad de su Resistencia máxima, redondeando hacia abajo.\nLímite:\nUna vez por combate.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no cae cuando se rompe el primer centro vital. Otro órgano, núcleo o impulso toma el control."
    },
    {
      "name": "Desplazamiento Cuerpo a Cuerpo",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura distorsiona su posición, se mueve con reflejos extraños o vuelve difícil alcanzarla en combate cercano.\nCUÁNDO: Siempre activa mientras la criatura esté consciente y pueda moverse.\nQUÉ HACE: Los ataques cuerpo a cuerpo contra la criatura tienen Desventaja.\nSi un ataque cuerpo a cuerpo impacta a la criatura, este rasgo se desactiva hasta el inicio del próximo turno de la criatura.\nCierre:\nEl rasgo no funciona mientras la criatura esté Inmovilizada, Aturdida, Inconsciente o no pueda moverse por una condición equivalente.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo no está donde parecía estar. Un paso corto, una vibración, una imagen falsa o un reflejo extraño desvían los golpes cercanos."
    },
    {
      "name": "Desplazamiento a Distancia",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura se mueve de forma errática, borra su silueta, vibra, genera imágenes falsas o altera la percepción de quienes intentan atacarla desde lejos.\nCUÁNDO: Siempre activa mientras la criatura esté consciente y pueda moverse.\nQUÉ HACE: Los ataques a distancia contra la criatura tienen Desventaja.\nSi un ataque a distancia impacta a la criatura, este rasgo se desactiva hasta el inicio del próximo turno de la criatura.\nCierre:\nEl rasgo no funciona mientras la criatura esté Inmovilizada, Aturdida, Inconsciente o no pueda moverse por una condición equivalente.\nDESCRINiveles de ConjuroIÓN:\nLas flechas, disparos, espinas y proyectiles siguen una silueta que ya no coincide del todo con su cuerpo."
    },
    {
      "name": "Desplazamiento contra Conjuros",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura distorsiona su posición frente a Conjuros, poderes, descargas, sellos, maldiciones o efectos dirigidos.\nCUÁNDO: Cuando un Conjuro o efecto dirigido exige una tirada de ataque contra la criatura.\nQUÉ HACE: Esa tirada de ataque tiene Desventaja. Si un Conjuro o efecto dirigido impacta a la criatura, este rasgo se desactiva hasta el inicio del próximo turno de la criatura.\nCierre: El rasgo no funciona mientras la criatura esté Inmovilizada, Aturdida, Inconsciente o no pueda moverse por una condición equivalente.\nNota: Este rasgo no afecta Conjuros de área que no requieran tirada de ataque contra la criatura."
    },
    {
      "name": "Duro de Matar",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura sigue actuando unos segundos después de recibir una herida que debería derribarla.\nCUÁNDO: Cuando llega a 0 de Resistencia.\nQUÉ HACE: No cae inmediatamente. Puede actuar normalmente en su próximo turno. Al final de ese turno cae a 0 de Resistencia y queda fuera de combate.\nLímite:\nUna vez por combate.\nCierre:\nSi recupera Resistencia antes del final de ese turno, no cae.\nDESCRINiveles de ConjuroIÓN:\nLa criatura ya está vencida, pero su cuerpo tarda un turno más en aceptarlo."
    },
    {
      "name": "Escurridizo",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura se mueve de forma difícil de interceptar.\nCUÁNDO: Cuando se mueve fuera del alcance cuerpo a cuerpo de un enemigo.\nQUÉ HACE: No provoca Ataques de Oportunidad por ese movimiento.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se desliza, se agacha, rueda, se retuerce o se aparta justo antes de que el golpe pueda alcanzarla."
    },
    {
      "name": "Fortaleza Interior",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee un cuerpo resistente a toxinas, infecciones y deterioro biológico.\nCUÁNDO: Cuando realiza Salvaciones contra venenos o enfermedades.\nQUÉ HACE: Tiene Ventaja en esas Salvaciones.\nDESCRINiveles de ConjuroIÓN:\nSu sangre, órganos, metabolismo, energía interna o composición corporal resisten aquello que corrompe cuerpos comunes."
    },
    {
      "name": "Indomable",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee voluntad férrea, mente simple, fanatismo, programación rígida, instinto absoluto o una conciencia difícil de doblegar.\nCUÁNDO: Cuando realiza Salvaciones contra efectos que intenten causarle Asustado, Controlado, Encantado, Confundido, Compulsión o efectos mentales equivalentes.\nQUÉ HACE: Tiene Ventaja en esas Salvaciones.\nDESCRINiveles de ConjuroIÓN:\nNo es fácil quebrar su voluntad. Ya sea por disciplina, vacío mental, instinto o programación, la criatura se resiste a obedecer impulsos ajenos."
    },
    {
      "name": "Inmune",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura no recibe daño de un tipo concreto.\nCUÁNDO: Cuando recibiría daño del tipo elegido.\nQUÉ HACE: El daño de ese tipo se reduce a 0.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nEse daño no encuentra forma de afectarla. Puede ser por cuerpo elemental, fisiología imposible, bendición, corrupción, construcción artificial o naturaleza espiritual."
    },
    {
      "name": "Inmunidad a Estado",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura no puede sufrir un estado alterado concreto.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Elige un estado alterado al crear la criatura. La criatura es inmune a ese estado.\nRestricción:\nEl estado debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo o mente no responde a ese tipo de alteración. No se paraliza, no se asusta, no se envenena, no se duerme o no se deja controlar por ese mecanismo."
    },
    {
      "name": "Muerte Explosiva",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "El cuerpo de la criatura libera energía, gas, fuego, espinas, ácido, electricidad o fragmentos al caer.\nCUÁNDO: Cuando la criatura es reducida a 0 de Resistencia.\nQUÉ HACE: Todas las criaturas dentro de Contacto sufren 1d6 de daño del tipo elegido."
    },
    {
      "name": "Muerte Explosiva Mayor",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura detona violentamente al caer.\nCUÁNDO: Cuando la criatura es reducida a 0 de Resistencia.\nQUÉ HACE: Todas las criaturas dentro de Cerca sufren 2d6 de daño del tipo elegido."
    },
    {
      "name": "Muerte Explosiva Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura libera una detonación masiva al morir.\nCUÁNDO: Cuando la criatura es reducida a 0 de Resistencia.\nQUÉ HACE: Todas las criaturas dentro de Cerca sufren 4d6 de daño del tipo elegido."
    },
    {
      "name": "Piel de Espinas",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura está cubierta de púas, espinas, placas cortantes, escamas quebradizas, huesos expuestos u otra defensa física dañina.\nCUÁNDO: Cuando una criatura la impacta con un ataque cuerpo a cuerpo.\nQUÉ HACE: El atacante sufre 1d6 de daño físico.\nEl tipo de daño debe elegirse al crear la criatura: Contundente, Cortante o Penetrante.\nLímite:\nUna misma criatura solo puede sufrir este daño una vez por ronda.\nDESCRINiveles de ConjuroIÓN:\nGolpearla también duele. Su cuerpo castiga el contacto."
    },
    {
      "name": "Piel Elemental",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura está cubierta de fuego, hielo, energía corrupta, electricidad, ácido, sombra, luz hiriente u otra sustancia dañina no física.\nCUÁNDO: Cuando una criatura la impacta con un ataque cuerpo a cuerpo.\nQUÉ HACE: El atacante sufre 1d6 de daño no físico.\nEl tipo de daño debe elegirse al crear la criatura: Fuego, Hielo, Corrosivo, Radiante, Mental, Sombra u otro tipo de daño permitido por el sistema.\nLímite:\nUna misma criatura solo puede sufrir este daño una vez por ronda.\nDESCRINiveles de ConjuroIÓN:\nNo basta con herirla. Quien toca su cuerpo también recibe aquello que la recubre."
    },
    {
      "name": "Piel Gruesa",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura ignora parte del daño recibido.\nCUÁNDO: Cuando recibe daño.\nQUÉ HACE: Ignora 1 punto de daño de todas las fuentes.\nPuede comprarse varias veces.\nDESCRINiveles de ConjuroIÓN:\nLa piel, carne, placas o estructura de la criatura absorben golpes menores antes de que lleguen a algo importante."
    },
    {
      "name": "Piel Resbaladiza",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura está cubierta de mucosa, aceite, escamas lisas, barro, grasa, piel flexible o una sustancia que dificulta sujetarla.\nCUÁNDO: Cuando intenta evitar o escapar de una presa.\nQUÉ HACE: Tiene Ventaja en tiradas o Salvaciones para evitar o escapar de Apresar.\nDESCRINiveles de ConjuroIÓN:\nAgarrarla es difícil. La presa se escurre entre dedos, garras, cadenas o tentáculos."
    },
    {
      "name": "Recuperación Menor",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura puede recuperar fuerzas si dedica su acción a ello.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Recupera 1d6 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se recompone, respira, se cierra, se ordena o activa una reserva interna."
    },
    {
      "name": "Recuperación",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura puede recuperarse de forma más eficaz.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Recupera 2d6 + 1 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nDESCRINiveles de ConjuroIÓN:\nLa criatura dedica un momento completo a restaurar su cuerpo, núcleo o energía vital."
    },
    {
      "name": "Recuperación Mayor",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee una reserva profunda de recuperación.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Recupera 3d6 + 1 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo de la criatura vuelve a cerrarse con una fuerza difícil de ignorar."
    },
    {
      "name": "Regeneración Menor",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura recupera daño de forma pasiva.\nCUÁNDO: Al inicio de su turno.\nQUÉ HACE: Recupera 3 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nRestricción recomendada:\nEl Diseñador puede definir un tipo de daño o condición que detenga esta regeneración hasta el inicio del próximo turno de la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se repara sin detenerse. Carne, madera, metal vivo, sombra o energía vuelven a su sitio."
    },
    {
      "name": "Regeneración Mayor",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura se regenera con rapidez.\nCUÁNDO: Al inicio de su turno.\nQUÉ HACE: Recupera 5 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nRestricción recomendada:\nEl Diseñador puede definir un tipo de daño o condición que detenga esta regeneración hasta el inicio del próximo turno de la criatura.\nDESCRINiveles de ConjuroIÓN:\nLas heridas no permanecen abiertas mucho tiempo. El cuerpo insiste en volver a su forma."
    },
    {
      "name": "Resistencia a Críticos",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee cuerpo amorfo, protección interna, anatomía redundante, órganos dispersos o una estructura que vuelve inútiles los golpes precisos.\nCUÁNDO: Cuando recibe un golpe crítico.\nQUÉ HACE: El golpe crítico se resuelve como un golpe normal.\nNo hace daño máximo por superar Defensa, ni daño mínimo especial si no supera Defensa, ni ignora reducción, resistencia, inmunidad o absorción de daño.\nAdemás, la criatura tiene Ventaja en tiradas o Salvaciones para evitar o escapar de Apresar si su cuerpo es líquido, gelatinoso, gaseoso, disperso o amorfo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no tiene puntos vitales claros o sus partes importantes no están donde deberían. Golpear “bien” no sirve tanto como contra un cuerpo común."
    },
    {
      "name": "Resistente",
      "cost": 1,
      "costText": "1 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura resiste un tipo de daño específico.\nCUÁNDO: Cuando recibe daño del tipo elegido.\nQUÉ HACE: Gana Resistencia a ese tipo de daño.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nEse tipo de daño le afecta menos de lo normal. Su cuerpo, energía o naturaleza lo soportan mejor."
    },
    {
      "name": "Resistencia Física",
      "cost": 3,
      "costText": "3 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura posee piel, placas, masa, escamas, hueso externo, cuerpo mineral, cuerpo artificial o constitución capaz de soportar daño físico común.\nCUÁNDO: Cuando recibe daño Contundente, Cortante o Penetrante.\nQUÉ HACE: Gana Resistencia contra los tres tipos de daño físico: Contundente, Cortante y Penetrante.\nDESCRINiveles de ConjuroIÓN:\nGolpes, cortes y perforaciones comunes pierden fuerza contra su cuerpo."
    },
    {
      "name": "Memoria de Dolor",
      "cost": 2,
      "costText": "2 PR",
      "category": "4. Rasgos Defensivos",
      "text": "La criatura aprende rápidamente de aquello que la hiere.\nCUÁNDO: Después de recibir daño de una criatura enemiga.\nQUÉ HACE: Hasta el inicio del próximo turno de la criatura, obtiene +1 a Defensa contra ataques realizados por esa misma criatura enemiga.\nLímite:\nSolo puede beneficiarse de este rasgo contra una criatura enemiga a la vez. Si recibe daño de otra fuente, puede cambiar el objetivo de este rasgo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura recuerda el ángulo del golpe, el olor del atacante o la forma del dolor. La próxima vez se protege mejor.\n5. Rasgos de Movimiento y Terreno\nEstos rasgos modifican la forma en que una criatura se desplaza por el mundo.\nPueden representar alas, aletas, patas especializadas, cuerpo serpentino, desplazamiento sobrenatural, extremidades adhesivas, túneles, flotación, nado, salto, vuelo, cuerpo amorfo o cualquier adaptación que cambie su relación con el terreno.\nUn rasgo de movimiento debe indicar qué tipo de desplazamiento permite, cuándo funciona y qué limitaciones tiene."
    },
    {
      "name": "Velocidad Mejorada",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura se desplaza con mayor rapidez o zancada.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Su Movimiento sube 1 banda (máximo Distante). Puede comprarse varias veces, pero no puede subir más allá de Distante."
    },
    {
      "name": "Trepador",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada para trepar mediante garras, ventosas, patas adhesivas, cuerpo segmentado, cola, fuerza corporal o técnica natural.\nCUÁNDO: Siempre activa.\nQUÉ HACE: La criatura puede trepar superficies verticales a su velocidad normal de movimiento, siempre que exista algún tipo de apoyo físico.\nNo puede trepar superficies completamente lisas, pulidas o imposibles de sujetar salvo que posea otro rasgo que lo permita.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no necesita escaleras ni caminos. Usa garras, patas, ventosas, cola o fuerza para subir donde otros se detienen."
    },
    {
      "name": "Caminar por los Muros",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura puede desplazarse por muros, techos y superficies verticales sin necesidad de usar las manos.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Puede moverse por superficies verticales y techos a su velocidad normal.\nPuede detenerse en esas superficies sin caer mientras esté consciente y no esté Inmovilizada, Aturdida o Inconsciente.\nRestricción:\nDebe tener una justificación clara: patas adhesivas, ventosas, garras microscópicas, magia, control gravitatorio, cuerpo arácnido, mucosa adherente o equivalente.\nDESCRINiveles de ConjuroIÓN:\nEl suelo no es su única superficie. La criatura se mueve por paredes y techos como si fueran camino."
    },
    {
      "name": "Nadador",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada para desplazarse en agua.\nCUÁNDO: Mientras se mueve en agua, ríos, lagos, mares, pantanos profundos u otro medio líquido apropiado.\nQUÉ HACE: La criatura puede nadar a su velocidad normal y no sufre penalizadores normales por moverse en agua.\nEste rasgo no permite respirar bajo el agua. Para eso se requiere Anfibio u otro rasgo equivalente.\nDESCRINiveles de ConjuroIÓN:\nEl agua no la frena. Su cuerpo corta la corriente, flota, ondula o se impulsa con naturalidad."
    },
    {
      "name": "Anfibio",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura puede vivir y actuar tanto en aire como bajo el agua.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Puede respirar aire y agua. Además, puede hablar, atacar y actuar bajo el agua sin penalizadores derivados de la respiración.\nEste rasgo no otorga velocidad de nado por sí mismo. Si la criatura nada con especial eficacia, debe comprar Nadador.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no pertenece solo a un medio. Puede respirar y actuar en agua o aire sin cambiar de cuerpo."
    },
    {
      "name": "Excavador",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura puede desplazarse excavando tierra, arena, barro, nieve compacta o material blando.\nCUÁNDO: Durante su movimiento.\nQUÉ HACE: Puede excavar y desplazarse bajo tierra blanda a la mitad de su velocidad normal.\nNo puede atravesar piedra sólida, metal, madera trabajada, muros, pisos reforzados ni superficies selladas, salvo que otro rasgo o Conjuro lo permita.\nCierre:\nSi el terreno no puede excavarse, este rasgo no puede usarse.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo camina sobre el suelo. Puede abrirse paso por debajo de él."
    },
    {
      "name": "Excavador Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está hecha para moverse bajo la tierra con gran eficacia.\nCUÁNDO: Durante su movimiento.\nQUÉ HACE: Puede excavar y desplazarse bajo tierra blanda a su velocidad normal.\nAdemás, puede atravesar piedra natural no trabajada a la mitad de su velocidad normal.\nNo puede atravesar metal, muros reforzados, pisos encantados, estructuras selladas ni materiales imposibles de perforar sin una Conjuro o rasgo específico.\nDESCRINiveles de ConjuroIÓN:\nLa tierra es otro camino. La criatura cava con fuerza suficiente para entrar, salir y cambiar de posición sin quedar atrapada."
    },
    {
      "name": "Planeo",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura posee alas pequeñas, membranas, piel extendida, plumas, aletas o una forma corporal que le permite caer lentamente y desplazarse por el aire sin volar de forma sostenida.\nCUÁNDO: Cuando cae desde una altura o se lanza desde una posición elevada.\nQUÉ HACE: Puede desplazarse hasta distancia Cerca horizontales por cada 3 metros de caída.\nAdemás, reduce a la mitad el daño por caída.\nEste rasgo no permite ganar altura ni mantenerse en el aire indefinidamente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no vuela, pero tampoco cae como un cuerpo común. Abre membranas, plumas, aletas o piel extendida y transforma la caída en avance."
    },
    {
      "name": "Vuelo",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura puede volar de forma sostenida.\nCUÁNDO: Durante su movimiento.\nQUÉ HACE: Obtiene velocidad de vuelo igual a su velocidad terrestre.\nPuede elevarse, descender y mantenerse en el aire mientras pueda mover sus alas, flotar o sostener el mecanismo de vuelo definido.\nCierre:\nSi queda Inmovilizada, Aturdida, Inconsciente, Derribada en el aire o pierde el mecanismo que le permite volar, cae.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no depende del suelo. Alas, gas, magia, viento, espíritu o fuerza propia la mantienen en el aire."
    },
    {
      "name": "Vuelo Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura vuela con gran velocidad y control.\nCUÁNDO: Durante su movimiento.\nQUÉ HACE: Obtiene velocidad de vuelo igual a su velocidad terrestre +distancia Cerca.\nAdemás, tiene Ventaja en tiradas para maniobrar en el aire, evitar caídas, mantenerse estable con viento o realizar movimientos aéreos complejos.\nPrerequisito:\nVuelo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo vuela. Domina el aire, cambia de dirección, gana altura y corrige el movimiento con precisión."
    },
    {
      "name": "Salto Potente",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura posee patas fuertes, tendones elásticos, musculatura explosiva, cola impulsora o una estructura corporal diseñada para saltar.\nCUÁNDO: Cuando salta.\nQUÉ HACE: Duplica la distancia que puede saltar.\nAdemás, tiene Ventaja en tiradas relacionadas con saltos largos, saltos altos o caídas controladas.\nDESCRINiveles de ConjuroIÓN:\nLa criatura usa el salto como forma de avance, escape, emboscada o desplazamiento vertical."
    },
    {
      "name": "Movimiento Acuático",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura no solo nada: domina el movimiento bajo el agua.\nCUÁNDO: Mientras está bajo el agua.\nQUÉ HACE: Obtiene +3 metros de movimiento mientras nada y tiene Ventaja en tiradas para maniobrar, perseguir, escapar o luchar contra corrientes.\nPrerequisito:\nNadador.\nDESCRINiveles de ConjuroIÓN:\nEl agua es su terreno favorable. Gira, acelera, se esconde y persigue con una soltura que otros cuerpos no tienen."
    },
    {
      "name": "Cuerpo Serpentino",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura se desplaza mediante ondulación, reptación, arrastre o torsión corporal.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Tiene Ventaja en tiradas para moverse por espacios estrechos, arrastrarse, deslizarse bajo obstáculos o evitar ser Derribada.\nRestricción:\nEste rasgo no permite pasar por aberturas imposibles para su masa. Para deformarse y atravesar rendijas, usa Cuerpo Amorfo.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo de la criatura se dobla y desliza donde otros cuerpos tropiezan."
    },
    {
      "name": "Cuerpo Amorfo",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura posee un cuerpo líquido, gelatinoso, gaseoso, blando, disperso, flexible o capaz de deformarse sin una estructura rígida clara.\nCUÁNDO: Siempre activa.\nQUÉ HACE: La criatura puede pasar por aberturas estrechas, grietas, barrotes separados, rendijas o espacios reducidos por donde una criatura de su tamaño normalmente no podría pasar, siempre que exista espacio suficiente para que su masa atraviese lentamente.\nAdemás, tiene Ventaja en tiradas o Salvaciones para evitar o escapar de Apresar.\nRestricción:\nEste rasgo no permite atravesar muros sólidos, puertas cerradas, barreras herméticas ni superficies sin abertura.\nCierre:\nSi la criatura está congelada, solidificada, petrificada, contenida en un recipiente hermético o afectada por un efecto que impida deformar su cuerpo, no puede beneficiarse de este rasgo mientras dure esa condición.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo de la criatura no conserva una forma fija. Se comprime, estira, filtra o derrama por espacios imposibles para huesos y carne común."
    },
    {
      "name": "Paso Etéreo",
      "cost": 3,
      "costText": "3 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura puede moverse brevemente a través de cuerpos, obstáculos delgados o materia parcialmente permeable.\nCUÁNDO: Durante su movimiento.\nQUÉ HACE: Una vez por turno, puede atravesar hasta 3 metros de materia sólida no sellada mágicamente.\nNo puede terminar su movimiento dentro de un objeto, muro, criatura o superficie sólida.\nSi no tiene espacio libre al final del movimiento, retrocede hasta el último espacio válido.\nRestricción:\nDebe tener una justificación sobrenatural clara: cuerpo espiritual, fase, sombra, distorsión espacial, niebla viva o equivalente.\nDESCRINiveles de ConjuroIÓN:\nPor un instante, la criatura deja de obedecer del todo a la materia."
    },
    {
      "name": "Paso de Maleza",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a moverse entre plantas, raíces, ramas bajas, lianas, arbustos, hongos altos o vegetación cerrada.\nCUÁNDO: Mientras se mueve por Terreno Difícil causado por vegetación natural.\nQUÉ HACE: La criatura ignora la reducción de movimiento causada por ese terreno.\nAdemás, no sufre el −1 a Defensa por estar parada sobre ese terreno.\nRestricción:\nNo funciona contra escombros, hielo, barro profundo, arena suelta, ruinas, terreno artificial ni Terreno Peligroso, salvo que el peligro provenga solo de vegetación no dañina.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se abre paso entre ramas y raíces sin perder equilibrio. Su cuerpo está hecho para ese entorno."
    },
    {
      "name": "Paso de Roca",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a moverse por piedra irregular, pendientes, grava, riscos, escombros naturales, cavernas o terreno montañoso.\nCUÁNDO: Mientras se mueve por Terreno Difícil causado por roca, piedra, grava, escombros naturales o pendientes irregulares.\nQUÉ HACE: La criatura ignora la reducción de movimiento causada por ese terreno.\nAdemás, no sufre el −1 a Defensa por estar parada sobre ese terreno.\nRestricción:\nNo permite trepar muros verticales por sí mismo. Para eso se requiere Trepador, Caminar por los Muros u otro rasgo equivalente.\nDESCRINiveles de ConjuroIÓN:\nPatas anchas, garras duras, equilibrio bajo o simple costumbre de montaña le permiten avanzar donde otros resbalan."
    },
    {
      "name": "Paso de Barro",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a pantanos, ciénagas, lodo, fango, turba, orillas blandas o suelos saturados de agua.\nCUÁNDO: Mientras se mueve por Terreno Difícil causado por barro, lodo, pantano, fango o suelo blando.\nQUÉ HACE: La criatura ignora la reducción de movimiento causada por ese terreno.\nAdemás, no sufre el −1 a Defensa por estar parada sobre ese terreno.\nRestricción:\nNo permite ignorar venenos, ácido, gases, agua profunda ni otros peligros del terreno. Si el barro también es Terreno Peligroso, solo ignora la parte de Terreno Difícil.\nDESCRINiveles de ConjuroIÓN:\nSus patas, cuerpo bajo, membranas, peso distribuido o costumbre de pantano impiden que se hunda como lo haría otra criatura."
    },
    {
      "name": "Paso de Arena",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a dunas, arena suelta, polvo profundo, grava fina, ceniza blanda o suelos que ceden bajo el peso.\nCUÁNDO: Mientras se mueve por Terreno Difícil causado por arena, polvo, ceniza o suelo suelto similar.\nQUÉ HACE: La criatura ignora la reducción de movimiento causada por ese terreno.\nAdemás, no sufre el −1 a Defensa por estar parada sobre ese terreno.\nRestricción:\nNo protege contra calor, asfixia, tormentas de arena, ceniza ardiente ni Terreno Peligroso.\nDESCRINiveles de ConjuroIÓN:\nLa criatura reparte su peso, se desliza, hunde poco las patas o avanza con movimientos cortos y precisos."
    },
    {
      "name": "Paso de Hielo",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a hielo, nieve dura, nieve profunda, escarcha, suelo resbaladizo o superficies congeladas.\nCUÁNDO: Mientras se mueve por Terreno Difícil causado por hielo, nieve, escarcha o superficies congeladas.\nQUÉ HACE: La criatura ignora la reducción de movimiento causada por ese terreno.\nAdemás, no sufre el −1 a Defensa por estar parada sobre ese terreno.\nRestricción:\nNo otorga Resistencia al daño de Hielo ni protege contra frío extremo. Si el hielo causa daño o se considera Terreno Peligroso, solo ignora la parte de Terreno Difícil.\nDESCRINiveles de ConjuroIÓN:\nGarras finas, almohadillas rugosas, peso ligero o equilibrio natural le permiten moverse sobre hielo sin perder estabilidad."
    },
    {
      "name": "Paso Seguro",
      "cost": 2,
      "costText": "2 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está especialmente adaptada a moverse por casi cualquier terreno complicado.\nCUÁNDO: Mientras se mueve o permanece sobre Terreno Difícil.\nQUÉ HACE: La criatura ignora todo Terreno Difícil, sin importar si proviene de vegetación, roca, barro, arena, nieve, escombros, suelo irregular u obstáculos naturales o artificiales.\nAdemás, no sufre el −1 a Defensa por estar parada sobre Terreno Difícil.\nRestricción:\nEste rasgo no permite ignorar Terreno Peligroso. Si el terreno es peligroso, la criatura sigue recibiendo el daño o efecto correspondiente, aunque ignora la reducción de movimiento y el −1 a Defensa derivados de su parte de Terreno Difícil.\nDESCRINiveles de ConjuroIÓN:\nNo importa si el suelo se hunde, corta, resbala o se rompe. La criatura encuentra apoyo, ritmo y salida."
    },
    {
      "name": "Inmunidad al Terreno Peligroso",
      "cost": 3,
      "costText": "3 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura está adaptada a un tipo específico de terreno hostil.\nCUÁNDO: Mientras se mueve o permanece dentro del Terreno Peligroso o Terreno Difícil elegido.\nQUÉ HACE: Elige un tipo de terreno al crear la criatura: fuego, hielo, ácido, veneno, electricidad, espinas, sombra, radiación, corrupción, vegetación dañina, pantano tóxico, roca cortante u otro peligro concreto.\nLa criatura no recibe daño ni efectos negativos de ese tipo específico de Terreno Peligroso.\nAdemás, ignora la reducción de movimiento y el −1 a Defensa causados por el Terreno Difícil de ese mismo entorno o sustancia.\nRestricción:\nSolo funciona contra el tipo de terreno elegido. No protege contra otros peligros ni contra ataques directos del mismo tipo de daño, salvo que la criatura tenga otro rasgo de Resistencia, Inmunidad o Absorción.\nDESCRINiveles de ConjuroIÓN:\nLa criatura nació, fue creada o se adaptó para caminar sobre aquello que mataría a otras. Fuego, ácido, hielo, corrupción o espinas no son obstáculo: son su suelo natural."
    },
    {
      "name": "Instinto de Retirada",
      "cost": 1,
      "costText": "1 PR",
      "category": "5. Rasgos de Movimiento y Terreno",
      "text": "La criatura sabe retirarse cuando queda expuesta.\nCUÁNDO: Cuando queda por debajo de la mitad de su Resistencia máxima.\nQUÉ HACE: Una vez por combate, puede moverse 3 metros como Reacción sin provocar Ataques de Oportunidad.\nRestricción:\nNo puede usar este rasgo si está Inmovilizada, Apresada, Aturdida, Inconsciente o si no puede moverse.\nDESCRINiveles de ConjuroIÓN:\nCuando el daño se acumula, el cuerpo de la criatura busca distancia antes de pensar.\n6. Rasgos de Aura y Percepción\nEstos rasgos representan sentidos especiales, presencia sobrenatural, campos de energía, emanaciones corporales, percepción avanzada o efectos pasivos que alteran el entorno cercano.\nUn rasgo de Aura y Percepción debe indicar:\nQué detecta o modifica.\nEn qué radio funciona.\nCuándo se activa.\nSi requiere Salvación.\nCuánto dura el efecto.\nCómo termina o bajo qué condiciones deja de funcionar.\nLas auras deben usarse con cuidado. Un efecto que afecta a muchas criaturas cada turno puede ralentizar la mesa si no está bien delimitado."
    },
    {
      "name": "Aura Antimagia",
      "cost": 4,
      "costText": "4 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura emite un campo que perturba Conjuros, energía primigenia, conjuros, sellos o manifestaciones sobrenaturales.\nCUÁNDO: Cuando una criatura dentro de distancia Lejos intenta usar una Conjuro.\nQUÉ HACE: La criatura que intenta usar la Conjuro debe superar una Salvación de Aura contra ND 10 o la Conjuro falla y no produce efecto.\nEl coste de Resistencia de la Conjuro se paga igualmente.\nLímite:\nUna misma criatura solo puede ser afectada por esta aura una vez por turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nEl aire alrededor de la criatura se vuelve pesado. Las Conjuros se rompen antes de tomar forma, como si el mundo rechazara obedecerlas."
    },
    {
      "name": "Aura de Lentitud",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La presencia de la criatura vuelve torpe el movimiento de sus enemigos.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: El área en un radio de distancia Cerca alrededor de la criatura cuenta como Terreno Difícil para sus enemigos.\nLos aliados de la criatura no se ven afectados.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nEl suelo se vuelve pesado, el aire se espesa o la voluntad se arrastra. Quienes intentan acercarse sienten que cada paso cuesta más de lo normal."
    },
    {
      "name": "Aura de Miedo",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura proyecta terror, autoridad depredadora, presión espiritual o presencia monstruosa.\nCUÁNDO: Cuando una criatura enemiga comienza su turno a dentro de Cerca de la criatura.\nQUÉ HACE: El objetivo debe superar una Salvación de Aura contra ND 10 o queda Asustado hasta el final de su turno.\nUna criatura que supere la Salvación no vuelve a ser afectada por esta aura hasta el inicio de su próximo turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nNo hace falta que grite. Su sola cercanía empuja al cuerpo a retroceder."
    },
    {
      "name": "Aura Elemental",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura irradia fuego, hielo, electricidad, corrosión, sombra, luz hiriente u otro elemento dañino.\nCUÁNDO: Al inicio del turno de la criatura.\nQUÉ HACE: Todas las criaturas a dentro de Contacto sufren 1d6 de daño del tipo elegido al crear la criatura.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura.\nLímite:\nUna criatura solo puede recibir daño de esta aura una vez por ronda.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nEstar cerca de la criatura es peligroso. Su cuerpo quema, congela, corroe, descarga o pudre el aire a su alrededor."
    },
    {
      "name": "Aura Inmovilizadora",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La presencia de la criatura dificulta el movimiento de quienes se acercan.\nCUÁNDO: Cuando una criatura enemiga comienza su turno a dentro de Contacto.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o queda Inmovilizado hasta el final de su turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nEl aire se espesa, las piernas se hunden, raíces invisibles se cierran o la presión del cuerpo enemigo vuelve pesado cada paso."
    },
    {
      "name": "Aura Paralizante",
      "cost": 4,
      "costText": "4 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura emite una presión corporal, descarga, toxina aérea, campo nervioso o fuerza sobrenatural que bloquea el cuerpo de los enemigos cercanos.\nCUÁNDO: Cuando una criatura enemiga comienza su turno a dentro de Contacto.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o queda Aturdido hasta el final de su turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nLímite:\nUna misma criatura solo puede ser afectada por esta aura una vez por ronda.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo no responde. Los músculos se traban, los nervios fallan y durante un instante la víctima queda atrapada dentro de su propia carne."
    },
    {
      "name": "Aura Venenosa",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura emite gas, esporas, vapor químico, aliento contaminado, podredumbre o toxinas que envenenan a quienes permanecen demasiado cerca.\nCUÁNDO: Cuando una criatura enemiga comienza su turno a dentro de Contacto.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o queda Envenenado.\nMientras esté Envenenado por esta aura, sufre 1d6 de daño Corrosivo al inicio de su turno. Al final de cada uno de sus turnos puede repetir la Salvación. Si tiene éxito, el efecto termina.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nLímite:\nUna criatura puede sufrir más de una instancia de veneno a la vez solo si provienen de fuentes diferentes. Dos exposiciones a la misma Aura Venenosa no crean instancias separadas.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente o si el mecanismo tóxico queda neutralizado.\nDESCRINiveles de ConjuroIÓN:\nRespirar cerca de la criatura es un error. La garganta arde, la piel suda frío y la sangre empieza a pelear contra sí misma."
    },
    {
      "name": "Aura Encantadora",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura proyecta belleza antinatural, canto, feromonas inteligentes, calma sobrenatural, presencia hipnótica, autoridad emocional o presión espiritual.\nCUÁNDO: Cuando una criatura enemiga comienza su turno a dentro de Cerca y puede percibir el mecanismo del encanto.\nQUÉ HACE: El objetivo debe superar una Salvación de Aura contra ND 10 o queda Fascinado hasta el final de su turno.\nMientras esté Fascinado por esta aura, el objetivo tiene Desventaja en ataques contra la criatura que emite el aura y no puede alejarse voluntariamente de ella, salvo que hacerlo sea necesario para evitar daño evidente e inmediato.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente, si el objetivo deja de percibir el mecanismo del encanto o si la criatura daña directamente al objetivo.\nDESCRINiveles de ConjuroIÓN:\nHay algo en ella que llama. No ordena, no domina, pero tira de la atención como un anzuelo suave."
    },
    {
      "name": "Aroma Embriagador",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura emite un olor dulce, almizcle, perfume, vapor floral, feromona, resina, aliento químico o aroma narcótico que altera el cuerpo de quienes se acercan.\nCUÁNDO: Cuando una criatura comienza su turno a dentro de Contacto y puede oler o percibir el aroma.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o sufre −1 a sus tiradas de ataque y Percepción hasta el final de su turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nUna criatura que no respire, que sea inmune a venenos, que no pueda percibir olores o que esté protegida contra gases no se ve afectada, salvo que el mecanismo definido no dependa del olfato.\nDESCRINiveles de ConjuroIÓN:\nEl olor no enamora ni domina. Afloja el cuerpo, nubla los reflejos y deja la atención un segundo atrás."
    },
    {
      "name": "Olor Nauseabundo",
      "cost": 1,
      "costText": "1 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura emite hedor, putrefacción, gas, almizcle, vapor químico o una secreción que entorpece a quienes se acercan.\nCUÁNDO: Cuando una criatura comienza su turno a dentro de Contacto.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o sufre Desventaja en su próxima tirada de ataque antes del final de su turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nUna criatura que no respire, que sea inmune a venenos o que no pueda percibir olores no se ve afectada, salvo que el mecanismo definido no dependa del olfato.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo rechaza acercarse. Los ojos lloran, la garganta se cierra y el golpe sale mal."
    },
    {
      "name": "Camuflaje",
      "cost": 1,
      "costText": "1 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura posee coloración, textura, postura o hábitos que la ayudan a mezclarse con su entorno.\nCUÁNDO: Cuando realiza una tirada de Sigilo en un entorno donde su cuerpo pueda confundirse con el fondo.\nQUÉ HACE: Obtiene +1 a esa tirada de Sigilo.\nRestricción:\nDebe definirse el entorno o mecanismo del camuflaje al crear la criatura: bosque, roca, nieve, arena, sombra, coral, barro, ruinas, corteza, vegetación u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nNo desaparece. Su cuerpo solo sabe parecer parte del lugar."
    },
    {
      "name": "Mimetismo",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura puede confundirse con el entorno de forma mucho más precisa que una criatura común.\nCUÁNDO: Cuando realiza una tirada de Sigilo en un entorno donde su cuerpo pueda imitar el fondo.\nQUÉ HACE: Tiene Ventaja en esa tirada de Sigilo.\nRestricción:\nDebe definirse el entorno o mecanismo del mimetismo al crear la criatura.\nCierre:\nEl beneficio puede perderse si la criatura se mueve de forma brusca, ataca, usa una Conjuro visible, emite luz, hace ruido evidente o queda expuesta por un cambio del entorno.\nDESCRINiveles de ConjuroIÓN:\nLa piel copia la piedra, las escamas rompen la silueta, el pelaje se vuelve maleza o el cuerpo aprende a parecer una sombra quieta."
    },
    {
      "name": "Sigilo Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura está hecha para desaparecer antes de atacar, huir o acechar.\nCUÁNDO: Cuando realiza una tirada de Sigilo.\nQUÉ HACE: Tiene Ventaja en la tirada y además obtiene +1 al resultado.\nRestricción:\nDebe tener una justificación clara: anatomía silenciosa, control de respiración, entrenamiento, cuerpo ligero, piel absorbente de sonido, instinto depredador, sombras naturales o magia de ocultamiento.\nDESCRINiveles de ConjuroIÓN:\nNo solo se oculta bien. Se mueve como si el mundo hiciera menos ruido alrededor de ella."
    },
    {
      "name": "Percepción Sísmica",
      "cost": 1,
      "costText": "1 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura detecta vibraciones a través del suelo.\nCUÁNDO: Siempre activa mientras la criatura esté en contacto con el suelo o una superficie capaz de transmitir vibraciones.\nQUÉ HACE: Siente la ubicación de criaturas en contacto con la misma superficie dentro de distancia Lejos.\nEste rasgo no revela detalles visuales, identidad, color, expresiones, escritura ni objetos que no produzcan vibración suficiente.\nCierre:\nNo funciona contra criaturas voladoras, suspendidas, incorpóreas o separadas de la superficie que transmite las vibraciones.\nDESCRINiveles de ConjuroIÓN:\nNo necesita ver pasos. Los siente en la tierra, la piedra o la madera bajo su cuerpo."
    },
    {
      "name": "Sentido Ciego",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura percibe su entorno sin depender de la vista.\nCUÁNDO: Siempre activa.\nQUÉ HACE: La criatura puede percibir criaturas, obstáculos y movimiento dentro de distancia Lejos sin usar los ojos.\nNo puede ser Cegada dentro de ese radio por efectos que solo anulen la vista.\nRestricción:\nDebe definirse el mecanismo: ecolocalización, vibración, calor, presión del aire, olor, percepción espiritual, humedad, electricidad u otro sentido equivalente.\nCierre:\nSi el mecanismo sensorial es anulado, el rasgo deja de funcionar mientras dure esa condición.\nDESCRINiveles de ConjuroIÓN:\nLa criatura ve con otra cosa: oído, piel, lengua, calor, huesos, electricidad o espíritu."
    },
    {
      "name": "Sentido del Peligro",
      "cost": 2,
      "costText": "2 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura detecta amenazas antes de que el golpe caiga.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: No puede ser Sorprendida.\nAdemás, tiene Ventaja en tiradas para detectar emboscadas, trampas inmediatas o amenazas a punto de activarse.\nCierre:\nNo funciona si la criatura está Inconsciente, dormida, incapacitada o bajo un efecto que anule su percepción.\nDESCRINiveles de ConjuroIÓN:\nAlgo en su cuerpo reacciona antes que su mente. Orejas, piel, instinto o alma se tensan justo antes del peligro."
    },
    {
      "name": "Sentidos Agudos",
      "cost": 1,
      "costText": "1 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "Uno de los sentidos de la criatura está especialmente desarrollado.\nCUÁNDO: Cuando realiza tiradas de Percepción usando el sentido elegido.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nEl sentido debe definirse al crear la criatura: vista, oído, olfato, tacto, gusto, percepción espiritual, percepción térmica u otro sentido concreto.\nDESCRINiveles de ConjuroIÓN:\nLa criatura capta detalles que otras pasan por alto: respiraciones, olores viejos, calor bajo la piel, vibraciones o cambios mínimos de luz."
    },
    {
      "name": "Visión en la Oscuridad",
      "cost": 1,
      "costText": "1 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "Los ojos de la criatura están adaptados a la falta de luz.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Puede ver en oscuridad total como si fuera penumbra, hasta 15 metros.\nNo distingue colores en oscuridad total, solo formas, contraste y movimiento.\nCierre:\nNo permite ver a través de muros, humo denso, niebla espesa, invisibilidad ni oscuridad sobrenatural que bloquee expresamente este rasgo.\nDESCRINiveles de ConjuroIÓN:\nSus ojos beben la poca luz que queda. Donde otros tantean, ella distingue siluetas."
    },
    {
      "name": "Visión Verdadera",
      "cost": 3,
      "costText": "3 PR",
      "category": "6. Rasgos de Aura y Percepción",
      "text": "La criatura percibe aquello que otros sentidos no pueden atravesar.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Puede ver criaturas invisibles y reconocer ilusiones visuales dentro de 15 metros.\nUna ilusión reconocida no desaparece, pero la criatura sabe que no es real.\nRestricción:\nEste rasgo afecta invisibilidad e ilusiones visuales. No revela mentiras, emociones, intenciones, criaturas ocultas por cobertura física ni efectos que no dependan de engaño visual.\nCierre:\nNo funciona si la criatura está Cegada por un efecto que anule también percepción sobrenatural, o si el efecto ilusorio indica expresamente que bloquea Visión Verdadera.\nDESCRINiveles de ConjuroIÓN:\nLa criatura mira y el disfraz del mundo se agrieta. Lo falso sigue ahí, pero ya no engaña.\n7. Rasgos de Soporte\nEstos rasgos permiten que una criatura ayude a otras criaturas, mejore sus acciones, reparta protección, entregue Resistencia, invoque apoyo o mantenga con vida a sus aliados.\nUn rasgo de soporte debe indicar:\nQuién puede beneficiarse.\nEn qué distancia funciona.\nCuándo se activa.\nSi requiere Acción Principal, Acción Rápida o Reacción.\nCuánto dura.\nSi puede afectar varias veces al mismo objetivo."
    },
    {
      "name": "Aura Curativa Menor",
      "cost": 1,
      "costText": "1 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura emite una presencia leve que ayuda a cerrar heridas menores.\nCUÁNDO: Al inicio del turno de cada aliado dentro de 3 metros.\nQUÉ HACE: El aliado recupera 2 puntos de Resistencia.\nLa recuperación no puede superar la Resistencia máxima del aliado.\nLímite:\nUna criatura solo puede beneficiarse de una Aura Curativa Menor por ronda.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nCerca de la criatura, las heridas menores cierran, el pulso se estabiliza o la energía vital vuelve con lentitud."
    },
    {
      "name": "Aura Curativa",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura emite energía vital, luz sanadora, esporas medicinales, calor interno o una presencia que sostiene a sus aliados.\nCUÁNDO: Al inicio del turno de cada aliado dentro de distancia Cerca.\nQUÉ HACE: El aliado recupera 1d6 de Resistencia.\nLa recuperación no puede superar la Resistencia máxima del aliado.\nLímite:\nUna criatura solo puede beneficiarse de una Aura Curativa por ronda.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nCerca de la criatura, las heridas cierran con torpeza, la respiración vuelve y el cuerpo recuerda cómo seguir de pie."
    },
    {
      "name": "Escudo Viviente",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede interponerse para proteger a otra.\nCUÁNDO: Como Reacción, cuando un aliado adyacente recibe un ataque.\nQUÉ HACE: La criatura se convierte en el nuevo objetivo del ataque.\nDebe estar consciente y poder moverse o interponerse físicamente.\nLímite:\nRequiere gastar su Reacción.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se cruza entre el golpe y su aliado. Puede hacerlo con cuerpo, escudo, caparazón, alas, tentáculos o barrera propia."
    },
    {
      "name": "Potenciador",
      "cost": 1,
      "costText": "1 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura guía, empuja, inspira, coordina o altera a un aliado cercano.\nCUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Un aliado visible a dentro de Cerca obtiene +1 a su próxima tirada antes del inicio del próximo turno de la criatura que otorgó el bono.\nSi el bono no se usa antes de ese momento, se pierde.\nDESCRINiveles de ConjuroIÓN:\nLa criatura da una señal, abre una oportunidad, empuja el cuerpo correcto o marca el instante exacto para actuar."
    },
    {
      "name": "Aura de Velocidad",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura acelera a sus aliados mediante gritos, feromonas, viento, ritmo, magia, señales o energía compartida.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: Los aliados dentro de distancia Cerca aumentan su movimiento en 3 metros.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nLos aliados cercanos se mueven con un ritmo que no tendrían solos. El grupo avanza como si compartiera impulso."
    },
    {
      "name": "Resucitador",
      "cost": 4,
      "costText": "4 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede levantar a un aliado recién caído mediante energía vital, necromancia, descarga, mandato espiritual, alquimia o reparación inmediata.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Elige un aliado a dentro de Contacto que haya sido reducido a 0 de Resistencia desde el final del último turno de la criatura.\nEse aliado recupera 1d6 de Resistencia y puede actuar normalmente en su próximo turno.\nLímite:\nUna vez por combate.\nRestricción:\nNo funciona si el cuerpo del aliado fue destruido, desintegrado, separado de su fuente vital o si el tipo de criatura no puede ser restaurado por el mecanismo definido.\nDESCRINiveles de ConjuroIÓN:\nLa criatura devuelve movimiento a lo que acaba de caer. No siempre es curación limpia; a veces es una orden, una descarga o una deuda con la muerte."
    },
    {
      "name": "Amplificador de Fuerza",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura aumenta la fuerza de sus aliados mediante aura, canto, feromonas, grito de guerra, energía compartida o coordinación.\nCUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Un aliado visible a dentro de Cerca inflige +1d6 de daño en su próximo ataque antes del inicio del próximo turno de la criatura que otorgó el bono.\nSi el aliado no ataca antes de ese momento, el bono se pierde.\nLímite:\nUna misma criatura solo puede beneficiarse de un Amplificador de Fuerza a la vez.\nDESCRINiveles de ConjuroIÓN:\nEl golpe del aliado cae con más peso porque la criatura lo empuja, lo carga de poder o le da la apertura correcta."
    },
    {
      "name": "Barrera Compartida",
      "cost": 3,
      "costText": "3 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura proyecta una protección sobre sus aliados cercanos.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: La criatura y todos los aliados dentro de distancia Cerca obtienen +1 a Defensa hasta el inicio del próximo turno de la criatura.\nLa Defensa final de una criatura no puede superar 16.\nCierre:\nEl efecto termina antes si la criatura cae Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nUna barrera, formación, sombra, canto, escudo común o impulso protector cubre al grupo durante unos segundos."
    },
    {
      "name": "Invocar Refuerzos",
      "cost": 3,
      "costText": "3 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede llamar, crear, vomitar, liberar o convocar criaturas menores.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Invoca o llama hasta 2 criaturas de ND 1/4 o menor en espacios libres a dentro de Cerca.\nLas criaturas invocadas actúan después del turno de la criatura que las invocó.\nDuración:\nDuran 3 rondas o hasta ser reducidas a 0 de Resistencia.\nLímite:\nUna vez por combate.\nRestricción:\nEl tipo de criatura invocada debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no combate sola. Llama crías, larvas, sombras, drones, espíritus menores, cadáveres o servidores ligados a su cuerpo."
    },
    {
      "name": "Transferencia de Resistencia",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede entregar parte de su propia Resistencia a un aliado.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: La criatura pierde hasta 10 puntos de Resistencia. Un aliado a dentro de Contacto recupera la misma cantidad.\nLa criatura no puede reducirse a 0 de Resistencia mediante este rasgo.\nLa recuperación del aliado no puede superar su Resistencia máxima.\nDESCRINiveles de ConjuroIÓN:\nLa criatura entrega carne, sangre, energía, piezas, savia, luz o fuerza vital. Lo que uno recupera, el otro lo pierde."
    },
    {
      "name": "Comando Instintivo",
      "cost": 1,
      "costText": "1 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura coordina a otras mediante gestos, feromonas, chillidos, mirada, señales, vibraciones o vínculo de grupo.\nCUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Un aliado visible o detectable a dentro de Cerca puede moverse 3 metros inmediatamente.\nEste movimiento no provoca Ataques de Oportunidad.\nLímite:\nUna vez por ronda.\nDESCRINiveles de ConjuroIÓN:\nUna señal corta basta para que otro cuerpo se aparte, avance o tome posición."
    },
    {
      "name": "Guardaespaldas Natural",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura está diseñada o entrenada para proteger a otra criatura.\nCUÁNDO: Cuando un aliado a dentro de Contacto recibe daño.\nQUÉ HACE: Como Reacción, la criatura reduce ese daño en 1d6.\nLímite:\nRequiere gastar su Reacción.\nRestricción:\nDebe existir un mecanismo claro: interponerse, cubrir con caparazón, emitir barrera, absorber parte del golpe, desviar con tentáculos o proteger con escudo natural.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no toma todo el golpe, pero lo amortigua lo suficiente para que el aliado siga de pie."
    },
    {
      "name": "Purga Menor",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede eliminar efectos dañinos menores de un aliado.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Elige un aliado a dentro de Contacto. Ese aliado puede repetir una Salvación contra un estado o efecto activo que permita Salvación para terminar.\nSi tiene éxito, el efecto termina.\nLímite:\nUna vez por ronda.\nRestricción:\nEl mecanismo debe definirse al crear la criatura: saliva curativa, luz, canto, hierbas, reparación, calor vital, limpieza espiritual, esporas medicinales u otro efecto equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no cura una herida: limpia aquello que mantiene al cuerpo atrapado."
    },
    {
      "name": "Repartir Daño",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede compartir el daño recibido por un aliado cercano.\nCUÁNDO: Como Reacción, cuando un aliado a dentro de Contacto recibe daño.\nQUÉ HACE: La criatura reduce ese daño a la mitad, redondeando hacia abajo. Luego la criatura recibe la misma cantidad reducida.\nEjemplo: si el aliado recibiría 9 de daño, recibe 5 y la criatura recibe 4.\nLímite:\nRequiere gastar su Reacción.\nRestricción:\nLa criatura no puede reducir a 0 el daño recibido por el aliado mediante este rasgo. Si el daño original ya era 1, no puede usarlo.\nDESCRINiveles de ConjuroIÓN:\nEl golpe se reparte entre cuerpos, vínculos, placas, sangre o energía compartida."
    },
    {
      "name": "Vínculo de Manada",
      "cost": 1,
      "costText": "1 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura pelea mejor cuando actúa junto a otras de su grupo.\nCUÁNDO: Siempre activa mientras tenga al menos un aliado consciente a dentro de Contacto.\nQUÉ HACE: La criatura obtiene +1 a sus tiradas de ataque.\nCierre:\nEl beneficio termina si no hay aliados conscientes a dentro de Contacto.\nDESCRINiveles de ConjuroIÓN:\nSola es peligrosa. En grupo, su cuerpo entiende mejor cuándo morder, empujar o cerrar el paso."
    },
    {
      "name": "Marcar Presa",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura señala, expone, distrae o marca a un objetivo para que otros lo ataquen.\nCUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Elige una criatura enemiga visible a dentro de Cerca. Hasta el inicio del próximo turno de la criatura que marcó, el primer aliado que ataque a ese objetivo obtiene +1 a la tirada de ataque.\nLímite:\nSolo puede haber una presa marcada por esta criatura a la vez.\nDESCRINiveles de ConjuroIÓN:\nLa criatura muestra dónde golpear. Puede hacerlo con una marca, rugido, olor, luz, gesto o apertura táctica."
    },
    {
      "name": "Barrera de Paso",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede bloquear una zona cercana con cuerpo, escudo, energía, tentáculos, ramas, espinas o presencia protectora.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Elige un espacio de 3 metros adyacente a la criatura. Hasta el inicio de su próximo turno, ese espacio cuenta como Terreno Difícil para enemigos.\nSi un enemigo intenta atravesar ese espacio, debe superar una Salvación de Cuerpo contra ND 10 o su movimiento termina al entrar.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl efecto termina si la criatura se mueve, queda Inconsciente o no puede seguir bloqueando el paso.\nDESCRINiveles de ConjuroIÓN:\nLa criatura convierte su presencia en una puerta cerrada. Pasar junto a ella exige fuerza, equilibrio o suerte."
    },
    {
      "name": "Sacrificio Protector",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede destruir parte de sí misma o exponerse gravemente para salvar a otra.\nCUÁNDO: Como Reacción, cuando un aliado a dentro de Contacto sería reducido a 0 de Resistencia.\nQUÉ HACE: El aliado queda en 1 de Resistencia. La criatura que usa este rasgo recibe 2d6 de daño que no puede reducirse, resistirse ni absorberse.\nLímite:\nUna vez por combate.\nDESCRINiveles de ConjuroIÓN:\nLa criatura paga el golpe con su propio cuerpo. Algo se rompe, se quema, se arranca o se entrega para que otro no caiga."
    },
    {
      "name": "Reparador",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura puede reparar cuerpos artificiales, armaduras vivientes, constructos o criaturas mecánicas.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Elige una criatura Artificial, constructo, gólem, armadura viviente o criatura compatible a dentro de Contacto. El objetivo recupera 2d6 + 1 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nRestricción:\nSolo funciona sobre criaturas que puedan ser reparadas por el mecanismo definido al crear este rasgo.\nDESCRINiveles de ConjuroIÓN:\nNo sana carne. Ajusta piezas, cierra placas, inyecta aceite, suelda grietas o devuelve energía a un núcleo."
    },
    {
      "name": "Mandato Coordinado",
      "cost": 3,
      "costText": "3 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura coordina a varios aliados al mismo tiempo.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Hasta tres aliados visibles o detectables a dentro de Cerca pueden moverse 3 metros inmediatamente.\nEste movimiento no provoca Ataques de Oportunidad.\nLímite:\nUna vez por ronda.\nRestricción:\nDebe existir un mecanismo claro de coordinación: voz, feromonas, vínculo mental, señales visuales, vibraciones, tamborileo, canto, luz o control de enjambre.\nDESCRINiveles de ConjuroIÓN:\nLa criatura mueve al grupo con una sola orden. No todos entienden el mando, pero los cuerpos correctos responden."
    },
    {
      "name": "Aura Protectora",
      "cost": 2,
      "costText": "2 PR",
      "category": "7. Rasgos de Soporte",
      "text": "La criatura proyecta una presencia que ayuda a sus aliados a resistir amenazas concretas.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: Los aliados dentro de distancia Cerca tienen Ventaja en Salvaciones contra un tipo de amenaza elegido al crear la criatura.\nEjemplos: miedo, veneno, corrupción, fuego, hielo, efectos mentales, enfermedad, fatiga, control espiritual.\nRestricción:\nEl tipo de amenaza debe definirse al crear la criatura.\nCierre:\nEl aura deja de funcionar si la criatura queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nCerca de la criatura, sus aliados soportan mejor aquello contra lo que fue creada, bendecida o entrenada para resistir.\n8. Rasgos de Control de Terreno\nEstos rasgos permiten que una criatura altere el espacio cercano, bloquee movimiento, cree zonas peligrosas, fije enemigos, separe grupos o convierta el entorno en parte de su amenaza.\nUn rasgo de control de terreno debe indicar:\nDónde se coloca el efecto.\nQué área cubre.\nA quién afecta.\nCuándo se activa.\nCuánto dura.\nCómo termina.\nSi permite Salvación.\nSi distingue aliados de enemigos."
    },
    {
      "name": "Zona Peligrosa",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura crea o libera una zona dañina mediante fuego, hielo, ácido, veneno, electricidad, espinas, sombra, corrupción, raíces hirientes, vapor, cristales cortantes u otro mecanismo.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Designa un área de 3 metros de radio centrada en la criatura o en un punto visible a dentro de Lejos.\nCualquier criatura que entre en esa zona por primera vez en su turno o que inicie su turno dentro de ella sufre 1d6 de daño del tipo elegido al crear la criatura.\nDuración:\nLa zona dura hasta el inicio del próximo turno de la criatura.\nRestricción:\nEl tipo de daño y el mecanismo deben definirse al crear la criatura.\nLímite:\nUna criatura solo puede recibir daño de esta zona una vez por turno.\nDESCRINiveles de ConjuroIÓN:\nLa criatura vuelve peligroso un trozo del campo. El suelo quema, corta, muerde, pudre o descarga a quien lo pisa."
    },
    {
      "name": "Terreno Difícil",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura altera el suelo mediante raíces, hielo, barro denso, piedras quebradas, huesos, telarañas, arena movediza, carne viva, escombros o energía que dificulta el paso.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Designa un área de distancia Cerca de radio centrada en la criatura o en un punto visible a dentro de Lejos.\nEl área se convierte en Terreno Difícil para sus enemigos.\nDuración:\nDura 3 rondas.\nCierre:\nEl efecto puede terminar antes si el terreno es destruido, disipado, quemado, congelado, limpiado o neutralizado por una acción, Conjuro o condición adecuada definida por el Diseñador.\nDESCRINiveles de ConjuroIÓN:\nEl campo deja de ser limpio. Cada paso cuesta más, cada giro pierde fuerza y la criatura que controla el terreno gana tiempo."
    },
    {
      "name": "Ancla",
      "cost": 3,
      "costText": "3 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura fija a un objetivo mediante garfios, raíces, sombra, gravedad, cadenas, tentáculos, hielo, saliva endurecida, magnetismo, mirada o presión espiritual.\nCUÁNDO: Como Acción Rápida, después de impactar a una criatura con un ataque durante su turno.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o no puede alejarse más de 3 metros de la criatura hasta el final de su próximo turno.\nEl objetivo puede acercarse, atacar, defenderse o moverse dentro del límite permitido, pero no puede aumentar la distancia más allá de 3 metros respecto de la criatura que lo ancló.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl efecto termina antes si la criatura que ancló cae Inconsciente, si el objetivo es movido fuera del alcance por una fuerza externa, o si se rompe el mecanismo físico o sobrenatural que lo mantiene fijado.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no deja ir a su presa. Algo tira, pesa, se enrolla, congela o sujeta."
    },
    {
      "name": "Muro Natural",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura levanta, expulsa o forma una barrera de materia: piedra, hielo, hueso, madera, carne, cristal, barro endurecido, telaraña, coral, metal vivo u otro material.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Crea una barrera de hasta distancia Cerca de largo y 3 metros de alto en un punto visible a dentro de Lejos.\nLa barrera bloquea el paso y otorga cobertura según su material y posición. Tiene 15 de Resistencia y Defensa 8. Si llega a 0 de Resistencia, se rompe.\nDuración:\nDura 3 rondas o hasta ser destruida.\nRestricción:\nEl material debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo se mueve por el terreno. Lo levanta, lo endurece o lo vomita para cerrar el camino."
    },
    {
      "name": "Nube Obscurecedora",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura libera humo, polvo, tinta, vapor, esporas, sombra, niebla, ceniza o un enjambre que dificulta la visión.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Crea una nube de distancia Cerca de radio centrada en la criatura o en un punto visible a dentro de Lejos.\nLas criaturas dentro de la nube tienen Desventaja en tiradas de Percepción basadas en la vista y en ataques a distancia que dependan de visión clara.\nDuración:\nDura hasta el inicio del próximo turno de la criatura.\nCierre:\nUn viento fuerte, una Conjuro adecuada o una condición que disperse el mecanismo puede terminar el efecto antes.\nDESCRINiveles de ConjuroIÓN:\nLa criatura llena el aire de algo que corta la vista. Lo que era campo abierto se vuelve duda."
    },
    {
      "name": "Trampa de Zona",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura prepara una zona que castiga el movimiento enemigo: telarañas tensas, raíces vivas, placas de presión, agujas, barro falso, runas, cristales frágiles o mandíbulas ocultas.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Designa un área de 3 metros de radio a dentro de Lejos. La primera criatura enemiga que entre en el área antes del inicio del próximo turno de la criatura debe superar una Salvación de Destreza contra ND 10 o queda Derribada.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nDura hasta el inicio del próximo turno de la criatura o hasta activarse.\nCierre:\nEl efecto termina después de afectar a una criatura.\nDESCRINiveles de ConjuroIÓN:\nEl peligro está puesto antes del paso. La presa no cae por el golpe, cae por pisar donde no debía."
    },
    {
      "name": "Zona de Silencio",
      "cost": 3,
      "costText": "3 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura apaga sonido, vibración, voz, canto, eco o comunicación dentro de una zona.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Designa un área de 3 metros de radio centrada en la criatura o en un punto visible a dentro de Lejos.\nDentro del área no pueden usarse efectos que dependan de voz, canto, órdenes habladas, ecolocalización, gritos o sonido.\nLas criaturas dentro del área tienen Desventaja en tiradas de Percepción basadas en oído.\nDuración:\nDura hasta el inicio del próximo turno de la criatura.\nCierre:\nEl efecto termina antes si la criatura cae Inconsciente o si el mecanismo que produce el silencio es destruido, disipado o interrumpido.\nDESCRINiveles de ConjuroIÓN:\nLa zona queda muda. Las órdenes no salen, los ecos mueren y el oído deja de servir."
    },
    {
      "name": "Zona de Presión",
      "cost": 3,
      "costText": "3 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura aumenta gravedad, presión del aire, presión espiritual, densidad del agua, peso del barro, fuerza magnética o resistencia del entorno.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Designa un área de 3 metros de radio centrada en la criatura o en un punto visible a dentro de Lejos.\nLos enemigos que comiencen su turno dentro del área deben superar una Salvación de Cuerpo contra ND 10 o no pueden realizar Reacciones hasta el inicio de su próximo turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nDura hasta el inicio del próximo turno de la criatura.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo se vuelve lento. No lo suficiente para detenerse, pero sí para reaccionar tarde."
    },
    {
      "name": "Separar Presa",
      "cost": 2,
      "costText": "2 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura usa empujones, látigos, raíces, agua, viento, sombra, presión o maniobras para aislar a un objetivo.\nCUÁNDO: Cuando impacta con un ataque cuerpo a cuerpo.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o es empujado 3 metros en dirección elegida por la criatura.\nEste movimiento no puede empujar al objetivo hacia un espacio imposible de ocupar.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nLímite:\nUna vez por turno.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo golpea. Coloca a su presa donde le conviene."
    },
    {
      "name": "Jaula Natural",
      "cost": 4,
      "costText": "4 PR",
      "category": "8. Rasgos de Control de Terreno",
      "text": "La criatura encierra a un objetivo mediante raíces, hielo, huesos, barro endurecido, cristal, sombra, metal vivo, telarañas densas, mandíbulas del terreno o una estructura equivalente.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Elige una criatura visible a dentro de Lejos. El objetivo debe superar una Salvación de Destreza contra ND 10 o queda encerrado en una jaula de 3 metros de diámetro.\nMientras esté encerrado, no puede salir del área por movimiento normal. Puede atacar, usar Conjuros o intentar destruir la jaula.\nLa jaula tiene Defensa 8 y 20 de Resistencia. Si llega a 0 de Resistencia, se rompe.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nDura 3 rondas o hasta ser destruida.\nCierre:\nEl efecto termina si la criatura cae Inconsciente, si la jaula es destruida o si una Conjuro adecuada permite escapar.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no necesita matar de inmediato. Puede cerrar el mundo alrededor de una presa y decidir qué hacer después.\n9. Rasgos Especiales\nEstos rasgos representan capacidades excepcionales, estructuras corporales complejas, comportamientos de grupo, cambios de forma, invocaciones, reacciones finales o reglas que modifican de manera importante el funcionamiento de una criatura.\nUn rasgo especial debe usarse con cuidado. Muchos de estos rasgos cambian el ritmo de la mesa, añaden cuerpos al combate, alteran la cantidad de acciones disponibles o permiten que una criatura sobreviva más allá de lo normal."
    },
    {
      "name": "Asimilar",
      "cost": 3,
      "costText": "3 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede incorporar materia, cuerpos, energía o restos de otras criaturas para fortalecerse.\nCUÁNDO: En su turno, como Acción Principal, si está adyacente a una criatura reducida a 0 de Resistencia, restos compatibles o una fuente de materia apropiada definida al crearla.\nQUÉ HACE: La criatura consume o incorpora la fuente y recupera 2d6 + 1 de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nLímite:\nUna vez por ronda.\nRestricción:\nDebe definirse qué puede asimilar: carne, metal, cadáveres, madera, piedra, energía elemental, corrupción, sangre, sombra u otra materia compatible.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo se alimenta. Integra aquello que toca y lo convierte en cuerpo, energía o estabilidad."
    },
    {
      "name": "Dividirse",
      "cost": 4,
      "costText": "4 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede partirse en cuerpos menores cuando recibe daño suficiente.\nCUÁNDO: La primera vez en un combate que la criatura queda con la mitad o menos de su Resistencia máxima.\nQUÉ HACE: La criatura se divide en dos cuerpos menores.\nCada cuerpo nuevo conserva la mitad de la Resistencia actual de la criatura original, redondeando hacia abajo, y actúa en el mismo turno de iniciativa que la criatura original.\nLos cuerpos divididos conservan los ataques naturales básicos de la criatura, pero no pueden volver a usar Dividirse.\nLímite:\nUna vez por combate.\nRestricción:\nDebe tener sentido físico o sobrenatural: cuerpo gelatinoso, enjambre, sombra viva, masa de carne, colonia de hongos, constructo modular u otro mecanismo equivalente.\nDESCRINiveles de ConjuroIÓN:\nHerirla no siempre la reduce. A veces la multiplica."
    },
    {
      "name": "Grito Reactivo",
      "cost": 2,
      "costText": "2 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede responder al peligro con un grito, rugido, chillido, descarga, alarma, señal química o pulso sobrenatural.\nCUÁNDO: Como Reacción, cuando recibe daño.\nQUÉ HACE: Todas las criaturas enemigas a dentro de Cerca deben superar una Salvación de Aura contra ND 10 o sufren −1 a su próxima tirada de ataque antes del final de su próximo turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nLímite:\nRequiere gastar su Reacción.\nCierre:\nUna criatura sorda o incapaz de percibir el mecanismo definido no se ve afectada, salvo que el grito use presión espiritual, vibración corporal u otro medio no auditivo.\nDESCRINiveles de ConjuroIÓN:\nEl daño arranca una señal del cuerpo de la criatura. No es solo dolor: es alarma, amenaza o presión."
    },
    {
      "name": "Invocador Innato",
      "cost": 4,
      "costText": "4 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede llamar, producir, parir, liberar, animar o convocar aliados menores.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: Invoca hasta 1d6 criaturas de ND 1/4 o menor en espacios libres a dentro de Cerca.\nLas criaturas invocadas actúan después del turno de la criatura que las invocó.\nDuración:\nDuran 3 rondas o hasta ser reducidas a 0 de Resistencia.\nLímite:\nUna vez por combate.\nRestricción:\nLas criaturas invocadas deben definirse al crear la criatura. Deben estar ligadas a su identidad: crías, larvas, sombras, esqueletos, chispas elementales, drones, copias menores, insectos, espíritus u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura trae más cuerpos al conflicto. No siempre los llama desde lejos; a veces los vomita, los libera o los despierta."
    },
    {
      "name": "Líder de la Manada",
      "cost": 2,
      "costText": "2 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura coordina a sus aliados mediante rugidos, postura, feromonas, señales, disciplina o vínculo instintivo.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: Los aliados a dentro de Cerca que puedan verla, oírla o percibir su señal obtienen +1 a sus tiradas de ataque.\nCierre:\nEl beneficio termina si la criatura queda Inconsciente, si el aliado deja de percibirla o si el mecanismo de coordinación queda bloqueado.\nRestricción:\nDebe definirse el mecanismo de liderazgo al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo pelea. Ordena el ritmo del grupo, aunque no use palabras."
    },
    {
      "name": "Mente Colmena",
      "cost": 2,
      "costText": "2 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura comparte impulsos, sentidos o voluntad con otras criaturas similares.\nCUÁNDO: Siempre activa mientras tenga al menos un aliado con Mente Colmena a dentro de Lejos.\nQUÉ HACE: No puede ser Sorprendida y tiene Ventaja en tiradas de Percepción.\nAdemás, si una criatura con Mente Colmena detecta un peligro, las demás criaturas con este rasgo a dentro de Lejos también lo detectan.\nCierre:\nEl beneficio termina si la criatura queda aislada de la red, si no hay aliados compatibles dentro del alcance o si el vínculo es bloqueado por una Conjuro, silencio mental, interferencia o condición equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no piensa sola. Una parte de ella está en los otros cuerpos."
    },
    {
      "name": "Múltiples Cabezas",
      "cost": 3,
      "costText": "3 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura posee varias cabezas, rostros, núcleos sensoriales, ojos independientes o conciencias parciales.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Tiene Ventaja en tiradas de Percepción y no puede ser Flanqueada, sorprendida desde un ángulo muerto o afectada por efectos que dependan de distraer una sola cabeza o mirada.\nAdemás, tiene Ventaja en Salvaciones contra Cegado, Aturdido mental, Fascinado o efectos similares que afecten la percepción o atención.\nRestricción:\nDebe describirse cuántas cabezas, rostros, sensores o núcleos posee.\nDESCRINiveles de ConjuroIÓN:\nSiempre hay otro ojo mirando. Siempre hay otra boca respirando. Siempre hay otra parte despierta."
    },
    {
      "name": "Reanimar",
      "cost": 4,
      "costText": "4 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede volver a levantarse después de caer.\nCUÁNDO: Al inicio de su próximo turno después de ser reducida a 0 de Resistencia.\nQUÉ HACE: La criatura recupera 2d6 + 1 de Resistencia y deja de estar fuera de combate.\nLímite:\nUna vez por combate.\nCierre:\nEste rasgo no se activa si el cuerpo fue destruido, quemado por completo, desintegrado, purificado, separado de su núcleo vital o neutralizado mediante el método definido al crear la criatura.\nRestricción:\nDebe definirse qué impide la reanimación: fuego, daño radiante, destrucción del núcleo, sal, decapitación, exorcismo, romper el tótem, separar piezas u otra condición clara.\nDESCRINiveles de ConjuroIÓN:\nCaer no basta. Hay que saber cómo impedir que vuelva."
    },
    {
      "name": "Reflejar Conjuro",
      "cost": 4,
      "costText": "4 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura devuelve los efectos mágicos contra quienes intentan herirla.\nCUÁNDO: Como Reacción cuando un Conjuro dirigido que requiera tirada de ataque falla contra la criatura.\nQUÉ HACE: Refleja el Conjuro contra el lanzador original, resolviendo la tirada de ataque contra la Defensa del atacante."
    },
    {
      "name": "Resistencia Legendaria",
      "cost": 5,
      "costText": "5 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura posee una reserva excepcional de voluntad, cuerpo, destino o poder interno.\nCUÁNDO: Cuando falla una Salvación.\nQUÉ HACE: Puede convertir esa Salvación fallida en éxito.\nLímite:\nUna vez por combate.\nRestricción:\nDebe reservarse para criaturas de ND alto o criaturas que representen una amenaza excepcional dentro del sistema. No define a la criatura como jefe; solo indica que es difícil de someter con un único efecto decisivo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura rechaza un final que habría detenido a otra. No por suerte, sino porque su cuerpo, alma o historia todavía no cede."
    },
    {
      "name": "Tamaño Cambiante",
      "cost": 3,
      "costText": "3 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede alterar su tamaño dentro de límites definidos.\nCUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: La criatura puede aumentar o reducir su tamaño en una categoría.\nAl cambiar de tamaño, aplica los modificadores de tamaño correspondientes a Resistencia y Defensa. La Resistencia actual se ajusta en la misma cantidad que cambie la Resistencia máxima.\nDuración:\nDura 3 rondas.\nCierre:\nEl efecto termina antes si la criatura queda Inconsciente, si pierde el mecanismo de transformación o si decide volver a su tamaño normal como Acción Rápida en su turno.\nLímite:\nUna vez por combate.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo cambia de escala. Huesos, masa, sombra, armadura o energía se expanden o se contraen durante unos instantes."
    },
    {
      "name": "Tragar Entero",
      "cost": 4,
      "costText": "4 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura puede engullir a una presa y mantenerla atrapada dentro de su cuerpo.\nCUÁNDO: En su turno, como Acción Principal, contra una criatura Apresada de al menos una categoría de tamaño menor.\nQUÉ HACE: El objetivo debe superar una Salvación de Cuerpo contra ND 10 o es tragado.\nMientras esté tragado, el objetivo queda Inmovilizado, tiene cobertura total contra efectos externos y sufre 1d6 de daño Corrosivo al inicio de cada uno de sus turnos.\nEl objetivo puede intentar escapar como Acción Principal realizando una Salvación de Cuerpo contra ND 10. Si tiene éxito, sale a un espacio adyacente libre.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nCierre:\nEl efecto termina si el objetivo escapa, si la criatura cae a 0 de Resistencia o si una Conjuro, daño interno o condición definida permite abrir una salida.\nDESCRINiveles de ConjuroIÓN:\nLa presa deja de estar en el campo. Ahora pelea contra dientes internos, ácido, carne, sombra o una garganta que no termina."
    },
    {
      "name": "Último Aliento",
      "cost": 2,
      "costText": "2 PR",
      "category": "9. Rasgos Especiales",
      "text": "La criatura libera una última acción antes de caer.\nCUÁNDO: Cuando es reducida a 0 de Resistencia.\nQUÉ HACE: Antes de quedar fuera de combate, puede realizar inmediatamente una Acción Rápida o un ataque natural básico.\nEl ataque no suma Atributo al daño.\nLímite:\nUna vez por combate.\nRestricción:\nNo puede usar este rasgo si fue destruida de forma instantánea, desintegrada, anulada por una condición específica o si ya no conserva un cuerpo capaz de actuar.\nDESCRINiveles de ConjuroIÓN:\nLa criatura cae, pero todavía muerde, grita, golpea o termina una orden.\n10. Rasgos de Grupo, Hábitat y Equipo\nEstos rasgos representan criaturas que funcionan mejor en conjunto, que están adaptadas a un entorno concreto o que dependen de herramientas, armas, armaduras, focos, trampas o equipo especializado.\nNo reemplazan los rasgos ofensivos, defensivos, de movimiento o soporte. Sirven para cubrir aspectos de diseño que dependen del contexto natural de la criatura o de su relación con otros miembros de su grupo.\nRasgos de Grupo"
    },
    {
      "name": "Comunicación de Grupo",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura puede transmitir señales simples a otras criaturas compatibles sin usar lenguaje común.\nCUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: Puede comunicar órdenes simples, alertas, emociones básicas o ubicación de amenazas a aliados compatibles dentro de distancia Lejos.\nEsto permite coordinar emboscadas, retiradas, persecuciones o cambios de objetivo sin hablar.\nRestricción:\nDebe definirse el mecanismo: feromonas, vibraciones, chasquidos, mirada, canto, señales de cola, luces corporales, vínculo mental menor u otro sistema equivalente.\nCierre:\nEl rasgo deja de funcionar si el mecanismo de comunicación es bloqueado, si la criatura queda Inconsciente o si sus aliados no pueden percibir la señal.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no necesita palabras. Su grupo entiende señales breves, cambios de postura, olores, sonidos o impulsos que otros no interpretan."
    },
    {
      "name": "Alerta Compartida",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura reacciona a las señales de peligro emitidas por sus aliados.\nCUÁNDO: Cuando un aliado compatible a dentro de Lejos detecta una amenaza, emboscada o criatura oculta.\nQUÉ HACE: La criatura también queda alertada de la amenaza.\nEsto no revela detalles que el aliado no conozca. Solo transmite la existencia y dirección aproximada del peligro.\nRestricción:\nDebe existir un medio de comunicación compatible entre las criaturas.\nDESCRINiveles de ConjuroIÓN:\nSi uno del grupo nota el peligro, los demás se tensan. No todos entienden qué ocurre, pero saben que algo viene."
    },
    {
      "name": "Táctica de Manada",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura está entrenada o adaptada para atacar junto a otras.\nCUÁNDO: Cuando ataca a una criatura que está adyacente a un aliado consciente de la criatura.\nQUÉ HACE: Obtiene +1 a la tirada de ataque.\nRestricción:\nDebe tener sentido para la criatura: manada, escuadra, enjambre, jauría, grupo de caza, unidad militar, colmena o vínculo coordinado.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no pelea sola aunque esté atacando con su propio cuerpo. Sus aliados abren ángulos, cierran salidas y fuerzan errores."
    },
    {
      "name": "Cerco Coordinado",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura bloquea rutas de escape cuando actúa junto a sus aliados.\nCUÁNDO: Mientras un enemigo esté adyacente a la criatura y también adyacente a otro aliado consciente de la criatura.\nQUÉ HACE: Ese enemigo sufre −3 metros a su movimiento mientras permanezca en esa situación.\nCierre:\nEl efecto termina si el enemigo deja de estar adyacente a la criatura o al aliado, o si una de las criaturas que forman el cerco queda Inconsciente.\nDESCRINiveles de ConjuroIÓN:\nNo basta con correr. El grupo cierra huecos, corta pasos y obliga a la presa a moverse donde no quiere."
    },
    {
      "name": "Obediencia Absoluta",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura está condicionada, entrenada, programada o vinculada para seguir órdenes sin dudar.\nCUÁNDO: Cuando recibe una orden de una criatura o autoridad definida al crearla.\nQUÉ HACE: Tiene Ventaja en Salvaciones contra miedo, confusión, compulsión o efectos mentales que la obliguen a desobedecer esa orden.\nRestricción:\nDebe definirse quién o qué puede darle órdenes válidas: reina, amo, comandante, núcleo, tótem, patrón espiritual, señal alquímica, jerarquía de manada u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede sentir miedo o duda, pero su orden pesa más. Algo en ella fue hecho para obedecer."
    },
    {
      "name": "Mando Natural",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura puede dirigir a otras criaturas compatibles mediante instinto, autoridad, señales o vínculo.\nCUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Un aliado compatible visible o detectable a dentro de Lejos obtiene +1 a su próxima tirada antes del inicio del próximo turno de la criatura que dio la orden.\nSi el bono no se usa antes de ese momento, se pierde.\nRestricción:\nEl aliado debe poder percibir y entender la señal de mando.\nDESCRINiveles de ConjuroIÓN:\nUna mirada, olor, gesto o chasquido basta para corregir el movimiento de otro cuerpo.\nRasgos de Hábitat"
    },
    {
      "name": "Adaptación de Hábitat",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura está especialmente adaptada a un entorno concreto.\nCUÁNDO: Cuando realiza tiradas de Percepción, rastreo, orientación, ocultamiento o supervivencia dentro de su hábitat elegido.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nEl hábitat debe definirse al crear la criatura: bosque, pantano, caverna, desierto, montaña, tundra, costa, ruinas, ciudad, volcán, arrecife, cementerio, laboratorio, templo u otro entorno concreto.\nDESCRINiveles de ConjuroIÓN:\nLa criatura lee su entorno mejor que otras. Sabe dónde pisar, qué oler, qué sombra mirar y qué señales no ignorar."
    },
    {
      "name": "Dominio de Hábitat",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura conoce su entorno como una extensión de su cuerpo.\nCUÁNDO: Cuando realiza tiradas de Percepción, rastreo, orientación, ocultamiento o supervivencia dentro de su hábitat elegido.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nEl hábitat debe definirse al crear la criatura.\nNota:\nEste rasgo reemplaza Adaptación de Hábitat para el mismo entorno. No se suman.\nDESCRINiveles de ConjuroIÓN:\nEl hábitat no es solo su hogar. Es parte de su forma de cazar, esconderse, moverse y sobrevivir."
    },
    {
      "name": "Emboscador de Hábitat",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura usa su entorno natural para atacar desde posiciones favorables.\nCUÁNDO: Cuando ataca a una criatura que no la detectó previamente dentro de su hábitat elegido.\nQUÉ HACE: Obtiene +1 a la tirada de ataque y +1 al daño de ese ataque.\nRestricción:\nEl hábitat debe definirse al crear la criatura. La criatura debe haber estado oculta, camuflada o fuera de la atención del objetivo antes del ataque.\nDESCRINiveles de ConjuroIÓN:\nEl ataque viene desde donde el terreno parecía quieto: barro, sombra, maleza, roca, ruina, agua o multitud."
    },
    {
      "name": "Refugio Natural",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura sabe usar su entorno para cubrirse o reducir exposición.\nCUÁNDO: Mientras se encuentre dentro de su hábitat elegido y exista cobertura, irregularidad, vegetación, ruina, piedra, sombra, agua, humo, terreno elevado o elemento defensivo apropiado.\nQUÉ HACE: Obtiene +1 a Defensa.\nLímite:\nLa Defensa final de una criatura no puede superar 16.\nCierre:\nEl beneficio se pierde si la criatura abandona el hábitat elegido o queda en un espacio abierto sin elementos que justifiquen la protección.\nDESCRINiveles de ConjuroIÓN:\nLa criatura se pega al terreno. Donde otros quedan expuestos, ella encuentra borde, piedra, rama, grieta o sombra."
    },
    {
      "name": "Recuperación de Hábitat",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura se recupera mejor dentro de su entorno natural.\nCUÁNDO: Al inicio de su turno, mientras esté dentro de su hábitat elegido.\nQUÉ HACE: Recupera 2 puntos de Resistencia.\nLa recuperación no puede superar su Resistencia máxima.\nCierre:\nEl rasgo no funciona si la criatura está fuera de su hábitat, si el hábitat ha sido destruido o si una condición impide que pueda nutrirse, respirar o conectarse con ese entorno.\nDESCRINiveles de ConjuroIÓN:\nEl lugar la sostiene. Agua, sombra, raíces, calor, piedra, polvo o energía local ayudan a que su cuerpo siga funcionando.\nRasgos de Equipo"
    },
    {
      "name": "Uso de Equipo",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura puede usar armas, armaduras, herramientas o equipo fabricado de forma competente.\nCUÁNDO: Siempre activa.\nQUÉ HACE: La criatura puede usar equipo diseñado para su anatomía sin penalizadores.\nPuede portar armas, escudos, armaduras, herramientas, kits u objetos adecuados a su forma corporal.\nRestricción:\nEl tipo de equipo habitual debe definirse al crear la criatura.\nNota:\nEste rasgo no otorga equipo por sí mismo. Solo permite usarlo de forma competente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura entiende el equipo o fue hecha para usarlo. No pelea solo con cuerpo, sino también con herramientas."
    },
    {
      "name": "Arma Simple Incorporada",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee un arma simple integrada en su cuerpo.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura incorpora un arma simple a su anatomía, construcción o equipo permanente.\nEsa arma no puede ser desarmada por métodos normales y debe aparecer en la ficha como una de sus acciones de ataque.\nRestricción:\nEl arma debe ser equivalente a un arma simple del sistema y debe ser razonable para el cuerpo de la criatura: cuchilla implantada, aguijón metálico, porra ósea, lanza corporal simple, pinza armada, garra artificial, dardo natural endurecido u otra forma equivalente.\nDESCRINiveles de ConjuroIÓN:\nEl arma no se empuña. Es parte del cuerpo o está fijada a él."
    },
    {
      "name": "Arma Marcial Incorporada",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee un arma marcial integrada en su cuerpo.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura incorpora un arma marcial a su anatomía, construcción o equipo permanente.\nEsa arma no puede ser desarmada por métodos normales y debe aparecer en la ficha como una de sus acciones de ataque.\nRestricción:\nEl arma debe ser equivalente a un arma marcial del sistema y debe ser razonable para el cuerpo de la criatura: hoja pesada implantada, sierra de constructo, garra mecánica compleja, cañón orgánico, lanza retráctil, cadena integrada, mandíbula reforzada como arma marcial u otra forma equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura lleva un arma seria en el cuerpo. No es una garra común ni una protuberancia: es una herramienta de guerra integrada."
    },
    {
      "name": "Escudo Incorporado",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee una protección integrada que funciona como escudo.\nCUÁNDO: Siempre activa mientras conserve la pieza integrada.\nQUÉ HACE: La criatura obtiene +1 a Defensa.\nEste bono cuenta como defensa por escudo o pieza equipada, no como Armadura Natural.\nRestricción:\nDebe definirse la pieza: placa móvil, brazo escudo, caparazón usado activamente, lámina metálica, defensa ósea, panel de constructo, ala endurecida, pinza defensiva u otra forma equivalente.\nLa Defensa final no puede superar 16.\nNota:\nA diferencia de un escudo equipado común, este escudo no puede ser desarmado por métodos normales. Puede romperse si el rasgo, el cuerpo o la pieza integrada son dañados por un efecto apropiado.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo resiste con piel. Tiene una pieza hecha para cubrir, desviar o recibir golpes."
    },
    {
      "name": "Armadura Equipada",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura usa armadura fabricada, escudo o protección externa equipada.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: La criatura obtiene una armadura, escudo o protección equipada apropiada para su anatomía.\nEse equipo debe anotarse en la ficha y usa las reglas normales de equipo. Puede dañarse, romperse, corroerse, perderse o ser retirado si la situación lo permite.\nRestricción:\nLa criatura debe ser capaz de portar esa protección o haber sido diseñada para llevarla.\nNota:\nEste rasgo no reemplaza Armadura Natural. La Armadura Equipada puede perderse; la Armadura Natural forma parte del cuerpo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura lleva protección externa. Puede ser armadura hecha por artesanos, placas atadas, bardas, cuero endurecido, metal ritual o un escudo común."
    },
    {
      "name": "Herramienta Incorporada",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee una herramienta integrada en su cuerpo.\nCUÁNDO: Cuando usa esa herramienta para una acción apropiada.\nQUÉ HACE: Obtiene +1 a tiradas relacionadas con el uso de esa herramienta.\nRestricción:\nLa herramienta debe definirse al crear la criatura: pinza fina, inyector, compartimento, lámpara, garfio, cerradura interna, sonda, aguja, kit de reparación integrado u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa herramienta no está en una bolsa. Está en su cuerpo, su construcción o su anatomía."
    },
    {
      "name": "Foco Incorporado",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee un foco ritual, arcano, espiritual, alquímico o energético integrado en su cuerpo.\nCUÁNDO: Cuando usa una Conjuro o efecto que requiera foco, símbolo, núcleo o catalizador.\nQUÉ HACE: No puede ser desarmada de ese foco por métodos normales. Además, obtiene +1 a tiradas para mantener, canalizar o estabilizar efectos ligados a ese foco.\nRestricción:\nEl foco debe definirse al crear la criatura: cristal central, máscara ritual, sello grabado, núcleo de fuego, tótem incrustado, gema espiritual, marca divina u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nEl foco es parte de la criatura. Puede romperse, apagarse o corromperse, pero no basta con quitarle un objeto de la mano."
    },
    {
      "name": "Especialista en Arma",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura está entrenada o diseñada para usar un arma concreta.\nCUÁNDO: Cuando ataca con el arma elegida.\nQUÉ HACE: Obtiene +1 a las tiradas de ataque con esa arma.\nRestricción:\nEl arma debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo puede usar el arma. Fue entrenada, fabricada o adaptada para ese tipo de ataque."
    },
    {
      "name": "Herramienta Especializada",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura posee una herramienta, kit o instrumento que amplía sus acciones fuera del combate directo.\nCUÁNDO: Cuando usa la herramienta definida para una acción apropiada.\nQUÉ HACE: Obtiene +1 a tiradas relacionadas con esa herramienta.\nRestricción:\nLa herramienta debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura tiene una herramienta concreta y sabe usarla bien. No cubre un oficio completo, solo una función específica."
    },
    {
      "name": "Trampa Dañina",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura dispone de una trampa simple diseñada para herir.\nCUÁNDO: Al crear la criatura o en su turno como Acción Principal, si tiene materiales y espacio adecuados.\nQUÉ HACE: Coloca una trampa en un área de 3 metros.\nLa primera criatura enemiga que entre en esa área debe superar una Salvación de Destreza contra ND 10 o sufrir 1d6 de daño.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nLa trampa dura hasta activarse o hasta ser desarmada.\nLímite:\nLa criatura puede tener una Trampa Dañina activa a la vez.\nDESCRINiveles de ConjuroIÓN:\nLa trampa no busca atrapar. Busca cortar, pinchar, quemar, morder o castigar el paso."
    },
    {
      "name": "Trampa Derribadora",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura dispone de una trampa simple diseñada para hacer caer.\nCUÁNDO: Al crear la criatura o en su turno como Acción Principal, si tiene materiales y espacio adecuados.\nQUÉ HACE: Coloca una trampa en un área de 3 metros.\nLa primera criatura enemiga que entre en esa área debe superar una Salvación de Destreza contra ND 10 o queda Derribada.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nLa trampa dura hasta activarse o hasta ser desarmada.\nLímite:\nLa criatura puede tener una Trampa Derribadora activa a la vez.\nDESCRINiveles de ConjuroIÓN:\nLa trampa corta el paso, tira de la pierna, suelta una cuerda o vuelve falso el suelo."
    },
    {
      "name": "Trampa Inmovilizadora",
      "cost": 2,
      "costText": "2 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura dispone de una trampa diseñada para sujetar.\nCUÁNDO: Al crear la criatura o en su turno como Acción Principal, si tiene materiales y espacio adecuados.\nQUÉ HACE: Coloca una trampa en un área de 3 metros.\nLa primera criatura enemiga que entre en esa área debe superar una Salvación de Destreza contra ND 10 o queda Inmovilizada hasta el final de su próximo turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nLa trampa dura hasta activarse o hasta ser desarmada.\nLímite:\nLa criatura puede tener una Trampa Inmovilizadora activa a la vez.\nDESCRINiveles de ConjuroIÓN:\nLa trampa cierra, pega, atrapa o fija. No mata rápido, pero deja a la presa donde la criatura la quiere."
    },
    {
      "name": "Trampa de Entorpecimiento",
      "cost": 1,
      "costText": "1 PR",
      "category": "10. Rasgos de Grupo, Hábitat y Equipo",
      "text": "La criatura dispone de una trampa simple diseñada para frenar.\nCUÁNDO: Al crear la criatura o en su turno como Acción Principal, si tiene materiales y espacio adecuados.\nQUÉ HACE: Coloca una trampa en un área de 3 metros.\nLa primera criatura enemiga que entre en esa área debe superar una Salvación de Destreza contra ND 10 o reduce su movimiento en 3 metros hasta el final de su próximo turno.\nPotencia de Salvación:\nSi la criatura posee Potencia de Salvación, esta ND puede subir a 12 o 14.\nDuración:\nLa trampa dura hasta activarse o hasta ser desarmada.\nLímite:\nLa criatura puede tener una Trampa de Entorpecimiento activa a la vez.\nDESCRINiveles de ConjuroIÓN:\nLa trampa no detiene por completo. Basta con que haga perder tiempo, equilibrio o velocidad.\n11. Rasgos de Interacción, Presencia y Utilidad\nEstos rasgos cubren capacidades que no pertenecen directamente al combate, movimiento, defensa, soporte o control de terreno.\nSirven para criaturas que tienen presencia social, inteligencia práctica, rasgos intimidantes, capacidades comunicativas, memoria, autoridad natural, belleza perturbadora, talento para engañar, utilidad de oficio, conocimiento instintivo o funciones especiales fuera del combate.\nUn rasgo de esta categoría debe indicar con claridad en qué tipo de tiradas aplica. No debe dar bonos amplios a “todo lo social” ni reemplazar Conceptos. Debe reforzar una forma concreta en que la criatura interactúa con el mundo."
    },
    {
      "name": "Presencia Intimidante",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura posee rasgos físicos, voz, tamaño, postura, mirada, cicatrices, olor, aura o reputación que la vuelven naturalmente intimidante.\nCUÁNDO: Cuando realiza tiradas para intimidar, amenazar, imponer presencia o hacer retroceder a una criatura mediante miedo directo.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nDebe definirse qué produce la intimidación: tamaño, rostro, rugido, cráneo expuesto, marcas de depredador, aura oscura, fama, armadura, olor a sangre u otro elemento claro.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no necesita explicar la amenaza. Su cuerpo, voz o presencia ya la anuncia."
    },
    {
      "name": "Presencia Dominante",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura impone autoridad con facilidad. No solo asusta: obliga a otros a prestar atención.\nCUÁNDO: Cuando realiza tiradas para intimidar, ordenar, imponerse, exigir obediencia o controlar una conversación desde una posición de autoridad.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nDebe definirse el origen de la autoridad: jerarquía de manada, nobleza, porte militar, mandato espiritual, voz sobrenatural, tamaño, feromonas de mando, presencia divina, programación de comando u otro mecanismo equivalente.\nNota:\nEste rasgo no obliga a obedecer automáticamente. Solo mejora tiradas donde la criatura intenta imponer su voluntad de forma directa.\nDESCRINiveles de ConjuroIÓN:\nLa criatura ocupa espacio incluso cuando no se mueve. Otros cuerpos entienden que conviene escucharla."
    },
    {
      "name": "Apariencia Confiable",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura posee rasgos que facilitan que otros bajen la guardia: rostro amable, voz suave, apariencia inocente, conducta domesticada, gestos familiares, belleza tranquila o aspecto inofensivo.\nCUÁNDO: Cuando realiza tiradas para calmar, persuadir, pedir ayuda, parecer inofensiva o generar confianza inicial.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nEl rasgo no funciona si la criatura ya atacó, amenazó o mostró una conducta claramente hostil ante el objetivo durante la misma interacción.\nDESCRINiveles de ConjuroIÓN:\nAlgo en la criatura invita a no levantar el arma de inmediato."
    },
    {
      "name": "Encanto Natural",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura tiene una presencia atractiva, magnética o emocionalmente envolvente.\nCUÁNDO: Cuando realiza tiradas para persuadir, agradar, seducir, fascinar socialmente, entretener o conseguir buena disposición sin usar control mental.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nDebe definirse el mecanismo: belleza, voz, danza, plumaje, perfume, gestos, carisma, luz suave, canto, gracia corporal o presencia sobrenatural.\nNota:\nEste rasgo no permite controlar la mente ni imponer estados alterados por sí mismo. Para eso se usan rasgos como Influencia Mental, Aura Encantadora u otros efectos con Salvación.\nDESCRINiveles de ConjuroIÓN:\nLa criatura atrae atención. No obliga, pero hace que escucharla parezca una buena idea."
    },
    {
      "name": "Rostro Inquietante",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura tiene una apariencia difícil de interpretar o profundamente incómoda.\nCUÁNDO: Cuando una criatura intenta leer sus emociones, intenciones inmediatas o estado anímico mediante observación social.\nQUÉ HACE: La criatura que intenta leerla sufre −1 a esa tirada.\nRestricción:\nDebe definirse el rasgo: rostro inmóvil, máscara natural, ojos múltiples, sonrisa fija, ausencia de expresión, rostro cadavérico, cara animal, piel sin gestos, voz plana u otro elemento equivalente.\nDESCRINiveles de ConjuroIÓN:\nMirarla no ayuda. Su cara no entrega las pistas que debería entregar."
    },
    {
      "name": "Voz Hipnótica",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La voz, canto, zumbido o ritmo verbal de la criatura facilita que otros la escuchen y sigan el hilo de sus palabras.\nCUÁNDO: Cuando realiza tiradas sociales mediante voz, canto, discurso, relato, negociación o sugestión no mágica.\nQUÉ HACE: Obtiene +1 a la tirada. Si el objetivo no puede oírla, el rasgo no aplica.\nRestricción:\nDebe definirse el mecanismo vocal: canto, tono grave, zumbido, eco, ritmo, vibración, armonía, voz doble, timbre sobrenatural u otro equivalente.\nNota:\nEste rasgo no impone estados mentales. Si la voz causa Fascinado, Asustado, Controlado u otro estado, debe usarse un rasgo con Salvación.\nDESCRINiveles de ConjuroIÓN:\nLa voz tira de la atención. Quien la oye tarda un poco más en cortar la conversación."
    },
    {
      "name": "Imitador de Voces",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura puede imitar voces, sonidos, llamadas, palabras, llantos, rugidos o señales auditivas.\nCUÁNDO: Cuando intenta engañar, atraer, confundir o comunicarse imitando un sonido que haya escuchado antes.\nQUÉ HACE: Tiene Ventaja en tiradas para imitar ese sonido de forma convincente.\nRestricción:\nNo permite conocer idiomas, recuerdos, claves o información que la criatura no posea. Solo imita el sonido.\nDESCRINiveles de ConjuroIÓN:\nLa criatura repite lo que oyó. Puede sonar como una persona, una presa, una cría, una orden o una puerta vieja abriéndose."
    },
    {
      "name": "Memoria Exacta",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura recuerda con precisión lugares, rostros, olores, sonidos, rutas, patrones o instrucciones.\nCUÁNDO: Cuando realiza tiradas para recordar información que haya percibido directamente.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nDebe definirse qué tipo de memoria destaca: rutas, rostros, olores, voces, símbolos, mapas, presas, órdenes, rituales o patrones.\nDESCRINiveles de ConjuroIÓN:\nLa criatura conserva detalles que otros olvidarían: un olor viejo, un símbolo torcido, un paso escuchado una vez."
    },
    {
      "name": "Memoria Perfecta",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura conserva información con una precisión anormal.\nCUÁNDO: Cuando realiza tiradas para recordar información que haya percibido directamente.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nEste rasgo reemplaza Memoria Exacta para el mismo campo de memoria. No se suman.\nDebe definirse qué tipo de memoria destaca.\nDESCRINiveles de ConjuroIÓN:\nLo que la criatura percibe queda grabado con una claridad incómoda."
    },
    {
      "name": "Olfato Social",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura detecta cambios corporales, olor, tensión, sudor, respiración, miedo o excitación emocional.\nCUÁNDO: Cuando intenta percibir miedo, nerviosismo, agresividad, enfermedad visible, deseo de huir o tensión emocional mediante señales corporales.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nNo lee pensamientos ni revela mentiras complejas por sí mismo. Solo detecta señales corporales o emocionales.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo ajeno habla aunque la boca mienta. La criatura huele o nota esa diferencia."
    },
    {
      "name": "Lectura Instintiva",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura interpreta instintivamente postura, respiración, mirada, olor, tono o microgestos.\nCUÁNDO: Cuando intenta leer intenciones inmediatas, detectar hostilidad, anticipar traición o notar miedo en una criatura presente.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nNo revela planes complejos, recuerdos, pensamientos ocultos ni información que no se manifieste en conducta observable.\nDESCRINiveles de ConjuroIÓN:\nLa criatura sabe cuándo un cuerpo está por huir, mentir, atacar o quebrarse."
    },
    {
      "name": "Rastreador Social",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura puede seguir rastros sociales: rumores, movimientos de grupos, señales de paso, marcas de gremio, patrones de comercio, olores de multitud o huellas de actividad urbana.\nCUÁNDO: Cuando intenta seguir a una persona o grupo dentro de un asentamiento, mercado, campamento, puerto, caravana o zona habitada.\nQUÉ HACE: Obtiene +1 a tiradas para rastrear, ubicar o reconstruir el paso de ese objetivo en entornos sociales.\nRestricción:\nDebe definirse el método principal: olfato, lectura de multitudes, contactos, marcas, patrones de comercio, residuos, pisadas, rumores o señales urbanas.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no busca huellas en barro. Busca compras, miradas, rumores, olores, marcas y silencios."
    },
    {
      "name": "Oficio Natural",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura posee una función práctica o productiva incorporada a su biología, crianza, programación o entrenamiento.\nCUÁNDO: Cuando realiza una tarea concreta de oficio definida al crear la criatura.\nQUÉ HACE: Obtiene +1 a tiradas relacionadas con esa tarea.\nRestricción:\nLa tarea debe ser específica: cavar túneles, hilar seda, producir tinta, limpiar heridas, detectar minerales, clasificar objetos, transportar carga, vigilar puertas, encender hornos, fabricar nidos, reparar piezas simples u otra función clara.\nNota:\nEste rasgo no reemplaza un Concepto completo. Solo cubre una tarea concreta.\nDESCRINiveles de ConjuroIÓN:\nLa criatura tiene una utilidad concreta fuera del combate. Su cuerpo o entrenamiento fue hecho para eso."
    },
    {
      "name": "Auxiliar de Oficio",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura está adaptada para cumplir una función práctica con eficacia notable.\nCUÁNDO: Cuando realiza una tarea concreta de oficio definida al crear la criatura.\nQUÉ HACE: Tiene Ventaja en tiradas relacionadas con esa tarea.\nRestricción:\nEste rasgo reemplaza Oficio Natural para la misma tarea. No se suman.\nLa tarea debe ser específica y estar definida al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo ayuda en una tarea. Está hecha para realizarla bien."
    },
    {
      "name": "Carga Poderosa",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura está adaptada para cargar, arrastrar o transportar peso.\nCUÁNDO: Cuando realiza tiradas para cargar peso, arrastrar objetos, mover carga, tirar de vehículos o resistir agotamiento por transporte.\nQUÉ HACE: Obtiene +1 a esas tiradas.\nRestricción:\nNo aumenta su daño ni su capacidad de combate. Solo aplica a esfuerzo físico utilitario relacionado con carga.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede llevar peso, tirar carros, arrastrar presas o soportar carga mejor que otras de su tamaño."
    },
    {
      "name": "Cargador Mayor",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura posee fuerza, estructura corporal o resistencia diseñada para transporte pesado.\nCUÁNDO: Cuando realiza tiradas para cargar peso, arrastrar objetos, mover carga, tirar de vehículos o resistir agotamiento por transporte.\nQUÉ HACE: Tiene Ventaja en esas tiradas.\nRestricción:\nEste rasgo reemplaza Carga Poderosa para tareas de transporte. No se suman.\nNo aumenta su daño ni su capacidad de combate.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede ser usada como bestia de carga, motor vivo, arrastrador de piezas o transporte pesado."
    },
    {
      "name": "Apariencia Inofensiva",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura parece menos peligrosa de lo que realmente es.\nCUÁNDO: Cuando una criatura intenta evaluar si representa una amenaza antes de verla atacar o usar una capacidad peligrosa.\nQUÉ HACE: La criatura que evalúa su amenaza sufre −1 a esa tirada.\nCierre:\nEl rasgo deja de aplicar ante criaturas que ya hayan visto a la criatura atacar, usar Conjuros ofensivas o revelar su verdadera capacidad.\nDESCRINiveles de ConjuroIÓN:\nParece débil, tierna, torpe, vieja, enferma o demasiado pequeña para ser un problema. Hasta que deja de parecerlo."
    },
    {
      "name": "Presencia Noble",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura posee porte, señales, ornamentos, postura, olor, marcas, voz o comportamiento asociado a jerarquía.\nCUÁNDO: Cuando interactúa con criaturas capaces de reconocer esa jerarquía.\nQUÉ HACE: Obtiene +1 a tiradas para exigir respeto, solicitar audiencia, reclamar autoridad o actuar dentro de una estructura jerárquica.\nRestricción:\nLa jerarquía debe definirse al crear la criatura: nobleza, casta, rango militar, manada, culto, colmena, autoridad espiritual, linaje, gremio, corte o mandato artificial.\nDESCRINiveles de ConjuroIÓN:\nLa criatura lleva señales de rango. No siempre son coronas o joyas; a veces son olor, cicatrices, postura o coloración."
    },
    {
      "name": "Señal de Advertencia",
      "cost": 1,
      "costText": "1 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura puede comunicar peligro sin atacar: colores vivos, siseo, cresta, chasquidos, luz, olor, postura, amenaza ritual o marcas visibles.\nCUÁNDO: Cuando intenta advertir, disuadir, marcar territorio o evitar un conflicto mediante amenaza no verbal.\nQUÉ HACE: Obtiene +1 a tiradas para disuadir acercamientos, evitar ataques inmediatos o comunicar que cruzar cierto límite tendrá consecuencias.\nRestricción:\nSolo funciona ante criaturas capaces de percibir e interpretar la señal como advertencia.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo de la criatura dice “no sigas” antes de que empiece la violencia."
    },
    {
      "name": "Presencia Perturbadora",
      "cost": 2,
      "costText": "2 PR",
      "category": "11. Rasgos de Interacción, Presencia y Utilidad",
      "text": "La criatura altera la calma de quienes intentan tratar con ella.\nCUÁNDO: Cuando una criatura intenta persuadirla, engañarla, calmarla o negociar con ella.\nQUÉ HACE: La criatura que intenta la interacción sufre −1 a esa tirada.\nRestricción:\nDebe definirse el origen de la perturbación: mirada fija, olor a muerte, voz quebrada, movimientos antinaturales, aura opresiva, silencio absoluto, rostro inexpresivo u otro elemento claro.\nDESCRINiveles de ConjuroIÓN:\nHablar con ella resulta incómodo. La criatura no necesita amenazar para volver difícil la conversación.\n12. Rasgos de Conjuros\nEstos rasgos modifican la relación de una criatura con sus Conjuros.\nPueden representar entrenamiento, biología canalizadora, núcleos energéticos, afinidad elemental, corrupción interna, torpeza ritual, inestabilidad mágica, cuerpos mal adaptados al uso de poder o criaturas creadas específicamente para resistir una Fuerza.\nEstos rasgos no entregan Conjuros por sí mismos salvo que lo indiquen. Para obtener Niveles de Conjuro adicionales, se usa Afinidad con Conjuros."
    },
    {
      "name": "Potencia de Salvación",
      "cost": 1,
      "costText": "1 PR por compra, máximo 2",
      "category": "1. Rasgos de Desarrollo, Conceptos y Naturalezas",
      "text": "Primera compra: la ND de Salvación de sus rasgos aumenta a 12. Segunda compra: la sube a 14. Solo afecta rasgos que indiquen expresamente que pueden beneficiarse de Potencia de Salvación."
    },
    {
      "name": "Canalización Eficiente",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura gasta menos energía vital al proyectar magia.\nCUÁNDO: Cuando lanza un Conjuro.\nQUÉ HACE: Reduce en 1 el coste de Resistencia de sus Conjuros (mínimo 1 punto de Resistencia).\nDESCRIPCIÓN: Su anatomía, flujo interno o estructura mística le permite canalizar poder con un desgaste menor del habitual."
    },
    {
      "name": "Canalización Superior",
      "cost": 3,
      "costText": "3 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura domina la economía de su propia energía con maestría consumada.\nCUÁNDO: Cuando lanza un Conjuro.\nQUÉ HACE: Reduce en 2 el coste de Resistencia de sus Conjuros (mínimo 1 punto de Resistencia).\nRestricción: Reemplaza Canalización Eficiente, no se acumula con ella.\nDESCRIPCIÓN: Canaliza con fluidez casi sin fricción interna."
    },
    {
      "name": "Conjuro Preciso",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura dirige sus efectos mágicos con puntería quirúrgica.\nCUÁNDO: Cuando realiza la tirada de ataque asociada a un Conjuro definido al elegir este rasgo.\nQUÉ HACE: Obtiene +1 a la tirada de ataque de ese Conjuro.\nDESCRIPCIÓN: La descarga o rayo encuentra las aberturas defensivas del blanco sin dispersarse."
    },
    {
      "name": "Conjuro Imponente",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La potencia del Conjuro desborda las defensas del objetivo.\nCUÁNDO: Cuando un objetivo realiza una Salvación contra un Conjuro definido al elegir este rasgo.\nQUÉ HACE: La ND de Salvación de ese Conjuro aumenta en +1.\nDESCRIPCIÓN: El peso sobrenatural del efecto resulta abrumador y más difícil de esquivar o resistir."
    },
    {
      "name": "Conjuro Brutal",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "El Conjuro golpea con violencia física o destructiva incrementada.\nCUÁNDO: Cuando inflige daño directo con un Conjuro definido.\nQUÉ HACE: Inflige +2 de daño adicional si el Conjuro impacta o si el objetivo falla su Salvación.\nDESCRIPCIÓN: La energía mágica desgarra y rompe más allá de la fuerza natural del hechizo."
    },
    {
      "name": "Conjuro Sostenido",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura ancla sus efectos en el entorno con mayor persistencia.\nCUÁNDO: Al lanzar un Conjuro que posea duración sostenida o temporal.\nQUÉ HACE: Extiende la duración en +1 ronda adicional (o +1 turno / +5 minutos según la escala del Conjuro).\nDESCRIPCIÓN: La manifestación mágica se rehúsa a disiparse y conserva su resonancia en el área."
    },
    {
      "name": "Conjuro Instintivo",
      "cost": 1,
      "costText": "1 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La magia brota como un reflejo involuntario o natural de la criatura.\nCUÁNDO: En su turno.\nQUÉ HACE: Un Conjuro de Nivel I definido al crear la criatura puede lanzarse como Acción Rápida en lugar de Acción Principal.\nLímite: Una vez por ronda.\nDESCRIPCIÓN: La criatura no necesita concentrarse para invocar este poder elemental o arcano."
    },
    {
      "name": "Conjuro Reactivo",
      "cost": 3,
      "costText": "3 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura responde al peligro liberando magia de represalia o escape.\nCUÁNDO: Como Reacción al recibir daño o ser objetivo de un ataque.\nQUÉ HACE: Puede activar inmediatamente un Conjuro defensivo o de escape definido de Nivel I o II.\nDESCRIPCIÓN: Al recibir un golpe, se detona una niebla, un escudo de choque o un parpadeo sombrío."
    },
    {
      "name": "Reserva de Conjuro",
      "cost": 3,
      "costText": "3 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura almacena energía mística en un órgano especial, gema interna o núcleo.\nCUÁNDO: Al lanzar Conjuros.\nQUÉ HACE: Posee una reserva dedicada de 6 puntos de Resistencia que solo pueden gastarse para pagar el coste de Conjuros.\nDESCRIPCIÓN: Su cuerpo preserva una fuente de poder separada de su vitalidad física básica."
    },
    {
      "name": "Reserva de Conjuro Elemental",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura guarda una afinidad condensada con una Energía o Elemento específico.\nCUÁNDO: Al lanzar Conjuros de la Energía o Elemento elegido.\nQUÉ HACE: Posee una reserva de 6 puntos de Resistencia que solo puede usarse para pagar Conjuros de esa categoría concreta.\nDESCRIPCIÓN: Un horno ígneo, una glándula de veneno o una chispa tempestuosa alimenta sus conjuros nativos."
    },
    {
      "name": "Afinidad con una Energía",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura está en armonía con una de las Energías primordiales (Destrucción, Conservación, Transformación, Creación, Orden, Caos).\nCUÁNDO: Al recibir daño proveniente de un Conjuro de la Energía elegida.\nQUÉ HACE: Recibe solo la mitad del daño de ese Conjuro (redondeando hacia abajo).\nDESCRIPCIÓN: Las ondas de esa energía resuenan con su estructura y pierden fuerza destructiva al tocarla."
    },
    {
      "name": "Absorción de una Energía",
      "cost": 4,
      "costText": "4 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La energía mágica es alimento para la criatura.\nCUÁNDO: Al ser impactada por un Conjuro de la Energía elegida.\nQUÉ HACE: Es completamente inmune al daño de esa Energía y recupera Resistencia igual a la mitad del daño que habría recibido (hasta su máximo).\nPrerequisito: Afinidad con una Energía.\nDESCRIPCIÓN: Respira, devora o canaliza el ataque mágico para revitalizar su propio organismo."
    },
    {
      "name": "Afinidad con un Elemento",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura sintoniza con una Afinidad elemental concreta (Fuego, Agua, Madera, Metal, Tierra, etc.).\nCUÁNDO: Al recibir daño de un Conjuro con esa Afinidad elemental.\nQUÉ HACE: Recibe la mitad del daño del Conjuro.\nDESCRIPCIÓN: Las llamas, la escarcha o los relámpagos de ese elemento fluyen a su alrededor sin penetrar del todo."
    },
    {
      "name": "Absorción de un Elemento",
      "cost": 4,
      "costText": "4 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La criatura transmuta el elemento agresor en vigor vital.\nCUÁNDO: Al recibir daño de un Conjuro con la Afinidad elemental elegida.\nQUÉ HACE: Inmune al daño y recupera Resistencia igual a la mitad del daño recibido.\nPrerequisito: Afinidad con un Elemento.\nDESCRIPCIÓN: Bebe fuego o se nutre del rayo como si fuera savia pura."
    },
    {
      "name": "Doble Concentración",
      "cost": 3,
      "costText": "3 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La mente dividida de la criatura soporta mantener múltiples patrones de magia.\nCUÁNDO: Al sostener Conjuros que requieran concentración.\nQUÉ HACE: Puede mantener activos hasta dos Conjuros de Concentración al mismo tiempo.\nDESCRIPCIÓN: Mantiene dos efectos continuos a la vez sin que uno cancele al otro."
    },
    {
      "name": "Refuerzo por Conjuro",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La descarga mágica deja una película defensiva residual.\nCUÁNDO: Tras lanzar un Conjuro en su turno.\nQUÉ HACE: Obtiene +1 a Defensa hasta el inicio de su próximo turno.\nDESCRIPCIÓN: Un halo de estática, calor o distorsión espacial la protege momentáneamente."
    },
    {
      "name": "Hambre de Conjuro",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "Lanzar un conjuro sobrecarga sus garras, fauces o extremidades.\nCUÁNDO: En el mismo turno tras haber lanzado un Conjuro.\nQUÉ HACE: Su próximo ataque natural cuerpo a cuerpo inflige +1d6 de daño adicional.\nDESCRIPCIÓN: La energía residual se proyecta en su siguiente mordisco o zarpazo."
    },
    {
      "name": "Conjuro Seguro",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "El cuerpo de la criatura resiste el contragolpe de su propio poder.\nCUÁNDO: Al enfrentar tiradas o salvaciones por fallo, inestabilidad o retroceso de sus propios conjuros.\nQUÉ HACE: Tiene Ventaja en dichas tiradas o salvaciones.\nDESCRIPCIÓN: Conoce los límites de su canalización y evita que la energía le estalle en las manos."
    },
    {
      "name": "Ecos de Conjuro",
      "cost": 2,
      "costText": "2 PR",
      "category": "12. Rasgos de Conjuros",
      "text": "La magia agresiva deja al enemigo vulnerable al remate físico.\nCUÁNDO: Tras impactar a un objetivo con un Conjuro de daño directo.\nQUÉ HACE: Su siguiente ataque natural contra ese mismo objetivo antes de finalizar su turno inflige +2 de daño.\nDESCRIPCIÓN: Golpea en la carne chamuscada, entumecida o agrietada por el conjuro previo."
    }
  ],
  "disadvantages": [
    {
      "name": "Torpeza Sensorial",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura tiene un sentido limitado, atrofiado, confuso o poco confiable.\nCUÁNDO: Cuando realiza tiradas de Percepción usando el sentido elegido.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nRestricción:\nEl sentido afectado debe definirse al crear la criatura: vista, oído, olfato, tacto, percepción térmica, percepción espiritual u otro sentido relevante.\nCierre:\nNo aplica si la criatura usa otro sentido no afectado para percibir el mismo estímulo.\nDESCRINiveles de ConjuroIÓN:\nLa criatura percibe mal una parte del mundo. Puede ver borroso, oír poco, no detectar olores, confundir vibraciones o interpretar mal señales que otras criaturas notarían de inmediato."
    },
    {
      "name": "Movimiento Lento",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura es torpe o lenta de desplazamiento.\nCUÁNDO: Siempre activa.\nQUÉ HACE: La criatura no puede beneficiarse de ningún efecto que aumente su Movimiento por encima de Cerca. Además, sufre Desventaja en tiradas de persecución o huida."
    },
    {
      "name": "Cuerpo Ruidoso",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura hace demasiado ruido al moverse o existir.\nCUÁNDO: Cuando intenta ocultarse, moverse en silencio, emboscar o pasar desapercibida mediante silencio físico.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nSi el ruido hace imposible el sigilo en una situación concreta, el Director de Juego puede determinar que la criatura no puede intentar la tirada.\nRestricción:\nDebe definirse el origen del ruido: placas que chocan, respiración pesada, chasquidos, cadenas, zumbido, goteo, crujidos, maquinaria, huesos, olor acompañado de moscas u otro rasgo claro.\nDESCRINiveles de ConjuroIÓN:\nLa criatura anuncia su presencia incluso cuando intenta evitarlo."
    },
    {
      "name": "Aversión a la Luz",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La luz intensa interfiere con la criatura.\nCUÁNDO: Mientras esté bajo luz intensa, luz solar directa o una fuente de iluminación equivalente definida por el Diseñador.\nQUÉ HACE: Tiene Desventaja en tiradas de ataque y Percepción basadas en la vista.\nCierre:\nEl efecto termina cuando la criatura sale de la luz intensa, se cubre, entra en sombra suficiente o la fuente de luz desaparece.\nDESCRINiveles de ConjuroIÓN:\nLa luz hiere sus ojos, quema su piel, desordena su percepción o la obliga a moverse con incomodidad."
    },
    {
      "name": "Dependencia Elemental",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura necesita contacto frecuente con un elemento, sustancia o condición ambiental para mantenerse estable.\nCUÁNDO: Si pasa más de 3 rondas completas sin contacto con el elemento definido.\nQUÉ HACE: Al inicio de cada uno de sus turnos, sufre 1d6 de daño.\nEl tipo de daño debe definirse al crear la criatura según la naturaleza de la dependencia.\nCierre:\nEl daño deja de aplicarse cuando la criatura vuelve a estar en contacto con el elemento requerido.\nRestricción:\nEl elemento o condición debe definirse al crear la criatura: agua, fuego, sombra, tierra, aire puro, frío, calor, electricidad, corrupción, luz, oscuridad, sangre, metal, humedad u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo prefiere ese elemento. Lo necesita. Sin él, su cuerpo se seca, apaga, deshace, enfría, quema o pierde cohesión."
    },
    {
      "name": "Instinto Compulsivo",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura posee un impulso instintivo fuerte ante un estímulo concreto.\nCUÁNDO: Cuando percibe el estímulo definido y no está bajo una amenaza inmediata más importante.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10. Si falla, durante su turno debe dedicar su Acción Principal a acercarse al estímulo, alejarse de él, protegerlo, atacarlo o investigarlo, según se defina al crear la criatura.\nDuración:\nEl impulso dura hasta el final de ese turno.\nCierre:\nEl efecto termina antes si el estímulo desaparece, deja de ser detectable o una amenaza directa obliga a la criatura a responder para sobrevivir.\nRestricción:\nEl estímulo y la conducta deben definirse al crear la criatura.\nEjemplos:\nHuir del fuego.\nProteger huevos.\nPerseguir sangre fresca.\nAtacar luces brillantes.\nInvestigar objetos metálicos.\nDefender a una reina.\nComer carroña visible.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no siempre decide con calma. Hay estímulos que la arrastran a actuar, aunque no sea la opción más inteligente."
    },
    {
      "name": "Canalización Costosa",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura gasta más energía de lo normal al usar Conjuros.\nCUÁNDO: Cuando paga el coste de Resistencia de una Conjuro.\nQUÉ HACE: El coste de Resistencia de sus Conjuros aumenta en 1.\nRestricción:\nSolo puede tomarse si la criatura posee al menos una Conjuro.\nDESCRINiveles de ConjuroIÓN:\nEl poder no fluye limpio. Cada Conjuro exige más respiración, sangre, calor, memoria, energía o estabilidad de la que debería."
    },
    {
      "name": "Conjuro Impreciso",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura carece de puntería al proyectar magia.\nCUÁNDO: Al realizar una tirada de ataque con un Conjuro.\nQUÉ HACE: Sufre −1 a la tirada de ataque del Conjuro."
    },
    {
      "name": "Conjuro Lento",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La magia de la criatura requiere preparación pesada.\nCUÁNDO: Al lanzar Conjuros.\nQUÉ HACE: No puede lanzar Conjuros de Tipo Reacción ni Rápida. Si adquiere o conoce uno, debe lanzarlo como Acción Principal."
    },
    {
      "name": "Vulnerable a una Energía",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura es especialmente susceptible a una de las Energías mágicas (Destrucción, Conservación, Transformación, Creación, Orden, Caos).\nCUÁNDO: Al recibir daño de un Conjuro perteneciente a la Energía elegida.\nQUÉ HACE: Sufre +1d6 de daño adicional."
    },
    {
      "name": "Debilidad de Sostén",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura pierde el control de sus efectos continuos al ser castigada.\nCUÁNDO: Si mantiene un Conjuro con Duración sin Concentración y recibe daño.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10 o el Conjuro termina de inmediato."
    },
    {
      "name": "Conjuro Condicionado",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura solo puede liberar su magia bajo circunstancias específicas.\nCUÁNDO: Al intentar usar Conjuros.\nQUÉ HACE: Mientras no se cumpla la condición definida (ej: solo de noche, solo en su guarida, solo herida, solo tras canalizar 1 turno), no puede usar Conjuros."
    },
    {
      "name": "Ceguera en Oscuridad",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura ve muy mal en ausencia de luz.\nCUÁNDO: Mientras esté en oscuridad total o penumbra intensa.\nQUÉ HACE: Tiene Desventaja en tiradas de Percepción basadas en la vista y en ataques que dependan de ver al objetivo.\nCierre:\nTermina cuando entra en una zona suficientemente iluminada o usa otro sentido capaz de sustituir la vista.\nDESCRINiveles de ConjuroIÓN:\nLa oscuridad le roba forma al mundo. Sin luz, la criatura duda, falla distancias y pierde detalles."
    },
    {
      "name": "Cuerpo Seco",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura se deteriora en calor, sequedad o ambientes áridos.\nCUÁNDO: Mientras permanezca en un ambiente seco, desértico, muy caluroso o sin humedad suficiente durante 3 rondas completas.\nQUÉ HACE: Sufre −1 a sus tiradas de Cuerpo y Destreza mientras siga en ese ambiente.\nCierre:\nEl efecto termina cuando recupera humedad, entra en agua, sombra húmeda, lluvia, pantano o un entorno adecuado.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo se agrieta, se tensa o se vuelve torpe cuando pierde humedad."
    },
    {
      "name": "Cuerpo Empapado",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura funciona mal al mojarse.\nCUÁNDO: Mientras esté empapada, sumergida o bajo lluvia intensa.\nQUÉ HACE: Sufre −1 a sus tiradas de ataque y a tiradas relacionadas con movimiento preciso.\nCierre:\nEl efecto termina cuando se seca o sale del ambiente que la empapa.\nDESCRINiveles de ConjuroIÓN:\nEl agua pesa, apaga, hincha, enfría o vuelve torpe aquello que mantiene estable a la criatura."
    },
    {
      "name": "Reacción al Dolor",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura pierde precisión cuando recibe daño.\nCUÁNDO: Después de recibir daño.\nQUÉ HACE: Sufre −1 a su próxima tirada de ataque antes del final de su próximo turno.\nLímite:\nEste penalizador no se acumula consigo mismo.\nDESCRINiveles de ConjuroIÓN:\nEl dolor la distrae. No la detiene, pero ensucia su próximo golpe."
    },
    {
      "name": "Fobia Específica",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura teme un estímulo concreto.\nCUÁNDO: Cuando percibe el estímulo definido a dentro de Lejos.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10 o queda Asustada hasta el final de su turno.\nRestricción:\nEl estímulo debe definirse al crear la criatura: fuego, luz, metal, sangre, agua profunda, símbolos sagrados, cadáveres, depredadores, sonido agudo u otro elemento concreto.\nDESCRINiveles de ConjuroIÓN:\nAlgo específico atraviesa su instinto. Puede ser irracional, heredado, programado o aprendido."
    },
    {
      "name": "Naturaleza Inflexible",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "La criatura solo actúa bien usando su Naturaleza principal.\nCUÁNDO: Cuando intenta justificar una acción con una Naturaleza distinta a su Naturaleza principal.\nQUÉ HACE: Sufre −1 a esa tirada.\nRestricción:\nSolo debe usarse en criaturas inteligentes, entrenadas o complejas que podrían cambiar de enfoque, pero que tienen una conducta rígida.\nDESCRINiveles de ConjuroIÓN:\nLa criatura sabe actuar de una manera. Cuando intenta desviarse de esa forma, pierde claridad."
    },
    {
      "name": "Conjuro Ruidoso",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "Sus conjuros emiten estallidos, silbidos o destellos imposibles de disimular.\nCUÁNDO: Tras lanzar un Conjuro.\nQUÉ HACE: No puede beneficiarse de Sigilo, Camuflaje ni Mimetismo hasta el inicio de su próximo turno."
    },
    {
      "name": "Dolor de Movimiento",
      "pr": 1,
      "category": "13. Desventajas Menores",
      "text": "Moverse demasiado fuerza el cuerpo de la criatura.\nCUÁNDO: Si la criatura se mueve más de distancia Cerca durante su turno.\nQUÉ HACE: Sufre −1 a su próxima tirada antes del final de su próximo turno.\nCierre:\nEl penalizador se pierde si no se usa antes del final de su próximo turno.\nDESCRINiveles de ConjuroIÓN:\nCada desplazamiento largo tira de tendones, placas, heridas, engranajes o articulaciones mal formadas.\n14. Desventajas Medias\nLas desventajas medias otorgan +2 PR.\nRepresentan limitaciones importantes. Afectan de forma frecuente a la criatura, condicionan su forma de actuar o crean una debilidad clara que los personajes pueden explotar."
    },
    {
      "name": "Sin Reacción",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura reacciona mal ante oportunidades rápidas, carece de reflejos tácticos o su cuerpo no puede responder fuera de su propio turno.\nCUÁNDO: Siempre activa.\nQUÉ HACE: No puede realizar Ataques de Oportunidad ni usar rasgos, Conjuros o efectos que requieran gastar su Reacción.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede ser fuerte, peligrosa o resistente, pero no responde bien a los cambios inmediatos del combate. Sus enemigos pueden rodearla, retirarse o forzar movimientos con menos riesgo."
    },
    {
      "name": "Vulnerabilidad a Daño",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura es especialmente vulnerable a un tipo de daño concreto.\nCUÁNDO: Cuando recibe daño del tipo elegido al crearla.\nQUÉ HACE: Recibe +1d6 de daño adicional de ese tipo.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura: Fuego, Hielo, Corrosivo, Radiante, Sombra, Mental, Contundente, Cortante, Penetrante u otro tipo permitido por el sistema.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo, espíritu o estructura falla ante cierto daño. El fuego la abre, el hielo la quiebra, la luz la purga, el metal la desgarra o la corrupción la envenena con más fuerza."
    },
    {
      "name": "Fragilidad Física",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura tiene un cuerpo menos resistente de lo esperado para su ND.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: Reduce su Resistencia máxima en 10.\nLa Resistencia final nunca puede quedar por debajo de 5.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede ser rápida, peligrosa o difícil de alcanzar, pero su cuerpo no soporta castigo prolongado."
    },
    {
      "name": "Defensa Deficiente",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura es fácil de impactar por tamaño, torpeza, lentitud, exceso de confianza, cuerpo expuesto o movimientos predecibles.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Reduce su Defensa en 2.\nDESCRINiveles de ConjuroIÓN:\nNo evita bien los golpes. Puede que sea enorme, rígida, demasiado agresiva o que simplemente no entienda cómo proteger sus puntos vulnerables."
    },
    {
      "name": "Torpeza Motriz",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura tiene problemas para moverse con precisión.\nCUÁNDO: Cuando realiza tiradas de Destreza relacionadas con equilibrio, acrobacias, sigilo físico, maniobras finas, esquiva, trepar con precisión o movimientos delicados.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo no está hecho para movimientos finos. Puede ser demasiado pesado, rígido, desigual, tembloroso, viejo, segmentado o simplemente torpe."
    },
    {
      "name": "Debilidad de Cuerpo",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura tiene poca fuerza bruta o mala capacidad para resistir esfuerzo físico directo.\nCUÁNDO: Cuando realiza tiradas de Cuerpo para empujar, cargar, levantar, forcejear, resistir desplazamientos, romper objetos, mantener presas o soportar esfuerzo físico directo.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no falla por falta de agilidad, sino por falta de fuerza útil. Puede ser liviana, hueca, frágil, blanda, atrofiada o estar hecha para precisión y no para potencia."
    },
    {
      "name": "Debilidad de Aura",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura tiene poca estabilidad mental, espiritual o emocional.\nCUÁNDO: Cuando realiza Salvaciones de Aura contra miedo, control, fascinación, confusión, compulsión, presión espiritual o efectos mentales equivalentes.\nQUÉ HACE: Tiene Desventaja en esas Salvaciones.\nDESCRINiveles de ConjuroIÓN:\nSu voluntad se rompe con facilidad. Puede ser una mente simple, un espíritu incompleto, una criatura demasiado emocional o un cuerpo sin centro interno firme."
    },
    {
      "name": "Dependencia Ambiental",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura necesita permanecer en un ambiente concreto para funcionar correctamente.\nCUÁNDO: Si pasa más de 3 rondas completas fuera del ambiente definido.\nQUÉ HACE: Mientras permanezca fuera de ese ambiente, sufre −1 a todas sus tiradas y su movimiento se reduce en 3 metros.\nCierre:\nEl efecto termina cuando vuelve al ambiente requerido.\nRestricción:\nEl ambiente debe definirse al crear la criatura: agua profunda, oscuridad, frío extremo, calor intenso, humedad, tierra blanda, corrupción, luz solar, vegetación densa, niebla, fuego cercano u otro entorno concreto.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede sobrevivir fuera de su ambiente, pero no funciona bien. Se seca, se enfría, se asfixia, pierde ritmo, se vuelve torpe o se debilita."
    },
    {
      "name": "Exposición de Núcleo",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura posee un punto vulnerable evidente o parcialmente expuesto.\nCUÁNDO: Cuando una criatura atacante declara que apunta al núcleo, órgano, gema, máscara, corazón externo, ojo central, sello, cicatriz o punto vulnerable definido.\nQUÉ HACE: El ataque contra la criatura obtiene +1 a la tirada de ataque.\nRestricción:\nEl punto vulnerable debe definirse al crear la criatura y debe poder ser percibido o descubierto razonablemente.\nDESCRINiveles de ConjuroIÓN:\nAlgo importante está demasiado a la vista. Quien entienda la anatomía de la criatura sabe dónde golpear."
    },
    {
      "name": "Compulsión Sostenida",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura está dominada por una conducta persistente ante cierto estímulo.\nCUÁNDO: Mientras perciba el estímulo definido y no esté bajo una amenaza inmediata más importante.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10 al inicio de su turno. Si falla, debe dedicar su Acción Principal de ese turno a cumplir la conducta definida.\nDuración:\nSe repite al inicio de cada turno mientras el estímulo siga presente y detectable.\nCierre:\nLa compulsión deja de aplicarse si el estímulo desaparece, deja de ser detectable, la criatura queda Inconsciente o aparece una amenaza directa que exija responder para sobrevivir.\nRestricción:\nEl estímulo y la conducta deben definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no solo reacciona una vez. Su conducta vuelve una y otra vez mientras el estímulo esté presente: proteger, perseguir, alimentarse, huir, cavar, cantar, custodiar, destruir o acercarse."
    },
    {
      "name": "Equipo Dependiente",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura depende de una pieza de equipo, foco, arma, máscara, armadura, cristal, sello, herramienta o componente externo para usar parte de sus capacidades.\nCUÁNDO: Si pierde, rompe o se le retira el objeto definido.\nQUÉ HACE: Mientras no tenga ese objeto, pierde acceso a un rasgo, Conjuro o acción especial definida al crear la criatura.\nCierre:\nEl efecto termina si recupera el objeto, lo repara, lo reemplaza o vuelve a conectarse con él mediante el método definido.\nRestricción:\nEl objeto y la capacidad afectada deben definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nNo todo poder está en el cuerpo. Algunas criaturas dependen de máscaras, armas, núcleos, sellos, jaulas, tótems, cristales o herramientas sin las cuales quedan incompletas."
    },
    {
      "name": "Canalización Agotadora",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "El poder desgasta severamente a la criatura.\nCUÁNDO: Cuando paga el coste de Resistencia de una Conjuro.\nQUÉ HACE: El coste de Resistencia de sus Conjuros aumenta en 2.\nRestricción:\nEste rasgo reemplaza Canalización Costosa. No se suman.\nSolo puede tomarse si la criatura posee al menos una Conjuro.\nDESCRINiveles de ConjuroIÓN:\nCada Conjuro arranca más del cuerpo de lo normal. La criatura paga poder con aliento, sangre, calor o estabilidad."
    },
    {
      "name": "Conjuro Inestable",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La magia de la criatura fluctúa con riesgo de colapso.\nCUÁNDO: Antes de resolver cualquier Conjuro.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10. Si falla, el Conjuro no se activa pero el coste de Resistencia se paga de todas formas."
    },
    {
      "name": "Foco Necesario",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura necesita un foco, órgano, cristal, tótem, máscara, sello, arma, canto o núcleo para usar Conjuros.\nCUÁNDO: Mientras no tenga acceso al foco definido.\nQUÉ HACE: No puede usar Conjuros.\nCierre:\nPuede volver a usar Conjuros cuando recupere, repare, regenere o vuelva a conectar con el foco.\nRestricción:\nEl foco debe definirse al crear la criatura y debe poder ser dañado, retirado, silenciado, bloqueado o neutralizado de alguna forma clara.\nDESCRINiveles de ConjuroIÓN:\nLa Conjuro no nace solo de la voluntad. Necesita un punto de canalización, y sin él la criatura queda muda de poder."
    },
    {
      "name": "Conjuro Vulnerable",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "Proyectar magia deja a la criatura expuesta y desprotegida.\nCUÁNDO: Tras lanzar un Conjuro en su turno.\nQUÉ HACE: Sufre −1 a Defensa hasta el inicio de su próximo turno."
    },
    {
      "name": "Conjuro Doloroso",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La canalización lacera la carne o mente de la propia criatura.\nCUÁNDO: Tras usar un Conjuro.\nQUÉ HACE: Sufre 1d6 de daño no reducible al completar el lanzamiento."
    },
    {
      "name": "Rechazo de Energía",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "Su organismo choca con una Energía elegida.\nCUÁNDO: Al lanzar un Conjuro de esa Energía.\nQUÉ HACE: Sufre Desventaja en la tirada de ataque del Conjuro, o los objetivos obtienen Ventaja en la Salvación contra dicho Conjuro."
    },
    {
      "name": "Vulnerable a Conjuros",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "Su cuerpo o alma absorbe el impacto de la magia con especial fragilidad.\nCUÁNDO: Al recibir daño directo de cualquier Conjuro.\nQUÉ HACE: Sufre +1d6 de daño directo adicional."
    },
    {
      "name": "Ruptura de Sostén",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "El dolor interrumpe sus ataduras mágicas sin excepción.\nCUÁNDO: Si mantiene un Conjuro con Duración sin Concentración y recibe cualquier cantidad de daño.\nQUÉ HACE: El Conjuro termina de inmediato sin permitir tirada de salvación."
    },
    {
      "name": "Sensible a la Luz Intensa",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La luz intensa daña o desestabiliza a la criatura.\nCUÁNDO: Mientras esté bajo luz intensa o luz solar directa.\nQUÉ HACE: Al inicio de su turno, sufre 1d6 de daño.\nCierre:\nEl daño deja de aplicarse cuando entra en sombra suficiente, se cubre o la fuente de luz desaparece.\nDESCRINiveles de ConjuroIÓN:\nLa luz no solo molesta. Quema, disuelve, seca, purga o rompe la cohesión de la criatura."
    },
    {
      "name": "Cuerpo Inflamable",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura prende con facilidad.\nCUÁNDO: Cuando recibe daño de Fuego.\nQUÉ HACE: Además del daño normal, queda Quemada hasta el final de su próximo turno.\nMientras esté Quemada por esta desventaja, sufre 1d6 de daño de Fuego al inicio de su turno.\nDESCRINiveles de ConjuroIÓN:\nPiel seca, aceite, pelaje, resina, papel, madera o gases internos hacen que el fuego se agarre a la criatura con facilidad."
    },
    {
      "name": "Cuerpo Conductivo",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura conduce electricidad, energía o descargas con facilidad.\nCUÁNDO: Cuando recibe daño de Rayo, Electricidad o una descarga equivalente.\nQUÉ HACE: Además del daño normal, pierde su Reacción hasta el inicio de su próximo turno.\nDESCRINiveles de ConjuroIÓN:\nLa descarga corre por su cuerpo y retrasa su respuesta. Músculos, cables, fluidos o metales internos se traban durante un instante."
    },
    {
      "name": "Sin Voz",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura no puede producir voz, canto, rugidos complejos ni sonidos articulados.\nCUÁNDO: Siempre activa.\nQUÉ HACE: No puede usar Conjuros, rasgos, órdenes, engaños o interacciones que requieran voz o sonido articulado.\nRestricción:\nNo impide comunicarse por otros medios si la criatura posee un rasgo apropiado.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede ser inteligente o expresiva, pero no puede usar la voz como herramienta."
    },
    {
      "name": "Sin Manos Funcionales",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura no posee manos, dedos, pinzas finas ni apéndices capaces de manipulación precisa.\nCUÁNDO: Siempre activa.\nQUÉ HACE: No puede usar herramientas finas, armas que requieran empuñadura, cerraduras, escritura manual, gestos complejos ni acciones que requieran manipulación precisa.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo sirve para correr, morder, golpear o arrastrar, pero no para trabajo fino."
    },
    {
      "name": "Dependencia de Grupo",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura funciona peor cuando está aislada.\nCUÁNDO: Mientras no tenga aliados conscientes a dentro de Cerca.\nQUÉ HACE: Sufre −1 a todas sus tiradas.\nCierre:\nEl efecto termina cuando vuelve a tener al menos un aliado consciente a dentro de Cerca.\nDESCRINiveles de ConjuroIÓN:\nLa criatura necesita señales, presencia, olor, ánimo o coordinación de otros. Sola pierde seguridad."
    },
    {
      "name": "Recuperación Bloqueada",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura no puede recuperar Resistencia con facilidad.\nCUÁNDO: Siempre activa.\nQUÉ HACE: No puede recuperar Resistencia mediante rasgos de recuperación o regeneración propios.\nPuede recibir curación externa normalmente, salvo que otra desventaja diga lo contrario.\nDESCRINiveles de ConjuroIÓN:\nEl cuerpo no se repara por sí mismo. No cierra, no regenera, no recompone piezas o no recupera energía interna sin ayuda."
    },
    {
      "name": "Curación Específica",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura solo puede recuperar Resistencia mediante un método concreto.\nCUÁNDO: Siempre activa.\nQUÉ HACE: No puede recuperar Resistencia salvo mediante la fuente definida al crearla.\nRestricción:\nLa fuente debe ser concreta: sangre, fuego, agua, sombra, reparación mecánica, energía corrupta, luz sagrada, tierra fértil, electricidad, carne fresca, canto de la colmena u otra fuente equivalente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura no sana con cualquier medio. Necesita una sustancia, energía, rito, reparación o entorno específico."
    },
    {
      "name": "Herida Persistente",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura se deteriora cuando queda herida.\nCUÁNDO: Cuando queda por debajo de la mitad de su Resistencia máxima.\nQUÉ HACE: Sufre −1 a sus tiradas de Cuerpo hasta que recupere Resistencia por encima de la mitad de su máximo.\nDESCRINiveles de ConjuroIÓN:\nCuando el daño pasa cierto punto, el cuerpo ya no responde igual. Músculos, placas, órganos o piezas internas empiezan a fallar."
    },
    {
      "name": "Territorio Obligado",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura evita abandonar un lugar, nido, altar, puerta, cadáver, tesoro, fuente o zona definida.\nCUÁNDO: Cuando intenta alejarse más de distancia Lejos del punto definido.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10. Si falla, no puede alejarse voluntariamente más de esa distancia durante ese turno.\nCierre:\nLa restricción deja de aplicar si el punto definido es destruido, trasladado, reclamado por la criatura o deja de ser relevante.\nDESCRINiveles de ConjuroIÓN:\nLa criatura está atada a un lugar o cosa. No por cadenas visibles necesariamente, sino por instinto, orden, hambre, magia, memoria o deber."
    },
    {
      "name": "Vulnerabilidad a Material",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "Un material concreto atraviesa mejor las defensas de la criatura.\nCUÁNDO: Cuando recibe daño de un arma, herramienta o efecto hecho principalmente con el material definido.\nQUÉ HACE: Recibe +1d6 de daño adicional.\nRestricción:\nEl material debe definirse al crear la criatura: hierro, plata, madera, hueso, sal, obsidiana, cobre, cristal, piedra consagrada u otro material relevante del mundo.\nDESCRINiveles de ConjuroIÓN:\nNo todo daño iguala. Cierto material rompe sus defensas con demasiada facilidad."
    },
    {
      "name": "Sensible a Estados",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura resiste mal los estados alterados.\nCUÁNDO: Cuando realiza una Salvación contra un estado alterado físico o mental.\nQUÉ HACE: Sufre −1 a esa Salvación.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo o mente se altera con facilidad. Toxinas, miedo, presión, control, inmovilización o confusión le entran mejor que a otras criaturas."
    },
    {
      "name": "Hambre Distractora",
      "pr": 2,
      "category": "14. Desventajas Medias",
      "text": "La criatura se distrae ante comida, sangre, carroña, energía, metal, madera, luz u otra sustancia que desea consumir.\nCUÁNDO: Cuando percibe la fuente de alimento definida a dentro de Lejos y no está bajo una amenaza inmediata más importante.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10. Si falla, sufre −1 a todas sus tiradas hasta el inicio de su próximo turno, salvo tiradas hechas para acercarse, consumir, proteger o reclamar esa fuente.\nCierre:\nEl efecto termina si la fuente desaparece, deja de ser detectable o aparece una amenaza directa que exija responder para sobrevivir.\nRestricción:\nLa fuente de alimento debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nNo es hambre simple. Es una distracción física, mental o espiritual que tira de la criatura incluso cuando debería concentrarse.\n15. Desventajas Mayores\nLas desventajas mayores otorgan +3 PR.\nRepresentan limitaciones severas. Una desventaja mayor debe cambiar de forma clara cómo se diseña, se usa o se enfrenta la criatura. No debe ser un detalle menor ni una debilidad rara vez aplicable."
    },
    {
      "name": "Vulnerabilidad Grave",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura reacciona de forma catastrófica ante un tipo de daño concreto.\nCUÁNDO: Cuando recibe daño del tipo elegido al crearla.\nQUÉ HACE: Recibe +2d6 de daño adicional de ese tipo.\nRestricción:\nEl tipo de daño debe definirse al crear la criatura: Fuego, Hielo, Corrosivo, Radiante, Sombra, Mental, Contundente, Cortante, Penetrante u otro tipo permitido por el sistema.\nDESCRINiveles de ConjuroIÓN:\nEse daño no solo hiere: rompe la estructura misma de la criatura. La quema desde dentro, la purga, la congela, la agrieta o deshace sus defensas."
    },
    {
      "name": "Cuerpo Quebradizo",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura tiene una estructura física extremadamente frágil para su ND.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: Reduce su Resistencia máxima en 20.\nLa Resistencia final nunca puede quedar por debajo de 5.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo puede tener poder, velocidad o capacidades peligrosas, pero no está hecho para recibir castigo. Vidrio, hueso hueco, carne seca, mecanismos delicados o energía inestable sostienen su forma."
    },
    {
      "name": "Defensa Abierta",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura es muy fácil de impactar por tamaño, lentitud, torpeza, exceso de exposición o incapacidad para protegerse.\nCUÁNDO: Siempre activa.\nQUÉ HACE: Reduce su Defensa en 3.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo deja demasiadas aberturas. Puede ser enorme, rígida, lenta, demasiado agresiva o incapaz de reaccionar a ataques simples."
    },
    {
      "name": "Torpeza Motriz Grave",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura tiene una limitación severa de coordinación, equilibrio o precisión corporal, hasta el punto de que moverse con cuidado la vuelve vulnerable.\nCUÁNDO: Cuando realiza tiradas de Destreza relacionadas con equilibrio, esquiva, acrobacias, sigilo físico, movimientos precisos, trepar con cuidado, evitar trampas o maniobras delicadas.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nAdemás, mientras esté bajo una condición que limite su movimiento, como Derribado, Inmovilizado, Apresado o terreno que le impida moverse con normalidad, sufre −1 a Defensa.\nCierre:\nEl penalizador a Defensa termina cuando deja de estar bajo la condición que limita su movimiento.\nDESCRINiveles de ConjuroIÓN:\nSu cuerpo no está hecho para precisión. Cuando pierde ritmo o posición, deja demasiadas aberturas."
    },
    {
      "name": "Debilidad Física Grave",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura tiene una limitación severa para fuerza bruta y esfuerzo corporal directo.\nCUÁNDO: Cuando realiza tiradas de Cuerpo para empujar, cargar, levantar, romper, forcejear, mantener presas, resistir desplazamientos o soportar esfuerzo físico directo.\nQUÉ HACE: Tiene Desventaja en esas tiradas.\nAdemás, cuando falla una Salvación de Cuerpo contra un efecto que la empuje, derribe, aprese o inmovilice, también pierde 3 metros de movimiento hasta el final de su próximo turno.\nDESCRINiveles de ConjuroIÓN:\nLa criatura puede ser precisa, rápida o peligrosa por otros medios, pero falla cuando debe imponer fuerza directa. Si algo la mueve o la retiene, le cuesta recomponerse."
    },
    {
      "name": "Voluntad Fracturada",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura tiene una mente, alma o voluntad extremadamente inestable.\nCUÁNDO: Cuando realiza Salvaciones de Aura contra miedo, control, fascinación, confusión, compulsión, presión espiritual o efectos mentales equivalentes.\nQUÉ HACE: Tiene Desventaja en esas Salvaciones.\nAdemás, cuando falla una Salvación de Aura contra uno de esos efectos, sufre −1 a todas sus tiradas hasta el final de su próximo turno.\nDESCRINiveles de ConjuroIÓN:\nSu voluntad no resiste bien. Cuando algo entra en su mente, no solo la afecta: la desordena."
    },
    {
      "name": "Dependencia Vital",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura necesita un elemento, sustancia, vínculo o ambiente para seguir funcionando.\nCUÁNDO: Si pasa más de 3 rondas completas sin contacto con la fuente definida.\nQUÉ HACE: Al inicio de cada uno de sus turnos, sufre 2d6 de daño.\nEste daño no puede reducirse, resistirse ni absorberse.\nCierre:\nEl daño deja de aplicarse cuando la criatura vuelve a estar en contacto con la fuente requerida.\nRestricción:\nLa fuente debe definirse al crear la criatura: agua, fuego, sombra, tierra, aire puro, frío, calor, electricidad, corrupción, luz, oscuridad, sangre, metal, humedad, núcleo externo, tótem, canto, manada, reina u otro equivalente.\nDESCRINiveles de ConjuroIÓN:\nSin esa fuente, la criatura no solo se debilita: empieza a fallar. Su cuerpo se seca, apaga, quiebra, pudre, pierde cohesión o se deshace."
    },
    {
      "name": "Núcleo Expuesto",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura posee un punto vital evidente y vulnerable.\nCUÁNDO: Cuando una criatura atacante declara que apunta al núcleo, órgano, gema, máscara, corazón externo, ojo central, sello, cicatriz o punto vulnerable definido.\nQUÉ HACE: El ataque contra la criatura obtiene +2 a la tirada de ataque.\nSi el ataque impacta, inflige +1d6 de daño adicional.\nRestricción:\nEl punto vulnerable debe definirse al crear la criatura y debe poder ser percibido o descubierto razonablemente.\nDESCRINiveles de ConjuroIÓN:\nLa criatura lleva su debilidad a la vista. Puede ser un ojo central, cristal vital, sello roto, costura abierta, corazón externo, máscara ritual o núcleo luminoso."
    },
    {
      "name": "Compulsión Dominante",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura está dominada por una conducta intensa ante un estímulo concreto.\nCUÁNDO: Mientras perciba el estímulo definido y no exista una amenaza inmediata que pueda destruirla o impedirle actuar.\nQUÉ HACE: Al inicio de su turno, debe superar una Salvación de Aura contra ND 10.\nSi falla, debe usar su Acción Principal y su movimiento disponible para cumplir la conducta definida.\nDuración:\nSe repite al inicio de cada turno mientras el estímulo siga presente y detectable.\nCierre:\nLa compulsión deja de aplicarse si el estímulo desaparece, deja de ser detectable, la criatura queda Inconsciente o aparece una amenaza directa que pueda destruirla o anularla si no responde.\nRestricción:\nEl estímulo y la conducta deben definirse al crear la criatura.\nEjemplos:\nPerseguir sangre fresca.\nProteger una cría, reina, tótem o núcleo.\nHuir de la luz solar.\nAlimentarse de cadáveres visibles.\nDestruir fuego.\nAtacar a quien porte un símbolo concreto.\nDefender una entrada aunque sea tácticamente inútil.\nDESCRINiveles de ConjuroIÓN:\nNo es un impulso pasajero. Es una orden escrita en el cuerpo, una obsesión de especie o una falla de voluntad que vuelve predecible a la criatura."
    },
    {
      "name": "Equipo Vital",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura depende de una pieza de equipo, foco, armadura, núcleo, máscara, cristal, arma, sello, herramienta o componente externo para mantenerse completa.\nCUÁNDO: Si pierde, rompe o se le retira el objeto definido.\nQUÉ HACE: Mientras no tenga ese objeto, pierde acceso a dos rasgos, dos Conjuros o una acción especial mayor definidas al crear la criatura.\nAdemás, sufre −1 a todas sus tiradas mientras permanezca separada del objeto.\nCierre:\nEl efecto termina si recupera el objeto, lo repara, lo reemplaza o vuelve a conectarse con él mediante el método definido.\nRestricción:\nEl objeto y las capacidades afectadas deben definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nEl poder de la criatura no está completo en su cuerpo. Una máscara, núcleo, arma, cristal, jaula, sello o reliquia sostiene parte de lo que es."
    },
    {
      "name": "Debilidad a Terreno",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura funciona muy mal en un tipo de terreno concreto.\nCUÁNDO: Mientras se mueve o permanece sobre el terreno definido.\nQUÉ HACE: Ese terreno cuenta como Terreno Peligroso para la criatura. Al entrar en él por primera vez en su turno o comenzar su turno dentro, sufre 1d6 de daño.\nAdemás, el terreno cuenta como Terreno Difícil para ella.\nRestricción:\nEl terreno debe definirse al crear la criatura: agua profunda, arena, hielo, roca, metal, madera viva, tierra consagrada, corrupción, vegetación, pantano, ceniza, luz solar directa u otro entorno claro.\nCierre:\nEl efecto termina cuando la criatura abandona el terreno definido.\nDESCRINiveles de ConjuroIÓN:\nEse suelo no la sostiene: la hiere. Puede quemarla, hundirla, desorientarla, romper su cohesión o interferir con su forma de moverse."
    },
    {
      "name": "Criatura Menor",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura es un espécimen diminuto, débil o incompleto dentro de su especie.\nCUÁNDO: Al crear la criatura.\nQUÉ HACE: Todos estos efectos aplican a la vez:\n- Su Resistencia máxima se reduce a la mitad (redondeando hacia abajo, mínimo 5).\n- Sufre −1 a Defensa.\n- Su Movimiento baja 1 banda (pasa a Contacto [aproximadamente un metro] si estaba en Cerca).\n- No puede usar Reacciones.\nRestricción: No puede combinarse con Criatura Superior."
    },
    {
      "name": "Conjuro Descontrolado",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La magia puede desbordarse y volverse contra el lanzador.\nCUÁNDO: Antes de resolver un Conjuro.\nQUÉ HACE: Debe superar una Salvación de Aura contra ND 10. Si falla, el Conjuro no se activa, paga el coste de Resistencia y además sufre 1d6 de daño no reducible."
    },
    {
      "name": "Desgaste Progresivo",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "El organismo de la criatura se quema por el uso repetido de magia.\nCUÁNDO: Cada vez que lanza un Conjuro después del primero durante un mismo combate.\nQUÉ HACE: Sufre 1 nivel de Fatiga de forma inmediata.",
      "cost": 3,
      "costText": "+3 PR"
    },
    {
      "name": "Soledad Incapacitante",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura no está hecha para actuar sola.\nCUÁNDO: Mientras no tenga aliados conscientes a dentro de Cerca.\nQUÉ HACE: Tiene Desventaja en todas sus tiradas.\nCierre:\nEl efecto termina cuando vuelve a tener al menos un aliado consciente a dentro de Cerca.\nRestricción:\nEste rasgo reemplaza Dependencia de Grupo. No se suman.\nDESCRINiveles de ConjuroIÓN:\nAislada, la criatura se desordena. Pierde ritmo, confianza, señales, olor de grupo o conexión de colmena."
    },
    {
      "name": "Vulnerabilidad Grave a Material",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "Un material concreto resulta devastador para la criatura.\nCUÁNDO: Cuando recibe daño de un arma, herramienta o efecto hecho principalmente con el material definido.\nQUÉ HACE: Recibe +2d6 de daño adicional.\nRestricción:\nEste rasgo reemplaza Vulnerabilidad a Material. No se suman.\nEl material debe definirse al crear la criatura.\nDESCRINiveles de ConjuroIÓN:\nEse material no solo atraviesa sus defensas: las deshace. Plata, sal, hierro, madera sagrada, hueso, cobre o cristal pueden ser más que una herramienta contra ella."
    },
    {
      "name": "Estado Agravado",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "La criatura empeora cuando sufre estados alterados.\nCUÁNDO: Mientras esté afectada por un estado alterado.\nQUÉ HACE: Sufre −1 a Defensa y −1 a sus tiradas.\nCierre:\nEl penalizador termina cuando deja de estar afectada por estados alterados.\nDESCRINiveles de ConjuroIÓN:\nCuando la criatura pierde control, pierde demasiado. Veneno, miedo, inmovilidad, confusión o fatiga abren fallas en todo su cuerpo."
    },
    {
      "name": "Poder Incompatible",
      "pr": 3,
      "category": "15. Desventajas Mayores",
      "text": "El flujo de una Energía específica sobrecarga de forma destructiva a la criatura.\nCUÁNDO: Tras usar un Conjuro de la Energía definida al crearla.\nQUÉ HACE: Sufre 1d6 de daño no reducible y su Movimiento queda en Movimiento nulo hasta el final de su próximo turno."
    }
  ],
  "natures": [
    {
      "name": "Apasionadamente",
      "desc": "Te mueves con emoción intensa, dejando que los sentimientos guíen tus acciones."
    },
    {
      "name": "Astutamente",
      "desc": "Aprovechas oportunidades, actúas con ingenio rápido y cálculo oportunista."
    },
    {
      "name": "Brutalmente",
      "desc": "Entras con fuerza cruda, sin sutilezas ni contención."
    },
    {
      "name": "Caóticamente",
      "desc": "Actúas sin seguir patrones, improvisando de forma impredecible."
    },
    {
      "name": "Carismáticamente",
      "desc": "Te expresas con encanto, presencia y una comunicación magnética."
    },
    {
      "name": "Cautelosamente",
      "desc": "Te mueves con cuidado, evaluando riesgos antes de actuar."
    },
    {
      "name": "Compasivamente",
      "desc": "Actúas movido por empatía genuina, priorizando el bienestar de quienes te rodean."
    },
    {
      "name": "Curiosamente",
      "desc": "Investigas, observas y te acercas a lo desconocido con interés natural."
    },
    {
      "name": "Despiadadamente",
      "desc": "Actúas sin compasión ni freno, enfocándote solo en el resultado."
    },
    {
      "name": "Devotamente",
      "desc": "Actúas desde la fe, la convicción o un código sagrado que guía cada decisión."
    },
    {
      "name": "Discretamente",
      "desc": "Evitas llamar la atención sin desaparecer; pasas desapercibido por actitud y postura."
    },
    {
      "name": "Elegantemente",
      "desc": "Te mueves con gracia, estilo y precisión estética."
    },
    {
      "name": "Ferozmente",
      "desc": "Actúas desde el instinto puro y depredador, visceral y sin freno racional."
    },
    {
      "name": "Fervientemente",
      "desc": "Actúas con intensidad apasionada y ardor, como si cada acción fuera una causa mayor."
    },
    {
      "name": "Fríamente",
      "desc": "Actúas sin emoción, evaluando todo desde la lógica o la distancia emocional."
    },
    {
      "name": "Impulsivamente",
      "desc": "Saltas a la acción sin pensarlo mucho, guiado por instinto inmediato."
    },
    {
      "name": "Metódicamente",
      "desc": "Sigues procedimientos, pasos claros y lógica ordenada."
    },
    {
      "name": "Orgullosamente",
      "desc": "Actúas desde el honor, el ego o la reputación, sin doblegarte ante nadie."
    },
    {
      "name": "Rápidamente",
      "desc": "Te adelantas con velocidad, actuando sin demora."
    },
    {
      "name": "Silenciosamente",
      "desc": "Te mueves sin generar ruido, ideal para el sigilo físico."
    },
    {
      "name": "Siniestramente",
      "desc": "Actúas con presencia intimidante, oscura o inquietante."
    },
    {
      "name": "Sutilmente",
      "desc": "Influencias o actúas de forma casi imperceptible, con gestos o palabras mínimas."
    },
    {
      "name": "Tenazmente",
      "desc": "Persistes sin rendirte, incluso ante fracasos repetidos."
    },
    {
      "name": "Valientemente",
      "desc": "Enfrentas peligro, riesgo o miedo con firmeza y corazón."
    }
  ],
  "typeDescriptions": {
    "Bestia": "Criaturas naturales o casi naturales guiadas por instinto, adaptación corporal y conducta animal.",
    "Monstruo": "Criaturas biológicamente extremas, aberrantes, salvajes o antinaturales. Su cuerpo está hecho para romper, devorar, resistir o imponer miedo.",
    "Espíritu": "Criaturas de esencia inmaterial, ánimas, ecos, apariciones, entidades del recuerdo, no-muertos incorpóreos o seres ligados a fuerzas invisibles.",
    "Exaltado": "Criaturas marcadas por fuerzas sagradas, celestiales, radiantes, divinas o purificadoras. No tienen que ser bondadosas, pero su existencia está vinculada a una energía elevada o consagrada.",
    "Corrupto": "Criaturas marcadas por podredumbre, maldición, corrupción espiritual, enfermedad sobrenatural o energía profana.",
    "Elemental": "Criaturas cuyo cuerpo está formado por una fuerza elemental pura o dominante, como fuego, agua, tierra, aire, hielo, rayo, magma, humo u otra manifestación equivalente. Al elegir este Tipo, define el elemento de la criatura.",
    "Artificial": "Criaturas creadas por manos mortales, magia, alquimia, ingeniería, rituales o tecnología. Incluye gólems, autómatas, constructos, muñecos animados, armaduras vivientes y engendros fabricados.",
    "NPC": "Criaturas no jugadoras pertenecientes a Herencias jugables o especies sapientes equivalentes. Representan habitantes del mundo, soldados, artesanos, líderes, viajeros, rivales, aliados, villanos, especialistas y personas comunes con ficha de criatura. Todo NPC debe tener una Herencia jugable o equivalente."
  },
  "typeAbilities": {
    "Bestia": [
      {
        "name": "Instinto Primario",
        "text": "CUÁNDO: Cuando la criatura realiza tiradas para detectar peligro, presas, depredadores, emboscadas o cambios inmediatos en su entorno.\nQUÉ HACE: Tiene Ventaja en esas tiradas."
      },
      {
        "name": "Presa Marcada",
        "text": "CUÁNDO: Al inicio de un combate o persecución.\nQUÉ HACE: La criatura elige un objetivo visible como su presa. Mientras pueda verlo, olerlo o detectarlo por un sentido apropiado, obtiene +1 a las tiradas de ataque contra ese objetivo.\nLímite: Solo puede tener una presa marcada a la vez. Si la presa cae, escapa o deja de ser detectable, la criatura puede marcar otra al inicio de su próximo turno."
      },
      {
        "name": "Manada",
        "text": "CUÁNDO: Cuando la criatura ataca a un objetivo que esté adyacente a otra Bestia aliada.\nQUÉ HACE: El ataque inflige +1 de daño."
      },
      {
        "name": "Reflejo Salvaje",
        "text": "CUÁNDO: Cuando la criatura supera una Salvación de Destreza.\nQUÉ HACE: Puede moverse hasta Cerca inmediatamente sin provocar Ataques de Oportunidad, pero obtiene Desventaja a Defensa hasta el inicio de su próximo turno.\nLímite: Solo puede usar esta habilidad una vez por ronda."
      },
      {
        "name": "Olfato de Sangre",
        "text": "CUÁNDO: Cuando una criatura visible o rastreable está por debajo de la mitad de su Resistencia máxima.\nQUÉ HACE: La Bestia obtiene +1 a tiradas de rastreo, persecución y ataque contra esa criatura."
      }
    ],
    "Monstruo": [
      {
        "name": "Presencia Aterradora",
        "text": "CUÁNDO: Cuando una criatura enemiga ve al Monstruo por primera vez en un combate.\nQUÉ HACE: El objetivo debe superar una Salvación de Aura contra ND 10 o queda Asustado hasta el final de su próximo turno.\nNota: Una criatura que supere esta Salvación no vuelve a ser afectada por esta habilidad durante el mismo combate."
      },
      {
        "name": "Anatomía Aberrante",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Reduce en 1 punto todo daño recibido."
      },
      {
        "name": "Hambre Insaciable",
        "text": "CUÁNDO: Cuando el Monstruo reduce a una criatura enemiga a 0 de Resistencia con un ataque cuerpo a cuerpo.\nQUÉ HACE: Recupera 1d6 de Resistencia. Esta recuperación no puede superar su Resistencia máxima."
      },
      {
        "name": "Golpe Deformante",
        "text": "CUÁNDO: Cuando impacta con un ataque cuerpo a cuerpo.\nQUÉ HACE: Si el ataque supera la Defensa del objetivo por 4 o más, el objetivo queda Derribado."
      },
      {
        "name": "Cuerpo Imposible",
        "text": "CUÁNDO: Cuando una criatura intenta Apresar, Empujar o Derribar al Monstruo.\nQUÉ HACE: El Monstruo tiene Ventaja en la Salvación o tirada enfrentada para resistir ese efecto."
      }
    ],
    "Espíritu": [
      {
        "name": "Cuerpo Incorpóreo",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Tiene Resistencia contra daño Cortante, Penetrante y Contundente de fuentes no mágicas."
      },
      {
        "name": "Eco del Pasado",
        "text": "CUÁNDO: Cuando falla una tirada propia.\nQUÉ HACE: Una vez por combate, puede repetir esa tirada y quedarse con el segundo resultado."
      },
      {
        "name": "Presencia Etérea",
        "text": "CUÁNDO: Cuando una criatura intenta hacerle un Ataque de Oportunidad.\nQUÉ HACE: El Ataque de Oportunidad falla automáticamente."
      },
      {
        "name": "Terror Frío",
        "text": "CUÁNDO: Cuando una criatura comienza su turno adyacente al Espíritu.\nQUÉ HACE: Esa criatura debe superar una Salvación de Aura contra ND 10 o sufre −1 a su próxima tirada antes del final de su turno.\nLímite: Una criatura solo puede ser afectada por Terror Frío una vez por ronda."
      },
      {
        "name": "Paso Fantasmal",
        "text": "CUÁNDO: Durante su movimiento.\nQUÉ HACE: El Espíritu puede atravesar espacios ocupados por criaturas, pero no puede terminar su movimiento dentro de una criatura ni atravesar muros, puertas cerradas u objetos sólidos."
      }
    ],
    "Exaltado": [
      {
        "name": "Toque Divino",
        "text": "CUÁNDO: Cuando impacta con un ataque natural o arma cuerpo a cuerpo.\nQUÉ HACE: Inflige +1d6 de daño Radiante."
      },
      {
        "name": "Escudo de Fe",
        "text": "CUÁNDO: Una vez por ronda, cuando recibe daño.\nQUÉ HACE: Reduce ese daño en 1d6."
      },
      {
        "name": "Aura Bendita",
        "text": "CUÁNDO: Siempre activa mientras la criatura esté consciente.\nQUÉ HACE: Los aliados dentro de Cerca tienen Ventaja en Tiradas de Salvación contra miedo, corrupción, veneno o maldiciones."
      },
      {
        "name": "Juicio Radiante",
        "text": "CUÁNDO: Cuando impacta a una criatura Corrupta, No-muerta o profanada.\nQUÉ HACE: El ataque inflige +2 de daño adicional."
      },
      {
        "name": "Luz Purificadora",
        "text": "CUÁNDO: En su turno, como Acción Rápida.\nQUÉ HACE: Un aliado visible dentro de Cerca puede repetir una Salvación fallida contra Envenenado, Asustado o un efecto de corrupción. Debe quedarse con el segundo resultado.\nLímite: Solo puede usar esta habilidad una vez por ronda."
      }
    ],
    "Corrupto": [
      {
        "name": "Toque Profano",
        "text": "CUÁNDO: Cuando impacta con un ataque natural o arma cuerpo a cuerpo.\nQUÉ HACE: Inflige +1d6 de daño Corrosivo."
      },
      {
        "name": "Podredumbre Contagiosa",
        "text": "CUÁNDO: Cuando una criatura falla una Salvación causada por el Corrupto.\nQUÉ HACE: El objetivo reduce su Defensa en 1 hasta el final de su próximo turno."
      },
      {
        "name": "Maldición Persistente",
        "text": "CUÁNDO: Cuando el Corrupto es reducido a 0 de Resistencia.\nQUÉ HACE: La criatura que lo redujo a 0 debe superar una Salvación de Cuerpo contra ND 10 o queda Envenenada hasta el final de su próximo turno."
      },
      {
        "name": "Carne Impura",
        "text": "CUÁNDO: Cuando una criatura impacta al Corrupto con un ataque cuerpo a cuerpo natural o sin arma.\nQUÉ HACE: El atacante recibe 1d6 de daño Corrosivo.\nLímite: Solo puede afectar a una misma criatura una vez por ronda."
      },
      {
        "name": "Aliento de Ruina",
        "text": "CUÁNDO: En su turno, como Acción Principal.\nQUÉ HACE: El Corrupto exhala corrupción contra una criatura visible dentro de Cerca. El objetivo debe superar una Salvación de Cuerpo contra ND 10 o sufre −1 a sus tiradas de ataque hasta el final de su próximo turno."
      }
    ],
    "Elemental": [
      {
        "name": "Toque Elemental",
        "text": "CUÁNDO: Cuando impacta con un ataque natural o cuerpo a cuerpo.\nQUÉ HACE: Inflige +1d6 de daño del tipo asociado a su elemento."
      },
      {
        "name": "Forma Pura",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Es inmune al daño de su propio elemento.\nNota: El elemento debe quedar definido al crear la criatura."
      },
      {
        "name": "Explosión Elemental",
        "text": "CUÁNDO: Una vez por combate, cuando impacta con su primer ataque del turno.\nQUÉ HACE: El ataque también afecta a todas las criaturas adyacentes al objetivo principal. Las criaturas afectadas reciben el daño del ataque, sin efectos secundarios adicionales salvo que un Conjuro o rasgo indique lo contrario."
      },
      {
        "name": "Movimiento Elemental",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: La criatura ignora Terreno Difícil causado por su propio elemento."
      },
      {
        "name": "Desborde Elemental",
        "text": "CUÁNDO: Cuando la criatura queda por debajo de la mitad de su Resistencia máxima.\nQUÉ HACE: Hasta el inicio de su próximo turno, las criaturas que comiencen su turno adyacentes a ella reciben 1d6 de daño del elemento correspondiente."
      }
    ],
    "Artificial": [
      {
        "name": "Mente Mecánica",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Es inmune al daño Mental, al estado Asustado y a venenos."
      },
      {
        "name": "Protocolo de Combate",
        "text": "CUÁNDO: Al crear la criatura.\nQUÉ HACE: Elige Cuerpo o Destreza. La criatura obtiene +1 a todas las tiradas realizadas con ese Atributo.\nNota: El Atributo elegido no puede cambiarse durante el juego."
      },
      {
        "name": "Reparación de Emergencia",
        "text": "CUÁNDO: Una vez por combate, cuando la criatura queda por debajo de la mitad de su Resistencia máxima.\nQUÉ HACE: Recupera inmediatamente 1d6 + 2 de Resistencia. Esta recuperación no puede superar su Resistencia máxima."
      },
      {
        "name": "Núcleo Estable",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Tiene Ventaja en Salvaciones contra Aturdido, Derribado, Empujado o Inmovilizado."
      },
      {
        "name": "Orden Persistente",
        "text": "CUÁNDO: Cuando la criatura falla una tirada relacionada directamente con cumplir su función programada.\nQUÉ HACE: Una vez por combate, puede repetir esa tirada y quedarse con el segundo resultado.\nNota: La función debe definirse al crear la criatura."
      }
    ],
    "NPC": [
      {
        "name": "Vocación",
        "text": "CUÁNDO: Al crear el NPC.\nQUÉ HACE: El NPC gana un Concepto gratis relacionado con su oficio, formación, papel social o especialidad.\nNota: Ejemplos: Guerrero, Herrero, Cazador, Espía, Noble, Curandero, Mercader, Sastre, Explorador."
      },
      {
        "name": "Veterano",
        "text": "CUÁNDO: Siempre activa.\nQUÉ HACE: Tiene Ventaja en la tirada de Iniciativa y no puede ser Sorprendido mientras esté consciente."
      },
      {
        "name": "Superviviente",
        "text": "CUÁNDO: La primera vez en un combate que el NPC caería a 0 de Resistencia.\nQUÉ HACE: En lugar de caer a 0, queda en 1 de Resistencia."
      },
      {
        "name": "Entrenamiento de Campo",
        "text": "CUÁNDO: Al crear el NPC.\nQUÉ HACE: El NPC obtiene +1 a tiradas relacionadas con un entorno o actividad concreta.\nNota: Ejemplos: patrullar bosques, navegar, vigilar murallas, escoltar caravanas, cazar en pantanos, sobrevivir en desierto, combatir en túneles. El entorno o actividad debe definirse al crear el NPC."
      },
      {
        "name": "Equipo Propio",
        "text": "CUÁNDO: Al crear el NPC.\nQUÉ HACE: El NPC comienza con una pieza de equipo relevante para su función: arma, armadura, herramienta, kit, símbolo de autoridad, foco ritual o accesorio especializado.\nNota: Ese equipo debe aparecer en la ficha y puede modificar sus acciones si corresponde."
      }
    ]
  },
  "equipment": [
    {
      "name": "Ataque natural básico",
      "type": "Ataque natural",
      "cost": "—",
      "damage": "Daño Base",
      "dmgType": "según anatomía",
      "defense": 0,
      "notes": "Mordida, garra, golpe, cuerno, cola u otro ataque corporal."
    },
    {
      "name": "Daga / cuchillo",
      "type": "Arma simple",
      "cost": "10 L",
      "damage": "1d6-1",
      "dmgType": "Cortante/Penetrante",
      "defense": 0,
      "notes": "Arma ligera de mano."
    },
    {
      "name": "Garrote / bastón simple",
      "type": "Arma simple",
      "cost": "5 L",
      "damage": "1d6",
      "dmgType": "Contundente",
      "defense": 0,
      "notes": "Arma simple contundente."
    },
    {
      "name": "Lanza corta",
      "type": "Arma simple",
      "cost": "15 L",
      "damage": "1d6",
      "dmgType": "Penetrante",
      "defense": 0,
      "notes": "Arma simple de asta corta."
    },
    {
      "name": "Arco simple",
      "type": "Arma simple a distancia",
      "cost": "50 L",
      "damage": "1d6",
      "dmgType": "Penetrante",
      "defense": 0,
      "notes": "Ataque a distancia."
    },
    {
      "name": "Espada",
      "type": "Arma marcial",
      "cost": "100 L",
      "damage": "1d6+1",
      "dmgType": "Cortante",
      "defense": 0,
      "notes": "Arma marcial común."
    },
    {
      "name": "Hacha de guerra",
      "type": "Arma marcial",
      "cost": "100 L",
      "damage": "1d6+2",
      "dmgType": "Cortante",
      "defense": 0,
      "notes": "Arma pesada."
    },
    {
      "name": "Martillo de guerra",
      "type": "Arma marcial",
      "cost": "100 L",
      "damage": "1d6+2",
      "dmgType": "Contundente",
      "defense": 0,
      "notes": "Arma pesada."
    },
    {
      "name": "Lanza larga",
      "type": "Arma marcial",
      "cost": "80 L",
      "damage": "1d6+1",
      "dmgType": "Penetrante",
      "defense": 0,
      "notes": "Arma de alcance narrativo según mesa."
    },
    {
      "name": "Arco de guerra",
      "type": "Arma marcial a distancia",
      "cost": "150 L",
      "damage": "1d6+1",
      "dmgType": "Penetrante",
      "defense": 0,
      "notes": "Ataque a distancia."
    },
    {
      "name": "Armadura ligera",
      "type": "Armadura",
      "cost": "100 L",
      "damage": "",
      "dmgType": "",
      "defense": 1,
      "notes": "+1 Defensa si está equipada."
    },
    {
      "name": "Armadura media",
      "type": "Armadura",
      "cost": "300 L",
      "damage": "",
      "dmgType": "",
      "defense": 2,
      "notes": "+2 Defensa si está equipada."
    },
    {
      "name": "Armadura pesada",
      "type": "Armadura",
      "cost": "800 L",
      "damage": "",
      "dmgType": "",
      "defense": 3,
      "notes": "+3 Defensa si está equipada."
    },
    {
      "name": "Escudo",
      "type": "Escudo",
      "cost": "50 L",
      "damage": "",
      "dmgType": "",
      "defense": 1,
      "notes": "+1 Defensa si está equipado."
    },
    {
      "name": "Kit de aventurero",
      "type": "Kit",
      "cost": "50 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Cuerda, yesca, manta, raciones, odre, saco y elementos básicos de viaje."
    },
    {
      "name": "Kit de explorador",
      "type": "Kit",
      "cost": "80 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Herramientas de orientación, cuerda, clavos, yesca, cobertura y equipo de terreno."
    },
    {
      "name": "Kit de sanador",
      "type": "Kit",
      "cost": "100 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Vendas, ungüentos, agujas, alcohol, tablillas y herramientas médicas simples."
    },
    {
      "name": "Kit de artesano",
      "type": "Kit",
      "cost": "80 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Herramientas de oficio concretas. Define oficio al añadirlo."
    },
    {
      "name": "Ropa simple",
      "type": "Ropa",
      "cost": "5 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Prendas básicas de uso diario."
    },
    {
      "name": "Ropa de trabajo",
      "type": "Ropa",
      "cost": "10 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Prendas resistentes para labores físicas."
    },
    {
      "name": "Ropa de viaje",
      "type": "Ropa",
      "cost": "15 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Prendas cómodas, capa ligera, botas o calzado firme."
    },
    {
      "name": "Ropa de frío",
      "type": "Ropa",
      "cost": "25 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Capas gruesas y protección contra clima frío."
    },
    {
      "name": "Ropa de calor",
      "type": "Ropa",
      "cost": "15 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Telas ligeras, pañuelos, sandalias, turbante o sombrero amplio."
    },
    {
      "name": "Ropa de oficio",
      "type": "Ropa",
      "cost": "25 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Atuendo reconocible de profesión concreta."
    },
    {
      "name": "Ropa de corte",
      "type": "Ropa",
      "cost": "120 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Vestimenta elegante para audiencias y reuniones nobles."
    },
    {
      "name": "Ropa de gala",
      "type": "Ropa",
      "cost": "250 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Atuendo lujoso de ceremonia o banquete alto."
    },
    {
      "name": "Máscara simple",
      "type": "Accesorio",
      "cost": "10 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Cubre el rostro de forma básica."
    },
    {
      "name": "Joyería fina",
      "type": "Accesorio",
      "cost": "150 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Reserva de valor y presentación social."
    },
    {
      "name": "Foco ritual simple",
      "type": "Foco",
      "cost": "100 L",
      "damage": "",
      "dmgType": "",
      "defense": 0,
      "notes": "Foco para técnicas, rituales o rasgos que lo requieran."
    }
  ],
  "behaviors": {
    "Sin comportamiento especial": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "Sin ventaja ni desventaja."
    },
    "Brutal": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "Ataques cuerpo a cuerpo +1 de daño; −1 a Defensa contra ataques a distancia."
    },
    "Defensivo": {
      "res": 0,
      "def": 1,
      "movBands": 0,
      "spellLevels": 0,
      "note": "+1 a Defensa mientras no se haya movido voluntariamente desde el inicio de su último turno; Movimiento nulo mientras mantenga esa ventaja de Defensa."
    },
    "Acechador": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "+1 a las tiradas de ataque contra objetivos que no tengan aliados adyacentes; −1 de daño contra objetivos adyacentes a uno o más aliados del objetivo."
    },
    "Hostigador": {
      "res": -10,
      "def": 0,
      "movBands": 1,
      "spellLevels": 0,
      "note": "Su Movimiento sube 1 banda (máximo Distante); Resistencia máxima se reduce en 10 (mínimo 5)."
    },
    "Controlador": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "La ND de Salvación de sus Conjuros de control aumenta en +1; sus ataques directos infligen −1 de daño."
    },
    "Artillero": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "+1 a las tiradas de ataque a distancia; −1 a Defensa contra ataques cuerpo a cuerpo."
    },
    "Auxiliador": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 0,
      "note": "Una vez por ronda, como Acción Rápida: +1 a la próxima tirada de un aliado visible dentro de Cerca; sus propios ataques infligen −1 de daño."
    },
    "Invocador": {
      "res": 0,
      "def": 0,
      "movBands": 0,
      "spellLevels": 1,
      "note": "Obtiene +1 Nivel de Conjuro (solo para Conjuros de invocación/esbirros); si queda Aturdida, Inconsciente o Silenciada, las criaturas invocadas pierden su siguiente acción."
    }
  },
  "ndTable": [
    [
      "1/8",
      6,
      7,
      0,
      "1d6 − 3",
      0,
      0
    ],
    [
      "1/4",
      10,
      8,
      0,
      "1d6 − 2",
      1,
      0
    ],
    [
      "1/2",
      18,
      8,
      1,
      "1d6 − 1",
      1,
      0
    ],
    [
      "1",
      26,
      8,
      2,
      "1d6",
      2,
      0
    ],
    [
      "2",
      40,
      8,
      3,
      "1d6 + 1",
      3,
      0
    ],
    [
      "3",
      55,
      9,
      4,
      "2d6 − 1",
      4,
      1
    ],
    [
      "4",
      75,
      9,
      4,
      "2d6",
      5,
      1
    ],
    [
      "5",
      100,
      10,
      5,
      "2d6 + 1",
      6,
      1
    ],
    [
      "6",
      115,
      10,
      5,
      "2d6 + 2",
      7,
      2
    ],
    [
      "7",
      125,
      11,
      6,
      "2d6 + 2",
      8,
      2
    ],
    [
      "8",
      138,
      11,
      6,
      "2d6 + 3",
      9,
      2
    ],
    [
      "9",
      153,
      12,
      7,
      "3d6",
      10,
      3
    ],
    [
      "10",
      168,
      12,
      7,
      "3d6 + 1",
      10,
      3
    ],
    [
      "11",
      183,
      12,
      7,
      "3d6 + 1",
      11,
      3
    ],
    [
      "12",
      198,
      13,
      8,
      "3d6 + 2",
      11,
      4
    ],
    [
      "13",
      213,
      13,
      8,
      "4d6",
      12,
      4
    ],
    [
      "14",
      228,
      14,
      9,
      "4d6 + 1",
      13,
      4
    ],
    [
      "15",
      243,
      14,
      9,
      "4d6 + 2",
      14,
      5
    ]
  ],
  "sizes": {
    "Minúsculo": [
      -5,
      3,
      "Contacto"
    ],
    "Pequeño": [
      -5,
      1,
      "Contacto"
    ],
    "Mediano": [
      0,
      0,
      "Contacto"
    ],
    "Grande": [
      15,
      -1,
      "Cerca"
    ],
    "Enorme": [
      30,
      -2,
      "Lejos"
    ],
    "Colosal": [
      60,
      -4,
      "Distante"
    ]
  },
  "movementBands": [
    "Cerca",
    "Lejos",
    "Distante"
  ],
  "spellsCatalog": [
  {
    "name": "Golpe de Ruptura",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. El objetivo sufre 1d6+2 de daño Contundente.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Dardo Cortante",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Metal",
    "range": "Cerca",
    "roll": "Tirada de Ataque",
    "effect": "Alcance Cerca. El objetivo sufre 1d6 de daño Cortante.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Fisura",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Agrieta un objeto u obstáculo menor no portado (candado simple, rama, piedra pequeña), facilitando romperlo por medios físicos normales.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Represalia",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un enemigo adyacente falla un ataque cuerpo a cuerpo contra vos, infligís 1d6 de daño Contundente.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Voluntad Quebrantada",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Un objeto u obstáculo tocado queda marcado: la próxima vez que alguien intente romperlo por medios físicos, obtiene Ventaja.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Filo Improvisado",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. Manifestás un arma Simple en tu mano; el ataque inflige el daño de su tipo.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Luz de Vigilia",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Duración 10 minutos. Manifestás luz clara en radio Cerca.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Cerrojo Repentino",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando una puerta o cofre cercano está a punto de abrirse contra tu voluntad, manifestás un cerrojo simple que la sella hasta que alguien lo fuerce.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Mano Auxiliar",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Duración 10 minutos. Manifestás un objeto simple sin función de combate (cuerda, llave, vela).",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Escudo Improvisado",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Madera",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Manifestás un escudo en el brazo de un aliado; obtiene +1 a Defensa hasta el final de tu próximo turno.",
    "duration": "1 turno",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Piel de Roca",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo gana Resistencia a daño Contundente hasta el final de su próximo turno.",
    "duration": "1 turno",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Agua en Hielo",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Agua",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, Duración 10 minutos. Transformás hasta 1 m³ de agua en hielo, o viceversa.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Filo Cambiante",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Transformación",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Un arma tocada cambia su tipo de daño (Cortante/Penetrante/Contundente) hasta el final de tu próximo turno.",
    "duration": "1 turno",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Reflejo Alterado",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, Duración 10 minutos. Cambiás cosméticamente tu apariencia o la de un objeto pequeño, sin alterar su función.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Paso Firme",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando pisás terreno inestable, lo endurecés bajo tus pies para evitar caer o resbalar.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Manos que Sanan",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo recupera 2+1d6 de Resistencia.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Aliento Firme",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Estabilizás a una criatura en 0 de Resistencia sin necesidad de tirada.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Vínculo de Calma",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Elimina un estado alterado específico elegido al crear el conjuro.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Guardia Reflejada",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando el objetivo recibe daño, reducís ese daño en 2.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Aliento Compartido",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo recupera 2+1d6 de Resistencia; podés elegirte a vos mismo.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Marca de Quietud",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Tirada de Ataque",
    "effect": "Alcance Cerca. El objetivo sufre −1 a su próxima tirada.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Palabra de Verdad",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Entendés cualquier idioma hablado o escrito mientras dure.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Sello Menor",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Sellás una puerta o mecanismo simple; abrirlo requiere fuerza o herramientas.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Disciplina",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Un aliado obtiene +1 a su próxima tirada.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ley de Contacto",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un enemigo adyacente intenta alejarse de vos, le impone Desventaja para evitar tu Ataque de Oportunidad.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Chispa Errática",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. El objetivo sufre 1d6+2 de daño Eléctrico.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Polvo Irritante",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Tierra",
    "range": "Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Alcance Cerca. Un objetivo sufre −1 a su próxima tirada de Percepción.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Rastro Falso",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Duración 10 minutos. Dejás un rastro u olor falso que desvía el rastreo hacia un punto erróneo.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Segunda Oportunidad",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando fallás una tirada, obtenés Ventaja en tu próxima tirada antes del final de tu turno.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Idea Prestada",
    "level": 1,
    "cost": "3 Resistencia",
    "resCost": 3,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo obtiene Ventaja en su próxima tirada de un tipo estrecho, elegido al lanzar (ej. trepar, detectar mentiras).",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Lanza de Fuego",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Fuego",
    "range": "Cerca",
    "roll": "Tirada de Ataque",
    "effect": "Alcance Cerca. El objetivo sufre 2d6 de daño de Fuego.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Grieta Profunda",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Abre una grieta estable en una pared u obstáculo de piedra o tierra, suficiente para pasar agachado.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Golpe que Rompe",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. El ataque ignora Reducción de daño del objetivo; inflige 1d6+2 de daño Contundente.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Eco de Ruina",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Detectás si algo cercano fue recientemente destruido o dañado con violencia, y en qué dirección.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Rotura Diferida",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un objeto o estructura recibe daño, le infligís 1d6 de daño Contundente adicional.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Muro Improvisado",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Tierra",
    "range": "Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Duración 3 rondas. Manifestás una Barrera menor (10 Resistencia estructural, Defensa 7) en un punto dentro de Cerca.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Arma del Instante",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. Manifestás un arma Marcial en tu mano; el ataque inflige el daño de su tipo.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Reliquia Momentánea",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Manifestás un objeto especial menor que un aliado puede usar mientras dure.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Punto de Apoyo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Madera",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Duración 10 minutos. Manifestás un objeto estructural simple (escalera corta, gancho, cuña) que facilita una tarea concreta.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Guardián Improvisado",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un enemigo entra en contacto con vos, manifestás un objeto interpuesto que absorbe el primer golpe.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Piedra en Lodo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Cerca",
    "roll": "Salvación de Destreza ND 12",
    "effect": "Alcance Cerca. Salvación de Destreza ND 12 o el objetivo queda Ralentizado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Segunda Piel",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 3 rondas. El objetivo gana un arma natural simple, o Resistencia a un tipo de daño elegido.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Trueque de Formas",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, Duración 10 minutos. Cambiás la forma de un objeto pequeño en otro de función equivalente.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Sangre en Veneno",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Agua",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 12",
    "effect": "Contacto, Duración 3 rondas. Salvación de Cuerpo ND 12 o una Resistencia existente del objetivo se convierte en otro tipo, elegido por vos.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Adaptación Veloz",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 1 hora. Ganás Nadar o Trepar sin penalización.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Bálsamo Reconfortante",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo recupera 2+2d6 de Resistencia.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Manto de Piedra",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 3 rondas. +1 a Defensa y Resistencia a daño Contundente.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Memoria del Cuerpo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Elimina un estado alterado específico elegido al crear el conjuro.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Escudo Recíproco",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando el objetivo recibe daño, reducís ese daño en 1d6.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Respiro",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Reduce 1 nivel de Fatiga del objetivo.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Grito que Paraliza",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Salvación de Aura ND 12",
    "effect": "Alcance Cerca. Salvación de Aura ND 12 o el objetivo queda Derribado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Palabra que Ordena",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Podés dar una orden simple a un objeto o mecanismo inanimado para que la ejecute una vez (abrir, cerrar, sonar).",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Círculo de Verdad",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Entendés cualquier idioma y podés comunicarte con una categoría de criatura no sapiente.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Firmeza",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 3 rondas. +1 a todas las Salvaciones del objetivo.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Mandato Reflejo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un aliado adyacente va a quedar Derribado, imponés que en su lugar solo pierda parte de su Movimiento.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Vapor Corrosivo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Agua",
    "range": "Cerca",
    "roll": "Salvación de Cuerpo ND 12",
    "effect": "Alcance Cerca. Salvación de Cuerpo ND 12 o el objetivo queda Envenenado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Presagio Inestable",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Percibís una pista simbólica o breve visión relacionada con un peligro inminente cercano.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Semilla de Duda",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Detectás si alguien cercano miente activamente, mediante lectura de emociones superficiales.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Mutación Breve",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 3 rondas. Ganás un arma natural temporal o +2 a una tirada de Cuerpo o Destreza.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Desvío Instintivo",
    "level": 2,
    "cost": "6 Resistencia",
    "resCost": 6,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando fallarías una Salvación, obtenés Ventaja en esa Salvación.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Estallido de Voluntad",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto. El objetivo sufre 3d6 + Aura de daño Mental.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ruptura de Cadenas",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Rompe cualquier atadura, cerradura o mecanismo de dificultad normal sin tirada.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Lluvia de Esquirlas",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Metal",
    "range": "Cerca",
    "roll": "Salvación de Destreza ND 14",
    "effect": "Explosión de tamaño Cerca dentro de Cerca. Cada criatura sufre 3d6 de daño Cortante, mitad si supera Salvación de Destreza ND 14.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Colapso Programado",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Tierra",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Marca una estructura para que se derrumbe cuando lo decidas, dentro de las próximas 3 rondas.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Filo que Responde",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando recibís daño cuerpo a cuerpo, infligís 2d6 de daño al atacante.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Guardián de Barro",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Tierra",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Invoca una criatura de Invocación Fuerte (hasta ND 3), Control Simple, Duración 3 rondas.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Bastión Instantáneo",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Duración 10 minutos. Manifestás una Barrera reforzada (+5 Resistencia estructural, cobertura total) en un punto dentro de Cerca.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Armería de Emergencia",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, Duración 1 hora. Hasta 2 aliados reciben un arma Marcial manifestada.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Puente de Luz",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Manifestás una superficie sólida temporal de hasta 6 metros, Duración 3 rondas.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Centinela Reactivo",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un aliado adyacente recibe un ataque, manifestás un objeto que se interpone y recibe el golpe en su lugar.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Forma de la Bestia",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Cambiás tu forma por completo a la de una criatura de tamaño similar, Duración 3 rondas.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Piel Vulnerable",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 14",
    "effect": "Contacto, Duración 3 rondas. Salvación de Cuerpo ND 14 o el objetivo gana Vulnerabilidad a un tipo de daño elegido.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Trueque de Cuerpos",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Intercambiás rasgos sensoriales o físicos menores con un aliado voluntario, Duración 10 minutos.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Piedra Viva",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Cerca",
    "roll": "Salvación de Cuerpo ND 14",
    "effect": "Alcance Cerca. Salvación de Cuerpo ND 14 o el objetivo (tamaño mediano o menor) queda transformado en una estatua de piedra inerte durante 3 rondas: no puede actuar y tiene Resistencia a todo daño físico. Vuelve a su forma original al terminar el efecto.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Paso entre Sombras",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Te teletransportás a un punto visible dentro de Lejos.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Restauración",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo recupera 3d6+4 de Resistencia.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Muralla Viva",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. +1 a Defensa, Resistencia a un tipo de daño elegido, +1 a todas las Salvaciones.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ancla del Alma",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Si el objetivo caería a 0 de Resistencia por el daño de este turno, queda en 1.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Diagnóstico Certero",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Identificás con precisión cualquier enfermedad, veneno o maldición que afecte a un objetivo tocado, y cómo tratarla.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Reflejo de Vida",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un aliado adyacente caería a 0 de Resistencia, queda en 1 en su lugar.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Sello de Detención",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Salvación de Aura ND 14",
    "effect": "Alcance Cerca. Salvación de Aura ND 14 o el objetivo queda Inmovilizado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Círculo de Ley",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Área Aura Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Área Aura de tamaño Cerca, Duración 3 rondas. Los aliados dentro obtienen +1 a todas las Salvaciones.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Lengua Antigua",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 10 minutos. Entendés cualquier idioma, incluso perdido o mágico.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Marca de Obediencia",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Aura ND 14",
    "effect": "Contacto. Salvación de Aura ND 14 o el objetivo queda Confundido.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ruptura de Sellos",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Metal",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Abre una cerradura o mecanismo complejo, incluso mágico, con Salvación del mecanismo si corresponde.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Nube de Fermento",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Agua",
    "range": "Cerca",
    "roll": "Salvación de Cuerpo ND 14",
    "effect": "Explosión de tamaño Cerca dentro de Cerca. Salvación de Cuerpo ND 14 o Envenenado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Rastro Imposible de Seguir",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Durante 1 hora, cualquiera que intente rastrearte tiene Desventaja: tus huellas y olor cambian erráticamente.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Visión Fracturada",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Leés la memoria reciente de un objeto o lugar (psicometría).",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Azar Violento",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Salvación de Aura ND 14",
    "effect": "Alcance Cerca. Salvación de Aura ND 14 o el objetivo queda Confundido.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Instinto Roto",
    "level": 3,
    "cost": "9 Resistencia",
    "resCost": 9,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un enemigo falla un ataque contra vos, obtenés Ventaja en tu próxima tirada de ataque.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Lanza del Juicio",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Fuego",
    "range": "Lejos",
    "roll": "Tirada de Ataque",
    "effect": "Alcance Lejos. El objetivo sufre 4d6 de daño de Fuego, ignorando su Resistencia.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Demolición Absoluta",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Tierra",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Colapsa una estructura grande de forma controlada, en el momento que elijas dentro de 3 rondas.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Onda de Ruptura",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Salvación de Destreza ND 16",
    "effect": "Explosión de tamaño Lejos dentro de Cerca. Cada criatura sufre 4d6 de daño Contundente, mitad si supera Salvación de Destreza ND 16.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Mapa de Fracturas",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Percibís los puntos débiles estructurales de un área o construcción dentro de Lejos, revelando rutas de colapso o entrada forzada.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Venganza Instantánea",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando recibís daño, infligís a quien te dañó una cantidad igual a la mitad de lo recibido.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Guardián de Piedra",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Tierra",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Invoca una criatura de Invocación Mayor (hasta ND 5), Control Simple, Duración hasta el próximo Descanso Largo.",
    "duration": "Hasta Descanso Largo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Fortaleza Instantánea",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Manifestás una Barrera mayor, permanente, con cobertura total y 9 m de largo, en un punto dentro de Cerca.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Arsenal Manifestado",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Hasta 3 aliados reciben armas Marciales manifestadas, permanentes.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Palacio Ilusorio",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Manifestás una estructura completa y funcional (habitación, refugio) durante 1 hora.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Escudo Instantáneo",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando vas a recibir un ataque a distancia, manifestás una barrera que lo bloquea por completo, una vez.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Máscara del Extraño",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Duración 1 hora. Cambia por completo tu apariencia y sostiene una ilusión multisensorial.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Carne en Piedra",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 16",
    "effect": "Contacto. Salvación de Cuerpo ND 16 o el objetivo queda transformado en una estatua de piedra inerte durante 3 rondas: no puede actuar y tiene Resistencia a todo daño físico. Vuelve a su forma original al terminar el efecto.",
    "duration": "3 rondas",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Forma Verdadera",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Revierte cualquier transformación, disfraz o ilusión sobre un objetivo tocado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Debilidad Impuesta",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Tirada de Ataque",
    "effect": "Contacto, Duración 1 hora. Debilita una Inmunidad existente del objetivo a solo Resistencia del mismo tipo.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Cambio de Piel",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 1 hora. El objetivo cambia su forma por completo a una elegida al lanzar.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Manantial de Vida",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Área Aura Cerca",
    "roll": "Ninguna / Automático",
    "effect": "Área Aura de tamaño Cerca. Todos los aliados dentro recuperan 3d6+4 de Resistencia y eliminan todos sus estados.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Bastión Eterno",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, hasta el próximo Descanso Largo. Resistencia a todos los tipos de daño.",
    "duration": "Hasta Descanso Largo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Restauración Completa",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. Elimina todos los estados alterados del objetivo y reduce 2 niveles de Fatiga.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Lectura Vital",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Percibís el estado exacto de Resistencia, Fatiga y estados alterados de cualquier criatura visible dentro de Lejos.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Última Guardia",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un aliado visible caería a 0 de Resistencia, evitás su caída y le curás 2d6+2 de Resistencia.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Mandato Absoluto",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Lejos",
    "roll": "Salvación de Aura ND 16",
    "effect": "Alcance Lejos. Salvación de Aura ND 16 o el objetivo queda Incapacitado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Círculo Inviolable",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Creás una zona donde ninguna criatura puede mentir ni romper un juramento dado dentro de ella, durante 1 hora.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ley del Silencio",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Cerca",
    "roll": "Salvación de Aura ND 16",
    "effect": "Alcance Cerca. El objetivo queda Silenciado hasta superar una Salvación de Aura ND 16 al final de cada uno de sus turnos.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Archivo de la Ley",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Registrás permanentemente un juramento, contrato o mandato, de forma que cualquiera pueda verificar mágicamente si fue roto.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Guardián del Orden",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un Conjuro enemigo se activa cerca, le impone Desventaja en la Salvación que otorga a su objetivo.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Estallido de Podredumbre",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Agua",
    "range": "Cerca",
    "roll": "Salvación de Cuerpo ND 16",
    "effect": "Explosión de tamaño Lejos dentro de Cerca. 4d6 de daño Corrosivo y Envenenado; Salvación de Cuerpo ND 16 mitad.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Portal Inestable",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Abrís un pasaje breve e impredecible hacia un punto visible dentro de Lejos; el destino exacto varía unos metros al azar.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ecos del Destino",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Percibís a distancia un lugar conocido (ver/oír sin estar presente) durante 10 minutos.",
    "duration": "10 minutos",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Locura Inducida",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Aura ND 16",
    "effect": "Contacto. Salvación de Aura ND 16 o el objetivo queda Controlado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Caos Reflejado",
    "level": 4,
    "cost": "12 Resistencia",
    "resCost": 12,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando un enemigo te ataca y falla, le impone que actúe contra un objetivo aleatorio en su próximo turno (Confundido).",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Juicio de Cenizas",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Fuego",
    "range": "Distante",
    "roll": "Tirada de Ataque",
    "effect": "Explosión de tamaño Distante dentro de Distante. 8d6 de daño de Fuego, ignorando Resistencia e Inmunidad.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Fin de lo Construido",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Distante",
    "roll": "Ninguna / Automático",
    "effect": "Destruye por completo una estructura no mágica de tamaño moderado en un punto visible dentro de Distante.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Voluntad que Aniquila",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 18",
    "effect": "Contacto. Salvación de Cuerpo ND 18 o el objetivo sufre 6d6 de daño Mental y queda Incapacitado.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Silencio del Fin",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Distante",
    "roll": "Ninguna / Automático",
    "effect": "Todo sonido, luz y energía mágica se extinguen en un área dentro de Distante durante 1 ronda.",
    "duration": "1 ronda",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Represalia Absoluta",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Destrucción",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando recibís daño, el atacante sufre el mismo daño que acaba de infligirte.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Coloso de Piedra",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Tierra",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Invoca una criatura de Invocación Extraordinaria (hasta ND 8), Control Total, Duración hasta el próximo Descanso Largo.",
    "duration": "Hasta Descanso Largo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ciudadela Instantánea",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Manifestás una fortificación permanente (murallas, torre menor) en un punto visible dentro de Lejos.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Legión Manifestada",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Creación",
    "affinity": "Metal",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Duración hasta el próximo Descanso Largo. Invoca 3 criaturas de Invocación Fuerte mediante Enjambre, armadas y con Control Simple.",
    "duration": "Hasta Descanso Largo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Reliquia Verdadera",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Manifestás un objeto mágico permanente de Rareza moderada, definido al crear el conjuro.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Refugio Absoluto",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Creación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Ante peligro inminente, manifestás una Barrera total instantánea que cubre a todos los aliados cercanos.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Metamorfosis Total",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Cambiás tu forma por completo, de manera permanente, a una elegida al lanzar (reversible con otro conjuro).",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Sentencia de Piedra",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Tierra",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 18",
    "effect": "Contacto. Salvación de Cuerpo ND 18 o el objetivo queda transformado en una estatua de piedra inerte de forma permanente: no puede actuar y tiene Resistencia a todo daño físico, hasta que algo revierta el efecto.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Clima Roto",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Distante",
    "roll": "Ninguna / Automático",
    "effect": "Duración 1 hora. Provocás una tormenta severa en radio Lejos alrededor de un punto dentro de Distante.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Debilidad Absoluta",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Cuerpo ND 18",
    "effect": "Contacto, Duración 1 hora. Convierte cualquier Resistencia o Inmunidad existente del objetivo en Vulnerabilidad al mismo tipo; Salvación de Cuerpo ND 18.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Segunda Naturaleza",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Transformación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, permanente. El objetivo gana un rasgo funcional definido al crear el conjuro.",
    "duration": "Permanente",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Renacer",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto. El objetivo recupera 8+8d6 de Resistencia; si el daño de este turno lo hubiera reducido a 0, queda en 1.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Ojo de la Eternidad",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Percibís la memoria completa de un lugar a lo largo de su historia, remontándote a cualquier evento relevante ocurrido en él.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Voto de Permanencia",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Un objeto, estructura o efecto mágico definido se vuelve inmune a la destrucción durante 1 hora.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Santuario",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Apoyo)",
    "spellType": "Apoyo",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Área Aura Lejos",
    "roll": "Ninguna / Automático",
    "effect": "Área Aura de tamaño Lejos, Duración 1 hora. Los aliados dentro tienen Resistencia a todo daño y +2 a todas las Salvaciones.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Guardia Eterna",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Conservación",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando cualquier aliado visible caería a 0 de Resistencia, evitás su caída y lo curás por completo, una vez por combate.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Ley Absoluta",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Distante",
    "roll": "Salvación de Aura ND 18",
    "effect": "Alcance Distante. Salvación de Aura ND 18 o el objetivo queda Inconsciente.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Círculo del Fin del Mundo",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Salvación de Aura ND 18",
    "effect": "Creás una zona donde ningún Conjuro puede activarse sin superar una Salvación de Aura ND 18, durante 1 hora.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Voluntad Impuesta",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Aura ND 18",
    "effect": "Contacto. El objetivo queda Controlado hasta que supere una Salvación de Aura ND 18 al final de cada uno de sus turnos.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Palabra que Ordena la Realidad",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Vislumbrás un evento futuro probable con gran claridad, y percibís a distancia un lugar conocido en el mismo lanzamiento.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Guardián de la Ley",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Orden",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando cualquier criatura visible intenta romper una regla u orden que impusiste, anulás su acción por completo.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  },
  {
    "name": "Descontrol Absoluto",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Distante",
    "roll": "Salvación de Cuerpo ND 18",
    "effect": "Explosión de tamaño Distante dentro de Distante. 6d6 de daño Corrosivo y Envenenado; Salvación de Cuerpo ND 18 mitad.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Forma Indefinible",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Contacto, 1 hora. El objetivo es inmune a ser detectado, transformado o afectado por efectos que dependan de una forma fija.",
    "duration": "1 hora",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Fractura del Destino",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Utilidad)",
    "spellType": "Utilidad",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Personal / Contacto",
    "roll": "Ninguna / Automático",
    "effect": "Vislumbrás un evento futuro probable con precisión inusual.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Voluntad Fragmentada",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Acción Principal (Ataque)",
    "spellType": "Ataque",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Contacto",
    "roll": "Salvación de Aura ND 18",
    "effect": "Contacto. Salvación de Aura ND 18 o el objetivo queda Controlado, y además Confundido si falla por 5 o más.",
    "duration": "Instantáneo",
    "closing": "Se disipa tras manifestarse",
    "modifiers": ""
  },
  {
    "name": "Última Réplica",
    "level": 5,
    "cost": "15 Resistencia",
    "resCost": 15,
    "action": "Reacción",
    "spellType": "Reacción",
    "energy": "Caos",
    "affinity": "Sin Afinidad",
    "range": "Reacción / Adyacente",
    "roll": "Disparador de Reacción",
    "effect": "Cuando morirías o quedarías Inconsciente, quedás en pie con 1 de Resistencia. Este efecto no puede repetirse hasta completar un Descanso Largo.",
    "duration": "Instantáneo",
    "closing": "Tras resolver la reacción",
    "modifiers": ""
  }
]
};
if(typeof window !== "undefined") window.DATA = DATA;
if(typeof globalThis !== "undefined") globalThis.DATA = DATA;
