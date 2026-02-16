// Complete Translation System for Ali, Muthu & Ah Hock Ken Mee Kiosk
// Supports: English, Malay, Tamil, Mandarin

const translations = {
    // English
    en: {
        // Index/Landing Page
        startOrder: "START ORDER",
        
        // Language Selection Page
        selectLanguage: "SELECT LANGUAGE",
        english: "ENGLISH",
        malay: "MALAY",
        tamil: "TAMIL",
        mandarin: "MANDARIN",
        
        // Dining Preference
        diningPreference: "DINING PREFERENCE",
        dineIn: "DINE IN",
        takeAway: "TAKE AWAY",
        
        // Common buttons
        back: "BACK",
        next: "NEXT",
        confirm: "CONFIRM",
        cancel: "CANCEL",
        payHere: "PAY HERE",
        
        // Menu related
        menu: "MENU",
        categories: "CATEGORIES",
        addToCart: "ADD TO CART",
        viewCart: "VIEW CART",
        checkout: "CHECKOUT",
        
        // Cart related
        cart: "CART",
        total: "TOTAL",
        subtotal: "SUBTOTAL",
        quantity: "QUANTITY",
        remove: "REMOVE",
        empty: "EMPTY",
        emptyCart: "Your cart is empty",
        customize: "CUSTOMIZE",
        each: "each",
        confirmRemove: "Remove this item from cart?",
        customizationOptions: "CUSTOMIZATION OPTIONS",
        saveAdd: "SAVE & ADD TO CART",
        addonsSelected: "Add-ons Selected:",
        
        // Payment
        payment: "PAYMENT",
        orderSummary: "ORDER SUMMARY",
        cash: "CASH",
        card: "CARD",
        
        // Messages
        thankYou: "THANK YOU",
        orderPlaced: "ORDER PLACED SUCCESSFULLY",
        orderNumber: "ORDER NUMBER",
        paymentSuccess: "PAYMENT SUCCESS",
        order: "ORDER",
        orderComplete: "ORDER COMPLETE",
        pleaseSelectPayment: "Please select a payment method!",
        cartEmpty: "Your cart is empty!",
        noItemsInCart: "No items in cart",
        processing: "Processing...",
        errorNoItemData: "Error: No item data found",
        free: "Free",
        thankYouOrder: "Thank you for your order!",
        paymentProcessed: "Your payment has been processed",
        preparingOrder: "We're preparing your order,",
        takeReceipt: "Please take your receipt",
        returningToStart: "Returning to start in",
        
        // Halal
        halal: "HALAL CERTIFIED",
        
        // Menu Categories
        rice: "RICE",
        noodles: "NOODLES",
        sides: "SIDES",
        drinks: "DRINKS",
        
        // Menu Category Titles
        riceMenu: "RICE MENU",
        noodlesMenu: "NOODLES MENU",
        sidesMenu: "SIDES MENU",
        drinksMenu: "DRINKS MENU",
        
        // Rice Menu Items
        "Nasi Lemak Ayam Sambal": "Nasi Lemak Chicken Sambal",
        "Nasi Lemak AG": "Nasi Lemak Fried Chicken",
        "Nasi Lemak Biasa": "Nasi Lemak",
        "Nasi Goreng Cina": "Chinese Fried Rice",
        "Nasi Goreng Kampung": "Fried Village Rice",
        "Nasi Goreng Ali": "Ali Fried Rice",
        
        // Noodles Menu Items
        "Bihun Goreng": "Fried Bihoon",
        "Bihun Soto": "Soto Bihun",
        "Mee Goreng": "Fried Mee",
        "Mee Rebus": "Steamed Mee",
        "Mee Soto": "Soto Mee",
        
        // Sides Menu Items
        "Telur Mata": "Sunny Side Up",
        "Sambal Kerang": "Cockles Sambal",
        "Sambal Sotong": "Squid Sambal",
        "Roti Bakar Set": "Toast Bread Set",
        "Roti Bakar 2 Set": "Toast Bread 2 Set",
        "Ayam Rendang": "Chicken Rendang",
        "Ayam Sambal": "Chicken Sambal",
        "Ayam Goreng": "Fried Chicken",
        
        // Drinks Menu Items
        "Teh Tarik": "Teh Tarik",
        "Kopi O": "Kopi O",
        "Milo Ais": "Iced Milo",
        "Teh O Ais Limau": "Iced Lemon Tea",
        "Air Sirap": "Rose Syrup Drink",
        "Coconut Shake": "Coconut Shake",
        "Fresh Orange Juice": "Fresh Orange Juice",
        "Mineral Water": "Mineral Water",
        "Barley Ice": "Iced Barley",
        "Cham Ice": "Iced Cham",
        "Coffee Ice": "Ice Coffee",
        "Milo Ice": "Iced Milo",
        "Nescafe Ice": "Iced Nescafe",
        "Sirap Ice": "Iced Sirap",
        "Teh Ice": "Iced Tea"
    },
    
    // Malay
    ms: {
        // Index/Landing Page
        startOrder: "MULAKAN PESANAN",
        
        // Language Selection Page
        selectLanguage: "PILIH BAHASA",
        english: "BAHASA INGGERIS",
        malay: "BAHASA MELAYU",
        tamil: "BAHASA TAMIL",
        mandarin: "BAHASA MANDARIN",
        
        // Dining Preference
        diningPreference: "PILIHAN MAKAN",
        dineIn: "MAKAN DI SINI",
        takeAway: "BAWA BALIK",
        
        // Common buttons
        back: "KEMBALI",
        next: "SETERUSNYA",
        confirm: "SAH",
        cancel: "BATAL",
        payHere: "BAYAR DI SINI",
        
        // Menu related
        menu: "MENU",
        categories: "KATEGORI",
        addToCart: "TAMBAH KE TROLI",
        viewCart: "LIHAT TROLI",
        checkout: "BAYAR",
        
        // Cart related
        cart: "TROLI",
        total: "JUMLAH",
        subtotal: "SUBJUMLAH",
        quantity: "KUANTITI",
        remove: "BUANG",
        empty: "KOSONG",
        emptyCart: "Troli anda kosong",
        customize: "UBAHSUAI",
        each: "setiap",
        confirmRemove: "Buang item ini dari troli?",
        customizationOptions: "PILIHAN PENYESUAIAN",
        saveAdd: "SIMPAN & TAMBAH KE TROLI",
        addonsSelected: "Tambahan Dipilih:",
        
        // Payment
        payment: "BAYARAN",
        orderSummary: "RINGKASAN PESANAN",
        cash: "TUNAI",
        card: "KAD",
        
        // Messages
        thankYou: "TERIMA KASIH",
        orderPlaced: "PESANAN BERJAYA",
        orderNumber: "NOMBOR PESANAN",
        paymentSuccess: "BAYARAN BERJAYA",
        order: "PESANAN",
        orderComplete: "PESANAN SELESAI",
        pleaseSelectPayment: "Sila pilih kaedah pembayaran!",
        cartEmpty: "Troli anda kosong!",
        noItemsInCart: "Tiada item dalam troli",
        processing: "Memproses...",
        errorNoItemData: "Ralat: Tiada data item dijumpai",
        free: "Percuma",
        thankYouOrder: "Terima kasih atas pesanan anda!",
        paymentProcessed: "Pembayaran anda telah diproses",
        preparingOrder: "Kami sedang menyediakan pesanan anda,",
        takeReceipt: "Sila ambil resit anda",
        returningToStart: "Kembali ke mula dalam",
        
        // Halal
        halal: "SIJIL HALAL",
        
        // Menu Categories
        rice: "NASI",
        noodles: "MEE",
        sides: "LAUK PAUK",
        drinks: "MINUMAN",
        
        // Menu Category Titles
        riceMenu: "MENU NASI",
        noodlesMenu: "MENU MEE",
        sidesMenu: "MENU LAUK PAUK",
        drinksMenu: "MENU MINUMAN",
        
        // Rice Menu Items
        "Nasi Lemak Ayam Sambal": "Nasi Lemak Ayam Sambal",
        "Nasi Lemak AG": "Nasi Lemak Ayam Goreng",
        "Nasi Lemak Biasa": "Nasi Lemak Biasa",
        "Hainanese Chicken Rice": "Nasi Ayam Hainanese",
        "Nasi Goreng Cina": "Nasi Goreng Cina",
        "Nasi Goreng Kampung": "Nasi Goreng Kampung",
        "Nasi Goreng Ali": "Nasi Goreng Ali",
        "Chicken Porridge": "Bubur Ayam",
        "Hainan Chicken Chop": "Chicken Chop Hainan",
        "Nasi Lemak Chicken Sambal": "Nasi Lemak Ayam Sambal",
        "Nasi Lemak Fried Chicken": "Nasi Lemak Ayam Goreng",
        "Nasi Lemak": "Nasi Lemak Biasa",
        "Fried Chinese Rice": "Nasi Goreng Cina",
        "Fried Village Rice": "Nasi Goreng Kampung",
        "Ali Fried Rice": "Nasi Goreng Ali",
        
        // Noodles Menu Items
        "Bihun Goreng": "Bihun Goreng",
        "Bihun Soto": "Bihun Soto",
        "Mee Goreng": "Mi Goreng",
        "Mee Rebus": "Mi Rebus",
        "Mee Soto": "Mi Soto",
        "Cantonese Noodles": "Mi Kantonis",
        "Prawn Noodle": "Mi Udang",
        "Fried Bihoon": "Bihun Goreng",
        "Soto Bihun": "Bihun Soto",
        "Fried Mee": "Mi Goreng",
        "Steamed Mee": "Mi Rebus",
        "Soto Mee": "Mi Soto",
        
        // Sides Menu Items
        "Telur Mata": "Telur Mata",
        "Sambal Kerang": "Sambal Kerang",
        "Sambal Sotong": "Sambal Sotong",
        "Roti Bakar Set": "Roti Bakar Set",
        "Roti Bakar 2 Set": "Roti Bakar 2 Set",
        "Ayam Rendang": "Ayam Rendang",
        "Ayam Sambal": "Ayam Sambal",
        "Ayam Goreng": "Ayam Goreng",
        "Sunny Side Up": "Telur Mata",
        "Cockles Sambal": "Sambal Kerang",
        "Squid Sambal": "Sambal Sotong",
        "Toast Bread Set": "Roti Bakar Set",
        "Toast Bread 2 Set": "Roti Bakar 2 Set",
        "Chicken Rendang": "Ayam Rendang",
        "Chicken Sambal": "Ayam Sambal",
        "Fried Chicken": "Ayam Goreng",
        
        // Drinks Menu Items
        "Teh Tarik": "Teh Tarik",
        "Kopi O": "Kopi O",
        "Milo Ais": "Milo Ais",
        "Teh O Ais Limau": "Teh O Ais Limau",
        "Air Sirap": "Air Sirap",
        "Barley Ice": "Barley Ais",
        "Cham Ice": "Cham Ais",
        "Coffee Ice": "Coffee Ais",
        "Milo Ice": "Milo Ais",
        "Nescafe Ice": "Nescafe Ais",
        "Sirap Ice": "Sirap Ais",
        "Teh Ice": "Teh Ais",
        "Iced Barley": "Barley Ais",
        "Iced Cham": "Cham Ais",
        "Ice Coffee": "Coffee Ais",
        "Iced Milo": "Milo Ais",
        "Iced Nescafe": "Nescafe Ais",
        "Iced Sirap": "Sirap Ais",
        "Iced Tea": "Teh Ais",
        "Iced Lemon Tea": "Teh O Ais Limau",
        "Rose Syrup Drink": "Air Sirap"
    },
    
    // Tamil
    ta: {
        // Index/Landing Page
        startOrder: "ஆர்டர் தொடங்கவும்",
        
        // Language Selection Page
        selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்",
        english: "ஆங்கிலம்",
        malay: "மலாய்",
        tamil: "தமிழ்",
        mandarin: "மாண்டரின்",
        
        // Dining Preference
        diningPreference: "சாப்பிடும் விருப்பம்",
        dineIn: "இங்கே சாப்பிடவும்",
        takeAway: "டேக் அவே",
        
        // Common buttons
        back: "பின்செல்",
        next: "அடுத்தது",
        confirm: "உறுதிப்படுத்து",
        cancel: "ரத்துசெய்",
        payHere: "இங்கே பணம் செலுத்துங்கள்",
        
        // Menu related
        menu: "மெனு",
        categories: "வகைகள்",
        addToCart: "கூடையில் சேர்",
        viewCart: "கூடையைப் பார்",
        checkout: "பணம் செலுத்து",
        
        // Cart related
        cart: "கூடை",
        total: "மொத்தம்",
        subtotal: "துணை மொத்தம்",
        quantity: "அளவு",
        remove: "அகற்று",
        empty: "வெறுமை",
        emptyCart: "உங்கள் கூடை காலியாக உள்ளது",
        customize: "தனிப்பயனாக்கு",
        each: "ஒவ்வொன்றும்",
        confirmRemove: "இந்த உருப்படியை கூடையிலிருந்து அகற்றவா?",
        customizationOptions: "தனிப்பயனாக்க விருப்பங்கள்",
        saveAdd: "சேமி & கூடையில் சேர்",
        addonsSelected: "கூடுதல் தேர்வுகள்:",
        
        // Payment
        payment: "பணம் செலுத்துதல்",
        orderSummary: "ஆர்டர் சுருக்கம்",
        cash: "பணம்",
        card: "அட்டை",
        
        // Messages
        thankYou: "நன்றி",
        orderPlaced: "ஆர்டர் வெற்றிகரமாக செய்யப்பட்டது",
        orderNumber: "ஆர்டர் எண்",
        paymentSuccess: "பணம் செலுத்துதல் வெற்றி",
        order: "ஆர்டர்",
        orderComplete: "ஆர்டர் முடிந்தது",
        pleaseSelectPayment: "தயவுசெய்து பணம் செலுத்தும் முறையைத் தேர்ந்தெடுக்கவும்!",
        cartEmpty: "உங்கள் கூடை காலியாக உள்ளது!",
        noItemsInCart: "கூடையில் உருப்படிகள் இல்லை",
        processing: "செயல்படுத்துகிறது...",
        errorNoItemData: "பிழை: உருப்படி தரவு கிடைக்கவில்லை",
        free: "இலவசம்",
        thankYouOrder: "உங்கள் ஆர்டருக்கு நன்றி!",
        paymentProcessed: "உங்கள் பணம் செலுத்துதல் செயல்படுத்தப்பட்டது",
        preparingOrder: "நாங்கள் உங்கள் ஆர்டரைத் தயாரிக்கிறோம்,",
        takeReceipt: "தயவுசெய்து உங்கள் ரசீதை எடுத்துக் கொள்ளுங்கள்",
        returningToStart: "தொடக்கத்திற்குத் திரும்புகிறது",
        
        // Halal
        halal: "ஹலால் சான்றிதழ்",
        
        // Menu Categories
        rice: "சாதம்",
        noodles: "நூடுல்ஸ்",
        sides: "பக்க உணவுகள்",
        drinks: "பானங்கள்",
        
        // Menu Category Titles
        riceMenu: "சாதம் மெனு",
        noodlesMenu: "நூடுல்ஸ் மெனு",
        sidesMenu: "பக்க உணவுகள் மெனு",
        drinksMenu: "பானங்கள் மெனு",
        
        // Drinks Menu Items
        "Teh Tarik": "தேநீர் தாரிக்",
        "Kopi O": "கோபி ஓ",
        "Milo Ais": "மைலோ ஐஸ்",
        "Teh O Ais Limau": "எலுமிச்சை ஐஸ் டீ",
        "Air Sirap": "ரோஸ் பானம்",
        "Coconut Shake": "தேங்காய் ஷேக்",
        "Fresh Orange Juice": "புதிய ஆரஞ்சு ஜூஸ்",
        "Mineral Water": "மினரல் வாட்டர்"
    },
    
    // Mandarin (Simplified Chinese)
    zh: {
        // Index/Landing Page
        startOrder: "开始订购",
        
        // Language Selection Page
        selectLanguage: "选择语言",
        english: "英语",
        malay: "马来语",
        tamil: "泰米尔语",
        mandarin: "华语",
        
        // Dining Preference
        diningPreference: "用餐选择",
        dineIn: "堂食",
        takeAway: "外带",
        
        // Common buttons
        back: "返回",
        next: "下一步",
        confirm: "确认",
        cancel: "取消",
        payHere: "在这里付款",
        
        // Menu related
        menu: "菜单",
        categories: "分类",
        addToCart: "加入购物车",
        viewCart: "查看购物车",
        checkout: "结账",
        
        // Cart related
        cart: "购物车",
        total: "总计",
        subtotal: "小计",
        quantity: "数量",
        remove: "删除",
        empty: "清空",
        emptyCart: "您的购物车是空的",
        customize: "定制",
        each: "每个",
        confirmRemove: "从购物车中删除此项目？",
        customizationOptions: "定制选项",
        saveAdd: "保存并添加到购物车",
        addonsSelected: "已选配料：",
        
        // Payment
        payment: "付款",
        orderSummary: "订单摘要",
        cash: "现金",
        card: "银行卡",
        
        // Messages
        thankYou: "谢谢",
        orderPlaced: "订单成功",
        orderNumber: "订单号",
        paymentSuccess: "付款成功",
        order: "订单",
        orderComplete: "订单完成",
        pleaseSelectPayment: "请选择付款方式！",
        cartEmpty: "您的购物车是空的！",
        noItemsInCart: "购物车中没有商品",
        processing: "处理中...",
        errorNoItemData: "错误：未找到商品数据",
        free: "免费",
        thankYouOrder: "感谢您的订单！",
        paymentProcessed: "您的付款已处理",
        preparingOrder: "我们正在准备您的订单，",
        takeReceipt: "请取您的收据",
        returningToStart: "返回开始页面",
        
        // Halal
        halal: "清真认证",
        
        // Menu Categories
        rice: "米饭",
        noodles: "面条",
        sides: "配菜",
        drinks: "饮料",
        
        // Menu Category Titles
        riceMenu: "米饭菜单",
        noodlesMenu: "面条菜单",
        sidesMenu: "配菜菜单",
        drinksMenu: "饮料菜单",
        
        // Drinks Menu Items
        "Teh Tarik": "拉茶",
        "Kopi O": "黑咖啡",
        "Milo Ais": "冰美禄",
        "Teh O Ais Limau": "冰柠檬茶",
        "Air Sirap": "玫瑰糖浆饮料",
        "Coconut Shake": "椰子奶昔",
        "Fresh Orange Juice": "鲜榨橙汁",
        "Mineral Water": "矿泉水"
    }
};

// Current language (default: English)
let currentLanguage = localStorage.getItem('kioskLanguage') || 'en';

// Get translation for a key
function t(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
}

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('kioskLanguage', lang);
    updatePageTranslations();
}

// Update all translations on current page
function updatePageTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    const savedLanguage = localStorage.getItem('kioskLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    
    // Update translations
    updatePageTranslations();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, setLanguage, updatePageTranslations };
}

