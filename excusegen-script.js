/* ============================================================
   ExcuseGen — script.js
   All interactivity: generator, modals, nav, sharing, etc.
   ============================================================ */

'use strict';

/* ── EXCUSE DATABASE (60+ entries) ───────────────────────────── */

const EXCUSES = {

  work: {
    serious: [
      "I was dealing with a critical internet outage — my ISP has a ticket open. I have the reference number if you need it.",
      "There was a medical appointment I couldn't reschedule that ran significantly over the scheduled time.",
      "My laptop suffered a hard drive failure overnight and I had to restore files from backup before I could continue.",
      "I was handling an urgent client escalation that required my undivided attention until it was fully resolved.",
      "An unexpected family emergency came up this morning. Everything is stable now and I'm fully available.",
      "My car wouldn't start and roadside assistance took over an hour — I've already arranged alternative transport for tomorrow.",
      "I was in a dead-signal zone for most of the morning. I've been reachable by email the entire time, though.",
      "There was a serious accident blocking the only viable route to the office. Traffic was completely gridlocked.",
      "I received an urgent message from our biggest client last night and spent this morning getting them sorted first.",
      "The power in my building was out from the early hours — my router and laptop were both dead until it was restored.",
    ],
    funny: [
      "My cat sat on my keyboard and sent an unprompted reply-all to the entire company. Damage control took three hours.",
      "My coffee machine broke. I made a personal policy decision not to operate heavy machinery — like a keyboard — without caffeine.",
      "I was extremely ready to be on time until my motivational podcast told me to 'slow down and be present.' I was present. Just not here.",
      "I fell into a YouTube rabbit hole about productivity hacks and completely lost track of time. Deeply ironic.",
      "My GPS sent me on a 'scenic route' for 45 minutes. It, too, is going through a midlife crisis.",
      "I was stress-eating, then stress-exercising, then stress-napping. It's a whole routine. HR should really cover this.",
      "My neighbor decided 6am was the ideal moment to test his drum kit. I have not emotionally recovered.",
      "I got extremely distracted Googling whether a hot dog is a sandwich. I have answers, but at what cost.",
      "I spent so long optimising my morning routine that I didn't have time to actually do my morning routine.",
      "My smart home decided to go dumb. The lights wouldn't turn on, the thermostat rebooted twice, and the coffee maker staged a protest.",
    ],
    professional: [
      "I apologise for the delay — I was finalising a time-sensitive deliverable that required uninterrupted focus, and I underestimated the timeline.",
      "I was managing a high-priority escalation and could not safely step away without risking the outcome. I'll debrief you shortly.",
      "Due to a technical failure outside my control, I was unable to join at the scheduled time. I've resolved the issue and am fully available.",
      "I was attending to an urgent matter that arose unexpectedly. I should have communicated sooner and I take responsibility for that.",
      "I was completing a task that directly impacts our current sprint targets and made a judgement call to prioritise delivery. Happy to discuss.",
    ],
  },

  school: {
    serious: [
      "I had a severe migraine that made screen use impossible. I visited the campus clinic and have documentation available.",
      "There was a family emergency that required my immediate presence and I had no opportunity to give adequate notice.",
      "I submitted the assignment through the portal but it appears there was an upload error. I have my draft with the original timestamp.",
      "My bus route was cancelled due to a breakdown and there were no alternative services available at that time.",
      "I was genuinely unaware of the revised deadline — I noted the original one. I take full responsibility and am prepared to accept any penalty.",
      "I experienced a mental health episode and needed to prioritise my wellbeing. My counsellor can provide a supporting note.",
      "I had an unavoidable medical appointment that was booked months in advance and could not be moved.",
    ],
    funny: [
      "My dog ate my homework. Classically. He also ate my charger, my confidence, and my will to exist before 9am.",
      "I did the assignment. I just accidentally emailed it to myself instead of submitting it. I have proof if you check my sent folder. Please don't check my sent folder.",
      "I was so absorbed in extra research for this exact class that I wrote a completely different essay. Very thorough. Wrong topic.",
      "I had a creative block that lasted 72 hours. I'm told this is entirely normal for geniuses.",
      "I misread the syllabus. Twice. In opposite directions. It's honestly impressive.",
      "My roommate told me the deadline was tomorrow. We are both here. We have learned nothing.",
      "I was helping a classmate understand the material and completely lost track of time. Deeply altruistic of me.",
      "I set three alarms. My body entered a parallel dimension where all three were irrelevant.",
    ],
    professional: [
      "I sincerely apologise for the late submission. An unexpected technical issue prevented me from uploading in time and I should have reached out sooner.",
      "I take full responsibility for missing the session. A personal matter arose that I failed to manage within my schedule. I'm prepared to accept the consequences.",
      "Due to a documented illness, I was unable to attend. I would greatly appreciate the opportunity to complete any missed work or discuss an extension.",
    ],
  },

  personal: {
    serious: [
      "I got completely overwhelmed and needed some time to decompress before I could be useful to anyone.",
      "I lost track of time while dealing with something personal — not an excuse, just the truth.",
      "My phone died and I wasn't near a charger for most of the day. I know the timing was terrible.",
      "I had a rough mental health day and needed to step back. I'm doing better now.",
      "Something unexpected came up at home that I couldn't leave — I should have given you more notice.",
      "I was helping someone who genuinely needed it and I couldn't leave them mid-crisis.",
      "I was stuck in traffic for over an hour and my phone signal was too weak to call.",
      "I had a flat tyre on the way and waited a long time for someone to come out.",
    ],
    funny: [
      "I tried to get ready but got trapped in a 45-minute internet spiral about whether birds are real. I have thoughts.",
      "My sofa physically would not let me leave. I fought it. The sofa won. Comfortably.",
      "I was almost out the door and then my favourite song came on. Then another one came on. It's not my fault.",
      "I fell asleep at 7pm and woke up at 11pm thinking it was the next morning. I dressed appropriately for work. For nothing.",
      "I got lost on the way — and I've been there 40 times. In my defence, I wasn't paying attention any of those times either.",
      "My plants looked sad. I had to have a long conversation with them. Personal care is important.",
      "I was so focused on being on time that I forgot to actually leave. A classic rookie error.",
      "I blinked and it was three hours later. Time is a flat circle and I am its victim.",
    ],
    professional: [
      "I owe you a genuine apology — I wasn't managing my time responsibly and I let you down.",
      "I take complete ownership of this. There was no excuse. I should have communicated immediately and I didn't.",
      "I understand this created a real inconvenience and I want to make it right. What would help most?",
    ],
  },

  relationship: {
    serious: [
      "I was completely overwhelmed with something I'm still not ready to talk about — I needed space to process it, not to shut you out.",
      "I lost track of time. I know that isn't enough and I'm not offering it as a real justification — I'm sorry.",
      "My phone died and I was nowhere near a charger. I know. Worst possible timing.",
      "I was helping someone who really needed me right then and I couldn't just leave. I should have texted — that was wrong.",
      "I was having a bad mental health day and didn't want to bring that energy to you. I see now that disappearing was worse.",
      "I got stuck and couldn't get away — I was so caught up in sorting it that I didn't stop to communicate. That's on me.",
    ],
    funny: [
      "I was planning something elaborate for you and can't say more without ruining it. Ask me in 3–5 business days.",
      "I fell into a documentary about penguins. They got me. I'm not entirely sorry.",
      "I completely zoned out thinking about how much I like you. Technically your fault. Mathematically your fault.",
      "I was building up the courage to be my best self for you. Construction ran over schedule. It's ongoing.",
      "I was on the phone with your mum. We've become very close. Let's not make this weird.",
      "I was psychologically preparing for this interaction and underestimated how long that would take.",
      "Time stops existing when I'm in a zone. Scientists believe this is a sign of high intelligence. I choose to believe the scientists.",
    ],
    professional: [
      "I owe you a genuine apology. I wasn't being thoughtful about your time and I understand why that hurt.",
      "There's no good excuse and I'm not going to insult you by inventing one. I'm sorry — what do you need from me?",
      "I let you down and I want to make it right. Can we talk about what you actually need going forward?",
    ],
  },

  friends: {
    serious: [
      "I genuinely thought it was next weekend — I've been completely off on dates. I'm so sorry.",
      "Something came up at home that I couldn't get out of. I should have given you more notice and I didn't.",
      "I was exhausted and hit a wall. I should have just told you that instead of going quiet.",
      "My phone died and I had no way to reach you. I was stuck with no options.",
      "I had a rough day and honestly needed to be alone — I should have just said that instead.",
      "I overslept in a way that felt medically significant. I'm considering seeing someone about it.",
    ],
    funny: [
      "I tried to get ready but got distracted by a 45-minute debate with myself about whether a cereal bar counts as breakfast. It does. I stand by this.",
      "My couch held me hostage. I negotiated. It won.",
      "I was genuinely on my way. Then my favourite song came on. Then another one. I regret nothing.",
      "I got lost even though I've been to yours 47 times. In my defence, I was never fully paying attention.",
      "I noticed my plants looked sad and had to address it. Personal responsibility.",
      "I fell asleep at 7pm and woke up genuinely confused about what year it was.",
      "I started getting ready and somehow ended up reorganising my entire wardrobe. I look great now though.",
      "I calculated the travel time wrong in a way that was impressively, almost artistically incorrect.",
    ],
    professional: [
      "I dropped the ball and I'm genuinely sorry. I value us — let me know when works to reschedule.",
      "That was poor time management on my part and I own it completely. What can I do to make it up?",
      "I wasn't upfront with you and that wasn't fair. I'll do better — I mean it.",
    ],
  },

};

/* ── CONTEXT PREFIXES ─────────────────────────────────────────── */

const CONTEXT_MAP = [
  { keywords: ['late', 'meeting', 'call', 'zoom', 'standup'], prefix: "About missing the meeting — " },
  { keywords: ['forgot', 'missed', 'skipped', 'didn\'t show'], prefix: "I take responsibility for missing — " },
  { keywords: ['homework', 'assignment', 'essay', 'paper', 'deadline', 'submit'], prefix: "Regarding the assignment — " },
  { keywords: ['date', 'dinner', 'stood', 'cancelled', 'reservation'], prefix: "About last night — " },
  { keywords: ['early', 'morning', 'alarm', 'wake', 'overslept'], prefix: "I know I should have been up earlier — " },
  { keywords: ['text', 'message', 'reply', 'respond', 'call back'], prefix: "About not getting back to you — " },
  { keywords: ['party', 'event', 'birthday', 'wedding'], prefix: "I'm so sorry I missed it — " },
];

/* ── STATE ────────────────────────────────────────────────────── */

let currentTone    = 'serious';
let currentExcuse  = '';
let lastCategory   = 'work';
let toastTimer     = null;

/* ── DOM REFS ─────────────────────────────────────────────────── */

const genBtn      = document.getElementById('genBtn');
const resultCard  = document.getElementById('resultCard');
const resultText  = document.getElementById('resultText');
const resultTag   = document.getElementById('resultTag');
const copyBtn     = document.getElementById('copyBtn');
const anotherBtn  = document.getElementById('anotherBtn');
const shareWa     = document.getElementById('shareWa');
const shareTw     = document.getElementById('shareTw');
const toastEl     = document.getElementById('toast');
const modalOverlay = document.getElementById('modalOverlay');
const modalBody   = document.getElementById('modalBody');
const modalClose  = document.getElementById('modalClose');
const navToggle   = document.getElementById('navToggle');
const navLinks    = document.getElementById('navLinks');
const yearEl      = document.getElementById('year');

/* ── INIT ─────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  bindEvents();
});

function bindEvents() {
  // Tone buttons
  document.querySelectorAll('.tone-btn').forEach(btn => {
    btn.addEventListener('click', () => selectTone(btn));
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectTone(btn); }
    });
  });

  // Generate
  if (genBtn) genBtn.addEventListener('click', generateExcuse);

  // Result actions
  if (copyBtn)    copyBtn.addEventListener('click',    copyExcuse);
  if (anotherBtn) anotherBtn.addEventListener('click', generateExcuse);

  // Modal triggers (data-modal attribute)
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); openModal(el.dataset.modal); });
  });

  // Modal close
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Enter' && document.activeElement === genBtn) generateExcuse();
  });

  // Nav toggle
  if (navToggle) navToggle.addEventListener('click', toggleNav);

  // Close nav on link click (mobile)
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Input — allow Enter to trigger
  const situationInput = document.getElementById('situation');
  if (situationInput) {
    situationInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') generateExcuse();
    });
  }
}

/* ── TONE SELECTION ──────────────────────────────────────────── */

function selectTone(btn) {
  document.querySelectorAll('.tone-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  currentTone = btn.dataset.tone;
}

/* ── GENERATE EXCUSE ─────────────────────────────────────────── */

function generateExcuse() {
  const category  = document.getElementById('category').value;
  const situation = (document.getElementById('situation').value || '').trim().toLowerCase();

  lastCategory = category;

  // Loading state
  genBtn.classList.add('loading');
  genBtn.setAttribute('aria-busy', 'true');

  // Simulate AI thinking delay (600–1100ms)
  const delay = 600 + Math.random() * 500;

  setTimeout(() => {
    const pool   = getPool(category, currentTone);
    let excuse   = pickRandom(pool);
    excuse       = applyContextPrefix(excuse, situation);

    currentExcuse = excuse;

    // Update result tag
    const catLabel  = document.getElementById('category').options[document.getElementById('category').selectedIndex].text;
    const toneLabel = currentTone.charAt(0).toUpperCase() + currentTone.slice(1);
    if (resultTag) resultTag.textContent = `${catLabel.replace(/^.+?\s/, '')} · ${toneLabel}`;

    // Show card
    resultCard.removeAttribute('hidden');
    resultText.classList.remove('typing');
    resultText.textContent = '';

    // Typewriter effect
    typeText(resultText, excuse, () => {
      // Cursor gone after typing
      resultText.classList.remove('typing');
    });

    // Share links
    updateShareLinks(excuse);

    // Done loading
    genBtn.classList.remove('loading');
    genBtn.setAttribute('aria-busy', 'false');

    // Scroll result into view on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
  }, delay);
}

/* ── HELPERS ─────────────────────────────────────────────────── */

function getPool(category, tone) {
  const cat  = EXCUSES[category]  || EXCUSES.work;
  const pool = cat[tone]          || cat.serious;
  return pool;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function applyContextPrefix(excuse, situation) {
  if (!situation) return excuse;

  for (const { keywords, prefix } of CONTEXT_MAP) {
    if (keywords.some(k => situation.includes(k))) {
      const lower = excuse.charAt(0).toLowerCase() + excuse.slice(1);
      return prefix + lower;
    }
  }
  return excuse;
}

function typeText(el, text, onDone) {
  el.classList.add('typing');
  let i = 0;
  const speed = Math.max(12, Math.min(28, Math.round(2200 / text.length)));

  const tick = () => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(tick, speed);
    } else {
      el.classList.remove('typing');
      if (onDone) onDone();
    }
  };
  tick();
}

function updateShareLinks(excuse) {
  const encoded = encodeURIComponent(`"${excuse}"\n\n— Generated by ExcuseGen ⚡ https://excusegen.app`);
  if (shareWa) shareWa.href = `https://wa.me/?text=${encoded}`;
  if (shareTw) shareTw.href = `https://twitter.com/intent/tweet?text=${encoded}`;
}

/* ── COPY ────────────────────────────────────────────────────── */

function copyExcuse() {
  if (!currentExcuse) return;

  const fallback = () => {
    const el = document.createElement('textarea');
    el.value = currentExcuse;
    el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('📋 Copied to clipboard!');
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(currentExcuse)
      .then(() => showToast('📋 Copied to clipboard!'))
      .catch(fallback);
  } else {
    fallback();
  }

  // Button pulse feedback
  copyBtn.textContent = '✅ Copied!';
  setTimeout(() => { copyBtn.textContent = '📋 Copy'; }, 2000);
}

/* ── TOAST ───────────────────────────────────────────────────── */

function showToast(msg) {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2800);
}

/* Expose globally for inline onclick (Pro button) */
window.showToast = showToast;

/* ── NAV TOGGLE ──────────────────────────────────────────────── */

function toggleNav() {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
}

/* ── MODALS ──────────────────────────────────────────────────── */

const MODAL_CONTENT = {

  privacy: `
    <h2>Privacy Policy</h2>
    <p class="modal-date">Last updated: January 2025</p>

    <h3>What We Collect</h3>
    <p>ExcuseGen is built to be lightweight and privacy-respecting. We do not collect or store any personally identifiable information. Text entered into the generator is processed entirely in your browser and is never transmitted to our servers.</p>

    <h3>Analytics</h3>
    <p>We may use anonymous, aggregated analytics (page views, session duration) to understand how the site is used. No personal data is associated with this information.</p>

    <h3>Advertising</h3>
    <p>We display third-party advertisements. Ad providers may use cookies to personalise ads shown to you. You can manage cookie preferences through your browser settings or relevant opt-out tools.</p>

    <h3>Third Parties</h3>
    <p>We do not sell, rent, or share your data with any third parties. Social share buttons (WhatsApp, Twitter/X) link to external platforms governed by their own privacy policies.</p>

    <h3>Your Rights</h3>
    <p>If you have questions or requests regarding your data, please reach out via our Contact page. We'll respond promptly.</p>

    <h3>Changes</h3>
    <p>We may update this policy from time to time. Continued use of the site constitutes acceptance of any changes.</p>
  `,

  terms: `
    <h2>Terms of Service</h2>
    <p class="modal-date">Last updated: January 2025</p>

    <h3>Acceptance</h3>
    <p>By accessing or using ExcuseGen, you agree to these Terms of Service. If you do not agree, please discontinue use of the site.</p>

    <h3>Permitted Use</h3>
    <p>ExcuseGen provides generated content for entertainment and personal use only. You agree not to use any generated content for fraudulent, harmful, defamatory, or illegal purposes.</p>

    <h3>Disclaimer of Liability</h3>
    <p>ExcuseGen is not responsible for any consequences, outcomes, or reactions resulting from use of generated excuses. Use at your own risk. We make no warranties as to the believability, accuracy, or reception of any generated text.</p>

    <h3>Intellectual Property</h3>
    <p>The ExcuseGen brand name, logo, design, and underlying code are the property of ExcuseGen. Generated excuse text may be freely used by users for personal purposes.</p>

    <h3>Availability</h3>
    <p>We do not guarantee uninterrupted availability of the service. We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.</p>

    <h3>Modifications</h3>
    <p>We reserve the right to update these terms at any time. Your continued use of the site constitutes agreement to any revised terms.</p>

    <h3>Governing Law</h3>
    <p>These terms are governed by applicable law. Any disputes will be resolved in good faith through direct communication before any formal proceedings.</p>
  `,

  contact: `
    <h2>Get in Touch</h2>
    <p>Have feedback, found a bug, or want to collaborate? We'd love to hear from you.</p>

    <form class="contact-form" id="contactForm" novalidate>
      <input  type="text"  id="cf-name"    placeholder="Your name"       required autocomplete="name" />
      <input  type="email" id="cf-email"   placeholder="Your email"      required autocomplete="email" />
      <input  type="text"  id="cf-subject" placeholder="Subject"         />
      <textarea id="cf-message" rows="5"   placeholder="Your message…"   required></textarea>
      <button type="submit">Send Message</button>
    </form>
  `,

};

function openModal(type) {
  if (!MODAL_CONTENT[type]) return;

  modalBody.innerHTML = MODAL_CONTENT[type];
  modalOverlay.removeAttribute('hidden');
  modalOverlay.setAttribute('aria-hidden', 'false');

  // Force reflow for transition
  requestAnimationFrame(() => {
    modalOverlay.style.opacity = '1';
  });

  // Trap focus
  modalClose.focus();

  // Bind contact form if applicable
  const cf = document.getElementById('contactForm');
  if (cf) cf.addEventListener('submit', handleContactSubmit);
}

function closeModal() {
  modalOverlay.setAttribute('hidden', '');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

function handleContactSubmit(e) {
  e.preventDefault();

  const name    = (document.getElementById('cf-name')?.value    || '').trim();
  const email   = (document.getElementById('cf-email')?.value   || '').trim();
  const message = (document.getElementById('cf-message')?.value || '').trim();

  if (!name || !email || !message) {
    showToast('⚠️ Please fill in all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showToast('⚠️ Please enter a valid email address.');
    return;
  }

  // In production: send to your API / Formspree / EmailJS
  closeModal();
  showToast('✅ Message sent! We\'ll get back to you soon.');
}

/* ── SCROLL ANIMATIONS (Intersection Observer) ─────────────────── */

const observeTargets = document.querySelectorAll('.how-card, .about-blurb, .pro-card');

if ('IntersectionObserver' in window && observeTargets.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeUp 0.6s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  observeTargets.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
