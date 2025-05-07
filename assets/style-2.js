// Initialize font properties
const fontname = "CMU Sans Serif";
const fontweights = [400, 700];

// Color properties
const basecolor = "#000000";  // Black for main text
const accentcolor = "#000000";  // Black for paper titles
const highlightcolor = "#000000";  // Black for headers
const backgroundcolor = "#fff";
const menucolor = "#000000";  // Black for menu items
const linkcolor = "#0000CD";  // Blue for hyperlinks

// Body properties
const bodyfontweight = 300;
const bodyfontsize = "14pt";

// Link properties
const acolor = linkcolor;
const adecoration = "none";

// Menu properties
const menufontsize = "16pt";
const menudecoration = "none";

// Header properties
const headerfontsize = "18pt";
const headerdecoration = "none";
const namefontsize = "23pt";

// Publication properties
const ptitlefontsize = "15pt";  // Slightly larger than body font
const ptitleweight = 700;  // Bold weight
const ptitledecoration = "none";
const ptitlestyle = "normal";

const authorweight = bodyfontweight;
const authordecoration = "none";
const authorstyle = "normal";

const selfweight = bodyfontweight;
const selfdecoration = "none";
const selfstyle = "normal";

const tagweight = bodyfontweight;
const tagdecoration = "none";
const tagstyle = "normal";

const insttitlesize = "12px";
const instyearsize = "11px";

// Works for sans serif font
$("head").append("<style>@font-face { font-family: 'CMU Sans Serif'; src: url('assets/fonts/cmunss.ttf') format('truetype'); font-weight: 400; font-style: normal; } @font-face { font-family: 'CMU Sans Serif'; src: url('assets/fonts/cmunsx.ttf') format('truetype'); font-weight: 700; font-style: normal; }</style>");
$("body").css("font-family", "'CMU Sans Serif', 'Computer Modern', 'Arial', sans-serif");

$("body").css("color", basecolor);
$("body").css("font-weight", bodyfontweight);
$("body").css("font-size", bodyfontsize);
$("body").css("background-color", backgroundcolor);

$("a").css("color", acolor);
$("a").css("text-decoration", adecoration);

$(".menulink").css("color", menucolor);
$(".menulink").css("font-size", menufontsize);
$(".menulink").css("text-decoration", menudecoration);

$(".header").css("color", highlightcolor);
$(".header").css("font-size", headerfontsize);
$(".header").css("text-decoration", headerdecoration);
$(".name").css("color", highlightcolor);
$(".name").css("font-size", namefontsize);

$(".papertitle").css("color", accentcolor);
$(".papertitle").css("font-size", ptitlefontsize);
$(".papertitle").css("font-weight", ptitleweight);
$(".papertitle").css("text-decoration", ptitledecoration);
$(".papertitle").css("font-style", ptitlestyle);

$(".thisauthor").css("color", accentcolor);
$(".thisauthor").css("font-weight", selfweight);
$(".thisauthor").css("text-decoration", "underline");
$(".thisauthor").css("font-style", selfstyle);

$(".institution").css("color", highlightcolor);
$(".institution").css("font-size", insttitlesize);
$(".years").css("color", basecolor);
$(".years").css("font-size", instyearsize);

// Additional styles for news section
$(".news-item").css("color", basecolor);
$(".news-date").css("color", basecolor);
$(".news-content").css("color", basecolor);
$(".news-title").css("color", basecolor);
$(".news-header").css("color", highlightcolor);

// Additional styles for service section
$(".service-item").css("color", basecolor);
$(".service-title").css("color", basecolor);
$(".service-org").css("color", basecolor);
$(".service-date").css("color", basecolor);
$(".service-description").css("color", basecolor);
$(".service-role").css("color", basecolor);
$(".service-header").css("color", highlightcolor);