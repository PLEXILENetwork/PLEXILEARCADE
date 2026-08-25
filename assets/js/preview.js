const code = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  
  <base target="_top">

  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/backgroundeffects.css">

</head>
<body>

<div id="bg-effects"></div> 

    <div class="site">

        <nav>
            <div class="logo">
             <a href="/">
               <img src="/assets/images/logo2.png" alt="Logo">
             </a>
            </div>

            <div class="nav-links">
                <a href="/" class="nav-link active">Games</a>
                <a href="/apps.html" class="nav-link">Apps</a>
                <a href="/settings.html" class="nav-link">Settings</a>
            </div>
        </nav>

        <div class="header-links">

            <a href="https://dsc.gg/plexilenetwork"
               target="_blank"
               rel="noopener noreferrer"
               class="header-link discord">

                <div class="header-icon">
                    <i class="bx bxl-discord-alt"></i>
                </div>

                <div class="header-info">
                    <h2>Join The Discord</h2>
                    <p>discord.gg/8fapCF74Wm</p>
                </div>

            </a>

            <a href="https://ubghub.org/?site=Plexile+Arcade"
               target="_blank"
               rel="noopener noreferrer"
               class="header-link ubghub">

                <div class="header-icon">
                    <i class="bx bx-file"></i>
                </div>

                <div class="header-info">
                    <h2>Vote For Us</h2>
                    <p>Vote for plexilearcade.net</p>
                </div>

            </a>

            <a href="https://www.tiktok.com/@plexilearcade"
               target="_blank"
               rel="noopener noreferrer"
               class="header-link tiktok">

                <div class="header-icon">
                    <i class="bx bxl-tiktok"></i>
                </div>

                <div class="header-info">
                    <h2>Follow Us</h2>
                    <p>tiktok.com/@plexilearcade</p>
                </div>

            </a>

        </div>

        <main class="content">

            <div class="page-header">

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

                <p id="no-game-results" style="display:none;">
                    No games found.
                </p>

                <section class="games-section">
                    <div class="games-grid" id="gamesGrid"></div>
                </section>

            </div>

        </main>

    </div>

<!--Settings-->
<script src="/assets/js/settings/backgroundeffects.js"></script>
<script src="/assets/js/settings/analytics.js"></script>
<script src="/assets/js/settings/ads.js"></script>
<script src="/assets/js/settings/panickey.js"></script>
<script src="/assets/js/settings/savefile.js"></script>

<script src="/assets/js/settings.js"></script>
<script src="/assets/js/highlight.js"></script>
<script src="/assets/js/games.js"></script>
<script src="/assets/js/gamesdrawer.js"></script>
<script src="/assets/js/search.js"></script>

</body>
</html>
`;


document.getElementById("preview").srcdoc = code;
