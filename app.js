document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements Selectors
  const nodes = document.querySelectorAll('.deck-node');
  const desktopViewscreen = document.getElementById('cyberDeckViewscreen');
  const mobileVideo = document.getElementById('cyberDeckMobileVideo');
  const videoSource = document.getElementById('mobileVideoSource');
  const runtimeStatus = document.getElementById('runtime-status');
  const displayMode = document.getElementById('deck-display-mode');
  const wasmBufferStat = document.getElementById('wasm-buffer-stat');
  const logStream = document.getElementById('logStreamOutput');
  const inspectBtn = document.getElementById('inspectCaseStudyBtn');

  // Modal Elements Selectors
  const modal = document.getElementById('cyberCaseStudyModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const mTitle = document.getElementById('modalProjectTitle');
  const mEngine = document.getElementById('modalSpecEngine');
  const mRole = document.getElementById('modalSpecRole');
  const mTimeline = document.getElementById('modalSpecTimeline');
  const mSummary = document.getElementById('modalProjectSummary');

  let currentActiveData = {};

  // Viewport checking layout script helper
  const isMobileViewport = () => window.innerWidth <= 768;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      // Guard condition to check running target parameters
      if(node.classList.contains('active-node') && node.getAttribute('data-title') !== 'SYS_BOOT') return;

      nodes.forEach(n => n.classList.remove('active-node'));
      node.classList.add('active-node');

      // Load custom properties from node data parameters
      currentActiveData = {
        url: node.getAttribute('data-url'),
        video: node.getAttribute('data-video'),
        title: node.getAttribute('data-title'),
        engine: node.getAttribute('data-engine'),
        role: node.getAttribute('data-role'),
        timeline: node.getAttribute('data-timeline'),
        desc: node.getAttribute('data-desc')
      };

      logStream.innerHTML += `[EXEC] Querying workspace node [${currentActiveData.title}]...<br>`;
      logStream.scrollTop = logStream.scrollHeight;

      if (currentActiveData.url === "about:blank") {
        // Reset console workspace
        desktopViewscreen.src = "about:blank";
        mobileVideo.pause();
        videoSource.src = "";
        mobileVideo.load();
        
        runtimeStatus.innerText = "STATE: IDLE // AWAITING DRIVE RUN";
        runtimeStatus.style.color = "var(--neon-cyan)";
        displayMode.innerText = "HOST_DRIVE: READY";
        wasmBufferStat.innerText = "0.00 MB";
        inspectBtn.style.display = "none";
      } else {
        runtimeStatus.innerText = "COMPILING WASM CORE PACKETS...";
        runtimeStatus.style.color = "var(--neon-pink)";
        
        desktopViewscreen.src = "about:blank";
        mobileVideo.pause();
        videoSource.src = "";

        setTimeout(() => {
          if (isMobileViewport()) {
            displayMode.innerText = "HOST_DRIVE: MOBILE_VIDEO";
            runtimeStatus.innerText = `STREAMING: ${currentActiveData.title}`;
            runtimeStatus.style.color = "var(--neon-green)";
            
            if (currentActiveData.video) {
              videoSource.src = currentActiveData.video;
              mobileVideo.load();
              mobileVideo.play().catch(() => console.log("Autoplay paused via framework override constraints."));
            }
          } else {
            displayMode.innerText = "HOST_DRIVE: DESKTOP_WebGL";
            runtimeStatus.innerText = `RUNNING: ${currentActiveData.title} // OK`;
            runtimeStatus.style.color = "var(--neon-green)";
            desktopViewscreen.src = currentActiveData.url;
          }

          wasmBufferStat.innerText = (Math.random() * (52 - 14) + 14).toFixed(2) + " MB";
          
          // Unhide diagnostic overlay modal activation panel hook button
          inspectBtn.style.display = "block";
          inspectBtn.innerText = `ACCESS_${currentActiveData.title}_DIAGNOSTICS`;

          logStream.innerHTML += `[SUCCESS] ${currentActiveData.title} threads bound successfully.<br>`;
          logStream.scrollTop = logStream.scrollHeight;
        }, 1000);
      }
    });
  });

  // Modal Open Trigger Event
  inspectBtn.addEventListener('click', () => {
    mTitle.innerText = `// MODULE_DATA: ${currentActiveData.title.toUpperCase()}`;
    mEngine.innerText = currentActiveData.engine;
    mRole.innerText = currentActiveData.role;
    mTimeline.innerText = currentActiveData.timeline;
    mSummary.innerText = currentActiveData.desc;

    modal.style.display = 'flex';
    logStream.innerHTML += `[UI] Diagnostic overlay launched for [${currentActiveData.title}].<br>`;
    logStream.scrollTop = logStream.scrollHeight;
  });

  // Modal Close Trigger Event
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});