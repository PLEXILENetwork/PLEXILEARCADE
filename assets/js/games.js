const games = [
    {
        title: "12 Mini Battles",
        category: "Multiplayer",
        image: "/assets/games/12minibattles/game.png",
        background: "/assets/games/12minibattles/game.webm",
        slug: "12minibattles",
        iframe: "/assets/games/12minibattles/game.html",
        popular: true
    },
    {
        title: "1 on 1 Soccer",
        category: "Sports",
        image: "/assets/games/1on1soccer/game.png",
        background: "/assets/games/1on1soccer/game.webm",
        slug: "1on1soccer",
        iframe: "/assets/games/1on1soccer/game.html"
    },
    {
        title: "8 Ball Billiards Classic",
        category: "Strategy",
        image: "/assets/games/8ballbilliardsclassic/game.png",
        background: "/assets/games/8ballbilliardsclassic/game.webm",
        slug: "8ballbilliardsclassic",
        iframe: "/assets/games/8ballbilliardsclassic/game.html",
        new: true
    },
    {
        title: "2048",
        category: "Puzzle",
        image: "/assets/games/2048/game.png",
        background: "/assets/games/2048/game.webm",
        slug: "2048",
        iframe: "/assets/games/2048/game.html"
    },
    {
        title: "60s Burger Run",
        category: "Puzzle",
        image: "/assets/games/60sburgerrun/game.png",
        background: "/assets/games/60sburgerrun/game.webm",
        slug: "60sburgerrun",
        iframe: "/assets/games/60sburgerrun/game.html"
    },
    {
        title: "Achievement Unlocked",
        category: "Puzzle",
        image: "/assets/games/achievementunlocked/game.png",
        background: "/assets/games/achievementunlocked/game.webm",
        slug: "achievementunlocked",
        iframe: "/assets/games/achievementunlocked/game.html"
    },
    {
        title: "A Dance Of Fire & Ice",
        category: "Strategy",
        image: "/assets/games/adanceoffireandice/game.png",
        background: "/assets/games/adanceoffireandice/game.webm",
        slug: "adanceoffireandice",
        iframe: "/assets/games/adanceoffireandice/game.html"
    },
    {
        title: "Age Of War",
        category: "Strategy",
        image: "/assets/games/ageofwar/game.png",
        background: "/assets/games/ageofwar/game.webm",
        slug: "ageofwar",
        iframe: "/assets/games/ageofwar/game.html"
    },
    {
        title: "Alien Hominid",
        category: "Action",
        image: "/assets/games/alienhominid/game.png",
        background: "/assets/games/alienhominid/game.webm",
        slug: "alienhominid",
        iframe: "/assets/games/alienhominid/game.html"
    },
    {
        title: "Among Us",
        category: "Multiplayer",
        image: "/assets/games/amongus/game.png",
        background: "/assets/games/amongus/game.webm",
        slug: "amongus",
        iframe: "/assets/games/amongus/game.html",
        popular: true
    },
    {
        title: "Awesome Tanks 2",
        category: "Action",
        image: "/assets/games/awesometanks2/game.png",
        background: "/assets/games/awesometanks2/game.webm",
        slug: "awesometanks2",
        iframe: "/assets/games/awesometanks2/game.html"
    },
    {
        title: "Backrooms",
        category: "Horror",
        image: "/assets/games/backrooms/game.png",
        background: "/assets/games/backrooms/game.webm",
        slug: "backrooms",
        iframe: "/assets/games/backrooms/game.html"
    },
    {
        title: "Bacon May Die",
        category: "Action",
        image: "/assets/games/baconmaydie/game.png",
        background: "/assets/games/baconmaydie/game.webm",
        slug: "baconmaydie",
        iframe: "/assets/games/baconmaydie/game.html"
    },
    {
        title: "Baldi's Basics",
        category: "Horror",
        image: "/assets/games/baldisbasics/game.png",
        background: "/assets/games/baldisbasics/game.webm",
        slug: "baldisbasics",
        iframe: "/assets/games/baldisbasics/game.html",
        popular: true
    },
    {
        title: "Basketball Stars",
        category: "Sports",
        image: "/assets/games/basketballstars/game.png",
        background: "/assets/games/basketballstars/game.webm",
        slug: "basketballstars",
        iframe: "/assets/games/basketballstars/game.html"
    },
    {
        title: "Big Tower Tiny Square",
        category: "Action",
        image: "/assets/games/bigtowertinysquare/game.png",
        background: "/assets/games/bigtowertinysquare/game.webm",
        slug: "bigtowertinysquare",
        iframe: "/assets/games/bigtowertinysquare/game.html"
    },
    {
        title: "Bitlife",
        category: "Strategy",
        image: "/assets/games/bitlife/game.png",
        background: "/assets/games/bitlife/game.webm",
        slug: "bitlife",
        iframe: "/assets/games/bitlife/game.html"
    },
    {
        title: "Bloons TD 2",
        category: "Strategy",
        image: "/assets/games/bloonstd2/game.png",
        background: "/assets/games/bloonstd2/game.webm",
        slug: "bloonstd2",
        iframe: "/assets/games/bloonstd2/game.html"
    },
    {
        title: "Bloons TD 3",
        category: "Strategy",
        image: "/assets/games/bloonstd3/game.png",
        background: "/assets/games/bloonstd3/game.webm",
        slug: "bloonstd3",
        iframe: "/assets/games/bloonstd3/game.html"
    },
    {
        title: "Bloxorz",
        category: "Puzzle",
        image: "/assets/games/bloxorz/game.png",
        background: "/assets/games/bloxorz/game.webm",
        slug: "bloxorz",
        iframe: "/assets/games/bloxorz/game.html",
        new: true
    },
    {
        title: "Bob The Robber",
        category: "Strategy",
        image: "/assets/games/bobtherobber/game.png",
        background: "/assets/games/bobtherobber/game.webm",
        slug: "bobtherobber",
        iframe: "/assets/games/bobtherobber/game.html"
    },
    {
        title: "Bob The Robber 2",
        category: "Strategy",
        image: "/assets/games/bobtherobber2/game.png",
        background: "/assets/games/bobtherobber2/game.webm",
        slug: "bobtherobber2",
        iframe: "/assets/games/bobtherobber2/game.html"
    },
    {
        title: "Boxing Physics 2",
        category: "Multiplayer",
        image: "/assets/games/boxingphysics2/game.png",
        background: "/assets/games/boxingphysics2/game.webm",
        slug: "boxingphysics2",
        iframe: "/assets/games/boxingphysics2/game.html"
    },
    {
        title: "Boxing Random",
        category: "Sports",
        image: "/assets/games/boxingrandom/game.png",
        background: "/assets/games/boxingrandom/game.webm",
        slug: "boxingrandom",
        iframe: "/assets/games/boxingrandom/game.html"
    },
    {
        title: "Burger & frights",
        category: "Horror",
        image: "/assets/games/burger&frights/game.png",
        background: "/assets/games/burger&frights/game.webm",
        slug: "burger&frights",
        iframe: "/assets/games/burger&frights/game.html"
    },
    {
        title: "Burrito Bison",
        category: "Action",
        image: "/assets/games/burritobison/game.png",
        background: "/assets/games/burritobison/game.webm",
        slug: "burritobison",
        iframe: "/assets/games/burritobison/game.html"
    },
    {
        title: "Cannon Basketball 4",
        category: "Sports",
        image: "/assets/games/cannonbasketball4/game.png",
        background: "/assets/games/cannonbasketball4/game.webm",
        slug: "cannonbasketball4",
        iframe: "/assets/games/cannonbasketball4/game.html"
    },
    {
        title: "Cookie Clicker",
        category: "Strategy",
        image: "/assets/games/cookieclicker/game.png",
        background: "/assets/games/cookieclicker/game.webm",
        slug: "cookieclicker",
        iframe: "/assets/games/cookieclicker/game.html"
    },
    {
        title: "Coreball",
        category: "Puzzle",
        image: "/assets/games/coreball/game.png",
        background: "/assets/games/coreball/game.webm",
        slug: "coreball",
        iframe: "/assets/games/coreball/game.html"
    },
    {
        title: "Cut The Rope",
        category: "Puzzle",
        image: "/assets/games/cuttherope/game.png",
        background: "/assets/games/cuttherope/game.webm",
        slug: "cuttherope",
        iframe: "/assets/games/cuttherope/game.html"
    },
    {
        title: "Death Run 3D",
        category: "Strategy",
        image: "/assets/games/deathrun3d/game.png",
        background: "/assets/games/deathrun3d/game.webm",
        slug: "deathrun3d",
        iframe: "/assets/games/deathrun3d/game.html"
    },
    {
        title: "Deepest Sword",
        category: "Puzzle",
        image: "/assets/games/deepestsword/game.png",
        background: "/assets/games/deepestsword/game.webm",
        slug: "deepestsword",
        iframe: "/assets/games/deepestsword/game.html",
        new: true
    },
    {
        title: "Diggy",
        category: "Puzzle",
        image: "/assets/games/diggy/game.png",
        background: "/assets/games/diggy/game.webm",
        slug: "diggy",
        iframe: "/assets/games/diggy/game.html"
    },
    {
        title: "Doom",
        category: "Action",
        image: "/assets/games/doom/game.png",
        background: "/assets/games/doom/game.webm",
        slug: "doom",
        iframe: "/assets/games/doom/game.html"
    },
    {
        title: "Douchebag Workout 2",
        category: "Strategy",
        image: "/assets/games/douchebagworkout2/game.png",
        background: "/assets/games/douchebagworkout2/game.webm",
        slug: "douchebagworkout2",
        iframe: "/assets/games/douchebagworkout2/game.html"
    },
    {
        title: "Drift Boss",
        category: "Strategy",
        image: "/assets/games/driftboss/game.png",
        background: "/assets/games/driftboss/game.webm",
        slug: "driftboss",
        iframe: "/assets/games/driftboss/game.html",
        new: true
    },
    {
        title: "Duck Life 4",
        category: "Action",
        image: "/assets/games/ducklife4/game.png",
        background: "/assets/games/ducklife4/game.webm",
        slug: "ducklife4",
        iframe: "/assets/games/ducklife4/game.html"
    },
    {
        title: "Eaglercraft 1.8",
        category: "Multiplayer",
        image: "/assets/games/eaglercraft1.8/game.png",
        background: "/assets/games/eaglercraft1.8/game.webm",
        slug: "eaglercraft1.8",
        iframe: "/assets/games/eaglercraft1.8/game.html"
    },
    {
        title: "Elastic Man",
        category: "Action",
        image: "/assets/games/elasticman/game.png",
        background: "/assets/games/elasticman/game.webm",
        slug: "elasticman",
        iframe: "/assets/games/elasticman/game.html"
    },
    {
        title: "Evil Glitch",
        category: "Action",
        image: "/assets/games/evilglitch/game.png",
        background: "/assets/games/evilglitch/game.webm",
        slug: "evilglitch",
        iframe: "/assets/games/evilglitch/game.html",
        popular: true
    },
    {
        title: "Extreme Pamplona",
        category: "Action",
        image: "/assets/games/extremepamplona/game.png",
        background: "/assets/games/extremepamplona/game.webm",
        slug: "extremepamplona",
        iframe: "/assets/games/extremepamplona/game.html"
    },
    {
        title: "Fancy Pants Adventure 2",
        category: "Action",
        image: "/assets/games/fancypantsadventure2/game.png",
        background: "/assets/games/fancypantsadventure2/game.webm",
        slug: "fancypantsadventure2",
        iframe: "/assets/games/fancypantsadventure2/game.html"
    },
    {
        title: "Fireboy & Watergirl",
        category: "Multiplayer",
        image: "/assets/games/fireboyandwatergirl/game.png",
        background: "/assets/games/fireboyandwatergirl/game.webm",
        slug: "fireboyandwatergirl",
        iframe: "/assets/games/fireboyandwatergirl/game.html"
    },
    {
        title: "FNAE",
        category: "Horror",
        image: "/assets/games/fnae/game.png",
        background: "/assets/games/fnae/game.webm",
        slug: "fnae",
        iframe: "/assets/games/fnae/game.html"
    },
    {
        title: "FNAF 1",
        category: "Horror",
        image: "/assets/games/fnaf1/game.png",
        background: "/assets/games/fnaf1/game.webm",
        slug: "fnaf1",
        iframe: "/assets/games/fnaf1/game.html"
    },
    {
        title: "FNAW",
        category: "Horror",
        image: "/assets/games/fnaw/game.png",
        background: "/assets/games/fnaw/game.webm",
        slug: "fnaw",
        iframe: "/assets/games/fnaw/game.html"
    },
    {
        title: "Football Legends",
        category: "Sports",
        image: "/assets/games/footballlegends/game.png",
        background: "/assets/games/footballlegends/game.webm",
        slug: "footballlegends",
        iframe: "/assets/games/footballlegends/game.html"
    },
    {
        title: "Frying Nemo",
        category: "Strategy",
        image: "/assets/games/fryingnemo/game.png",
        background: "/assets/games/fryingnemo/game.webm",
        slug: "fryingnemo",
        iframe: "/assets/games/fryingnemo/game.html"
    },
    {
        title: "Funny Shooter 2",
        category: "Action",
        image: "/assets/games/funnyshooter2/game.png",
        background: "/assets/games/funnyshooter2/game.webm",
        slug: "funnyshooter2",
        iframe: "/assets/games/funnyshooter2/game.html"
    },
    {
        title: "Geometry Dash",
        category: "Strategy",
        image: "/assets/games/geometrydash/game.png",
        background: "/assets/games/geometrydash/game.webm",
        slug: "geometrydash",
        iframe: "/assets/games/geometrydash/game.html"
    },
    {
        title: "Getaway Shootout",
        category: "Action",
        image: "/assets/games/getawayshootout/game.png",
        background: "/assets/games/getawayshootout/game.webm",
        slug: "getawayshootout",
        iframe: "/assets/games/getawayshootout/game.html",
        popular: true
    },
    {
        title: "Google Feud",
        category: "Puzzle",
        image: "/assets/games/googlefeud/game.png",
        background: "/assets/games/googlefeud/game.webm",
        slug: "googlefeud",
        iframe: "/assets/games/googlefeud/game.html"
    },
    {
        title: "Gravity Soccer",
        category: "Sports",
        image: "/assets/games/gravitysoccer/game.png",
        background: "/assets/games/gravitysoccer/game.webm",
        slug: "gravitysoccer",
        iframe: "/assets/games/gravitysoccer/game.html"
    },
    {
        title: "Gun Mayhem 2",
        category: "Action",
        image: "/assets/games/gunmayhem2/game.png",
        background: "/assets/games/gunmayhem2/game.webm",
        slug: "gunmayhem2",
        iframe: "/assets/games/gunmayhem2/game.html"
    },
    {
        title: "Hanger 2",
        category: "Strategy",
        image: "/assets/games/hanger2/game.png",
        background: "/assets/games/hanger2/game.webm",
        slug: "hanger2",
        iframe: "/assets/games/hanger2/game.html",
        new: true
    },
    {
        title: "Hobo",
        category: "Action",
        image: "/assets/games/hobo/game.png",
        background: "/assets/games/hobo/game.webm",
        slug: "hobo",
        iframe: "/assets/games/hobo/game.html"
    },
    {
        title: "Hobo 2",
        category: "Action",
        image: "/assets/games/hobo2/game.png",
        background: "/assets/games/hobo2/game.webm",
        slug: "hobo2",
        iframe: "/assets/games/hobo2/game.html"
    },
    {
        title: "Hobo 3",
        category: "Action",
        image: "/assets/games/hobo3/game.png",
        background: "/assets/games/hobo3/game.webm",
        slug: "hobo3",
        iframe: "/assets/games/hobo3/game.html"
    },
    {
        title: "Hobo 4",
        category: "Action",
        image: "/assets/games/hobo4/game.png",
        background: "/assets/games/hobo4/game.webm",
        slug: "hobo4",
        iframe: "/assets/games/hobo4/game.html"
    },
    {
        title: "Hobo 5",
        category: "Action",
        image: "/assets/games/hobo5/game.png",
        background: "/assets/games/hobo5/game.webm",
        slug: "hobo5",
        iframe: "/assets/games/hobo5/game.html"
    },
    {
        title: "Hobo 6",
        category: "Action",
        image: "/assets/games/hobo6/game.png",
        background: "/assets/games/hobo6/game.webm",
        slug: "hobo6",
        iframe: "/assets/games/hobo6/game.html"
    },
    {
        title: "Hobo 7",
        category: "Action",
        image: "/assets/games/hobo7/game.png",
        background: "/assets/games/hobo7/game.webm",
        slug: "hobo7",
        iframe: "/assets/games/hobo7/game.html"
    },
    {
        title: "Hole.io",
        category: "Multiplayer",
        image: "/assets/games/hole.io/game.png",
        background: "/assets/games/hole.io/game.webm",
        slug: "hole.io",
        iframe: "/assets/games/hole.io/game.html"
    },
    {
        title: "Idle Breakout",
        category: "Strategy",
        image: "/assets/games/idlebreakout/game.png",
        background: "/assets/games/idlebreakout/game.webm",
        slug: "idlebreakout",
        iframe: "/assets/games/idlebreakout/game.html",
        new: true
    },
    {
        title: "Infiltrating The Airship",
        category: "Strategy",
        image: "/assets/games/infiltratingtheairship/game.png",
        background: "/assets/games/infiltratingtheairship/game.webm",
        slug: "infiltratingtheairship",
        iframe: "/assets/games/infiltratingtheairship/game.html"
    },
    {
        title: "Infinite Craft",
        category: "Puzzle",
        image: "/assets/games/infinitecraft/game.png",
        background: "/assets/games/infinitecraft/game.webm",
        slug: "infinitecraft",
        iframe: "/assets/games/infinitecraft/game.html",
        popular: true
    },
    {
        title: "Jacksmith",
        category: "Action",
        image: "/assets/games/jacksmith/game.png",
        background: "/assets/games/jacksmith/game.webm",
        slug: "jacksmith",
        iframe: "/assets/games/jacksmith/game.html"
    },
    {
        title: "Jelly Truck",
        category: "Puzzle",
        image: "/assets/games/jellytruck/game.png",
        background: "/assets/games/jellytruck/game.webm",
        slug: "jellytruck",
        iframe: "/assets/games/jellytruck/game.html"
    },
    {
        title: "Just One Boss",
        category: "Action",
        image: "/assets/games/justoneboss/game.png",
        background: "/assets/games/justoneboss/game.webm",
        slug: "justoneboss",
        iframe: "/assets/games/justoneboss/game.html"
    },
    {
        title: "Learn To Fly 3",
        category: "Action",
        image: "/assets/games/learntofly3/game.png",
        background: "/assets/games/learntofly3/game.webm",
        slug: "learntofly3",
        iframe: "/assets/games/learntofly3/game.html",
        new: true
    },
    {
        title: "Monkey Mart",
        category: "Strategy",
        image: "/assets/games/monkeymart/game.png",
        background: "/assets/games/monkeymart/game.webm",
        slug: "monkeymart",
        iframe: "/assets/games/monkeymart/game.html"
    },
    {
        title: "Moto X3M",
        category: "Action",
        image: "/assets/games/motox3m/game.png",
        background: "/assets/games/motox3m/game.webm",
        slug: "motox3m",
        iframe: "/assets/games/motox3m/game.html"
    },
    {
        title: "Murder",
        category: "Puzzle",
        image: "/assets/games/murder/game.png",
        background: "/assets/games/murder/game.webm",
        slug: "murder",
        iframe: "/assets/games/murder/game.html"
    },
    {
        title: "My Rusty Submarine",
        category: "Strategy",
        image: "/assets/games/myrustysubmarine/game.png",
        background: "/assets/games/myrustysubmarine/game.webm",
        slug: "myrustysubmarine",
        iframe: "/assets/games/myrustysubmarine/game.html"
    },
    {
        title: "Ninja Vs Evil Corp",
        category: "Action",
        image: "/assets/games/ninjavsevilcorp/game.png",
        background: "/assets/games/ninjavsevilcorp/game.webm",
        slug: "ninjavsevilcorp",
        iframe: "/assets/games/ninjavsevilcorp/game.html"
    },
    {
        title: "Noob Steve Parkour",
        category: "Strategy",
        image: "/assets/games/noobsteveparkour/game.png",
        background: "/assets/games/noobsteveparkour/game.webm",
        slug: "noobsteveparkour",
        iframe: "/assets/games/noobsteveparkour/game.html"
    },
    {
        title: "Papa Louie 2",
        category: "Action",
        image: "/assets/games/papalouie2/game.png",
        background: "/assets/games/papalouie2/game.webm",
        slug: "papalouie2",
        iframe: "/assets/games/papalouie2/game.html"
    },
    {
        title: "Papa's Pizzeria",
        category: "Strategy",
        image: "/assets/games/papaspizzeria/game.png",
        background: "/assets/games/papaspizzeria/game.webm",
        slug: "papaspizzeria",
        iframe: "/assets/games/papaspizzeria/game.html"
    },
    {
        title: "Paper.io 2",
        category: "Strategy",
        image: "/assets/games/paper.io2/game.png",
        background: "/assets/games/paper.io2/game.webm",
        slug: "paper.io2",
        iframe: "/assets/games/paper.io2/game.html"
    },
    {
        title: "Plants Vs Zombies",
        category: "Strategy",
        image: "/assets/games/plantsvszombies/game.png",
        background: "/assets/games/plantsvszombies/game.webm",
        slug: "plantsvszombies",
        iframe: "/assets/games/plantsvszombies/game.html"
    },
    {
        title: "Portal (Flash)",
        category: "Puzzle",
        image: "/assets/games/portalflash/game.png",
        background: "/assets/games/portalflash/game.webm",
        slug: "portalflash",
        iframe: "/assets/games/portalflash/game.html"
    },
    {
        title: "Red Ball 4",
        category: "Action",
        image: "/assets/games/redball4/game.png",
        background: "/assets/games/redball4/game.webm",
        slug: "redball4",
        iframe: "/assets/games/redball4/game.html",
        popular: true
    },
    {
        title: "Retro Bowl",
        category: "Sports",
        image: "/assets/games/retrobowl/game.png",
        background: "/assets/games/retrobowl/game.webm",
        slug: "retrobowl",
        iframe: "/assets/games/retrobowl/game.html"
    },
    {
        title: "Riddle School",
        category: "Puzzle",
        image: "/assets/games/riddleschool/game.png",
        background: "/assets/games/riddleschool/game.webm",
        slug: "riddleschool",
        iframe: "/assets/games/riddleschool/game.html"
    },
    {
        title: "Riddle School 2",
        category: "Puzzle",
        image: "/assets/games/riddleschool2/game.png",
        background: "/assets/games/riddleschool2/game.webm",
        slug: "riddleschool2",
        iframe: "/assets/games/riddleschool2/game.html"
    },
    {
        title: "Riddle School 3",
        category: "Puzzle",
        image: "/assets/games/riddleschool3/game.png",
        background: "/assets/games/riddleschool3/game.webm",
        slug: "riddleschool3",
        iframe: "/assets/games/riddleschool3/game.html"
    },
    {
        title: "Roblox",
        category: "Multiplayer",
        image: "/assets/games/roblox/game.png",
        background: "/assets/games/roblox/game.webm",
        slug: "roblox",
        iframe: "/assets/games/roblox/game.html"
    },
    {
        title: "Rocketgoal.io",
        category: "Multiplayer",
        image: "/assets/games/rocketgoal.io/game.png",
        background: "/assets/games/rocketgoal.io/game.webm",
        slug: "rocketgoal.io",
        iframe: "/assets/games/rocketgoal.io/game.html"
    },
    {
        title: "Rocket League 2D",
        category: "Multiplayer",
        image: "/assets/games/rocketleague2d/game.png",
        background: "/assets/games/rocketleague2d/game.webm",
        slug: "rocketleague2d",
        iframe: "/assets/games/rocketleague2d/game.html"
    },
    {
        title: "Rooftop Snipers",
        category: "Multiplayer",
        image: "/assets/games/rooftopsnipers/game.png",
        background: "/assets/games/rooftopsnipers/game.webm",
        slug: "rooftopsnipers",
        iframe: "/assets/games/rooftopsnipers/game.html"
    },
    {
        title: "Shopping Cart Hero 3",
        category: "Puzzle",
        image: "/assets/games/shoppingcarthero3/game.png",
        background: "/assets/games/shoppingcarthero3/game.webm",
        slug: "shoppingcarthero3",
        iframe: "/assets/games/shoppingcarthero3/game.html"
    },
    {
        title: "Slope",
        category: "Strategy",
        image: "/assets/games/slope/game.png",
        background: "/assets/games/slope/game.webm",
        slug: "slope",
        iframe: "/assets/games/slope/game.html"
    },
    {
        title: "Snowball.io",
        category: "Multiplayer",
        image: "/assets/games/snowball.io/game.png",
        background: "/assets/games/snowball.io/game.webm",
        slug: "snowball.io",
        iframe: "/assets/games/snowball.io/game.html"
    },
    {
        title: "Snow Rider 3D",
        category: "Strategy",
        image: "/assets/games/snowrider3d/game.png",
        background: "/assets/games/snowrider3d/game.webm",
        slug: "snowrider3d",
        iframe: "/assets/games/snowrider3d/game.html"
    },
    {
        title: "Soccer Random",
        category: "Sports",
        image: "/assets/games/soccerrandom/game.png",
        background: "/assets/games/soccerrandom/game.webm",
        slug: "soccerrandom",
        iframe: "/assets/games/soccerrandom/game.html"
    },
    {
        title: "Sonic 2",
        category: "Action",
        image: "/assets/games/sonic2/game.png",
        background: "/assets/games/sonic2/game.webm",
        slug: "sonic2",
        iframe: "/assets/games/sonic2/game.html"
    },
    {
        title: "Sports Heads Football",
        category: "Sports",
        image: "/assets/games/sportsheadsfootball/game.png",
        background: "/assets/games/sportsheadsfootball/game.webm",
        slug: "sportsheadsfootball",
        iframe: "/assets/games/sportsheadsfootball/game.html"
    },
    {
        title: "Stick Archers Battle",
        category: "Multiplayer",
        image: "/assets/games/stickarchersbattle/game.png",
        background: "/assets/games/stickarchersbattle/game.webm",
        slug: "stickarchersbattle",
        iframe: "/assets/games/stickarchersbattle/game.html"
    },
    {
        title: "Stick Duel: Medieval Wars",
        category: "Multiplayer",
        image: "/assets/games/stickduelmedievalwars/game.png",
        background: "/assets/games/stickduelmedievalwars/game.webm",
        slug: "stickduelmedievalwars",
        iframe: "/assets/games/stickduelmedievalwars/game.html"
    },
    {
        title: "Subway Surfers",
        category: "Strategy",
        image: "/assets/games/subwaysurfers/game.png",
        background: "/assets/games/subwaysurfers/game.webm",
        slug: "subwaysurfers",
        iframe: "/assets/games/subwaysurfers/game.html"
    },
    {
        title: "Super Liquid Soccer",
        category: "Sports",
        image: "/assets/games/superliquidsoccer/game.png",
        background: "/assets/games/superliquidsoccer/game.webm",
        slug: "superliquidsoccer",
        iframe: "/assets/games/superliquidsoccer/game.html"
    },
    {
        title: "Tanuki Sunset",
        category: "Action",
        image: "/assets/games/tanukisunset/game.png",
        background: "/assets/games/tanukisunset/game.webm",
        slug: "tanukisunset",
        iframe: "/assets/games/tanukisunset/game.html"
    },
    {
        title: "The Impossible Quiz",
        category: "Puzzle",
        image: "/assets/games/theimpossiblequiz/game.png",
        background: "/assets/games/theimpossiblequiz/game.webm",
        slug: "theimpossiblequiz",
        iframe: "/assets/games/theimpossiblequiz/game.html"
    },
    {
        title: "The Worlds Hardest Game",
        category: "Puzzle",
        image: "/assets/games/theworldshardestgame/game.png",
        background: "/assets/games/theworldshardestgame/game.webm",
        slug: "theworldshardestgame",
        iframe: "/assets/games/theworldshardestgame/game.html"
    },
    {
        title: "Time Shooter 3",
        category: "Action",
        image: "/assets/games/timeshooter3/game.png",
        background: "/assets/games/timeshooter3/game.webm",
        slug: "timeshooter3",
        iframe: "/assets/games/timeshooter3/game.html",
        popular: true
    },
    {
        title: "Tiny Fishing",
        category: "Strategy",
        image: "/assets/games/tinyfishing/game.png",
        background: "/assets/games/tinyfishing/game.webm",
        slug: "tinyfishing",
        iframe: "/assets/games/tinyfishing/game.html"
    },
    {
        title: "Tomb Of The Mask",
        category: "Puzzle",
        image: "/assets/games/tombofthemask/game.png",
        background: "/assets/games/tombofthemask/game.webm",
        slug: "tombofthemask",
        iframe: "/assets/games/tombofthemask/game.html"
    },
    {
        title: "Toss The Turtle",
        category: "Strategy",
        image: "/assets/games/tosstheturtle/game.png",
        background: "/assets/games/tosstheturtle/game.webm",
        slug: "tosstheturtle",
        iframe: "/assets/games/tosstheturtle/game.html"
    },
    {
        title: "Tube Jumpers",
        category: "Multiplayer",
        image: "/assets/games/tubejumpers/game.png",
        background: "/assets/games/tubejumpers/game.webm",
        slug: "tubejumpers",
        iframe: "/assets/games/tubejumpers/game.html"
    },
    {
        title: "Unfair Mario",
        category: "Puzzle",
        image: "/assets/games/unfairmario/game.png",
        background: "/assets/games/unfairmario/game.webm",
        slug: "unfairmario",
        iframe: "/assets/games/unfairmario/game.html"
    },
    {
        title: "Volley Random",
        category: "Sports",
        image: "/assets/games/volleyrandom/game.png",
        background: "/assets/games/volleyrandom/game.webm",
        slug: "volleyrandom",
        iframe: "/assets/games/volleyrandom/game.html"
    },
    {
        title: "xx142-b2.exe",
        category: "Puzzle",
        image: "/assets/games/xx142-b2.exe/game.png",
        background: "/assets/games/xx142-b2.exe/game.webm",
        slug: "xx142-b2.exe",
        iframe: "/assets/games/xx142-b2.exe/game.html",
        new: true
    }
];

const gamesGrid = document.getElementById("gamesGrid");

if (gamesGrid) {
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
            let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

            recent = recent.filter(slug => slug !== game.slug);

            recent.unshift(game.slug);

            if (recent.length > 10) {
                recent.pop();
            }

            localStorage.setItem("recentGames", JSON.stringify(recent));

            window.location.href = `/game.html#${game.slug}`;
        });

        gamesGrid.appendChild(card);
    });
}


const recentContainer = document.getElementById("recentApps");
const noRecent = document.getElementById("noRecentApps");

if (recentContainer) {

    const recent = JSON.parse(localStorage.getItem("recentGames")) || [];

    const recentList = recent
        .map(slug => games.find(game => game.slug === slug))
        .filter(Boolean);

    if (recentList.length === 0) {

        if (noRecent) {
            noRecent.style.display = "block";
        }

    } else {

        if (noRecent) {
            noRecent.style.display = "none";
        }

        recentList.forEach(game => {

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
                let recent = JSON.parse(localStorage.getItem("recentGames")) || [];

                recent = recent.filter(slug => slug !== game.slug);

                recent.unshift(game.slug);

                if (recent.length > 10) {
                    recent.pop();
                }

                localStorage.setItem("recentGames", JSON.stringify(recent));

                window.location.href = `/game.html#${game.slug}`;
            });

            appsRecentContainer.appendChild(card);

        });
    }
}