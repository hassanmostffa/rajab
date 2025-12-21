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
  },
  "audio_tracks": [
    {
      "id": "user_selected_track",
      "title": "المقطع الصوتي المختار",
      "url": "https://shiavoice.com/save-Is0iM.mp3"
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

// Helper: Get Current Hijri Date
function getHijriDate() {
  try {
    const date = new Date();
    const options = { calendar: 'islamic-umalqura', day: 'numeric', month: 'numeric' };
    // Force en-US to ensure Western Arabic digits (0-9) for parseInt
    const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', options);
    const parts = formatter.formatToParts(date);

    let day = 0;
    let month = 0;

    parts.forEach(p => {
      if (p.type === 'day' && !isNaN(p.value)) day = parseInt(p.value);
      if (p.type === 'month' && !isNaN(p.value)) month = parseInt(p.value);
    });

    if (day > 0 && month > 0) {
      return { day, month };
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
        <p class="date-badge" style="margin-top:0.5rem">اليوم: ${currentDay} رجب</p>
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

// Feature: Persistent Audio Player - Premium Design
function initPersistentAudio() {
  const container = document.querySelector('.audio-player-container');
  const audioElement = document.getElementById('main-audio');
  const playBtn = document.getElementById('play-btn');
  const trackTitle = document.getElementById('track-title');
  const reciterName = document.getElementById('reciter-name');
  const playlistBtn = document.getElementById('playlist-toggle-new');
  const playlistMenu = document.getElementById('playlist-menu');
  const progressBar = document.getElementById('progress');
  const progressWrapper = document.getElementById('progress-wrapper');
  const currentTimeEl = document.getElementById('current-time');
  const durationEl = document.getElementById('duration');

  // New Controls
  const sleepTimerBtn = document.getElementById('sleep-timer-btn');
  const sleepTimerMenu = document.getElementById('sleep-timer-menu');
  const timerDisplay = document.getElementById('timer-display');
  const canvas = document.getElementById('audio-visualizer');

  if (!container || !audioElement || !playBtn) return;

  // --- Audio Visualizer Setup ---
  let audioContext, analyser, source, canvasCtx;
  let animationId;

  function initVisualizer() {
    if (!audioContext) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
      analyser = audioContext.createAnalyser();

      // Connect audio element to analyser
      try {
        source = audioContext.createMediaElementSource(audioElement);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
      } catch (e) {
        console.warn("CORS/AudioContext restricted, visualizer might be flat.", e);
        // Fallback: visualizer won't move but audio plays.
      }

      analyser.fftSize = 64; // Low res for "waves"
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      canvasCtx = canvas.getContext('2d');

      function draw() {
        animationId = requestAnimationFrame(draw);

        const width = canvas.width;
        const height = canvas.height;

        analyser.getByteFrequencyData(dataArray);

        canvasCtx.clearRect(0, 0, width, height);

        const barWidth = (width / bufferLength) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] / 2;

          const gradient = canvasCtx.createLinearGradient(0, height - barHeight, 0, height);
          gradient.addColorStop(0, '#d4af37');
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');

          canvasCtx.fillStyle = gradient;
          canvasCtx.beginPath();
          // Draw rounded bars or sine wave feel
          canvasCtx.roundRect(x, height - barHeight, barWidth, barHeight, 5);
          canvasCtx.fill();

          x += barWidth + 1;
        }
      }

      // Handle canvas resize
      canvas.width = container.clientWidth;
      canvas.height = 100;
      draw();
    }
  }

  // --- Sleep Timer Logic ---
  let sleepTimerId = null;

  sleepTimerBtn.addEventListener('click', () => {
    sleepTimerMenu.classList.toggle('hidden');
  });

  sleepTimerMenu.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const minutes = parseInt(btn.dataset.time);

      if (sleepTimerId) clearTimeout(sleepTimerId);
      timerDisplay.classList.add('hidden');

      if (minutes > 0) {
        const ms = minutes * 60 * 1000;
        const endTime = Date.now() + ms;

        timerDisplay.textContent = `⏱️ إيقاف بعد ${minutes} د`;
        timerDisplay.classList.remove('hidden');

        sleepTimerId = setTimeout(() => {
          pauseAudio();
          timerDisplay.textContent = "💤 تم الإيقاف";
          setTimeout(() => timerDisplay.classList.add('hidden'), 3000);
        }, ms);
      }

      sleepTimerMenu.classList.add('hidden');
    });
  });


  // --- Logic reused for Playlist & Playback ---
  // Define Tracks (or use what's in appData if updated)
  const tracks = appData.audio_tracks;
  if (!tracks || tracks.length === 0) return;

  // Initialize Playlist UI
  playlistMenu.innerHTML = tracks.map((track, index) => `
    <button class="playlist-item" data-index="${index}">
      <span style="font-weight:bold">${track.title}</span>
    </button>
  `).join('');

  let currentTrackIndex = 0;

  function loadTrack(index) {
    if (index < 0 || index >= tracks.length) return;
    currentTrackIndex = index;
    const track = tracks[index];

    trackTitle.textContent = track.title;
    // Hack: extract reciter
    const titleParts = track.title.split('(');
    if (titleParts.length > 1) {
      trackTitle.textContent = titleParts[0].trim();
      reciterName.textContent = titleParts[1].replace(')', '').trim();
    } else {
      reciterName.textContent = "القارئ";
    }

    audioElement.src = track.url;

    document.querySelectorAll('.playlist-item').forEach(item => {
      item.classList.toggle('active', parseInt(item.dataset.index) === index);
    });

    progressBar.style.width = '0%';
    currentTimeEl.textContent = "0:00";
    playBtn.textContent = '▶';
    container.classList.remove('playing');
  }

  function togglePlay() {
    // Need to initialize AudioContext on user gesture
    if (!audioContext) initVisualizer();
    if (audioContext && audioContext.state === 'suspended') audioContext.resume();

    if (audioElement.paused) {
      audioElement.play().then(() => {
        playBtn.textContent = '⏸';
        playBtn.style.paddingRight = '0'; // Center adjustment
        container.classList.add('playing'); // Start rotation
      }).catch(error => {
        console.error("Play failed:", error);
      });
    } else {
      pauseAudio();
    }
  }

  function pauseAudio() {
    audioElement.pause();
    playBtn.textContent = '▶';
    playBtn.style.paddingRight = '4px';
    container.classList.remove('playing'); // Stop rotation
  }

  playBtn.addEventListener('click', togglePlay);

  playlistBtn.addEventListener('click', () => {
    playlistMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
      const index = parseInt(item.dataset.index);
      loadTrack(index);
      setTimeout(() => togglePlay(), 500);
      playlistMenu.classList.add('hidden');
    });
  });

  audioElement.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audioElement;
    if (duration) {
      const progressPercent = (currentTime / duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
      currentTimeEl.textContent = formatTime(currentTime);
      durationEl.textContent = formatTime(duration);
    }
  });

  progressWrapper.addEventListener('click', (e) => {
    const width = progressWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audioElement.duration;
    if (duration) {
      audioElement.currentTime = (clickX / width) * duration;
    }
  });

  // Format Time Helper
  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  // Initial Load
  loadTrack(0);
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
  console.log('Rajab App Initialized - v1.4 Fixed');
  initTheme();
  initDeedOfTheDay();
  initDuas();
  initTasbih();
  initDates();
  initWhiteDays();
  initAbout();
  initPersistentAudio();
});
