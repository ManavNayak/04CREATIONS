var nav, logo, home, games, partners, store, blog;
var bg, brand, about, des, foot;

var gameState = "HOME";

function preload() {}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  nav = createSprite(
    window.innerWidth / 2,
    window.innerHeight / 2 - 500,
    window.innerWidth,
    225
  );

  nav.shapeColor = "#000080";

  foot = createSprite(
    window.innerWidth / 2,
    window.innerHeight / 2 + 1000,
    window.innerWidth,
    500
  );

  foot.shapeColor = "#FFA500";

  logo = createImg("logo.jpg");
  logo.position(window.innerWidth / 2 - 775, window.innerHeight / 2 - 485);
  logo.style("border-radius", "37.5px");
  logo.style("width", "75px");
  logo.style("height", "75px");
  logo.style("z-index", "5");

  home = createButton("Home");
  home.position(window.innerWidth / 2 - 575, window.innerHeight / 2 - 470);
  home.style("width", "150px");
  home.style("height", "50px");
  home.style("border-radius", "30px");
  home.style("font-family", "Calibri Bold");
  home.style("border", "10px");
  home.style("font-size", "18px");
  home.style("z-index", "5");

  blog = createButton("Blogs");
  blog.position(window.innerWidth / 2 - 300, window.innerHeight / 2 - 470);
  blog.style("width", "150px");
  blog.style("height", "50px");
  blog.style("border-radius", "30px");
  blog.style("font-family", "Calibri Bold");
  blog.style("border", "10px");
  blog.style("font-size", "18px");
  blog.style("z-index", "5");

  games = createButton("Games");
  games.position(window.innerWidth / 2 - 25, window.innerHeight / 2 - 470);
  games.style("width", "150px");
  games.style("height", "50px");
  games.style("border-radius", "30px");
  games.style("font-family", "Calibri Bold");
  games.style("border", "10px");
  games.style("font-size", "18px");
  games.style("z-index", "5");

  partners = createButton("Partners");
  partners.position(window.innerWidth / 2 + 250, window.innerHeight / 2 - 470);
  partners.style("width", "150px");
  partners.style("height", "50px");
  partners.style("border-radius", "30px");
  partners.style("font-family", "Calibri Bold");
  partners.style("border", "10px");
  partners.style("font-size", "18px");
  partners.style("z-index", "5");

  store = createButton("Store");
  store.position(window.innerWidth / 2 + 525, window.innerHeight / 2 - 470);
  store.style("width", "150px");
  store.style("height", "50px");
  store.style("border-radius", "30px");
  store.style("font-family", "Calibri Bold");
  store.style("border", "10px");
  store.style("font-size", "18px");
  store.style("z-index", "5");

  brand = createDiv("04 CREATIONS");
  brand.position(window.innerWidth / 2 - 700, window.innerHeight / 2 - 50);
  brand.style("font-family", "CalibriBold");
  brand.style("font-size", "200px");
  brand.style("padding", "0px");
  brand.style("color", "#FFFFFF");
  brand.style("z-index", "4");

  bg = createImg("bg.jpg");
  bg.position(window.innerWidth / 2 - 1000, window.innerHeight / 2 - 400);
  bg.style("width", "2000px");
  bg.style("height", "900px");
  bg.style("z-index", "3");

  about = createDiv("About Us");
  about.position(window.innerWidth / 2 - 250, window.innerHeight / 2 + 600);
  about.style("font-family", "CalibriBold");
  about.style("font-size", "100px");
  about.style("color", "#000000");
  about.style("z-index", "4");
  about.style("padding-bottom", "50px");

  des = createP("Fed up of playing the same games again and again? Not able to find any useful apps? Don't get good books to read? Then you are in the right place! Here you get apps and games that are unique, books that are intresting, ultimate developer courses and a lot more! We are the 04 CREATIONS team who strongly believe that gaming is a complete new world and aim to take it to the next level!");
  des.position(window.innerWidth / 2 - 1000, window.innerHeight / 2 + 800);
  des.style("font-family", "Baskerville");
  des.style("font-size", "40px");
  des.style("color", "#000000");
  des.style("z-index", "4");
  des.style("padding-bottom", "50px");
  des.style("padding-left", "400px");
  des.style("padding-right", "400px");

}

function draw() {
  if (gameState === "HOME") {
    if (isPortrait()) {
      swal({
        title: "Dear User",
        text:
          "Kindly use desktop for better experience and refresh the page if needed :)",
        buttons: {
          text: "OK",
          width: 1,
        },
      });

      nav.visible = false;

      logo.hide();
      home.hide();
      games.hide();
      partners.hide();
      store.hide();
      blog.hide();
      bg.hide();
      brand.hide();
    } else if (isLandscape()) {
      nav.visible = true;

      logo.show();
      home.show();
      games.show();
      partners.show();
      store.show();
      blog.show();
      bg.show();
      brand.show();

      home.style("background-color", "#FFD700");
    }
  }

  home.mousePressed(() => {
    gameState = "HOME";

    home.style("background-color", "#FFD700");

    games.style("background-color", "#FFFFFF");
    partners.style("background-color", "#FFFFFF");
    store.style("background-color", "#FFFFFF");
    blog.style("background-color", "#FFFFFF");
  });

  games.mousePressed(() => {
    gameState = "GAMES";
    gamesScreen();

    games.style("background-color", "#FFD700");

    home.style("background-color", "#FFFFFF");
    partners.style("background-color", "#FFFFFF");
    store.style("background-color", "#FFFFFF");
    blog.style("background-color", "#FFFFFF");
  });

  partners.mousePressed(() => {
    gameState = "PARTNERS";
    partnersScreen();

    partners.style("background-color", "#FFD700");

    home.style("background-color", "#FFFFFF");
    games.style("background-color", "#FFFFFF");
    store.style("background-color", "#FFFFFF");
    blog.style("background-color", "#FFFFFF");
  });

  store.mousePressed(() => {
    gameState = "STORE";
    storeScreen();

    store.style("background-color", "#FFD700");

    partners.style("background-color", "#FFFFFF");
    home.style("background-color", "#FFFFFF");
    games.style("background-color", "#FFFFFF");
    partners.style("background-color", "#FFFFFF");
    blog.style("background-color", "#FFFFFF");
  });

  blog.mousePressed(() => {
    gameState = "BLOG";
    blogScreen();

    blog.style("background-color", "#FFD700");

    store.style("background-color", "#FFFFFF");
    partners.style("background-color", "#FFFFFF");
    home.style("background-color", "#FFFFFF");
    games.style("background-color", "#FFFFFF");
    partners.style("background-color", "#FFFFFF");
    store.style("background-color", "#FFFFFF");
  });

  console.log(gameState);
  drawSprites();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function isPortrait() {
  return window.innerHeight > window.innerWidth;
}

function isLandscape() {
  return window.innerHeight < window.innerWidth;
}

function gamesScreen() {
  if (gameState === "GAMES") {
    if (isPortrait()) {
      swal({
        title: "Dear User",
        text:
          "Kindly use desktop for better experience and refresh the page if needed :)",
        buttons: {
          text: "OK",
          width: 1,
        },
      });

      nav.visible = false;

      logo.hide();
      home.hide();
      games.hide();
      partners.hide();
      store.hide();
      blog.hide();
      bg.hide();
      brand.hide();
    } else if (isLandscape()) {
      nav.visible = true;

      logo.show();
      home.show();
      games.show();
      partners.show();
      store.show();
      blog.show();

      bg.hide();
      brand.hide();
    }
  }
}

function partnersScreen() {
  if (gameState === "PARTNERS") {
    if (isPortrait()) {
      swal({
        title: "Dear User",
        text:
          "Kindly use desktop for better experience and refresh the page if needed :)",
        buttons: {
          text: "OK",
          width: 1,
        },
      });

      nav.visible = false;

      logo.hide();
      home.hide();
      games.hide();
      partners.hide();
      store.hide();
      blog.hide();
      bg.hide();
      brand.hide();
    } else if (isLandscape()) {
      nav.visible = true;

      logo.show();
      home.show();
      games.show();
      partners.show();
      store.show();
      blog.show();

      bg.hide();
      brand.hide();
    }
  }
}

function storeScreen() {
  if (gameState === "STORE") {
    if (isPortrait()) {
      swal({
        title: "Dear User",
        text:
          "Kindly use desktop for better experience and refresh the page if needed :)",
        buttons: {
          text: "OK",
          width: 1,
        },
      });

      nav.visible = false;

      logo.hide();
      home.hide();
      games.hide();
      partners.hide();
      store.hide();
      blog.hide();
      bg.hide();
      brand.hide();
    } else if (isLandscape()) {
      nav.visible = true;

      logo.show();
      home.show();
      games.show();
      partners.show();
      store.show();
      blog.show();

      bg.hide();
      brand.hide();
    }
  }
}

function blogScreen() {
  if (gameState === "BLOG") {
    if (isPortrait()) {
      swal({
        title: "Dear User",
        text:
          "Kindly use desktop for better experience and refresh the page if needed :)",
        buttons: {
          text: "OK",
          width: 1,
        },
      });

      nav.visible = false;

      logo.hide();
      home.hide();
      games.hide();
      partners.hide();
      store.hide();
      blog.hide();
      bg.hide();
      brand.hide();
    } else if (isLandscape()) {
      nav.visible = true;

      logo.show();
      home.show();
      games.show();
      partners.show();
      store.show();
      blog.show();

      bg.hide();
      brand.hide();
    }
  }
}
