// Main application entry point
import './style.css'

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
    "dedication": "هذا العمل صدقة جارية، نسألكم الدعاء لوالدينا ولجميع المؤمنين والمؤمنات."
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
        "صيام يوم الخميس الأول من رجب",
        "الصلاة المخصصة بين العشائين (12 ركعة)"
      ]
    },
    {
      "day": 13,
      "date": "13 رجب",
      "title": "ولادة أمير المؤمنين (ع)",
      "deeds": [
        "زيارة أمير المؤمنين عليه السلام",
        "صوم الأيام البيض (13، 14، 15)"
      ]
    },
    {
      "day": 25,
      "date": "25 رجب",
      "title": "استشهاد الإمام الكاظم (ع)",
      "deeds": ["الزيارة", "الصلاة"]
    },
    {
      "day": 27,
      "date": "27 رجب",
      "title": "عيد المبعث النبوي الشريف",
      "deeds": [
        "الغسل",
        "الصيام (وهو أحد الأيام الأربعة التي يترجح صيامها في السنة)",
        "زيارة النبي صلى الله عليه وآله"
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
  }
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

// Feature: Daily Duas
function initDuas() {
  const duasList = document.getElementById('duas-list');
  if (duasList) {
    duasList.innerHTML = appData.general_deeds.map(dua => `
      <div class="dua-item">
        <div class="dua-header">
          <h3>${dua.title}</h3>
          <button class="copy-btn" data-copy-target="dua-content-${dua.id}" aria-label="نسخ النص">
            <span class="icon">📋</span> نسخ
          </button>
        </div>
        <p class="dua-description">${dua.description}</p>
        <p id="dua-content-${dua.id}" class="arabic">${dua.content}</p>
        ${dua.reward ? `<p class="dua-reward"><span class="label">الثواب:</span> ${dua.reward}</p>` : ''}
      </div>
    `).join('');

    // Attach event listeners for copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-copy-target');
        const textToCopy = document.getElementById(targetId).textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.innerHTML;
          btn.innerHTML = '<span class="icon">✅</span> تم النسخ';
          btn.classList.add('copied');

          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      });
    });
  }
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

// Feature: Calendar & Important Dates Sidebar
function initDates() {
  const datesContainer = document.getElementById('dates-list');
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
      const highlightClass = hasEvent ? 'highlight' : '';

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
            ${o.deeds ? `<ul class="date-deeds-list">${o.deeds.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
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

// Feature: White Days Card
function initWhiteDays() {
  const whiteDaysCard = document.getElementById('white-days-card');
  if (!whiteDaysCard) return;

  // Mock date - In a real app we'd use Hijri library
  // For demo, let's assume we are approaching or are in White Days
  // Just show it as "Upcoming" for day 10, or "Today" for day 13
  // Since we don't have a live hijri date, let's hardcode a state for visualization
  // Or better, let's assume today is Rajab 12th for demo purposes
  const mockDay = 12;
  const whiteDays = [13, 14, 15];

  let content = '';

  if (mockDay < 13) {
    const daysLeft = 13 - mockDay;
    content = `
        <h3>🌕 الأيام البيض تقترب</h3>
        <p class="white-days-status">باقي ${daysLeft} يوم على الأيام البيض (١٣، ١٤، ١٥ رجب)</p>
        <p>استعد لصيام هذه الأيام المباركة لما لها من فضل عظيم.</p>
      `;
    whiteDaysCard.classList.remove('hidden');
  } else if (whiteDays.includes(mockDay)) {
    content = `
        <h3>🌕 اليوم من الأيام البيض</h3>
        <p class="white-days-status">اليوم هو ${mockDay} رجب</p>
        <p>صيام مقبول ودعاء مستجاب بإذن الله.</p>
      `;
    whiteDaysCard.classList.remove('hidden');
    whiteDaysCard.classList.add('active'); // Pulse effect
  } else {
    // After white days, maybe hide or show completion
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
      <p style="margin-bottom: 1rem; font-size: 1.1rem;">${data.description}</p>
      
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

// Feature: Audio Player
function initAudio() {
  const audioPlayer = document.querySelector('audio');
  if (audioPlayer) {
    // using Al-Fatiha as a placeholder for testing
    audioPlayer.querySelector('source').src = "https://download.quranicaudio.com/quran/mishari_rashid_al_afasy/001.mp3";
    audioPlayer.load();
  }
}

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
  console.log('Rajab App Initialized');
  initTheme();
  initDeedOfTheDay();
  initDuas();
  initTasbih();
  initDates(); // Calendar
  initWhiteDays(); // White Days
  initAbout(); // About Section
  initAudio();
});
