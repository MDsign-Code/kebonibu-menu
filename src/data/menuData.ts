export interface MenuItem {
  id: string;
  name: string;
  price: number; // in thousands (K), e.g. 98 = Rp 98.000
  sub?: string;
  badge?: string;
  variant?: string;
  fullName?: string;
  image?: string;
  portion?: string;
  list?: string[];
  category: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  desc?: string;
  isHero?: boolean;
  isBBQ?: boolean;
  items: MenuItem[];
}

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: "special",
    title: "MENU SPECIAL",
    subtitle: "Konro Bakar / Sup Konro & Gulai Kepala Kambing",
    isHero: true,
    items: [
      {
        id: "sp-1",
        name: "Konro Bakar / Sup Konro",
        price: 98,
        sub: "Pilihan: Iga Bakar bumbu kacang gurih manis atau Sup Iga kuah rempah kluwek khas Kebonibu",
        badge: "Best Price",
        image: "./images/konro-bakar.jpg",
        category: "special"
      },
      {
        id: "sp-2",
        name: "Gulai Kepala Kambing Utuh",
        price: 198,
        sub: "Porsi istimewa utuh kepala & kaki dengan kuah gulai rempah kental gurih khas Kebonibu",
        badge: "Signature Menu",
        image: "./images/gulai-kepala-kambing.jpg",
        category: "special"
      }
    ]
  },
  {
    id: "kambing-sapi",
    title: "KAMBING DAN SAPI",
    subtitle: "Olahan Rempah Tradisional",
    items: [
      { id: "ks-1", name: "Tongseng Kepala & Kaki Kambing", price: 65, sub: "Rempah tongseng gurih pedas manis", category: "kambing-sapi" },
      { id: "ks-2", name: "Tongseng Kambing / Sapi", price: 55, sub: "Daging empuk berpadu kuah tongseng", category: "kambing-sapi" },
      { id: "ks-3", name: "Gulai Kambing Muda", price: 55, sub: "Kambing muda empuk tanpa aroma prengus", category: "kambing-sapi" },
      { id: "ks-4", name: "Sup Kambing Muda", price: 55, sub: "Kuah rempah bening segar menggugah selera", category: "kambing-sapi" },
      { id: "ks-5", name: "Sate Kambing", price: 48, sub: "Bumbu kecap cabai rawit & bawang merah segar", category: "kambing-sapi" }
    ]
  },
  {
    id: "timbel",
    title: "PAKET TIMBEL KOMPLIT",
    desc: "Lengkap: Nasi Timbel, Sayur Asam, Ikan Asin, Tahu, Tempe, Sambal, Lalapan & Teh Tawar Panas",
    items: [
      { id: "tb-1", name: "Timbel Ayam Bakar", price: 47, category: "timbel" },
      { id: "tb-2", name: "Timbel Ayam Goreng", price: 47, category: "timbel" },
      { id: "tb-3", name: "Timbel Nila Bakar", price: 47, category: "timbel" },
      { id: "tb-4", name: "Timbel Nila Goreng", price: 47, category: "timbel" },
      { id: "tb-5", name: "Timbel Lele", price: 47, category: "timbel" },
      { id: "tb-6", name: "Timbel Udang Tepung", price: 50, category: "timbel" },
      { id: "tb-7", name: "Timbel Cumi Tepung", price: 50, category: "timbel" },
      { id: "tb-8", name: "Timbel Empal", price: 50, category: "timbel" },
      { id: "tb-9", name: "Timbel Ayam Kamp (Baru)", price: 53, category: "timbel" },
      { id: "tb-10", name: "Timbel Bebek (Baru)", price: 53, category: "timbel" },
      { id: "tb-11", name: "Timbel Sate Taican", price: 35, category: "timbel" }
    ]
  },
  {
    id: "steak-sei",
    title: "STEAK & SEI",
    subtitle: "Daging Premium Pilihan",
    items: [
      { id: "st-1", name: "Tenderloin Meltique Steak", price: 125, category: "steak-sei", sub: "Disajikan dengan potato wedges & signature sauce" },
      { id: "st-2", name: "Sirloin Meltique Steak", price: 135, category: "steak-sei", sub: "Daging lembut juicy dengan aroma grill istimewa" },
      {
        id: "st-3",
        name: "Chicken Steak",
        variant: "(Mushroom / Blackpepper / BBQ)",
        fullName: "Chicken Steak (Mushroom/Blackpepper/BBQ)",
        price: 65,
        category: "steak-sei"
      },
      {
        id: "st-4",
        name: "Wagyu Nasi Sambalado",
        variant: "(Geprek / Matah / Korek)",
        fullName: "Wagyu Nasi Sambalado (Geprek/Matah/Korek)",
        price: 55,
        category: "steak-sei"
      },
      { id: "st-5", name: "Paket Sei Sapi Nasi", price: 55, category: "steak-sei", sub: "Aroma asap khas Kupang dengan sambal lu'at" },
      { id: "st-6", name: "Nasi Goreng Sei", price: 50, category: "steak-sei" },
      { id: "st-7", name: "Spaghetti Sei", price: 50, category: "steak-sei" }
    ]
  },
  {
    id: "bbq",
    title: "BARBEQUE & GRILL",
    subtitle: "Paket Santap Bersama Keluarga",
    isBBQ: true,
    items: [
      {
        id: "bbq-1",
        name: "Barbeque & Grill Reguler",
        price: 315,
        portion: "Paket (2-3 Orang)",
        list: [
          "250 g Australian Sirloin Slice",
          "250 g Wagyu Saikoro",
          "250 g Beef Short Plate",
          "250 g French Fries",
          "250 g Mix Vegetables",
          "3 Varian Sauce & Free Ice Tea"
        ],
        category: "bbq"
      },
      {
        id: "bbq-2",
        name: "Barbeque & Grill Super",
        price: 470,
        portion: "Paket (4-5 Orang)",
        list: [
          "500 g Australian Sirloin Slice",
          "500 g Wagyu Saikoro",
          "500 g Beef Short Plate",
          "500 g French Fries",
          "500 g Mix Vegetables",
          "3 Varian Sauce & Free Ice Tea"
        ],
        category: "bbq"
      }
    ]
  },
  {
    id: "seafood",
    title: "MASAKAN SEAFOOD",
    subtitle: "Gurame, Nila, Lele, Cumi, Udang & Paket Kikil",
    items: [
      { id: "sf-1", name: "Gurame Bakar", price: 68, category: "seafood" },
      { id: "sf-2", name: "Gurame Jimbaran", price: 72, category: "seafood", sub: "Bumbu khas Bali harum rempah" },
      { id: "sf-3", name: "Gurame Pecak", price: 68, category: "seafood", sub: "Kuah pecak jahe asam pedas segar" },
      { id: "sf-4", name: "Sup Ikan Gurame", price: 68, category: "seafood" },
      { id: "sf-5", name: "Gurame Asam Manis", price: 72, category: "seafood" },
      { id: "sf-6", name: "Gurame Saus Padang", price: 72, category: "seafood" },
      { id: "sf-7", name: "Nila Bakar", price: 45, category: "seafood" },
      { id: "sf-8", name: "Nila Pecak", price: 50, category: "seafood" },
      { id: "sf-9", name: "Sup Ikan Nila", price: 50, category: "seafood" },
      { id: "sf-10", name: "Nila Asam Manis", price: 50, category: "seafood" },
      { id: "sf-11", name: "Nila Saus Padang", price: 50, category: "seafood" },
      { id: "sf-12", name: "Nila Bakar Jimbaran", price: 50, category: "seafood" },
      { id: "sf-13", name: "Lele Goreng Original", price: 23, category: "seafood" },
      { id: "sf-14", name: "Lele Sambal Matah", price: 25, category: "seafood" },
      { id: "sf-15", name: "Lele Sambal Kebon", price: 25, category: "seafood" },
      { id: "sf-16", name: "Cumi Bakar", price: 55, category: "seafood" },
      { id: "sf-17", name: "Cumi Saus Tiram", price: 60, category: "seafood" },
      { id: "sf-18", name: "Cumi Asam Manis", price: 60, category: "seafood" },
      { id: "sf-19", name: "Cumi Saus Padang", price: 60, category: "seafood" },
      { id: "sf-20", name: "Udang Bakar", price: 55, category: "seafood" },
      { id: "sf-21", name: "Udang Saus Tiram", price: 65, category: "seafood" },
      { id: "sf-22", name: "Udang Asam Manis", price: 65, category: "seafood" },
      { id: "sf-23", name: "Udang Saus Padang", price: 65, category: "seafood" },
      { id: "sf-24", name: "Paket Kikil Cbk Sambal Ijo", price: 45, sub: "Sudah termasuk Nasi", category: "seafood" },
      { id: "sf-25", name: "Paket Kikil Gulai", price: 45, sub: "Sudah termasuk Nasi", category: "seafood" }
    ]
  },
  {
    id: "ayam-sayur",
    title: "MASAKAN AYAM, SAYUR & SOTO",
    items: [
      { id: "as-1", name: "Nasi Ayam Karage Smbl Matah", price: 35, category: "ayam-sayur" },
      { id: "as-2", name: "Nasi Ay Karage Smbl Gprk Kebon", price: 35, category: "ayam-sayur" },
      { id: "as-3", name: "Nasi Ayam Karage Salted Egg", price: 37, category: "ayam-sayur" },
      { id: "as-4", name: "Nasi Ayam Karage Mozarella", price: 37, category: "ayam-sayur" },
      { id: "as-5", name: "Ayam Kampung Goreng", price: 45, category: "ayam-sayur" },
      { id: "as-6", name: "Ayam Kampung Sambal Matah", price: 45, category: "ayam-sayur" },
      { id: "as-7", name: "Ayam Kampung Sambal Geprek", price: 45, category: "ayam-sayur" },
      { id: "as-8", name: "Ayam Kampung Pecak", price: 47, category: "ayam-sayur" },
      { id: "as-9", name: "Ayam Kampung Goreng + Nasi", price: 54, category: "ayam-sayur" },
      { id: "as-10", name: "Ayam Bakar Madu", price: 29, category: "ayam-sayur" },
      { id: "as-11", name: "Ayam Goreng", price: 29, category: "ayam-sayur" },
      { id: "as-12", name: "Ayam Saus Tiram (isi 5)", price: 56, category: "ayam-sayur" },
      { id: "as-13", name: "Ayam Saus Padang (isi 5)", price: 56, category: "ayam-sayur" },
      { id: "as-14", name: "Ayam Saus Asam Manis (isi 5)", price: 56, category: "ayam-sayur" },
      { id: "as-15", name: "Kangkung Cah Bawang Putih", price: 28, category: "ayam-sayur" },
      { id: "as-16", name: "Kangkung Blacan", price: 30, category: "ayam-sayur" },
      { id: "as-17", name: "Toge Ikan Asin", price: 30, category: "ayam-sayur" },
      { id: "as-18", name: "Capcai", price: 30, category: "ayam-sayur" },
      { id: "as-19", name: "Terong Sambal Geprek", price: 25, category: "ayam-sayur" },
      { id: "as-20", name: "Tumis Buncis", price: 28, category: "ayam-sayur" },
      { id: "as-21", name: "Karedok", price: 28, category: "ayam-sayur" },
      { id: "as-22", name: "Tumis Genjer Polos", price: 25, category: "ayam-sayur" },
      { id: "as-23", name: "Tumis Genjer Blacan", price: 28, category: "ayam-sayur" },
      { id: "as-24", name: "Sayur Asem", price: 25, category: "ayam-sayur" },
      { id: "as-25", name: "Soto Ayam Kampung", price: 30, category: "ayam-sayur" },
      { id: "as-26", name: "Soto Ayam Kampung + Nasi", price: 35, category: "ayam-sayur" },
      { id: "as-27", name: "Soto Daging Sapi", price: 35, category: "ayam-sayur" },
      { id: "as-28", name: "Soto Daging Sapi + Nasi", price: 39, category: "ayam-sayur" },
      { id: "as-29", name: "Nasi Putih", price: 9, category: "ayam-sayur" },
      { id: "as-30", name: "Nasi Liwet", price: 10, category: "ayam-sayur" },
      { id: "as-31", name: "Nasi Goreng Kampung", price: 35, category: "ayam-sayur" },
      { id: "as-32", name: "Nasi Goreng Oriental", price: 37, category: "ayam-sayur" },
      { id: "as-33", name: "Nasi Goreng Ikan Asin", price: 37, category: "ayam-sayur" }
    ]
  },
  {
    id: "snack",
    title: "SNACK, PISANG, ROTI & BURGER",
    items: [
      { id: "sn-1", name: "Risoles Mayones", price: 35, category: "snack" },
      { id: "sn-2", name: "Cilok", price: 23, category: "snack" },
      { id: "sn-3", name: "Siomay", price: 39, category: "snack" },
      { id: "sn-4", name: "Batagor", price: 39, category: "snack" },
      { id: "sn-5", name: "Chicken Wing", price: 37, category: "snack" },
      { id: "sn-6", name: "Perkedel", price: 4, category: "snack" },
      { id: "sn-7", name: "Bakwan", price: 18, category: "snack" },
      { id: "sn-8", name: "Mendoan", price: 18, category: "snack" },
      { id: "sn-9", name: "Mozarella Stick", price: 35, category: "snack" },
      { id: "sn-10", name: "Dimsum Mix", price: 27, category: "snack" },
      { id: "sn-11", name: "Dimsum Saus Mentai", price: 29, category: "snack" },
      { id: "sn-12", name: "French Fries", price: 27, category: "snack" },
      { id: "sn-13", name: "Sistagor", price: 37, category: "snack" },
      { id: "sn-14", name: "Union Ring", price: 35, category: "snack" },
      { id: "sn-15", name: "Singkong Goreng Original", price: 15, category: "snack" },
      { id: "sn-16", name: "Singkong Goreng Keju", price: 20, category: "snack" },
      { id: "sn-17", name: "Pisang Keju Susu (Goreng/Bakar)", price: 28, category: "snack" },
      { id: "sn-18", name: "Pisang Keju Coklat (Goreng/Bakar)", price: 28, category: "snack" },
      { id: "sn-19", name: "Pisang Keju Coklat Susu (Goreng/Bakar)", price: 31, category: "snack" },
      { id: "sn-20", name: "Pisang Ovomaltine (Goreng/Bakar)", price: 31, category: "snack" },
      { id: "sn-21", name: "Pisang Nutella (Goreng/Bakar)", price: 33, category: "snack" },
      { id: "sn-22", name: "Pisang Goreng ORI", price: 20, category: "snack" },
      { id: "sn-23", name: "Roti Bakar Keju Susu", price: 28, category: "snack" },
      { id: "sn-24", name: "Roti Bakar Keju Coklat", price: 28, category: "snack" },
      { id: "sn-25", name: "Roti Bakar Keju Coklat Susu", price: 31, category: "snack" },
      { id: "sn-26", name: "Roti Bakar Ovomaltine", price: 31, category: "snack" },
      { id: "sn-27", name: "Roti Bakar Nutella", price: 33, category: "snack" },
      { id: "sn-28", name: "Blackpepper Burger", price: 50, category: "snack" },
      { id: "sn-29", name: "Creamy Mushroom Burger", price: 50, category: "snack" },
      { id: "sn-30", name: "Extra Keju", price: 7, category: "snack" },
      { id: "sn-31", name: "Extra Telur", price: 8, category: "snack" },
      { id: "sn-32", name: "Kids Package Katsu", price: 39, category: "snack" },
      { id: "sn-33", name: "Kids Package Eggroll", price: 35, category: "snack" },
      { id: "sn-34", name: "Kids Package Nugget", price: 35, category: "snack" },
      { id: "sn-35", name: "Kids Package Ekado", price: 37, category: "snack" }
    ]
  },
  {
    id: "kopi",
    title: "ANEKA KOPI (HOT & ICED)",
    subtitle: "Racikan Kopi Nusantara & Espresso Based Pilihan",
    items: [
      { id: "kp-1", name: "Kopi Susu Gula Aren (Iced)", price: 27, category: "kopi", sub: "Signature es kopi susu creamy dengan legit gula aren murni", variant: "🧊 Iced" },
      { id: "kp-2", name: "Kopi Susu Gula Aren (Hot)", price: 25, category: "kopi", sub: "Kopi susu hangat lembut berpadu gula aren wangi", variant: "♨️ Hot" },
      { id: "kp-3", name: "Black Coffee / Americano (Iced)", price: 27, category: "kopi", sub: "Kopi hitam dingin segar dengan crema lembut", variant: "🧊 Iced" },
      { id: "kp-4", name: "Black Coffee / Americano (Hot)", price: 25, category: "kopi", sub: "Kopi hitam panas kaya aroma dan rasa mantap", variant: "♨️ Hot" },
      { id: "kp-5", name: "Espresso Single (Hot)", price: 18, category: "kopi", sub: "Ekstraksi kopi murni pekat beraroma kuat", variant: "♨️ Hot" },
      { id: "kp-6", name: "Espresso Double (Hot)", price: 22, category: "kopi", sub: "Double shot espresso mantap kaya energi", variant: "♨️ Hot" },
      { id: "kp-7", name: "Cappuccino (Iced)", price: 29, category: "kopi", sub: "Espresso dingin dengan susu segar dan foam lembut", variant: "🧊 Iced" },
      { id: "kp-8", name: "Cappuccino (Hot)", price: 27, category: "kopi", sub: "Kombinasi espresso, steamed milk, dan busa tebal", variant: "♨️ Hot" },
      { id: "kp-9", name: "Caffè Latte (Iced)", price: 28, category: "kopi", sub: "Espresso dingin dengan susu segar lembut", variant: "🧊 Iced" },
      { id: "kp-10", name: "Caffè Latte (Hot)", price: 26, category: "kopi", sub: "Kopi susu hangat lembut dengan latte art", variant: "♨️ Hot" },
      { id: "kp-11", name: "Dolce Latte (Iced)", price: 27, category: "kopi", sub: "Kopi susu dingin manis creamy favorit santai", variant: "🧊 Iced" },
      { id: "kp-12", name: "Dolce Latte (Hot)", price: 27, category: "kopi", sub: "Espresso hangat berpadu susu manis legit yang memanjakan", variant: "♨️ Hot" },
      { id: "kp-13", name: "Caramel Latte (Iced)", price: 29, category: "kopi", sub: "Kopi latte dingin dengan sirup karamel harum", variant: "🧊 Iced" },
      { id: "kp-14", name: "Caramel Latte (Hot)", price: 29, category: "kopi", sub: "Espresso hangat dengan sirup karamel gurih manis", variant: "♨️ Hot" },
      { id: "kp-15", name: "Hazelnut Latte (Iced)", price: 29, category: "kopi", sub: "Kopi latte dingin dengan aroma kacang hazelnut khas", variant: "🧊 Iced" },
      { id: "kp-16", name: "Hazelnut Latte (Hot)", price: 29, category: "kopi", sub: "Aroma kacang hazelnut harum berpadu kopi hangat", variant: "♨️ Hot" },
      { id: "kp-17", name: "Sea Salt Latte (Iced)", price: 29, category: "kopi", sub: "Perpaduan unik rasa kopi manis gurih sea salt dingin", variant: "🧊 Iced" },
      { id: "kp-18", name: "Sea Salt Latte (Hot)", price: 29, category: "kopi", sub: "Kopi latte hangat dengan sentuhan gurih sea salt cream", variant: "♨️ Hot" },
      { id: "kp-19", name: "Avocado Coffee (Iced)", price: 30, category: "kopi", sub: "Jus alpukat kental segar disiram espresso shot pekat", variant: "🧊 Iced" },
      { id: "kp-20", name: "Mochaccino (Iced)", price: 30, category: "kopi", sub: "Perpaduan kopi cokelat dingin segar dan creamy", variant: "🧊 Iced" },
      { id: "kp-21", name: "Mochaccino (Hot)", price: 28, category: "kopi", sub: "Perpaduan kopi espresso hangat dan cokelat kaya rasa", variant: "♨️ Hot" }
    ]
  },
  {
    id: "minuman",
    title: "MINUMAN SEGAR & WEDANG TRADISIONAL",
    subtitle: "Teh Nusantara, Wedang Rempah Hangat & Aneka Jus Buah",
    items: [
      { id: "dr-1", name: "Teh Manis (Ice)", price: 10, category: "minuman", variant: "🧊 Iced" },
      { id: "dr-2", name: "Teh Manis (Hot)", price: 10, category: "minuman", variant: "♨️ Hot" },
      { id: "dr-3", name: "Lemon Tea (Ice)", price: 25, category: "minuman", variant: "🧊 Iced" },
      { id: "dr-4", name: "Lemon Tea (Hot)", price: 25, category: "minuman", variant: "♨️ Hot" },
      { id: "dr-5", name: "Thai Tea (Ice)", price: 30, category: "minuman", variant: "🧊 Iced" },
      { id: "dr-6", name: "Teh Poci Gula Batu (Hot)", price: 27, category: "minuman", sub: "Seduhan teh wangi melati dalam poci tanah liat asli", variant: "♨️ Hot" },
      { id: "dr-7", name: "Wedang Jahe (Hot)", price: 8, category: "minuman", sub: "Jahe geprek segar penghangat tubuh alami", variant: "♨️ Hot" },
      { id: "dr-8", name: "Wedang Uwuh (Hot)", price: 15, category: "minuman", sub: "Rempah tradisional secang, cengkeh, kayu manis & jahe", variant: "♨️ Hot" },
      { id: "dr-9", name: "Bir Pletok Tradisional (Hot)", price: 15, category: "minuman", sub: "Minuman rempah khas Betawi tanpa alkohol yang hangat menyehatkan", variant: "♨️ Hot" },
      { id: "dr-10", name: "Bir Pletok Tradisional (Ice)", price: 15, category: "minuman", sub: "Sensasi rempah dingin menyegarkan", variant: "🧊 Iced" },
      { id: "dr-11", name: "Fresh Juice Alpukat", price: 29, category: "minuman", sub: "Alpukat mentega asli kental dengan susu kental manis", variant: "🧊 Iced" },
      { id: "dr-12", name: "Fresh Juice Mangga", price: 29, category: "minuman", sub: "Mangga harum manis segar kaya vitamin", variant: "🧊 Iced" },
      { id: "dr-13", name: "Leci Yakult", price: 27, category: "minuman", sub: "Sirup leci manis berpadu asam segar probiotik Yakult", variant: "🧊 Iced" },
      { id: "dr-14", name: "Mojitoberry Squash", price: 29, category: "minuman", sub: "Soda dingin dengan sari berry dan daun mint segar", variant: "🧊 Iced" }
    ]
  }
];

export const CATEGORIES = [
  { id: "all", label: "Semua Menu", icon: "🍽️" },
  { id: "special", label: "Menu Special", icon: "⭐" },
  { id: "kambing-sapi", label: "Kambing & Sapi", icon: "🐐" },
  { id: "timbel", label: "Paket Timbel", icon: "🍱" },
  { id: "steak-sei", label: "Steak & Sei", icon: "🥩" },
  { id: "bbq", label: "Barbeque & Grill", icon: "🔥" },
  { id: "seafood", label: "Seafood", icon: "🐟" },
  { id: "ayam-sayur", label: "Ayam & Sayur", icon: "🍗" },
  { id: "snack", label: "Snack & Roti", icon: "🍟" },
  { id: "kopi", label: "Aneka Kopi", icon: "☕" },
  { id: "minuman", label: "Minuman & Wedang", icon: "🍹" }
];
