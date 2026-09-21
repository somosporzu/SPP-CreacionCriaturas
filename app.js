// Creador de Criaturas PAPA - Core Application Logic
// Conforme al manual oficial de reglas de diseño de criaturas (Páginas 1 - 85)

const $ = id => document.getElementById(id);
const uid = () => Math.random().toString(36).slice(2, 10);
const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
const num = v => Number(v) || 0;

const SECTIONS = [
  ['ident', '1. Identidad'],
  ['base', '2. Chasis y Tipo'],
  ['attributes', '3. Atributos'],
  ['traits', '4. Rasgos'],
  ['disadvantages', '5. Desventajas'],
  ['equipment', '6. Equipo'],
  ['attacks', '7. Ataques'],
  ['spells', '8. Conjuros'],
  ['review', '9. Revisión (Paso 11)'],
  ['export', '10. Exportar']
];

// Initial reactive state - Parámetros en blanco para comenzar la creación
const state = {
  name: '',
  identity: '',
  description: '',
  tactics: '', // Modo de actuar
  nd: '1',
  size: 'Mediano',
  baseMove: 'Cerca', // 'Cerca', 'Lejos', 'Distante'
  type: 'Bestia',
  tag: '',
  heritage: '',
  nature: '',
  behavior: 'Sin comportamiento especial',
  typeAbility: '',
  customTypeAbility: { name: '', text: '' },
  innateConcept: '',
  additionalConcepts: '',
  additionalNatures: '',
  heritageTraits: '',
  attrDelta: { Cuerpo: 0, Destreza: 0, Aura: 0 },
  selectedTraits: [],
  customTraits: [],
  selectedDisadvantages: [],
  customDisadvantages: [],
  equipment: [],
  customEquipment: [],
  manualAttacks: [],
  selectedSpells: [],
  customSpells: [],
  auras: []
};

// Preset examples for instant testing
const PRESETS = {
  lobo: {
    name: 'Lobo de Cueva',
    identity: 'El Lobo de Cueva es una bestia rapaz que caza en manadas territoriales y sirve como amenaza de emboscada en túneles oscuros.',
    description: 'Un cánido de pelaje oscuro y áspero, con fauces adaptadas para desgarrar carne gruesa en la penumbra de las cavernas.',
    tactics: 'Caza en manada coordinada hostigando presas aisladas. Si queda solo o sufre heridas severas, huye aprovechando la penumbra.',
    nd: '1',
    size: 'Mediano',
    baseMove: 'Cerca',
    type: 'Bestia',
    tag: 'Lobo',
    heritage: '',
    nature: 'Agresivo',
    behavior: 'Acechador',
    typeAbility: 'Instinto Primario',
    customTypeAbility: { name: '', text: '' },
    innateConcept: 'Bestia',
    additionalConcepts: '',
    additionalNatures: '',
    heritageTraits: '',
    attrDelta: { Cuerpo: 1, Destreza: 1, Aura: -1 },
    selectedTraits: [
      { id: uid(), name: 'Sentidos Agudos', qty: 1, note: 'Olfato agudo en oscuridad' },
      { id: uid(), name: 'Presa Marcada', qty: 1, note: 'Fija a la presa más rezagada' }
    ],
    customTraits: [],
    selectedDisadvantages: [
      { id: uid(), name: 'Sensible a la Luz', qty: 1, note: 'Desventaja bajo luz de antorchas intensas' }
    ],
    customDisadvantages: [],
    equipment: [],
    customEquipment: [],
    manualAttacks: [],
    selectedSpells: [],
    customSpells: [],
    auras: []
  },
  golem: {
    name: 'Gólem de Granito',
    identity: 'El Gólem de Granito es una entidad artificial esculpida para custodiar sepulcros arcanos y sirve como muro defensivo pesado para el DJ.',
    description: 'Bloques de piedra pulida unidos por runas incandescentes de energía pura. Marcha con un sonido atronador.',
    tactics: 'Mantiene una guardia inamovible protegiendo accesos clave. Despliega Muro Improvisado para frenar avances y combate hasta ser destruido.',
    nd: '4',
    size: 'Grande',
    baseMove: 'Cerca',
    type: 'Artificial',
    tag: 'Gólem',
    heritage: '',
    nature: 'Territorial',
    behavior: 'Defensivo',
    typeAbility: 'Núcleo Estable',
    customTypeAbility: { name: '', text: '' },
    innateConcept: 'Artificial',
    additionalConcepts: '',
    additionalNatures: '',
    heritageTraits: '',
    attrDelta: { Cuerpo: 2, Destreza: -1, Aura: 0 },
    selectedTraits: [
      { id: uid(), name: 'Armadura Natural', qty: 1, note: 'Capas de piedra maciza' },
      { id: uid(), name: 'Vitalidad Aumentada', qty: 1, note: 'Núcleo de granito denso' },
      { id: uid(), name: 'Inmunidad a Estados', qty: 1, note: 'No puede ser envenenado ni sangrar' }
    ],
    customTraits: [],
    selectedDisadvantages: [
      { id: uid(), name: 'Movimiento Lento', qty: 1, note: 'Su peso le impide correr o subir de Cerca' },
      { id: uid(), name: 'Sin Reacción', qty: 1, note: 'Reacciona con retraso mecánico' }
    ],
    customEquipment: [],
    equipment: [],
    manualAttacks: [],
    selectedSpells: [
      { ...DATA.spellsCatalog.find(s => s.name === 'Muro Improvisado'), id: uid() }
    ],
    customSpells: [],
    auras: []
  },
  piromante: {
    name: 'Sacerdote Ígneo de la Ceniza',
    identity: 'El Sacerdote Ígneo es un NPC fanático que canaliza las llamas sagradas y sirve como artillero mágico a distancia.',
    description: 'Porta túnicas chamuscadas y una máscara de obsidiana. Sus manos arden con brasas eternas que nunca se extinguen.',
    tactics: 'Ataca desde cobertura a media distancia con Lanza de Fuego. Se repliega con Escudo Improvisado si los enemigos traban combate cuerpo a cuerpo.',
    nd: '3',
    size: 'Mediano',
    baseMove: 'Cerca',
    type: 'NPC',
    tag: '',
    heritage: '',
    nature: 'Fanático',
    behavior: 'Artillero',
    typeAbility: 'Vocación',
    customTypeAbility: { name: '', text: '' },
    innateConcept: 'NPC',
    additionalConcepts: '',
    additionalNatures: '',
    heritageTraits: '',
    attrDelta: { Cuerpo: -1, Destreza: 1, Aura: 2 },
    selectedTraits: [
      { id: uid(), name: 'Afinidad con Conjuros', qty: 1, note: 'Poder arcano incrementado' },
      { id: uid(), name: 'Afinidad con un Elemento', qty: 1, note: 'Resistencia a fuego' },
      { id: uid(), name: 'Canalización Eficiente', qty: 1, note: 'Ahorro de vitalidad al conjurar' }
    ],
    customTraits: [],
    selectedDisadvantages: [
      { id: uid(), name: 'Fragilidad Física', qty: 1, note: 'Cuerpo debilitado por el calor constante' },
      { id: uid(), name: 'Conjuro Ruidoso', qty: 1, note: 'Sus invocaciones estallan con estruendo' }
    ],
    equipment: [],
    customEquipment: [],
    manualAttacks: [],
    selectedSpells: [
      { ...DATA.spellsCatalog.find(s => s.name === 'Lanza de Fuego'), id: uid() },
      { ...DATA.spellsCatalog.find(s => s.name === 'Escudo Improvisado'), id: uid() }
    ],
    customSpells: [],
    auras: []
  }
};

function cloneState(obj) {
  Object.assign(state, obj);
  state.attrDelta = Object.assign({ Cuerpo: 0, Destreza: 0, Aura: 0 }, state.attrDelta || {});
  for (const k of [
    'selectedTraits', 'customTraits', 'selectedDisadvantages', 'customDisadvantages',
    'equipment', 'customEquipment', 'manualAttacks', 'selectedSpells', 'customSpells', 'auras'
  ]) {
    state[k] = Array.isArray(state[k]) ? state[k] : [];
  }
}

function ndObj() {
  const row = DATA.ndTable.find(x => String(x[0]) === String(state.nd))
    || DATA.ndTable.find(x => String(x[0]) === '1')
    || ['1', 26, 8, 2, '1d6', 2, 0];
  return {
    nd: row[0],
    res: Number(row[1]) || 0,
    def: Number(row[2]) || 0,
    attr: Number(row[3]) || 0,
    damage: row[4] || '1d6',
    pr: Number(row[5]) || 0,
    spellLevels: Number(row[6]) || 0
  };
}

function opt(vals, sel) {
  return vals.map(v => `<option value="${esc(v)}" ${String(v) === String(sel) ? 'selected' : ''}>${esc(v)}</option>`).join('');
}

function traitMod(name, q = 1) {
  let m = { res: 0, def: 0, movBands: 0, spellLevels: 0, pr: 0, reach: null, notes: [] };
  const add = (k, v) => m[k] += v * q;

  if (name === 'Vitalidad Aumentada') add('res', 10);
  if (name === 'Afinidad con Conjuros') add('spellLevels', 1);
  if (name === 'Criatura Superior') {
    add('res', 15);
    add('def', 1);
    add('spellLevels', 1);
    m.notes.push('Criatura Superior: Ventaja en Salvaciones contra Asustado.');
  }
  if (name === 'Armadura Natural') add('def', 1);
  if (name === 'Escudo Incorporado') add('def', 1);
  if (name === 'Piel Gruesa') m.notes.push(`Piel Gruesa x${q}: Ignora ${q} punto(s) de daño.`);
  if (name === 'Velocidad Mejorada') add('movBands', 1);
  if (name === 'Alcance Mejorado') m.reach = 'Cerca';
  if (name === 'Alcance Mejorado Superior') m.reach = 'Lejos';
  if (name === 'Canalización Eficiente') m.notes.push('Canalización Eficiente: reduce en 1 el coste de Resistencia de Conjuros (mínimo 1).');
  if (name === 'Canalización Superior') m.notes.push('Canalización Superior: reduce en 2 el coste de Resistencia de Conjuros (mínimo 1).');
  if (name === 'Conjuro Preciso') m.notes.push('Conjuro Preciso: +1 a la tirada de ataque del conjuro elegido.');
  if (name === 'Conjuro Imponente') m.notes.push('Conjuro Imponente: +1 a la ND de Salvación del conjuro elegido.');
  if (name === 'Conjuro Brutal') m.notes.push('Conjuro Brutal: +2 de daño directo con el conjuro elegido.');

  return m;
}

function disadvantageMod(name, q = 1) {
  let m = { res: 0, def: 0, movBands: 0, spellLevels: 0, halfRes: false, noReactions: false, cappedMove: false, notes: [] };
  const add = (k, v) => m[k] += v * q;

  if (name === 'Fragilidad Física') add('res', -10);
  if (name === 'Cuerpo Quebradizo') add('res', -20);
  if (name === 'Defensa Deficiente') add('def', -2);
  if (name === 'Defensa Abierta') add('def', -3);
  if (name === 'Movimiento Lento') {
    m.cappedMove = true;
    m.notes.push('Movimiento Lento: No puede superar Cerca; Desventaja en persecución o huida.');
  }
  if (name === 'Sin Reacción') {
    m.noReactions = true;
    m.notes.push('Sin Reacción: No puede usar Reacciones.');
  }
  if (name === 'Criatura Menor') {
    m.halfRes = true;
    add('def', -1);
    add('movBands', -1);
    m.noReactions = true;
    m.notes.push('Criatura Menor: Resistencia a la mitad (mínimo 5); −1 Defensa; baja 1 banda de Movimiento (pasa a Contacto si estaba en Cerca); sin Reacciones.');
  }
  if (name === 'Canalización Costosa') m.notes.push('Canalización Costosa: aumenta en 1 el coste de Resistencia de Conjuros.');
  if (name === 'Canalización Agotadora') m.notes.push('Canalización Agotadora: aumenta en 2 el coste de Resistencia de Conjuros.');

  return m;
}

// Master calculation function
function calc() {
  const base = ndObj();
  const sizeInfo = DATA.sizes[state.size] || [0, 0, 'Contacto'];
  const beh = DATA.behaviors[state.behavior] || DATA.behaviors['Sin comportamiento especial'];

  // Attributes
  let C = base.attr + num(state.attrDelta.Cuerpo);
  let D = base.attr + num(state.attrDelta.Destreza);
  let A = base.attr + num(state.attrDelta.Aura);

  // Budgets
  let prBase = base.pr;
  let prGainFromAttrs = 0;
  let prSpentOnAttrs = 0;

  for (const [k, v] of Object.entries(state.attrDelta)) {
    if (v > 0) prSpentOnAttrs += v * 2;
    if (v < 0) prGainFromAttrs += Math.abs(v) * 1;
  }

  let prSpentOnTraits = 0;
  let prGainFromDis = 0;
  let spellLevelsFromTraits = beh.spellLevels || 0;

  // Modifiers
  let res = base.res + sizeInfo[0] + (beh.res || 0);
  let def = base.def + sizeInfo[1] + (beh.def || 0);
  let reach = sizeInfo[2];
  let halfRes = false;
  let noReactions = false;
  let cappedMove = false;
  let notes = [beh.note].filter(Boolean);

  // Selected Traits
  for (const st of state.selectedTraits) {
    let q = num(st.qty) || 1;
    let t = DATA.traits.find(x => x.name === st.name);
    if (!t) continue;
    prSpentOnTraits += (t.cost > 0 ? t.cost : 0) * q;
    let tm = traitMod(st.name, q);
    res += tm.res;
    def += tm.def;
    spellLevelsFromTraits += tm.spellLevels;
    if (tm.reach) {
      if (reach === 'Contacto' || (reach === 'Cerca' && tm.reach === 'Lejos')) {
        reach = tm.reach;
      }
    }
    notes.push(...tm.notes);
  }

  // Custom Traits
  for (const ct of state.customTraits) {
    let q = num(ct.qty) || 1;
    prSpentOnTraits += num(ct.cost) * q;
    C += num(ct.C) * q;
    D += num(ct.D) * q;
    A += num(ct.A) * q;
    res += num(ct.res) * q;
    def += num(ct.def) * q;
    spellLevelsFromTraits += num(ct.spellLevels) * q;
    if (ct.note) notes.push(ct.note);
  }

  // Selected Disadvantages
  for (const sd of state.selectedDisadvantages) {
    let q = num(sd.qty) || 1;
    let d = DATA.disadvantages.find(x => x.name === sd.name);
    if (!d) continue;
    prGainFromDis += num(d.pr) * q;
    let dm = disadvantageMod(sd.name, q);
    res += dm.res;
    def += dm.def;
    spellLevelsFromTraits += dm.spellLevels;
    if (dm.halfRes) halfRes = true;
    if (dm.noReactions) noReactions = true;
    if (dm.cappedMove) cappedMove = true;
    notes.push(...dm.notes);
  }

  // Custom Disadvantages
  for (const cd of state.customDisadvantages) {
    let q = num(cd.qty) || 1;
    prGainFromDis += num(cd.pr) * q;
    C += num(cd.C) * q;
    D += num(cd.D) * q;
    A += num(cd.A) * q;
    res += num(cd.res) * q;
    def += num(cd.def) * q;
    spellLevelsFromTraits += num(cd.spellLevels) * q;
    if (cd.noReactions) noReactions = true;
    if (cd.note) notes.push(cd.note);
  }

  // Equipment bonuses
  for (const eq of state.equipment) {
    let e = DATA.equipment.find(x => x.name === eq.name);
    if (e && e.defense) def += num(e.defense);
  }
  for (const ce of state.customEquipment) {
    if (ce.def) def += num(ce.def);
    if (ce.C) C += num(ce.C);
    if (ce.D) D += num(ce.D);
    if (ce.A) A += num(ce.A);
    if (ce.res) res += num(ce.res);
  }

  // Apply Res and Def limits
  if (halfRes) res = Math.floor(res / 2);
  const rawRes = res;
  res = Math.max(5, Math.floor(res));

  const rawDef = def;
  def = Math.min(16, Math.floor(def));

  // Movement band calculation
  // El movimiento base es SIEMPRE Cerca (mínimo estándar).
  // Si se mueve menos que Cerca por efecto de rasgos o desventajas, pasa a "Contacto (aproximadamente un metro)".
  let moveIdx = 1; // Base SIEMPRE es Cerca

  // Add behavior movement (ej: Hostigador +1)
  moveIdx += (beh.movBands || 0);

  // Add trait movement (Velocidad Mejorada o personalizados)
  for (const st of state.selectedTraits) {
    if (st.name === 'Velocidad Mejorada') moveIdx += num(st.qty) || 1;
  }
  for (const ct of state.customTraits) {
    if (ct.movBands) moveIdx += (num(ct.movBands) * (num(ct.qty) || 1));
  }

  // Subtractions por desventajas (Criatura Menor o personalizadas)
  for (const sd of state.selectedDisadvantages) {
    if (sd.name === 'Criatura Menor') moveIdx -= (num(sd.qty) || 1);
  }
  for (const cd of state.customDisadvantages) {
    if (cd.movBands) moveIdx -= (num(cd.movBands) * (num(cd.qty) || 1));
  }

  if (cappedMove && moveIdx > 1) moveIdx = 1; // Movimiento Lento: no puede superar Cerca

  let moveBand = 'Cerca';
  if (moveIdx >= 3) {
    moveBand = 'Distante';
  } else if (moveIdx === 2) {
    moveBand = 'Lejos';
  } else if (moveIdx === 1) {
    moveBand = 'Cerca';
  } else if (moveIdx === 0) {
    moveBand = 'Contacto (aproximadamente un metro)';
  } else {
    moveBand = 'Movimiento nulo';
  }

  if (state.behavior === 'Defensivo') {
    notes.push('Defensivo: Movimiento nulo mientras mantenga la ventaja de +1 Defensa.');
  }

  // Totals and budgets
  const prTotal = prBase + prGainFromAttrs + prGainFromDis;
  const prSpent = prSpentOnAttrs + prSpentOnTraits;
  const prRemaining = prTotal - prSpent;

  const spellLevelsTotal = base.spellLevels + spellLevelsFromTraits;
  const spellLevelsUsed = [...state.selectedSpells, ...state.customSpells].reduce((acc, s) => acc + (num(s.level) || 1), 0);
  const spellLevelsRemaining = spellLevelsTotal - spellLevelsUsed;

  return {
    base,
    C, D, A,
    res, rawRes, resAtMin: rawRes < 5,
    def, rawDef, defAtMax: rawDef > 16,
    moveBand, moveIdx,
    reach,
    prBase, prGainFromAttrs, prGainFromDis, prTotal,
    prSpentOnAttrs, prSpentOnTraits, prSpent,
    prRemaining,
    spellLevelsBase: base.spellLevels,
    spellLevelsFromTraits,
    spellLevelsTotal,
    spellLevelsUsed,
    spellLevelsRemaining,
    notes,
    noReactions,
    sizeInfo
  };
}

function saveField(path, value) {
  let parts = path.split('.');
  let o = state;
  while (parts.length > 1) o = o[parts.shift()];
  o[parts[0]] = value;
  refresh(false);
}

function rebuild() {
  buildNav();
  buildSections();
  refresh(true);
}

function refresh(rebuildLists = false) {
  renderQuickStats();
  renderSummary();
  updateValidationBadge();
  if ($('attrControls')) renderAttrControls();
  if ($('natureInfo')) renderNatureInfo();
  if ($('typeAbilityInfo')) renderTypeAbilityInfo();
  if ($('attackList')) renderAttacks();
  if ($('spellsSelectedList')) renderSelectedSpellsList();
  if ($('reviewContent')) renderReview();
  if ($('exportText')) $('exportText').value = exportText($('exportMode')?.value || 'complete');
  if ($('exportMode')) exportExplain();

  if (rebuildLists) {
    renderTraitList();
    renderDisList();
    renderEquipmentList();
    renderSpellCatalogList();
    renderTypeAbility();
  }
}

function buildNav() {
  $('nav').innerHTML = SECTIONS.map((s, i) => `
    <button data-sec="${s[0]}" class="${i === 0 ? 'active' : ''}">
      ${s[1]}
    </button>
  `).join('');
}

function switchSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id));
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.sec === id));
  $('sectionTitle').textContent = (SECTIONS.find(s => s[0] === id) || [])[1] || '';
  refresh(true);
}

// Build the main sections
function buildSections() {
  $('sections').innerHTML = `
    <!-- 1. IDENTIDAD -->
    <section id="ident" class="section active">
      <div class="field-card">
        <h3>Paso 1: Concepto e Identidad</h3>
        <p class="mini muted">Define el concepto rector de la criatura, su descripción y su modo de actuar en mesa.</p>
        <div>
          <label>Nombre de la criatura</label>
          <input data-bind="name" value="${esc(state.name)}" placeholder="Ej: Acechador de Túneles, Gólem Rúnico...">
        </div>
        <div style="margin-top:10px;">
          <label>Frase de identidad completa</label>
          <textarea data-bind="identity" placeholder="[Nombre] es [tipo] que [rasgo distintivo]...">${esc(state.identity)}</textarea>
          <small class="mini muted">Ejemplo del manual: “El Can Rúnico es una bestia arcana que rastrea el uso de conjuros y sirve como amenaza móvil y perseguidora para obligar a los magos a reposicionarse.”</small>
        </div>
        <div style="margin-top:10px;">
          <label>Descripción</label>
          <textarea data-bind="description" placeholder="Rasgos visuales, anatomía, sonidos, olor, detalles ambientales...">${esc(state.description)}</textarea>
        </div>
        <div style="margin-top:10px;">
          <label>Modo de actuar</label>
          <textarea data-bind="tactics" placeholder="Describe brevemente el comportamiento de la criatura (rutinas de combate, prioridades, cuándo huir, tácticas de manada...)...">${esc(state.tactics)}</textarea>
          <small class="mini muted">Describe brevemente cómo actúa la criatura durante encuentros e interacciones.</small>
        </div>
      </div>
    </section>

    <!-- 2. CHASIS Y TIPO -->
    <section id="base" class="section">
      <div class="field-card">
        <h3>Paso 2, 3, 5, 6, 7 y 8: Chasis Base, Tamaño, Tipo y Comportamiento</h3>
        <div class="grid3">
          <div>
            <label>Nivel de Desafío (ND)</label>
            <select id="ndSel">${opt(DATA.ndTable.map(x => x[0]), state.nd)}</select>
          </div>
          <div>
            <label>Tamaño</label>
            <select id="sizeSel">${opt(Object.keys(DATA.sizes), state.size)}</select>
          </div>
          <div>
            <label>Movimiento Base</label>
            <div style="padding: 8px 11px; background: var(--field); border: 1px solid var(--line); border-radius: 6px; font-size: 14px; display: flex; align-items: center; justify-content: space-between; min-height: 38px;">
              <span><strong>Cerca</strong> (1 banda)</span>
              <span class="badge">Fijo (regla base)</span>
            </div>
            <small class="mini muted" style="display:block;margin-top:4px;">El movimiento base es siempre <em>Cerca</em>. Si un rasgo o desventaja reduce el movimiento por debajo de eso, pasa a <em>Contacto (aproximadamente un metro)</em>.</small>
          </div>
        </div>

        <div class="grid3" style="margin-top:12px;">
          <div>
            <label>Tipo de Criatura</label>
            <select id="typeSel">${opt(Object.keys(DATA.typeAbilities), state.type)}</select>
          </div>
          <div>
            <label>Etiqueta (Sub-clasificación taxonómica)</label>
            <input data-bind="tag" value="${esc(state.tag)}" placeholder="Ej: Ave, Lobo, Gólem...">
            <small class="mini muted" style="display:block;margin-top:2px;">Sub-clasificación dentro del grupo (ej: Bestia Ave, Bestia Lobo, Artificial Gólem). No es un descriptor.</small>
          </div>
          <div>
            <label>Herencia</label>
            <input data-bind="heritage" value="${esc(state.heritage)}" placeholder="Ej: Humano, Elfo, Enano...">
          </div>
        </div>

        <div style="margin-top:12px;">
          <label>Habilidad de Tipo Gratuita (Paso 6)</label>
          <select id="typeAbilitySel"></select>
          <div id="typeAbilityInfo" class="mini-info" style="margin-top:6px;"></div>
          <div id="customTypeAbilityBox" class="hidden" style="margin-top:8px;">
            <input id="ctaName" placeholder="Nombre de habilidad personalizada..." value="${esc(state.customTypeAbility.name)}" style="margin-bottom:6px;">
            <textarea id="ctaText" placeholder="Efecto de la habilidad de tipo personalizada...">${esc(state.customTypeAbility.text)}</textarea>
          </div>
        </div>

        <div style="margin-top:12px;">
          <label>Naturaleza Principal (Paso 7)</label>
          <select id="natureSel">
            <option value="">(Seleccionar Naturaleza...)</option>
            ${opt(DATA.natures.map(x => x.name), state.nature)}
          </select>
          <div id="natureInfo" class="mini-info" style="margin-top:6px;"></div>
        </div>

        <div style="margin-top:12px;">
          <label>Comportamiento Táctico (Paso 8)</label>
          <select id="behaviorSel">${opt(Object.keys(DATA.behaviors), state.behavior)}</select>
          <div id="behaviorInfo" class="mini-info" style="margin-top:6px;"></div>
        </div>
      </div>
    </section>

    <!-- 3. ATRIBUTOS Y RECURSOS -->
    <section id="attributes" class="section">
      <div class="field-card">
        <h3>Paso 4: Asignación de Atributos y Límites de Seguridad</h3>
        <p class="mini muted">
          Cada Atributo parte con el valor base asignado por su ND.
          <strong>Subir un atributo cuesta 2 PR por punto</strong>.
          <strong>Bajar un atributo por debajo del valor base otorga 1 PR por punto</strong>.
        </p>
        <div id="attrControls"></div>
        <div class="hr"></div>
        <div id="calcDetails"></div>
      </div>
    </section>

    <!-- 4. RASGOS A FAVOR -->
    <section id="traits" class="section">
      <div class="field-card">
        <h3>Paso 9: Rasgos a Favor (12 Categorías Oficiales)</h3>
        <p class="mini muted">Los rasgos definen las ventajas, defensas, sentidos, ataques especiales y dones mágicos de la criatura. Todos los costes descuentan Puntos de Rasgo (PR).</p>
        <div class="grid3">
          <div>
            <label>Buscar en catálogo</label>
            <input id="traitSearch" placeholder="Nombre, palabra clave o efecto...">
          </div>
          <div>
            <label>Categoría</label>
            <select id="traitCat">
              <option value="">Todas las categorías (1 a 12)</option>
              <option value="__custom__">★ Crear Rasgo Personalizado</option>
              ${opt([...new Set(DATA.traits.map(x => x.category))], '')}
            </select>
          </div>
          <div>
            <label>Filtro Rápido</label>
            <select id="traitQuickFilter">
              <option value="all">Mostrar todos</option>
              <option value="selected">Solo seleccionados en esta ficha</option>
              <option value="unselected">Solo no seleccionados</option>
              <option value="cost1">Coste: 1 PR</option>
              <option value="cost2">Coste: 2 PR</option>
              <option value="cost3">Coste: 3+ PR</option>
            </select>
          </div>
        </div>
        <div id="customTraitBox" class="hidden" style="margin-top:12px;">
          <h4>Nuevo Rasgo Personalizado</h4>
          ${customTraitForm()}
        </div>
        <div id="traitCatalogBox" style="margin-top:12px;">
          <div id="traitList" class="list"></div>
        </div>
      </div>
    </section>

    <!-- 5. DESVENTAJAS -->
    <section id="disadvantages" class="section">
      <div class="field-card">
        <h3>Paso 9: Desventajas (Menores +1 PR, Medias +2 PR, Mayores +3 PR)</h3>
        <p class="mini muted">Las desventajas otorgan PR adicionales al presupuesto, introduciendo debilidades, vulnerabilidades, costes mágicos o límites físicos claros.</p>
        <div class="grid3">
          <div>
            <label>Buscar desventaja</label>
            <input id="disSearch" placeholder="Nombre o efecto...">
          </div>
          <div>
            <label>Grado / Categoría</label>
            <select id="disCat">
              <option value="">Todas las desventajas</option>
              <option value="__custom__">★ Crear Desventaja Personalizada</option>
              ${opt([...new Set(DATA.disadvantages.map(x => x.category))], '')}
            </select>
          </div>
          <div>
            <label>Filtro Rápido</label>
            <select id="disQuickFilter">
              <option value="all">Mostrar todas</option>
              <option value="selected">Solo seleccionadas en esta ficha</option>
              <option value="unselected">Solo no seleccionadas</option>
              <option value="pr1">Menor (+1 PR)</option>
              <option value="pr2">Media (+2 PR)</option>
              <option value="pr3">Mayor (+3 PR)</option>
            </select>
          </div>
        </div>
        <div id="customDisBox" class="hidden" style="margin-top:12px;">
          <h4>Nueva Desventaja Personalizada</h4>
          ${customDisForm()}
        </div>
        <div id="disCatalogBox" style="margin-top:12px;">
          <div id="disList" class="list"></div>
        </div>
      </div>
    </section>

    <!-- 6. EQUIPO -->
    <section id="equipment" class="section">
      <div class="field-card">
        <h3>Equipo, Armamento y Protección</h3>
        <p class="mini muted">Armas, escudos, armaduras y objetos especiales. Las armas equipadas se integran automáticamente en la lista de ataques con sus propiedades oficiales.</p>
        <div class="grid2">
          <div>
            <label>Buscar equipo</label>
            <input id="eqSearch" placeholder="Arma, escudo, armadura...">
          </div>
          <div>
            <label>Tipo de equipo</label>
            <select id="eqCat">
              <option value="">Todo el equipo</option>
              <option value="__custom__">★ Crear Equipo Personalizado</option>
              ${opt([...new Set(DATA.equipment.map(x => x.category))], '')}
            </select>
          </div>
        </div>
        <div id="customEqBox" class="hidden" style="margin-top:12px;">
          <h4>Nuevo Objeto o Arma Personalizada</h4>
          ${customEqForm()}
        </div>
        <div id="eqCatalogBox" style="margin-top:12px;">
          <div id="equipmentList" class="list"></div>
        </div>
      </div>
    </section>

    <!-- 7. ATAQUES -->
    <section id="attacks" class="section">
      <div class="field-card">
        <h3>Paso 10: Acciones de Ataque</h3>
        <p class="mini muted">
          Por defecto, toda criatura posee un ataque natural principal "Golpe" basado en el Daño Base de su ND y su alcance natural (determinado por su Tamaño y rasgos como Alcance Mejorado).
          Puedes añadir ataques adicionales o personalizar las tiradas.
        </p>
        <div id="attackList"></div>
        <div class="hr"></div>
        <h4>Agregar Acción de Ataque Personalizada</h4>
        ${manualAttackForm()}
      </div>
    </section>

    <!-- 8. CONJUROS -->
    <section id="spells" class="section">
      <div class="field-card">
        <h3>Paso 10: Conjuros del Sistema PAPA</h3>
        <p class="mini muted">
          Los Conjuros de criaturas se estructuran con: Nivel (I al V), Coste de Resistencia (mínimo 1), Tipo de Acción (Principal, Rápida o Reacción), Energía primordial, Afinidad elemental, Distancia/Área en bandas, Tirada o Salvación, Efecto, Duración y Cierre.
          El ND otorga Niveles de Conjuro gratuitos; adquiere más mediante el rasgo <em>Afinidad con Conjuros</em>.
        </p>

        <div style="margin-bottom:14px;" class="statbox">
          <div class="stat">
            <b id="spellLevelsDisplay">0 / 0</b>
            <span>Niveles de Conjuro (Usados / Totales)</span>
          </div>
        </div>

        <div id="spellsSelectedList" style="margin-bottom:16px;"></div>

        <div class="hr"></div>
        <h4>Catálogo de Conjuros Canónicos (150 Conjuros del Grimorio)</h4>
        <div class="grid2" style="display:grid;grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));gap:8px;">
          <div>
            <label>Buscar conjuro</label>
            <input id="spellSearch" placeholder="Nombre, efecto, afinidad...">
          </div>
          <div>
            <label>Nivel de Conjuro</label>
            <select id="spellLevelFilter">
              <option value="">Todos los niveles (I a V)</option>
              <option value="1">Nivel I (3 Resistencia)</option>
              <option value="2">Nivel II (6 Resistencia)</option>
              <option value="3">Nivel III (9 Resistencia)</option>
              <option value="4">Nivel IV (12 Resistencia)</option>
              <option value="5">Nivel V (15 Resistencia)</option>
            </select>
          </div>
          <div>
            <label>Energía Primordial</label>
            <select id="spellEnergyFilter">
              <option value="">Todas las energías (6)</option>
              <option value="Destrucción">Destrucción</option>
              <option value="Creación">Creación</option>
              <option value="Transformación">Transformación</option>
              <option value="Conservación">Conservación</option>
              <option value="Orden">Orden</option>
              <option value="Caos">Caos</option>
            </select>
          </div>
          <div>
            <label>Tipo de Acción</label>
            <select id="spellTypeFilter">
              <option value="">Todos los tipos</option>
              <option value="Ataque">Ataque</option>
              <option value="Apoyo">Apoyo</option>
              <option value="Utilidad">Utilidad</option>
              <option value="Reacción">Reacción</option>
            </select>
          </div>
        </div>
        <div id="spellCatalogList" class="list" style="margin-top:10px;"></div>

        <div class="hr"></div>
        <h4>Diseñar Conjuro Personalizado</h4>
        ${customSpellForm()}
      </div>
    </section>

    <!-- 9. REVISIÓN (PASO 11) -->
    <section id="review" class="section">
      <div class="field-card">
        <h3>Paso 11: Auditoría y Lista de Chequeo de Seguridad</h3>
        <p class="mini muted">
          El manual exige verificar 15 puntos críticos antes de finalizar una criatura para garantizar que es matemáticamente sólida, divertida y segura de poner en mesa.
        </p>
        <div id="reviewContent"></div>
      </div>
    </section>

    <!-- 10. EXPORTAR -->
    <section id="export" class="section">
      <div class="field-card">
        <h3>Exportación de Ficha Técnica</h3>
        <div class="grid2">
          <div>
            <label>Formato de exportación</label>
            <select id="exportMode">
              <option value="complete">Versión completa para Diseñadores (Págs 82-84)</option>
              <option value="compact">Versión compacta para manuales y bestiarios (Págs 84-85)</option>
              <option value="discord">Formato Discord (Markdown limpio para canales y chats)</option>
              <option value="bbcode">Formato BBCode (Foros de rol y comunidades)</option>
            </select>
          </div>
          <div>
            <label>Acciones rápidas</label>
            <div class="row" style="margin-top:4px;gap:6px;flex-wrap:wrap;">
              <button class="btn" id="copyText">Copiar al portapapeles</button>
              <button class="btn secondary" id="downloadTxt">Descargar .txt</button>
              <button class="btn secondary" id="openStatblockFromExportBtn">📜 Abrir Tarjeta de Bestiario</button>
            </div>
          </div>
        </div>
        <div class="mini-info" style="margin-top:10px;">
          <strong id="exportExplainTitle"></strong>
          <p id="exportExplain" class="mini" style="margin:4px 0 0 0;"></p>
        </div>
        <div style="margin-top:12px;">
          <label>Ficha generada</label>
          <textarea id="exportText" class="exportBox" readonly></textarea>
        </div>
      </div>
    </section>
  `;

  bindBaseInputs();
  bindCustomButtons();
  bindExportButtons();
}

// Bind static inputs for Base & Chasis
function bindBaseInputs() {
  document.querySelectorAll('[data-bind]').forEach(el => {
    el.oninput = () => saveField(el.dataset.bind, el.value);
  });

  $('ndSel').onchange = e => { state.nd = e.target.value; refresh(true); };
  $('sizeSel').onchange = e => { state.size = e.target.value; refresh(true); };
  $('typeSel').onchange = e => {
    state.type = e.target.value;
    let allowed = (DATA.typeAbilities[state.type] || []).map(x => x.name);
    if (state.typeAbility !== '__custom__' && !allowed.includes(state.typeAbility)) {
      state.typeAbility = '';
    }
    renderTypeAbility();
    refresh(true);
  };
  $('natureSel').onchange = e => { state.nature = e.target.value; renderNatureInfo(); refresh(false); };
  $('behaviorSel').onchange = e => { state.behavior = e.target.value; renderBehaviorInfo(); refresh(true); };

  $('traitSearch').oninput = renderTraitList;
  if ($('traitQuickFilter')) $('traitQuickFilter').onchange = renderTraitList;
  $('traitCat').onchange = e => {
    $('customTraitBox').classList.toggle('hidden', e.target.value !== '__custom__');
    $('traitCatalogBox').classList.toggle('hidden', e.target.value === '__custom__');
    renderTraitList();
  };

  $('disSearch').oninput = renderDisList;
  if ($('disQuickFilter')) $('disQuickFilter').onchange = renderDisList;
  $('disCat').onchange = e => {
    $('customDisBox').classList.toggle('hidden', e.target.value !== '__custom__');
    $('disCatalogBox').classList.toggle('hidden', e.target.value === '__custom__');
    renderDisList();
  };

  $('eqSearch').oninput = renderEquipmentList;
  $('eqCat').onchange = e => {
    $('customEqBox').classList.toggle('hidden', e.target.value !== '__custom__');
    $('eqCatalogBox').classList.toggle('hidden', e.target.value === '__custom__');
    renderEquipmentList();
  };

  $('spellSearch').oninput = renderSpellCatalogList;
  $('spellLevelFilter').onchange = renderSpellCatalogList;
  if ($('spellEnergyFilter')) $('spellEnergyFilter').onchange = renderSpellCatalogList;
  if ($('spellTypeFilter')) $('spellTypeFilter').onchange = renderSpellCatalogList;

  $('exportMode').onchange = () => {
    exportExplain();
    $('exportText').value = exportText($('exportMode').value);
  };

  renderNatureInfo();
  renderBehaviorInfo();
}

function renderNatureInfo() {
  let n = DATA.natures.find(x => x.name === state.nature);
  if ($('natureInfo')) {
    $('natureInfo').innerHTML = n ? `<strong>${esc(n.name)}:</strong> ${esc(n.desc)}` : 'Sin naturaleza seleccionada.';
  }
}

function renderBehaviorInfo() {
  let b = DATA.behaviors[state.behavior];
  if ($('behaviorInfo')) {
    $('behaviorInfo').innerHTML = b ? `<strong>${esc(state.behavior)}:</strong> ${esc(b.note)}` : '';
  }
}

function renderTypeAbilityInfo() {
  let box = $('typeAbilityInfo');
  if (!box) return;
  if (!state.typeAbility) {
    let typeDesc = DATA.typeDescriptions && DATA.typeDescriptions[state.type];
    box.innerHTML = typeDesc
      ? `<span class="muted" style="font-size:12px;"><strong>Tipo ${esc(state.type)}:</strong> ${esc(typeDesc)}</span>`
      : '<span class="muted" style="font-size:12px;">Elige una habilidad gratuita correspondiente a este Tipo.</span>';
    return;
  }
  if (state.typeAbility === '__custom__') {
    box.innerHTML = '<span style="font-size:12px;"><strong>Habilidad Personalizada:</strong> Define el nombre y efecto en los campos inferiores.</span>';
    return;
  }
  let a = (DATA.typeAbilities[state.type] || []).find(x => x.name === state.typeAbility);
  if (a) {
    box.innerHTML = `<strong>${esc(a.name)}</strong><div style="margin-top:4px;white-space:pre-line;font-size:12px;line-height:1.4;">${esc(a.text)}</div>`;
  } else {
    box.innerHTML = '';
  }
}

function renderTypeAbility() {
  let sel = $('typeAbilitySel');
  if (!sel) return;
  let abilities = DATA.typeAbilities[state.type] || [];
  sel.innerHTML = `
    <option value="">(Ninguna seleccionada)</option>
    ${opt(abilities.map(x => x.name), state.typeAbility)}
    <option value="__custom__" ${state.typeAbility === '__custom__' ? 'selected' : ''}>★ Habilidad Personalizada</option>
  `;
  sel.onchange = e => {
    state.typeAbility = e.target.value;
    $('customTypeAbilityBox').classList.toggle('hidden', state.typeAbility !== '__custom__');
    renderTypeAbilityInfo();
    refresh(false);
  };
  $('customTypeAbilityBox').classList.toggle('hidden', state.typeAbility !== '__custom__');

  $('ctaName').oninput = e => { state.customTypeAbility.name = e.target.value; refresh(false); };
  $('ctaText').oninput = e => { state.customTypeAbility.text = e.target.value; refresh(false); };
  renderTypeAbilityInfo();
}

function renderAttrControls() {
  let box = $('attrControls');
  if (!box) return;
  const base = ndObj().attr;
  box.innerHTML = ['Cuerpo', 'Destreza', 'Aura'].map(attr => {
    const delta = num(state.attrDelta[attr]);
    const total = base + delta;
    return `
      <div class="attr-row">
        <div class="attr-title">
          <strong>${attr}</strong>
          <small class="mini muted">Base por ND: ${base}</small>
        </div>
        <div class="attr-actions">
          <button class="btn-sm" onclick="modAttr('${attr}', -1)">−</button>
          <span class="attr-val ${delta > 0 ? 'text-good' : delta < 0 ? 'text-bad' : ''}">${total}</span>
          <button class="btn-sm" onclick="modAttr('${attr}', 1)">+</button>
          <span class="mini muted attr-cost">
            ${delta > 0 ? `Cuesta ${delta * 2} PR` : delta < 0 ? `Otorga +${Math.abs(delta)} PR` : 'Sin cambio'}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

window.modAttr = (attr, dir) => {
  state.attrDelta[attr] = (state.attrDelta[attr] || 0) + dir;
  refresh(false);
};

function renderCalcDetails() {
  let c = calc();
  $('calcDetails').innerHTML = `
    <div class="statbox">
      <div class="stat">
        <b>${c.prTotal}</b>
        <span>PR Totales</span>
      </div>
      <div class="stat">
        <b class="${c.prSpent > c.prTotal ? 'text-bad' : ''}">${c.prSpent}</b>
        <span>PR Usados</span>
      </div>
      <div class="stat">
        <b class="${c.prRemaining < 0 ? 'text-bad' : 'text-good'}">${c.prRemaining}</b>
        <span>PR Restantes</span>
      </div>
    </div>
    <div style="margin-top:10px;" class="mini muted">
      Desglose de PR: Base por ND (${c.prBase}) + Deficiencias de Atributos (${c.prGainFromAttrs}) + Desventajas (${c.prGainFromDis}) = <strong>${c.prTotal} PR</strong>.
      Gastos: Mejoras de Atributo (${c.prSpentOnAttrs}) + Rasgos a favor (${c.prSpentOnTraits}) = <strong>${c.prSpent} PR</strong>.
    </div>
  `;
}

// Custom forms
function customTraitForm() {
  return `
    <div class="grid2">
      <div><label>Nombre del rasgo</label><input id="ctName" placeholder="Ej: Piel Ígnea..."></div>
      <div><label>Coste en PR</label><input id="ctCost" type="number" value="1" min="0"></div>
    </div>
    <div class="grid3" style="margin-top:8px;">
      <div><label>Mod. Cuerpo</label><input id="ctC" type="number" value="0"></div>
      <div><label>Mod. Destreza</label><input id="ctD" type="number" value="0"></div>
      <div><label>Mod. Aura</label><input id="ctA" type="number" value="0"></div>
    </div>
    <div class="grid4" style="margin-top:8px;">
      <div><label>Mod. Resistencia</label><input id="ctRes" type="number" value="0"></div>
      <div><label>Mod. Defensa</label><input id="ctDef" type="number" value="0"></div>
      <div><label>Niveles de Conjuro</label><input id="ctSpellLevels" type="number" value="0"></div>
      <div><label>Mod. Movimiento</label><input id="ctMove" type="number" value="0" placeholder="± Bandas"></div>
    </div>
    <div style="margin-top:8px;">
      <label>Texto y efecto del rasgo</label>
      <textarea id="ctNote" placeholder="Cuándo se activa y qué hace..."></textarea>
    </div>
    <button class="btn" id="addCustomTrait" style="margin-top:8px;">Guardar Rasgo Personalizado</button>
  `;
}

function customDisForm() {
  return `
    <div class="grid2">
      <div><label>Nombre de la desventaja</label><input id="cdName" placeholder="Ej: Vulnerable a la Plata..."></div>
      <div><label>PR que otorga</label><input id="cdPR" type="number" value="1" min="1" max="5"></div>
    </div>
    <div class="grid4" style="margin-top:8px;">
      <div><label>Mod. Resistencia</label><input id="cdRes" type="number" value="0"></div>
      <div><label>Mod. Defensa</label><input id="cdDef" type="number" value="0"></div>
      <div><label>Reducción Mov.</label><input id="cdMove" type="number" value="0" placeholder="Bandas a restar"></div>
      <div><label>Anula Reacciones</label><select id="cdNoReactions"><option value="0">No</option><option value="1">Sí (No puede reaccionar)</option></select></div>
    </div>
    <div style="margin-top:8px;">
      <label>Texto y efecto de la desventaja</label>
      <textarea id="cdNote" placeholder="Cuándo se activa, qué penalización aplica y cómo termina..."></textarea>
    </div>
    <button class="btn" id="addCustomDis" style="margin-top:8px;">Guardar Desventaja Personalizada</button>
  `;
}

function customEqForm() {
  return `
    <div class="grid2">
      <div><label>Nombre del equipo / objeto</label><input id="ceName" placeholder="Ej: Hacha Encantada, Armadura de Escamas..."></div>
      <div><label>Tipo</label><input id="ceType" placeholder="Arma cuerpo a cuerpo, Armadura, Foco..."></div>
    </div>
    <div class="grid3" style="margin-top:8px;">
      <div><label>Bono Defensa</label><input id="ceDef" type="number" value="0"></div>
      <div><label>Daño</label><input id="ceDamage" placeholder="Ej: 1d6 + 2"></div>
      <div><label>Tipo de daño</label><input id="ceDmgType" placeholder="Cortante, Fuego..."></div>
    </div>
    <div style="margin-top:8px;">
      <label>Notas y propiedades especiales</label>
      <input id="ceNote" placeholder="Pesada, Versátil, Arrojadiza...">
    </div>
    <button class="btn" id="addCustomEq" style="margin-top:8px;">Agregar Equipo Personalizado</button>
  `;
}

function manualAttackForm() {
  return `
    <div class="grid2">
      <div><label>Nombre del ataque</label><input id="atkName" placeholder="Ej: Coletazo Pútrido, Mordedura Voraz..."></div>
      <div><label>Atributo para la tirada</label><select id="atkAttr"><option value="Cuerpo">Cuerpo</option><option value="Destreza">Destreza</option><option value="Aura">Aura</option></select></div>
    </div>
    <div class="grid3" style="margin-top:8px;">
      <div><label>Alcance / Distancia</label><select id="atkRange"><option value="Contacto">Contacto</option><option value="Cerca">Cerca</option><option value="Lejos">Lejos</option><option value="Distante">Distante</option></select></div>
      <div><label>Daño</label><input id="atkDamage" placeholder="Ej: Daño Base, o 2d6 + 1"></div>
      <div><label>Tipo de daño</label><input id="atkType" placeholder="Contundente, Perforante, Veneno..."></div>
    </div>
    <div style="margin-top:8px;">
      <label>Efectos adicionales</label>
      <input id="atkEffect" placeholder="Ej: Empuja 1 banda si falla Salvación de Cuerpo ND 10...">
    </div>
    <button class="btn" id="addManualAttack" style="margin-top:8px;">Agregar Acción de Ataque</button>
  `;
}

function customSpellForm() {
  return `
    <div class="grid3">
      <div>
        <label>Nombre del Conjuro</label>
        <input id="csName" placeholder="Ej: Muro de Zarzas, Descarga Helada...">
      </div>
      <div>
        <label>Nivel de Conjuro (Gasto en niveles)</label>
        <select id="csLevel">
          <option value="1">Nivel I (1 Nivel de Conjuro)</option>
          <option value="2">Nivel II (2 Niveles de Conjuro)</option>
          <option value="3">Nivel III (3 Niveles de Conjuro)</option>
          <option value="4">Nivel IV (4 Niveles de Conjuro)</option>
          <option value="5">Nivel V (5 Niveles de Conjuro)</option>
        </select>
      </div>
      <div>
        <label>Coste en Resistencia (Mínimo 1)</label>
        <input id="csCost" type="number" value="2" min="1">
      </div>
    </div>
    <div class="grid3" style="margin-top:8px;">
      <div>
        <label>Tipo de Acción</label>
        <select id="csAction">
          <option value="Acción Principal">Acción Principal</option>
          <option value="Acción Rápida">Acción Rápida</option>
          <option value="Reacción">Reacción</option>
        </select>
      </div>
      <div>
        <label>Energía Primordial</label>
        <select id="csEnergy">
          <option value="Destrucción">Destrucción</option>
          <option value="Conservación">Conservación</option>
          <option value="Transformación">Transformación</option>
          <option value="Creación">Creación</option>
          <option value="Orden">Orden</option>
          <option value="Caos">Caos</option>
          <option value="Sin Energía">Sin Energía</option>
        </select>
      </div>
      <div>
        <label>Afinidad Elemental</label>
        <input id="csAffinity" placeholder="Fuego, Agua, Madera, Metal, Tierra...">
      </div>
    </div>
    <div class="grid2" style="margin-top:8px;">
      <div>
        <label>Distancia o Área (en bandas)</label>
        <input id="csRange" placeholder="Contacto, Cerca, Lejos, Distante, radio Cerca...">
      </div>
      <div>
        <label>Tirada de Ataque o Salvación</label>
        <input id="csRoll" placeholder="Ej: Salvación Destreza ND 10, o Ataque con Aura...">
      </div>
    </div>
    <div style="margin-top:8px;">
      <label>Efecto del Conjuro</label>
      <textarea id="csEffect" placeholder="Describe claramente qué daño inflige, qué estado aplica o qué cambia en el entorno..."></textarea>
    </div>
    <div class="grid2" style="margin-top:8px;">
      <div>
        <label>Duración</label>
        <input id="csDuration" placeholder="Instantáneo, 1 ronda, Concentración hasta 3 rondas...">
      </div>
      <div>
        <label>Cierre</label>
        <input id="csClosing" placeholder="Cómo termina el efecto o qué lo disipa...">
      </div>
    </div>
    <div style="margin-top:8px;">
      <label>Rasgos que lo modifican</label>
      <input id="csModifiers" placeholder="Canalización Eficiente, Conjuro Preciso, etc.">
    </div>
    <button class="btn" id="addCustomSpell" style="margin-top:10px;">Crear y Aprender Conjuro</button>
  `;
}

// Catalog Rendering
function renderTraitList() {
  let cat = $('traitCat')?.value || '';
  let search = ($('traitSearch')?.value || '').toLowerCase();
  let quick = $('traitQuickFilter')?.value || 'all';
  let list = $('traitList');
  if (!list) return;

  let traits = DATA.traits.filter(t => {
    let sel = state.selectedTraits.find(x => x.name === t.name);
    if (quick === 'selected' && !sel) return false;
    if (quick === 'unselected' && sel) return false;
    if (quick === 'cost1' && (num(t.cost) !== 1)) return false;
    if (quick === 'cost2' && (num(t.cost) !== 2)) return false;
    if (quick === 'cost3' && (num(t.cost) < 3)) return false;

    if (cat && t.category !== cat) return false;
    if (search && !t.name.toLowerCase().includes(search) && !t.text.toLowerCase().includes(search) && !t.category.toLowerCase().includes(search)) return false;
    return true;
  });

  list.innerHTML = traits.map(t => {
    let sel = state.selectedTraits.find(x => x.name === t.name);
    return `
      <div class="item-card ${sel ? 'selected' : ''}">
        <div class="item-header">
          <div>
            <strong>${esc(t.name)}</strong>
            <span class="badge">${esc(t.costText || `${t.cost} PR`)}</span>
            <span class="mini muted">${esc(t.category)}</span>
          </div>
          <div>
            ${sel ? `
              <button class="btn-sm danger" onclick="removeBuilt('trait', '${esc(t.name)}')">Quitar</button>
            ` : `
              <button class="btn-sm" onclick="addBuilt('trait', '${esc(t.name)}')">Agregar</button>
            `}
          </div>
        </div>
        <div class="item-text">${esc(t.text)}</div>
      </div>
    `;
  }).join('') || '<p class="mini muted">No se encontraron rasgos con ese criterio o filtro seleccionado.</p>';
}

function renderDisList() {
  let cat = $('disCat')?.value || '';
  let search = ($('disSearch')?.value || '').toLowerCase();
  let quick = $('disQuickFilter')?.value || 'all';
  let list = $('disList');
  if (!list) return;

  let dis = DATA.disadvantages.filter(d => {
    let sel = state.selectedDisadvantages.find(x => x.name === d.name);
    if (quick === 'selected' && !sel) return false;
    if (quick === 'unselected' && sel) return false;
    if (quick === 'pr1' && (num(d.pr) !== 1)) return false;
    if (quick === 'pr2' && (num(d.pr) !== 2)) return false;
    if (quick === 'pr3' && (num(d.pr) < 3)) return false;

    if (cat && d.category !== cat) return false;
    if (search && !d.name.toLowerCase().includes(search) && !d.text.toLowerCase().includes(search) && !d.category.toLowerCase().includes(search)) return false;
    return true;
  });

  list.innerHTML = dis.map(d => {
    let sel = state.selectedDisadvantages.find(x => x.name === d.name);
    return `
      <div class="item-card ${sel ? 'selected' : ''}">
        <div class="item-header">
          <div>
            <strong>${esc(d.name)}</strong>
            <span class="badge good">+${esc(d.pr)} PR</span>
            <span class="mini muted">${esc(d.category)}</span>
          </div>
          <div>
            ${sel ? `
              <button class="btn-sm danger" onclick="removeBuilt('dis', '${esc(d.name)}')">Quitar</button>
            ` : `
              <button class="btn-sm" onclick="addBuilt('dis', '${esc(d.name)}')">Agregar</button>
            `}
          </div>
        </div>
        <div class="item-text">${esc(d.text)}</div>
      </div>
    `;
  }).join('') || '<p class="mini muted">No se encontraron desventajas con ese criterio o filtro seleccionado.</p>';
}

function renderEquipmentList() {
  let cat = $('eqCat')?.value || '';
  let search = ($('eqSearch')?.value || '').toLowerCase();
  let list = $('equipmentList');
  if (!list) return;

  let eq = DATA.equipment.filter(e => {
    if (cat && e.category !== cat) return false;
    if (search && !e.name.toLowerCase().includes(search) && !e.category.toLowerCase().includes(search) && !(e.properties || '').toLowerCase().includes(search)) return false;
    return true;
  });

  list.innerHTML = eq.map(e => {
    let sel = state.equipment.find(x => x.name === e.name);
    let details = [
      e.damage ? `Daño: ${e.damage} ${e.dmgType || ''}` : '',
      e.defense ? `+${e.defense} Defensa` : '',
      e.properties ? `Propiedades: ${e.properties}` : ''
    ].filter(Boolean).join(' · ');

    return `
      <div class="item-card ${sel ? 'selected' : ''}">
        <div class="item-header">
          <div>
            <strong>${esc(e.name)}</strong>
            <span class="badge">${esc(e.category)}</span>
          </div>
          <div>
            ${sel ? `
              <button class="btn-sm danger" onclick="removeBuilt('eq', '${esc(e.name)}')">Quitar</button>
            ` : `
              <button class="btn-sm" onclick="addBuilt('eq', '${esc(e.name)}')">Equipar</button>
            `}
          </div>
        </div>
        ${details ? `<div class="mini muted" style="margin-top:4px;">${esc(details)}</div>` : ''}
      </div>
    `;
  }).join('') || '<p class="mini muted">No se encontró equipo con ese criterio.</p>';
}

function renderSpellCatalogList() {
  let search = ($('spellSearch')?.value || '').toLowerCase();
  let lvlFilter = $('spellLevelFilter')?.value || '';
  let energyFilter = $('spellEnergyFilter')?.value || '';
  let typeFilter = $('spellTypeFilter')?.value || '';
  let list = $('spellCatalogList');
  if (!list) return;

  let spells = DATA.spellsCatalog.filter(s => {
    if (lvlFilter && String(s.level) !== String(lvlFilter)) return false;
    if (energyFilter && s.energy !== energyFilter) return false;
    if (typeFilter && s.spellType !== typeFilter) return false;
    if (search && !s.name.toLowerCase().includes(search) && !s.effect.toLowerCase().includes(search) && !s.energy.toLowerCase().includes(search) && !s.affinity.toLowerCase().includes(search)) return false;
    return true;
  });

  list.innerHTML = spells.map(s => {
    let alreadySelected = state.selectedSpells.some(x => x.name === s.name);
    return `
      <div class="item-card ${alreadySelected ? 'selected' : ''}">
        <div class="item-header">
          <div>
            <strong>${esc(s.name)}</strong>
            <span class="badge">Nivel ${'I'.repeat(s.level)}</span>
            <span class="badge">${esc(s.cost)}</span>
            <span class="badge" style="background:rgba(196,130,63,0.15);border-color:var(--accent);color:var(--accent2);">${esc(s.energy)}</span>
            <span class="mini muted">${esc(s.action)} · ${esc(s.affinity)}</span>
          </div>
          <div>
            ${alreadySelected ? `
              <button class="btn-sm danger" onclick="removeSpellByName('${esc(s.name)}')">Quitar</button>
            ` : `
              <button class="btn-sm" onclick="addCatalogSpell('${esc(s.name)}')">Aprender</button>
            `}
          </div>
        </div>
        <div class="mini muted" style="margin-top:4px;">
          Distancia/Área: <strong>${esc(s.range)}</strong> | Tirada/Salvación: <strong>${esc(s.roll)}</strong> | Duración: <strong>${esc(s.duration)}</strong>
        </div>
        <div class="item-text" style="margin-top:4px;">${esc(s.effect)}</div>
      </div>
    `;
  }).join('') || '<p class="mini muted">No se encontraron conjuros con ese criterio.</p>';
}

function renderSelectedSpellsList() {
  let box = $('spellsSelectedList');
  if (!box) return;

  const c = calc();
  if ($('spellLevelsDisplay')) {
    $('spellLevelsDisplay').innerHTML = `
      <span class="${c.spellLevelsRemaining < 0 ? 'text-bad' : ''}">${c.spellLevelsUsed} / ${c.spellLevelsTotal}</span>
    `;
  }

  const all = [
    ...state.selectedSpells.map(s => ({ ...s, isCustom: false })),
    ...state.customSpells.map(s => ({ ...s, isCustom: true }))
  ];

  if (all.length === 0) {
    box.innerHTML = '<p class="mini muted">Esta criatura aún no conoce ningún Conjuro. Aprende conjuros del catálogo o diseña uno personalizado.</p>';
    return;
  }

  box.innerHTML = `
    <h4>Conjuros Aprendidos (${all.length})</h4>
    <div class="list">
      ${all.map(s => `
        <div class="item-card">
          <div class="item-header">
            <div>
              <strong>${esc(s.name)}</strong>
              <span class="badge">Nivel ${'I'.repeat(s.level || 1)}</span>
              <span class="badge">${esc(s.cost || `${s.resCost || 2} Resistencia`)}</span>
              <span class="mini muted">${esc(s.action)} · ${esc(s.energy)} (${esc(s.affinity)})</span>
            </div>
            <div>
              <button class="btn-sm danger" onclick="removeSpellById('${s.id}')">Eliminar</button>
            </div>
          </div>
          <div class="mini muted" style="margin-top:4px;">
            Alcance: <strong>${esc(s.range)}</strong> | Tirada/Salvación: <strong>${esc(s.roll)}</strong> | Duración: <strong>${esc(s.duration)}</strong>
          </div>
          <div class="item-text" style="margin-top:4px;">${esc(s.effect)}</div>
          ${s.closing ? `<div class="mini muted">Cierre: ${esc(s.closing)}</div>` : ''}
          ${s.modifiers ? `<div class="mini muted">Modificadores: ${esc(s.modifiers)}</div>` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

// Add/Remove built-ins
window.addBuilt = (type, name) => {
  if (type === 'trait') state.selectedTraits.push({ id: uid(), name, qty: 1, note: '' });
  if (type === 'dis') state.selectedDisadvantages.push({ id: uid(), name, qty: 1, note: '' });
  if (type === 'eq') state.equipment.push({ id: uid(), name, note: '' });
  refresh(true);
};

window.removeBuilt = (type, name) => {
  if (type === 'trait') state.selectedTraits = state.selectedTraits.filter(x => x.name !== name);
  if (type === 'dis') state.selectedDisadvantages = state.selectedDisadvantages.filter(x => x.name !== name);
  if (type === 'eq') state.equipment = state.equipment.filter(x => x.name !== name);
  refresh(true);
};

window.addCatalogSpell = name => {
  let s = DATA.spellsCatalog.find(x => x.name === name);
  if (s) {
    state.selectedSpells.push({ ...s, id: uid() });
    refresh(true);
  }
};

window.removeSpellByName = name => {
  state.selectedSpells = state.selectedSpells.filter(x => x.name !== name);
  refresh(true);
};

window.removeSpellById = id => {
  state.selectedSpells = state.selectedSpells.filter(x => x.id !== id);
  state.customSpells = state.customSpells.filter(x => x.id !== id);
  refresh(true);
};

// Attack generation
function allAttacks() {
  const c = calc();
  let attacks = [];

  // Default natural attack Golpe
  // Natural reach is derived from size and traits
  attacks.push({
    id: 'base_golpe',
    name: 'Golpe',
    attr: c.C >= c.D ? 'Cuerpo' : 'Destreza',
    range: c.reach,
    damage: c.base.damage,
    dmgType: 'Contundente',
    effect: 'Ataque natural básico con garras, fauces, extremidades o masa corporal.',
    isManual: false
  });

  // Weapons in equipment
  for (const eq of state.equipment) {
    let e = DATA.equipment.find(x => x.name === eq.name);
    if (e && e.damage) {
      attacks.push({
        id: 'eq_' + e.name,
        name: e.name,
        attr: e.category.includes('Distancia') ? 'Destreza' : (c.C >= c.D ? 'Cuerpo' : 'Destreza'),
        range: e.category.includes('Distancia') ? 'Lejos' : 'Contacto',
        damage: e.damage,
        dmgType: e.dmgType || 'Físico',
        effect: e.properties || 'Arma equipada',
        isManual: false
      });
    }
  }

  // Custom equipment weapons
  for (const ce of state.customEquipment) {
    if (ce.damage) {
      attacks.push({
        id: 'ceq_' + ce.name,
        name: ce.name,
        attr: 'Cuerpo',
        range: 'Contacto',
        damage: ce.damage,
        dmgType: ce.dmgType || 'Físico',
        effect: ce.note || 'Arma personalizada',
        isManual: false
      });
    }
  }

  // Manual attacks
  for (const ma of state.manualAttacks) {
    attacks.push({ ...ma, isManual: true });
  }

  return attacks;
}

function renderAttacks() {
  let box = $('attackList');
  if (!box) return;
  const c = calc();
  const attacks = allAttacks();

  box.innerHTML = attacks.map(atk => `
    <div class="item-card">
      <div class="item-header">
        <div>
          <strong>${esc(atk.name)}</strong>
          <span class="badge">${esc(atk.damage)} ${esc(atk.dmgType || '')}</span>
          <span class="mini muted">Tirada con <strong>${esc(atk.attr)}</strong> (+${esc(c[atk.attr[0]])}) · Alcance: <strong>${esc(atk.range)}</strong></span>
        </div>
        <div>
          ${atk.isManual ? `
            <button class="btn-sm danger" onclick="removeManualAttack('${atk.id}')">Eliminar</button>
          ` : `
            <span class="mini muted">Automático</span>
          `}
        </div>
      </div>
      <div class="item-text" style="margin-top:4px;">${esc(atk.effect)}</div>
    </div>
  `).join('');
}

window.removeManualAttack = id => {
  state.manualAttacks = state.manualAttacks.filter(x => x.id !== id);
  refresh(true);
};

// Bind Custom Creators
function bindCustomButtons() {
  if ($('addCustomTrait')) {
    $('addCustomTrait').onclick = () => {
      let name = $('ctName').value.trim();
      if (!name) return alert('Debes ingresar un nombre para el rasgo.');
      state.customTraits.push({
        id: uid(),
        name,
        cost: num($('ctCost').value),
        C: num($('ctC').value),
        D: num($('ctD').value),
        A: num($('ctA').value),
        res: num($('ctRes').value),
        def: num($('ctDef').value),
        spellLevels: num($('ctSpellLevels').value),
        movBands: num($('ctMove')?.value) || 0,
        note: $('ctNote').value.trim(),
        qty: 1
      });
      $('ctName').value = '';
      $('ctNote').value = '';
      refresh(true);
    };
  }

  if ($('addCustomDis')) {
    $('addCustomDis').onclick = () => {
      let name = $('cdName').value.trim();
      if (!name) return alert('Debes ingresar un nombre para la desventaja.');
      state.customDisadvantages.push({
        id: uid(),
        name,
        pr: num($('cdPR').value) || 1,
        res: num($('cdRes').value),
        def: num($('cdDef').value),
        movBands: num($('cdMove')?.value) || 0,
        noReactions: $('cdNoReactions').value === '1',
        note: $('cdNote').value.trim(),
        qty: 1
      });
      $('cdName').value = '';
      $('cdNote').value = '';
      refresh(true);
    };
  }

  if ($('addCustomEq')) {
    $('addCustomEq').onclick = () => {
      let name = $('ceName').value.trim();
      if (!name) return alert('Debes ingresar un nombre para el equipo.');
      state.customEquipment.push({
        id: uid(),
        name,
        type: $('ceType').value.trim() || 'Objeto',
        def: num($('ceDef').value),
        damage: $('ceDamage').value.trim(),
        dmgType: $('ceDmgType').value.trim(),
        note: $('ceNote').value.trim()
      });
      $('ceName').value = '';
      $('ceDamage').value = '';
      $('ceNote').value = '';
      refresh(true);
    };
  }

  if ($('addManualAttack')) {
    $('addManualAttack').onclick = () => {
      let name = $('atkName').value.trim();
      if (!name) return alert('Debes ingresar un nombre para el ataque.');
      state.manualAttacks.push({
        id: uid(),
        name,
        attr: $('atkAttr').value,
        range: $('atkRange').value,
        damage: $('atkDamage').value.trim() || ndObj().damage,
        dmgType: $('atkType').value.trim() || 'Físico',
        effect: $('atkEffect').value.trim()
      });
      $('atkName').value = '';
      $('atkEffect').value = '';
      refresh(true);
    };
  }

  if ($('addCustomSpell')) {
    $('addCustomSpell').onclick = () => {
      let name = $('csName').value.trim();
      if (!name) return alert('Debes ingresar un nombre para el conjuro.');
      let resCost = Math.max(1, num($('csCost').value) || 2);
      let level = num($('csLevel').value) || 1;
      state.customSpells.push({
        id: uid(),
        name,
        level,
        cost: `${resCost} Resistencia`,
        resCost,
        action: $('csAction').value,
        energy: $('csEnergy').value,
        affinity: $('csAffinity').value.trim() || 'Sin Afinidad',
        range: $('csRange').value.trim() || 'Cerca',
        roll: $('csRoll').value.trim() || 'Ninguna',
        effect: $('csEffect').value.trim(),
        duration: $('csDuration').value.trim() || 'Instantáneo',
        closing: $('csClosing').value.trim() || 'Se disipa al finalizar.',
        modifiers: $('csModifiers').value.trim()
      });
      $('csName').value = '';
      $('csEffect').value = '';
      refresh(true);
    };
  }
}

// Review / Checklist Step 11
function renderReview() {
  let box = $('reviewContent');
  if (!box) return;
  const c = calc();

  const checks = [
    {
      title: '1. Frase de Identidad completa',
      passed: Boolean(state.identity && state.identity.length > 15),
      detail: state.identity ? `Definida: "${esc(state.identity.slice(0, 80))}..."` : 'Falta definir la frase de identidad que resuma qué es y para qué sirve.'
    },
    {
      title: '2. Nivel de Desafío (ND) válido',
      passed: Boolean(state.nd),
      detail: `ND actual: ${state.nd} (Daño base: ${c.base.damage}, Atributo base: ${c.base.attr}).`
    },
    {
      title: '3. Tipo de criatura y Naturaleza',
      passed: Boolean(state.type && state.nature),
      detail: `Tipo: ${state.type} · Naturaleza: ${state.nature || 'No seleccionada'}.`
    },
    {
      title: '4. Comportamiento táctico asignado',
      passed: Boolean(state.behavior),
      detail: `Comportamiento: ${state.behavior} (${DATA.behaviors[state.behavior]?.note || ''}).`
    },
    {
      title: '5. Tamaño y Movimiento en bandas reglamentario',
      passed: Boolean(c.moveBand),
      detail: `Tamaño: ${state.size} · Movimiento: ${c.moveBand} · Alcance cuerpo a cuerpo natural: ${c.reach}.`
    },
    {
      title: '6. Resistencia respetando el mínimo absoluto (mínimo 5)',
      passed: c.res >= 5,
      detail: c.resAtMin ? `Ajustado al piso reglamentario de 5 Resistencia (el cálculo daba ${c.rawRes}).` : `Resistencia final: ${c.res}.`
    },
    {
      title: '7. Defensa respetando el límite máximo (máximo 16)',
      passed: c.def <= 16,
      detail: c.defAtMax ? `Ajustado al techo reglamentario de 16 Defensa (el cálculo daba ${c.rawDef}).` : `Defensa final: ${c.def}.`
    },
    {
      title: '8. Balance del Presupuesto de PR (PR usados ≤ PR totales)',
      passed: c.prRemaining >= 0,
      detail: c.prRemaining >= 0
        ? `Presupuesto en equilibrio: ${c.prSpent} de ${c.prTotal} PR usados (${c.prRemaining} restantes).`
        : `¡Presupuesto excedido! Has gastado ${c.prSpent} PR pero solo tienes ${c.prTotal} PR (${Math.abs(c.prRemaining)} PR en exceso).`
    },
    {
      title: '9. Presupuesto de Niveles de Conjuro respetado',
      passed: c.spellLevelsRemaining >= 0,
      detail: c.spellLevelsRemaining >= 0
        ? `Niveles de Conjuro en equilibrio: ${c.spellLevelsUsed} de ${c.spellLevelsTotal} niveles usados (${c.spellLevelsRemaining} restantes).`
        : `¡Niveles de Conjuro excedidos! Has usado ${c.spellLevelsUsed} niveles pero solo tienes ${c.spellLevelsTotal} disponibles.`
    },
    {
      title: '10. Coste de Resistencia en Conjuros (mínimo 1 punto)',
      passed: [...state.selectedSpells, ...state.customSpells].every(s => (num(s.resCost) || 2) >= 1),
      detail: 'Todos los conjuros configurados respetan el coste mínimo de 1 punto de Resistencia.'
    },
    {
      title: '11. Acciones de ataque configuradas',
      passed: allAttacks().length > 0,
      detail: `Posee ${allAttacks().length} acción(es) de ataque configurada(s).`
    },
    {
      title: '12. Reacciones reglamentarias',
      passed: true,
      detail: c.noReactions ? 'No puede usar Reacciones (impuesto por Criatura Menor o Sin Reacción).' : 'Puede usar Reacciones normalmente si sus rasgos o conjuros lo permiten.'
    }
  ];

  const totalPassed = checks.filter(x => x.passed).length;

  box.innerHTML = `
    <div class="statbox" style="margin-bottom:14px;">
      <div class="stat">
        <b class="${totalPassed === checks.length ? 'text-good' : 'text-bad'}">${totalPassed} / ${checks.length}</b>
        <span>Puntos de Control Superados</span>
      </div>
      <div class="stat">
        <b class="${c.prRemaining >= 0 && c.spellLevelsRemaining >= 0 ? 'text-good' : 'text-bad'}">
          ${c.prRemaining >= 0 && c.spellLevelsRemaining >= 0 ? 'Equilibrada' : 'Desbalance'}
        </b>
        <span>Estado de Balance</span>
      </div>
    </div>
    <div class="list">
      ${checks.map(chk => `
        <div class="item-card ${chk.passed ? 'check-pass' : 'check-fail'}">
          <div class="item-header">
            <strong>${chk.passed ? '✓' : '✗'} ${esc(chk.title)}</strong>
            <span class="badge ${chk.passed ? 'good' : 'bad'}">${chk.passed ? 'En regla' : 'Revisar'}</span>
          </div>
          <div class="mini muted" style="margin-top:4px;">${chk.detail}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// Live Summary Aside Rendering
function renderQuickStats() {
  const c = calc();
  $('quickStats').innerHTML = `
    <div class="stat">
      <b>${c.res}</b>
      <span>Resistencia ${c.resAtMin ? '<small class="badge bad">Mín 5</small>' : ''}</span>
    </div>
    <div class="stat">
      <b>${c.def}</b>
      <span>Defensa ${c.defAtMax ? '<small class="badge bad">Máx 16</small>' : ''}</span>
    </div>
    <div class="stat">
      <b>${c.moveBand}</b>
      <span>Movimiento</span>
    </div>
    <div class="stat">
      <b class="${c.prRemaining < 0 ? 'text-bad' : ''}">${c.prRemaining}</b>
      <span>PR Libres (${c.prSpent}/${c.prTotal})</span>
    </div>
    <div class="stat">
      <b class="${c.spellLevelsRemaining < 0 ? 'text-bad' : ''}">${c.spellLevelsRemaining}</b>
      <span>Niv. Conjuro (${c.spellLevelsUsed}/${c.spellLevelsTotal})</span>
    </div>
    <div class="stat">
      <b>${c.base.damage}</b>
      <span>Daño Base</span>
    </div>
  `;
}

function selectedAbilityText() {
  if (state.typeAbility === '__custom__') {
    return { name: state.customTypeAbility.name || 'Habilidad personalizada', text: state.customTypeAbility.text || 'Sin texto' };
  }
  let a = (DATA.typeAbilities[state.type] || []).find(x => x.name === state.typeAbility);
  return a || { name: 'Sin habilidad elegida', text: 'Elige una en la sección Chasis y Tipo.' };
}

function renderSummary() {
  const c = calc();
  const ability = selectedAbilityText();
  const attacks = allAttacks();
  const spells = [...state.selectedSpells, ...state.customSpells];

  let html = `
    <div class="summary-section">
      <div class="summary-title">
        <h3 style="margin:0;font-size:18px;">${esc(state.name || '[Sin nombre]')}</h3>
        <span class="badge">ND ${state.nd}</span>
      </div>
      <p class="mini muted" style="margin:4px 0 0 0;">
        ${esc(state.size)} · ${esc(state.type)}${state.tag ? ` ${esc(state.tag)}` : (state.heritage ? ` (${esc(state.heritage)})` : '')} · ${esc(state.nature || 'Sin naturaleza')} · ${esc(state.behavior)}
      </p>
      ${state.identity ? `<p class="mini" style="margin:6px 0 0 0;font-style:italic;">"${esc(state.identity)}"</p>` : ''}
    </div>

    <div class="summary-section">
      <div class="grid3">
        <div class="stat"><b>${c.C}</b><span>Cuerpo</span></div>
        <div class="stat"><b>${c.D}</b><span>Destreza</span></div>
        <div class="stat"><b>${c.A}</b><span>Aura</span></div>
      </div>
      <div class="mini muted" style="margin-top:6px;text-align:center;">
        Alcance natural cuerpo a cuerpo: <strong>${esc(c.reach)}</strong>
      </div>
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Habilidad de Tipo (${esc(state.type)})</div>
      <div class="mini"><strong>${esc(ability.name)}:</strong> ${esc(ability.text)}</div>
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Comportamiento: ${esc(state.behavior)}</div>
      <div class="mini">${esc(DATA.behaviors[state.behavior]?.note || '')}</div>
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Rasgos Seleccionados (${state.selectedTraits.length + state.customTraits.length})</div>
      ${selectedBlock('trait')}
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Desventajas (${state.selectedDisadvantages.length + state.customDisadvantages.length})</div>
      ${selectedBlock('dis')}
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Equipo (${state.equipment.length + state.customEquipment.length})</div>
      ${selectedBlock('eq')}
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Ataques (${attacks.length})</div>
      <div class="mini-list">
        ${attacks.map(a => `
          <div><strong>${esc(a.name)}:</strong> ${esc(a.range)}, ${esc(a.damage)} (${esc(a.dmgType || '')}). ${esc(a.effect)}</div>
        `).join('')}
      </div>
    </div>

    <div class="summary-section">
      <div class="summary-subtitle">Conjuros (${spells.length})</div>
      <div class="mini-list">
        ${spells.map(s => `
          <div><strong>${esc(s.name)}</strong> (Nivel ${'I'.repeat(s.level || 1)}, ${esc(s.cost || `${s.resCost || 2} Res`)}): ${esc(s.range)}, ${esc(s.action)}. ${esc(s.effect)}</div>
        `).join('') || '<div class="mini muted">Sin conjuros.</div>'}
      </div>
    </div>

    ${state.description || state.tactics ? `
      <div class="summary-section">
        ${state.description ? `<div class="mini" style="margin-bottom:6px;"><strong>Descripción:</strong> ${esc(state.description)}</div>` : ''}
        ${state.tactics ? `<div class="mini"><strong>Modo de actuar:</strong> ${esc(state.tactics)}</div>` : ''}
      </div>
    ` : ''}
  `;

  $('summary').innerHTML = html;
}

function selectedBlock(kind) {
  let arr = [];
  if (kind === 'trait') arr = [...state.selectedTraits.map(x => ({ ...x, custom: false })), ...state.customTraits.map(x => ({ ...x, custom: true }))];
  if (kind === 'dis') arr = [...state.selectedDisadvantages.map(x => ({ ...x, custom: false })), ...state.customDisadvantages.map(x => ({ ...x, custom: true }))];
  if (kind === 'eq') arr = [...state.equipment.map(x => ({ ...x, custom: false })), ...state.customEquipment.map(x => ({ ...x, custom: true }))];

  if (!arr.length) return `<div class="mini muted">Ninguno seleccionado.</div>`;

  return `<div class="mini-list">${arr.map(x => `
    <div class="item-header" style="margin-bottom:4px;">
      <div>
        <strong>${esc(x.name)}</strong>
        <span class="mini muted">${kind === 'trait' ? traitSmall(x) : kind === 'dis' ? disSmall(x) : eqSmall(x)}</span>
      </div>
      <div>
        <button class="btn-sm danger" onclick="removeSelectedItem('${kind}', '${x.id}')">×</button>
      </div>
    </div>
  `).join('')}</div>`;
}

window.removeSelectedItem = (kind, id) => {
  if (kind === 'trait') {
    state.selectedTraits = state.selectedTraits.filter(x => x.id !== id);
    state.customTraits = state.customTraits.filter(x => x.id !== id);
  }
  if (kind === 'dis') {
    state.selectedDisadvantages = state.selectedDisadvantages.filter(x => x.id !== id);
    state.customDisadvantages = state.customDisadvantages.filter(x => x.id !== id);
  }
  if (kind === 'eq') {
    state.equipment = state.equipment.filter(x => x.id !== id);
    state.customEquipment = state.customEquipment.filter(x => x.id !== id);
  }
  refresh(true);
};

function traitSmall(x) {
  let t = DATA.traits.find(z => z.name === x.name);
  return x.custom ? `coste ${x.cost} PR` : `(${t ? t.costText || `${t.cost} PR` : ''})`;
}

function disSmall(x) {
  let d = DATA.disadvantages.find(z => z.name === x.name);
  return x.custom ? `+${x.pr} PR` : `(+${d ? d.pr : 1} PR)`;
}

function eqSmall(x) {
  let e = x.custom ? x : DATA.equipment.find(z => z.name === x.name) || {};
  return [e.type, e.damage, e.dmgType, e.defense ? `+${e.defense} Def` : ''].filter(Boolean).join(' · ');
}

// Export Formats conforming to Pages 82 - 85
function exportText(mode = 'complete') {
  const c = calc();
  const name = state.name || '[Nombre de la criatura]';
  const identity = state.identity || `${name} es una criatura de tipo ${state.type || '[tipo]'} que [rasgo distintivo].`;
  const attacks = allAttacks();
  const spells = [...state.selectedSpells, ...state.customSpells];
  const ability = selectedAbilityText();

  if (mode === 'compact') {
    // Versión compacta para manuales, suplementos y bestiarios (Páginas 84 - 85)
    return [
      name,
      identity,
      `ND: ${state.nd} — Clasificación: ${state.type}${state.tag ? ` ${state.tag}` : (state.heritage ? ` (${state.heritage})` : '')} — Herencia: ${state.heritage || '—'} — Naturaleza: ${state.nature || '—'} — Comportamiento: ${state.behavior} — Tamaño: ${state.size} — Movimiento: ${c.moveBand}`,
      `Resistencia: ${c.res} — Defensa: ${c.def} — Cuerpo: ${c.C} — Destreza: ${c.D} — Aura: ${c.A}`,
      '',
      'Ataques',
      ...attacks.map(a => `${a.name}: tirada con ${a.attr} (+${c[a.attr[0]]}), alcance ${a.range}, daño ${a.damage} ${a.dmgType || ''}, ${a.effect}`),
      '',
      'Conjuros',
      ...(spells.length > 0
        ? spells.map(s => `${s.name}: Coste ${s.cost || `${s.resCost || 2} Resistencia`} (Nivel ${'I'.repeat(s.level || 1)}), ${s.action}, ${s.energy} (${s.affinity}), distancia/área ${s.range}, tirada/salvación ${s.roll}, efecto: ${s.effect}, duración: ${s.duration}, cierre: ${s.closing || 'se disipa'}.`)
        : ['Ninguno.']
      ),
      '',
      'Pasivas',
      `- Habilidad de Tipo (${state.type}): ${ability.name} — ${ability.text.replace(/\n/g, ' ')}`,
      ...state.selectedTraits.map(t => {
        let raw = DATA.traits.find(z => z.name === t.name);
        return `- ${t.name}: ${raw ? raw.text.split('\n')[0] : ''}`;
      }),
      ...state.customTraits.map(t => `- ${t.name}: ${t.note || 'Rasgo personalizado'}`),
      '',
      'Reacciones',
      c.noReactions ? 'No puede usar Reacciones.' : (spells.filter(s => s.action === 'Reacción').map(s => `${s.name}: ${s.effect}`).join('\n') || 'Reacciones estándar de combate según el reglamento general.'),
      '',
      'Auras',
      'Ninguna.',
      '',
      'Inicio y final de turno',
      'Inicio de turno: — Final de turno: —',
      '',
      'Equipo',
      ...(state.equipment.length > 0 || state.customEquipment.length > 0
        ? [...state.equipment.map(e => e.name), ...state.customEquipment.map(e => e.name)].map(e => `- ${e}`)
        : ['Ninguno.']
      ),
      '',
      'Desventajas',
      ...state.selectedDisadvantages.map(d => {
        let raw = DATA.disadvantages.find(z => z.name === d.name);
        return `- ${d.name}: ${raw ? raw.text.split('\n')[0] : ''}`;
      }),
      ...state.customDisadvantages.map(d => `- ${d.name}: ${d.note || 'Desventaja personalizada'}`),
      '',
      'Descripción',
      state.description || '—',
      '',
      'Modo de actuar',
      state.tactics || '—'
    ].filter(line => line !== null && line !== undefined).join('\n');
  }

  if (mode === 'discord') {
    // Formato optimizado para Discord (Markdown con negritas, código y listas)
    return [
      `>>> # 📜 ${name} (ND ${state.nd})`,
      `*${identity}*`,
      '',
      `**Tipo:** ${state.type}${state.tag ? ` (${state.tag})` : ''} | **Naturaleza:** ${state.nature || '—'} | **Comportamiento:** ${state.behavior}`,
      `**Tamaño:** ${state.size} | **Movimiento:** ${c.moveBand} | **Alcance CQC:** ${c.reach}`,
      '',
      '```ini',
      `[Resistencia]: ${c.res}    [Defensa]: ${c.def}    [Daño Base]: ${c.base.damage}`,
      `[Cuerpo]: +${c.C}         [Destreza]: +${c.D}       [Aura]: +${c.A}`,
      '```',
      '⚔️ **ACCIONES DE ATAQUE**',
      ...attacks.map(a => `• **${a.name}:** Tirada ${a.attr} (+${c[a.attr[0]]}) | Alcance: *${a.range}* | Daño: **${a.damage}** (${a.dmgType || 'Físico'}) — ${a.effect}`),
      '',
      '✨ **CONJUROS**',
      ...(spells.length > 0
        ? spells.map(s => `• **${s.name}** (Nivel ${'I'.repeat(s.level || 1)}, Coste ${s.cost || `${s.resCost || 2} Res`}): *${s.action}*, Distancia: ${s.range}. ${s.effect} [Duración: ${s.duration}]`)
        : ['*Sin conjuros.*']
      ),
      '',
      '🛡️ **HABILIDADES Y RASGOS PASIVOS**',
      `• **Habilidad de Tipo (${state.type}):** ${ability.name} — ${ability.text.replace(/\n/g, ' ')}`,
      ...state.selectedTraits.map(t => {
        let raw = DATA.traits.find(z => z.name === t.name);
        return `• **${t.name}**: ${raw ? raw.text.split('\n')[0] : ''}`;
      }),
      ...state.customTraits.map(t => `• **${t.name} (Personalizado)**: ${t.note || '—'}`),
      '',
      '⚠️ **DESVENTAJAS**',
      ...state.selectedDisadvantages.map(d => {
        let raw = DATA.disadvantages.find(z => z.name === d.name);
        return `• **${d.name}**: ${raw ? raw.text.split('\n')[0] : ''}`;
      }),
      ...state.customDisadvantages.map(d => `• **${d.name} (Personalizada)**: ${d.note || '—'}`),
      ...(state.selectedDisadvantages.length === 0 && state.customDisadvantages.length === 0 ? ['*Ninguna desventaja.*'] : []),
      '',
      '🎒 **EQUIPO**',
      ...(state.equipment.length > 0 || state.customEquipment.length > 0
        ? [...state.equipment.map(e => e.name), ...state.customEquipment.map(e => e.name)].map(e => `• ${e}`)
        : ['*Sin equipo.*']
      ),
      ...(state.tactics ? ['', '🧠 **MODO DE ACTUAR**', state.tactics] : [])
    ].filter(line => line !== null && line !== undefined).join('\n');
  }

  if (mode === 'bbcode') {
    // Formato BBCode para foros clásicos de rol
    return [
      `[size=5][b][color=#8c2d19]${name}[/color][/b][/size] [b](ND ${state.nd})[/b]`,
      `[i]${identity}[/i]`,
      '[hr]',
      `[b]Clasificación:[/b] ${state.type}${state.tag ? ` (${state.tag})` : ''} | [b]Herencia:[/b] ${state.heritage || '—'} | [b]Naturaleza:[/b] ${state.nature || '—'} | [b]Comportamiento:[/b] ${state.behavior}`,
      `[b]Tamaño:[/b] ${state.size} | [b]Movimiento:[/b] ${c.moveBand} | [b]Alcance:[/b] ${c.reach}`,
      '',
      `[b]Resistencia:[/b] ${c.res} | [b]Defensa:[/b] ${c.def} | [b]Daño Base:[/b] ${c.base.damage}`,
      `[b]Cuerpo:[/b] ${c.C} | [b]Destreza:[/b] ${c.D} | [b]Aura:[/b] ${c.A}`,
      '[hr]',
      '[size=4][b][color=#8c2d19]Ataques[/color][/b][/size]',
      '[list]',
      ...attacks.map(a => `[*] [b]${a.name}:[/b] Tirada con ${a.attr} (+${c[a.attr[0]]}), alcance ${a.range}, daño ${a.damage} ${a.dmgType || ''}. ${a.effect}`),
      '[/list]',
      '',
      '[size=4][b][color=#8c2d19]Conjuros[/color][/b][/size]',
      ...(spells.length > 0
        ? [
            '[list]',
            ...spells.map(s => `[*] [b]${s.name}[/b] (Nivel ${'I'.repeat(s.level || 1)}, Coste ${s.cost || `${s.resCost || 2} Res`}): ${s.action}, ${s.range}. ${s.effect} (Duración: ${s.duration})`),
            '[/list]'
          ]
        : ['Ninguno.']
      ),
      '',
      '[size=4][b][color=#8c2d19]Habilidades y Rasgos Pasivos[/color][/b][/size]',
      '[list]',
      `[*] [b]Habilidad de Tipo (${state.type}):[/b] ${ability.name} — ${ability.text.replace(/\n/g, ' ')}`,
      ...state.selectedTraits.map(t => {
        let raw = DATA.traits.find(z => z.name === t.name);
        return `[*] [b]${t.name}:[/b] ${raw ? raw.text.split('\n')[0] : ''}`;
      }),
      ...state.customTraits.map(t => `[*] [b]${t.name} (Personalizado):[/b] ${t.note || '—'}`),
      '[/list]',
      '',
      '[size=4][b][color=#8c2d19]Desventajas[/color][/b][/size]',
      ...(state.selectedDisadvantages.length > 0 || state.customDisadvantages.length > 0
        ? [
            '[list]',
            ...state.selectedDisadvantages.map(d => {
              let raw = DATA.disadvantages.find(z => z.name === d.name);
              return `[*] [b]${d.name}:[/b] ${raw ? raw.text.split('\n')[0] : ''}`;
            }),
            ...state.customDisadvantages.map(d => `[*] [b]${d.name} (Personalizada):[/b] ${d.note || '—'}`),
            '[/list]'
          ]
        : ['Ninguna.']
      ),
      '',
      ...(state.tactics ? ['[size=4][b][color=#8c2d19]Modo de Actuar[/color][/b][/size]', state.tactics] : [])
    ].filter(line => line !== null && line !== undefined).join('\n');
  }

  // Versión completa para Diseñadores (Páginas 82 - 84)
  return [
    `# ${name}`,
    '',
    `Frase de identidad: ${identity}`,
    '',
    '## Datos generales',
    `ND: ${state.nd} — Tipo: ${state.type} — Etiqueta (Sub-clasificación): ${state.tag || '—'} — Herencia: ${state.heritage || '—'} — Naturaleza: ${state.nature || '—'} — Comportamiento: ${state.behavior} — Tamaño: ${state.size} — Movimiento: ${c.moveBand}`,
    '',
    '## Estadísticas',
    `Resistencia base: ${c.base.res} — Resistencia final: ${c.res} — Defensa base: ${c.base.def} — Defensa final: ${c.def} — Cuerpo base: ${c.base.attr} — Cuerpo final: ${c.C} — Destreza base: ${c.base.attr} — Destreza final: ${c.D} — Aura base: ${c.base.attr} — Aura final: ${c.A} — Daño Base: ${c.base.damage}`,
    '',
    '## Presupuesto de creación',
    `PR iniciales: ${c.prBase} — PR ganados por Deficiencias de Atributo: ${c.prGainFromAttrs} — PR ganados por desventajas: ${c.prGainFromDis} — PR totales: ${c.prTotal} — PR usados: ${c.prSpent} — PR restantes: ${c.prRemaining}`,
    `Niveles de Conjuro gratuitos por ND: ${c.spellLevelsBase} — Niveles de Conjuro ganados por rasgos: ${c.spellLevelsFromTraits} — Niveles de Conjuro totales: ${c.spellLevelsTotal} — Niveles de Conjuro usados: ${c.spellLevelsUsed} — Niveles de Conjuro restantes: ${c.spellLevelsRemaining}`,
    '',
    '## Conceptos y Naturalezas',
    `Concepto innato: ${state.innateConcept || state.type} — Conceptos adicionales: ${state.additionalConcepts || '—'} — Naturaleza principal: ${state.nature || '—'} — Naturalezas adicionales: ${state.additionalNatures || '—'}`,
    '',
    '## Tipo, Herencia y Comportamiento',
    `Tipo: ${state.type} — Etiqueta (Sub-clasificación): ${state.tag || '—'} — Habilidad de Tipo gratuita: ${ability.name} (${ability.text}) — Habilidades de Tipo adicionales: — — Herencia: ${state.heritage || '—'} — Rasgos de Herencia: ${state.heritageTraits || '—'} — Comportamiento: ${state.behavior} — Ventaja del Comportamiento: ${DATA.behaviors[state.behavior]?.note || '—'}`,
    '',
    '## Rasgos comprados',
    ...state.selectedTraits.map(x => {
      let t = DATA.traits.find(z => z.name === x.name);
      return `- ${x.name} | Coste: ${t ? t.costText || `${t.cost} PR` : '1 PR'} | Categoría: ${t ? t.category : 'General'}${x.note ? ` | Nota: ${x.note}` : ''}`;
    }),
    ...state.customTraits.map(x => `- ${x.name} (Personalizado) | Coste: ${x.cost} PR | Nota: ${x.note || '—'}`),
    ...(state.selectedTraits.length === 0 && state.customTraits.length === 0 ? ['Ningún rasgo comprado.'] : []),
    '',
    '## Desventajas',
    ...state.selectedDisadvantages.map(x => {
      let d = DATA.disadvantages.find(z => z.name === x.name);
      return `- ${x.name} | Otorga: +${d ? d.pr : 1} PR | Categoría: ${d ? d.category : 'General'}${x.note ? ` | Nota: ${x.note}` : ''}`;
    }),
    ...state.customDisadvantages.map(x => `- ${x.name} (Personalizada) | Otorga: +${x.pr} PR | Nota: ${x.note || '—'}`),
    ...(state.selectedDisadvantages.length === 0 && state.customDisadvantages.length === 0 ? ['Ninguna desventaja seleccionada.'] : []),
    '',
    '## Ataques',
    ...attacks.map(a => `${a.name} — Tirada: ${a.attr} (+${c[a.attr[0]]}) — Alcance: ${a.range} — Daño: ${a.damage} — Tipo de daño: ${a.dmgType || 'Físico'} — Efecto: ${a.effect}`),
    '',
    '## Conjuros',
    ...(spells.length > 0
      ? spells.map(s => `${s.name} — Coste: ${s.cost || `${s.resCost || 2} Resistencia`} (Nivel ${'I'.repeat(s.level || 1)}) — Acción: ${s.action} — Energía: ${s.energy} — Afinidad: ${s.affinity} — Distancia/Área: ${s.range} — Tirada/Salvación: ${s.roll} — Efecto: ${s.effect} — Duración: ${s.duration} — Cierre: ${s.closing || 'se disipa'} — Rasgos que lo modifican: ${s.modifiers || 'Ninguno'}`)
      : ['Ningún conjuro aprendido.']
    ),
    '',
    '## Reacciones',
    c.noReactions ? 'No puede usar Reacciones.' : (spells.filter(s => s.action === 'Reacción').map(s => `${s.name}: ${s.effect}`).join('\n') || 'Reacciones estándar de combate según el reglamento general.'),
    '',
    '## Pasivas',
    `- ${ability.name}: ${ability.text}`,
    ...c.notes.map(n => `- ${n}`),
    '',
    '## Auras',
    'Ninguna.',
    '',
    '## Inicio y final de turno',
    'Inicio de turno: — Final de turno: —',
    '',
    '## Equipo',
    ...(state.equipment.length > 0 || state.customEquipment.length > 0
      ? [
        ...state.equipment.map(e => {
          let raw = DATA.equipment.find(z => z.name === e.name);
          return `- ${e.name}: ${raw ? raw.category : 'Equipo'}${e.note ? ` (${e.note})` : ''}`;
        }),
        ...state.customEquipment.map(e => `- ${e.name}: ${e.type}${e.note ? ` (${e.note})` : ''}`)
      ]
      : ['Sin equipo.']
    ),
    '',
    '## Desventajas activas en ficha',
    ...state.selectedDisadvantages.map(d => {
      let raw = DATA.disadvantages.find(z => z.name === d.name);
      return `- ${d.name}: ${raw ? raw.text : ''}`;
    }),
    ...state.customDisadvantages.map(d => `- ${d.name}: ${d.note}`),
    ...(state.selectedDisadvantages.length === 0 && state.customDisadvantages.length === 0 ? ['Ninguna desventaja activa.'] : []),
    '',
    '## Descripción',
    state.description || 'Sin descripción.',
    '',
    '## Modo de actuar',
    state.tactics || 'Sin modo de actuar especificado.'
  ].filter(line => line !== null && line !== undefined).join('\n');
}

function exportExplain() {
  let mode = $('exportMode')?.value || 'complete';
  if ($('exportExplainTitle')) {
    if (mode === 'complete') {
      $('exportExplainTitle').textContent = 'Versión completa para Diseñadores (Páginas 82-84 del manual de reglas)';
    } else if (mode === 'compact') {
      $('exportExplainTitle').textContent = 'Versión compacta para manuales, suplementos y bestiarios (Páginas 84-85 del manual de reglas)';
    } else if (mode === 'discord') {
      $('exportExplainTitle').textContent = 'Formato Discord (Markdown con negritas, bloques y listas listo para pegar)';
    } else if (mode === 'bbcode') {
      $('exportExplainTitle').textContent = 'Formato BBCode (Etiquetas [b], [color], [size], [list] para foros de rol y partidas)';
    }
  }
  if ($('exportExplain')) {
    if (mode === 'complete') {
      $('exportExplain').textContent = 'Ficha técnica íntegra con desglose de presupuestos de PR y Niveles de Conjuro, chasis base, modificadores paso a paso, todas las tablas de rasgos, desventajas, ataques y conjuros.';
    } else if (mode === 'compact') {
      $('exportExplain').textContent = 'Formato ultra condensado y optimizado para maquetación en módulos de aventura o bestiarios impresos con estadísticas consolidadas listas para jugar.';
    } else if (mode === 'discord') {
      $('exportExplain').textContent = 'Estructura legible formateada en Discord Markdown (títulos en negrita, bloques de código para stats y listas con viñetas) ideal para canales de Discord.';
    } else if (mode === 'bbcode') {
      $('exportExplain').textContent = 'Etiquetas estándar de BBCode para foros clásicos y mesas virtuales que admiten sintaxis BBCode enriquecida.';
    }
  }
}

function bindExportButtons() {
  if ($('copyText')) {
    $('copyText').onclick = () => {
      navigator.clipboard.writeText($('exportText').value);
      let btn = $('copyText');
      let orig = btn.textContent;
      btn.textContent = '¡Copiado!';
      setTimeout(() => { btn.textContent = orig; }, 1800);
    };
  }

  if ($('downloadTxt')) {
    $('downloadTxt').onclick = () => {
      let blob = new Blob([$('exportText').value], { type: 'text/plain;charset=utf-8' });
      let a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${(state.name || 'criatura').toLowerCase().replace(/\s+/g, '_')}_ficha.txt`;
      a.click();
    };
  }

  if ($('openStatblockFromExportBtn')) {
    $('openStatblockFromExportBtn').onclick = window.openStatblockModal;
  }
}

// --- BESTIARY STATBLOCK & LOCAL STORAGE MANAGER ---

function renderStatblock() {
  const c = calc();
  const name = state.name || 'Criatura sin nombre';
  const identity = state.identity || `Criatura de tipo ${state.type || 'Desconocido'}.`;
  const attacks = allAttacks();
  const spells = [...state.selectedSpells, ...state.customSpells];
  const ability = selectedAbilityText();

  let html = `
    <div class="statblock-container">
      <div class="sb-title">${esc(name)}</div>
      <div class="sb-sub">${esc(state.size)} · ${esc(state.type)}${state.tag ? ` (${esc(state.tag)})` : ''} · ${esc(state.nature || 'Sin naturaleza')} · ${esc(state.behavior)}</div>
      <div class="sb-divider"></div>

      <div class="sb-line"><strong>Identidad:</strong> "${esc(identity)}"</div>
      <div class="sb-line"><strong>Nivel de Desafío (ND):</strong> ${esc(state.nd)} &nbsp;|&nbsp; <strong>Movimiento:</strong> ${esc(c.moveBand)} &nbsp;|&nbsp; <strong>Alcance natural:</strong> ${esc(c.reach)}</div>

      <div class="sb-stats">
        <div class="sb-stat-box"><b>${c.res}</b><span>Resistencia</span></div>
        <div class="sb-stat-box"><b>${c.def}</b><span>Defensa</span></div>
        <div class="sb-stat-box"><b>+${c.C}</b><span>Cuerpo</span></div>
        <div class="sb-stat-box"><b>+${c.D}</b><span>Destreza</span></div>
        <div class="sb-stat-box"><b>+${c.A}</b><span>Aura</span></div>
      </div>

      <div class="sb-line"><strong>Habilidad de Tipo (${esc(state.type)}):</strong> <em>${esc(ability.name)}</em> — ${esc(ability.text)}</div>
      ${state.heritage ? `<div class="sb-line"><strong>Herencia:</strong> ${esc(state.heritage)} ${state.heritageTraits ? `(${esc(state.heritageTraits)})` : ''}</div>` : ''}
      ${c.notes.length > 0 ? `<div class="sb-line"><strong>Propiedades pasivas:</strong> ${c.notes.map(n => esc(n)).join(' · ')}</div>` : ''}

      ${state.selectedTraits.length > 0 || state.customTraits.length > 0 ? `
        <div class="sb-section-head">Rasgos y Dones</div>
        ${state.selectedTraits.map(t => {
          let raw = DATA.traits.find(z => z.name === t.name);
          return `<div class="sb-entry"><strong>${esc(t.name)}:</strong> ${esc(raw ? raw.text : '')}</div>`;
        }).join('')}
        ${state.customTraits.map(t => `<div class="sb-entry"><strong>${esc(t.name)} (Personalizado):</strong> ${esc(t.note || '—')}</div>`).join('')}
      ` : ''}

      ${state.selectedDisadvantages.length > 0 || state.customDisadvantages.length > 0 ? `
        <div class="sb-section-head">Desventajas y Vulnerabilidades</div>
        ${state.selectedDisadvantages.map(d => {
          let raw = DATA.disadvantages.find(z => z.name === d.name);
          return `<div class="sb-entry"><strong>${esc(d.name)}:</strong> ${esc(raw ? raw.text : '')}</div>`;
        }).join('')}
        ${state.customDisadvantages.map(d => `<div class="sb-entry"><strong>${esc(d.name)} (Personalizada):</strong> ${esc(d.note || '—')}</div>`).join('')}
      ` : ''}

      <div class="sb-section-head">Acciones de Ataque (Daño Base: ${c.base.damage})</div>
      ${attacks.map(a => `
        <div class="sb-entry">
          <strong>${esc(a.name)}:</strong> Tirada con ${esc(a.attr)} (+${c[a.attr[0]]}), alcance ${esc(a.range)}, daño <strong>${esc(a.damage)}</strong> ${esc(a.dmgType || '')}. ${esc(a.effect)}
        </div>
      `).join('')}

      ${spells.length > 0 ? `
        <div class="sb-section-head">Conjuros (${c.spellLevelsUsed} / ${c.spellLevelsTotal} Niveles usados)</div>
        ${spells.map(s => `
          <div class="sb-entry">
            <strong>${esc(s.name)}</strong> (Nivel ${'I'.repeat(s.level || 1)}, Coste ${esc(s.cost || `${s.resCost || 2} Res`)}): ${esc(s.action)}, ${esc(s.energy)} (${esc(s.affinity)}), alcance/área ${esc(s.range)}, tirada/salvación ${esc(s.roll)}. ${esc(s.effect)} [Duración: ${esc(s.duration)}, Cierre: ${esc(s.closing || 'se disipa')}].
          </div>
        `).join('')}
      ` : ''}

      <div class="sb-section-head">Reacciones</div>
      <div class="sb-entry">
        ${c.noReactions ? 'No puede usar Reacciones (impuesto por Criatura Menor o Sin Reacción).' : 'Puede usar Reacciones estándar de combate y aquellas concedidas por sus conjuros o rasgos.'}
      </div>

      ${state.equipment.length > 0 || state.customEquipment.length > 0 ? `
        <div class="sb-section-head">Equipo y Armamento</div>
        <div class="sb-entry">
          ${[...state.equipment.map(e => e.name), ...state.customEquipment.map(e => e.name)].join(', ')}
        </div>
      ` : ''}

      ${state.description || state.tactics ? `
        <div class="sb-divider-thin" style="margin-top:14px;"></div>
        ${state.description ? `<div class="sb-entry"><strong>Descripción:</strong> <em>${esc(state.description)}</em></div>` : ''}
        ${state.tactics ? `<div class="sb-entry"><strong>Comportamiento Táctico:</strong> <em>${esc(state.tactics)}</em></div>` : ''}
      ` : ''}
    </div>
  `;

  let box = $('statblockContent');
  if (box) box.innerHTML = html;
}

window.openStatblockModal = () => {
  renderStatblock();
  let m = $('statblockModal');
  if (m) m.classList.remove('hidden');
};

window.closeStatblockModal = () => {
  let m = $('statblockModal');
  if (m) m.classList.add('hidden');
};

// --- LOCAL STORAGE CREATURE MANAGER ---
const STORAGE_KEY = 'papa_creatures_library_v1';

function getStoredCreatures() {
  try {
    let data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveStoredCreatures(arr) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    updateStoredCount();
  } catch (e) {
    alert('No se pudo guardar en el almacenamiento local: ' + e.message);
  }
}

function updateStoredCount() {
  let count = getStoredCreatures().length;
  if ($('savedCount')) $('savedCount').textContent = count;
}

window.saveCurrentCreatureToStorage = () => {
  let creatures = getStoredCreatures();
  let name = (state.name || '').trim() || 'Criatura sin nombre';
  let dateStr = new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });

  let newEntry = {
    id: 'c_' + Date.now(),
    name: name,
    nd: state.nd,
    type: state.type,
    updatedAt: dateStr,
    data: JSON.parse(JSON.stringify(state))
  };

  creatures.unshift(newEntry);
  saveStoredCreatures(creatures);
  renderBestiaryList();

  let btn = $('saveLocalBtn');
  if (btn) {
    let orig = btn.textContent;
    btn.textContent = '¡Guardada!';
    setTimeout(() => { btn.textContent = orig; }, 1800);
  }
};

function renderBestiaryList() {
  let list = $('bestiaryList');
  if (!list) return;
  let creatures = getStoredCreatures();
  updateStoredCount();

  if (creatures.length === 0) {
    list.innerHTML = `
      <div class="mini-info" style="text-align:center;padding:18px;">
        <p class="muted" style="margin:0;">Aún no tienes criaturas guardadas en tu navegador.</p>
        <button class="btn" style="margin-top:10px;" onclick="window.saveCurrentCreatureToStorage()">Guardar la criatura actual ahora</button>
      </div>
    `;
    return;
  }

  list.innerHTML = creatures.map(item => `
    <div class="item-card">
      <div class="item-header">
        <div>
          <strong style="font-size:15px;">${esc(item.name)}</strong>
          <span class="badge">ND ${esc(item.nd)}</span>
          <span class="mini muted">${esc(item.type)} · Guardada el ${esc(item.updatedAt)}</span>
        </div>
        <div class="row" style="gap:6px;">
          <button class="btn-sm" onclick="window.loadStoredCreature('${item.id}')" title="Cargar en el creador">Cargar</button>
          <button class="btn-sm secondary" onclick="window.cloneStoredCreature('${item.id}')" title="Crear una copia">Clonar</button>
          <button class="btn-sm danger" onclick="window.deleteStoredCreature('${item.id}')" title="Eliminar del navegador">Borrar</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.loadStoredCreature = id => {
  let creatures = getStoredCreatures();
  let found = creatures.find(c => c.id === id);
  if (!found) return;
  if (confirm(`¿Cargar la criatura "${found.name}"? Los cambios no guardados se sustituirán.`)) {
    cloneState(JSON.parse(JSON.stringify(found.data)));
    rebuild();
    window.closeBestiaryModal();
  }
};

window.cloneStoredCreature = id => {
  let creatures = getStoredCreatures();
  let found = creatures.find(c => c.id === id);
  if (!found) return;
  let copyData = JSON.parse(JSON.stringify(found.data));
  copyData.name = (copyData.name || 'Criatura') + ' (Copia)';
  let dateStr = new Date().toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' });
  creatures.unshift({
    id: 'c_' + Date.now(),
    name: copyData.name,
    nd: copyData.nd,
    type: copyData.type,
    updatedAt: dateStr,
    data: copyData
  });
  saveStoredCreatures(creatures);
  renderBestiaryList();
};

window.deleteStoredCreature = id => {
  let creatures = getStoredCreatures();
  let found = creatures.find(c => c.id === id);
  if (!found) return;
  if (confirm(`¿Eliminar definitivamente "${found.name}" de la biblioteca local?`)) {
    creatures = creatures.filter(c => c.id !== id);
    saveStoredCreatures(creatures);
    renderBestiaryList();
  }
};

window.openBestiaryModal = () => {
  renderBestiaryList();
  let m = $('bestiaryModal');
  if (m) m.classList.remove('hidden');
};

window.closeBestiaryModal = () => {
  let m = $('bestiaryModal');
  if (m) m.classList.add('hidden');
};

window.exportAllBestiaryJSON = () => {
  let creatures = getStoredCreatures();
  let blob = new Blob([JSON.stringify(creatures, null, 2)], { type: 'application/json' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `papa_biblioteca_criaturas_${Date.now()}.json`;
  a.click();
};

// --- VALIDATION INDICATOR STATUS ---
function updateValidationBadge() {
  const badge = $('validationBadge');
  const icon = $('validationIcon');
  const text = $('validationText');
  if (!badge) return;

  const c = calc();
  const checks = [
    Boolean(state.identity && state.identity.length > 15),
    Boolean(state.nd),
    Boolean(state.type && state.nature),
    Boolean(state.behavior),
    Boolean(c.moveBand),
    c.res >= 5,
    c.def <= 16,
    c.prRemaining >= 0,
    c.spellLevelsRemaining >= 0,
    allAttacks().length > 0
  ];

  let failedCount = checks.filter(x => !x).length;
  let prExceeded = c.prRemaining < 0;
  let spellExceeded = c.spellLevelsRemaining < 0;

  if (failedCount === 0) {
    badge.className = 'validation-badge valid';
    if (icon) icon.textContent = '✓';
    if (text) text.textContent = `Reglamentaria (PR: ${c.prRemaining} lib.)`;
    badge.title = 'Todas las reglas matemáticas y de chasis están en regla. Clic para ir a Revisión.';
  } else {
    badge.className = 'validation-badge invalid';
    if (icon) icon.textContent = '⚠️';
    let msg = [];
    if (prExceeded) msg.push(`${Math.abs(c.prRemaining)} PR en exceso`);
    if (spellExceeded) msg.push(`${Math.abs(c.spellLevelsRemaining)} Niv. conjuros`);
    if (!msg.length) msg.push(`${failedCount} fallo(s)`);
    if (text) text.textContent = msg.join(' · ');
    badge.title = 'Hay parámetros que no cumplen el reglamento oficial. Clic para auditar en Revisión.';
  }
}

// Global JSON Save / Load / Reset / Preset
window.downloadJSON = () => {
  let blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${(state.name || 'criatura').toLowerCase().replace(/\s+/g, '_')}.json`;
  a.click();
};

window.loadPreset = key => {
  if (PRESETS[key]) {
    cloneState(JSON.parse(JSON.stringify(PRESETS[key])));
    rebuild();
  }
};

window.resetCreature = () => {
  if (confirm('¿Deseas comenzar una nueva criatura con todos los parámetros en blanco?')) {
    cloneState({
      name: '',
      identity: '',
      description: '',
      tactics: '',
      nd: '1',
      size: 'Mediano',
      baseMove: 'Cerca',
      type: 'Bestia',
      tag: '',
      heritage: '',
      nature: '',
      behavior: 'Sin comportamiento especial',
      typeAbility: '',
      customTypeAbility: { name: '', text: '' },
      innateConcept: '',
      additionalConcepts: '',
      additionalNatures: '',
      heritageTraits: '',
      attrDelta: { Cuerpo: 0, Destreza: 0, Aura: 0 },
      selectedTraits: [],
      customTraits: [],
      selectedDisadvantages: [],
      customDisadvantages: [],
      equipment: [],
      customEquipment: [],
      manualAttacks: [],
      selectedSpells: [],
      customSpells: [],
      auras: []
    });
    rebuild();
  }
};

// Event listeners for Navigation and Load JSON
document.addEventListener('click', e => {
  let nav = e.target.closest('#nav button');
  if (nav) {
    switchSection(nav.dataset.sec);
  }
});

function init() {
  if ($('saveJson')) $('saveJson').onclick = window.downloadJSON;
  if ($('loadJsonBtn')) $('loadJsonBtn').onclick = () => $('loadJson').click();
  if ($('loadJson')) {
    $('loadJson').onchange = e => {
      let file = e.target.files[0];
      if (!file) return;
      let reader = new FileReader();
      reader.onload = ev => {
        try {
          cloneState(JSON.parse(ev.target.result));
          rebuild();
        } catch (err) {
          alert('Error al leer el archivo JSON: ' + err.message);
        }
      };
      reader.readAsText(file);
    };
  }
  if ($('presetSel')) {
    $('presetSel').onchange = e => {
      if (e.target.value) {
        window.loadPreset(e.target.value);
        e.target.value = '';
      }
    };
  }
  if ($('resetBtn')) $('resetBtn').onclick = window.resetCreature;

  // Header & Modals bindings
  if ($('statblockBtn')) $('statblockBtn').onclick = window.openStatblockModal;
  if ($('closeStatblockBtn')) $('closeStatblockBtn').onclick = window.closeStatblockModal;
  if ($('printStatblockBtn')) $('printStatblockBtn').onclick = () => window.print();

  if ($('bestiaryModalBtn')) $('bestiaryModalBtn').onclick = window.openBestiaryModal;
  if ($('closeBestiaryBtn')) $('closeBestiaryBtn').onclick = window.closeBestiaryModal;
  if ($('saveLocalBtn')) $('saveLocalBtn').onclick = window.saveCurrentCreatureToStorage;
  if ($('saveCurrentToBestiaryBtn')) $('saveCurrentToBestiaryBtn').onclick = window.saveCurrentCreatureToStorage;
  if ($('exportAllBestiaryBtn')) $('exportAllBestiaryBtn').onclick = window.exportAllBestiaryJSON;

  if ($('validationBadge')) {
    $('validationBadge').onclick = () => switchSection('review');
  }

  // Close modals on overlay click or Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      window.closeStatblockModal();
      window.closeBestiaryModal();
    }
  });

  ['statblockModal', 'bestiaryModal'].forEach(id => {
    let el = $(id);
    if (el) {
      el.addEventListener('click', ev => {
        if (ev.target === el) {
          el.classList.add('hidden');
        }
      });
    }
  });

  updateStoredCount();
  rebuild();
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
