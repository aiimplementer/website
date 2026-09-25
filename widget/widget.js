(function () {
  // ---------------------------------------------------------------------
  // AI Implementer chat widget — fully static build.
  // No backend, no fetch, no CORS: the menu tree is embedded right here,
  // so this one file is all you need to drop into any page.
  // To edit the menu, just edit MENU_DATA below and re-publish.
  // ---------------------------------------------------------------------
  var MENU_DATA = {
  "root": {
    "id": "root",
    "title": "",
    "message": "Hi! I'm the AI Implementer assistant. What would you like to know?",
    "options": [
      {
        "label": "Our Services",
        "target": "services"
      },
      {
        "label": "AI Solutions",
        "target": "solutions"
      },
      {
        "label": "About Shekhar",
        "target": "about"
      },
      {
        "label": "How We Work",
        "target": "how_we_work"
      },
      {
        "label": "Why Work With Us",
        "target": "why_us"
      },
      {
        "label": "FAQs & Portfolio",
        "target": "resources"
      },
      {
        "label": "Contact Us",
        "target": "contact"
      }
    ],
    "is_leaf": false
  },
  "services": {
    "id": "services",
    "title": "Our Services",
    "message": "We offer three core service areas:",
    "options": [
      {
        "label": "Product & Service Enhancement",
        "target": "svc_enhancement"
      },
      {
        "label": "Data Analytics & Insights",
        "target": "svc_analytics"
      },
      {
        "label": "Process Automation",
        "target": "svc_automation"
      },
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": false
  },
  "svc_enhancement": {
    "id": "svc_enhancement",
    "title": "Product & Service Enhancement",
    "message": "Enhance existing offerings with AI-driven improvements and smarter configurations.\n\n- Personalized user experiences\n- AI-generated marketing content\n- Smart product recommendations",
    "options": [
      {
        "label": "◀ Back to Services",
        "target": "services"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "svc_analytics": {
    "id": "svc_analytics",
    "title": "Data Analytics & Insights",
    "message": "Turn data into actionable insights and informed decisions.\n\n- Predictive analytics & trend forecasting\n- Natural language text insights\n- Computer vision analytics",
    "options": [
      {
        "label": "◀ Back to Services",
        "target": "services"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "svc_automation": {
    "id": "svc_automation",
    "title": "Process Automation",
    "message": "Automate repetitive tasks for improved productivity.\n\n- Workflow & process automation\n- AI-powered chatbots\n- Smart task prioritization",
    "options": [
      {
        "label": "◀ Back to Services",
        "target": "services"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "solutions": {
    "id": "solutions",
    "title": "AI Solutions",
    "message": "Explore ready-made solutions we've built for small businesses:",
    "options": [
      {
        "label": "Lead Capture & Auto Response Agent",
        "target": "sol_lead_capture"
      },
      {
        "label": "Data Analysis & Reporting Agent",
        "target": "sol_data_reporting"
      },
      {
        "label": "Automated LinkedIn/Facebook Posting",
        "target": "sol_social_posting"
      },
      {
        "label": "Customer Support & FAQ Automation",
        "target": "sol_support_faq"
      },
      {
        "label": "Mutual Fund Portfolio Web Analyzer",
        "target": "sol_mf_analyzer"
      },
      {
        "label": "Appointment Booking Agent",
        "target": "sol_appointment"
      },
      {
        "label": "WhatsApp Business Assistant",
        "target": "sol_whatsapp"
      },
      {
        "label": "Real Estate Manager",
        "target": "sol_real_estate"
      },
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": false
  },
  "sol_lead_capture": {
    "id": "sol_lead_capture",
    "title": "Lead Capture & Auto Response Agent",
    "message": "Category: Marketing Automation AI\n\nAutomatically capture new leads from forms or websites, store them in Google Sheets, and send instant personalized responses to both the lead and your team.\n\nFeatures:\n- Auto lead capture from forms\n- Google Sheets integration\n- Instant personalized response\n- Team notifications\n\nBenefits:\n- Instant engagement\n- Zero missed leads\n- Structured data collection\n- Faster conversions",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "sol_data_reporting": {
    "id": "sol_data_reporting",
    "title": "Data Analysis & Reporting Agent",
    "message": "Category: Business Intelligence & Insights AI\n\nAutomates data interpretation and visualization from Google Sheets, Excel, CRMs, or databases. Delivers AI-generated summaries, dashboards, and reports for management review.\n\nFeatures:\n- Automated report generation in Email\n- Real-time updates\n- AI-powered trend & anomaly detection\n- Multi-source data integration\n- Custom KPI monitoring\n\nBenefits:\n- Instant business insights\n- Eliminates manual data crunching\n- Professional, export-ready reports\n- Improved decision accuracy",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "sol_social_posting": {
    "id": "sol_social_posting",
    "title": "Automated LinkedIn / Facebook Posting Agent",
    "message": "Category: Marketing & Social Automation AI\n\nStay active on social media without manual effort. Posts can be scheduled or triggered directly from WhatsApp — draft, preview, and post instantly, or schedule for later.\n\nFeatures:\n- WhatsApp-triggered post creation\n- LinkedIn & Facebook integration\n- Scheduling and auto-posting\n- Smart caption generation\n- Content personalization by topic\n\nBenefits:\n- Zero manual posting effort\n- Consistent online presence\n- Convenient WhatsApp-based control",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "sol_support_faq": {
    "id": "sol_support_faq",
    "title": "Customer Support & FAQ Automation",
    "message": "Category: Support & Engagement AI\n\nAI-powered chatbots, virtual assistants, and workflow automation handle repetitive customer queries, provide instant answers, and escalate complex issues to human agents. 24/7 support across Web, WhatsApp, and Email.\n\nFeatures:\n- AI Chatbots & Virtual Assistants\n- Multi-channel support\n- Knowledge Base & FAQ integration\n- Smart escalation to human agents\n- Continuous learning from interactions\n\nBenefits:\n- 24/7 instant customer support\n- Reduced operational costs\n- Higher customer satisfaction",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "sol_mf_analyzer": {
    "id": "sol_mf_analyzer",
    "title": "Mutual Fund Portfolio Web Analyzer",
    "message": "Category: Wealth & Investment AI\n\nUpload your Mutual Fund CAS statement and instantly generate a detailed portfolio analysis report — fund-wise performance, XIRR calculations, and asset allocation analysis.\n\nA Pro version (Analyzer+) consolidates multiple CAS files, folios, and portfolios into a single dashboard for advisors and family offices.\n\nTry it free (Beta Live): https://mutualfundreport.netlify.app/",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Try the free Web Analyzer",
      "url": "https://mutualfundreport.netlify.app/"
    }
  },
  "sol_appointment": {
    "id": "sol_appointment",
    "title": "Appointment Booking Agent (ScheduleMate)",
    "message": "Category: Scheduling & Operations AI\n\nA smart scheduling assistant that books appointments instantly for clinics, gyms, salons, or housing society amenities. One shared calendar for WhatsApp and web, double-bookings rejected at the database level.\n\nFeatures:\n- Book by chat or public booking link\n- Desk view for staff to confirm & check in\n- Role-based access for admins, staff, viewers\n- Automatic customer records with visit history",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Know more about ScheduleMate",
      "url": "https://ai-implementer.netlify.app/schedulemate"
    }
  },
  "sol_whatsapp": {
    "id": "sol_whatsapp",
    "title": "WhatsApp as Your All-in-One Business Assistant",
    "message": "Category: Communication AI\n\nTransform WhatsApp into a smart business command center — Calendar, Contacts, Email, Research Agent, and Social Media, all managed from one chat via natural-language commands.\n\nBenefits:\n- Save time by reducing app-switching\n- Boost efficiency and communication\n- Stay organized and in control",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "sol_real_estate": {
    "id": "sol_real_estate",
    "title": "Real Estate Manager",
    "message": "Category: Business Management AI\n\nManage properties, clients, and enquiries effortlessly. Automate listings, personalize search results, and centralize client management for faster deal closures.\n\nFeatures:\n- Instant Enquiry-to-Listing Match\n- Personalized Search Results\n- Advanced Property Filters\n- Streamlined Client Management\n- Mobile and Web Access",
    "options": [
      {
        "label": "◀ Back to Solutions",
        "target": "solutions"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Enquire about this",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  },
  "about": {
    "id": "about",
    "title": "About Shekhar",
    "message": "I'm an AI enthusiast and technology partner/implementer/freelancer with over 24 years of experience in the IT industry, working with both domestic and international clients.\n\n- 16+ years as an Implementation Manager (Agile & Waterfall)\n- 11+ years contributing to product development in startup ecosystems\n\nPassionate about helping small and mid-sized businesses harness AI and automation to streamline operations, boost productivity, and achieve sustainable growth.",
    "options": [
      {
        "label": "Connect on LinkedIn",
        "target": "about_linkedin"
      },
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": false
  },
  "about_linkedin": {
    "id": "about_linkedin",
    "title": "LinkedIn",
    "message": "You can connect with Shekhar on LinkedIn.",
    "options": [
      {
        "label": "◀ Back",
        "target": "about"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Open LinkedIn Profile",
      "url": "https://www.linkedin.com/in/chandrashekhar-dhere-237ab44/"
    }
  },
  "how_we_work": {
    "id": "how_we_work",
    "title": "How We Work",
    "message": "Our streamlined AI implementation flow:\n\n1. Assess what you have — we analyze your processes, ideas, products, and services to define project scope.\n\n2. Evaluate the potential — we put your goals at the heart of our design process, using cutting-edge technologies.\n\n3. Implement the solution — we turn your vision into reality through smart platforms, seamless integrations, and measurable results.",
    "options": [
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": true
  },
  "why_us": {
    "id": "why_us",
    "title": "Why Work With Us",
    "message": "- Save Costs: reduce repetitive work with automation, cutting costs while boosting output.\n- Boost Efficiency: streamline workflows and simplify operations to improve turnaround time.\n- Scale Effortlessly: build scalable systems that grow with your business without added overhead.\n- Enhance Engagement: improve customer experience with personalized AI-driven communication.",
    "options": [
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": true
  },
  "resources": {
    "id": "resources",
    "title": "FAQs & Portfolio",
    "message": "Have more questions, or want to see past work?",
    "options": [
      {
        "label": "Read FAQs",
        "target": "res_faq"
      },
      {
        "label": "Read Blog Posts",
        "target": "res_blog"
      },
      {
        "label": "Download Portfolio (PDF)",
        "target": "res_portfolio"
      },
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": false
  },
  "res_faq": {
    "id": "res_faq",
    "title": "FAQs",
    "message": "Our full FAQ page covers common questions about pricing, process, and solutions.",
    "options": [
      {
        "label": "◀ Back",
        "target": "resources"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Open FAQs",
      "url": "https://ai-implementer.netlify.app/faq"
    }
  },
  "res_blog": {
    "id": "res_blog",
    "title": "Blog",
    "message": "Read our latest posts on AI and small business automation.",
    "options": [
      {
        "label": "◀ Back",
        "target": "resources"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Open Blog",
      "url": "https://ai-implementer.netlify.app/posts/blog"
    }
  },
  "res_portfolio": {
    "id": "res_portfolio",
    "title": "Portfolio",
    "message": "Download our portfolio to see past project work.",
    "options": [
      {
        "label": "◀ Back",
        "target": "resources"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Download Portfolio (PDF)",
      "url": "https://ai-implementer.netlify.app/ai-implementer-portfolio.pdf"
    }
  },
  "contact": {
    "id": "contact",
    "title": "Get in Touch",
    "message": "Whether you're exploring automation ideas, need help with AI tools, or want to streamline your workflow — let's connect.\n\nEmail: ai.implementer@gmail.com\nCall / WhatsApp: +91 80875 58460",
    "options": [
      {
        "label": "Send an Enquiry",
        "target": "contact_enquiry"
      },
      {
        "label": "◀ Back",
        "target": "root"
      }
    ],
    "is_leaf": false
  },
  "contact_enquiry": {
    "id": "contact_enquiry",
    "title": "Send Enquiry",
    "message": "Fill out the enquiry form and we'll get back to you.",
    "options": [
      {
        "label": "◀ Back",
        "target": "contact"
      }
    ],
    "is_leaf": true,
    "cta": {
      "label": "Open Enquiry Form",
      "url": "https://ai-implementer.netlify.app/enquiry"
    }
  }
};

  var ROOT_NODE_ID = "root";
  var history = []; // stack of node ids visited, for reference/debugging only

  // One-time sanity check so a typo in MENU_DATA fails loudly in the
  // console during development instead of silently breaking a button.
  (function validate() {
    var missing = [];
    Object.keys(MENU_DATA).forEach(function (id) {
      (MENU_DATA[id].options || []).forEach(function (opt) {
        if (!MENU_DATA[opt.target]) missing.push(id + " -> " + opt.target);
      });
    });
    if (!MENU_DATA[ROOT_NODE_ID]) missing.push("missing root node");
    if (missing.length) {
      console.error("AII chat widget: menu.json has dangling targets:", missing);
    }
  })();

  function injectStylesheet() {
    var scripts = document.getElementsByTagName("script");
    var thisScript = scripts[scripts.length - 1];
    var src = thisScript && thisScript.src ? thisScript.src : "";
    var base = src.replace(/widget\.js(\?.*)?$/, "");
    var link = el("link", { rel: "stylesheet", href: base + "widget.css" });
    document.head.appendChild(link);

    if (!document.getElementById("aii-font-link")) {
      var fontLink = el("link", {
        id: "aii-font-link",
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      });
      document.head.appendChild(fontLink);
    }
  }

  function el(tag, props) {
    var e = document.createElement(tag);
    if (props) Object.keys(props).forEach(function (k) { e[k] = props[k]; });
    return e;
  }

  function injectMarkup() {
    var bubble = el("button", { id: "aii-chat-bubble", innerText: "💬", title: "Chat with us" });
    var panel = el("div", { id: "aii-chat-panel" });

    var header = el("div", { id: "aii-chat-header" });
    header.appendChild(el("span", { innerText: "AI Implementer" }));
    var headerBtns = el("div", { id: "aii-chat-header-btns" });
    var homeBtn = el("button", { id: "aii-chat-home", innerText: "🏠", title: "Back to main menu" });
    var closeBtn = el("button", { id: "aii-chat-close", innerText: "✕" });
    headerBtns.appendChild(homeBtn);
    headerBtns.appendChild(closeBtn);
    header.appendChild(headerBtns);

    var body = el("div", { id: "aii-chat-body" });

    panel.appendChild(header);
    panel.appendChild(body);

    document.body.appendChild(bubble);
    document.body.appendChild(panel);

    bubble.addEventListener("click", function () {
      panel.classList.add("aii-open");
      if (!body.dataset.loaded) {
        loadNode(ROOT_NODE_ID);
        body.dataset.loaded = "1";
      }
    });
    closeBtn.addEventListener("click", function () {
      panel.classList.remove("aii-open");
    });
    homeBtn.addEventListener("click", function () {
      loadNode(ROOT_NODE_ID);
    });

    return body;
  }

  var bodyEl;

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function showTyping() {
    var typing = el("div", { className: "aii-typing" });
    typing.appendChild(el("span", {}));
    typing.appendChild(el("span", {}));
    typing.appendChild(el("span", {}));
    bodyEl.appendChild(typing);
    return typing;
  }

  function loadNode(nodeId) {
    var node = MENU_DATA[nodeId];

    var typing = showTyping();
    bodyEl.scrollTop = bodyEl.scrollHeight;

    if (!node) {
      typing.remove();
      bodyEl.appendChild(
        el("div", { className: "aii-chat-error", innerText: "Sorry, couldn't load that. Please try again shortly." })
      );
      console.error("AII chat widget: unknown node id:", nodeId);
      return;
    }

    // No network round-trip needed — it's an in-memory lookup — but keep a
    // short, deliberate pause so the typing dots read as "live" rather than
    // an instant, jarring swap.
    wait(300).then(function () {
      history.push(node.id);
      typing.remove();
      render(node);
    });
  }

  function render(node) {
    bodyEl.innerHTML = "";

    var title = null;
    if (node.title) {
      title = el("div", { id: "aii-chat-title", innerText: node.title, className: "aii-reveal" });
      bodyEl.appendChild(title);
    }
    var message = el("div", { id: "aii-chat-message", innerText: node.message, className: "aii-reveal" });
    bodyEl.appendChild(message);

    var revealables = [];

    (node.options || []).forEach(function (opt) {
      var btn = el("button", { className: "aii-option-btn aii-reveal", innerText: opt.label });
      btn.addEventListener("click", function () {
        loadNode(opt.target);
      });
      bodyEl.appendChild(btn);
      revealables.push(btn);
    });

    if (node.cta) {
      var link = el("a", {
        className: "aii-cta-btn aii-reveal",
        innerText: node.cta.label,
        href: node.cta.url,
        target: "_blank",
        rel: "noopener noreferrer",
      });
      bodyEl.appendChild(link);
      revealables.push(link);
    }

    var STEP_MS = 110;
    (title ? [title, message] : [message]).concat(revealables).forEach(function (elm, i) {
      setTimeout(function () {
        elm.classList.add("aii-show");
        bodyEl.scrollTop = bodyEl.scrollHeight;
      }, i * STEP_MS);
    });
  }

  function init() {
    injectStylesheet();
    bodyEl = injectMarkup();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
