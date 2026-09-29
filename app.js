/**
 * ShopMaster POS — Modern Retail Management Application
 * Features:
 * - POS Checkout & Fast Cart
 * - Live Camera Barcode & QR Scanner (html5-qrcode)
 * - Printable Barcode Price Tags (JsBarcode)
 * - Excel (.xlsx) Export for Inventory & Sales (SheetJS)
 * - Celebratory Confetti Animation (canvas-confetti)
 * - Synthesized Audio POS Sounds (Web Audio API)
 * - Debt / Credit Ledger (Qarz Daftari)
 * - Visual Financial Charts (Chart.js)
 * - Mobile Touch-Optimized Navigation
 */

(function () {
    'use strict';

    // STORAGE KEYS
    const STORAGE_KEYS = {
        PRODUCTS: 'shopmaster_products_v4',
        SALES: 'shopmaster_sales_v4',
        SETTINGS: 'shopmaster_settings_v4',
        LANG: 'shopmaster_lang_v4',
        DEBTS: 'shopmaster_debts_v4'
    };

    // TRANSLATIONS
    const i18n = {
        ru: {
            unit: "шт",
            tagline: "Учет и Продажи",
            navDashboard: "Дашборд",
            navPos: "Касса (POS)",
            navInventory: "Склад и Товары",
            navSales: "История продаж",
            navAnalytics: "Финансы и Отчеты",
            navDebts: "Долги (Qarzlar)",
            navSettings: "Настройки",
            titleDashboard: "Главный Дашборд",
            subTitleDashboard: "Обзор статистики, быстрые показатели и аналитика",
            btnNewProduct: "Новый товар",
            btnNewSale: "Новая продажа",
            statRevenueLabel: "Общая выручка",
            allTime: "за всё время",
            statProfitLabel: "Чистая прибыль",
            statProfitSub: "Выручка минус закупка",
            statItemsLabel: "Товаров на складе",
            statSalesCountLabel: "Проведено чеков",
            lowStockAlertTitle: "Внимание! Некоторые товары заканчиваются:",
            btnView: "Посмотреть",
            chartTitle: "Динамика продаж и прибыли",
            topProductsTitle: "Лидеры продаж",
            noSalesData: "Нет данных о продажах",
            recentSalesTitle: "Последние продажи",
            allSalesBtn: "Все продажи →",
            thCheckNo: "№ Чек",
            thTime: "Время",
            thProducts: "Товары",
            thSum: "Сумма",
            thProfit: "Прибыль",
            thPayment: "Оплата",
            noSalesYet: "Нет проведенных продаж",
            phSearchPos: "Поиск товара по названию или штрихкоду...",
            allCategories: "Все категории",
            cartTitle: "Корзина покупателя",
            btnClear: "Очистить",
            cartEmpty: "Корзина пуста",
            cartEmptySub: "Выберите товары из списка слева",
            cartItemsCountLabel: "Позиций в чеке:",
            discountLabel: "Скидка покупателю:",
            totalToPayLabel: "ИТОГО К ОПЛАТЕ:",
            payCash: "Наличные",
            payCard: "Карта",
            payTransfer: "Click / Payme",
            payDebt: "В долг (Насия)",
            btnCompleteSale: "Оформить продажу",
            phSearchInv: "Искать товар по имени, артикулу, штрихкоду...",
            stockAll: "Все остатки",
            stockInStock: "В наличии",
            stockLow: "Заканчиваются (≤ 5)",
            stockOut: "Нет в наличии (0)",
            btnAddProduct: "Добавить товар",
            thProduct: "Товар",
            thCategory: "Категория",
            thCostPrice: "Закупка",
            thSalePrice: "Цена продажи",
            thProfitPercent: "Маржа %",
            thStock: "Остаток",
            thStatus: "Статус",
            thActions: "Действия",
            phSearchSales: "Поиск по номеру чека или товару...",
            btnClearHistory: "Очистить историю",
            thDate: "Дата и время",
            modalAddTitle: "Добавить товар",
            modalEditTitle: "Редактировать товар",
            labelProdName: "Наименование товара *",
            labelProdCategory: "Категория",
            labelProdBarcode: "Штрихкод / QR",
            labelProdCost: "Цена закупки (Себестоимость) *",
            labelProdPrice: "Цена продажи *",
            labelProdStock: "Остаток на складе (шт) *",
            labelProdUnit: "Единица измерения",
            btnCancel: "Отмена",
            btnSave: "Сохранить",
            receiptTitle: "Кассовый чек",
            btnPrint: "Печать чека",
            settingsBasicTitle: "Основные настройки магазина",
            labelShopName: "Название вашего магазина",
            labelCurrency: "Денежная единица",
            labelLowStockThreshold: "Порог предупреждения о малом остатке (шт)",
            btnSaveSettings: "Сохранить настройки",
            settingsBackupTitle: "Резервное копирование и База данных",
            settingsBackupSub: "Вы можете экспортировать все товары, историю продаж и настройки в файл резервной копии или восстановить их при необходимости.",
            btnExportBackup: "Экспортировать JSON",
            btnImportBackup: "Восстановить из бэкапа",
            btnLoadDemo: "Демо-данные",
            btnResetAll: "Полный сброс базы данных",
            statusInStock: "В наличии",
            statusLowStock: "Мало",
            statusOutOfStock: "Нет в наличии",
            confirmReset: "ВНИМАНИЕ! Все товары, история продаж и долги будут БЕЗВОЗВРАТНО УДАЛЕНЫ! Вы уверены?",
            resetDone: "База данных успешно сброшена.",
            confirmRefund: "Оформить возврат чека №",
            saleRefunded: "Чек возвращен, товары возвращены на склад.",
            btnCameraScan: "Сканер (Камера)",
            btnScan: "Сканер",
            btnExportExcel: "Excel (.xlsx)",
            btnExportSalesExcel: "Экспорт продаж (Excel)",
            systemOnline: "Касса в сети",
            periodLast7Days: "Последние 7 дней",
            kpiMarginLabel: "Рентабельность (ROI)",
            kpiAvgCheck: "Средний чек",
            kpiInventoryCost: "Себестоимость склада",
            kpiPotentialRevenue: "Ожидаемая выручка"
        },
        uz: {
            unit: "dona",
            tagline: "Hisob va Savdo",
            navDashboard: "Boshqaruv",
            navPos: "Kassa (POS)",
            navInventory: "Ombor va Mahsulotlar",
            navSales: "Savdo tarixi",
            navAnalytics: "Moliya va Hisobot",
            navDebts: "Qarzlar daftari",
            navSettings: "Sozlamalar",
            titleDashboard: "Asosiy Ko'rsatkichlar",
            subTitleDashboard: "Statistika, tezkor ko'rsatkichlar va tahlil",
            btnNewProduct: "Yangi mahsulot",
            btnNewSale: "Yangi savdo",
            statRevenueLabel: "Umumiy tushum",
            allTime: "barcha davr",
            statProfitLabel: "Sof foyda",
            statProfitSub: "Tushumdan tan narxi ayirilgan",
            statItemsLabel: "Ombordagi mahsulotlar",
            statSalesCountLabel: "Cheklar soni",
            lowStockAlertTitle: "Diqqat! Ba'zi mahsulotlar tugab bormoqda:",
            btnView: "Ko'rish",
            chartTitle: "Savdo va sof foyda dinamikasi",
            topProductsTitle: "Eng ko'p sotilganlar",
            noSalesData: "Savdo ma'lumotlari yo'q",
            recentSalesTitle: "Oxirgi savdolar",
            allSalesBtn: "Barcha savdolar →",
            thCheckNo: "№ Chek",
            thTime: "Vaqt",
            thProducts: "Mahsulotlar",
            thSum: "Summa",
            thProfit: "Foyda",
            thPayment: "To'lov",
            noSalesYet: "Hali savdolar o'tkazilmadi",
            phSearchPos: "Mahsulot nomi yoki shtrixkod bilan qidirish...",
            allCategories: "Barcha toifalar",
            cartTitle: "Harid savatchasi",
            btnClear: "Tozalash",
            cartEmpty: "Savatcha bo'sh",
            cartEmptySub: "Chapdagi ro'yxatdan mahsulotlarni tanlang",
            cartItemsCountLabel: "Chekdagi mahsulotlar:",
            discountLabel: "Mijozga chegirma:",
            totalToPayLabel: "TO'LASH UCHUN JAMI:",
            payCash: "Naqd pul",
            payCard: "Plastik karta",
            payTransfer: "Click / Payme",
            payDebt: "Nasiya (Qarzga)",
            btnCompleteSale: "Savdoni yakunlash",
            phSearchInv: "Nomi, kodi yoki shtrixkodi bo'yicha qidirish...",
            stockAll: "Barcha qoldiqlar",
            stockInStock: "Mavjud",
            stockLow: "Oz qoldi (≤ 5)",
            stockOut: "Qolmagan (0)",
            btnAddProduct: "Mahsulot qo'shish",
            thProduct: "Mahsulot",
            thCategory: "Toifa",
            thCostPrice: "Tan narxi",
            thSalePrice: "Sotish narxi",
            thProfitPercent: "Marja %",
            thStock: "Qoldiq",
            thStatus: "Holati",
            thActions: "Amallar",
            phSearchSales: "Chek raqami yoki mahsulot bo'yicha...",
            btnClearHistory: "Tarixni tozalash",
            thDate: "Sana va vaqt",
            modalAddTitle: "Mahsulot qo'shish",
            modalEditTitle: "Tahrirlash",
            labelProdName: "Mahsulot nomi *",
            labelProdCategory: "Toifa",
            labelProdBarcode: "Shtrixkod / QR",
            labelProdCost: "Tan narxi (Kirim) *",
            labelProdPrice: "Sotish narxi *",
            labelProdStock: "Ombordagi qoldiq (dona) *",
            labelProdUnit: "O'lchov birligi",
            btnCancel: "Bekor qilish",
            btnSave: "Saqlash",
            receiptTitle: "To'lov cheki",
            btnPrint: "Chekni chop etish",
            settingsBasicTitle: "Do'konning asosiy sozlamalari",
            labelShopName: "Do'koningiz nomi",
            labelCurrency: "Pul birligi (Valyuta)",
            labelLowStockThreshold: "Kam qolganlik chegarasi (dona)",
            btnSaveSettings: "Sozlamalarni saqlash",
            settingsBackupTitle: "Zaxira nusxa va Ma'lumotlar bazasi",
            settingsBackupSub: "Barcha ma'lumotlar brauzeringizda saqlanadi.",
            btnExportBackup: "JSON nusxasini yuklab olish",
            btnImportBackup: "Zaxiradan tiklash",
            btnLoadDemo: "Demo mahsulotlar",
            btnResetAll: "Baza tozalash",
            statusInStock: "Mavjud",
            statusLowStock: "Oz qoldi",
            statusOutOfStock: "Tugagan",
            confirmReset: "DIQQAT! Barcha mahsulotlar va savdo tarixi o'chiriladi. Rozimisiz?",
            resetDone: "Ma'lumotlar bazasi tozalandi.",
            confirmRefund: "Chekni bekor qilish №",
            saleRefunded: "Chek bekor qilindi, mahsulotlar omborga qaytarildi.",
            btnCameraScan: "Skaner (Kamera)",
            btnScan: "Skaner",
            btnExportExcel: "Excel (.xlsx)",
            btnExportSalesExcel: "Savdo eksporti (Excel)",
            systemOnline: "Kassa onlayn",
            periodLast7Days: "Oxirgi 7 kun",
            kpiMarginLabel: "Rentabellik (ROI)",
            kpiAvgCheck: "O'rtacha chek",
            kpiInventoryCost: "Ombor tannarxi",
            kpiPotentialRevenue: "Kutilayotgan tushum"
        }
    };

    // DEMO PRODUCTS PRESET
    const DEMO_PRODUCTS = [
        { id: 1, name: "Футболка Oversize Black", category: "Одежда", barcode: "4780011001", cost: 65000, price: 120000, stock: 18, unit: "шт" },
        { id: 2, name: "Джинсы Classic Indigo", category: "Одежда", barcode: "4780011002", cost: 110000, price: 195000, stock: 12, unit: "шт" },
        { id: 3, name: "Кроссовки Ultra Boost", category: "Обувь", barcode: "4780011003", cost: 180000, price: 320000, stock: 4, unit: "шт" },
        { id: 4, name: "Кофе натуральный 250г", category: "Продукты", barcode: "4780011004", cost: 35000, price: 58000, stock: 25, unit: "шт" },
        { id: 5, name: "Наушники Wireless Pro", category: "Электроника", barcode: "4780011005", cost: 95000, price: 165000, stock: 3, unit: "шт" },
        { id: 6, name: "Термокружка Steel 500мл", category: "Посуда", barcode: "4780011006", cost: 42000, price: 75000, stock: 15, unit: "шт" }
    ];

    // APPLICATION STATE
    let state = {
        products: [],
        sales: [],
        debts: [],
        cart: [],
        currentLang: 'ru',
        settings: {
            shopName: "ShopMaster",
            currency: "so'm",
            lowStockThreshold: 5,
            theme: "dark",
            soundEnabled: true,
            confettiEnabled: true
        }
    };

    let salesChartInstance = null;
    let analyticsRevenueChartInstance = null;
    let analyticsCategoryChartInstance = null;
    let html5QrScannerInstance = null;
    let audioContext = null;

    // =========================================================================
    // AUDIO SYNTHESIZER (Pure Web Audio API — No external audio files needed)
    // =========================================================================
    function getAudioContext() {
        if (!audioContext) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) audioContext = new AudioContextClass();
        }
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
        return audioContext;
    }

    function playScannerBeep() {
        if (!state.settings.soundEnabled) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1600, ctx.currentTime + 0.06);
            gain.gain.setValueAtTime(0.18, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.06);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.07);
        } catch (e) {
            console.warn("Audio error", e);
        }
    }

    function playCheckoutChime() {
        if (!state.settings.soundEnabled) return;
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const freqs = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 arpeggio
            freqs.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                const start = ctx.currentTime + idx * 0.07;
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, start);
                gain.gain.setValueAtTime(0.2, start);
                gain.gain.exponentialRampToValueAtTime(0.005, start + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(start);
                osc.stop(start + 0.36);
            });
        } catch (e) {
            console.warn("Chime error", e);
        }
    }

    // =========================================================================
    // INITIALIZATION
    // =========================================================================
    function initApp() {
        loadState();
        applyTheme(state.settings.theme);
        applyLanguage(state.currentLang);
        updateDateDisplay();
        bindGlobalEvents();
        renderAll();
    }

    function loadState() {
        try {
            const p = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
            state.products = p ? JSON.parse(p) : DEMO_PRODUCTS;

            const s = localStorage.getItem(STORAGE_KEYS.SALES);
            state.sales = s ? JSON.parse(s) : [];

            const d = localStorage.getItem(STORAGE_KEYS.DEBTS);
            state.debts = d ? JSON.parse(d) : [];

            const set = localStorage.getItem(STORAGE_KEYS.SETTINGS);
            if (set) state.settings = { ...state.settings, ...JSON.parse(set) };

            const l = localStorage.getItem(STORAGE_KEYS.LANG);
            if (l) state.currentLang = l;
        } catch (e) {
            state.products = DEMO_PRODUCTS;
            state.sales = [];
            state.debts = [];
        }
    }

    function saveProducts() { localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products)); }
    function saveSales() { localStorage.setItem(STORAGE_KEYS.SALES, JSON.stringify(state.sales)); }
    function saveDebts() { localStorage.setItem(STORAGE_KEYS.DEBTS, JSON.stringify(state.debts)); }
    function saveSettings() { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings)); }
    function saveLang() { localStorage.setItem(STORAGE_KEYS.LANG, state.currentLang); }

    function formatCurrency(amount) {
        const val = Number(amount) || 0;
        return val.toLocaleString('ru-RU') + ' ' + (state.settings.currency || "so'm");
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = document.querySelector('#themeToggleBtn i');
        const text = document.getElementById('themeToggleText');
        const mIcon = document.querySelector('#themeToggleMobile i');
        if (theme === 'dark') {
            if (icon) icon.className = 'fa-solid fa-moon';
            if (text) text.textContent = 'Тёмная тема';
            if (mIcon) mIcon.className = 'fa-solid fa-moon';
        } else {
            if (icon) icon.className = 'fa-solid fa-sun';
            if (text) text.textContent = 'Светлая тема';
            if (mIcon) mIcon.className = 'fa-solid fa-sun';
        }
    }

    function applyLanguage(lang) {
        state.currentLang = lang;
        saveLang();
        const dict = i18n[lang] || i18n.ru;

        document.querySelectorAll('[data-i18n]').forEach(elem => {
            const key = elem.getAttribute('data-i18n');
            if (dict[key]) elem.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(elem => {
            const key = elem.getAttribute('data-i18n-ph');
            if (dict[key]) elem.placeholder = dict[key];
        });

        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = lang;
        const langSelectMobile = document.getElementById('langSelectMobile');
        if (langSelectMobile) langSelectMobile.value = lang;
    }

    function updateDateDisplay() {
        const dateElem = document.getElementById('currentDateDisplay');
        if (!dateElem) return;
        const now = new Date();
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();
        dateElem.innerHTML = `<i class="fa-regular fa-calendar"></i> <span>${d}.${m}.${y}</span>`;
    }

    // =========================================================================
    // CENTRALIZED BULLETPROOF TAB SWITCHER
    // =========================================================================
    function switchTab(targetTab) {
        if (!targetTab) return;

        // Desktop nav active indicator
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        const desktopBtn = document.querySelector(`.nav-btn[data-tab="${targetTab}"]`);
        if (desktopBtn) desktopBtn.classList.add('active');

        // Mobile bottom nav active indicator
        document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.remove('active'));
        const mobileBtn = document.querySelector(`.mobile-nav-btn[data-tab="${targetTab}"]`);
        if (mobileBtn) mobileBtn.classList.add('active');

        // Switch visible tab section
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        const targetSection = document.getElementById(`tab-${targetTab}`);
        if (targetSection) targetSection.classList.add('active');

        // Update Desktop Header Titles
        const pageTitle = document.getElementById('pageTitle');
        const pageSub = document.getElementById('pageSubTitle');
        const dict = i18n[state.currentLang] || i18n.ru;

        const titlesMap = {
            dashboard: [dict.titleDashboard, dict.subTitleDashboard],
            pos: [dict.navPos, dict.phSearchPos],
            inventory: [dict.navInventory, dict.phSearchInv],
            sales: [dict.navSales, dict.phSearchSales],
            analytics: [dict.navAnalytics, "Детальные финансовые графики и отчетность"],
            debts: [dict.navDebts, "Книга учета долгов покупателей (Nasiya daftari)"],
            settings: [dict.navSettings, dict.settingsBasicTitle]
        };

        if (pageTitle && pageSub && titlesMap[targetTab]) {
            pageTitle.textContent = titlesMap[targetTab][0];
            pageSub.textContent = titlesMap[targetTab][1];
        }

        // Render tab specific data
        if (targetTab === 'dashboard') {
            renderDashboard();
            renderSalesChart();
        } else if (targetTab === 'pos') {
            renderPOSCatalog();
            renderPOSCart();
        } else if (targetTab === 'inventory') {
            renderInventoryTable();
        } else if (targetTab === 'sales') {
            renderSalesHistory();
        } else if (targetTab === 'analytics') {
            renderAnalytics();
        } else if (targetTab === 'debts') {
            renderDebtsTable();
        }

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // =========================================================================
    // RENDER ALL DATA
    // =========================================================================
    function renderAll() {
        updateBrandAndSettingsUI();
        renderDashboard();
        renderSalesChart();
        renderPOSCatalog();
        renderPOSCart();
        renderInventoryTable();
        renderSalesHistory();
        renderAnalytics();
        renderDebtsTable();
    }

    function updateBrandAndSettingsUI() {
        const name = state.settings.shopName || "ShopMaster";
        const dName = document.getElementById('displayShopName');
        if (dName) dName.textContent = name;
        const mName = document.getElementById('mobileShopName');
        if (mName) mName.textContent = name;

        const sName = document.getElementById('settingShopName');
        if (sName) sName.value = name;
        const sCurr = document.getElementById('settingCurrency');
        if (sCurr) sCurr.value = state.settings.currency || "so'm";
        const sLow = document.getElementById('settingLowStockThreshold');
        if (sLow) sLow.value = state.settings.lowStockThreshold || 5;

        const sSound = document.getElementById('settingSoundToggle');
        if (sSound) sSound.checked = state.settings.soundEnabled !== false;
        const sConf = document.getElementById('settingConfettiToggle');
        if (sConf) sConf.checked = state.settings.confettiEnabled !== false;
    }

    // =========================================================================
    // TAB 1: DASHBOARD
    // =========================================================================
    function renderDashboard() {
        let totalRevenue = 0;
        let totalProfit = 0;
        let totalSalesCount = state.sales.length;
        let totalStockUnits = 0;
        let totalStockWorth = 0;

        state.sales.forEach(sale => {
            totalRevenue += sale.total;
            totalProfit += sale.profit || 0;
        });

        state.products.forEach(p => {
            totalStockUnits += Number(p.stock) || 0;
            totalStockWorth += (Number(p.cost) || 0) * (Number(p.stock) || 0);
        });

        const revEl = document.getElementById('statRevenue');
        if (revEl) revEl.textContent = formatCurrency(totalRevenue);

        const profEl = document.getElementById('statProfit');
        if (profEl) profEl.textContent = formatCurrency(totalProfit);

        const itemsEl = document.getElementById('statItemsCount');
        if (itemsEl) itemsEl.textContent = `${totalStockUnits.toLocaleString()} ${i18n[state.currentLang].unit}`;

        const worthEl = document.getElementById('statStockWorth');
        if (worthEl) worthEl.textContent = `Оценка: ${formatCurrency(totalStockWorth)}`;

        const countEl = document.getElementById('statSalesCount');
        if (countEl) countEl.textContent = totalSalesCount.toLocaleString();

        const avg = totalSalesCount > 0 ? Math.round(totalRevenue / totalSalesCount) : 0;
        const avgEl = document.getElementById('statAvgCheck');
        if (avgEl) avgEl.textContent = `Средний чек: ${formatCurrency(avg)}`;

        checkLowStockAlerts();
        renderTopProducts();
        renderDashboardRecentSales();
    }

    function checkLowStockAlerts() {
        const threshold = state.settings.lowStockThreshold || 5;
        const lowProducts = state.products.filter(p => Number(p.stock) <= threshold);
        const banner = document.getElementById('lowStockAlertBanner');
        const namesEl = document.getElementById('lowStockItemsNames');

        if (lowProducts.length > 0) {
            if (banner) banner.style.display = 'flex';
            if (namesEl) {
                namesEl.innerHTML = lowProducts.map(p =>
                    `<strong>${p.name}</strong> (${p.stock} ${p.unit})`
                ).join(', ');
            }
        } else {
            if (banner) banner.style.display = 'none';
        }
    }

    function renderTopProducts() {
        const container = document.getElementById('topProductsList');
        if (!container) return;

        const productSalesMap = {};
        state.sales.forEach(sale => {
            sale.items.forEach(it => {
                if (!productSalesMap[it.name]) {
                    productSalesMap[it.name] = { name: it.name, qty: 0, sum: 0 };
                }
                productSalesMap[it.name].qty += it.qty;
                productSalesMap[it.name].sum += it.price * it.qty;
            });
        });

        const sorted = Object.values(productSalesMap).sort((a, b) => b.qty - a.qty).slice(0, 5);
        if (sorted.length === 0) {
            container.innerHTML = `
                <div class="empty-state-card" style="padding:20px;text-align:center;color:var(--text-muted);">
                    <i class="fa-solid fa-chart-column" style="font-size:24px;margin-bottom:8px;"></i>
                    <p>Нет данных о продажах</p>
                </div>`;
            return;
        }

        container.innerHTML = sorted.map((item, idx) => `
            <div class="top-product-item">
                <div class="top-product-info">
                    <span class="top-rank rank-${idx + 1}">${idx + 1}</span>
                    <div>
                        <strong style="font-size:12.5px;display:block;">${item.name}</strong>
                        <small class="text-muted">${item.qty} ${i18n[state.currentLang].unit}</small>
                    </div>
                </div>
                <strong class="text-accent" style="font-size:13px;">${formatCurrency(item.sum)}</strong>
            </div>
        `).join('');
    }

    function renderDashboardRecentSales() {
        const tbody = document.getElementById('dashboardRecentSalesBody');
        if (!tbody) return;

        const recent = [...state.sales].reverse().slice(0, 5);
        if (recent.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-4">Нет проведенных продаж</td></tr>`;
            return;
        }

        tbody.innerHTML = recent.map(sale => `
            <tr>
                <td><strong>#${sale.id}</strong></td>
                <td><small class="text-muted">${sale.time || ''} ${sale.date || ''}</small></td>
                <td>${sale.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</td>
                <td><strong class="text-accent">${formatCurrency(sale.total)}</strong></td>
                <td><span class="text-success">+${formatCurrency(sale.profit || 0)}</span></td>
                <td><span class="status-badge badge-primary">${getPaymentLabel(sale.paymentType)}</span></td>
            </tr>
        `).join('');
    }

    function getPaymentLabel(type) {
        if (type === 'Card') return 'Карта';
        if (type === 'Transfer') return 'Click / Payme';
        if (type === 'Debt') return 'В долг (Qarz)';
        return 'Наличные';
    }

    // Chart.js Area Chart
    function renderSalesChart() {
        const ctx = document.getElementById('salesChart');
        if (!ctx || typeof Chart === 'undefined') return;

        // Group last 7 days
        const days = [];
        const revData = [];
        const profData = [];

        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
            days.push(dateStr);

            let dayRev = 0;
            let dayProf = 0;
            state.sales.forEach(sale => {
                if (sale.date === dateStr || (sale.timestamp && new Date(sale.timestamp).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' }) === dateStr)) {
                    dayRev += sale.total;
                    dayProf += sale.profit || 0;
                }
            });
            revData.push(dayRev);
            profData.push(dayProf);
        }

        if (salesChartInstance) salesChartInstance.destroy();

        salesChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    {
                        label: 'Выручка',
                        data: revData,
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.12)',
                        fill: true,
                        tension: 0.35,
                        borderWidth: 2.5,
                        pointRadius: 4,
                        pointBackgroundColor: '#3B82F6'
                    },
                    {
                        label: 'Чистая прибыль',
                        data: profData,
                        borderColor: '#10B981',
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        fill: true,
                        tension: 0.35,
                        borderWidth: 2.5,
                        pointRadius: 4,
                        pointBackgroundColor: '#10B981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: { color: '#94A3B8', font: { family: 'Plus Jakarta Sans', size: 12 } }
                    }
                },
                scales: {
                    x: {
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#94A3B8' }
                    },
                    y: {
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#94A3B8' }
                    }
                }
            }
        });
    }

    // =========================================================================
    // TAB 2: POS CASH REGISTER
    // =========================================================================
    let currentPOSCategory = 'all';

    function renderPOSCatalog() {
        const grid = document.getElementById('posProductsGrid');
        if (!grid) return;

        const chipsBox = document.getElementById('posCategoryChips');
        const searchInput = document.getElementById('posSearchInput');
        const query = (searchInput ? searchInput.value : '').toLowerCase().trim();

        // Extract Categories
        const categories = Array.from(new Set(state.products.map(p => p.category || "Общее"))).filter(Boolean);
        if (chipsBox) {
            chipsBox.innerHTML = `
                <button class="chip ${currentPOSCategory === 'all' ? 'active' : ''}" data-cat="all">
                    ${i18n[state.currentLang].allCategories}
                </button>
                ${categories.map(c => `
                    <button class="chip ${currentPOSCategory === c ? 'active' : ''}" data-cat="${c}">
                        ${c}
                    </button>
                `).join('')}
            `;
        }

        // Filter products
        const filtered = state.products.filter(p => {
            const matchesCat = currentPOSCategory === 'all' || p.category === currentPOSCategory;
            const matchesQuery = !query ||
                p.name.toLowerCase().includes(query) ||
                (p.barcode && p.barcode.toLowerCase().includes(query));
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">
                    <i class="fa-solid fa-box-open" style="font-size:32px;margin-bottom:10px;"></i>
                    <p>Товары не найдены</p>
                </div>`;
            return;
        }

        // Icon picker helper by category
        const getCatIcon = (cat) => {
            const c = (cat || '').toLowerCase();
            if (c.includes('одежд') || c.includes('киим')) return 'fa-shirt';
            if (c.includes('обув') || c.includes('пой')) return 'fa-shoe-prints';
            if (c.includes('продукт') || c.includes('озиқ')) return 'fa-apple-whole';
            if (c.includes('напит') || c.includes('ичим')) return 'fa-bottle-water';
            if (c.includes('электр') || c.includes('тех')) return 'fa-headphones';
            if (c.includes('посуд')) return 'fa-mug-hot';
            return 'fa-box';
        };

        grid.innerHTML = filtered.map(p => {
            const stock = Number(p.stock) || 0;
            let stockClass = '';
            let stockText = `${stock} ${p.unit}`;
            if (stock <= 0) {
                stockClass = 'out';
                stockText = '0';
            } else if (stock <= 5) {
                stockClass = 'low';
            }

            return `
                <div class="product-pos-card" data-product-id="${p.id}">
                    <div class="product-card-top">
                        <span class="product-category-tag">${p.category || 'Товар'}</span>
                        <span class="product-stock-pill ${stockClass}">${stockText}</span>
                    </div>
                    <div class="product-icon-wrap">
                        <i class="fa-solid ${getCatIcon(p.category)}"></i>
                    </div>
                    <h4 class="product-name" title="${p.name}">${p.name}</h4>
                    <div class="product-price">${formatCurrency(p.price)}</div>
                </div>
            `;
        }).join('');
    }

    function addToCart(product) {
        if (!product) return;
        if (product.stock <= 0) {
            alert('Товара нет в наличии!');
            return;
        }

        const existing = state.cart.find(it => it.id === product.id);
        if (existing) {
            if (existing.qty + 1 > product.stock) {
                alert(`Нельзя добавить больше, на складе всего ${product.stock} ${product.unit}`);
                return;
            }
            existing.qty += 1;
        } else {
            state.cart.push({
                id: product.id,
                name: product.name,
                price: Number(product.price),
                cost: Number(product.cost),
                unit: product.unit,
                stock: Number(product.stock),
                qty: 1
            });
        }

        playScannerBeep();
        renderPOSCart();
    }

    function renderPOSCart() {
        const list = document.getElementById('cartItemsList');
        const countBadge = document.getElementById('cartCountBadge');
        const mobileDot = document.getElementById('mobileCartDot');
        const itemCountEl = document.getElementById('cartItemCount');
        const totalDisplay = document.getElementById('cartTotalDisplay');
        const checkoutBtn = document.getElementById('checkoutBtn');

        const totalItemsCount = state.cart.reduce((sum, it) => sum + it.qty, 0);

        if (countBadge) {
            countBadge.textContent = totalItemsCount;
            countBadge.style.display = totalItemsCount > 0 ? 'inline-block' : 'none';
        }
        if (mobileDot) {
            mobileDot.style.display = totalItemsCount > 0 ? 'block' : 'none';
        }
        if (itemCountEl) {
            itemCountEl.textContent = `${totalItemsCount} ${i18n[state.currentLang].unit}`;
        }

        if (state.cart.length === 0) {
            if (list) {
                list.innerHTML = `
                    <div class="empty-cart-state">
                        <div class="empty-icon-wrap">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </div>
                        <p>${i18n[state.currentLang].cartEmpty}</p>
                        <small class="text-muted">${i18n[state.currentLang].cartEmptySub}</small>
                    </div>`;
            }
            if (totalDisplay) totalDisplay.textContent = formatCurrency(0);
            if (checkoutBtn) checkoutBtn.disabled = true;
            updateCashChange(0);
            return;
        }

        if (checkoutBtn) checkoutBtn.disabled = false;

        if (list) {
            list.innerHTML = state.cart.map((item, idx) => `
                <div class="cart-item-card">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${formatCurrency(item.price)} × ${item.qty} = <strong>${formatCurrency(item.price * item.qty)}</strong></div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="window.updateCartQty(${idx}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="window.updateCartQty(${idx}, 1)">+</button>
                    </div>
                </div>
            `).join('');
        }

        // Calculate Subtotal & Discount
        const subtotal = state.cart.reduce((sum, it) => sum + (it.price * it.qty), 0);
        const discInput = document.getElementById('cartDiscountInput');
        const discPercent = discInput ? Math.min(100, Math.max(0, Number(discInput.value) || 0)) : 0;
        const discountAmount = Math.round(subtotal * (discPercent / 100));
        const finalTotal = Math.max(0, subtotal - discountAmount);

        if (totalDisplay) totalDisplay.textContent = formatCurrency(finalTotal);
        updateCashChange(finalTotal);
    }

    window.updateCartQty = function (idx, change) {
        if (!state.cart[idx]) return;
        const item = state.cart[idx];
        const newQty = item.qty + change;

        if (newQty <= 0) {
            state.cart.splice(idx, 1);
        } else {
            if (newQty > item.stock) {
                alert(`На складе всего ${item.stock} ${item.unit}`);
                return;
            }
            item.qty = newQty;
        }
        renderPOSCart();
    };

    function updateCashChange(total) {
        const cashInput = document.getElementById('cashReceivedInput');
        const changeDisplay = document.getElementById('changeDisplay');
        if (!cashInput || !changeDisplay) return;

        const received = Number(cashInput.value) || 0;
        if (received <= 0 || total <= 0) {
            changeDisplay.textContent = `Сдача: 0 ${state.settings.currency}`;
            return;
        }
        const change = received - total;
        if (change >= 0) {
            changeDisplay.textContent = `Сдача: ${formatCurrency(change)}`;
            changeDisplay.className = 'change-display text-accent';
        } else {
            changeDisplay.textContent = `Не хватает: ${formatCurrency(Math.abs(change))}`;
            changeDisplay.className = 'change-display text-danger';
        }
    }

    // CHECKOUT PROCESS
    function processCheckout() {
        if (state.cart.length === 0) return;

        const subtotal = state.cart.reduce((sum, it) => sum + (it.price * it.qty), 0);
        const discInput = document.getElementById('cartDiscountInput');
        const discPercent = discInput ? Math.min(100, Math.max(0, Number(discInput.value) || 0)) : 0;
        const discountAmount = Math.round(subtotal * (discPercent / 100));
        const finalTotal = Math.max(0, subtotal - discountAmount);

        const paymentRadio = document.querySelector('input[name="paymentType"]:checked');
        const paymentType = paymentRadio ? paymentRadio.value : 'Cash';

        // Check if Debt payment
        let debtorName = "";
        let debtorPhone = "";
        if (paymentType === 'Debt') {
            const nameEl = document.getElementById('debtCustomerName');
            const phoneEl = document.getElementById('debtCustomerPhone');
            debtorName = (nameEl ? nameEl.value : '').trim();
            debtorPhone = (phoneEl ? phoneEl.value : '').trim();
            if (!debtorName) {
                alert('Пожалуйста, укажите имя клиента для записи в книгу долгов!');
                if (nameEl) nameEl.focus();
                return;
            }
        }

        // Deduct inventory
        let totalCost = 0;
        state.cart.forEach(cartItem => {
            const prod = state.products.find(p => p.id === cartItem.id);
            if (prod) {
                prod.stock = Math.max(0, prod.stock - cartItem.qty);
            }
            totalCost += (cartItem.cost * cartItem.qty);
        });

        const netProfit = finalTotal - totalCost;
        const now = new Date();
        const dateStr = now.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const timeStr = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

        const saleRecord = {
            id: Date.now().toString().slice(-6),
            timestamp: Date.now(),
            date: dateStr,
            time: timeStr,
            items: [...state.cart],
            subtotal: subtotal,
            discount: discountAmount,
            discountPercent: discPercent,
            total: finalTotal,
            profit: netProfit,
            paymentType: paymentType,
            customerName: debtorName,
            customerPhone: debtorPhone
        };

        state.sales.push(saleRecord);

        // Record debt if applicable
        if (paymentType === 'Debt') {
            state.debts.push({
                id: Date.now(),
                saleId: saleRecord.id,
                customerName: debtorName,
                customerPhone: debtorPhone,
                amount: finalTotal,
                date: dateStr,
                time: timeStr,
                itemsSummary: state.cart.map(i => `${i.name} (x${i.qty})`).join(', '),
                status: 'unpaid'
            });
            saveDebts();
        }

        saveProducts();
        saveSales();

        // Play sounds & trigger celebratory fireworks!
        playCheckoutChime();
        if (typeof confetti === 'function' && state.settings.confettiEnabled !== false) {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        // Reset cart
        state.cart = [];
        if (discInput) discInput.value = 0;
        const cashInput = document.getElementById('cashReceivedInput');
        if (cashInput) cashInput.value = '';

        renderAll();
        renderReceiptModal(saleRecord);
    }

    // =========================================================================
    // RECEIPT MODAL & PRINTING
    // =========================================================================
    let currentReceiptSale = null;

    function renderReceiptModal(sale) {
        currentReceiptSale = sale;
        const modal = document.getElementById('receiptModal');
        const paper = document.getElementById('receiptPaper');
        if (!modal || !paper) return;

        const shopName = state.settings.shopName || "ShopMaster";
        const currency = state.settings.currency || "so'm";

        paper.innerHTML = `
            <div class="receipt-logo">${shopName.toUpperCase()}</div>
            <div class="receipt-sublogo">УЧЕТ И КАССОВЫЙ ЧЕК</div>
            <div class="receipt-header-info">
                Чек №: <strong>#${sale.id}</strong><br>
                Дата: ${sale.date} ${sale.time}<br>
                Оплата: <strong>${getPaymentLabel(sale.paymentType)}</strong>
                ${sale.customerName ? `<br>Клиент: <strong>${sale.customerName}</strong> (${sale.customerPhone || ''})` : ''}
            </div>
            <div class="receipt-dashed"></div>
            ${sale.items.map(it => `
                <div class="receipt-row">
                    <span>${it.name} (x${it.qty})</span>
                    <span>${(it.price * it.qty).toLocaleString()} ${currency}</span>
                </div>
            `).join('')}
            <div class="receipt-dashed"></div>
            ${sale.discount > 0 ? `
                <div class="receipt-row">
                    <span>Скидка (${sale.discountPercent}%):</span>
                    <span>-${sale.discount.toLocaleString()} ${currency}</span>
                </div>
            ` : ''}
            <div class="receipt-status-banner">
                ИТОГО: ${sale.total.toLocaleString()} ${currency}
            </div>
            <div class="receipt-footer-thanks">
                СПАСИБО ЗА ПОКУПКУ!<br>
                ЖДЁМ ВАС СНОВА
            </div>
        `;

        modal.classList.add('active');
    }

    // =========================================================================
    // TAB 3: INVENTORY TABLE
    // =========================================================================
    function renderInventoryTable() {
        const tbody = document.getElementById('inventoryTableBody');
        if (!tbody) return;

        const query = (document.getElementById('invSearchInput')?.value || '').toLowerCase().trim();
        const catFilter = document.getElementById('invCategoryFilter')?.value || 'all';
        const stockFilter = document.getElementById('invStockFilter')?.value || 'all';

        // Populate Category Filter dropdown
        const catSelect = document.getElementById('invCategoryFilter');
        if (catSelect) {
            const categories = Array.from(new Set(state.products.map(p => p.category || "Общее"))).filter(Boolean);
            const cur = catSelect.value;
            catSelect.innerHTML = `<option value="all">${i18n[state.currentLang].allCategories}</option>` +
                categories.map(c => `<option value="${c}" ${cur === c ? 'selected' : ''}>${c}</option>`).join('');
        }

        const filtered = state.products.filter(p => {
            const matchesQuery = !query ||
                p.name.toLowerCase().includes(query) ||
                (p.barcode && p.barcode.toLowerCase().includes(query)) ||
                (p.category && p.category.toLowerCase().includes(query));
            const matchesCat = catFilter === 'all' || p.category === catFilter;
            let matchesStock = true;
            if (stockFilter === 'in') matchesStock = p.stock > 5;
            if (stockFilter === 'low') matchesStock = p.stock > 0 && p.stock <= 5;
            if (stockFilter === 'out') matchesStock = p.stock <= 0;
            return matchesQuery && matchesCat && matchesStock;
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted py-4">Товары не найдены</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(p => {
            const margin = p.cost > 0 ? Math.round(((p.price - p.cost) / p.cost) * 100) : 100;
            let statusBadge = '<span class="status-badge badge-success">В наличии</span>';
            if (p.stock <= 0) {
                statusBadge = '<span class="status-badge badge-danger">Нет</span>';
            } else if (p.stock <= (state.settings.lowStockThreshold || 5)) {
                statusBadge = '<span class="status-badge badge-warning">Мало</span>';
            }

            return `
                <tr>
                    <td><strong>${p.name}</strong></td>
                    <td><span class="status-badge badge-primary">${p.category || '—'}</span></td>
                    <td><code style="font-family:'Space Mono';font-size:11.5px;">${p.barcode || '—'}</code></td>
                    <td>${formatCurrency(p.cost)}</td>
                    <td><strong class="text-accent">${formatCurrency(p.price)}</strong></td>
                    <td><span class="text-success">+${margin}%</span></td>
                    <td><strong>${p.stock}</strong> ${p.unit}</td>
                    <td>${statusBadge}</td>
                    <td>
                        <div class="d-flex gap-2">
                            <button class="btn btn-sm btn-outline-primary" onclick="window.quickAddStock(${p.id}, 5)" title="+5 шт">+5</button>
                            <button class="btn btn-sm btn-outline-info" onclick="window.printPriceTag(${p.id})" title="Ценник и штрихкод"><i class="fa-solid fa-barcode"></i></button>
                            <button class="btn btn-sm btn-ghost" onclick="window.editProduct(${p.id})" title="Редактировать"><i class="fa-solid fa-pen"></i></button>
                            <button class="btn btn-sm btn-ghost text-danger" onclick="window.deleteProduct(${p.id})" title="Удалить"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    window.quickAddStock = function (id, qty) {
        const prod = state.products.find(p => p.id === id);
        if (prod) {
            prod.stock += qty;
            saveProducts();
            renderAll();
            playScannerBeep();
        }
    };

    window.editProduct = function (id) {
        const prod = state.products.find(p => p.id === id);
        if (!prod) return;

        document.getElementById('productId').value = prod.id;
        document.getElementById('prodName').value = prod.name;
        document.getElementById('prodCategory').value = prod.category || '';
        document.getElementById('prodBarcode').value = prod.barcode || '';
        document.getElementById('prodCost').value = prod.cost;
        document.getElementById('prodPrice').value = prod.price;
        document.getElementById('prodStock').value = prod.stock;
        document.getElementById('prodUnit').value = prod.unit || 'шт';

        document.getElementById('productModalTitle').innerHTML = `<i class="fa-solid fa-pen"></i> ${i18n[state.currentLang].modalEditTitle}`;
        document.getElementById('productModal').classList.add('active');
    };

    window.deleteProduct = function (id) {
        if (!confirm('Удалить этот товар из базы?')) return;
        state.products = state.products.filter(p => p.id !== id);
        saveProducts();
        renderAll();
    };

    // =========================================================================
    // TAB 4: SALES HISTORY
    // =========================================================================
    function renderSalesHistory() {
        const tbody = document.getElementById('salesTableBody');
        if (!tbody) return;

        const query = (document.getElementById('salesSearchInput')?.value || '').toLowerCase().trim();

        const filtered = [...state.sales].reverse().filter(s => {
            if (!query) return true;
            return s.id.includes(query) ||
                s.items.some(i => i.name.toLowerCase().includes(query)) ||
                (s.customerName && s.customerName.toLowerCase().includes(query));
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-4">История продаж пуста</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(s => `
            <tr>
                <td><strong>#${s.id}</strong></td>
                <td><small class="text-muted">${s.date} ${s.time}</small></td>
                <td>${s.items.map(i => `${i.name} (x${i.qty})`).join(', ')}</td>
                <td><strong class="text-accent">${formatCurrency(s.total)}</strong></td>
                <td><span class="text-success">+${formatCurrency(s.profit || 0)}</span></td>
                <td><span class="status-badge badge-primary">${getPaymentLabel(s.paymentType)}</span></td>
                <td>
                    <div class="d-flex gap-2">
                        <button class="btn btn-sm btn-outline-info" onclick="window.viewReceipt('${s.id}')"><i class="fa-solid fa-receipt"></i> Чек</button>
                        <button class="btn btn-sm btn-ghost text-danger" onclick="window.refundSale('${s.id}')" title="Возврат"><i class="fa-solid fa-rotate-left"></i></button>
                    </div>
                </td>
            </tr>
        `).join('');
    }

    window.viewReceipt = function (saleId) {
        const sale = state.sales.find(s => s.id === saleId);
        if (sale) renderReceiptModal(sale);
    };

    window.refundSale = function (saleId) {
        if (!confirm(`${i18n[state.currentLang].confirmRefund}${saleId}?`)) return;
        const idx = state.sales.findIndex(s => s.id === saleId);
        if (idx === -1) return;

        const sale = state.sales[idx];
        sale.items.forEach(it => {
            const prod = state.products.find(p => p.id === it.id);
            if (prod) prod.stock += it.qty;
        });

        state.sales.splice(idx, 1);
        saveProducts();
        saveSales();
        renderAll();
        alert(i18n[state.currentLang].saleRefunded);
    };

    // =========================================================================
    // TAB 5: FINANCIAL ANALYTICS (Charts & KPIs)
    // =========================================================================
    function renderAnalytics() {
        let totalRev = 0;
        let totalProfit = 0;
        let totalCost = 0;
        let totalSalesCount = state.sales.length;
        let potentialRev = 0;
        let warehouseCost = 0;

        state.sales.forEach(s => {
            totalRev += s.total;
            totalProfit += s.profit || 0;
            totalCost += (s.subtotal - (s.profit || 0));
        });

        state.products.forEach(p => {
            warehouseCost += p.cost * p.stock;
            potentialRev += p.price * p.stock;
        });

        const marginRoi = totalRev > 0 ? Math.round((totalProfit / totalRev) * 100) : 0;
        const avgCheck = totalSalesCount > 0 ? Math.round(totalRev / totalSalesCount) : 0;

        const elMargin = document.getElementById('analyticsMarginPercent');
        if (elMargin) elMargin.textContent = `${marginRoi}%`;

        const elAvg = document.getElementById('analyticsAvgCheck');
        if (elAvg) elAvg.textContent = formatCurrency(avgCheck);

        const elCost = document.getElementById('analyticsInventoryCost');
        if (elCost) elCost.textContent = formatCurrency(warehouseCost);

        const elPot = document.getElementById('analyticsPotentialRevenue');
        if (elPot) elPot.textContent = formatCurrency(potentialRev);

        renderAnalyticsCharts();
        renderAnalyticsCategoryTable();
    }

    function renderAnalyticsCharts() {
        if (typeof Chart === 'undefined') return;

        // 1. Dynamic Bar/Line Chart
        const ctxRev = document.getElementById('analyticsRevenueChart');
        if (ctxRev) {
            const days = [];
            const revs = [];
            const profs = [];
            for (let i = 13; i >= 0; i--) {
                const d = new Date();
                d.setDate(d.getDate() - i);
                const ds = d.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
                days.push(ds);
                let r = 0, p = 0;
                state.sales.forEach(s => {
                    if (s.date === ds) { r += s.total; p += s.profit || 0; }
                });
                revs.push(r);
                profs.push(p);
            }

            if (analyticsRevenueChartInstance) analyticsRevenueChartInstance.destroy();

            analyticsRevenueChartInstance = new Chart(ctxRev, {
                type: 'bar',
                data: {
                    labels: days,
                    datasets: [
                        { label: 'Выручка', data: revs, backgroundColor: 'rgba(59, 130, 246, 0.75)', borderRadius: 6 },
                        { label: 'Прибыль', data: profs, backgroundColor: 'rgba(16, 185, 129, 0.75)', borderRadius: 6 }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8' } },
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8' } }
                    }
                }
            });
        }

        // 2. Category Doughnut Chart
        const ctxCat = document.getElementById('analyticsCategoryChart');
        if (ctxCat) {
            const catMap = {};
            state.sales.forEach(s => {
                s.items.forEach(it => {
                    const prod = state.products.find(p => p.id === it.id);
                    const cat = (prod ? prod.category : 'Общее') || 'Общее';
                    catMap[cat] = (catMap[cat] || 0) + (it.price * it.qty);
                });
            });

            const labels = Object.keys(catMap);
            const data = Object.values(catMap);

            if (analyticsCategoryChartInstance) analyticsCategoryChartInstance.destroy();

            if (labels.length > 0) {
                analyticsCategoryChartInstance = new Chart(ctxCat, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [{
                            data: data,
                            backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444', '#06B6D4', '#EC4899']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { position: 'bottom', labels: { color: '#94A3B8' } } }
                    }
                });
            }
        }
    }

    function renderAnalyticsCategoryTable() {
        const tbody = document.getElementById('analyticsCategoryTableBody');
        if (!tbody) return;

        const catData = {};
        let totalRev = 0;

        state.sales.forEach(s => {
            s.items.forEach(it => {
                const prod = state.products.find(p => p.id === it.id);
                const cat = (prod ? prod.category : 'Общее') || 'Общее';
                if (!catData[cat]) catData[cat] = { name: cat, qty: 0, rev: 0, profit: 0 };
                const itemRev = it.price * it.qty;
                const itemProfit = itemRev - (it.cost * it.qty);
                catData[cat].qty += it.qty;
                catData[cat].rev += itemRev;
                catData[cat].profit += itemProfit;
                totalRev += itemRev;
            });
        });

        const list = Object.values(catData).sort((a, b) => b.rev - a.rev);
        if (list.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="text-center text-muted py-4">Нет данных для отчета</td></tr>`;
            return;
        }

        tbody.innerHTML = list.map(c => {
            const share = totalRev > 0 ? Math.round((c.rev / totalRev) * 100) : 0;
            return `
                <tr>
                    <td><strong>${c.name}</strong></td>
                    <td>${c.qty} ${i18n[state.currentLang].unit}</td>
                    <td><strong>${formatCurrency(c.rev)}</strong></td>
                    <td><span class="text-success">+${formatCurrency(c.profit)}</span></td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <div style="flex-grow:1;height:6px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
                                <div style="width:${share}%;height:100%;background:var(--primary);"></div>
                            </div>
                            <small>${share}%</small>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    }

    // =========================================================================
    // TAB 6: CUSTOMER DEBT LEDGER (QARZ DAFTARI / ДОЛГИ)
    // =========================================================================
    function renderDebtsTable() {
        const tbody = document.getElementById('debtsTableBody');
        const badge = document.getElementById('debtsBadge');
        const totalEl = document.getElementById('totalDebtsAmount');
        const countEl = document.getElementById('totalDebtorsCount');

        const unpaidDebts = state.debts.filter(d => d.status === 'unpaid');
        const totalDebtSum = unpaidDebts.reduce((sum, d) => sum + d.amount, 0);

        if (badge) {
            badge.textContent = unpaidDebts.length;
            badge.style.display = unpaidDebts.length > 0 ? 'inline-block' : 'none';
        }
        if (totalEl) totalEl.textContent = formatCurrency(totalDebtSum);
        if (countEl) countEl.textContent = `${unpaidDebts.length} должников`;

        if (!tbody) return;

        if (unpaidDebts.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-4">Нет активных долгов. Все чеки оплачены! 🎉</td></tr>`;
            return;
        }

        tbody.innerHTML = unpaidDebts.map(d => `
            <tr>
                <td><strong>${d.customerName}</strong></td>
                <td><a href="tel:${d.customerPhone}" style="color:var(--primary);text-decoration:none;">${d.customerPhone || '—'}</a></td>
                <td><small class="text-muted">${d.date} ${d.time}</small></td>
                <td><small>${d.itemsSummary}</small></td>
                <td><strong class="text-danger">${formatCurrency(d.amount)}</strong></td>
                <td><span class="status-badge badge-warning">Не оплачен</span></td>
                <td>
                    <button class="btn btn-sm btn-outline-success" onclick="window.payOffDebt(${d.id})">
                        <i class="fa-solid fa-check"></i> Погасить долг
                    </button>
                </td>
            </tr>
        `).join('');
    }

    window.payOffDebt = function (debtId) {
        const debt = state.debts.find(d => d.id === debtId);
        if (!debt) return;
        if (!confirm(`Подтверждаете погашение долга клиентом ${debt.customerName} на сумму ${formatCurrency(debt.amount)}?`)) return;

        debt.status = 'paid';
        debt.paidDate = new Date().toLocaleDateString('ru-RU');

        saveDebts();
        playCheckoutChime();
        renderDebtsTable();
        alert(`Долг клиента ${debt.customerName} успешно погашен!`);
    };

    // =========================================================================
    // FEATURE: REAL EXCEL (.XLSX) EXPORT (SheetJS)
    // =========================================================================
    function exportInventoryExcel() {
        if (typeof XLSX === 'undefined') {
            alert('Библиотека Excel еще загружается, попробуйте через пару секунд.');
            return;
        }

        const data = state.products.map(p => {
            const margin = p.cost > 0 ? Math.round(((p.price - p.cost) / p.cost) * 100) : 0;
            return {
                "ID": p.id,
                "Наименование товара": p.name,
                "Категория": p.category || "Общее",
                "Штрихкод": p.barcode || "",
                "Цена закупки": p.cost,
                "Цена продажи": p.price,
                "Маржа (%)": margin,
                "Остаток": p.stock,
                "Единица": p.unit || "шт",
                "Статус": p.stock <= 0 ? "Нет в наличии" : (p.stock <= 5 ? "Мало" : "В наличии")
            };
        });

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Склад");

        const today = new Date().toISOString().slice(0, 10);
        XLSX.writeFile(wb, `ShopMaster_Sklad_${today}.xlsx`);
    }

    function exportSalesExcel() {
        if (typeof XLSX === 'undefined') {
            alert('Библиотека Excel еще загружается.');
            return;
        }

        const data = state.sales.map(s => ({
            "№ Чека": s.id,
            "Дата": s.date,
            "Время": s.time,
            "Товары": s.items.map(i => `${i.name} (x${i.qty})`).join('; '),
            "Позиций": s.items.length,
            "Сумма продажи": s.total,
            "Чистая прибыль": s.profit || 0,
            "Способ оплаты": getPaymentLabel(s.paymentType),
            "Клиент (Долг)": s.customerName || ""
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Продажи");

        const today = new Date().toISOString().slice(0, 10);
        XLSX.writeFile(wb, `ShopMaster_Sales_${today}.xlsx`);
    }

    // =========================================================================
    // FEATURE: PRINTABLE BARCODE & PRICE TAG GENERATOR (JsBarcode)
    // =========================================================================
    window.printPriceTag = function (id) {
        const prod = state.products.find(p => p.id === id);
        if (!prod) return;

        const modal = document.getElementById('priceTagModal');
        const shopNameEl = document.getElementById('tagShopName');
        const prodNameEl = document.getElementById('tagProductName');
        const priceEl = document.getElementById('tagProductPrice');
        const codeNumEl = document.getElementById('tagBarcodeNumber');
        const barcodeSvg = document.getElementById('tagBarcodeSvg');

        if (!modal) return;

        const barcode = prod.barcode || `2000${String(prod.id).padStart(8, '0')}`;

        if (shopNameEl) shopNameEl.textContent = state.settings.shopName || "ShopMaster";
        if (prodNameEl) prodNameEl.textContent = prod.name;
        if (priceEl) priceEl.textContent = formatCurrency(prod.price);
        if (codeNumEl) codeNumEl.textContent = barcode;

        if (typeof JsBarcode === 'function' && barcodeSvg) {
            try {
                JsBarcode(barcodeSvg, barcode, {
                    format: "CODE128",
                    lineColor: "#000000",
                    width: 2,
                    height: 50,
                    displayValue: false
                });
            } catch (e) {
                console.warn("Barcode rendering fallback", e);
            }
        }

        modal.classList.add('active');
    };

    // =========================================================================
    // FEATURE: LIVE CAMERA BARCODE SCANNER (html5-qrcode)
    // =========================================================================
    let scannerActionTarget = 'pos'; // 'pos' or 'inventory'

    function openCameraScanner(target) {
        scannerActionTarget = target || 'pos';
        const modal = document.getElementById('cameraScannerModal');
        if (!modal) return;
        modal.classList.add('active');

        if (typeof Html5Qrcode === 'undefined') {
            document.getElementById('scannerStatusText').textContent = 'Модуль камеры загружается...';
            return;
        }

        if (!html5QrScannerInstance) {
            html5QrScannerInstance = new Html5Qrcode("scannerReader");
        }

        const config = { fps: 15, qrbox: { width: 250, height: 180 } };

        html5QrScannerInstance.start(
            { facingMode: "environment" },
            config,
            (decodedText) => {
                onBarcodeScannedSuccess(decodedText);
            },
            (errorMessage) => {
                // scanning frame error — ignore
            }
        ).catch(err => {
            document.getElementById('scannerStatusText').textContent = 'Камера недоступна или доступ запрещен. Введите код вручную:';
        });
    }

    function stopCameraScanner() {
        if (html5QrScannerInstance) {
            html5QrScannerInstance.stop().then(() => {
                html5QrScannerInstance.clear();
            }).catch(e => console.warn(e));
        }
        const modal = document.getElementById('cameraScannerModal');
        if (modal) modal.classList.remove('active');
    }

    function onBarcodeScannedSuccess(code) {
        playScannerBeep();
        stopCameraScanner();

        const cleanCode = code.trim();

        if (scannerActionTarget === 'inventory') {
            const invSearch = document.getElementById('invSearchInput');
            if (invSearch) {
                invSearch.value = cleanCode;
                switchTab('inventory');
                renderInventoryTable();
            }
        } else {
            // POS Target: find product and add to cart
            const prod = state.products.find(p => p.barcode && p.barcode.trim() === cleanCode);
            if (prod) {
                switchTab('pos');
                addToCart(prod);
            } else {
                if (confirm(`Товар со штрихкодом "${cleanCode}" не найден в базе. Хотите создать его прямо сейчас?`)) {
                    switchTab('inventory');
                    openAddProductModalWithBarcode(cleanCode);
                }
            }
        }
    }

    function openAddProductModalWithBarcode(barcode) {
        document.getElementById('productForm').reset();
        document.getElementById('productId').value = '';
        document.getElementById('prodBarcode').value = barcode;
        document.getElementById('productModalTitle').innerHTML = `<i class="fa-solid fa-box"></i> ${i18n[state.currentLang].modalAddTitle}`;
        document.getElementById('productModal').classList.add('active');
    }

    // =========================================================================
    // GLOBAL EVENT LISTENERS & DELEGATION
    // =========================================================================
    function bindGlobalEvents() {
        // Delegated Tab Switching for Desktop & Mobile buttons
        document.addEventListener('click', (e) => {
            const navBtn = e.target.closest('[data-tab], [data-tab-link]');
            if (navBtn) {
                const targetTab = navBtn.getAttribute('data-tab') || navBtn.getAttribute('data-tab-link');
                if (targetTab) {
                    e.preventDefault();
                    switchTab(targetTab);
                }
            }

            // POS Product Click -> Add to Cart
            const prodCard = e.target.closest('.product-pos-card[data-product-id]');
            if (prodCard) {
                const id = Number(prodCard.getAttribute('data-product-id'));
                const prod = state.products.find(p => p.id === id);
                if (prod) addToCart(prod);
            }

            // Category Chips Click
            const chip = e.target.closest('.chip[data-cat]');
            if (chip) {
                currentPOSCategory = chip.getAttribute('data-cat');
                document.querySelectorAll('#posCategoryChips .chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                renderPOSCatalog();
            }

            // Quick Discount Buttons
            const discBtn = e.target.closest('.quick-disc-btn[data-disc]');
            if (discBtn) {
                const discVal = Number(discBtn.getAttribute('data-disc')) || 0;
                const discInput = document.getElementById('cartDiscountInput');
                if (discInput) {
                    discInput.value = discVal;
                    renderPOSCart();
                }
            }

            // Quick Cash Bill Buttons
            const billBtn = e.target.closest('.quick-bill-btn[data-bill]');
            if (billBtn) {
                const billVal = Number(billBtn.getAttribute('data-bill')) || 0;
                const cashInput = document.getElementById('cashReceivedInput');
                if (cashInput) {
                    cashInput.value = (Number(cashInput.value) || 0) + billVal;
                    const subtotal = state.cart.reduce((sum, it) => sum + (it.price * it.qty), 0);
                    const disc = Number(document.getElementById('cartDiscountInput')?.value) || 0;
                    const finalTotal = Math.max(0, subtotal - Math.round(subtotal * (disc / 100)));
                    updateCashChange(finalTotal);
                }
            }
        });

        // Theme Toggle Buttons
        const themeBtn = document.getElementById('themeToggleBtn');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                const newT = state.settings.theme === 'dark' ? 'light' : 'dark';
                state.settings.theme = newT;
                saveSettings();
                applyTheme(newT);
            });
        }
        const mThemeBtn = document.getElementById('themeToggleMobile');
        if (mThemeBtn) {
            mThemeBtn.addEventListener('click', () => {
                const newT = state.settings.theme === 'dark' ? 'light' : 'dark';
                state.settings.theme = newT;
                saveSettings();
                applyTheme(newT);
            });
        }

        // Sound Toggle Buttons
        const soundBtn = document.getElementById('soundToggleBtn');
        const mSoundBtn = document.getElementById('mobileSoundToggle');
        const updateSoundIcons = () => {
            const iconClass = state.settings.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
            const sI = document.getElementById('soundIcon');
            const mI = document.getElementById('mobileSoundIcon');
            if (sI) sI.className = iconClass;
            if (mI) mI.className = iconClass;
        };
        const toggleSound = () => {
            state.settings.soundEnabled = !state.settings.soundEnabled;
            saveSettings();
            updateSoundIcons();
            const setS = document.getElementById('settingSoundToggle');
            if (setS) setS.checked = state.settings.soundEnabled;
            if (state.settings.soundEnabled) playScannerBeep();
        };
        if (soundBtn) soundBtn.addEventListener('click', toggleSound);
        if (mSoundBtn) mSoundBtn.addEventListener('click', toggleSound);

        // Language Selectors
        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.addEventListener('change', (e) => { applyLanguage(e.target.value); renderAll(); });
        const mSelect = document.getElementById('langSelectMobile');
        if (mSelect) mSelect.addEventListener('change', (e) => { applyLanguage(e.target.value); renderAll(); });

        // Camera Scanner Openers
        const headerScanBtn = document.getElementById('openScannerBtn');
        if (headerScanBtn) headerScanBtn.addEventListener('click', () => openCameraScanner('pos'));
        const posScanBtn = document.getElementById('posScanBtn');
        if (posScanBtn) posScanBtn.addEventListener('click', () => openCameraScanner('pos'));
        const mScanCamera = document.getElementById('mobileScanCameraBtn');
        if (mScanCamera) mScanCamera.addEventListener('click', () => openCameraScanner('pos'));
        const mScanAction = document.getElementById('mobileScanBtn');
        if (mScanAction) mScanAction.addEventListener('click', () => openCameraScanner('pos'));

        // Camera Scanner Closer
        const closeScanBtn = document.getElementById('closeScannerModalBtn');
        if (closeScanBtn) closeScanBtn.addEventListener('click', stopCameraScanner);
        const closeScanFoot = document.getElementById('closeScannerFooterBtn');
        if (closeScanFoot) closeScanFoot.addEventListener('click', stopCameraScanner);

        // Manual Barcode Input
        const manualInput = document.getElementById('manualScannerInput');
        const manualSubmit = document.getElementById('manualScannerSubmitBtn');
        const handleManual = () => {
            if (manualInput && manualInput.value.trim()) {
                onBarcodeScannedSuccess(manualInput.value.trim());
                manualInput.value = '';
            }
        };
        if (manualSubmit) manualSubmit.addEventListener('click', handleManual);
        if (manualInput) manualInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleManual(); });

        // Search inputs
        const posSearch = document.getElementById('posSearchInput');
        if (posSearch) posSearch.addEventListener('input', renderPOSCatalog);
        const invSearch = document.getElementById('invSearchInput');
        if (invSearch) invSearch.addEventListener('input', renderInventoryTable);
        const salesSearch = document.getElementById('salesSearchInput');
        if (salesSearch) salesSearch.addEventListener('input', renderSalesHistory);

        // Filter selects
        const invCat = document.getElementById('invCategoryFilter');
        if (invCat) invCat.addEventListener('change', renderInventoryTable);
        const invStock = document.getElementById('invStockFilter');
        if (invStock) invStock.addEventListener('change', renderInventoryTable);

        // Cart Actions
        const clearCartBtn = document.getElementById('clearCartBtn');
        if (clearCartBtn) clearCartBtn.addEventListener('click', () => { state.cart = []; renderPOSCart(); });
        const discInput = document.getElementById('cartDiscountInput');
        if (discInput) discInput.addEventListener('input', renderPOSCart);
        const cashInput = document.getElementById('cashReceivedInput');
        if (cashInput) cashInput.addEventListener('input', () => {
            const subtotal = state.cart.reduce((sum, it) => sum + (it.price * it.qty), 0);
            const disc = Number(discInput?.value) || 0;
            const finalTotal = Math.max(0, subtotal - Math.round(subtotal * (disc / 100)));
            updateCashChange(finalTotal);
        });

        // Payment type radio buttons
        document.querySelectorAll('input[name="paymentType"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                document.querySelectorAll('.pay-option').forEach(l => l.classList.remove('active'));
                const parent = e.target.closest('.pay-option');
                if (parent) parent.classList.add('active');

                // Toggle debt customer box
                const debtBox = document.getElementById('debtCustomerBox');
                if (debtBox) {
                    debtBox.style.display = e.target.value === 'Debt' ? 'block' : 'none';
                }
            });
        });

        // Checkout Button
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) checkoutBtn.addEventListener('click', processCheckout);

        // Excel Export Buttons
        const expInvExcel = document.getElementById('exportInventoryExcelBtn');
        if (expInvExcel) expInvExcel.addEventListener('click', exportInventoryExcel);
        const expSalesExcel = document.getElementById('exportSalesExcelBtn');
        if (expSalesExcel) expSalesExcel.addEventListener('click', exportSalesExcel);

        // Clear Sales History
        const clearSalesBtn = document.getElementById('clearSalesHistoryBtn');
        if (clearSalesBtn) {
            clearSalesBtn.addEventListener('click', () => {
                if (confirm('Очистить всю историю продаж?')) {
                    state.sales = [];
                    saveSales();
                    renderAll();
                }
            });
        }

        // Receipt Modal Buttons
        const closeReceiptBtn = document.getElementById('closeReceiptModalBtn');
        if (closeReceiptBtn) {
            closeReceiptBtn.addEventListener('click', () => {
                document.getElementById('receiptModal').classList.remove('active');
            });
        }
        const printReceiptBtn = document.getElementById('printReceiptBtn');
        if (printReceiptBtn) {
            printReceiptBtn.addEventListener('click', () => {
                window.print();
            });
        }

        // Telegram & WhatsApp share
        const tgBtn = document.getElementById('shareTelegramBtn');
        if (tgBtn) {
            tgBtn.addEventListener('click', () => {
                if (!currentReceiptSale) return;
                const text = encodeURIComponent(
                    `🧾 ЧЕК #${currentReceiptSale.id} — ${state.settings.shopName}\n` +
                    `Сумма: ${formatCurrency(currentReceiptSale.total)}\n` +
                    `Товары:\n` + currentReceiptSale.items.map(i => `• ${i.name} x${i.qty}`).join('\n') +
                    `\nСпасибо за покупку!`
                );
                window.open(`https://t.me/share/url?url=&text=${text}`, '_blank');
            });
        }
        const waBtn = document.getElementById('shareWhatsAppBtn');
        if (waBtn) {
            waBtn.addEventListener('click', () => {
                if (!currentReceiptSale) return;
                const text = encodeURIComponent(
                    `🧾 ЧЕК #${currentReceiptSale.id} — ${state.settings.shopName}\n` +
                    `Сумма: ${formatCurrency(currentReceiptSale.total)}\n` +
                    `Товары:\n` + currentReceiptSale.items.map(i => `• ${i.name} x${i.qty}`).join('\n') +
                    `\nСпасибо за покупку!`
                );
                window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
            });
        }

        // Price Tag Modal Buttons
        const closePriceBtn = document.getElementById('closePriceTagModalBtn');
        const closePriceFoot = document.getElementById('closePriceTagFooterBtn');
        if (closePriceBtn) closePriceBtn.addEventListener('click', () => document.getElementById('priceTagModal').classList.remove('active'));
        if (closePriceFoot) closePriceFoot.addEventListener('click', () => document.getElementById('priceTagModal').classList.remove('active'));
        const printPriceBtn = document.getElementById('printPriceTagBtn');
        if (printPriceBtn) printPriceBtn.addEventListener('click', () => window.print());

        // Product Modal Handlers
        const quickAddBtn = document.getElementById('quickAddProductBtn');
        if (quickAddBtn) quickAddBtn.addEventListener('click', () => openAddProductModalWithBarcode(''));
        const mAddProd = document.getElementById('mobileAddProductBtn');
        if (mAddProd) mAddProd.addEventListener('click', () => openAddProductModalWithBarcode(''));
        const openAddModal = document.getElementById('openAddProductModalBtn');
        if (openAddModal) openAddModal.addEventListener('click', () => openAddProductModalWithBarcode(''));

        const closeProdBtn = document.getElementById('closeProductModalBtn');
        const cancelProdBtn = document.getElementById('cancelProductBtn');
        const hideProdModal = () => document.getElementById('productModal').classList.remove('active');
        if (closeProdBtn) closeProdBtn.addEventListener('click', hideProdModal);
        if (cancelProdBtn) cancelProdBtn.addEventListener('click', hideProdModal);

        // Generate Barcode Button
        const genBarcodeBtn = document.getElementById('genBarcodeBtn');
        if (genBarcodeBtn) {
            genBarcodeBtn.addEventListener('click', () => {
                const randCode = '478' + Math.floor(100000000 + Math.random() * 900000000);
                document.getElementById('prodBarcode').value = randCode;
            });
        }

        // Product Save Form
        const prodForm = document.getElementById('productForm');
        if (prodForm) {
            prodForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const idVal = document.getElementById('productId').value;
                const name = document.getElementById('prodName').value.trim();
                const category = document.getElementById('prodCategory').value.trim() || 'Общее';
                const barcode = document.getElementById('prodBarcode').value.trim();
                const cost = Number(document.getElementById('prodCost').value) || 0;
                const price = Number(document.getElementById('prodPrice').value) || 0;
                const stock = Number(document.getElementById('prodStock').value) || 0;
                const unit = document.getElementById('prodUnit').value || 'шт';

                if (idVal) {
                    // Update
                    const p = state.products.find(x => x.id === Number(idVal));
                    if (p) {
                        p.name = name; p.category = category; p.barcode = barcode;
                        p.cost = cost; p.price = price; p.stock = stock; p.unit = unit;
                    }
                } else {
                    // Add
                    state.products.push({
                        id: Date.now(),
                        name, category, barcode, cost, price, stock, unit
                    });
                }

                saveProducts();
                renderAll();
                hideProdModal();
                playScannerBeep();
            });
        }

        // Quick New Sale button in header
        const quickSaleBtn = document.getElementById('quickNewSaleBtn');
        if (quickSaleBtn) quickSaleBtn.addEventListener('click', () => switchTab('pos'));
        const mNewSale = document.getElementById('mobileNewSaleBtn');
        if (mNewSale) mNewSale.addEventListener('click', () => switchTab('pos'));

        // Settings Form
        const settingsForm = document.getElementById('settingsForm');
        if (settingsForm) {
            settingsForm.addEventListener('submit', (e) => {
                e.preventDefault();
                state.settings.shopName = document.getElementById('settingShopName').value.trim() || "ShopMaster";
                state.settings.currency = document.getElementById('settingCurrency').value.trim() || "so'm";
                state.settings.lowStockThreshold = Number(document.getElementById('settingLowStockThreshold').value) || 5;
                saveSettings();
                renderAll();
                alert('Настройки успешно сохранены!');
            });
        }

        // Settings Sound & Confetti Toggles
        const setSound = document.getElementById('settingSoundToggle');
        if (setSound) {
            setSound.addEventListener('change', (e) => {
                state.settings.soundEnabled = e.target.checked;
                saveSettings();
                updateSoundIcons();
            });
        }
        const setConf = document.getElementById('settingConfettiToggle');
        if (setConf) {
            setConf.addEventListener('change', (e) => {
                state.settings.confettiEnabled = e.target.checked;
                saveSettings();
            });
        }
        const testSoundBtn = document.getElementById('testSoundBtn');
        if (testSoundBtn) testSoundBtn.addEventListener('click', playCheckoutChime);

        // Backup Actions
        const expBackupBtn = document.getElementById('exportBackupBtn');
        if (expBackupBtn) expBackupBtn.addEventListener('click', exportBackupJSON);
        const impBackupInput = document.getElementById('importBackupInput');
        if (impBackupInput) impBackupInput.addEventListener('change', importBackupJSON);
        const demoDataBtn = document.getElementById('loadDemoDataBtn');
        if (demoDataBtn) {
            demoDataBtn.addEventListener('click', () => {
                if (confirm('Загрузить набор готовых демо-товаров?')) {
                    state.products = [...DEMO_PRODUCTS];
                    saveProducts();
                    renderAll();
                    alert('Демо-товары загружены!');
                }
            });
        }
        const resetAllBtn = document.getElementById('resetAllDataBtn');
        if (resetAllBtn) {
            resetAllBtn.addEventListener('click', () => {
                if (confirm(i18n[state.currentLang].confirmReset)) {
                    state.products = [];
                    state.sales = [];
                    state.debts = [];
                    state.cart = [];
                    saveProducts();
                    saveSales();
                    saveDebts();
                    renderAll();
                    alert(i18n[state.currentLang].resetDone);
                }
            });
        }
    }

    // JSON BACKUP & RESTORE
    function exportBackupJSON() {
        const backupData = {
            version: '4.0',
            exportedAt: new Date().toISOString(),
            products: state.products,
            sales: state.sales,
            debts: state.debts,
            settings: state.settings
        };
        const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ShopMaster_Backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    function importBackupJSON(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (evt) {
            try {
                const data = JSON.parse(evt.target.result);
                if (data.products && Array.isArray(data.products)) {
                    state.products = data.products;
                    state.sales = data.sales || [];
                    state.debts = data.debts || [];
                    if (data.settings) state.settings = { ...state.settings, ...data.settings };
                    saveProducts();
                    saveSales();
                    saveDebts();
                    saveSettings();
                    renderAll();
                    alert('База данных успешно восстановлена!');
                } else {
                    alert('Неверный формат файла резервной копии.');
                }
            } catch (err) {
                alert('Ошибка чтения JSON файла: ' + err.message);
            }
        };
        reader.readAsText(file);
    }

    // Launch application when DOM is ready
    document.addEventListener('DOMContentLoaded', initApp);
})();
