/* ==========================================================================
   3M STUDIO - PREMIUM WEB ENGINE & VISUAL LIVE EDITOR
   ========================================================================== */

// --- Default Base State (Out of the box premium experience) ---
const DEFAULT_STATE = {
    theme: {
        primaryColor: "#00f2fe",
        secondaryColor: "#7f00ff",
        bgDark: "#050508"
    },
    texts: {
        nav_logo: "3M",
        nav_logo_sub: "STUDIO",
        hero_badge: "PREMIUM GAMING AGENCY",
        hero_title_p1: "Build Your Dream",
        hero_title_p2: "Project With 3M Studio",
        hero_subtitle: "Professional Roblox Development, Discord Services and Website Creation. Turn your ideas into digital reality.",
        hero_btn_1: "Get Started",
        hero_btn_2: "View Services",
        services_section_title: "What We Specialize In",
        services_section_subtitle: "We deliver premium-grade gaming community setups, custom scripts, store products, and professional web solutions.",
        portfolio_section_title: "Showcase of Our Works",
        portfolio_section_subtitle: "Explore some of our latest Roblox builds, scripting systems, Discord communities, and sleek website layouts.",
        why_section_title: "Why Choose Our Agency?",
        why_section_subtitle: "We combine gaming culture expertise with high-level technical development to craft unbeatable solutions.",
        testimonials_section_title: "What Clients Say",
        testimonials_section_subtitle: "Read verified testimonials from server owners, game creators, and community managers who trust 3M Studio.",
        faq_section_title: "Frequently Asked Questions",
        faq_section_subtitle: "Got questions? We have answers. Find quick answers about ordering, custom bots, delivery times, and more.",
        contact_section_title: "Start Your Project Journey",
        contact_section_subtitle: "Ready to take your game or server to the next level? Fill out the form, and our representatives will reach out in less than 24 hours.",
        contact_email: "contact@3mstudio.gg",
        contact_discord: "discord.gg/3mstudio",
        contact_hours: "24 / 7 Response Time",
        contact_socials_title: "Follow Our Community",
        footer_logo: "3M",
        footer_logo_sub: "STUDIO",
        footer_pitch: "Professional Roblox development, Discord configurations, and web apps tailored for gaming communities.",
        footer_col_1_title: "Quick Links",
        footer_col_2_title: "Services",
        footer_col_3_title: "Legal",
        footer_copy: "3M Studio"
    },
    sectionOrder: ["hero", "services", "portfolio", "why-choose-us", "statistics", "testimonials", "faq", "contact"],
    whyChooseUs: [
        { id: "why-1", title: "Fast Delivery", desc: "We value your time. Most setups and scripts are completed in 3-5 days.", icon: "zap" },
        { id: "why-2", title: "Professional Team", desc: "Experienced Roblox developers, web programmers, and Discord engineers.", icon: "users" },
        { id: "why-3", title: "Affordable Prices", desc: "Premium quality gaming services priced to fit your project budget.", icon: "dollar-sign" },
        { id: "why-4", title: "24/7 Support", desc: "Our ticket operators and support bots are available round the clock.", icon: "help-circle" },
        { id: "why-5", title: "Secure Payments", desc: "Full safety assurance through reliable escrow, Stripe, or Robux payments.", icon: "shield" }
    ],
    statistics: [
        { id: "stat-1", value: 120, suffix: "+", label: "Completed Orders" },
        { id: "stat-2", value: 65, suffix: "+", label: "Happy Clients" },
        { id: "stat-3", value: 35, suffix: "+", label: "Projects Developed" },
        { id: "stat-4", value: 24, suffix: "/7", label: "Support Avail" }
    ],
    services: [
        {
            id: "srv-roblox-1",
            category: "roblox-dev",
            name: "Custom Roblox Games",
            price: "Starting at $499",
            desc: "Full-scale game creation from design concept to final scripts, optimizing for player retention.",
            features: ["Full Game Architecture", "Custom Gameplay Loops", "DataStore Configurations", "Monetization Setup"]
        },
        {
            id: "srv-roblox-2",
            category: "roblox-dev",
            name: "Systems & Scripts",
            price: "Starting at $99",
            desc: "Custom combat mechanics, inventories, trade systems, and backend frameworks.",
            features: ["Robust Scripting API", "Anti-Cheat Protection", "Datastore Systems", "Lag-Free Optimization"]
        },
        {
            id: "srv-roblox-3",
            category: "roblox-dev",
            name: "Maps & Builds",
            price: "Starting at $199",
            desc: "High-quality, immersive game maps, lobbies, and simulator environments.",
            features: ["Futuristic & Sci-Fi Builds", "Low-Poly & Realistic Styles", "Prop Assemblies", "Custom Lighting Layouts"]
        },
        {
            id: "srv-roblox-4",
            category: "roblox-dev",
            name: "UI Design",
            price: "Starting at $79",
            desc: "Clean, modern, and fully responsive user interfaces tailored for console, PC, and mobile.",
            features: ["Custom Icons & Layouts", "Scale-Responsive Scaling", "Button Hover Animations", "Shop & HUD Interfaces"]
        },
        {
            id: "srv-store-1",
            category: "roblox-store",
            name: "Aero Sim Lobby Map",
            price: "$49.99",
            desc: "A stunning, pre-built high-quality sky islands simulator lobby with customizable areas.",
            features: ["Pre-configured Spawn Zone", "Shop & Trade Stands", "Beautiful Neon Portals", "Optimized Geometry"]
        },
        {
            id: "srv-store-2",
            category: "roblox-store",
            name: "VIP System Gamepass Pack",
            price: "$19.99",
            desc: "Ready-to-install VIP pass script with tag titles, speed boosts, and daily rewards.",
            features: ["In-game Overhead Title", "Custom VIP Room Gate", "Speed & Jump Boost Scripts", "Daily Coin Bonus System"]
        },
        {
            id: "srv-store-3",
            category: "roblox-store",
            name: "Advanced Trading System",
            price: "$39.99",
            desc: "A fully secured peer-to-peer player trading system supporting pets, tools, and cash.",
            features: ["Secure Duping Prevention", "Interactive User UI", "Robux Commission Options", "Transaction Ledger System"]
        },
        {
            id: "srv-discord-1",
            category: "discord-services",
            name: "Server Setup & Design",
            price: "Starting at $49",
            desc: "Professional discord layouts with perfect role hierarchies, auto-moderation, and custom channels.",
            features: ["Role & Channel Hierarchy", "Auto-Mod Configuration", "Clean Vector Layouts", "Aesthetic Fonts & Symbols"]
        },
        {
            id: "srv-discord-2",
            category: "discord-services",
            name: "Custom Discord Bots",
            price: "Starting at $149",
            desc: "Tailored NodeJS Discord bots with database integrations, dashboard links, and game APIs.",
            features: ["24/7 Hosting Compatible", "Roblox Link Verification", "Command Slash Configs", "Database (MongoDB) Sync"]
        },
        {
            id: "srv-discord-3",
            category: "discord-services",
            name: "Ticket & Verification Systems",
            price: "Starting at $29",
            desc: "Secure bot-led verification gates (Bloxlink/custom) and user support ticket panels.",
            features: ["Secure Captcha Gates", "Interactive Button Panels", "Support Transcript Loggers", "Staff Queue Management"]
        },
        {
            id: "srv-web-1",
            category: "website-dev",
            name: "Gaming Communities Websites",
            price: "Starting at $299",
            desc: "Premium websites with guilds dashboards, forums, rankings integration, and shop pages.",
            features: ["Tailored Dark Aesthetic", "Dynamic Guild Forums", "Roblox API Leaderboards", "Animated UI/UX Panels"]
        },
        {
            id: "srv-web-2",
            category: "website-dev",
            name: "Landing Pages & Portfolios",
            price: "Starting at $129",
            desc: "Stunning single-page sites to showcase your games, designs, or streaming career.",
            features: ["High-speed Loading", "SEO Optimized Coding", "Interactive Contact Hubs", "Dynamic Work Grid Layouts"]
        },
        {
            id: "srv-web-3",
            category: "website-dev",
            name: "Custom Admin Dashboards",
            price: "Starting at $499",
            desc: "Web panels to track in-game purchases, player reports, and server analytics in real time.",
            features: ["ExpressJS/NodeJS Backend", "Live Analytics Charts", "Staff Management Toggles", "API Database Integrations"]
        }
    ],
    portfolio: [
        { id: "port-1", category: "roblox", title: "Sci-Fi Simulator Map", desc: "High-detail simulator environment with glowing neon streets and animated hovercars.", img: "assets/images/roblox_dev.png", tag: "Roblox Map Build" },
        { id: "port-2", category: "roblox", title: "RPG Inventory System", desc: "A sleek, responsive inventory GUI featuring pet equip, weapon crafting, and sorting.", img: "assets/images/roblox_store.png", tag: "Roblox Scripting" },
        { id: "port-3", category: "discord", title: "Nexus Esports Server Setup", desc: "Full-scale server template for an esports league including bracket bots and team channels.", img: "assets/images/discord_setup.png", tag: "Discord Setup" },
        { id: "port-4", category: "web", title: "3M Game Studio Dashboard", desc: "Premium admin dashboard for game analytics, active player maps, and real-time trade logs.", img: "assets/images/gaming_web.png", tag: "Website Design" }
    ],
    testimonials: [
        { id: "test-1", rating: 5, comment: "3M Studio built our simulator map and scripting system. The delivery was fast, and the code runs with zero lag! Highly recommend their Roblox team.", name: "TofuuGamer", sub: "Game Producer" },
        { id: "test-2", rating: 5, comment: "Our esports community needed a custom bot to verify Roblox accounts and track match wins. The 3M Discord Bot works flawlessly 24/7.", name: "Xenon_PVP", sub: "Guild Leader" },
        { id: "test-3", rating: 5, comment: "Aesthetically outstanding website. The glassmorphism cards and smooth animations gave our studio a premium look that doubled our lead conversions.", name: "Vortex Gaming", sub: "Studio Manager" }
    ],
    faqs: [
        { id: "faq-1", question: "How do I place a custom order?", answer: "You can use the contact form at the bottom of the page or join our Discord server. A project manager will review details, establish a budget/timeline, and issue an order invoice." },
        { id: "faq-2", question: "What payment methods do you accept?", answer: "We accept PayPal, Credit/Debit Cards via Stripe, and Robux payments (with tax coverage). All transactions are fully secured." },
        { id: "faq-3", question: "Do you offer post-delivery support?", answer: "Yes! Every custom script or website comes with a 14-day warranty for bugs. We also offer extended hosting and bot management subscriptions." },
        { id: "faq-4", question: "Can you edit the website after it is published?", answer: "Absolutely. With our visual edit panel (accessible via the secure access command '3m studio admin' in the search bar and password 'maloka'), administrators can modify all titles, prices, descriptions, and section arrangements directly." }
    ]
};

// --- Application Core State Variables ---
let draftState = {};
let liveState = {};
let historyStack = [];
let historyIndex = -1;
let adminMode = false;
let autoSaveTimer = null;
let auditLogs = [];
let leads = [];

// --- Helper: Convert HEX to RGB for opacity properties ---
function hexToRgb(hex) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(', ');
    }
    return "0, 0, 0";
}

// --- Log audit activities ---
function addAuditLog(msg, isError = false) {
    const timestamp = new Date().toLocaleTimeString();
    auditLogs.push({ time: timestamp, msg: msg, isError: isError });
    
    // Update logs modal console if open
    const logConsole = document.getElementById("logs-console-container");
    if (logConsole) {
        const line = document.createElement("div");
        line.className = `log-line ${isError ? 'log-error' : ''}`;
        line.innerHTML = `<span class="log-time">[${timestamp}]</span><span class="log-msg">${msg}</span>`;
        logConsole.appendChild(line);
        logConsole.scrollTop = logConsole.scrollHeight;
    }
}

// --- Initialize / Sync State ---
function initStates() {
    // 1. Get Live State (public state)
    const storedLive = localStorage.getItem("3m_studio_live_state");
    if (storedLive) {
        liveState = JSON.parse(storedLive);
    } else {
        liveState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        localStorage.setItem("3m_studio_live_state", JSON.stringify(liveState));
    }

    // 2. Check if admin is currently logged in session
    const isLoggedIn = sessionStorage.getItem("admin_logged_in") === "true";
    
    // 3. Load Draft State
    const storedDraft = localStorage.getItem("3m_studio_draft_state");
    if (storedDraft) {
        draftState = JSON.parse(storedDraft);
    } else {
        draftState = JSON.parse(JSON.stringify(liveState));
        localStorage.setItem("3m_studio_draft_state", JSON.stringify(draftState));
    }

    // Load Inquiries/Messages
    const storedLeads = localStorage.getItem("3m_studio_leads");
    if (storedLeads) {
        leads = JSON.parse(storedLeads);
    } else {
        leads = [];
        localStorage.setItem("3m_studio_leads", JSON.stringify(leads));
    }

    // Push initial history state
    pushToHistory(JSON.parse(JSON.stringify(draftState)), "Initialized site state");

    // Enable admin mode if logged in
    if (isLoggedIn) {
        enableAdminMode(false); // Enable without password prompt
    } else {
        applyState(liveState); // Render public state
    }
}

// --- Push history for Undo/Redo operations ---
function pushToHistory(stateCopy, description = "Action completed") {
    // Trim history after current index
    if (historyIndex < historyStack.length - 1) {
        historyStack = historyStack.slice(0, historyIndex + 1);
    }
    
    historyStack.push(stateCopy);
    historyIndex = historyStack.length - 1;
    
    updateUndoRedoButtons();
    addAuditLog(description);
}

function updateUndoRedoButtons() {
    const btnUndo = document.getElementById("tb-undo");
    const btnRedo = document.getElementById("tb-redo");
    
    if (btnUndo && btnRedo) {
        btnUndo.disabled = (historyIndex <= 0);
        btnRedo.disabled = (historyIndex >= historyStack.length - 1);
    }
}

// --- Apply State object properties to the entire DOM ---
function applyState(state) {
    if (!state) return;
    
    // 1. Theme Variables
    if (state.theme) {
        document.documentElement.style.setProperty('--primary-color', state.theme.primaryColor);
        document.documentElement.style.setProperty('--primary-rgb', hexToRgb(state.theme.primaryColor));
        document.documentElement.style.setProperty('--secondary-color', state.theme.secondaryColor);
        document.documentElement.style.setProperty('--secondary-rgb', hexToRgb(state.theme.secondaryColor));
        document.documentElement.style.setProperty('--bg-dark', state.theme.bgDark);
        
        // Update picker fields if admin side panel is active
        const pickPrimary = document.getElementById("color-primary");
        const textPrimary = document.getElementById("color-primary-text");
        const pickSecondary = document.getElementById("color-secondary");
        const textSecondary = document.getElementById("color-secondary-text");
        const pickBg = document.getElementById("color-bg");
        const textBg = document.getElementById("color-bg-text");
        
        if (pickPrimary) { pickPrimary.value = state.theme.primaryColor; textPrimary.value = state.theme.primaryColor; }
        if (pickSecondary) { pickSecondary.value = state.theme.secondaryColor; textSecondary.value = state.theme.secondaryColor; }
        if (pickBg) { pickBg.value = state.theme.bgDark; textBg.value = state.theme.bgDark; }
    }

    // 2. static Texts & Buttons
    if (state.texts) {
        for (const [id, value] of Object.entries(state.texts)) {
            const elements = document.querySelectorAll(`[data-edit-id="${id}"]`);
            elements.forEach(el => {
                if (el.innerHTML !== value) {
                    el.innerHTML = value;
                }
            });
        }
    }

    // 3. Section Positions / Order
    if (state.sectionOrder) {
        const container = document.getElementById("sections-container");
        if (container) {
            state.sectionOrder.forEach(secName => {
                const secEl = document.getElementById(secName);
                if (secEl) {
                    container.appendChild(secEl); // Appending swaps order dynamically
                }
            });
        }
    }

    // 4. Collections Redraws
    renderServices(state.services);
    renderPortfolio(state.portfolio);
    renderFAQ(state.faqs);
    renderWhyChooseUs(state.whyChooseUs);
    renderStatistics(state.statistics);
    renderTestimonials(state.testimonials);

    // Apply Editable controls if admin mode active
    if (adminMode) {
        enableContentEditable();
    }
}

// --- Render Services Cards ---
function renderServices(servicesList) {
    const grids = {
        "roblox-dev": document.getElementById("roblox-dev-grid"),
        "roblox-store": document.getElementById("roblox-store-grid"),
        "discord-services": document.getElementById("discord-services-grid"),
        "website-dev": document.getElementById("website-dev-grid")
    };
    
    // Clear grids
    for (const key in grids) {
        if (grids[key]) grids[key].innerHTML = "";
    }

    servicesList.forEach(srv => {
        const grid = grids[srv.category];
        if (!grid) return;

        const card = document.createElement("div");
        card.className = "service-card";
        card.setAttribute("data-card-id", srv.id);

        let iconSvg = "";
        if (srv.category === "roblox-dev") {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect><path d="M12 6v12M6 12h12"></path></svg>`;
        } else if (srv.category === "roblox-store") {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
        } else if (srv.category === "discord-services") {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`;
        } else {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
        }

        const featuresHtml = srv.features.map(f => `<li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${f}</span>
        </li>`).join("");

        card.innerHTML = `
            <div class="card-icon">${iconSvg}</div>
            <span class="card-price" data-edit-id="services.${srv.id}.price">${srv.price}</span>
            <h3 class="card-title" data-edit-id="services.${srv.id}.name">${srv.name}</h3>
            <p class="card-desc" data-edit-id="services.${srv.id}.desc">${srv.desc}</p>
            <ul class="card-features">${featuresHtml}</ul>
        `;
        grid.appendChild(card);
    });

    // Wire Card Glowing Border Cursor Hover Coordinates
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);
        });
    });
}

// --- Render Portfolio Showcase Items ---
function renderPortfolio(portfolioList) {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;
    grid.innerHTML = "";

    portfolioList.forEach(item => {
        const wrapper = document.createElement("div");
        wrapper.className = `portfolio-item-wrapper ${item.category}`;
        
        let imgHtml = "";
        if (adminMode) {
            // Render Editable Image Wrap
            imgHtml = `
                <div class="editable-img-wrapper">
                    <img class="portfolio-img" src="${item.img}" alt="${item.title}">
                    <div class="img-edit-overlay" data-img-target="portfolio.${item.id}.img">
                        <button class="img-edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                            Change Image
                        </button>
                    </div>
                </div>
            `;
        } else {
            imgHtml = `<img class="portfolio-img" src="${item.img}" alt="${item.title}">`;
        }

        wrapper.innerHTML = `
            <div class="portfolio-item">
                ${imgHtml}
                <div class="portfolio-overlay">
                    <span class="portfolio-tag" data-edit-id="portfolio.${item.id}.tag">${item.tag}</span>
                    <h3 class="portfolio-title" data-edit-id="portfolio.${item.id}.title">${item.title}</h3>
                    <p class="portfolio-desc" data-edit-id="portfolio.${item.id}.desc">${item.desc}</p>
                </div>
            </div>
        `;
        grid.appendChild(wrapper);
    });
}

// --- Render FAQ Accordion ---
function renderFAQ(faqList) {
    const accordion = document.getElementById("faq-accordion");
    if (!accordion) return;
    accordion.innerHTML = "";

    faqList.forEach(faq => {
        const item = document.createElement("div");
        item.className = "faq-item";
        item.innerHTML = `
            <button class="faq-header" aria-expanded="false">
                <span class="faq-question" data-edit-id="faqs.${faq.id}.question">${faq.question}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div class="faq-body">
                <div class="faq-content" data-edit-id="faqs.${faq.id}.answer">${faq.answer}</div>
            </div>
        `;
        accordion.appendChild(item);
    });

    // Wire Accordion Toggle Handlers
    document.querySelectorAll(".faq-header").forEach(btn => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;
            const body = btn.nextElementSibling;
            const isActive = item.classList.contains("active");

            // Close all
            document.querySelectorAll(".faq-item").forEach(other => {
                other.classList.remove("active");
                other.querySelector(".faq-header").setAttribute("aria-expanded", "false");
                other.querySelector(".faq-body").style.maxHeight = null;
            });

            if (!isActive) {
                item.classList.add("active");
                btn.setAttribute("aria-expanded", "true");
                body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });
}

// --- Render Why Choose Us Cards ---
function renderWhyChooseUs(whyList) {
    const grid = document.getElementById("why-us-grid");
    if (!grid) return;
    grid.innerHTML = "";

    whyList.forEach(item => {
        let svgIcon = "";
        switch (item.icon) {
            case "zap":
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
                break;
            case "users":
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
                break;
            case "dollar-sign":
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`;
                break;
            case "help-circle":
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`;
                break;
            case "shield":
                svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
                break;
        }

        const card = document.createElement("div");
        card.className = "why-card";
        card.innerHTML = `
            <div class="why-icon">${svgIcon}</div>
            <h3 class="why-title" data-edit-id="whyChooseUs.${item.id}.title">${item.title}</h3>
            <p class="why-desc" data-edit-id="whyChooseUs.${item.id}.desc">${item.desc}</p>
        `;
        grid.appendChild(card);
    });
}

// --- Render Statistics counters ---
function renderStatistics(statsList) {
    const grid = document.getElementById("stats-grid");
    if (!grid) return;
    grid.innerHTML = "";

    statsList.forEach(item => {
        const box = document.createElement("div");
        box.className = "stat-item";
        box.innerHTML = `
            <div class="stat-number" data-stat-target="${item.value}">
                <span class="count-val" data-edit-id="statistics.${item.id}.value">${item.value}</span><span class="count-suffix" data-edit-id="statistics.${item.id}.suffix">${item.suffix}</span>
            </div>
            <div class="stat-label" data-edit-id="statistics.${item.id}.label">${item.label}</div>
        `;
        grid.appendChild(box);
    });
}

// --- Render Testimonials ---
function renderTestimonials(testList) {
    const grid = document.getElementById("testimonials-grid");
    if (!grid) return;
    grid.innerHTML = "";

    testList.forEach(item => {
        let stars = "";
        for (let i = 0; i < item.rating; i++) {
            stars += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
        }

        const card = document.createElement("div");
        card.className = "testimonial-card";
        card.innerHTML = `
            <div class="client-rating">${stars}</div>
            <p class="client-comment" data-edit-id="testimonials.${item.id}.comment">"${item.comment}"</p>
            <div class="client-profile">
                <div class="client-avatar">${item.name.charAt(0)}</div>
                <div class="client-info">
                    <h4 data-edit-id="testimonials.${item.id}.name">${item.name}</h4>
                    <span data-edit-id="testimonials.${item.id}.sub">${item.sub}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- Enable Direct contenteditable on data-edit-ids ---
function enableContentEditable() {
    const elements = document.querySelectorAll("[data-edit-id]");
    elements.forEach(el => {
        el.setAttribute("contenteditable", "true");
        
        // Remove existing listener to avoid stacking
        el.onblur = null;
        
        el.onblur = (e) => {
            const rawVal = el.innerHTML.trim();
            const editId = el.getAttribute("data-edit-id");
            
            updateStateFromTextEdit(editId, rawVal);
        };

        // Prevent Enter causing generic div tags in small text
        el.onkeydown = (e) => {
            if (e.key === "Enter" && !el.classList.contains("hero-subtitle") && !el.classList.contains("client-comment") && !el.classList.contains("faq-content")) {
                e.preventDefault();
                el.blur();
            }
        };
    });
}

// --- Disable ContentEditable when leaving admin mode ---
function disableContentEditable() {
    const elements = document.querySelectorAll("[data-edit-id]");
    elements.forEach(el => {
        el.removeAttribute("contenteditable");
        el.onblur = null;
        el.onkeydown = null;
    });
}

// --- Update draft state from text editor inputs ---
function updateStateFromTextEdit(editId, newVal) {
    if (editId.includes(".")) {
        // Nested collection path: e.g. services.srv-roblox-1.name
        const parts = editId.split(".");
        if (parts.length === 3) {
            const [collection, itemId, field] = parts;
            const item = draftState[collection].find(x => x.id === itemId);
            if (item) {
                const oldVal = item[field];
                if (oldVal !== newVal) {
                    item[field] = newVal;
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Updated ${collection} [${itemId}] - ${field}`);
                    saveDraft();
                }
            }
        }
    } else {
        // Static text key
        const oldVal = draftState.texts[editId];
        if (oldVal !== newVal) {
            draftState.texts[editId] = newVal;
            pushToHistory(JSON.parse(JSON.stringify(draftState)), `Edited website text block: "${editId}"`);
            saveDraft();
        }
    }
}

// --- Save Draft state to localStorage ---
function saveDraft() {
    localStorage.setItem("3m_studio_draft_state", JSON.stringify(draftState));
    
    // Animate auto-save toaster indicator
    const statusOrb = document.getElementById("tb-save-status-orb");
    const statusText = document.getElementById("tb-save-status-text");
    
    if (statusOrb && statusText) {
        statusOrb.style.backgroundColor = "#f59e0b"; // Orange (saving)
        statusText.innerText = "Saving draft...";
        
        if (autoSaveTimer) clearTimeout(autoSaveTimer);
        autoSaveTimer = setTimeout(() => {
            statusOrb.style.backgroundColor = "#10b981"; // Green (saved)
            statusText.innerText = "Draft Synced";
        }, 1200);
    }
}

// --- Enable Admin panel, visual helpers, and toolbar ---
function enableAdminMode(showLogs = true) {
    adminMode = true;
    sessionStorage.setItem("admin_logged_in", "true");
    document.body.classList.add("admin-edit-mode");
    
    // Load draft state immediately
    applyState(draftState);

    // Slide in toolbar
    const toolbar = document.getElementById("admin-toolbar");
    if (toolbar) toolbar.classList.add("active");

    // Enable editable image overlay listeners
    wireImageEditOverlays();

    // Populate message count badge
    updateMsgCountBadge();

    if (showLogs) {
        addAuditLog("Admin Authorized. visual edit mode Enabled.");
    }
}

// --- Disable Admin edit modes, restore public view ---
function disableAdminMode() {
    adminMode = false;
    sessionStorage.setItem("admin_logged_in", "false");
    document.body.classList.remove("admin-edit-mode");
    document.body.classList.remove("admin-layout-mode");
    
    // Slide out toolbar and side panel
    const toolbar = document.getElementById("admin-toolbar");
    if (toolbar) toolbar.classList.remove("active");
    
    const sidePanel = document.getElementById("admin-side-panel");
    if (sidePanel) sidePanel.classList.remove("active");

    disableContentEditable();
    
    // Reload Live State to drop unsaved drafts visually
    applyState(liveState);
    
    addAuditLog("Admin session Closed. visual edit mode disabled.");
}

// --- Wire Click handlers for editable image overlays ---
function wireImageEditOverlays() {
    document.querySelectorAll(".img-edit-overlay").forEach(overlay => {
        overlay.onclick = () => {
            const targetId = overlay.getAttribute("data-img-target");
            const modal = document.getElementById("admin-image-modal");
            const inputUrl = document.getElementById("img-source-url");
            const inputTarget = document.getElementById("img-target-id");
            const preview = document.getElementById("img-upload-preview");
            const previewContainer = document.getElementById("img-upload-preview-container");
            const fileName = document.getElementById("img-upload-name");

            if (modal) {
                // Find current image value
                let currentVal = "";
                if (targetId.includes(".")) {
                    const [collection, itemId, field] = targetId.split(".");
                    const item = draftState[collection].find(x => x.id === itemId);
                    if (item) currentVal = item[field];
                }
                
                inputUrl.value = currentVal.startsWith("data:") ? "" : currentVal;
                inputTarget.value = targetId;
                
                preview.src = currentVal;
                previewContainer.style.display = currentVal ? "flex" : "none";
                fileName.innerText = currentVal.startsWith("data:") ? "Local File Data" : "Asset Link";

                modal.classList.add("active");
            }
        };
    });
}

// --- Render Drag-and-drop section arrangement list in Side Panel ---
function renderSidePanelSectionsList() {
    const listContainer = document.getElementById("admin-sections-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    draftState.sectionOrder.forEach((secName, index) => {
        const item = document.createElement("div");
        item.className = "section-list-item";
        item.setAttribute("draggable", "true");
        item.setAttribute("data-section-name", secName);
        item.setAttribute("data-index", index);

        // Capitalize name
        const displayTitle = secName.replace(/-/g, ' ');

        item.innerHTML = `
            <div class="section-item-info">
                <span class="section-drag-dots">☰</span>
                <span class="section-item-name">${displayTitle}</span>
            </div>
            <div class="section-item-actions">
                <button class="reorder-btn sec-up" title="Move Up" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button class="reorder-btn sec-down" title="Move Down" ${index === draftState.sectionOrder.length - 1 ? 'disabled' : ''}>▼</button>
            </div>
        `;
        listContainer.appendChild(item);
    });

    // Wire Up/Down arrow button reorder click events
    listContainer.querySelectorAll(".sec-up").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const item = btn.closest(".section-list-item");
            const index = parseInt(item.getAttribute("data-index"));
            swapSections(index, index - 1);
        };
    });
    listContainer.querySelectorAll(".sec-down").forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const item = btn.closest(".section-list-item");
            const index = parseInt(item.getAttribute("data-index"));
            swapSections(index, index + 1);
        };
    });

    // Wire HTML5 Drag and Drop events inside the sidebar list
    let dragEl = null;
    listContainer.querySelectorAll(".section-list-item").forEach(item => {
        item.ondragstart = (e) => {
            dragEl = item;
            item.classList.add("dragging");
            e.dataTransfer.effectAllowed = "move";
        };
        item.ondragend = () => {
            dragEl = null;
            item.classList.remove("dragging");
        };
        item.ondragover = (e) => {
            e.preventDefault();
            return false;
        };
        item.ondrop = (e) => {
            e.preventDefault();
            if (dragEl && dragEl !== item) {
                const dragIndex = parseInt(dragEl.getAttribute("data-index"));
                const dropIndex = parseInt(item.getAttribute("data-index"));
                
                // Reorder sectionOrder array
                const arr = [...draftState.sectionOrder];
                const [removed] = arr.splice(dragIndex, 1);
                arr.splice(dropIndex, 0, removed);
                
                draftState.sectionOrder = arr;
                pushToHistory(JSON.parse(JSON.stringify(draftState)), `Reordered page sections via side panel`);
                applyState(draftState);
                renderSidePanelSectionsList();
                saveDraft();
            }
        };
    });
}

// --- Swap two sections ---
function swapSections(idx1, idx2) {
    if (idx1 < 0 || idx1 >= draftState.sectionOrder.length || idx2 < 0 || idx2 >= draftState.sectionOrder.length) return;
    
    const arr = [...draftState.sectionOrder];
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    
    draftState.sectionOrder = arr;
    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Moved section [${temp}] to index ${idx2}`);
    applyState(draftState);
    renderSidePanelSectionsList();
    saveDraft();
}

// --- Wire UI Events (Clicks, inputs, forms) ---
function wireEvents() {
    // 1. Search Bar command activation
    const searchBar = document.getElementById("search-bar");
    const searchBtn = document.getElementById("search-btn");
    const searchDropdown = document.getElementById("search-results-dropdown");

    if (searchBtn && searchBar) {
        searchBtn.onclick = (e) => {
            e.stopPropagation();
            const container = searchBar.parentElement;
            container.classList.toggle("active");
            if (container.classList.contains("active")) {
                searchBar.focus();
            } else {
                searchDropdown.classList.remove("active");
            }
        };

        searchBar.oninput = () => {
            const val = searchBar.value.trim().toLowerCase();
            if (val === "3m studio admin") {
                // Secret Command Matched!
                searchBar.value = "";
                searchBar.parentElement.classList.remove("active");
                searchDropdown.classList.remove("active");
                
                // Trigger Admin login Modal
                const modal = document.getElementById("admin-login-modal");
                if (modal) modal.classList.add("active");
                const passwordInput = document.getElementById("admin-password");
                if (passwordInput) {
                    passwordInput.value = "";
                    passwordInput.focus();
                }
            } else if (val.length >= 2) {
                // Normal search query -> Filter services
                const matches = draftState.services.filter(s => 
                    s.name.toLowerCase().includes(val) || 
                    s.desc.toLowerCase().includes(val)
                );
                
                if (matches.length > 0) {
                    searchDropdown.innerHTML = matches.map(m => `
                        <a href="#services" class="search-result-item" data-tab-link="${m.category}">
                            <strong>${m.name}</strong>
                            <span>${m.price} - ${m.desc.substring(0, 50)}...</span>
                        </a>
                    `).join("");
                    searchDropdown.classList.add("active");

                    // Tab redirection triggers on search item click
                    searchDropdown.querySelectorAll(".search-result-item").forEach(item => {
                        item.onclick = () => {
                            const tabCat = item.getAttribute("data-tab-link");
                            const tabBtn = document.querySelector(`.tab-btn[data-tab="${tabCat}"]`);
                            if (tabBtn) tabBtn.click();
                            searchDropdown.classList.remove("active");
                            searchBar.parentElement.classList.remove("active");
                            searchBar.value = "";
                        };
                    });
                } else {
                    searchDropdown.innerHTML = `<div class="search-result-item">No service matching "${val}"</div>`;
                    searchDropdown.classList.add("active");
                }
            } else {
                searchDropdown.classList.remove("active");
            }
        };
    }

    // Hide search dropdown on click outside
    document.addEventListener("click", (e) => {
        if (searchDropdown && !e.target.closest(".search-container")) {
            searchDropdown.classList.remove("active");
        }
    });

    // 2. Admin Authentication handlers
    const modalLogin = document.getElementById("admin-login-modal");
    const closeLogin = document.getElementById("admin-login-close");
    const submitLogin = document.getElementById("admin-login-submit");
    const passwordLogin = document.getElementById("admin-password");
    const errorLogin = document.getElementById("admin-error-text");

    if (closeLogin) {
        closeLogin.onclick = () => modalLogin.classList.remove("active");
    }
    
    if (submitLogin && passwordLogin) {
        const verifyPassword = () => {
            const pwd = passwordLogin.value;
            if (pwd === "maloka") {
                errorLogin.style.display = "none";
                modalLogin.classList.remove("active");
                enableAdminMode(true);
            } else {
                errorLogin.style.display = "block";
                passwordLogin.select();
                addAuditLog("Failed authorization attempt.", true);
            }
        };

        submitLogin.onclick = verifyPassword;
        passwordLogin.onkeydown = (e) => {
            if (e.key === "Enter") verifyPassword();
        };
    }

    // 3. Floating Navbar Scroll Reactions & Mobile drawer
    const header = document.getElementById("main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    if (hamburger && navMenu) {
        hamburger.onclick = () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        };
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.onclick = () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            };
        });
    }

    // 4. Services Tab Switchers
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            const tabId = btn.getAttribute("data-tab");
            const pane = document.getElementById(tabId);
            if (pane) pane.classList.add("active");
        };
    });

    // 5. Portfolio Category Filter Switchers
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");
            const items = document.querySelectorAll(".portfolio-item-wrapper");
            
            items.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        };
    });

    // 6. Contact Form submissions
    const contactForm = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success-msg");
    const resetFormBtn = document.getElementById("form-reset-btn");

    if (contactForm && successMsg) {
        contactForm.onsubmit = (e) => {
            e.preventDefault();
            
            const newLead = {
                id: `lead-${Date.now()}`,
                name: document.getElementById("form-name").value.trim(),
                email: document.getElementById("form-email").value.trim(),
                service: document.getElementById("form-service").value,
                message: document.getElementById("form-message").value.trim(),
                timestamp: new Date().toLocaleString()
            };

            // Save inquiry
            leads.unshift(newLead);
            localStorage.setItem("3m_studio_leads", JSON.stringify(leads));
            updateMsgCountBadge();

            // Log activity
            addAuditLog(`Received form lead from ${newLead.name} regarding "${newLead.service}"`);

            // Clear form and display success screen
            contactForm.reset();
            contactForm.style.display = "none";
            successMsg.classList.add("active");
        };

        if (resetFormBtn) {
            resetFormBtn.onclick = () => {
                successMsg.classList.remove("active");
                contactForm.style.display = "flex";
            };
        }
    }

    // 7. Toolbar action handlers
    const tbUndo = document.getElementById("tb-undo");
    const tbRedo = document.getElementById("tb-redo");
    const tbText = document.getElementById("tb-toggle-text");
    const tbLayout = document.getElementById("tb-toggle-layout");
    const tbProducts = document.getElementById("tb-toggle-products");
    const tbLeads = document.getElementById("tb-toggle-leads");
    const tbLogs = document.getElementById("tb-toggle-logs");
    
    const tbDiscard = document.getElementById("tb-discard");
    const tbPublish = document.getElementById("tb-publish");
    const tbExit = document.getElementById("tb-exit");

    if (tbUndo) {
        tbUndo.onclick = () => {
            if (historyIndex > 0) {
                historyIndex--;
                draftState = JSON.parse(JSON.stringify(historyStack[historyIndex]));
                applyState(draftState);
                updateUndoRedoButtons();
                saveDraft();
                addAuditLog("Action undone.");
            }
        };
    }
    if (tbRedo) {
        tbRedo.onclick = () => {
            if (historyIndex < historyStack.length - 1) {
                historyIndex++;
                draftState = JSON.parse(JSON.stringify(historyStack[historyIndex]));
                applyState(draftState);
                updateUndoRedoButtons();
                saveDraft();
                addAuditLog("Action redone.");
            }
        };
    }

    if (tbText) {
        tbText.onclick = () => {
            // Edit Text is default
            document.body.classList.remove("admin-layout-mode");
            tbLayout.classList.remove("active-mode");
            tbText.classList.add("active-mode");
            addAuditLog("Text Edit mode activated.");
        };
    }

    if (tbLayout) {
        tbLayout.onclick = () => {
            // Toggle side panel and active layout highlighting
            const sidePanel = document.getElementById("admin-side-panel");
            if (sidePanel) {
                sidePanel.classList.add("active");
                renderSidePanelSectionsList();
            }
            tbText.classList.remove("active-mode");
            tbLayout.classList.add("active-mode");
            document.body.classList.add("admin-layout-mode");
            addAuditLog("Layout & theme visual settings opened.");
        };
    }

    const sidePanelClose = document.getElementById("side-panel-close");
    if (sidePanelClose) {
        sidePanelClose.onclick = () => {
            document.getElementById("admin-side-panel").classList.remove("active");
            document.body.classList.remove("admin-layout-mode");
            tbLayout.classList.remove("active-mode");
            tbText.classList.add("active-mode");
        };
    }

    if (tbProducts) {
        tbProducts.onclick = () => {
            const modal = document.getElementById("admin-products-modal");
            if (modal) {
                modal.classList.add("active");
                renderServicesManagerTable();
                renderPortfolioManagerTable();
                renderFAQManagerTable();
                addAuditLog("Products & portfolio catalog modal opened.");
            }
        };
    }
    document.getElementById("admin-products-close").onclick = () => {
        document.getElementById("admin-products-modal").classList.remove("active");
    };

    if (tbLeads) {
        tbLeads.onclick = () => {
            const modal = document.getElementById("admin-leads-modal");
            if (modal) {
                modal.classList.add("active");
                renderLeadsList();
                addAuditLog("Inbox manager opened.");
            }
        };
    }
    document.getElementById("admin-leads-close").onclick = () => {
        document.getElementById("admin-leads-modal").classList.remove("active");
    };

    if (tbLogs) {
        tbLogs.onclick = () => {
            const modal = document.getElementById("admin-logs-modal");
            if (modal) {
                modal.classList.add("active");
                
                // Populate log console
                const logConsole = document.getElementById("logs-console-container");
                if (logConsole) {
                    logConsole.innerHTML = auditLogs.map(l => `
                        <div class="log-line ${l.isError ? 'log-error' : ''}">
                            <span class="log-time">[${l.time}]</span>
                            <span class="log-msg">${l.msg}</span>
                        </div>
                    `).join("");
                    logConsole.scrollTop = logConsole.scrollHeight;
                }
                addAuditLog("Audit history log console opened.");
            }
        };
    }
    document.getElementById("admin-logs-close").onclick = () => {
        document.getElementById("admin-logs-modal").classList.remove("active");
    };

    if (tbDiscard) {
        tbDiscard.onclick = () => {
            if (confirm("Are you sure you want to discard ALL draft edits and restore the last published site version?")) {
                draftState = JSON.parse(JSON.stringify(liveState));
                localStorage.setItem("3m_studio_draft_state", JSON.stringify(draftState));
                
                // Clear history
                historyStack = [JSON.parse(JSON.stringify(draftState))];
                historyIndex = 0;
                updateUndoRedoButtons();

                applyState(draftState);
                addAuditLog("Draft discarded. Restored last published state.");
                alert("Draft discarded successfully.");
            }
        };
    }

    if (tbPublish) {
        tbPublish.onclick = () => {
            // Write draft to live
            liveState = JSON.parse(JSON.stringify(draftState));
            localStorage.setItem("3m_studio_live_state", JSON.stringify(liveState));
            addAuditLog("Changes Published. website successfully updated for visitors.");
            alert("Congratulations! Your changes have been successfully published and are now live.");
        };
    }

    if (tbExit) {
        tbExit.onclick = () => {
            if (confirm("Exit visual editor? Unpublished changes will remain saved as a draft.")) {
                disableAdminMode();
            }
        };
    }

    // 8. Theme Customizer Color Inputs
    const colorPrimary = document.getElementById("color-primary");
    const textPrimary = document.getElementById("color-primary-text");
    const colorSecondary = document.getElementById("color-secondary");
    const textSecondary = document.getElementById("color-secondary-text");
    const colorBg = document.getElementById("color-bg");
    const textBg = document.getElementById("color-bg-text");

    const updatePrimary = (hex) => {
        draftState.theme.primaryColor = hex;
        applyState(draftState);
        saveDraft();
    };
    const updateSecondary = (hex) => {
        draftState.theme.secondaryColor = hex;
        applyState(draftState);
        saveDraft();
    };
    const updateBg = (hex) => {
        draftState.theme.bgDark = hex;
        applyState(draftState);
        saveDraft();
    };

    if (colorPrimary) {
        colorPrimary.oninput = () => { textPrimary.value = colorPrimary.value; updatePrimary(colorPrimary.value); };
        textPrimary.onchange = () => { if (/^#[0-9A-F]{6}$/i.test(textPrimary.value)) { colorPrimary.value = textPrimary.value; updatePrimary(textPrimary.value); } };
        
        // Push state to history stack on change end
        colorPrimary.onchange = () => pushToHistory(JSON.parse(JSON.stringify(draftState)), `Changed theme primary color to ${colorPrimary.value}`);
    }
    if (colorSecondary) {
        colorSecondary.oninput = () => { textSecondary.value = colorSecondary.value; updateSecondary(colorSecondary.value); };
        textSecondary.onchange = () => { if (/^#[0-9A-F]{6}$/i.test(textSecondary.value)) { colorSecondary.value = textSecondary.value; updateSecondary(textSecondary.value); } };
        colorSecondary.onchange = () => pushToHistory(JSON.parse(JSON.stringify(draftState)), `Changed theme secondary color to ${colorSecondary.value}`);
    }
    if (colorBg) {
        colorBg.oninput = () => { textBg.value = colorBg.value; updateBg(colorBg.value); };
        textBg.onchange = () => { if (/^#[0-9A-F]{6}$/i.test(textBg.value)) { colorBg.value = textBg.value; updateBg(textBg.value); } };
        colorBg.onchange = () => pushToHistory(JSON.parse(JSON.stringify(draftState)), `Changed theme background color to ${colorBg.value}`);
    }

    // 9. Image Asset Updater Modal Submission
    const imgModal = document.getElementById("admin-image-modal");
    const imgClose = document.getElementById("admin-image-close");
    const imgSubmit = document.getElementById("admin-image-submit");
    const imgFile = document.getElementById("img-file-upload");
    const imgPreview = document.getElementById("img-upload-preview");
    const imgPreviewContainer = document.getElementById("img-upload-preview-container");
    const imgFileName = document.getElementById("img-upload-name");

    if (imgClose) imgClose.onclick = () => imgModal.classList.remove("active");

    if (imgFile) {
        imgFile.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    imgPreview.src = event.target.result;
                    imgPreviewContainer.style.display = "flex";
                    imgFileName.innerText = file.name;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    if (imgSubmit) {
        imgSubmit.onclick = () => {
            const targetId = document.getElementById("img-target-id").value;
            const inputUrl = document.getElementById("img-source-url").value.trim();
            const localSrc = imgPreview.src;
            
            // Choose local base64 if set, otherwise URL
            let finalSrc = (imgFile.files && imgFile.files.length > 0) ? localSrc : inputUrl;

            if (!finalSrc) {
                alert("Please select a file or enter an image URL.");
                return;
            }

            if (targetId.includes(".")) {
                const [collection, itemId, field] = targetId.split(".");
                const item = draftState[collection].find(x => x.id === itemId);
                if (item) {
                    item[field] = finalSrc;
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Updated asset image for portfolio item ${itemId}`);
                    applyState(draftState);
                    saveDraft();
                }
            }

            // Clear modal fields and close
            imgFile.value = "";
            document.getElementById("img-source-url").value = "";
            imgModal.classList.remove("active");
        };
    }

    // 10. Products Catalog Form Submissions
    // Services
    const btnAddService = document.getElementById("btn-add-service");
    const serviceFormModal = document.getElementById("admin-service-edit-modal");
    const serviceFormClose = document.getElementById("admin-service-form-close");
    const serviceForm = document.getElementById("service-item-form");

    if (btnAddService) {
        btnAddService.onclick = () => {
            document.getElementById("service-modal-title").innerText = "Add New Service Offering";
            document.getElementById("service-form-id").value = "";
            serviceForm.reset();
            serviceFormModal.classList.add("active");
        };
    }
    if (serviceFormClose) serviceFormClose.onclick = () => serviceFormModal.classList.remove("active");

    if (serviceForm) {
        serviceForm.onsubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById("service-form-id").value;
            const category = document.getElementById("service-form-category").value;
            const name = document.getElementById("service-form-name").value.trim();
            const price = document.getElementById("service-form-price").value.trim();
            const desc = document.getElementById("service-form-desc").value.trim();
            const features = document.getElementById("service-form-features").value.trim().split("\n").map(f => f.trim()).filter(Boolean);

            if (id) {
                // Editing existing service
                const srv = draftState.services.find(x => x.id === id);
                if (srv) {
                    srv.category = category;
                    srv.name = name;
                    srv.price = price;
                    srv.desc = desc;
                    srv.features = features;
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Modified service item details [${id}]`);
                }
            } else {
                // Adding new service
                const newSrv = {
                    id: `srv-custom-${Date.now()}`,
                    category: category,
                    name: name,
                    price: price,
                    desc: desc,
                    features: features
                };
                draftState.services.push(newSrv);
                pushToHistory(JSON.parse(JSON.stringify(draftState)), `Added new service item: "${name}"`);
            }

            applyState(draftState);
            renderServicesManagerTable();
            saveDraft();
            serviceFormModal.classList.remove("active");
        };
    }

    // Portfolio Form
    const btnAddPortfolio = document.getElementById("btn-add-portfolio");
    const portfolioFormModal = document.getElementById("admin-portfolio-edit-modal");
    const portfolioFormClose = document.getElementById("admin-portfolio-form-close");
    const portfolioForm = document.getElementById("portfolio-item-form");

    if (btnAddPortfolio) {
        btnAddPortfolio.onclick = () => {
            document.getElementById("portfolio-modal-title").innerText = "Add Portfolio Work Showcase";
            document.getElementById("portfolio-form-id").value = "";
            portfolioForm.reset();
            portfolioFormModal.classList.add("active");
        };
    }
    if (portfolioFormClose) portfolioFormClose.onclick = () => portfolioFormModal.classList.remove("active");

    if (portfolioForm) {
        portfolioForm.onsubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById("portfolio-form-id").value;
            const category = document.getElementById("portfolio-form-category").value;
            const title = document.getElementById("portfolio-form-title").value.trim();
            const desc = document.getElementById("portfolio-form-desc").value.trim();
            const img = document.getElementById("portfolio-form-image").value.trim();
            const tag = document.getElementById("portfolio-form-tag").value.trim();

            if (id) {
                // Editing
                const port = draftState.portfolio.find(x => x.id === id);
                if (port) {
                    port.category = category;
                    port.title = title;
                    port.desc = desc;
                    port.img = img;
                    port.tag = tag;
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Modified portfolio work details [${id}]`);
                }
            } else {
                // Adding
                const newPort = {
                    id: `port-custom-${Date.now()}`,
                    category: category,
                    title: title,
                    desc: desc,
                    img: img,
                    tag: tag
                };
                draftState.portfolio.push(newPort);
                pushToHistory(JSON.parse(JSON.stringify(draftState)), `Added new portfolio work: "${title}"`);
            }

            applyState(draftState);
            renderPortfolioManagerTable();
            saveDraft();
            portfolioFormModal.classList.remove("active");
        };
    }

    // FAQ Form
    const btnAddFaq = document.getElementById("btn-add-faq");
    const faqFormModal = document.getElementById("admin-faq-edit-modal");
    const faqFormClose = document.getElementById("admin-faq-form-close");
    const faqForm = document.getElementById("faq-item-form");

    if (btnAddFaq) {
        btnAddFaq.onclick = () => {
            document.getElementById("faq-modal-title").innerText = "Add FAQ Item";
            document.getElementById("faq-form-id").value = "";
            faqForm.reset();
            faqFormModal.classList.add("active");
        };
    }
    if (faqFormClose) faqFormClose.onclick = () => faqFormModal.classList.remove("active");

    if (faqForm) {
        faqForm.onsubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById("faq-form-id").value;
            const question = document.getElementById("faq-form-question").value.trim();
            const answer = document.getElementById("faq-form-answer").value.trim();

            if (id) {
                // Editing
                const faq = draftState.faqs.find(x => x.id === id);
                if (faq) {
                    faq.question = question;
                    faq.answer = answer;
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Modified FAQ item details [${id}]`);
                }
            } else {
                // Adding
                const newFaq = {
                    id: `faq-custom-${Date.now()}`,
                    question: question,
                    answer: answer
                };
                draftState.faqs.push(newFaq);
                pushToHistory(JSON.parse(JSON.stringify(draftState)), `Added new FAQ question: "${question}"`);
            }

            applyState(draftState);
            renderFAQManagerTable();
            saveDraft();
            faqFormModal.classList.remove("active");
        };
    }

    // Manager tab switchers
    document.querySelectorAll(".m-tab-btn").forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll(".m-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".m-tab-pane").forEach(p => p.classList.remove("active"));
            
            btn.classList.add("active");
            const targetPane = btn.getAttribute("data-mtab");
            const paneEl = document.getElementById(targetPane);
            if (paneEl) paneEl.classList.add("active");
        };
    });

    // Clear leads inbox button
    const btnClearLeads = document.getElementById("btn-clear-leads");
    if (btnClearLeads) {
        btnClearLeads.onclick = () => {
            if (confirm("Are you sure you want to clear ALL inquiries? This action cannot be undone.")) {
                leads = [];
                localStorage.setItem("3m_studio_leads", JSON.stringify(leads));
                updateMsgCountBadge();
                renderLeadsList();
                addAuditLog("Cleared all message inquiry logs.");
            }
        };
    }
}

// --- Dynamic Services Table inside Products Catalog ---
function renderServicesManagerTable() {
    const list = document.getElementById("services-manager-list");
    if (!list) return;
    list.innerHTML = "";

    draftState.services.forEach(srv => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${srv.name}</strong></td>
            <td><span class="table-badge">${srv.category}</span></td>
            <td><code>${srv.price}</code></td>
            <td><span class="table-desc-preview" title="${srv.desc}">${srv.desc.substring(0, 45)}...</span></td>
            <td class="table-actions">
                <button class="table-btn table-btn-edit btn-edit-srv" data-srv-id="${srv.id}">Edit</button>
                <button class="table-btn table-btn-delete btn-del-srv" data-srv-id="${srv.id}">Delete</button>
            </td>
        `;
        list.appendChild(tr);
    });

    // Wire clicks
    list.querySelectorAll(".btn-edit-srv").forEach(btn => {
        btn.onclick = () => {
            const srvId = btn.getAttribute("data-srv-id");
            const srv = draftState.services.find(x => x.id === srvId);
            if (srv) {
                document.getElementById("service-modal-title").innerText = "Edit Service Offering Details";
                document.getElementById("service-form-id").value = srv.id;
                document.getElementById("service-form-name").value = srv.name;
                document.getElementById("service-form-category").value = srv.category;
                document.getElementById("service-form-price").value = srv.price;
                document.getElementById("service-form-desc").value = srv.desc;
                document.getElementById("service-form-features").value = srv.features.join("\n");
                
                document.getElementById("admin-service-edit-modal").classList.add("active");
            }
        };
    });

    list.querySelectorAll(".btn-del-srv").forEach(btn => {
        btn.onclick = () => {
            const srvId = btn.getAttribute("data-srv-id");
            if (confirm("Are you sure you want to delete this service card?")) {
                const index = draftState.services.findIndex(x => x.id === srvId);
                if (index > -1) {
                    const deletedName = draftState.services[index].name;
                    draftState.services.splice(index, 1);
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Deleted service offering: "${deletedName}"`);
                    applyState(draftState);
                    renderServicesManagerTable();
                    saveDraft();
                }
            }
        };
    });
}

// --- Dynamic Portfolio Table inside Products Catalog ---
function renderPortfolioManagerTable() {
    const list = document.getElementById("portfolio-manager-list");
    if (!list) return;
    list.innerHTML = "";

    draftState.portfolio.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${item.title}</strong></td>
            <td><span class="table-badge">${item.category}</span></td>
            <td><code>${item.img.substring(0, 30)}...</code></td>
            <td class="table-actions">
                <button class="table-btn table-btn-edit btn-edit-port" data-port-id="${item.id}">Edit</button>
                <button class="table-btn table-btn-delete btn-del-port" data-port-id="${item.id}">Delete</button>
            </td>
        `;
        list.appendChild(tr);
    });

    list.querySelectorAll(".btn-edit-port").forEach(btn => {
        btn.onclick = () => {
            const portId = btn.getAttribute("data-port-id");
            const port = draftState.portfolio.find(x => x.id === portId);
            if (port) {
                document.getElementById("portfolio-modal-title").innerText = "Edit Portfolio Work Details";
                document.getElementById("portfolio-form-id").value = port.id;
                document.getElementById("portfolio-form-title").value = port.title;
                document.getElementById("portfolio-form-category").value = port.category;
                document.getElementById("portfolio-form-desc").value = port.desc;
                document.getElementById("portfolio-form-image").value = port.img;
                document.getElementById("portfolio-form-tag").value = port.tag;

                document.getElementById("admin-portfolio-edit-modal").classList.add("active");
            }
        };
    });

    list.querySelectorAll(".btn-del-port").forEach(btn => {
        btn.onclick = () => {
            const portId = btn.getAttribute("data-port-id");
            if (confirm("Are you sure you want to delete this portfolio card?")) {
                const index = draftState.portfolio.findIndex(x => x.id === portId);
                if (index > -1) {
                    const deletedTitle = draftState.portfolio[index].title;
                    draftState.portfolio.splice(index, 1);
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Deleted portfolio item: "${deletedTitle}"`);
                    applyState(draftState);
                    renderPortfolioManagerTable();
                    saveDraft();
                }
            }
        };
    });
}

// --- Dynamic FAQ Table inside Products Catalog ---
function renderFAQManagerTable() {
    const list = document.getElementById("faqs-manager-list");
    if (!list) return;
    list.innerHTML = "";

    draftState.faqs.forEach(faq => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${faq.question}</strong></td>
            <td><span>${faq.answer.substring(0, 50)}...</span></td>
            <td class="table-actions">
                <button class="table-btn table-btn-edit btn-edit-faq" data-faq-id="${faq.id}">Edit</button>
                <button class="table-btn table-btn-delete btn-del-faq" data-faq-id="${faq.id}">Delete</button>
            </td>
        `;
        list.appendChild(tr);
    });

    list.querySelectorAll(".btn-edit-faq").forEach(btn => {
        btn.onclick = () => {
            const faqId = btn.getAttribute("data-faq-id");
            const faq = draftState.faqs.find(x => x.id === faqId);
            if (faq) {
                document.getElementById("faq-modal-title").innerText = "Edit FAQ Question & Answer";
                document.getElementById("faq-form-id").value = faq.id;
                document.getElementById("faq-form-question").value = faq.question;
                document.getElementById("faq-form-answer").value = faq.answer;

                document.getElementById("admin-faq-edit-modal").classList.add("active");
            }
        };
    });

    list.querySelectorAll(".btn-del-faq").forEach(btn => {
        btn.onclick = () => {
            const faqId = btn.getAttribute("data-faq-id");
            if (confirm("Are you sure you want to delete this FAQ question?")) {
                const index = draftState.faqs.findIndex(x => x.id === faqId);
                if (index > -1) {
                    draftState.faqs.splice(index, 1);
                    pushToHistory(JSON.parse(JSON.stringify(draftState)), `Deleted FAQ accordion item`);
                    applyState(draftState);
                    renderFAQManagerTable();
                    saveDraft();
                }
            }
        };
    });
}

// --- Populate Customer Leads list ---
function renderLeadsList() {
    const container = document.getElementById("leads-list-container");
    const totalCount = document.getElementById("lead-stat-count");
    const orderCount = document.getElementById("lead-stat-orders");
    
    if (!container) return;
    
    totalCount.innerText = leads.length;
    orderCount.innerText = Math.round(leads.length * 0.4); // Simulated Orders ratio

    if (leads.length === 0) {
        container.innerHTML = `<div class="no-leads">No contact inquiries logged yet.</div>`;
        return;
    }

    container.innerHTML = leads.map(l => `
        <div class="lead-card">
            <div class="lead-card-header">
                <div class="lead-name">
                    <h5>${l.name}</h5>
                    <span class="lead-email">${l.email} | Received: ${l.timestamp}</span>
                </div>
                <div class="lead-tag">${l.service}</div>
            </div>
            <p class="lead-message">"${l.message}"</p>
        </div>
    `).join("");
}

function updateMsgCountBadge() {
    const countBadge = document.getElementById("tb-msg-count");
    if (countBadge) {
        countBadge.innerText = leads.length;
    }
}

// --- Close modal triggers on clicking overlays ---
document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.classList.remove("active");
        }
    };
});

// --- Scroll Counters Animations ---
function initCounterAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll(".stat-number");
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute("data-stat-target"));
                    const countEl = stat.querySelector(".count-val");
                    let current = 0;
                    const duration = 1500;
                    const steps = 60;
                    const increment = target / steps;
                    const stepTime = duration / steps;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            countEl.innerText = target;
                            clearInterval(timer);
                        } else {
                            countEl.innerText = Math.round(current);
                        }
                    }, stepTime);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.getElementById("statistics");
    if (statsSection) observer.observe(statsSection);
}

// --- Preloader Progress simulation ---
function initPreloader() {
    const loader = document.getElementById("preloader");
    const bar = document.getElementById("loader-bar");
    const pct = document.getElementById("loader-percentage");
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add("fade-out");
            }, 400);
        }
        bar.style.width = progress + "%";
        pct.innerText = progress + "%";
    }, 80);
}

// --- Back to Top Trigger Button ---
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });

    btn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// --- Custom Gaming Cursor Spark Trail (MouseMove Spark generation) ---
function initCursorSparkTrail() {
    const cursor = document.getElementById("custom-cursor");
    const dot = document.getElementById("custom-cursor-dot");
    const container = document.getElementById("spark-container");
    
    if (!cursor || !dot) return;

    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener("mousemove", (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        
        dot.style.left = cursorX + "px";
        dot.style.top = cursorY + "px";

        // Spark Particle creation (throttled)
        if (Math.random() < 0.18) {
            createSpark(cursorX, cursorY);
        }
    });

    // Inertia lag on outer cursor circle
    function animateCursor() {
        const dx = cursorX - dotX;
        const dy = cursorY - dotY;
        
        dotX += dx * 0.15;
        dotY += dy * 0.15;
        
        cursor.style.left = dotX + "px";
        cursor.style.top = dotY + "px";
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover Scaling effect links
    const interactiveSelectors = "a, button, input, textarea, select, .faq-header, .img-edit-overlay, .tab-btn, .filter-btn";
    document.addEventListener("mouseover", (e) => {
        if (e.target.closest(interactiveSelectors)) {
            cursor.classList.add("cursor-hover");
        }
    });
    document.addEventListener("mouseout", (e) => {
        if (!e.target.closest(interactiveSelectors)) {
            cursor.classList.remove("cursor-hover");
        }
    });

    function createSpark(x, y) {
        const spark = document.createElement("div");
        spark.className = "cursor-spark";
        
        // Random drift coordinates
        const driftX = (Math.random() - 0.5) * 35;
        const driftY = (Math.random() - 0.5) * 35;
        
        spark.style.left = x + "px";
        spark.style.top = y + "px";
        spark.style.setProperty("--dx", `${driftX}px`);
        spark.style.setProperty("--dy", `${driftY}px`);

        // Set color variants (blue, cyan, purple)
        const colors = ["#00f2fe", "#7f00ff", "#a855f7", "#ffffff"];
        spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
    }
}

// --- Live Chat Bot Widget Simulator ---
function initChatbot() {
    const trigger = document.getElementById("chat-trigger");
    const windowEl = document.getElementById("chat-window");
    const close = document.getElementById("chat-close");
    const input = document.getElementById("chat-input");
    const send = document.getElementById("chat-send");
    const msgContainer = document.getElementById("chat-messages");
    const badge = document.getElementById("chat-badge");

    let chatOpened = false;

    // Toggle Chat Window
    trigger.onclick = () => {
        windowEl.classList.toggle("active");
        chatOpened = !chatOpened;
        if (chatOpened) {
            badge.style.display = "none";
            setTimeout(() => input.focus(), 300);
        }
    };

    close.onclick = (e) => {
        e.stopPropagation();
        windowEl.classList.remove("active");
        chatOpened = false;
    };

    const handleSendMessage = () => {
        const txt = input.value.trim();
        if (!txt) return;

        // User message UI bubble
        appendMessage(txt, "user");
        input.value = "";
        
        // Auto scroll
        msgContainer.scrollTop = msgContainer.scrollHeight;

        // Simulate Support Bot replies
        setTimeout(() => {
            let replyText = "Thanks for your message! Our team is currently online. For custom inquiries, please submit our Contact Form or join our Discord server (discord.gg/3mstudio) for immediate support.";
            const q = txt.toLowerCase();
            
            if (q.includes("roblox")) {
                replyText = "🎮 **Roblox Development** is our core specialty! We craft simulators, custom gameplay mechanics, data scripts, and responsive UIs. Our custom pricing starts at $99. Submit the form below for a quote.";
            } else if (q.includes("discord") || q.includes("bot")) {
                replyText = "🤖 **Discord Setups & Custom Bots** are delivered in 3-5 days. We implement verification panels, role systems, and Javascript custom API integrations starting at $49.";
            } else if (q.includes("website") || q.includes("site") || q.includes("web")) {
                replyText = "🌐 We design premium **Gaming and Business Websites** featuring custom landing pages, dashboards, and integrations. Mockups start at $129. Let us know your specifications!";
            } else if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
                replyText = "💰 Our prices vary based on complexity. Standard Discord server setups start at $49, Discord bots at $149, Roblox systems at $99, and websites at $129. Custom quotes are free!";
            }

            appendMessage(replyText, "bot");
            msgContainer.scrollTop = msgContainer.scrollHeight;
        }, 1000);
    };

    send.onclick = handleSendMessage;
    input.onkeydown = (e) => {
        if (e.key === "Enter") handleSendMessage();
    };

    function appendMessage(text, sender) {
        const bubble = document.createElement("div");
        bubble.className = `message ${sender}`;
        bubble.innerHTML = `
            <div class="message-content">${text}</div>
            <div class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        `;
        msgContainer.appendChild(bubble);
    }
}

// --- Main Window Load Entry Point ---
window.onload = () => {
    initPreloader();
    initStates();
    wireEvents();
    initBackToTop();
    initCounterAnimations();
    initCursorSparkTrail();
    initChatbot();
};
