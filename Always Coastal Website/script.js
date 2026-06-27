const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = document.querySelectorAll(".nav-menu a");
const revealItems = document.querySelectorAll(".reveal");
const carousel = document.querySelector("[data-carousel]");
const carouselTrack = document.querySelector("[data-carousel-track]");
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");

const properties = [
  { id: "TB-1001", status: "Active", address: "120 Harbor View Dr", city: "Tampa", county: "Hillsborough", price: "$6,250,000", beds: "5", baths: "6.5", sqft: 6850, lot: "0.62", year: "2023", type: "Single Family", waterfront: "Yes", days: "42", agent: "Jennifer Smith" },
  { id: "TB-1002", status: "Sold", address: "890 Bayshore Blvd", city: "Tampa", county: "Hillsborough", price: "$7,100,000", beds: "6", baths: "7.5", sqft: 8120, lot: "0.78", year: "2022", type: "Single Family", waterfront: "Yes", days: "18", agent: "Michael Davis" },
  { id: "TB-1003", status: "Active", address: "15 Gulf Breeze Ln", city: "Belleair", county: "Pinellas", price: "$8,495,000", beds: "6", baths: "7", sqft: 9025, lot: "1.15", year: "2025", type: "Single Family", waterfront: "Yes", days: "31", agent: "Ashley Morgan" },
  { id: "TB-1004", status: "Sold", address: "410 Ocean Crest Ct", city: "Clearwater", county: "Pinellas", price: "$6,850,000", beds: "5", baths: "5.5", sqft: 7100, lot: "0.83", year: "2021", type: "Single Family", waterfront: "Yes", days: "25", agent: "Robert Taylor" },
  { id: "TB-1005", status: "Active", address: "720 Marina Pointe Dr", city: "St. Petersburg", county: "Pinellas", price: "$9,300,000", beds: "6", baths: "8", sqft: 9850, lot: "0.95", year: "2024", type: "Single Family", waterfront: "Yes", days: "14", agent: "Sarah Johnson" },
  { id: "TB-1006", status: "Sold", address: "188 Sand Key Blvd", city: "Clearwater Beach", county: "Pinellas", price: "$6,425,000", beds: "5", baths: "6", sqft: 6550, lot: "0.51", year: "2019", type: "Condo", waterfront: "Yes", days: "12", agent: "Kevin Roberts" },
  { id: "TB-1007", status: "Active", address: "550 Venetian Isle Dr", city: "St. Petersburg", county: "Pinellas", price: "$10,950,000", beds: "7", baths: "8.5", sqft: 11150, lot: "1.32", year: "2025", type: "Single Family", waterfront: "Yes", days: "19", agent: "Nicole Evans" },
  { id: "TB-1008", status: "Sold", address: "99 Avila Way", city: "Tampa", county: "Hillsborough", price: "$6,900,000", beds: "6", baths: "7", sqft: 8350, lot: "1.45", year: "2018", type: "Single Family", waterfront: "No", days: "35", agent: "Chris Walker" },
  { id: "TB-1009", status: "Active", address: "18 Sunset Point Rd", city: "Belleair Shore", county: "Pinellas", price: "$7,750,000", beds: "5", baths: "6.5", sqft: 7285, lot: "0.66", year: "2023", type: "Single Family", waterfront: "Yes", days: "21", agent: "Emily Carter" },
  { id: "TB-1010", status: "Sold", address: "310 Harbor Isle Dr", city: "Tampa", county: "Hillsborough", price: "$11,250,000", beds: "7", baths: "9", sqft: 12540, lot: "1.75", year: "2024", type: "Estate", waterfront: "Yes", days: "9", agent: "David Wilson" },
  { id: "TB-1011", status: "Active", address: "78 Palm Cove Ln", city: "Apollo Beach", county: "Hillsborough", price: "$6,375,000", beds: "5", baths: "6", sqft: 6925, lot: "0.81", year: "2022", type: "Single Family", waterfront: "Yes", days: "48", agent: "Amanda Reed" },
  { id: "TB-1012", status: "Sold", address: "440 Bayfront Ave", city: "St. Petersburg", county: "Pinellas", price: "$8,100,000", beds: "6", baths: "7", sqft: 8920, lot: "0.72", year: "2020", type: "Single Family", waterfront: "Yes", days: "23", agent: "Jason White" },
  { id: "TB-1013", status: "Active", address: "901 Harbor Island Dr", city: "Tampa", county: "Hillsborough", price: "$13,500,000", beds: "8", baths: "10", sqft: 15120, lot: "2.30", year: "2026", type: "Estate", waterfront: "Yes", days: "7", agent: "Lauren Mitchell" },
  { id: "TB-1014", status: "Sold", address: "640 Seaside Blvd", city: "Clearwater Beach", county: "Pinellas", price: "$6,180,000", beds: "5", baths: "5.5", sqft: 6120, lot: "0.43", year: "2017", type: "Single Family", waterfront: "Yes", days: "16", agent: "Steven Young" },
  { id: "TB-1015", status: "Active", address: "212 Riviera Dr", city: "Belleair", county: "Pinellas", price: "$7,890,000", beds: "6", baths: "7", sqft: 8140, lot: "0.88", year: "2025", type: "Single Family", waterfront: "Yes", days: "26", agent: "Heather Brooks" },
  { id: "TB-1016", status: "Sold", address: "84 Bayside Ct", city: "Tampa", county: "Hillsborough", price: "$6,775,000", beds: "5", baths: "6", sqft: 7010, lot: "0.70", year: "2021", type: "Single Family", waterfront: "Yes", days: "27", agent: "Mark Allen" },
  { id: "TB-1017", status: "Active", address: "333 Dolphin Way", city: "St. Petersburg", county: "Pinellas", price: "$8,950,000", beds: "6", baths: "8", sqft: 9430, lot: "1.10", year: "2024", type: "Single Family", waterfront: "Yes", days: "17", agent: "Olivia Harris" },
  { id: "TB-1018", status: "Sold", address: "650 Shoreline Dr", city: "Tierra Verde", county: "Pinellas", price: "$7,450,000", beds: "6", baths: "7.5", sqft: 8620, lot: "0.92", year: "2023", type: "Single Family", waterfront: "Yes", days: "15", agent: "Brian Lewis" },
  { id: "TB-1019", status: "Active", address: "44 Pelican Point", city: "Tampa", county: "Hillsborough", price: "$6,995,000", beds: "5", baths: "6.5", sqft: 7455, lot: "0.76", year: "2022", type: "Single Family", waterfront: "Yes", days: "38", agent: "Rachel Green" },
  { id: "TB-1020", status: "Sold", address: "91 Ocean View Ct", city: "Indian Rocks Beach", county: "Pinellas", price: "$9,850,000", beds: "7", baths: "8", sqft: 10540, lot: "1.21", year: "2025", type: "Single Family", waterfront: "Yes", days: "11", agent: "Daniel Cooper" },
  { id: "TB-1021", status: "Active", address: "777 Harbor Club Blvd", city: "Tampa", county: "Hillsborough", price: "$12,750,000", beds: "8", baths: "9.5", sqft: 14250, lot: "2.05", year: "2026", type: "Estate", waterfront: "Yes", days: "5", agent: "Michelle Adams" },
  { id: "TB-1022", status: "Sold", address: "55 Sunset Key Dr", city: "Belleair Shore", county: "Pinellas", price: "$6,550,000", beds: "5", baths: "6", sqft: 6735, lot: "0.58", year: "2020", type: "Single Family", waterfront: "Yes", days: "19", agent: "Eric Scott" },
  { id: "TB-1023", status: "Active", address: "180 Bay Colony Ln", city: "St. Petersburg", county: "Pinellas", price: "$7,350,000", beds: "5", baths: "6.5", sqft: 7215, lot: "0.64", year: "2023", type: "Single Family", waterfront: "Yes", days: "29", agent: "Kelly Turner" },
  { id: "TB-1024", status: "Sold", address: "905 Riverside Dr", city: "Tampa", county: "Hillsborough", price: "$8,600,000", beds: "6", baths: "8", sqft: 9485, lot: "1.28", year: "2024", type: "Estate", waterfront: "No", days: "14", agent: "Patrick Moore" },
  { id: "TB-1025", status: "Active", address: "265 Marina Vista Ct", city: "Clearwater", county: "Pinellas", price: "$6,895,000", beds: "5", baths: "6", sqft: 6895, lot: "0.69", year: "2022", type: "Single Family", waterfront: "Yes", days: "33", agent: "Stephanie Hall" },
];

const propertyImages = [
  "assets/property-condo.png",
  "assets/property-waterfront-home.png",
  "assets/property-compound.png",
  "assets/property-gated-estate.jpg",
  "assets/property-palm-estate.jpg",
  "assets/property-sunset-compound.jpg",
  "assets/property-aerial-waterfront.webp",
  "assets/property-bayfront-mediterranean.jpg",
];

const listingLabel = (status) => (status === "Active" ? "Current Listing" : "Past Sale");
const formatNumber = (value) => Number(value).toLocaleString("en-US");

const renderProperties = () => {
  if (!carouselTrack) return;

  carouselTrack.innerHTML = properties
    .map((property, index) => {
      const imageSrc = propertyImages[index % propertyImages.length];
      const imageAlt = `${property.address}, a luxury ${property.type.toLowerCase()} property in ${property.city}`;

      return `
        <article class="property-card">
          <div class="property-image">
            <img src="${imageSrc}" alt="${imageAlt}" loading="lazy" />
          </div>
          <div class="property-body">
            <p class="property-status">${listingLabel(property.status)}</p>
            <h3>${property.address}</h3>
            <p class="property-location">${property.city}, ${property.county} County</p>
            <strong>${property.price}</strong>
            <dl>
              <div><dt>Beds</dt><dd>${property.beds}</dd></div>
              <div><dt>Baths</dt><dd>${property.baths}</dd></div>
              <div><dt>Sq Ft</dt><dd>${formatNumber(property.sqft)}</dd></div>
            </dl>
            <p class="property-note">${property.type} | ${property.lot} acres | ${property.year} | Waterfront: ${property.waterfront}</p>
          </div>
        </article>
      `;
    })
    .join("");
};

renderProperties();

const setHeaderState = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  document.body.classList.remove("nav-open");
  header?.classList.remove("menu-open");
  navMenu?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation menu");
};

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  document.body.classList.toggle("nav-open", !isOpen);
  header?.classList.toggle("menu-open", !isOpen);
  navMenu?.classList.toggle("is-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const scrollCarousel = (direction) => {
  if (!carouselTrack) return;

  const firstCard = carouselTrack.querySelector(".property-card");
  const cardWidth = firstCard?.getBoundingClientRect().width || carouselTrack.clientWidth;
  const styles = window.getComputedStyle(carouselTrack);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");

  carouselTrack.scrollBy({
    left: direction * (cardWidth + gap),
    behavior: "smooth",
  });
};

carouselPrev?.addEventListener("click", () => scrollCarousel(-1));
carouselNext?.addEventListener("click", () => scrollCarousel(1));

carousel?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") scrollCarousel(-1);
  if (event.key === "ArrowRight") scrollCarousel(1);
});
