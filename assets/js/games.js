const games = [
    {
        title: "12 Mini Battles",
        category: "Multiplayer",
        image: "/assets/games/12minibattles/game.png",
        background: "/assets/games/12minibattles/game.gif",
        slug: "12minibattles",
        iframe: "/assets/games/12minibattles/game.html"
    },
    {
        title: "1 on 1 Soccer",
        category: "Sports",
        image: "/assets/games/1on1soccer/game.png",
        background: "/assets/games/1on1soccer/game.gif",
        slug: "1on1soccer",
        iframe: "/assets/games/1on1soccer/game.html"
    },
    {
        title: "2048",
        category: "Puzzle",
        image: "/assets/games/2048/game.png",
        background: "/assets/games/2048/game.gif",
        slug: "2048",
        iframe: "/assets/games/2048/game.html"
    },
    {
        title: "60s Burger Run",
        category: "Puzzle",
        image: "/assets/games/60sburgerrun/game.png",
        background: "/assets/games/60sburgerrun/game.gif",
        slug: "60sburgerrun",
        iframe: "/assets/games/60sburgerrun/game.html"
    },
    {
        title: "Achievement Unlocked",
        category: "Puzzle",
        image: "/assets/games/achievementunlocked/game.png",
        background: "/assets/games/achievementunlocked/game.gif",
        slug: "achievementunlocked",
        iframe: "/assets/games/achievementunlocked/game.html"
    },
    {
        title: "A Dance Of Fire & Ice",
        category: "Strategy",
        image: "/assets/games/adanceoffireandice/game.png",
        background: "/assets/games/adanceoffireandice/game.gif",
        slug: "adanceoffireandice",
        iframe: "/assets/games/adanceoffireandice/game.html"
    },
    {
        title: "Age Of War",
        category: "Strategy",
        image: "/assets/games/ageofwar/game.png",
        background: "/assets/games/ageofwar/game.gif",
        slug: "ageofwar",
        iframe: "/assets/games/ageofwar/game.html"
    },
    {
        title: "Alien Hominid",
        category: "Action",
        image: "/assets/games/alienhominid/game.png",
        background: "/assets/games/alienhominid/game.gif",
        slug: "alienhominid",
        iframe: "/assets/games/alienhominid/game.html"
    },
    {
        title: "Among Us",
        category: "Multiplayer",
        image: "/assets/games/amongus/game.png",
        background: "/assets/games/amongus/game.gif",
        slug: "amongus",
        iframe: "/assets/games/amongus/game.html"
    },
    {
        title: "Awesome Tanks 2",
        category: "Action",
        image: "/assets/games/awesometanks2/game.png",
        background: "/assets/games/awesometanks2/game.gif",
        slug: "awesometanks2",
        iframe: "/assets/games/awesometanks2/game.html"
    },
    {
        title: "Bacon May Die",
        category: "Action",
        image: "/assets/games/baconmaydie/game.png",
        background: "/assets/games/baconmaydie/game.gif",
        slug: "baconmaydie",
        iframe: "/assets/games/baconmaydie/game.html"
    },
    {
        title: "Basketball Stars",
        category: "Sports",
        image: "/assets/games/basketballstars/game.png",
        background: "/assets/games/basketballstars/game.gif",
        slug: "basketballstars",
        iframe: "/assets/games/basketballstars/game.html"
    },
    {
        title: "Big Tower Tiny Square",
        category: "Action",
        image: "/assets/games/bigtowertinysquare/game.png",
        background: "/assets/games/bigtowertinysquare/game.gif",
        slug: "bigtowertinysquare",
        iframe: "/assets/games/bigtowertinysquare/game.html"
    },
    {
        title: "Bitlife",
        category: "Strategy",
        image: "/assets/games/bitlife/game.png",
        background: "/assets/games/bitlife/game.gif",
        slug: "bitlife",
        iframe: "/assets/games/bitlife/game.html"
    },
    {
        title: "Bloons TD 2",
        category: "Strategy",
        image: "/assets/games/bloonstd2/game.png",
        background: "/assets/games/bloonstd2/game.gif",
        slug: "bloonstd2",
        iframe: "/assets/games/bloonstd2/game.html"
    },
    {
        title: "Bloons TD 3",
        category: "Strategy",
        image: "/assets/games/bloonstd3/game.png",
        background: "/assets/games/bloonstd3/game.gif",
        slug: "bloonstd3",
        iframe: "/assets/games/bloonstd3/game.html"
    },
    {
        title: "Bloxorz",
        category: "Puzzle",
        image: "/assets/games/bloxorz/game.png",
        background: "/assets/games/bloxorz/game.gif",
        slug: "bloxorz",
        iframe: "/assets/games/bloxorz/game.html"
    },
    {
        title: "Bob The Robber",
        category: "Strategy",
        image: "/assets/games/bobtherobber/game.png",
        background: "/assets/games/bobtherobber/game.gif",
        slug: "bobtherobber",
        iframe: "/assets/games/bobtherobber/game.html"
    },
    {
        title: "Bob The Robber 2",
        category: "Strategy",
        image: "/assets/games/bobtherobber2/game.png",
        background: "/assets/games/bobtherobber2/game.gif",
        slug: "bobtherobber2",
        iframe: "/assets/games/bobtherobber2/game.html"
    },
    {
        title: "Boxing Random",
        category: "Sports",
        image: "/assets/games/boxingrandom/game.png",
        background: "/assets/games/boxingrandom/game.gif",
        slug: "boxingrandom",
        iframe: "/assets/games/boxingrandom/game.html"
    },
    {
        title: "Burrito Bison",
        category: "Action",
        image: "/assets/games/burritobison/game.png",
        background: "/assets/games/burritobison/game.gif",
        slug: "burritobison",
        iframe: "/assets/games/burritobison/game.html"
    },
    {
        title: "Cannon Basketball 4",
        category: "Sports",
        image: "/assets/games/cannonbasketball4/game.png",
        background: "/assets/games/cannonbasketball4/game.gif",
        slug: "cannonbasketball4",
        iframe: "/assets/games/cannonbasketball4/game.html"
    },
    {
        title: "Cookie Clicker",
        category: "Strategy",
        image: "/assets/games/cookieclicker/game.png",
        background: "/assets/games/cookieclicker/game.gif",
        slug: "cookieclicker",
        iframe: "/assets/games/cookieclicker/game.html"
    },
    {
        title: "Coreball",
        category: "Puzzle",
        image: "/assets/games/coreball/game.png",
        background: "/assets/games/coreball/game.gif",
        slug: "coreball",
        iframe: "/assets/games/coreball/game.html"
    },
    {
        title: "Cut The Rope",
        category: "Puzzle",
        image: "/assets/games/cuttherope/game.png",
        background: "/assets/games/cuttherope/game.gif",
        slug: "cuttherope",
        iframe: "/assets/games/cuttherope/game.html"
    },
    {
        title: "Death Run 3D",
        category: "Strategy",
        image: "/assets/games/deathrun3d/game.png",
        background: "/assets/games/deathrun3d/game.gif",
        slug: "deathrun3d",
        iframe: "/assets/games/deathrun3d/game.html"
    },
    {
        title: "Deepest Sword",
        category: "Puzzle",
        image: "/assets/games/deepestsword/game.png",
        background: "/assets/games/deepestsword/game.gif",
        slug: "deepestsword",
        iframe: "/assets/games/deepestsword/game.html"
    },
    {
        title: "Diggy",
        category: "Puzzle",
        image: "/assets/games/diggy/game.png",
        background: "/assets/games/diggy/game.gif",
        slug: "diggy",
        iframe: "/assets/games/diggy/game.html"
    },
    {
        title: "Doom",
        category: "Action",
        image: "/assets/games/doom/game.png",
        background: "/assets/games/doom/game.gif",
        slug: "doom",
        iframe: "/assets/games/doom/game.html"
    },
    {
        title: "Douchebag Workout 2",
        category: "Strategy",
        image: "/assets/games/douchebagworkout2/game.png",
        background: "/assets/games/douchebagworkout2/game.gif",
        slug: "douchebagworkout2",
        iframe: "/assets/games/douchebagworkout2/game.html"
    },
    {
        title: "Drift Boss",
        category: "Strategy",
        image: "/assets/games/driftboss/game.png",
        background: "/assets/games/driftboss/game.gif",
        slug: "driftboss",
        iframe: "/assets/games/driftboss/game.html"
    },
    {
        title: "Duck Life 4",
        category: "Action",
        image: "/assets/games/ducklife4/game.png",
        background: "/assets/games/ducklife4/game.gif",
        slug: "ducklife4",
        iframe: "/assets/games/ducklife4/game.html"
    },
    {
        title: "Eaglercraft 1.8",
        category: "Multiplayer",
        image: "/assets/games/eaglercraft1.8/game.png",
        background: "/assets/games/eaglercraft1.8/game.gif",
        slug: "eaglercraft1.8",
        iframe: "/assets/games/eaglercraft1.8/game.html"
    },
    {
        title: "Elastic Man",
        category: "Action",
        image: "/assets/games/elasticman/game.png",
        background: "/assets/games/elasticman/game.gif",
        slug: "elasticman",
        iframe: "/assets/games/elasticman/game.html"
    },
    {
        title: "Evil Glitch",
        category: "Action",
        image: "/assets/games/evilglitch/game.png",
        background: "/assets/games/evilglitch/game.gif",
        slug: "evilglitch",
        iframe: "/assets/games/evilglitch/game.html"
    },
    {
        title: "Extreme Pamplona",
        category: "Action",
        image: "/assets/games/extremepamplona/game.png",
        background: "/assets/games/extremepamplona/game.gif",
        slug: "extremepamplona",
        iframe: "/assets/games/extremepamplona/game.html"
    },
    {
        title: "Fancy Pants Adventure 2",
        category: "Action",
        image: "/assets/games/fancypantsadventure2/game.png",
        background: "/assets/games/fancypantsadventure2/game.gif",
        slug: "fancypantsadventure2",
        iframe: "/assets/games/fancypantsadventure2/game.html"
    },
    {
        title: "Fireboy & Watergirl",
        category: "Multiplayer",
        image: "/assets/games/fireboyandwatergirl/game.png",
        background: "/assets/games/fireboyandwatergirl/game.gif",
        slug: "fireboyandwatergirl",
        iframe: "/assets/games/fireboyandwatergirl/game.html"
    },
    {
        title: "FNAE",
        category: "Horror",
        image: "/assets/games/fnae/game.png",
        background: "/assets/games/fnae/game.gif",
        slug: "fnae",
        iframe: "/assets/games/fnae/game.html"
    },
    {
        title: "FNAF 1",
        category: "Horror",
        image: "/assets/games/fnaf1/game.png",
        background: "/assets/games/fnaf1/game.gif",
        slug: "fnaf1",
        iframe: "/assets/games/fnaf1/game.html"
    },
    {
        title: "FNAW",
        category: "Horror",
        image: "/assets/games/fnaw/game.png",
        background: "/assets/games/fnaw/game.gif",
        slug: "fnaw",
        iframe: "/assets/games/fnaw/game.html"
    },
    {
        title: "Football Legends",
        category: "Sports",
        image: "/assets/games/footballlegends/game.png",
        background: "/assets/games/footballlegends/game.gif",
        slug: "footballlegends",
        iframe: "/assets/games/footballlegends/game.html"
    },
    {
        title: "Frying Nemo",
        category: "Strategy",
        image: "/assets/games/fryingnemo/game.png",
        background: "/assets/games/fryingnemo/game.gif",
        slug: "fryingnemo",
        iframe: "/assets/games/fryingnemo/game.html"
    },
    {
        title: "Funny Shooter 2",
        category: "Action",
        image: "/assets/games/funnyshooter2/game.png",
        background: "/assets/games/funnyshooter2/game.gif",
        slug: "funnyshooter2",
        iframe: "/assets/games/funnyshooter2/game.html"
    },
    {
        title: "Getaway Shootout",
        category: "Action",
        image: "/assets/games/getawayshootout/game.png",
        background: "/assets/games/getawayshootout/game.gif",
        slug: "getawayshootout",
        iframe: "/assets/games/getawayshootout/game.html"
    },
    {
        title: "Google Feud",
        category: "Puzzle",
        image: "/assets/games/googlefeud/game.png",
        background: "/assets/games/googlefeud/game.gif",
        slug: "googlefeud",
        iframe: "/assets/games/googlefeud/game.html"
    },
    {
        title: "Gravity Soccer",
        category: "Sports",
        image: "/assets/games/gravitysoccer/game.png",
        background: "/assets/games/gravitysoccer/game.gif",
        slug: "gravitysoccer",
        iframe: "/assets/games/gravitysoccer/game.html"
    },
    {
        title: "Gun Mayhem 2",
        category: "Action",
        image: "/assets/games/gunmayhem2/game.png",
        background: "/assets/games/gunmayhem2/game.gif",
        slug: "gunmayhem2",
        iframe: "/assets/games/gunmayhem2/game.html"
    },
    {
        title: "Hanger 2",
        category: "Strategy",
        image: "/assets/games/hanger2/game.png",
        background: "/assets/games/hanger2/game.gif",
        slug: "hanger2",
        iframe: "/assets/games/hanger2/game.html"
    },
    {
        title: "Hobo",
        category: "Action",
        image: "/assets/games/hobo/game.png",
        background: "/assets/games/hobo/game.gif",
        slug: "hobo",
        iframe: "/assets/games/hobo/game.html"
    },
    {
        title: "Hobo 2",
        category: "Action",
        image: "/assets/games/hobo2/game.png",
        background: "/assets/games/hobo2/game.gif",
        slug: "hobo2",
        iframe: "/assets/games/hobo2/game.html"
    },
    {
        title: "Hobo 3",
        category: "Action",
        image: "/assets/games/hobo3/game.png",
        background: "/assets/games/hobo3/game.gif",
        slug: "hobo3",
        iframe: "/assets/games/hobo3/game.html"
    },
    {
        title: "Hobo 4",
        category: "Action",
        image: "/assets/games/hobo4/game.png",
        background: "/assets/games/hobo4/game.gif",
        slug: "hobo4",
        iframe: "/assets/games/hobo4/game.html"
    },
    {
        title: "Hobo 5",
        category: "Action",
        image: "/assets/games/hobo5/game.png",
        background: "/assets/games/hobo5/game.gif",
        slug: "hobo5",
        iframe: "/assets/games/hobo5/game.html"
    },
    {
        title: "Hobo 6",
        category: "Action",
        image: "/assets/games/hobo6/game.png",
        background: "/assets/games/hobo6/game.gif",
        slug: "hobo6",
        iframe: "/assets/games/hobo6/game.html"
    },
    {
        title: "Hobo 7",
        category: "Action",
        image: "/assets/games/hobo7/game.png",
        background: "/assets/games/hobo7/game.gif",
        slug: "hobo7",
        iframe: "/assets/games/hobo7/game.html"
    },
    {
        title: "Hole.io",
        category: "Multiplayer",
        image: "/assets/games/hole.io/game.png",
        background: "/assets/games/hole.io/game.gif",
        slug: "hole.io",
        iframe: "/assets/games/hole.io/game.html"
    },
    {
        title: "Idle Breakout",
        category: "Strategy",
        image: "/assets/games/idlebreakout/game.png",
        background: "/assets/games/idlebreakout/game.gif",
        slug: "idlebreakout",
        iframe: "/assets/games/idlebreakout/game.html"
    },
    {
        title: "Infiltrating The Airship",
        category: "Strategy",
        image: "/assets/games/infiltratingtheairship/game.png",
        background: "/assets/games/infiltratingtheairship/game.gif",
        slug: "infiltratingtheairship",
        iframe: "/assets/games/infiltratingtheairship/game.html"
    },
    {
        title: "Infinite Craft",
        category: "Puzzle",
        image: "/assets/games/infinitecraft/game.png",
        background: "/assets/games/infinitecraft/game.gif",
        slug: "infinitecraft",
        iframe: "/assets/games/infinitecraft/game.html"
    },
    {
        title: "Jacksmith",
        category: "Action",
        image: "/assets/games/jacksmith/game.png",
        background: "/assets/games/jacksmith/game.gif",
        slug: "jacksmith",
        iframe: "/assets/games/jacksmith/game.html"
    },
    {
        title: "Jelly Truck",
        category: "Puzzle",
        image: "/assets/games/jellytruck/game.png",
        background: "/assets/games/jellytruck/game.gif",
        slug: "jellytruck",
        iframe: "/assets/games/jellytruck/game.html"
    },
    {
        title: "Just One Boss",
        category: "Action",
        image: "/assets/games/justoneboss/game.png",
        background: "/assets/games/justoneboss/game.gif",
        slug: "justoneboss",
        iframe: "/assets/games/justoneboss/game.html"
    },
    {
        title: "Learn To Fly 3",
        category: "Action",
        image: "/assets/games/learntofly3/game.png",
        background: "/assets/games/learntofly3/game.gif",
        slug: "learntofly3",
        iframe: "/assets/games/learntofly3/game.html"
    },
    {
        title: "Moto X3M",
        category: "Action",
        image: "/assets/games/motox3m/game.png",
        background: "/assets/games/motox3m/game.gif",
        slug: "motox3m",
        iframe: "/assets/games/motox3m/game.html"
    },
    {
        title: "Murder",
        category: "Puzzle",
        image: "/assets/games/murder/game.png",
        background: "/assets/games/murder/game.gif",
        slug: "murder",
        iframe: "/assets/games/murder/game.html"
    },
    {
        title: "My Rusty Submarine",
        category: "Strategy",
        image: "/assets/games/myrustysubmarine/game.png",
        background: "/assets/games/myrustysubmarine/game.gif",
        slug: "myrustysubmarine",
        iframe: "/assets/games/myrustysubmarine/game.html"
    },
    {
        title: "Ninja Vs Evil Corp",
        category: "Action",
        image: "/assets/games/ninjavsevilcorp/game.png",
        background: "/assets/games/ninjavsevilcorp/game.gif",
        slug: "ninjavsevilcorp",
        iframe: "/assets/games/ninjavsevilcorp/game.html"
    },
    {
        title: "Noob Steve Parkour",
        category: "Strategy",
        image: "/assets/games/noobsteveparkour/game.png",
        background: "/assets/games/noobsteveparkour/game.gif",
        slug: "noobsteveparkour",
        iframe: "/assets/games/noobsteveparkour/game.html"
    },
    {
        title: "Papa Louie 2",
        category: "Action",
        image: "/assets/games/papalouie2/game.png",
        background: "/assets/games/papalouie2/game.gif",
        slug: "papalouie2",
        iframe: "/assets/games/papalouie2/game.html"
    },
    {
        title: "Papa's Pizzeria",
        category: "Strategy",
        image: "/assets/games/papaspizzeria/game.png",
        background: "/assets/games/papaspizzeria/game.gif",
        slug: "papaspizzeria",
        iframe: "/assets/games/papaspizzeria/game.html"
    },
    {
        title: "Paper.io 2",
        category: "Strategy",
        image: "/assets/games/paper.io2/game.png",
        background: "/assets/games/paper.io2/game.gif",
        slug: "paper.io2",
        iframe: "/assets/games/paper.io2/game.html"
    },
    {
        title: "Plants Vs Zombies",
        category: "Strategy",
        image: "/assets/games/plantsvszombies/game.png",
        background: "/assets/games/plantsvszombies/game.gif",
        slug: "plantsvszombies",
        iframe: "/assets/games/plantsvszombies/game.html"
    },
    {
        title: "Portal (Flash)",
        category: "Puzzle",
        image: "/assets/games/portalflash/game.png",
        background: "/assets/games/portalflash/game.gif",
        slug: "portalflash",
        iframe: "/assets/games/portalflash/game.html"
    },
    {
        title: "Riddle School",
        category: "Puzzle",
        image: "/assets/games/riddleschool/game.png",
        background: "/assets/games/riddleschool/game.gif",
        slug: "riddleschool",
        iframe: "/assets/games/riddleschool/game.html"
    },
    {
        title: "Riddle School 2",
        category: "Puzzle",
        image: "/assets/games/riddleschool2/game.png",
        background: "/assets/games/riddleschool2/game.gif",
        slug: "riddleschool2",
        iframe: "/assets/games/riddleschool2/game.html"
    },
    {
        title: "Riddle School 3",
        category: "Puzzle",
        image: "/assets/games/riddleschool3/game.png",
        background: "/assets/games/riddleschool3/game.gif",
        slug: "riddleschool3",
        iframe: "/assets/games/riddleschool3/game.html"
    },
    {
        title: "Roblox",
        category: "Multiplayer",
        image: "/assets/games/roblox/game.png",
        background: "/assets/games/roblox/game.gif",
        slug: "roblox",
        iframe: "/assets/games/roblox/game.html"
    },
    {
        title: "Rocket League 2D",
        category: "Multiplayer",
        image: "/assets/games/rocketleague2d/game.png",
        background: "/assets/games/rocketleague2d/game.gif",
        slug: "rocketleague2d",
        iframe: "/assets/games/rocketleague2d/game.html"
    },
    {
        title: "Rooftop Snipers",
        category: "Multiplayer",
        image: "/assets/games/rooftopsnipers/game.png",
        background: "/assets/games/rooftopsnipers/game.gif",
        slug: "rooftopsnipers",
        iframe: "/assets/games/rooftopsnipers/game.html"
    },
    {
        title: "Shopping Cart Hero 3",
        category: "Puzzle",
        image: "/assets/games/shoppingcarthero3/game.png",
        background: "/assets/games/shoppingcarthero3/game.gif",
        slug: "shoppingcarthero3",
        iframe: "/assets/games/shoppingcarthero3/game.html"
    },
    {
        title: "Slope",
        category: "Strategy",
        image: "/assets/games/slope/game.png",
        background: "/assets/games/slope/game.gif",
        slug: "slope",
        iframe: "/assets/games/slope/game.html"
    },
    {
        title: "Snowball.io",
        category: "Multiplayer",
        image: "/assets/games/snowball.io/game.png",
        background: "/assets/games/snowball.io/game.gif",
        slug: "snowball.io",
        iframe: "/assets/games/snowball.io/game.html"
    },
    {
        title: "Snow Rider 3D",
        category: "Strategy",
        image: "/assets/games/snowrider3d/game.png",
        background: "/assets/games/snowrider3d/game.gif",
        slug: "snowrider3d",
        iframe: "/assets/games/snowrider3d/game.html"
    },
    {
        title: "Soccer Random",
        category: "Sports",
        image: "/assets/games/soccerrandom/game.png",
        background: "/assets/games/soccerrandom/game.gif",
        slug: "soccerrandom",
        iframe: "/assets/games/soccerrandom/game.html"
    },
    {
        title: "Sports Heads Football",
        category: "Sports",
        image: "/assets/games/sportsheadsfootball/game.png",
        background: "/assets/games/sportsheadsfootball/game.gif",
        slug: "sportsheadsfootball",
        iframe: "/assets/games/sportsheadsfootball/game.html"
    },
    {
        title: "Stick Archers Battle",
        category: "Multiplayer",
        image: "/assets/games/stickarchersbattle/game.png",
        background: "/assets/games/stickarchersbattle/game.gif",
        slug: "stickarchersbattle",
        iframe: "/assets/games/stickarchersbattle/game.html"
    },
    {
        title: "Stick Duel: Medieval Wars",
        category: "Multiplayer",
        image: "/assets/games/stickduelmedievalwars/game.png",
        background: "/assets/games/stickduelmedievalwars/game.gif",
        slug: "stickduelmedievalwars",
        iframe: "/assets/games/stickduelmedievalwars/game.html"
    },
    {
        title: "Super Liquid Soccer",
        category: "Sports",
        image: "/assets/games/superliquidsoccer/game.png",
        background: "/assets/games/superliquidsoccer/game.gif",
        slug: "superliquidsoccer",
        iframe: "/assets/games/superliquidsoccer/game.html"
    },
    {
        title: "Tanuki Sunset",
        category: "Action",
        image: "/assets/games/tanukisunset/game.png",
        background: "/assets/games/tanukisunset/game.gif",
        slug: "tanukisunset",
        iframe: "/assets/games/tanukisunset/game.html"
    },
    {
        title: "The Impossible Quiz",
        category: "Puzzle",
        image: "/assets/games/theimpossiblequiz/game.png",
        background: "/assets/games/theimpossiblequiz/game.gif",
        slug: "theimpossiblequiz",
        iframe: "/assets/games/theimpossiblequiz/game.html"
    },
    {
        title: "The Worlds Hardest Game",
        category: "Puzzle",
        image: "/assets/games/theworldshardestgame/game.png",
        background: "/assets/games/theworldshardestgame/game.gif",
        slug: "theworldshardestgame",
        iframe: "/assets/games/theworldshardestgame/game.html"
    },
    {
        title: "Time Shooter 3",
        category: "Action",
        image: "/assets/games/timeshooter3/game.png",
        background: "/assets/games/timeshooter3/game.gif",
        slug: "timeshooter3",
        iframe: "/assets/games/timeshooter3/game.html"
    },
    {
        title: "Tiny Fishing",
        category: "Strategy",
        image: "/assets/games/tinyfishing/game.png",
        background: "/assets/games/tinyfishing/game.gif",
        slug: "tinyfishing",
        iframe: "/assets/games/tinyfishing/game.html"
    },
    {
        title: "Tomb Of The Mask",
        category: "Puzzle",
        image: "/assets/games/tombofthemask/game.png",
        background: "/assets/games/tombofthemask/game.gif",
        slug: "tombofthemask",
        iframe: "/assets/games/tombofthemask/game.html"
    },
    {
        title: "Toss The Turtle",
        category: "Strategy",
        image: "/assets/games/tosstheturtle/game.png",
        background: "/assets/games/tosstheturtle/game.gif",
        slug: "tosstheturtle",
        iframe: "/assets/games/tosstheturtle/game.html"
    },
    {
        title: "Tube Jumpers",
        category: "Multiplayer",
        image: "/assets/games/tubejumpers/game.png",
        background: "/assets/games/tubejumpers/game.gif",
        slug: "tubejumpers",
        iframe: "/assets/games/tubejumpers/game.html"
    },
    {
        title: "Unfair Mario",
        category: "Puzzle",
        image: "/assets/games/unfairmario/game.png",
        background: "/assets/games/unfairmario/game.gif",
        slug: "unfairmario",
        iframe: "/assets/games/unfairmario/game.html"
    },
    {
        title: "Volley Random",
        category: "Sports",
        image: "/assets/games/volleyrandom/game.png",
        background: "/assets/games/volleyrandom/game.gif",
        slug: "volleyrandom",
        iframe: "/assets/games/volleyrandom/game.html"
    },
    {
        title: "We Become What We Behold",
        category: "Strategy",
        image: "/assets/games/webecomewhatwebehold/game.png",
        background: "/assets/games/webecomewhatwebehold/game.gif",
        slug: "webecomewhatwebehold",
        iframe: "/assets/games/webecomewhatwebehold/game.html"
    }
];

const gamesGrid = document.getElementById("gamesGrid");

games.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <div class="info">
            <h3>${game.title}</h3>
            <p>#${game.category}</p>
        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `/iframe.html#${game.slug}`;
    });

    gamesGrid.appendChild(card);
});
