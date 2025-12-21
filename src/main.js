// Main application entry point
import './style.css'

// Data populated from user JSON
const appData = {
  "month": "رجب الأصب",
  "source_references": ["مفاتيح الجنان", "إقبال الأعمال"],
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
      "date": "ليلة الجمعة الأولى",
      "title": "ليلة الرغائب",
      "deeds": [
        "صيام يوم الخميس الأول من رجب",
        "الصلاة المخصصة بين العشائين (12 ركعة)"
      ]
    },
    {
      "date": "13 رجب",
      "title": "ولادة أمير المؤمنين (ع)",
      "deeds": [
        "زيارة أمير المؤمنين عليه السلام",
        "صوم الأيام البيض (13، 14، 15)"
      ]
    },
    {
      "date": "27 رجب",
      "title": "عيد المبعث النبوي الشريف",
      "deeds": [
        "الغسل",
        "الصيام (وهو أحد الأيام الأربعة التي يترجح صيامها في السنة)",
        "زيارة النبي صلى الله عليه وآله"
      ]
    }
  ]
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

// Feature: Important Dates Sidebar
function initDates() {
  const datesList = document.getElementById('dates-list');
  if (datesList) {
    datesList.innerHTML = appData.special_occasions.map(occasion => `
      <div class="card date-card">
        <h3>${occasion.title}</h3>
        <p class="date-badge">${occasion.date}</p>
        ${occasion.deeds && occasion.deeds.length > 0 ? `
          <ul class="date-deeds-list">
            ${occasion.deeds.map(deed => `<li>${deed}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('');
  }
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
  initDates();
  initAudio();
});

