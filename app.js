/* ==========================================================================
   ShopMaster — Core Business Logic & Multilingual Engine (RU / UZ)
   ========================================================================== */

(function () {
    'use strict';

    const STORAGE_KEYS = {
        PRODUCTS: 'shopmaster_products_v3',
        SALES: 'shopmaster_sales_v3',
        SETTINGS: 'shopmaster_settings_v3',
        LANG: 'shopmaster_lang_v3'
    };

    // TRANSLATIONS DICTIONARY (RU & UZ)
    const i18n = {
        ru: {
            unit: "шт",
            tagline: "Учет и Продажи",
            navDashboard: "Дашборд",
            navPos: "Касса (POS)",
            navInventory: "Склад и Товары",
            navSales: "История продаж",
            navAnalytics: "Финансы и Прибыль",
            navSettings: "Настройки",
            titleDashboard: "Главный Дашборд",
            subTitleDashboard: "Обзор статистики, быстрые показатели и аналитика",
            btnNewProduct: "Новый товар",
            btnNewSale: "Новая продажа",
            statRevenueLabel: "Общая выручка (Савдо)",
            allTime: "за всё время",
            statProfitLabel: "Чистая прибыль",
            statProfitSub: "Выручка минус закупка",
            statItemsLabel: "Товаров на складе",
            statSalesCountLabel: "Проведено чеков",
            statSalesSub: "Проданных чеков",
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
            discountLabel: "Скидка:",
            totalToPayLabel: "ИТОГО К ОПЛАТЕ:",
            payCash: "Наличные",
            payCard: "Карта (Humo/Uzcard)",
            payTransfer: "Перевод (Click/Payme)",
            btnCompleteSale: "Оформить продажу",
            phSearchInv: "Искать товар по имени, артикулу, штрихкоду...",
            stockAll: "Все остатки",
            stockInStock: "В наличии",
            stockLow: "Заканчиваются (≤ 5)",
            stockOut: "Нет в наличии (0)",
            btnAddProduct: "Добавить товар",
            thProduct: "Товар",
            thCategory: "Категория",
            thCostPrice: "Цена закупки",
            thSalePrice: "Цена продажи",
            thProfitPercent: "Прибыль %",
            thStock: "Остаток",
            thStatus: "Статус",
            thActions: "Действия",
            phSearchSales: "Поиск по номеру чека или товарам...",
            btnClearHistory: "Очистить историю",
            thDate: "Дата и Время",
            thCheckSum: "Сумма чека",
            thCostSum: "Закупка",
            thActionReceipt: "Чек / Возврат",
            statCostLabel: "Расходы на закупку",
            statNetProfitLabel: "Чистая прибыль",
            statAvgProfitRate: "Средняя прибыль %",
            analyticsTableTitle: "Структура прибыли по товарам",
            thProductName: "Наименование товара",
            thSoldQty: "Продано шт.",
            thRevenue: "Выручка",
            thCost: "Закупка",
            thShare: "Доля в прибыли",
            settingsBasicTitle: "Основные настройки",
            labelShopName: "Название вашего магазина",
            labelCurrency: "Денежная единица",
            labelLowStockThreshold: "Порог предупреждения о малом остатке (шт)",
            btnSaveSettings: "Сохранить настройки",
            settingsBackupTitle: "Резервное копирование и Сброс",
            settingsBackupSub: "Вы можете экспортировать все товары, историю продаж и настройки в файл резервной копии или восстановить их при необходимости.",
            btnExportBackup: "Экспортировать бэкап (JSON)",
            btnImportBackup: "Восстановить из бэкапа",
            btnLoadDemo: "Загрузить демо-товары",
            btnResetAll: "Полный сброс базы данных",
            modalAddTitle: "Добавить товар",
            labelProdName: "Наименование товара *",
            phProdName: "Например: Джинсы Классик Blue",
            labelProdCategory: "Категория",
            phProdCategory: "Одежда",
            labelProdBarcode: "Штрихкод / Артикул",
            labelCostPrice: "Цена закупки *",
            labelSalePrice: "Цена продажи *",
            labelProdStock: "Количество на складе (шт) *",
            btnCancel: "Отмена",
            btnSaveProduct: "Сохранить товар",
            receiptModalTitle: "Кассовый Чек",
            btnPrintReceipt: "Распечатать / Сохранить",
            inStock: "В наличии",
            outOfStock: "Распродано",
            lowStock: "Мало"
        },
        uz: {
            unit: "dona",
            tagline: "Hisob va Sotuvlar",
            navDashboard: "Bosh sahifa",
            navPos: "Kassa (POS)",
            navInventory: "Ombor va Tovar",
            navSales: "Sotuvlar tarixi",
            navAnalytics: "Moliya va Foyda",
            navSettings: "Sozlamalar",
            titleDashboard: "Asosiy Bosh Sahifa",
            subTitleDashboard: "Statistika ko'rsatkichlari va tahlil",
            btnNewProduct: "Yangi mahsulot",
            btnNewSale: "Yangi sotuv",
            statRevenueLabel: "Umumiy tushum (Savdo)",
            allTime: "barcha vaqt uchun",
            statProfitLabel: "Sof foyda",
            statProfitSub: "Tushum minus kirim narxi",
            statItemsLabel: "Ombordagi mahsulotlar",
            statSalesCountLabel: "Cheklar soni",
            statSalesSub: "Sotilgan cheklar",
            lowStockAlertTitle: "Diqqat! Ba'zi mahsulotlar tugamoqda:",
            btnView: "Ko'rish",
            chartTitle: "Sotuvlar va foyda dinamikasi",
            topProductsTitle: "Eng ko'p sotilganlar",
            noSalesData: "Sotuvlar haqida ma'lumot yo'q",
            recentSalesTitle: "Oxirgi sotuvlar",
            allSalesBtn: "Barcha sotuvlar →",
            thCheckNo: "№ Chek",
            thTime: "Vaqt",
            thProducts: "Mahsulotlar",
            thSum: "Summa",
            thProfit: "Foyda",
            thPayment: "To'lov",
            noSalesYet: "Sotuvlar hali amalga oshirilmadi",
            phSearchPos: "Mahsulot nomi yoki shtrixkod bo'yicha qidiruv...",
            allCategories: "Barcha kategoriyalar",
            cartTitle: "Xaridor savatchasi",
            btnClear: "Tozalash",
            cartEmpty: "Savatcha bo'sh",
            cartEmptySub: "Chapdagi ro'yxatdan mahsulot tanlang",
            cartItemsCountLabel: "Chekdagi mahsulotlar:",
            discountLabel: "Chegirma:",
            totalToPayLabel: "JAMI TO'LOV:",
            payCash: "Naqd pul",
            payCard: "Karta (Humo/Uzcard)",
            payTransfer: "O'tkazma (Click/Payme)",
            btnCompleteSale: "Sotuvni tasdiqlash",
            phSearchInv: "Nomi, artikul, shtrixkod bo'yicha qidiruv...",
            stockAll: "Barcha qoldiqlar",
            stockInStock: "Omborda bor",
            stockLow: "Oz qoldi (≤ 5)",
            stockOut: "Tugagan (0)",
            btnAddProduct: "Mahsulot qo'shish",
            thProduct: "Mahsulot",
            thCategory: "Kategoriya",
            thCostPrice: "Keltirilgan narx (Kirim)",
            thSalePrice: "Sotish narxi",
            thProfitPercent: "Foyda %",
            thStock: "Qoldiq",
            thStatus: "Holat",
            thActions: "Amallar",
            phSearchSales: "Chek raqami yoki mahsulot bo'yicha qidiruv...",
            btnClearHistory: "Tarixni tozalash",
            thDate: "Sana va Vaqt",
            thCheckSum: "Chek summasi",
            thCostSum: "Kirim",
            thActionReceipt: "Chek / Qaytarish",
            statCostLabel: "Kirim xarajatlari",
            statNetProfitLabel: "Sof foyda",
            statAvgProfitRate: "O'rtacha foyda %",
            analyticsTableTitle: "Mahsulotlar bo'yicha foyda",
            thProductName: "Mahsulot nomi",
            thSoldQty: "Sotildi (dona)",
            thRevenue: "Tushum",
            thCost: "Kirim narxi",
            thShare: "Foydadagi ulushi",
            settingsBasicTitle: "Asosiy sozlamalar",
            labelShopName: "Do'koningiz nomi",
            labelCurrency: "Pul birligi",
            labelLowStockThreshold: "Qoldiq kamligi haqida ogohlantirish (dona)",
            btnSaveSettings: "Sozlamalarni saqlash",
            settingsBackupTitle: "Zaxira nusxasi va Tiklash",
            settingsBackupSub: "Zaxira faylini (JSON) yuklab olishingiz yoki qayta tiklashingiz mumkin.",
            btnExportBackup: "Zaxirani yuklab olish (JSON)",
            btnImportBackup: "Zaxiradan tiklash",
            btnLoadDemo: "Demo mahsulotlarni yuklash",
            btnResetAll: "Baza tozalash",
            modalAddTitle: "Mahsulot qo'shish",
            labelProdName: "Mahsulot nomi *",
            phProdName: "Masalan: Erkaklar jinsi shimm",
            labelProdCategory: "Kategoriya",
            phProdCategory: "Kiyim",
            labelProdBarcode: "Shtrixkod / Artikul",
            labelCostPrice: "Keltirilgan narxi (Kirim) *",
            labelSalePrice: "Sotish narxi *",
            labelProdStock: "Ombordagi soni (dona) *",
            btnCancel: "Bekor qilish",
            btnSaveProduct: "Saqlash",
            receiptModalTitle: "Kassa Cheki",
            btnPrintReceipt: "Chop etish / Saqlash",
            inStock: "Omborda bor",
            outOfStock: "Tugagan",
            lowStock: "Oz qoldi"
        }
    };

    // CATEGORY TRANSLATIONS MAP
    const categoryMap = {
        'Kiyim': { ru: 'Одежда', uz: 'Kiyim' },
        'Одежда': { ru: 'Одежда', uz: 'Kiyim' },
        'Poyabzal': { ru: 'Обувь', uz: 'Poyabzal' },
        'Обувь': { ru: 'Обувь', uz: 'Poyabzal' },
        'Elektronika': { ru: 'Электроника', uz: 'Elektronika' },
        'Электроника': { ru: 'Электроника', uz: 'Elektronika' },
        'Oziq-ovqat': { ru: 'Продукты', uz: 'Oziq-ovqat' },
        'Продукты': { ru: 'Продукты', uz: 'Oziq-ovqat' },
        'Aksessuarlar': { ru: 'Аксессуары', uz: 'Aksessuarlar' },
        'Аксессуары': { ru: 'Аксессуары', uz: 'Aksessuarlar' }
    };

    // DEMO PRODUCTS WITH DUAL NAMES
    const INITIAL_DEMO_PRODUCTS = [
        { id: 'prod_1', name_ru: 'Мужская рубашка Cotton', name_uz: 'Erkaklar ko\'ylagi (Cotton)', category: 'Одежда', barcode: '460123456701', costPrice: 45000, salePrice: 120000, stock: 15, createdAt: Date.now() },
        { id: 'prod_2', name_ru: 'Кроссовки Run Pro 500', name_uz: 'Krossovka Run Pro 500', category: 'Обувь', barcode: '460123456702', costPrice: 220000, salePrice: 490000, stock: 8, createdAt: Date.now() },
        { id: 'prod_3', name_ru: 'Беспроводные наушники AirPod', name_uz: 'Simsiz Quloqchin AirPod', category: 'Электроника', barcode: '460123456703', costPrice: 150000, salePrice: 350000, stock: 4, createdAt: Date.now() },
        { id: 'prod_4', name_ru: 'Кофе зерновой 1кг', name_uz: 'Kofe Dosh 1kg', category: 'Продукты', barcode: '460123456704', costPrice: 60000, salePrice: 140000, stock: 20, createdAt: Date.now() },
        { id: 'prod_5', name_ru: 'Чехол силиконовый Silicone Case', name_uz: 'Gʻilof Silicone Case', category: 'Аксессуары', barcode: '460123456705', costPrice: 8000, salePrice: 45000, stock: 3, createdAt: Date.now() }
    ];

    let state = {
        products: [],
        sales: [],
        settings: {
            shopName: 'Мой Магазин',
            currency: 'so\'m',
            lowStockThreshold: 5,
            theme: 'dark'
        },
        currentLang: 'ru',
        cart: [],
        chartInstance: null
    };

    function initApp() {
        loadStateFromStorage();
        applyTheme(state.settings.theme);
        applyLanguage(state.currentLang);
        updateDateDisplay();
        bindEvents();
        renderAll();
    }

    function loadStateFromStorage() {
        try {
            const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
            const storedSales = localStorage.getItem(STORAGE_KEYS.SALES);
            const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
            const storedLang = localStorage.getItem(STORAGE_KEYS.LANG);

            if (storedLang) state.currentLang = storedLang;

            if (storedProducts) {
                state.products = JSON.parse(storedProducts);
            } else {
                state.products = [...INITIAL_DEMO_PRODUCTS];
                saveProducts();
            }

            if (storedSales) {
                state.sales = JSON.parse(storedSales);
            } else {
                state.sales = [];
                saveSales();
            }

            if (storedSettings) {
                state.settings = { ...state.settings, ...JSON.parse(storedSettings) };
            } else {
                saveSettings();
            }
        } catch (err) {
            console.error('Error loading data:', err);
            state.products = [...INITIAL_DEMO_PRODUCTS];
            state.sales = [];
        }
    }

    function saveProducts() { localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products)); }
    function saveSales() { localStorage.setItem(STORAGE_KEYS.SALES, JSON.stringify(state.sales)); }
    function saveSettings() { localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(state.settings)); }
    function saveLang() { localStorage.setItem(STORAGE_KEYS.LANG, state.currentLang); }

    function getProductName(p) {
        if (state.currentLang === 'uz') {
            return p.name_uz || p.name || p.name_ru || '';
        } else {
            return p.name_ru || p.name || p.name_uz || '';
        }
    }

    function getCategoryName(cat) {
        if (!cat) return '';
        if (categoryMap[cat]) {
            return categoryMap[cat][state.currentLang] || cat;
        }
        return cat;
    }

    function applyLanguage(lang) {
        state.currentLang = lang;
        saveLang();

        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = lang;

        const dict = i18n[lang] || i18n.ru;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });

        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) el.placeholder = dict[key];
        });
    }

    function formatCurrency(amount) {
        const val = Number(amount) || 0;
        return val.toLocaleString('ru-RU') + ' ' + state.settings.currency;
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const themeBtnText = document.getElementById('themeToggleText');
        const themeBtnIcon = document.querySelector('#themeToggleBtn i');
        if (themeBtnText && themeBtnIcon) {
            if (theme === 'dark') {
                themeBtnText.textContent = state.currentLang === 'uz' ? 'Tungi rejim' : 'Тёмная тема';
                themeBtnIcon.className = 'fa-solid fa-moon';
            } else {
                themeBtnText.textContent = state.currentLang === 'uz' ? 'Kunduzgi rejim' : 'Светлая тема';
                themeBtnIcon.className = 'fa-solid fa-sun';
            }
        }
    }

    function updateDateDisplay() {
        const now = new Date();
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const dateText = document.getElementById('dateText');
        if (dateText) dateText.textContent = now.toLocaleDateString(state.currentLang === 'uz' ? 'uz-UZ' : 'ru-RU', options);
    }

    function renderAll() {
        updateBrandAndSettingsUI();
        renderDashboard();
        renderPOSCatalog();
        renderPOSCart();
        renderInventoryTable();
        renderSalesHistory();
        renderAnalytics();
        checkLowStockAlerts();
    }

    function updateBrandAndSettingsUI() {
        const brandElem = document.getElementById('displayShopName');
        if (brandElem) brandElem.textContent = state.settings.shopName;

        const setShopName = document.getElementById('settingShopName');
        if (setShopName) setShopName.value = state.settings.shopName;

        const setCurr = document.getElementById('settingCurrency');
        if (setCurr) setCurr.value = state.settings.currency;

        const setLow = document.getElementById('settingLowStockThreshold');
        if (setLow) setLow.value = state.settings.lowStockThreshold;
    }

    function renderDashboard() {
        let totalRevenue = 0;
        let totalCost = 0;

        state.sales.forEach(sale => {
            totalRevenue += sale.totalAmount;
            totalCost += sale.totalCost;
        });

        const totalProfit = totalRevenue - totalCost;
        const totalItemsCount = state.products.reduce((acc, p) => acc + (p.stock || 0), 0);
        const totalInventoryValue = state.products.reduce((acc, p) => acc + ((p.stock || 0) * (p.costPrice || 0)), 0);

        const unitStr = i18n[state.currentLang].unit;

        document.getElementById('statTotalRevenue').textContent = formatCurrency(totalRevenue);
        document.getElementById('statTotalProfit').textContent = formatCurrency(totalProfit);
        document.getElementById('statTotalItems').textContent = totalItemsCount + ' ' + unitStr;
        document.getElementById('statInventoryValue').textContent = (state.currentLang === 'uz' ? 'Kirim qiymati: ' : 'Стоимость закупки: ') + formatCurrency(totalInventoryValue);
        document.getElementById('statSalesCount').textContent = state.sales.length;

        renderSalesChart();

        const tbody = document.getElementById('recentSalesTbody');
        tbody.innerHTML = '';

        if (state.sales.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">${i18n[state.currentLang].noSalesYet}</td></tr>`;
        } else {
            const recent = [...state.sales].reverse().slice(0, 5);
            recent.forEach(sale => {
                const tr = document.createElement('tr');
                const timeStr = new Date(sale.timestamp).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
                const itemsStr = sale.items.map(i => i.name + ` (${i.qty})`).join(', ');

                tr.innerHTML = `
                    <td><strong>#${sale.receiptNo}</strong></td>
                    <td>${timeStr}</td>
                    <td class="text-truncate" style="max-width: 220px;" title="${itemsStr}">${itemsStr}</td>
                    <td><strong>${formatCurrency(sale.totalAmount)}</strong></td>
                    <td class="text-accent">+${formatCurrency(sale.profit)}</td>
                    <td><span class="badge" style="background:rgba(59,130,246,0.15); color:var(--primary); padding:4px 8px; border-radius:6px;">${getPaymentLabel(sale.paymentType)}</span></td>
                `;
                tbody.appendChild(tr);
            });
        }

        const topListElem = document.getElementById('topProductsList');
        topListElem.innerHTML = '';

        const productSalesMap = {};
        state.sales.forEach(sale => {
            sale.items.forEach(item => {
                if (!productSalesMap[item.id]) {
                    productSalesMap[item.id] = { name: item.name, qty: 0, revenue: 0 };
                }
                productSalesMap[item.id].qty += item.qty;
                productSalesMap[item.id].revenue += item.total;
            });
        });

        const sortedTop = Object.values(productSalesMap).sort((a, b) => b.qty - a.qty).slice(0, 5);

        if (sortedTop.length === 0) {
            topListElem.innerHTML = `<div class="empty-state">${i18n[state.currentLang].noSalesData}</div>`;
        } else {
            sortedTop.forEach(item => {
                const div = document.createElement('div');
                div.className = 'top-prod-item d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom';
                div.style.borderBottom = '1px solid var(--border-color)';
                div.innerHTML = `
                    <div>
                        <div style="font-weight:700; font-size:14px;">${item.name}</div>
                        <div class="text-muted" style="font-size:12px;">${state.currentLang === 'uz' ? 'Sotildi' : 'Продано'}: ${item.qty} ${unitStr}</div>
                    </div>
                    <div style="font-weight:800; color:var(--accent);">${formatCurrency(item.revenue)}</div>
                `;
                topListElem.appendChild(div);
            });
        }
    }

    function renderSalesChart() {
        const ctx = document.getElementById('salesChart');
        if (!ctx) return;

        const daysMap = {};
        const now = new Date();
        for (let i = 6; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(d.getDate() - i);
            const dateStr = d.toLocaleDateString(state.currentLang === 'uz' ? 'uz-UZ' : 'ru-RU', { day: 'numeric', month: 'short' });
            daysMap[dateStr] = { revenue: 0, profit: 0 };
        }

        state.sales.forEach(s => {
            const dateStr = new Date(s.timestamp).toLocaleDateString(state.currentLang === 'uz' ? 'uz-UZ' : 'ru-RU', { day: 'numeric', month: 'short' });
            if (daysMap[dateStr]) {
                daysMap[dateStr].revenue += s.totalAmount;
                daysMap[dateStr].profit += s.profit;
            }
        });

        const labels = Object.keys(daysMap);
        const revenueData = labels.map(l => daysMap[l].revenue);
        const profitData = labels.map(l => daysMap[l].profit);

        if (state.chartInstance) {
            state.chartInstance.destroy();
        }

        if (typeof Chart !== 'undefined') {
            state.chartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: state.currentLang === 'uz' ? 'Tushum (Savdo)' : 'Выручка',
                            data: revenueData,
                            borderColor: '#3B82F6',
                            backgroundColor: 'rgba(59, 130, 246, 0.15)',
                            fill: true,
                            tension: 0.3,
                            borderWidth: 3
                        },
                        {
                            label: state.currentLang === 'uz' ? 'Sof foyda' : 'Прибыль',
                            data: profitData,
                            borderColor: '#10B981',
                            backgroundColor: 'rgba(16, 185, 129, 0.15)',
                            fill: true,
                            tension: 0.3,
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { labels: { color: '#94A3B8' } }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { color: '#94A3B8' } },
                        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94A3B8' } }
                    }
                }
            });
        }
    }

    function getPaymentLabel(type) {
        const lang = state.currentLang;
        if (type === 'Cash') return lang === 'uz' ? 'Naqd' : 'Наличные';
        if (type === 'Card') return lang === 'uz' ? 'Karta (Humo/Uzcard)' : 'Карта';
        if (type === 'Transfer') return lang === 'uz' ? 'O\'tkazma (Click)' : 'Перевод';
        return type;
    }

    function checkLowStockAlerts() {
        const threshold = state.settings.lowStockThreshold || 5;
        const lowStockProds = state.products.filter(p => p.stock <= threshold);

        const banner = document.getElementById('lowStockBanner');
        const textElem = document.getElementById('lowStockListText');
        const unitStr = i18n[state.currentLang].unit;

        if (lowStockProds.length > 0) {
            banner.style.display = 'flex';
            textElem.textContent = lowStockProds.map(p => `${getProductName(p)} (${p.stock} ${unitStr})`).join(', ');
        } else {
            banner.style.display = 'none';
        }
    }

    function renderPOSCatalog() {
        const grid = document.getElementById('posProductsGrid');
        const searchVal = (document.getElementById('posSearchInput').value || '').toLowerCase();
        const activeChip = document.querySelector('#posCategoryChips .chip.active');
        const activeCat = activeChip ? activeChip.dataset.cat : 'all';
        const unitStr = i18n[state.currentLang].unit;

        const rawCategories = Array.from(new Set(state.products.map(p => p.category || 'General')));
        const chipsScroll = document.getElementById('posCategoryChips');
        chipsScroll.innerHTML = `<button class="chip ${activeCat === 'all' ? 'active' : ''}" data-cat="all">${i18n[state.currentLang].allCategories}</button>`;

        rawCategories.forEach(cat => {
            const displayCat = getCategoryName(cat);
            const btn = document.createElement('button');
            btn.className = `chip ${activeCat === cat ? 'active' : ''}`;
            btn.dataset.cat = cat;
            btn.textContent = displayCat;
            btn.onclick = () => {
                document.querySelectorAll('#posCategoryChips .chip').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                renderPOSCatalog();
            };
            chipsScroll.appendChild(btn);
        });

        let filtered = state.products.filter(p => {
            const pName = getProductName(p).toLowerCase();
            const matchesSearch = pName.includes(searchVal) || (p.barcode && p.barcode.includes(searchVal));
            const matchesCat = (activeCat === 'all') || (p.category === activeCat);
            return matchesSearch && matchesCat;
        });

        grid.innerHTML = '';
        if (filtered.length === 0) {
            grid.innerHTML = `<div class="empty-state w-100 text-center py-5 text-muted" style="grid-column: 1/-1;">${state.currentLang === 'uz' ? 'Mahsulotlar topilmadi' : 'Товары не найдены'}</div>`;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            const isOutOfStock = p.stock <= 0;
            const pName = getProductName(p);
            card.className = `product-pos-card ${isOutOfStock ? 'out-of-stock' : ''}`;
            card.innerHTML = `
                <div class="product-name">${pName}</div>
                <div class="product-price">${formatCurrency(p.salePrice)}</div>
                <div class="product-stock-tag ${p.stock <= state.settings.lowStockThreshold ? 'text-warning' : ''}">${state.currentLang === 'uz' ? 'Qoldiq' : 'Остаток'}: ${p.stock} ${unitStr}</div>
            `;
            if (!isOutOfStock) {
                card.onclick = () => addToCart(p);
            }
            grid.appendChild(card);
        });
    }

    function addToCart(product) {
        const existing = state.cart.find(item => item.product.id === product.id);
        const unitStr = i18n[state.currentLang].unit;
        if (existing) {
            if (existing.qty < product.stock) {
                existing.qty++;
            } else {
                alert(state.currentLang === 'uz' ? `Omborda faqat ${product.stock} ${unitStr} bor.` : `На складе только ${product.stock} ${unitStr}.`);
                return;
            }
        } else {
            state.cart.push({ product: product, qty: 1 });
        }
        renderPOSCart();
    }

    function renderPOSCart() {
        const cartList = document.getElementById('cartItemsList');
        const cartBadge = document.getElementById('cartCountBadge');
        const itemCountElem = document.getElementById('cartItemCount');
        const totalDisplay = document.getElementById('cartTotalDisplay');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const discountInput = document.getElementById('cartDiscountInput');
        const unitStr = i18n[state.currentLang].unit;

        const totalQty = state.cart.reduce((acc, item) => acc + item.qty, 0);

        if (cartBadge) {
            if (totalQty > 0) {
                cartBadge.style.display = 'inline-block';
                cartBadge.textContent = totalQty;
            } else {
                cartBadge.style.display = 'none';
            }
        }

        if (state.cart.length === 0) {
            cartList.innerHTML = `
                <div class="empty-cart-state">
                    <i class="fa-solid fa-basket-shopping"></i>
                    <p>${i18n[state.currentLang].cartEmpty}</p>
                    <small class="text-muted">${i18n[state.currentLang].cartEmptySub}</small>
                </div>
            `;
            itemCountElem.textContent = '0 ' + unitStr;
            totalDisplay.textContent = formatCurrency(0);
            checkoutBtn.disabled = true;
            return;
        }

        cartList.innerHTML = '';
        let subtotal = 0;

        state.cart.forEach((item, index) => {
            const pName = getProductName(item.product);
            const itemTotal = item.product.salePrice * item.qty;
            subtotal += itemTotal;

            const div = document.createElement('div');
            div.className = 'cart-item-row';
            div.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${pName}</span>
                    <span class="cart-item-price">${formatCurrency(item.product.salePrice)} × ${item.qty} = <strong>${formatCurrency(itemTotal)}</strong></span>
                </div>
                <div class="cart-qty-ctrl">
                    <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
                </div>
            `;
            cartList.appendChild(div);
        });

        const discountPercent = Math.min(100, Math.max(0, Number(discountInput.value) || 0));
        const finalTotal = subtotal * (1 - discountPercent / 100);

        itemCountElem.textContent = totalQty + ' ' + unitStr;
        totalDisplay.textContent = formatCurrency(finalTotal);
        checkoutBtn.disabled = false;
    }

    window.updateCartQty = function (index, change) {
        const item = state.cart[index];
        const unitStr = i18n[state.currentLang].unit;
        if (!item) return;

        const newQty = item.qty + change;
        if (newQty <= 0) {
            state.cart.splice(index, 1);
        } else if (newQty > item.product.stock) {
            alert(state.currentLang === 'uz' ? `Ombordagi maksimal qoldiq: ${item.product.stock} ${unitStr}` : `Максимальный остаток на складе: ${item.product.stock} ${unitStr}`);
        } else {
            item.qty = newQty;
        }
        renderPOSCart();
    };

    function processCheckout() {
        if (state.cart.length === 0) return;

        const discountPercent = Math.min(100, Math.max(0, Number(document.getElementById('cartDiscountInput').value) || 0));
        const paymentTypeElem = document.querySelector('input[name="paymentType"]:checked');
        const paymentType = paymentTypeElem ? paymentTypeElem.value : 'Cash';

        let totalAmount = 0;
        let totalCost = 0;

        const saleItems = state.cart.map(item => {
            const p = item.product;
            const pName = getProductName(p);
            const itemTotal = p.salePrice * item.qty * (1 - discountPercent / 100);
            const itemCost = p.costPrice * item.qty;

            totalAmount += itemTotal;
            totalCost += itemCost;

            const realProd = state.products.find(prod => prod.id === p.id);
            if (realProd) {
                realProd.stock -= item.qty;
            }

            return {
                id: p.id,
                name: pName,
                qty: item.qty,
                costPrice: p.costPrice,
                salePrice: p.salePrice,
                total: itemTotal
            };
        });

        const receiptNo = 'CHK-' + Math.floor(100000 + Math.random() * 900000);
        const newSale = {
            id: 'sale_' + Date.now(),
            receiptNo: receiptNo,
            timestamp: Date.now(),
            items: saleItems,
            totalAmount: totalAmount,
            totalCost: totalCost,
            profit: totalAmount - totalCost,
            paymentType: paymentType,
            discountPercent: discountPercent
        };

        state.sales.push(newSale);
        saveProducts();
        saveSales();

        state.cart = [];
        document.getElementById('cartDiscountInput').value = 0;

        renderReceiptModal(newSale);
        renderAll();
    }

    function renderReceiptModal(sale) {
        const paper = document.getElementById('receiptPaper');
        const dateStr = new Date(sale.timestamp).toLocaleString('ru-RU');
        const isUz = state.currentLang === 'uz';

        let itemsHtml = sale.items.map(i => `
            <div class="receipt-row">
                <span>${i.name} x${i.qty}</span>
                <span>${formatCurrency(i.total)}</span>
            </div>
        `).join('');

        paper.innerHTML = `
            <div class="receipt-logo">${sale.paymentType === 'Card' ? 'HUMO / UZCARD' : 'CHECK'}</div>
            <div class="receipt-sublogo">${state.settings.shopName.toUpperCase()}</div>
            <div class="receipt-header-info">
                <div>Do'kon / Магазин: ${state.settings.shopName}</div>
                <div>Chek № ${sale.receiptNo}</div>
                <div>Sana / Date: ${dateStr}</div>
                <div>To'lov turi: ${getPaymentLabel(sale.paymentType)}</div>
            </div>

            <div class="receipt-status-banner">TASDIQLANDI</div>

            <div class="receipt-dashed"></div>
            ${itemsHtml}
            ${sale.discountPercent > 0 ? `<div class="receipt-row"><span>Chegirma:</span><span>${sale.discountPercent}%</span></div>` : ''}
            <div class="receipt-dashed"></div>

            <div class="receipt-row receipt-total-large">
                <span>MIQDOR (JAMI):</span>
                <span>${formatCurrency(sale.totalAmount)}</span>
            </div>

            <div class="receipt-dashed"></div>
            <div class="receipt-footer-thanks">
                <div>${isUz ? 'Xaridingiz uchun rahmat!' : 'Спасибо за покупку!'}</div>
                <div style="font-size:10px; font-weight:normal; margin-top:4px;">*** ShopMaster POS System ***</div>
            </div>
        `;

        document.getElementById('receiptModal').classList.add('active');
    }

    function renderInventoryTable() {
        const tbody = document.getElementById('inventoryTbody');
        const searchVal = (document.getElementById('inventorySearchInput').value || '').toLowerCase();
        const catFilter = document.getElementById('inventoryCategoryFilter').value;
        const stockFilter = document.getElementById('inventoryStockFilter').value;
        const unitStr = i18n[state.currentLang].unit;

        const rawCategories = Array.from(new Set(state.products.map(p => p.category || 'General')));
        const catSelect = document.getElementById('inventoryCategoryFilter');
        const currentCat = catSelect.value;
        catSelect.innerHTML = `<option value="all">${i18n[state.currentLang].allCategories}</option>`;
        rawCategories.forEach(c => {
            const opt = document.createElement('option');
            opt.value = c;
            opt.textContent = getCategoryName(c);
            if (c === currentCat) opt.selected = true;
            catSelect.appendChild(opt);
        });

        let filtered = state.products.filter(p => {
            const pName = getProductName(p).toLowerCase();
            const matchesSearch = pName.includes(searchVal) || (p.barcode && p.barcode.includes(searchVal));
            const matchesCat = catFilter === 'all' || p.category === catFilter;

            let matchesStock = true;
            if (stockFilter === 'in_stock') matchesStock = p.stock > 0;
            if (stockFilter === 'low') matchesStock = p.stock > 0 && p.stock <= state.settings.lowStockThreshold;
            if (stockFilter === 'out') matchesStock = p.stock <= 0;

            return matchesSearch && matchesCat && matchesStock;
        });

        tbody.innerHTML = '';
        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">${state.currentLang === 'uz' ? 'Mahsulotlar topilmadi' : 'Товары не найдены'}</td></tr>`;
            return;
        }

        filtered.forEach(p => {
            const margin = p.salePrice > 0 ? (((p.salePrice - p.costPrice) / p.salePrice) * 100).toFixed(1) : 0;
            const tr = document.createElement('tr');
            const pName = getProductName(p);
            const pCat = getCategoryName(p.category);

            let stockBadgeClass = 'text-success';
            let stockStatusText = i18n[state.currentLang].inStock;
            if (p.stock <= 0) {
                stockBadgeClass = 'text-danger';
                stockStatusText = i18n[state.currentLang].outOfStock;
            } else if (p.stock <= state.settings.lowStockThreshold) {
                stockBadgeClass = 'text-warning';
                stockStatusText = i18n[state.currentLang].lowStock;
            }

            tr.innerHTML = `
                <td>
                    <div style="font-weight:700;">${pName}</div>
                    <small class="text-muted">Art: ${p.barcode || '—'}</small>
                </td>
                <td><span class="chip" style="font-size:11px; padding:2px 8px;">${pCat || '—'}</span></td>
                <td>${formatCurrency(p.costPrice)}</td>
                <td><strong>${formatCurrency(p.salePrice)}</strong></td>
                <td><span class="text-accent" style="font-weight:700;">+${margin}%</span></td>
                <td>
                    <div class="d-flex align-items-center gap-2">
                        <strong>${p.stock} ${unitStr}</strong>
                        <button class="btn btn-sm btn-ghost" onclick="quickAddStock('${p.id}', 10)" title="+10">+10</button>
                    </div>
                </td>
                <td><span class="${stockBadgeClass}" style="font-weight:700;">${stockStatusText}</span></td>
                <td class="text-end">
                    <button class="btn btn-sm btn-ghost text-primary" onclick="editProduct('${p.id}')"><i class="fa-solid fa-pen"></i></button>
                    <button class="btn btn-sm btn-ghost text-danger" onclick="deleteProduct('${p.id}')"><i class="fa-solid fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    window.quickAddStock = function (id, qty) {
        const prod = state.products.find(p => p.id === id);
        if (prod) {
            prod.stock += qty;
            saveProducts();
            renderAll();
        }
    };

    window.editProduct = function (id) {
        const prod = state.products.find(p => p.id === id);
        if (!prod) return;

        document.getElementById('productId').value = prod.id;
        document.getElementById('prodName').value = getProductName(prod);
        document.getElementById('prodCategory').value = getCategoryName(prod.category) || '';
        document.getElementById('prodBarcode').value = prod.barcode || '';
        document.getElementById('prodCostPrice').value = prod.costPrice;
        document.getElementById('prodSalePrice').value = prod.salePrice;
        document.getElementById('prodStock').value = prod.stock;

        document.getElementById('productModalTitle').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> ' + i18n[state.currentLang].modalAddTitle;
        document.getElementById('productModal').classList.add('active');
    };

    window.deleteProduct = function (id) {
        if (confirm(state.currentLang === 'uz' ? 'Mahsulotni o\'chirmoqchimisiz?' : 'Удалить этот товар?')) {
            state.products = state.products.filter(p => p.id !== id);
            saveProducts();
            renderAll();
        }
    };

    function renderSalesHistory() {
        const tbody = document.getElementById('salesHistoryTbody');
        const searchVal = (document.getElementById('salesSearchInput').value || '').toLowerCase();
        const unitStr = i18n[state.currentLang].unit;

        let filtered = state.sales.filter(s => {
            const matchesNo = s.receiptNo.toLowerCase().includes(searchVal);
            const matchesItems = s.items.some(i => i.name.toLowerCase().includes(searchVal));
            return matchesNo || matchesItems;
        });

        tbody.innerHTML = '';
        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="8" class="text-center py-4 text-muted">${i18n[state.currentLang].noSalesYet}</td></tr>`;
            return;
        }

        [...filtered].reverse().forEach(sale => {
            const tr = document.createElement('tr');
            const dateStr = new Date(sale.timestamp).toLocaleString('ru-RU');
            const itemsList = sale.items.map(i => `${i.name} (${i.qty} ${unitStr})`).join('<br>');

            tr.innerHTML = `
                <td><strong>#${sale.receiptNo}</strong></td>
                <td><small>${dateStr}</small></td>
                <td><small>${itemsList}</small></td>
                <td><strong>${formatCurrency(sale.totalAmount)}</strong></td>
                <td class="text-muted">${formatCurrency(sale.totalCost)}</td>
                <td class="text-accent" style="font-weight:700;">+${formatCurrency(sale.profit)}</td>
                <td>${getPaymentLabel(sale.paymentType)}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-ghost" onclick="viewReceipt('${sale.id}')"><i class="fa-solid fa-receipt"></i></button>
                    <button class="btn btn-sm btn-ghost text-danger" onclick="refundSale('${sale.id}')"><i class="fa-solid fa-rotate-left"></i> ${state.currentLang === 'uz' ? 'Qaytarish' : 'Возврат'}</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    window.viewReceipt = function (saleId) {
        const sale = state.sales.find(s => s.id === saleId);
        if (sale) renderReceiptModal(sale);
    };

    window.refundSale = function (saleId) {
        const sale = state.sales.find(s => s.id === saleId);
        if (!sale) return;

        if (confirm(state.currentLang === 'uz' ? `Qaytarishni tasdiqlaysizmi #${sale.receiptNo}?` : `Подтверждаете возврат чека #${sale.receiptNo}?`)) {
            sale.items.forEach(item => {
                const prod = state.products.find(p => p.id === item.id);
                if (prod) prod.stock += item.qty;
            });

            state.sales = state.sales.filter(s => s.id !== saleId);
            saveProducts();
            saveSales();
            renderAll();
        }
    };

    function renderAnalytics() {
        let rev = 0;
        let cost = 0;
        const unitStr = i18n[state.currentLang].unit;

        state.sales.forEach(s => {
            rev += s.totalAmount;
            cost += s.totalCost;
        });

        const netProfit = rev - cost;
        const avgMargin = rev > 0 ? ((netProfit / rev) * 100).toFixed(1) : 0;

        document.getElementById('analyticsRevenue').textContent = formatCurrency(rev);
        document.getElementById('analyticsCost').textContent = formatCurrency(cost);
        document.getElementById('analyticsNetProfit').textContent = formatCurrency(netProfit);
        document.getElementById('analyticsMarginPercent').textContent = avgMargin + '%';

        const tbody = document.getElementById('analyticsProductsTbody');
        tbody.innerHTML = '';

        const map = {};
        state.sales.forEach(s => {
            s.items.forEach(i => {
                if (!map[i.id]) {
                    map[i.id] = { name: i.name, qty: 0, revenue: 0, cost: 0 };
                }
                map[i.id].qty += i.qty;
                map[i.id].revenue += i.total;
                map[i.id].cost += (i.costPrice * i.qty);
            });
        });

        const list = Object.values(map);
        if (list.length === 0) {
            tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-muted">${i18n[state.currentLang].noSalesData}</td></tr>`;
            return;
        }

        list.sort((a, b) => (b.revenue - b.cost) - (a.revenue - a.cost));

        list.forEach(item => {
            const profit = item.revenue - item.cost;
            const sharePercent = netProfit > 0 ? ((profit / netProfit) * 100).toFixed(1) : 0;
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td><strong>${item.name}</strong></td>
                <td>${item.qty} ${unitStr}</td>
                <td>${formatCurrency(item.revenue)}</td>
                <td class="text-muted">${formatCurrency(item.cost)}</td>
                <td class="text-accent" style="font-weight:700;">+${formatCurrency(profit)}</td>
                <td>${sharePercent}%</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function bindEvents() {
        document.getElementById('langSelect').onchange = (e) => {
            applyLanguage(e.target.value);
            renderAll();
        };

        document.querySelectorAll('.nav-btn, [data-tab-link]').forEach(btn => {
            btn.onclick = () => {
                const targetTab = btn.dataset.tab || btn.dataset.tabLink;
                if (!targetTab) return;

                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                const mainNavBtn = document.querySelector(`.nav-btn[data-tab="${targetTab}"]`);
                if (mainNavBtn) mainNavBtn.classList.add('active');

                document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
                const targetElem = document.getElementById(`tab-${targetTab}`);
                if (targetElem) targetElem.classList.add('active');

                const pageTitle = document.getElementById('pageTitle');
                const pageSub = document.getElementById('pageSubTitle');

                const dict = i18n[state.currentLang];
                if (targetTab === 'dashboard') {
                    pageTitle.textContent = dict.titleDashboard;
                    pageSub.textContent = dict.subTitleDashboard;
                } else if (targetTab === 'pos') {
                    pageTitle.textContent = dict.navPos;
                    pageSub.textContent = dict.phSearchPos;
                } else if (targetTab === 'inventory') {
                    pageTitle.textContent = dict.navInventory;
                    pageSub.textContent = dict.phSearchInv;
                } else if (targetTab === 'sales') {
                    pageTitle.textContent = dict.navSales;
                    pageSub.textContent = dict.phSearchSales;
                } else if (targetTab === 'analytics') {
                    pageTitle.textContent = dict.navAnalytics;
                    pageSub.textContent = dict.analyticsTableTitle;
                } else if (targetTab === 'settings') {
                    pageTitle.textContent = dict.navSettings;
                    pageSub.textContent = dict.settingsBasicTitle;
                }
            };
        });

        document.getElementById('themeToggleBtn').onclick = () => {
            state.settings.theme = state.settings.theme === 'dark' ? 'light' : 'dark';
            saveSettings();
            applyTheme(state.settings.theme);
        };

        document.getElementById('quickAddProductBtn').onclick = openAddProductModal;
        document.getElementById('addProductModalBtn').onclick = openAddProductModal;
        document.getElementById('quickNewSaleBtn').onclick = () => {
            document.querySelector('.nav-btn[data-tab="pos"]').click();
        };

        document.getElementById('closeProductModalBtn').onclick = closeProductModal;
        document.getElementById('cancelProductModalBtn').onclick = closeProductModal;
        document.getElementById('genBarcodeBtn').onclick = () => {
            document.getElementById('prodBarcode').value = '460' + Math.floor(100000000 + Math.random() * 900000000);
        };

        document.getElementById('productForm').onsubmit = (e) => {
            e.preventDefault();
            saveProductFromModal();
        };

        document.getElementById('clearCartBtn').onclick = () => {
            state.cart = [];
            renderPOSCart();
        };

        document.getElementById('posSearchInput').oninput = renderPOSCatalog;
        document.getElementById('inventorySearchInput').oninput = renderInventoryTable;
        document.getElementById('inventoryCategoryFilter').onchange = renderInventoryTable;
        document.getElementById('inventoryStockFilter').onchange = renderInventoryTable;
        document.getElementById('salesSearchInput').oninput = renderSalesHistory;

        document.getElementById('cartDiscountInput').oninput = renderPOSCart;
        document.getElementById('checkoutBtn').onclick = processCheckout;

        document.querySelectorAll('.pay-option input').forEach(radio => {
            radio.onchange = () => {
                document.querySelectorAll('.pay-option').forEach(po => po.classList.remove('active'));
                radio.closest('.pay-option').classList.add('active');
            };
        });

        document.getElementById('closeReceiptModalBtn').onclick = () => {
            document.getElementById('receiptModal').classList.remove('active');
        };
        document.getElementById('printReceiptBtn').onclick = () => {
            window.print();
        };

        document.getElementById('settingsForm').onsubmit = (e) => {
            e.preventDefault();
            state.settings.shopName = document.getElementById('settingShopName').value.trim() || 'Мой Магазин';
            state.settings.currency = document.getElementById('settingCurrency').value.trim() || 'so\'m';
            state.settings.lowStockThreshold = Number(document.getElementById('settingLowStockThreshold').value) || 5;

            saveSettings();
            renderAll();
            alert(state.currentLang === 'uz' ? 'Sozlamalar saqlandi!' : 'Настройки сохранены!');
        };

        document.getElementById('exportBackupBtn').onclick = exportBackupJSON;
        document.getElementById('importBackupInput').onchange = importBackupJSON;
        document.getElementById('loadDemoDataBtn').onclick = () => {
            if (confirm(state.currentLang === 'uz' ? 'Demo mahsulotlarni yuklashni tasdiqlaysizmi?' : 'Загрузить демо-товары?')) {
                state.products = [...INITIAL_DEMO_PRODUCTS];
                saveProducts();
                renderAll();
            }
        };

        document.getElementById('resetAllDataBtn').onclick = () => {
            if (confirm(state.currentLang === 'uz' ? 'Barcha ma\'lumotlarni tozalashni tasdiqlaysizmi?' : 'Очистить всю базу?')) {
                state.products = [];
                state.sales = [];
                state.cart = [];
                saveProducts();
                saveSales();
                renderAll();
            }
        };

        document.getElementById('clearSalesHistoryBtn').onclick = () => {
            if (confirm(state.currentLang === 'uz' ? 'Sotuvlar tarixini tozalashni tasdiqlaysizmi?' : 'Очистить историю продаж?')) {
                state.sales = [];
                saveSales();
                renderAll();
            }
        };

        document.getElementById('viewLowStockBtn').onclick = () => {
            document.querySelector('.nav-btn[data-tab="inventory"]').click();
            document.getElementById('inventoryStockFilter').value = 'low';
            renderInventoryTable();
        };
    }

    function openAddProductModal() {
        document.getElementById('productId').value = '';
        document.getElementById('productForm').reset();
        document.getElementById('prodStock').value = 10;
        document.getElementById('productModalTitle').innerHTML = '<i class="fa-solid fa-box"></i> ' + i18n[state.currentLang].modalAddTitle;
        document.getElementById('productModal').classList.add('active');
    }

    function closeProductModal() {
        document.getElementById('productModal').classList.remove('active');
    }

    function saveProductFromModal() {
        const id = document.getElementById('productId').value;
        const name = document.getElementById('prodName').value.trim();
        const category = document.getElementById('prodCategory').value.trim() || 'General';
        const barcode = document.getElementById('prodBarcode').value.trim();
        const costPrice = Number(document.getElementById('prodCostPrice').value) || 0;
        const salePrice = Number(document.getElementById('prodSalePrice').value) || 0;
        const stock = Number(document.getElementById('prodStock').value) || 0;

        if (id) {
            const prod = state.products.find(p => p.id === id);
            if (prod) {
                prod.name_ru = name;
                prod.name_uz = name;
                prod.category = category;
                prod.barcode = barcode;
                prod.costPrice = costPrice;
                prod.salePrice = salePrice;
                prod.stock = stock;
            }
        } else {
            const newProd = {
                id: 'prod_' + Date.now(),
                name_ru: name,
                name_uz: name,
                category: category,
                barcode: barcode || '460' + Math.floor(100000000 + Math.random() * 900000000),
                costPrice: costPrice,
                salePrice: salePrice,
                stock: stock,
                createdAt: Date.now()
            };
            state.products.push(newProd);
        }

        saveProducts();
        closeProductModal();
        renderAll();
    }

    function exportBackupJSON() {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `ShopMaster_Backup_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
    }

    function importBackupJSON(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (event) {
            try {
                const imported = JSON.parse(event.target.result);
                if (imported.products && imported.sales) {
                    state.products = imported.products;
                    state.sales = imported.sales;
                    if (imported.settings) state.settings = { ...state.settings, ...imported.settings };

                    saveProducts();
                    saveSales();
                    saveSettings();
                    renderAll();
                    alert(state.currentLang === 'uz' ? 'Zaxira fayli tiklandi!' : 'Бэкап успешно восстановлен!');
                } else {
                    alert('Format error');
                }
            } catch (err) {
                alert('JSON error');
            }
        };
        reader.readAsText(file);
    }

    document.addEventListener('DOMContentLoaded', initApp);

})();
