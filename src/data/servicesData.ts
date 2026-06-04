export interface ServiceData {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    stats: Array<{ value: string; label: string }>;
  };
  about: {
    title: string;
    description: string;
    features: string[];
  };
  solutions: {
    title: string;
    cards: Array<{ title: string; description: string; icon: string }>;
  };
  process: {
    title: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "website-development": {
    hero: {
      badge: "Premium Website Development",
      title: "WE BUILD MODERN WEBSITES THAT GROW BRANDS",
      subtitle: "We create premium websites with modern UI/UX, fast performance, responsive layouts, and scalable development solutions for startups, businesses, and digital brands.",
      stats: [
        { value: "150+", label: "Projects Delivered" },
        { value: "45+", label: "Global Clients" },
        { value: "98%", label: "Client Satisfaction" }
      ]
    },
    about: {
      title: "CUSTOM WEBSITE DEVELOPMENT",
      description: "We develop high-performance websites designed for growth, engagement, and conversions. Every project is built with modern technologies, premium aesthetics, and optimized performance.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Modern UI/UX"
      ]
    },
    solutions: {
      title: "WEBSITE DEVELOPMENT SOLUTIONS",
      cards: [
        {
          title: "Business Websites",
          description: "Professional websites for startups, agencies, and companies.",
          icon: "briefcase"
        },
        {
          title: "WordPress Development",
          description: "Custom WordPress websites with easy content management.",
          icon: "globe"
        },
        {
          title: "eCommerce Stores",
          description: "Modern online stores designed for maximum conversions.",
          icon: "shopping-bag"
        },
        {
          title: "Landing Pages",
          description: "High-converting landing pages for marketing campaigns.",
          icon: "layers"
        },
        {
          title: "Custom Web Apps",
          description: "Advanced web applications with scalable functionality.",
          icon: "code-xml"
        },
        {
          title: "Website Redesign",
          description: "Transform outdated websites into premium experiences.",
          icon: "refresh-cw"
        }
      ]
    },
    process: {
      title: "OUR SIMPLE FIVE-STEP PROCESS",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "Understanding business goals and project requirements."
        },
        {
          number: "02",
          title: "Design",
          description: "Creating modern UI/UX layouts and user experiences."
        },
        {
          number: "03",
          title: "Development",
          description: "Building responsive and scalable website solutions."
        },
        {
          number: "04",
          title: "Testing",
          description: "Optimizing performance and fixing usability issues."
        },
        {
          number: "05",
          title: "Launch",
          description: "Deploying the project with ongoing support services."
        }
      ]
    }
  },
  "ui-ux-design": {
    hero: {
      badge: "Creative UI/UX Design",
      title: "WE DESIGN MODERN INTERFACES THAT ENGAGE",
      subtitle: "Crafting intuitive and visually stunning user experiences that drive user satisfaction and business growth through user-centric design principles.",
      stats: [
        { value: "200+", label: "Interfaces Designed" },
        { value: "60+", label: "Brand Identities" },
        { value: "100%", label: "User Focus" }
      ]
    },
    about: {
      title: "USER-CENTRIC EXPERIENCE DESIGN",
      description: "Our design process focuses on understanding your users' needs and translating them into seamless digital interactions that are both beautiful and functional.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Identity"
      ]
    },
    solutions: {
      title: "UI/UX DESIGN SOLUTIONS",
      cards: [
        {
          title: "Mobile App Design",
          description: "Intuitive interfaces for iOS and Android applications.",
          icon: "smartphone"
        },
        {
          title: "Web Application Design",
          description: "Scalable and responsive designs for complex web tools.",
          icon: "monitor"
        },
        {
          title: "Dashboard Design",
          description: "Clean and data-driven administrative interfaces.",
          icon: "panels-top-left"
        },
        {
          title: "Interaction Design",
          description: "Engaging animations and micro-interactions.",
          icon: "mouse-pointer2"
        },
        {
          title: "Design Systems",
          description: "Consistent and reusable component libraries.",
          icon: "layers"
        },
        {
          title: "UX Audit",
          description: "Expert analysis to improve existing user journeys.",
          icon: "search"
        }
      ]
    },
    process: {
      title: "OUR CREATIVE DESIGN WORKFLOW",
      steps: [
        {
          number: "01",
          title: "Research",
          description: "Analyzing user behavior and market trends."
        },
        {
          number: "02",
          title: "Wireframe",
          description: "Mapping out structure and user flows."
        },
        {
          number: "03",
          title: "Visual Design",
          description: "Crafting high-fidelity UI and aesthetics."
        },
        {
          number: "04",
          title: "Prototype",
          description: "Building interactive models for testing."
        },
        {
          number: "05",
          title: "Iterate",
          description: "Refining based on feedback and testing."
        }
      ]
    }
  },
  "seo-optimization": {
    hero: {
      badge: "Strategic SEO Optimization",
      title: "WE OPTIMIZE SEARCH RANKINGS TO GROW SALES",
      subtitle: "Increase your organic visibility and drive high-quality traffic to your website with our data-driven SEO strategies and technical expertise.",
      stats: [
        { value: "85%", label: "Avg. Growth" },
        { value: "500+", label: "Ranked Keywords" },
        { value: "10x", label: "ROI Driven" }
      ]
    },
    about: {
      title: "TECHNICAL & STRATEGIC SEO",
      description: "We go beyond just keywords, focusing on technical health, content authority, and user intent to ensure sustainable long-term growth in search results.",
      features: [
        "Keyword Research",
        "Technical SEO",
        "Content Strategy",
        "Link Building"
      ]
    },
    solutions: {
      title: "SEO SOLUTIONS",
      cards: [
        {
          title: "Technical SEO",
          description: "Fixing site architecture, speed, and indexing issues.",
          icon: "settings"
        },
        {
          title: "On-Page SEO",
          description: "Optimizing content and meta data for target keywords.",
          icon: "globe"
        },
        {
          title: "Link Building",
          description: "Building high-authority backlinks to boost credibility.",
          icon: "share2"
        },
        {
          title: "Content Marketing",
          description: "Creating valuable content that ranks and converts.",
          icon: "panels-top-left"
        },
        {
          title: "Local SEO",
          description: "Dominating local search results and Map listings.",
          icon: "target"
        },
        {
          title: "Performance SEO",
          description: "Continuous monitoring and data-driven adjustments.",
          icon: "trending-up"
        }
      ]
    },
    process: {
      title: "OUR DATA-DRIVEN SEO PROCESS",
      steps: [
        {
          number: "01",
          title: "Audit",
          description: "Comprehensive analysis of current performance."
        },
        {
          number: "02",
          title: "Strategy",
          description: "Developing a custom roadmap for growth."
        },
        {
          number: "03",
          title: "Execution",
          description: "Implementing technical and content updates."
        },
        {
          number: "04",
          title: "Monitoring",
          description: "Tracking rankings and traffic movements."
        },
        {
          number: "05",
          title: "Reporting",
          description: "Monthly insights and strategic refinements."
        }
      ]
    }
  },
  "branding": {
    hero: {
      badge: "Unique Brand Identity",
      title: "WE CRAFT DISTINCT IDENTITIES THAT LAST",
      subtitle: "We build memorable brands that connect with your audience and stand out in the marketplace through strategic design and storytelling.",
      stats: [
        { value: "100+", label: "Brand Logos" },
        { value: "15+", label: "Industries" },
        { value: "Unique", label: "Storytelling" }
      ]
    },
    about: {
      title: "STRATEGIC BRAND BUILDING",
      description: "Branding is more than a logo. We create comprehensive visual and verbal identities that define who you are and what you stand for.",
      features: [
        "Logo Design",
        "Brand Strategy",
        "Visual Identity",
        "Voice & Tone"
      ]
    },
    solutions: {
      title: "BRANDING SOLUTIONS",
      cards: [
        {
          title: "Logo Design",
          description: "Iconic and scalable logos that define your brand.",
          icon: "sparkles"
        },
        {
          title: "Visual Identity",
          description: "Cohesive color palettes and typography systems.",
          icon: "palette"
        },
        {
          title: "Brand Guidelines",
          description: "Comprehensive rules for brand consistency.",
          icon: "layers"
        },
        {
          title: "Stationery Design",
          description: "Professional business cards and collateral.",
          icon: "briefcase"
        },
        {
          title: "Social Media Kits",
          description: "Branded assets for all social platforms.",
          icon: "share2"
        },
        {
          title: "Brand Voice",
          description: "Defining your verbal identity and messaging.",
          icon: "mouse-pointer2"
        }
      ]
    },
    process: {
      title: "OUR STRATEGIC BRAND WORKFLOW",
      steps: [
        {
          number: "01",
          title: "Discovery",
          description: "Uncovering your brand values and mission."
        },
        {
          number: "02",
          title: "Concept",
          description: "Developing initial creative directions."
        },
        {
          number: "03",
          title: "Design",
          description: "Refining visual elements and logo."
        },
        {
          number: "04",
          title: "Assets",
          description: "Creating final brand collateral."
        },
        {
          number: "05",
          title: "Delivery",
          description: "Providing full guidelines and files."
        }
      ]
    }
  },
  "ecommerce": {
    hero: {
      badge: "High-Converting E-Commerce",
      title: "WE BUILD ONLINE STORES THAT SELL",
      subtitle: "Turn your visitors into customers with high-performance e-commerce platforms designed for speed, security, and seamless shopping experiences.",
      stats: [
        { value: "£1M+", label: "Client Revenue" },
        { value: "50+", label: "Stores Launched" },
        { value: "High", label: "Conversion" }
      ]
    },
    about: {
      title: "PERFORMANCE E-COMMERCE",
      description: "We specialize in building custom e-commerce solutions that handle high traffic and provide a smooth checkout process for your customers.",
      features: [
        "Inventory Management",
        "Secure Payments",
        "Mobile Shopping",
        "Sales Tracking"
      ]
    },
    solutions: {
      title: "E-COMMERCE SOLUTIONS",
      cards: [
        {
          title: "Custom Shopify",
          description: "Bespoke Shopify themes for unique brands.",
          icon: "shopping-bag"
        },
        {
          title: "WooCommerce",
          description: "Powerful online stores built on WordPress.",
          icon: "globe"
        },
        {
          title: "Payment Gateways",
          description: "Secure integration of major payment providers.",
          icon: "shield-check"
        },
        {
          title: "Cart Optimization",
          description: "Reducing abandonment and boosting sales.",
          icon: "zap"
        },
        {
          title: "Product Strategy",
          description: "Effective layout and categorization for sales.",
          icon: "target"
        },
        {
          title: "Order Automation",
          description: "Streamlining fulfillment and management.",
          icon: "refresh-cw"
        }
      ]
    },
    process: {
      title: "OUR E-COMMERCE LAUNCH PROCESS",
      steps: [
        {
          number: "01",
          title: "Analysis",
          description: "Evaluating product catalog and market."
        },
        {
          number: "02",
          title: "Setup",
          description: "Configuring platform and core features."
        },
        {
          number: "03",
          title: "Design",
          description: "Crafting a conversion-focused UI."
        },
        {
          number: "04",
          title: "Integration",
          description: "Connecting payments and shipping."
        },
        {
          number: "05",
          title: "Launch",
          description: "Going live and starting optimizations."
        }
      ]
    }
  },
  "digital-marketing": {
    hero: {
      badge: "Performance Digital Marketing",
      title: "WE GROW YOUR AUDIENCE AND ROI",
      subtitle: "Scale your business with multi-channel marketing campaigns that drive engagement, generate leads, and maximize return on investment.",
      stats: [
        { value: "5x", label: "Ad Spend ROI" },
        { value: "1M+", label: "Reach Generated" },
        { value: "Data", label: "Driven Results" }
      ]
    },
    about: {
      title: "INTEGRATED MARKETING STRATEGY",
      description: "Our approach combines creative content with precise targeting to reach your ideal customers where they spend their time online.",
      features: [
        "Social Media Ads",
        "Google Ads (PPC)",
        "Email Marketing",
        "Analytics & ROI"
      ]
    },
    solutions: {
      title: "MARKETING SOLUTIONS",
      cards: [
        {
          title: "Social Media Ads",
          description: "Targeted campaigns on Meta, TikTok, and more.",
          icon: "share2"
        },
        {
          title: "Google Ads",
          description: "Search and Display ads to capture intent.",
          icon: "target"
        },
        {
          title: "Email Marketing",
          description: "Automated flows that nurture and convert.",
          icon: "mail"
        },
        {
          title: "Content Ads",
          description: "Engaging video and image assets for growth.",
          icon: "palette"
        },
        {
          title: "Influencer Collabs",
          description: "Connecting your brand with creators.",
          icon: "globe"
        },
        {
          title: "ROI Analytics",
          description: "Detailed tracking of every penny spent.",
          icon: "trending-up"
        }
      ]
    },
    process: {
      title: "OUR MARKETING GROWTH CYCLE",
      steps: [
        {
          number: "01",
          title: "Targeting",
          description: "Defining your ideal customer profiles."
        },
        {
          number: "02",
          title: "Creative",
          description: "Developing ads and campaign assets."
        },
        {
          number: "03",
          title: "Launch",
          description: "Starting multi-channel campaigns."
        },
        {
          number: "04",
          title: "Optimize",
          description: "A/B testing and performance tuning."
        },
        {
          number: "05",
          title: "Scale",
          description: "Increasing spend on winning strategies."
        }
      ]
    }
  },
  "shopify-development": {
    hero: {
      badge: "Expert Shopify Development",
      title: "WE BUILD PREMIUM SHOPIFY EXPERIENCES",
      subtitle: "Launch a world-class Shopify store with custom features, high-speed performance, and a design that reflects your brand's unique identity.",
      stats: [
        { value: "Shopify", label: "Partner Studio" },
        { value: "40+", label: "Stores Built" },
        { value: "99.9%", label: "Uptime Focus" }
      ]
    },
    about: {
      title: "CUSTOM SHOPIFY SOLUTIONS",
      description: "We don't just use templates. We build custom Shopify themes and integrate apps that help your business scale effortlessly.",
      features: [
        "Custom Theme Dev",
        "App Integration",
        "Store Migration",
        "Speed Optimization"
      ]
    },
    solutions: {
      title: "SHOPIFY SOLUTIONS",
      cards: [
        {
          title: "Custom Themes",
          description: "Bespoke storefronts that stand out.",
          icon: "code-xml"
        },
        {
          title: "App Development",
          description: "Building custom Shopify apps for you.",
          icon: "cpu"
        },
        {
          title: "Store Setup",
          description: "End-to-end configuration and launch.",
          icon: "rocket"
        },
        {
          title: "Migrations",
          description: "Seamlessly moving to Shopify from elsewhere.",
          icon: "refresh-cw"
        },
        {
          title: "Speed Fixes",
          description: "Making your Shopify store lightning fast.",
          icon: "zap"
        },
        {
          title: "SEO for Shopify",
          description: "Optimizing your store for search sales.",
          icon: "search"
        }
      ]
    },
    process: {
      title: "OUR SHOPIFY BUILD WORKFLOW",
      steps: [
        {
          number: "01",
          title: "Scope",
          description: "Defining required features and apps."
        },
        {
          number: "02",
          title: "Design",
          description: "Creating a custom Shopify UI."
        },
        {
          number: "03",
          title: "Build",
          description: "Developing the theme and liquid code."
        },
        {
          number: "04",
          title: "Test",
          description: "Full mobile and checkout testing."
        },
        {
          number: "05",
          title: "Live",
          description: "Handover and successful store launch."
        }
      ]
    }
  },
  "website-maintenance": {
    hero: {
      badge: "Reliable Website Maintenance",
      title: "WE KEEP YOUR WEBSITE FAST AND SECURE",
      subtitle: "Focus on your business while we handle your website's technical health, security updates, and performance optimizations every single day.",
      stats: [
        { value: "24/7", label: "Monitoring" },
        { value: "Zero", label: "Downtime Focus" },
        { value: "Safe", label: "Daily Backups" }
      ]
    },
    about: {
      title: "TECHNICAL SUPPORT & CARE",
      description: "A website is never 'done'. We provide the ongoing care needed to keep your digital asset performing at its best and protected from threats.",
      features: [
        "Security Patches",
        "Daily Backups",
        "Speed Checks",
        "Content Updates"
      ]
    },
    solutions: {
      title: "MAINTENANCE SOLUTIONS",
      cards: [
        {
          title: "Security Audits",
          description: "Continuous protection from malware and hacks.",
          icon: "shield-check"
        },
        {
          title: "Core Updates",
          description: "Keeping WordPress and plugins up to date.",
          icon: "settings"
        },
        {
          title: "Backup Care",
          description: "Daily off-site backups for peace of mind.",
          icon: "refresh-cw"
        },
        {
          title: "Speed Maintenance",
          description: "Ongoing optimization for fast loading.",
          icon: "zap"
        },
        {
          title: "Content Help",
          description: "Updating text, images, and blog posts.",
          icon: "panels-top-left"
        },
        {
          title: "Bug Fixes",
          description: "Rapid response to any technical issues.",
          icon: "code-xml"
        }
      ]
    },
    process: {
      title: "OUR ONGOING SUPPORT CYCLE",
      steps: [
        {
          number: "01",
          title: "Audit",
          description: "Initial check of site health and security."
        },
        {
          number: "02",
          title: "Secure",
          description: "Implementing hardening and backups."
        },
        {
          number: "03",
          title: "Monitor",
          description: "24/7 technical and uptime tracking."
        },
        {
          number: "04",
          title: "Update",
          description: "Regular patches and performance tweaks."
        },
        {
          number: "05",
          title: "Support",
          description: "Always available for your requests."
        }
      ]
    }
  }
};
