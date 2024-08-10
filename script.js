const items = [
    // Level 1 (Trash)
    ['Old newspaper', 'Phonebook', 'Ashtray', 'Toothpick', 'Napkin', 'Pen', 'Paperclip', 'Bone', 'Empty tin can', 'Tire trout', 'Apple core', 'Dead potted plant', 'Dust bunny', 'Cracked doll', 'Torn stuffed animal', 'Missing puzzle pieces', 'Scratched action figure', 'Bent toy car', 'Deflated ball', 'Yellowed magazine', 'Outdated catalog', 'Wrinkled brochure', 'Faded poster', 'Torn comic book', 'Outdated map', 'Bent staple', 'Twisted safety pin', 'Broken binder clip', 'Rusty pushpin', 'Damaged rubber band', 'Torn sticky note', 'Chewed dog toy', 'Leftover chicken wing', 'Cracked rib', 'Splintered crutch', 'Fishbone', 'Worn antler', 'Broken vase', 'Shattered glass', 'Old shoe', 'Worn-out sock', 'Used coffee cup', 'Torn book', 'Broken mirror', 'Rusty nail', 'Busted watch', 'Used candle', 'Empty bottle', 'Wilted flower', 'Stale bread'],
    
// Level 2 (Common items)
    ['Wooden spoon', 'Paperback book', 'Ceramic mug', 'Cotton t-shirt', 'Rubber duck', 'Plastic water bottle', 'Ballpoint pen', 'Notepad', 'Keychain', 'Coaster', 'Comb', 'Socks', 'Coffee filter', 'Plastic cutlery', 'Dish towel', 'Hand sanitizer', 'Toothbrush', 'AA batteries', 'Umbrella', 'Disposable camera', 'Plastic food container', 'Hair tie', 'Lip balm', 'Cotton swabs', 'Candy bar', 'Matchbox', 'Disposable lighter', 'Guitar pick', 'Postcard', 'Stamp', 'Envelope', 'Pencil sharpener', 'Eraser', 'Bookmark', 'Can opener', 'Bottle opener', 'Measuring tape', 'Screwdriver', 'Scissors', 'Stapler', 'Tape dispenser', 'Post-it notes', 'Deck of cards', 'Dice', 'Plastic plant pot', 'Shoelaces', 'Bandages', 'Safety pins', 'Sewing needle', 'Thread'],

// Level 3 (Uncommon items)
    ['Leather wallet', 'Stainless steel watch', 'Portable radio', 'Sunglasses', 'Fountain pen', 'Bluetooth speaker', 'Electric toothbrush', 'Yoga mat', 'Reusable water bottle', 'Wireless mouse', 'Thermal lunch box', 'Portable charger', 'Wireless earbuds', 'Fitness tracker', 'Insulated travel mug', 'French press', 'Essential oil diffuser', 'Resistance bands', 'Foam roller', 'Portable fan', 'Digital kitchen scale', 'Electric can opener', 'Rechargeable batteries', 'Compact umbrella', 'Polarized sunglasses', 'Bluetooth keyboard', 'Travel pillow', 'Reusable shopping bags', 'Insulated food container', 'Collapsible water bottle', 'Portable luggage scale', 'Travel adapter', 'Noise-cancelling earplugs', 'Microfiber towel', 'Compact binoculars', 'Portable clothes steamer', 'Electric wine opener', 'Stainless steel straws', 'Bamboo utensil set', 'Collapsible colander', 'Silicone baking mat', 'Reusable produce bags', 'Insulated wine tumbler', 'Portable phone tripod', 'Compact sewing kit', 'Travel-sized board game', 'Foldable reading light', 'Waterproof phone case', 'Portable shoe cleaner'],

// Level 4 (Rare items)
    ['Smartphone', 'Designer handbag', 'Vintage vinyl record', 'Gaming console', 'DSLR camera', 'Noise-cancelling headphones', 'Espresso machine', 'Drone', 'Smartwatch', 'Electric skateboard', 'High-end blender', 'VR headset', 'Tablet', 'Leather jacket', 'Mechanical keyboard', 'Air purifier', 'Robot vacuum', 'Electric scooter', 'Portable projector', 'Smart thermostat', 'Electric guitar', 'DJ controller', 'Sous vide cooker', '3D printer', 'Gaming laptop', 'Smart door lock', 'Wireless security camera', 'Electric longboard', 'Standing desk', 'Smart light system', 'Professional microphone', 'Electric wine cellar', 'Smart mirror', 'Curved gaming monitor', 'Electric fireplace', 'Smart garden system', 'Telescopic fishing rod', 'Electric smoker', 'Digital piano', 'Portable ice maker', 'Smart bike helmet', 'Electric skateboard', 'Foldable electric bike', 'Smart coffee maker', 'Portable power station', 'Smart luggage', 'Electric surfboard', 'Robotic lawn mower', 'Smart sleep system', 'Outdoor pizza oven'],

// Level 5 (Very rare items)
    ['Gold necklace', 'Antique clock', 'First edition book', 'Original painting', 'Rare coin', 'Signed sports memorabilia', 'Vintage guitar', 'Limited edition sneakers', 'Luxury perfume', 'Handcrafted chess set', 'Rare gemstone', 'Autographed movie prop', 'Rare stamp collection', 'Antique furniture piece', 'Vintage camera', 'Luxury wristwatch', 'First-generation game console', 'Rare vintage wine', 'Signed celebrity photograph', 'Original comic book artwork', 'Vintage Rolex watch', 'Rare baseball card', 'Early edition of famous novel', 'Antique pocket watch', 'Rare postage stamp', 'Vintage Chanel handbag', 'Signed movie script', 'Rare vinyl record', 'Antique Persian rug', 'Tiffany lamp', 'Fabergé egg replica', 'Vintage Leica camera', 'Signed and numbered art print', 'Rare butterfly specimen', 'Vintage Coca-Cola machine', 'Early Apple computer', 'Antique Chinese vase', 'Signed basketball from championship game', 'Rare military medal', 'Vintage Cartier jewelry', 'Original Broadway playbill', 'Rare pinball machine', 'Antique samurai sword', 'Vintage Polaroid camera', 'Signed presidential document', 'Rare Action Comics issue', 'Antique typewriter', 'Vintage Hermès scarf'],
// Level 6 (Legendary items)
    ['Ancient artifact', 'Royal crown', 'Meteorite fragment', 'Dinosaur fossil', 'Historical document', 'Moon rock', 'Famous artists paintbrush', 'Excalibur sword replica', 'Lost civilization relic', 'Time capsule from a significant era', 'Piece of the Berlin Wall', 'Amelia Earharts compass', 'Shakespeares quill', 'Wright brothers blueprint', 'Leonardo da Vincis notebook', 'Olympic gold medal', 'Titanic artifact', 'Enigma machine', 'Apollo 11 mission patch', 'Rosetta Stone replica', 'Declaration of Independence copy', 'Cleopatras headdress replica', 'Gutenberg Bible page', 'Mona Lisa sketch', 'Pharaohs sarcophagus replica', 'Original Star Wars prop', 'Beethovens piano key', 'Piece of Mount Everest', 'Samurai armor set', 'Viking longship fragment', 'Joan of Arcs sword replica', 'Aztec sun stone replica', 'Philosophers stone', 'Holy Grail replica', 'Terracotta warrior', 'Sputnik 1 model', 'Magna Carta reproduction', 'Michelangelos chisel', 'Blackbeards treasure map', 'Cleopatras mirror', 'Nostradamus crystal ball', 'Shroud of Turin replica', 'Mayan calendar stone', 'Piece of the Great Wall of China', 'Amelia Earharts flight jacket', 'Tutankhamuns death mask', 'Genghis Khans bow', 'Atlantis artifact', 'Jules Vernes submarine design', 'Einsteins chalk'],
    // Level 7 (The Holy Grail)
    ['The Holy Grail']
];
const npcNames = [
    'Trader Joe', 'Bargain Betty', 'Swap Sam', 'Dealer Dan', 'Merchant Mary',
    'Peddler Pete', 'Thrifty Theresa', 'Barterer Bob', 'Haggle Hannah', 'Exchange Eddie'
];

let playerInventory = null;

function initializeGame() {
    playerInventory = { name: items[0][Math.floor(Math.random() * items[0].length)], level: 1 };
    updateInventoryDisplay();
    generateOffer();
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = `<li>${playerInventory.name} (Level ${playerInventory.level})</li>`;
}

function getItemLevel(itemName) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].includes(itemName)) {
            return i + 1; // Adding 1 because array index starts at 0
        }
    }
    return -1;
}

function generateOffer() {
    const npcOffer = document.getElementById('npc-offer');
    
    const tradeType = Math.random();
    let offeredItemLevel;

    if (tradeType < 1/3) {
        // Trade up
        offeredItemLevel = Math.min(playerInventory.level + 1, items.length);
    } else if (tradeType < 2/3) {
        // Trade flat
        offeredItemLevel = playerInventory.level;
    } else {
        // Trade down
        offeredItemLevel = Math.max(playerInventory.level - 1, 1);
    }

    const offeredItemName = items[offeredItemLevel - 1][Math.floor(Math.random() * items[offeredItemLevel - 1].length)];
    const currentNPC = npcNames[Math.floor(Math.random() * npcNames.length)];

    npcOffer.innerHTML = `
        <span>${currentNPC}: OFFER: ${offeredItemName} for your ${playerInventory.name}</span>
        <button onclick="trade('${offeredItemName}')">Trade</button>
    `;
}

function trade(offeredItemName) {
    const offeredItemLevel = getItemLevel(offeredItemName);
    playerInventory = { name: offeredItemName, level: offeredItemLevel };
    updateInventoryDisplay();
    generateOffer();
    checkWinCondition();
}

function checkWinCondition() {
    if (playerInventory.name === 'The Holy Grail') {
        showCongratulationsMessage();
    }
}

function showCongratulationsMessage() {
    const gameContainer = document.getElementById('game-container');
    const congratsMessage = document.createElement('div');
    congratsMessage.id = 'congrats-message';
    congratsMessage.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You have obtained The Holy Grail and won the game!</p>
        <button onclick="restartGame()">Play Again</button>
    `;
    gameContainer.appendChild(congratsMessage);
}

function restartGame() {
    const congratsMessage = document.getElementById('congrats-message');
    if (congratsMessage) {
        congratsMessage.remove();
    }
    initializeGame();
}

document.getElementById('refresh-button').addEventListener('click', generateOffer);

initializeGame();