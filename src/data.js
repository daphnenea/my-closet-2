import floralPinkTop from "./images/y2k/y2k1.jpeg";
import headphones from "./images/y2k/y2k2.jpeg";
import sneakers from "./images/y2k/y2k3.webp";
import denimShirt from "./images/y2k/y2k4.jpeg";
import pinkSunglasses from "./images/y2k/y2k5.jpeg";
import platformSandals from "./images/y2k/y2k6.jpeg";
import flareJeans from "./images/y2k/y2k7.jpeg";
import blueTop from "./images/y2k/y2k8.jpeg";
import floralFlats from "./images/core/core1.jpeg";
import pinkFloralTop from "./images/core/core2.jpeg";
import yellowFloralTop from "./images/core/core3.jpeg";
import whiteSkirt from "./images/core/core4.jpeg";
import weaveBag from "./images/core/core5.jpeg";
import floralHeels from "./images/core/core6.jpeg";
import beigeSkirt from "./images/core/core7.jpeg";
import whiteShoes from "./images/core/core8.jpeg";
import prettyFloralBow from "./images/core/core9.jpeg"
import blazerTop from "./images/academia/aca1.jpeg";
import headband from "./images/academia/aca2.jpeg";
import vanillaBlouse from "./images/academia/aca3.jpeg";
import tweedSkirt from "./images/academia/aca4.jpeg";
import beigeTrousers from "./images/academia/aca5.jpeg";
import maryJanes from "./images/academia/aca6.jpeg";
import brownBag from "./images/academia/aca7.jpeg";
import brownLoafers from "./images/academia/aca8.jpeg";

const names = [
    "Floral Pink Tube Top",
    "Sony Headphones",
    "Chunky Sneakers",
    "Denim Skirt",
    "Pink Sunnies",
    "Platform Sandals",
    "Flowy Blue Tank",
    "Flare Jeans",
    "Floral Ballet Flats",
    "Pink Floral Puff Top",
    "Yellow Floral V-Neck",
    "Long White Skirt",
    "Weave Bag",
    "Floral Heels",
    "Long Beige Skirt",
    "White Ankle Straps",
    "Pretty Floral Bow",
    "Blazer Top",
    "Classic Headband",
    "Vanilla Blouse",
    "Tweed Skirt",
    "Beige Trousers",
    "Platform Mary Janes",
    "Taupe Handbag",
    "Dark Brown Loafers",
];

const images = [
    floralPinkTop,
    headphones,
    sneakers,
    denimShirt,
    pinkSunglasses,
    platformSandals,
    flareJeans,
    blueTop,
    floralFlats,
    pinkFloralTop,
    yellowFloralTop,
    whiteSkirt,
    weaveBag,
    floralHeels,
    beigeSkirt,
    whiteShoes,
    prettyFloralBow,
    blazerTop,
    headband,
    vanillaBlouse,
    tweedSkirt,
    beigeTrousers,
    maryJanes,
    brownBag,
    brownLoafers
];

const links = [
    "https://us.shein.com/Floral-Print-Ruched-Asymmetrical-Hem-Mesh-Tube-Top-p-24298833-cat-2214.html?utm_source=pinterest.com&utm_medium=cpc&utm_campaign=web_uspin_dpa_women_sz2305251997599174&url_from=web_uspin_dpa_women_sz2305251997599174&epik=dj0yJnU9aEtDWV9LVmZLRndkcHdkdjBTN051aXZpbENibi1OZEMmcD0wJm49d1AwR2VJajV2WlU4VGNmVkJpdFRqdyZ0PUFBQUFBR1lWVFFJ",
    "https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b",
    "https://www.newbalance.com/pd/9060/U9060V1-41988.html",
    "https://arcana-archive.com/en-us/products/denim-bare-top-short-skirt",
    "https://www.blumarine.com/en/blumarine/sunglasses/eyewear-collection/rimless-sun-mask-2975.html?rwSkip2=true",
    "https://www.voguetopus.com/flip-flops/5533-4450-womens-wedges-flip-flops-summer-thong-beach-sandals-chunky-high-platform-black-co17yldelr3.html?utm_referer=pinterest.com&auto_post=22222",
    "https://www.storenvy.com/products/36453875-bohemia-v-neck-lace-mesh-cami-top?epik=dj0yJnU9VzBaMkZCVXZ6SmJNb0V4RkxIQmZ6bV8zWW9BVFBod0YmcD0wJm49RFRCTVVCV1M5bk4yMFlHTUpwT0RkQSZ0PUFBQUFBR1lWVEdZ",
    "https://coutdelaliberte.com/products/w003231?variant=40876447727709",
    "https://www.therealreal.com/products/women/shoes/flats/etro-satin-floral-print-ballet-flats-kq8y6",
    "https://www.nordstrom.com/s/henrietta-shirred-bralette-top/6972395?color=PINK&epik=dj0yJnU9Mk14RVRMV2ZSMk11N3NjVjJPc24xWEpLUXpPT0IzYW0mcD0wJm49M2U2cldaMXgwZ0N0OEQ0NHowZHhOdyZ0PUFBQUFBR1lWVF9n",
    "https://www.mytheresa.com/us/en/women/brock-collection-ribes-floral-cotton-poplin-top-white-p00481120?catref=category&epik=dj0yJnU9OFBPVGgteHkyazFaUzRBdUQyRlNFcEppcXA2WjNTWE8mcD0wJm49OXplVzAyUkxwLXdUN1hKS01nUU5OdyZ0PUFBQUFBR1lWVDd3&rdr_src=mag",
    "https://www.lilacoo.com/products/bow-elastic-waist-long-skirt?variant=39817064644669",
    "https://poshmark.com/listing/NWT-Cottagecore-Embroidered-Straw-Shoulder-Bag-6212b50d8be91308f91f4f3d?utm_source=pin_unpaid&epik=dj0yJnU9d0VuVEoxeEV6SXhCRmNLeVk1dmJRR2tZLWhmVC10T0cmcD0wJm49VUNDV3kyOEhIOGlFQmE1ck92RlJGdyZ0PUFBQUFBR1lWVUV3",
    "https://www.bellabelleshoes.com/products/sierra-flower-embellished-embroidered-kitten-heels?variant=29518931853354&epik=dj0yJnU9Y3AzbXFKOVR3ZVBDLUVxcnJUTDZtblhBVUthVVNCNU8mcD0wJm49NlQzOV9yN0VxOWdzZEpFM210Zl8zZyZ0PUFBQUFBR1lWVVhF&utm_source=pinterest&utm_medium=social",
    "https://www.queenfunky.com/products/corduroy-a-shape-skirt-hbwq?variant=91903354-b712-4996-8004-54f8170e61b2",
    "https://katieconsiders.com/2022/08/13/daily-hunt-august-13-2022/",
    "https://shoplook.io/product-preview/pretty-floral-bow/2066185",
    "https://www.farfetch.com/shopping/women/dion-lee-cut-out-detail-cropped-blazer-item-19083826.aspx?lang=en-US&fsb=1&epik=dj0yJnU9a1FtTHA5Z2JqV09DLWJXaC14eS03X3FJS0loRlY0NUYmcD0wJm49RVJLYVR3T0RyaVNrZlJ0NUM0aWV5QSZ0PUFBQUFBR1lWVWY4",
    "https://leletny.com/products/nia-headband?epik=dj0yJnU9eDBfZGZLdS1xM2VjZVdaMHdpUG5DNWFKTkxUY0l1ekgmcD0wJm49VF9HNXJxRHRUdkJxSGRFalJObEVTQSZ0PUFBQUFBR1lWVXY4",
    "https://www.farfetch.com/shopping/women/prada-crepe-de-chine-jacquard-top-item-20115308.aspx?utm_campaign=d&c=d&pid=app-product-share&utm_medium=app-product-share&utm_source=farfetch&is_retargeting=true&epik=dj0yJnU9MEstZWdWOUVZWmktRWhvWGJDS0dzcFFGT0xmZ2FKdFEmcD0wJm49d19PSC0wVXVnNG1vbEV1Q2JzNWxKUSZ0PUFBQUFBR1lWVW1F",
    "https://www.guess.com/us/en/kids/all-kids/girl/big-girl-7-14/bottoms/wool-blend-tweed-skirt-7-16-black/J3YD09WFJT0-FZH7.html?pp=1&utm_campaign=TOF%20DPA%20-%20Prospecting%20-%20Catalog%20sales-%20Ongoing&utm_content=g_social_pntrst_pros_uppf-acquisition_brd_br-18-54_x_cbo_paid_pros%EF%BB%BF&utm_medium=social_paid&utm_term=dyn_i-evgn_o-none_v-dynamic-carousel-all-products_cta-shop_c-na&variationID=14440768%3Futm_source%3Dpinterest",
    "https://shopfavoritedaughter.com/products/the-agnes-pant-beige?variant=41724559818935",
    "https://www.aooar.com/products/mary-jane-sqaure-toe-pumps-patent-leather-chunky-heels-for-ladies",
    "https://eng.polene-paris.com/products/numero-douze-taupe-graine?variant=39327439061090&epik=dj0yJnU9QS1IVWxFZUlzVVE5UU5VekZWV3NsODY0ejZ0TFFadEgmcD0wJm49ZXVvenZuR2dMLXBnenN1U3ZNNFRFUSZ0PUFBQUFBR1lWVXIw",
    "https://urduraj.com/products/womens-authentic-platform-buckle-chunky-raise-the-loafers?variant=45234041028902"
];

const categories = [
    "Top",
    "Accessory",
    "Shoes",
    "Bottom",
    "Accessory",
    "Shoes",
    "Top",
    "Bottom",
    "Shoes",
    "Top",
    "Top",
    "Bottom",
    "Accessory",
    "Shoes",
    "Bottom",
    "Shoes",
    "Accessory",
    "Top",
    "Accessory",
    "Top",
    "Bottom",
    "Bottom",
    "Shoes",
    "Accessory",
    "Shoes"
];

export const data = [names, images, links, categories];