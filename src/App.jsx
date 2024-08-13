import { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import CategorySection from "./CategorySection";
import "./App.css";
import Navbar from "./Navbar";
import SideCard from "./SideCard";

const categories = [
  {
    title: "Featured",
    cards: [
      {
        head: "Haircut",
        time: "1 hr, 30mins - 2hrs",
        para: "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
        price: "$90",
      },
      {
        head: "Blow Dry/Silk Press",
        time: "1 hr - 2hrs",
        para: "Please do NOT apply castor oil to hair before service. If you have NOT had a professional trim/haircut in the last 3 months, you must book a haircut service",
        price: "$85",
      },
      {
        head: "Deep Condition (Standard)",
        time: "15 mins",
        para: "This is an add on deep conditioning treatment service for clients who need to restore moisture back into their hair. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled.",
        price: "$25",
      },
      {
        head: "Root Touch-Up (Single Process)",
        time: "1 hr",
        para: "For RETURNING client, and anyone needing a root touch up. With less that 2 inches of root.",
        price: "$125",
      },
    ],
  },
  {
    title: "Haircutting",
    Content:
      "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
    cards: [
      {
        head: "A Bob Haircut",
        time: "1 hr - 2 hrs",
        para: "A bob cut, is a short to medium length haircut, in which the hair is typically cut straight around the head at approximately jaw level, and no longer than shoulder-length.",
        price: "$110",
      },
      {
        head: "Haircut",
        time: " hr, 30 mins - 2 hrs",
        para: "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
        price: "from $90",
      },
      {
        head: "Haircut Short Tapered",
        time: "1 hr - 2hrs",
        para: "A taper is a cut that leaves your hair long at the top and short on the sides. Hair gradually gets shorter as you move down the back and sides of your head. THIS IS NOT A BARBER HAIRCUT. We do not do low fades or tight fades. This is a soft short haircut.",
        price: "from $130",
      },
    ],
  },
  {
    title: "Styling",
    Content: "Our Silk Press service does not include a trim",
    cards: [
      {
        head: "Blow Dry/Silk Press",
        time: "1 hr - 2hrs",
        para: "Please do NOT apply castor oil to hair before service. If you have NOT had a professional trim/haircut in the last 3 months, you must book a haircut service",
        price: "$85",
      },
      {
        head: "Half Up Half Down Ponytail",
        time: "2 hrs",
        para: "Hair is not included.",
        price: "$225",
      },
      {
        head: "Ponytail",
        time: "2 hrs",
        para: "Hair is not included.",
        price: "$50",
      },
    ],
  },
  {
    title: "Color Services",
    Content: "",
    cards: [
      {
        head: "NEW SINGLE PROCESS WITH FULL HEAD HIGHLIGHTS",
        time: "2 hrs, 30mins",
        para: "This process completely changes your hair color to a brown, with a full head of blonde highlights added to create dimension. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)",
        price: "$495",
      },
      {
        head: "BLONDE HIGHLIGHTS (Half Head Highlights)Half Up Half Down Ponytail",
        time: "1hr, 30 mins",
        para: "A half head of highlights to make hair blonde, golden, or softs browns. Natural hair base color stays the same. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)",
        price: "$255",
      },
      {
        head: "COPPER/ RED HEADS/ BURGUNDY (Virgin Single Process)COPPER/ RED HEADS/ BURGUNDY (Virgin Single Process)",
        time: "2 hrs",
        para: "MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service).",
        price: "$195",
      },
      {
        head: "Dark BROWNS AND BLACK (Virgin Single Process.",
        time: "1 hr",
        para: "This is for clients who would like an overall color change in the dark brown family or black and who have never received color before. MUST BOOK STYLING SERVICE. (Please book a silk press, haircut, or wash and go for post color service)",
        price: "$155",
      },
    ],
  },
  {
    title: "Natural Hairstyling",
    Content: "",
    cards: [
      {
        head: "Flexi Rod Set",
        time: "3 hrs",
        price: "$125",
      },
      {
        head: "Wash & Go - Curly Style",
        time: "1 hr, 25 mins",
        price: "$60",
      },
      {
        head: "Braid-Out",
        time: "1 hr, 50 mins",
        price: "$125",
      },
      {
        head: "Flat Twist",
        time: "2 hrs",
        price: "$125",
      },
    ],
  },
  {
    title: "Relaxer/Texturizer/Keratin",
    Content: "",
    cards: [
      {
        head: "Relaxer",
        time: "1 hr, 25 mins",
        price: "$110",
      },
      {
        head: "Relaxer and haircut",
        time: "1 hr, 40 mins",
        price: "$160",
      },
      {
        head: "Virgin Relaxer and Hair Cut",
        time: "2 hrs, 15 mins",
        price: "$200",
      },
      {
        head: "Halo and Haircut",
        time: "1 hr",
        price: "$140",
      },
      {
        head: "Texturizer and Cut",
        time: "1 hr, 50 mins",
        price: "$190",
      },
      {
        head: "Texturizer for Curls",
        time: "1 hr, 40 mins",
        price: "$220",
      },
      {
        head: "Keratin Smoothing Treatment",
        time: "2 hrs, 45 mins",
        price: "$350",
      },
    ],
  },
  {
    title: "Extension, Installs and Wigs",
    Content: "",
    cards: [
      {
        head: "Install Removal",
        time: "1 hr, 30 mins",
        para: "Service includes safe removal of extension hair, take down of braided foundation from weave install performed at H2 Salon. . A detox shampoo, deep conditioning treatment. Afterwards hair will be blow dried. Additional styling service must be booked if seeking any styling.",
        price: "$100",
      },
      {
        head: "Intricate Weave Install",
        time: "5 hrs",
        para: "Service includes safe removal of extension hair, take down of braided foundation from weave install performed at H2 Salon. . A detox shampoo, deep conditioning treatment. Afterwards hair will be blow dried. Additional styling service must be booked if seeking any styling.",
        price: "$600",
      },
      {
        head: "Braid Down for Wig",
        time: "1 hr, 30 mins",
        para: "Does not include instillation. Includes wash condition and braid down.",
        price: "$100",
      },
      {
        head: "Shampoo/Blowdry (Braid Prep)",
        time: "1 hr",
        para: "Straightening/styling/trim is NOT included.",
        price: "$65",
      },
    ],
  },
  {
    title: "Treatments",
    Content: "",
    cards: [
      {
        head: "Detox Shampoo",
        time: "20 mins",
        para: "This is an add on treatment for clients who have taken out braids or a protective style and have scalp build-up. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled. ",
        price: "$40",
      },
      {
        head: "Deep Condition (Standard)",
        time: "15 mins",
        para: "This is an add on deep conditioning treatment service for clients who need to restore moisture back into their hair. MUST book styling or haircut service to follow. Appointments made without a styling service will be cancelled. ",
        price: "$25",
      },
    ],
  },
];

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].title);

  const handleCategoryClick = (categoryTitle) => {
    setActiveCategory(categoryTitle);
    const element = document.getElementById(categoryTitle);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".category-section");
      let found = false;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveCategory(section.id);
          found = true;
        }
      });

      if (!found) {
        setActiveCategory("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount to set the initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="page">
        <Navbar />
        <div className="fix">
          <CategoryList
            categories={categories.map((cat) => cat.title)}
            onClickCategory={handleCategoryClick}
            activeCategory={activeCategory}
          />
        </div>
        <div className="category-sections">
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              category={category}
              isActive={activeCategory === category.title}
              id={category.title}
            />
          ))}
        </div>
      </div>
      <SideCard />
    </div>
  );
};

export default App;
