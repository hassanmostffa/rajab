// Main application entry point
import './style.css'
import { duasContent } from './content.js';

// Data populated from user JSON
const appData = {
  "month": "رجب الأصب",
  "source_references": ["مفاتيح الجنان", "إقبال الأعمال"],
  "about_page": {
    "title": "حول هذا العمل",
    "description": "نسعى من خلال هذا الموقع إلى تيسير الوصول لأعمال شهر رجب الأصب، ليكون رفيقاً للمؤمنين في خلواتهم وعباداتهم.",
    "scientific_sources": [
      {
        "book": "مفاتيح الجنان",
        "author": "الشيخ عباس القمي (قده)"
      },
      {
        "book": "إقبال الأعمال",
        "author": "السيد ابن طاووس (قده)"
      },
      {
        "book": "زاد المعاد",
        "author": "العلامة المجلسي (قده)"
      }
    ],
    "dedication": "هذا العمل صدقة جاريةلوالدي السيد حسن احمد البطاط (رحمه الله)، نسألكم الدعاء لوالدينا ولجميع المؤمنين والمؤمنات."
  },
  "general_deeds": [
    {
      "id": 1,
      "title": "الاستغفار اليومي",
      "description": "أن يقول في كل يوم من رجب مائة مرة:",
      "content": "أَسْتَغْفِرُ اللهَ الَّذِي لا إِلَهَ إِلا هُوَ وَحْدَهُ لا شَرِيكَ لَهُ وَأَتُوبُ إِلَيْهِ",
      "reward": "غفر الله له وختم له بالرحمة والمغفرة"
    },
    {
      "id": 2,
      "title": "دعاء (يا من أرجوه لكل خير)",
      "description": "يُدعى به في كل يوم من رجب بعد صلوات الفريضة",
      "content": "يَا مَنْ أَرْجُوهُ لِكُلِّ خَيْرٍ، وَآمَنُ سَخَطَهُ عِنْدَ كُلِّ شَرٍّ، يَا مَنْ يُعْطِي الْكَثِيرَ بِالْقَلِيلِ، يَا مَنْ يُعْطِي مَنْ سَأَلَهُ، يَا مَنْ يُعْطِي مَنْ لَمْ يَسْأَلْهُ وَمَنْ لَمْ يَعْرِفْهُ تَحَنُّناً مِنْهُ وَرَحْمَةً، أَعْطِنِي بِمَسْأَلَتِي إِيَّاكَ جَمِيعَ خَيْرِ الدُّنْيَا وَجَمِيعَ خَيْرِ الآخِرَةِ، وَاصْرِفْ عَنِّي بِمَسْأَلَتِي إِيَّاكَ جَمِيعَ شَرِّ الدُّنْيَا وَشَرِّ الآخِرَةِ، فَإِنَّهُ غَيْرُ مَنْقُوصٍ مَا أَعْطَيْتَ، وَزِدْنِي مِنْ فَضْلِكَ يَا كَرِيمُ."
    }
  ],
  "special_occasions": [
    {
      "day": 1,
      "date": "ليلة الجمعة الأولى",
      "title": "ليلة الرغائب",
      "deeds": [
        { "text": "صيام يوم الخميس الأول من رجب", "key": "laylat_raghaib" },
        { "text": "الصلاة المخصصة بين العشائين (12 ركعة)", "key": "laylat_raghaib" }
      ]
    },
    {
      "day": 13,
      "date": "13 رجب",
      "title": "ولادة أمير المؤمنين (ع)",
      "deeds": [
        { "text": "زيارة أمير المؤمنين عليه السلام", "key": "ziyarat_rajab_general" },
        { "text": "صوم الأيام البيض (13، 14، 15)", "key": "white_days" }
      ]
    },
    {
      "day": 25,
      "date": "25 رجب",
      "title": "استشهاد الإمام الكاظم (ع)",
      "deeds": [
        { "text": "زيارة الإمام الكاظم (ع)", "key": "day_25_kadhim" },
        { "text": "الصلاة وزيارة العتبات", "key": null }
      ]
    },
    {
      "day": 27,
      "date": "27 رجب",
      "title": "عيد المبعث النبوي الشريف",
      "deeds": [
        { "text": "الغسل", "key": "mabath_day" },
        { "text": "الصيام (وهو أحد الأيام الأربعة)", "key": "mabath_day" },
        { "text": "زيارة النبي (ص) وأمير المؤمنين (ع)", "key": "mabath_day" }
      ]
    }
  ],
  "extended_content": {
    "prominent_duas": [
      {
        "day": 15,
        "title": "دعاء أم داوود",
        "occurrence": "يوم النصف من رجب (15 رجب)",
        "description": "وهو أهم أعمال هذا اليوم، ويُقرأ بعد صيام الأيام البيض وصلاة الظهرين.",
        "content_summary": "يحتوي على تسبيحات ودعاء طويل يتوسل فيه الداعي بجميع الأنبياء والأوصياء.",
        "source": "إقبال الأعمال - السيد بن طاووس",
        "url_slug": "dua-umm-dawud"
      },
      {
        "title": "الدعاء المروي عن الإمام الصادق (ع)",
        "occurrence": "كل يوم من شهر رجب",
        "content": "خابَ الوافِدُونَ عَلى غَيْرِكَ، وَخَسِرَ المُتَعَرِّضُونَ إِلاّ لَكَ، وَضاعَ المُلِّمُونَ إِلاّ بِكَ، وَأَجْدَبَ المُنْتَجِعُونَ إِلاّ مَنِ انْتَجَعَ فَضْلَكَ...",
        "source": "مفاتيح الجنان"
      },
      {
        "day": 1,
        "title": "زيارة الإمام الحسين (ع) في رجب",
        "occurrence": "في أول يوم من رجب وفي منتصفه",
        "content": "الْحَمْدُ للهِ الَّذِي اسْتَنْقَذَنَا بِكَ مِنَ الشِّرْكِ وَالضَّلالِ، اللهُمَّ فَصَلِّ عَلَى مُحَمَّد وَآلِ مُحَمَّد..."
      }
    ],
    "special_prayers": [
      {
        "day": 1,
        "title": "صلاة الليلة الأولى",
        "method": "عشر ركعات، في كل ركعة (الحمد) و (قل يا أيها الكافرون) مرة و (قل هو الله أحد) 3 مرات.",
        "reward": "غفر الله له ذنوبه"
      },
      {
        "day": 1,
        "title": "صلاة ليلة الرغائب التفصيلية",
        "method": "12 ركعة بين العشائين، في كل ركعة (الحمد) مرة، (إنا أنزلناه) 3 مرات، (قل هو الله أحد) 12 مرة.",
        "post_prayer_dhikr": "اللهم صل على محمد النبي الأمي وعلى آله (70 مرة)"
      }
    ]
  },

};

const dailyDeeds = [
  "استغفر الله ١٠٠ مرة.",
  "صم هذا اليوم إن استطعت، فثواب الصوم في رجب عظيم.",
  "تصدق ولو بالقليل.",
  "اقرأ سورة الإخلاص ١٠٠ مرة.",
  "زر مريضاً أو تفقد جاراً.",
  "صلِ صلاة الليل.",
  "صلِ على محمد وآل محمد ١٠٠ مرة.",
  "اقرأ القرآن لمدة ١٥ دقيقة على الأقل.",
  "ادعُ لوالديك وأهلك.",
  "أطعم مسكيناً."
];

// Feature: Deed of the Day
function initDeedOfTheDay() {
  const deedDisplay = document.getElementById('deed-display');
  // Simple day-based selection
  const today = new Date().getDate();
  const deedIndex = today % dailyDeeds.length;

  if (deedDisplay) {
    deedDisplay.innerHTML = `<p class="lead">"${dailyDeeds[deedIndex]}"</p>`;
  }
}

// Feature: Daily Duas & Deeds List (Categorized)

// Navigation Logic
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update Nav
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update View
      const target = btn.dataset.target;
      views.forEach(view => {
        view.classList.remove('active');
        if (view.id === `view-${target}`) {
          view.classList.add('active');
        }
      });
    });
  });
}

// Modal Logic - Exposed Globally
window.openDua = (key) => {
  const content = duasContent[key];
  if (!content) return;

  const modal = document.getElementById('dua-modal');
  const title = document.getElementById('modal-title');
  const text = document.getElementById('modal-text');

  // Store text for copy
  modal.dataset.currentText = content.text;

  if (title) title.textContent = content.title;
  if (text) text.innerHTML = content.text.replace(/\n/g, '<br>');

  if (modal) modal.classList.remove('hidden');
}

// Close Modal & Copy Logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('dua-modal');
  const closeBtn = document.getElementById('close-modal');
  const copyBtn = document.getElementById('copy-dua-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }

  // Copy Logic
  if (copyBtn && modal) {
    copyBtn.addEventListener('click', () => {
      const text = modal.dataset.currentText;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          const original = copyBtn.textContent;
          copyBtn.textContent = '✅';
          setTimeout(() => copyBtn.textContent = original, 2000);
        }).catch(err => console.error("Copy failed", err));
      }
    });
  }
});


function initDuas() {
  const container = document.getElementById('duas-list');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!container) return;

  function render(filter = 'all') {
    container.innerHTML = '';
    container.style.opacity = '0'; // Fade out effect

    setTimeout(() => {
      // Group content by category
      const categories = {
        general_deeds: { title: "🌟 أعمال رجب العامة", items: [] },
        daily_adhkar: { title: "📿 أذكار يومية", items: [] },
        daily_duas: { title: "🤲 أدعية يومية", items: [] },
        ziyarat: { title: "🕌 زيارات", items: [] },
        special_occasions: { title: "🗓️ مناسبات خاصة", items: [] }
      };

      // Populate categories
      Object.keys(duasContent).forEach(key => {
        const item = { ...duasContent[key], key };
        if (categories[item.category]) {
          categories[item.category].items.push(item);
        }
      });

      let html = '';

      // Determine which categories to show
      const catsToShow = filter === 'all'
        ? Object.keys(categories)
        : [filter];

      if (filter !== 'all' && !categories[filter]) {
        // Fallback or multiple categories mapping could go here
      }

      catsToShow.forEach(catKey => {
        const cat = categories[catKey];
        if (cat && cat.items.length > 0) {
          // If filtering "all", show headers. If specific, maybe hide or show? Let's show for clarity.
          html += `<h3 class="category-header">${cat.title}</h3>`;

          cat.items.forEach(dua => {
            const shortText = dua.text.substring(0, 120) + (dua.text.length > 120 ? '...' : '');
            html += `
              <div class="dua-card card" onclick="window.openDua('${dua.key}')">
                <div class="dua-header">
                  <h3>${dua.title}</h3>
                  ${dua.timing ? `<span class="badge badge-timing">${dua.timing === 'night' ? '🌙 ليلة' : '☀️ يوم'} ${dua.day || ''}</span>` : ''}
                </div>
                <p class="dua-desc">${dua.desc}</p>
                <div class="dua-preview arabic-sm">
                  ${shortText}
                </div>
                <button class="btn-text">اقرأ المزيد &larr;</button>
              </div>
            `;
          });
        }
      });

      container.innerHTML = html;
      container.style.opacity = '1'; // Fade in
    }, 200);
  }

  // Event Listeners for Filters
  if (filterBtns) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Render
        render(btn.dataset.filter);
      });
    });
  }

  // Initial Render
  render('all');
}

// Feature: Tasbih Counter
function initTasbih() {
  let count = 0;
  const countDisplay = document.getElementById('tasbih-count');
  const btn = document.getElementById('tasbih-btn');
  const resetBtn = document.getElementById('tasbih-reset');

  if (btn && countDisplay) {
    btn.addEventListener('click', () => {
      count++;
      countDisplay.textContent = count.toLocaleString('ar-EG');
      // Simple animation effect
      btn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        btn.style.transform = '';
      }, 100);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        count = 0;
        countDisplay.textContent = count.toLocaleString('ar-EG');
      });
    }
  }
}

// Helper: Get Current Hijri Date
// Adjusted for Sayyid al-Sistani (approx. -1 day from Umm al-Qura usually)
const HIJRI_OFFSET = -1;

function getHijriDate() {
  try {
    const date = new Date();
    // Use standard calculation as base
    const options = { calendar: 'islamic-umalqura', day: 'numeric', month: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', options);
    const parts = formatter.formatToParts(date);

    let day = 0;
    let month = 0;

    parts.forEach(p => {
      if (p.type === 'day' && !isNaN(p.value)) day = parseInt(p.value);
      if (p.type === 'month' && !isNaN(p.value)) month = parseInt(p.value);
    });

    if (day > 0 && month > 0) {
      // Apply Offset
      let newDay = day + HIJRI_OFFSET;

      // Simple wrap-around logic (approximate for 30-day months)
      // This is a basic approximation suitable for a client-side app without a full ephemeris
      if (newDay <= 0) {
        month -= 1;
        if (month <= 0) month = 12;
        newDay += 30; // Assume previous month was 30 days
      } else if (newDay > 30) {
        month += 1;
        if (month > 12) month = 1;
        newDay -= 30;
      }

      return { day: newDay, month };
    }
  } catch (e) {
    console.error("Hijri calculation failed, using fallback:", e);
  }

  // Fallback: If calculation fails, standard fallback to avoid crash
  // Since we are developing for Rajab, let's default to Rajab 1 if all else fails
  return { day: 1, month: 7 };
}

// Feature: Calendar & Important Dates Sidebar
function initDates() {
  const datesContainer = document.getElementById('dates-list');
  const hijriDate = getHijriDate();
  const isRajab = hijriDate.month === 7; // Rajab is the 7th month

  if (datesContainer) {
    // Render Calendar Grid
    const calendarHTML = `
      <div class="calendar-wrapper">
        <div class="calendar-grid">
          ${Array.from({ length: 30 }, (_, i) => {
      const day = i + 1;
      const occasions = appData.special_occasions.filter(o => o.day === day);
      const extraDuas = appData.extended_content.prominent_duas.filter(d => d.day === day);
      const extraPrayers = appData.extended_content.special_prayers.filter(p => p.day === day);

      const hasEvent = occasions.length > 0 || extraDuas.length > 0 || extraPrayers.length > 0;
      let highlightClass = hasEvent ? 'highlight' : '';

      // Highlight Today
      if (isRajab && day === hijriDate.day) {
        highlightClass += ' today';
      }

      return `
              <div class="calendar-day ${highlightClass}" data-day="${day}">
                ${day}
                ${hasEvent ? '<span class="event-dot"></span>' : ''}
              </div>
            `;
    }).join('')}
        </div>
        <div id="calendar-details" class="calendar-details">
          <p class="details-placeholder">اضغط على يوم لعرض تفاصيله</p>
        </div>
      </div>
    `;

    datesContainer.innerHTML = calendarHTML;

    // Auto-select today if it's Rajab
    if (isRajab) {
      setTimeout(() => {
        const todayEl = document.querySelector(`.calendar-day[data-day="${hijriDate.day}"]`);
        if (todayEl) {
          todayEl.click();
        }
      }, 500);
    }

    // Add Click Handlers
    document.querySelectorAll('.calendar-day').forEach(dayEl => {
      dayEl.addEventListener('click', () => {
        const day = parseInt(dayEl.dataset.day);
        showDayDetails(day);

        // Active state
        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
        dayEl.classList.add('active');

        // Mobile UX: Scroll to details if needed
        if (window.innerWidth < 768) {
          document.getElementById('calendar-details').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
}

function showDayDetails(day) {
  const detailsContainer = document.getElementById('calendar-details');
  const occasions = appData.special_occasions.filter(o => o.day === day);
  const extraDuas = appData.extended_content.prominent_duas.filter(d => d.day === day);
  const extraPrayers = appData.extended_content.special_prayers.filter(p => p.day === day);

  if (occasions.length === 0 && extraDuas.length === 0 && extraPrayers.length === 0) {
    detailsContainer.innerHTML = `<p class="details-placeholder">لا توجد مناسبات خاصة مسجلة لهذا اليوم (${day} رجب).</p>`;
    return;
  }

  let html = `<h3 class="details-header">${day} رجب</h3>`;

  if (occasions.length > 0) {
    html += `
      <div class="details-section">
        <h4>🗓️ المناسبات</h4>
        ${occasions.map(o => `
          <div class="detail-item">
            <strong>${o.title}</strong>
            ${o.deeds ? `<ul class="date-deeds-list">
              ${o.deeds.map(d => {
      if (typeof d === 'string') return `<li>${d}</li>`;
      const text = d.text || d;
      const key = d.key;
      if (key) {
        return `<li class="clickable-deed" onclick="window.openDua('${key}')">${text}</li>`;
      }
      return `<li>${text}</li>`;
    }).join('')}
            </ul>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  if (extraDuas.length > 0) {
    html += `
      <div class="details-section">
        <h4>🤲 أدعية مستحبة</h4>
        ${extraDuas.map(d => `
          <div class="detail-item">
            <strong>${d.title}</strong>
            ${d.description ? `<p>${d.description}</p>` : ''}
            ${d.content ? `<p class="arabic-sm">${d.content.substring(0, 50)}...</p>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  if (extraPrayers.length > 0) {
    html += `
      <div class="details-section">
        <h4>🧎 صلوات</h4>
        ${extraPrayers.map(p => `
          <div class="detail-item">
            <strong>${p.title}</strong>
            <p>${p.method}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  detailsContainer.innerHTML = html;
}

// Feature: White Days Card
function initWhiteDays() {
  const whiteDaysCard = document.getElementById('white-days-card');
  if (!whiteDaysCard) return;

  const hijriDate = getHijriDate();
  const currentDay = hijriDate.day;
  const currentMonth = hijriDate.month;

  // Only show if it is Rajab (7th month)
  if (currentMonth !== 7) {
    whiteDaysCard.classList.add('hidden');
    return;
  }

  const whiteDays = [13, 14, 15];
  let content = '';

  if (currentDay < 13) {
    const daysLeft = 13 - currentDay;
    let daysText = `باقي ${daysLeft} أيام`;
    if (daysLeft === 1) daysText = "باقي يوم واحد";
    if (daysLeft === 2) daysText = "باقي يومان";
    if (daysLeft > 10) daysText = `باقي ${daysLeft} يوماً`; // Arabic grammar for 11-99

    content = `
        <h3>🌕 الأيام البيض تقترب</h3>
        <p class="white-days-status">${daysText} على الأيام البيض (١٣، ١٤، ١٥ رجب)</p>
        <p>استعد لصيام هذه الأيام المباركة لما لها من فضل عظيم.</p>
        <p class="date-badge">اليوم: ${currentDay} رجب</p>
      `;
    whiteDaysCard.classList.remove('hidden');
  } else if (whiteDays.includes(currentDay)) {
    content = `
        <h3>🌕 اليوم من الأيام البيض</h3>
        <p class="white-days-status">اليوم هو ${currentDay} رجب</p>
        <p>صيام مقبول ودعاء مستجاب بإذن الله.</p>
      `;
    whiteDaysCard.classList.remove('hidden');
    whiteDaysCard.classList.add('active'); // Pulse effect
  } else {
    whiteDaysCard.classList.add('hidden');
  }

  whiteDaysCard.innerHTML = content;
}

// Feature: About Section
function initAbout() {
  const aboutSection = document.getElementById('about-section');
  const data = appData.about_page;

  if (aboutSection && data) {
    aboutSection.innerHTML = `
      <h2>${data.title}</h2>
      <p class="about-description">${data.description}</p>
      
      <h3>📚 المصادر</h3>
      <ul class="sources-list">
        ${data.scientific_sources.map(s => `
          <li class="source-tag">${s.book} - ${s.author}</li>
        `).join('')}
      </ul>
      
      <p class="about-dedication">
        ${data.dedication}
      </p>
    `;
  }
}

// Feature: Persistent Audio Player - Premium Design


// Feature: Theme Toggle
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  // Check local storage or system preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateToggleIcon(currentTheme);
  } else if (!prefersDarkScheme.matches) {
    // If system is light, set light
    document.documentElement.setAttribute('data-theme', 'light');
    updateToggleIcon('light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        theme = 'dark';
        document.documentElement.removeAttribute('data-theme'); // Remove attribute for default dark
      } else {
        theme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
      }
      localStorage.setItem('theme', theme);
      updateToggleIcon(theme);
    });
  }
}

function updateToggleIcon(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = theme === 'light' ? '☀️' : '🌙';
  }
}

// Initialize Features
document.addEventListener('DOMContentLoaded', () => {
  console.log('Rajab App Initialized - v1.4 Fixed');
  initTheme();
  initDeedOfTheDay();
  initDuas();
  initTasbih();
  initDates();
  initWhiteDays();
  initAbout();
  initNavigation();

});
