const code = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  
  <base target="_top">

  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/gamesdrawer.css">
  <link rel="stylesheet" href="/assets/css/backgroundeffects.css">

</head>
<body>

 <div id="bg-effects"></div> 

<div class="bottom-nav-container">
  <div class="bottom-nav">
    <a href="/" class="nav-btn"><i class="bx bx-home-alt"></i></a>
    <button class="nav-btn" id="gamesBtn" type="button">
      <i class="bx bx-joystick"></i>
    </button>
    <div class="nav-spacer"></div>
    <a href="/apps.html" class="nav-btn"><i class="bx bx-grid-alt"></i></a>
    <a href="/faq.html" class="nav-btn"><i class="bx bx-help-circle"></i></a>
  </div>
    <button class="settings-fab" id="settingsBtn" type="button">
      <i class="bx bx-cog"></i>
    </button>
</div>

<div class="settings-overlay" id="settingsOverlay">
    <iframe
        id="settingsFrame"
        src="/settings.html"
        loading="lazy">
    </iframe>
</div>

<div class="drawer-overlay" id="drawerOverlay"></div>
<div class="games-drawer" id="gamesDrawer">
    <div class="drawer-header">

        <h2>Games</h2>
        <div class="drawer-nav">
        <button id="prevPage" type="button">
            <i class="bx bx-chevron-left"></i>
        </button>

        <span id="pageTitle" class="page-pill">
            Recent
        </span>

        <button id="nextPage" type="button">
            <i class="bx bx-chevron-right"></i>
        </button>
        </div>
    </div>

    <div class="drawer-pages" id="drawerPages">
    <div class="drawer-page" id="recentGames"></div>
    <div class="drawer-page" id="popularGames"></div>
    <div class="drawer-page" id="newGames"></div>
    </div>
</div>

<div class="main">
  <div class="page-header">
    <div>
      <h1>Welcome to PLEXILE ARCADE! 👋</h1>
      <p>Play instantly, no downloads, no sign up. Dive into games with action, puzzles, multiplayer and more.</p>
    </div>
  </div>

  <div class="search-bar">
    <i class="bx bx-search icon"></i>
    <input type="text" placeholder="Search for games...">
  </div>

  <div class="filters">
    <div class="filter-btn active">All</div>
    <div class="filter-btn">Action</div>
    <div class="filter-btn">Puzzle</div>
    <div class="filter-btn">Multiplayer</div>
    <div class="filter-btn">Strategy</div>
    <div class="filter-btn">Sports</div>
    <div class="filter-btn">Horror</div>
  </div>

  <p id="no-game-results" style="display:none;">No results found.</p>

<section class="games-section">
    <div class="games-grid" id="gamesGrid"></div>
</section>

</div>

<!--Settings-->
<script src="/assets/js/settings/backgroundeffects.js"></script>
<script src="/assets/js/settings/analytics.js"></script>
<script src="/assets/js/settings/ads.js"></script>
<script src="/assets/js/settings/panickey.js"></script>
<script src="/assets/js/settings/savefile.js"></script>
<script src="/assets/js/settings/autocloak.js"></script>

<script src="/assets/js/settings.js"></script>
<script src="/assets/js/highlight.js"></script>
<script src="/assets/js/games.js"></script>
<script src="/assets/js/gamesdrawer.js"></script>
<script src="/assets/js/search.js"></script>

</body>
</html>
`;


document.getElementById("preview").srcdoc = code;