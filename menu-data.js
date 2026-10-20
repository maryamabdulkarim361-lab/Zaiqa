// =============================================================================
// ZAIQA — SHARED MENU DATA
// Both index.html (customer menu) and admin.html (admin panel) load this file.
//
// This project doesn't have a backend/database yet (that's planned for a later
// phase — see the project proposal). Until then, this file IS the database:
//   - The admin panel lets you add/edit/delete items in memory, then gives you
//     a "Download menu-data.js" button that generates an updated version of
//     this exact file.
//   - Replace this file with the downloaded one, refresh index.html, and the
//     customer menu updates. Refresh admin.html too, and it will show the
//     same data — because both read from here.
// =============================================================================

// Real, working 3D model (food-safe open sample asset — always available):
const AVOCADO_GLB = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb";

// ---------------------------------------------------------------------------
// HOW TO ADD YOUR OWN 3D MODELS:
// 1. Get a .glb file (e.g. from the Kenney Food Kit, or your own scan/photo-scan).
// 2. Put it inside the "models" folder next to index.html, e.g. models/kebab.glb
// 3. In the admin panel, set that dish's "3D model file" field to
//    models/kebab.glb  (or edit the value below directly).
// That's it — the card automatically switches from "coming soon" to a
// live, rotatable 3D + AR viewer. No other code changes needed.
//
// OPTIONAL — better AR on iPhone: if you also have a matching .usdz file
// (Apple's AR format), add it as "usdz": "models/kebab.usdz" on that same
// item. iPhones will then use Quick Look (Apple's native AR) automatically;
// Android/desktop keep using the .glb — you don't have to do anything extra.
// ---------------------------------------------------------------------------

const MENU = [
  {
    category: "Starters",
    items: [
      { name:"Fresh Avocado Toast", price:"Rs. 650", glb:AVOCADO_GLB, glyph:"🥑",
        desc:"Sourdough, smashed avocado, chili flakes, feta crumble, lemon zest. This card uses a real interactive 3D model — drag to rotate, pinch to zoom, or tap 'View in your space' on a phone." },
      { name:"Hero Salad", price:"Rs. 600", glb:"models/hero-salade.glb", glyph:"🥗",
        desc:"Crisp mixed greens, cherry tomato, cucumber, house dressing — scanned in 3D so you can see the exact portion before ordering." },
      { name:"Chicken Samosa (3 pcs)", price:"Rs. 350", glb:null, glyph:"🥟",
        desc:"Crisp pastry, spiced chicken keema filling, tamarind dip." },
    ]
  },
  {
    category: "Mains",
    items: [
      { name:"Chicken Karahi", price:"Rs. 1,200", glb:null, glyph:"🍛",
        desc:"Tomato-based karahi, ginger, green chili, served with naan." },
      { name:"Beef Biryani", price:"Rs. 950", glb:null, glyph:"🍚",
        desc:"Layered basmati rice, slow-cooked beef, fried onion, raita on the side." },
      { name:"Tomahawk Steak", price:"Rs. 3,800", glb:"models/tomahawk-board.glb", glyph:"🥩",
        desc:"Bone-in tomahawk cut, char-grilled, served on a wooden board with roasted vegetables. Rotate to see the true size and presentation before you order." },
    ]
  },
  {
    category: "Chef's Specials",
    items: [
      { name:"Chef's Special", price:"Rs. 1,500", glb:"models/chefs-special.glb", usdz:"models/chefs-special.usdz", glyph:"⭐",
        desc:"Today's signature dish, plated fresh by our head chef. Ask your server for today's story behind it." },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name:"Gulab Jamun (2 pcs)", price:"Rs. 300", glb:null, glyph:"🍮",
        desc:"Warm milk-solid dumplings soaked in cardamom sugar syrup." },
      { name:"Kunafa", price:"Rs. 750", glb:null, glyph:"🧁",
        desc:"Crisp shredded pastry, sweet cheese layer, pistachio, sugar syrup." },
    ]
  },
  {
    category: "Beverages",
    items: [
      { name:"Fresh Lime Soda", price:"Rs. 250", glb:null, glyph:"🥤",
        desc:"Lime, soda, mint, choice of sweet or salted." },
      { name:"Kashmiri Chai", price:"Rs. 300", glb:null, glyph:"🍵",
        desc:"Pink tea, cardamom, pistachio, served warm." },
    ]
  },
];
