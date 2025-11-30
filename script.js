// Mouse follow
document.addEventListener('mousemove', e => {
  document.querySelector('.veil-follow').style.setProperty('--mx', e.clientX + 'px');
  document.querySelector('.veil-follow').style.setProperty('--my', e.clientY + 'px');
});

// Data negara + salam dalam bahasa lokal (bisa ditambah lagi!)
const countries = {
  "Afghanistan": "سلام! من از افغانستان هستم. چطور هستی؟ از آشنایی با همه خوشحالم!",
  "Albania": "Përshëndetje! Unë jam nga Shqipëria. Si jeni? Kënaqësi t'ju takoj të gjithëve!",
  "Algeria": "مرحباً! أنا من الجزائر. كيف حالك؟ سعيد بلقاء الجميع!",
  "Andorra": "Hola! Sóc d'Andorra. Com estàs? Encantat de conèixer-vos a tots!",
  "Angola": "Olá! Eu sou de Angola. Como você está? Prazer em conhecer a todos!",
  "Argentina": "¡Hola! Soy de Argentina. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Australia": "Hello! I'm from Australia. How are you? Nice to meet everyone!",
  "Austria": "Hallo! Ich komme aus Österreich. Wie geht es Ihnen? Nett, Sie alle kennenzulernen!",
  "Azerbaijan": "Salam! Mən Azərbaycandanam. Necəsən? Hamı ilə tanış olmaq xoşdur!",
  "Bahamas": "Hello! I'm from the Bahamas. How are you? Nice to meet everyone!",
  "Bahrain": "مرحباً! أنا من البحرين. كيف حالك؟ سعيد بلقاء الجميع!",
  "Bangladesh": "হ্যালো! আমি বাংলাদেশ থেকে এসেছি। কেমন আছেন? সবার সাথে পরিচিত হতে পেরে ভালো লাগছে!",
  "Barbados": "Hello! I'm from Barbados. How are you? Nice to meet everyone!",
  "Belarus": "Привіт! Я з Білорусі. Як справи? Приємно познайомитися з усіма!",
  "Belgium": "Hallo! Ik kom uit België. Hoe gaat het? Leuk iedereen te ontmoeten!",
  "Belanda": "Bonjour! Je viens de Belgique. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Belize": "Hello! I'm from Belize. How are you? Nice to meet everyone!",
  "Benin": "Bonjour! Je viens du Bénin. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Bermuda": "Hello! I'm from Bermuda. How are you? Nice to meet everyone!",
  "Bhutan": "འབྲུག་ལས་སློབ་ཕྱིང་ཡོད། ཁྱེད་ག་དེ་སྦེ་གདའ། ག་ར་དང་ཕྱད་པའི་སྐལ་བཟང་!",
  "Bolivia": "¡Hola! Soy de Bolivia. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Bosnia & Herzegovina": "Zdravo! Ja sam iz Bosne i Hercegovine. Kako ste? Drago mi je da vas sve upoznam!",
  "Botswana": "Dumela! Ke tswa Botswana. O kae? Ke itumelela go kopana le lona rotlhe!",
  "Brazil": "Olá! Eu sou do Brasil. Como você está? Prazer em conhecer a todos!",
  "Brunei": "Halo! Saya dari Brunei. Apa khabar? Salam kenal semua!",
  "Bulgaria": "Здравейте! Аз съм от България. Как сте? Приятно ми е да се запозная с всички!",
  "BurkinaFaso": "Bonjour! Je viens du Burkina Faso. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Burundi": "Mwaramutse! Ndi Umurundi. Amakuru? Ndabishimiye mwese!",
  "Cambodia": "ជំរាបសួរ! ខ្ញុំមកពីប្រទេសកម្ពុជា។ តើអ្នកសុខសប្បាយជាទេ? រីករាយដែលបានស្គាល់អ្នកទាំងអស់គ្នា!",
  "Cameroon": "Bonjour! Je viens du Cameroun. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Canada": "Bonjour! Je viens du Canada. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Chile": "¡Hola! Soy de Chile. ¿Cómo estás? ¡Mucho gusto a todos!",
  "China": "你好! 我来自中国。你好吗? 很高兴认识大家!",
  "Colombia": "¡Hola! Soy de Colombia. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Croatia": "Zdravo! Ja sam iz Hrvatske. Kako ste? Drago mi je da vas sve upoznam!",
  "Cuba": "¡Hola! Soy de Cuba. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Cyprus": "Γειά σου! Είμαι από την Κύπρο. Τι κάνεις? Χαίρομαι που σας γνωρίζω όλους!",
  "Czech Republic": "Ahoj! Jsem z České republiky. Jak se máte? Rád vás všechny poznávám!",
  "Denmark": "Hej! Jeg er fra Danmark. Hvordan har du det? Dejligt at møde jer alle sammen!",
  "Ecuador": "¡Hola! Soy de Ecuador. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Egypt": "مرحباً! أنا من مصر. كيف حالك؟ سعيد بلقاء الجميع!",
  "El Salvador": "¡Hola! Soy de El Salvador. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Estonia": "Tere! Mina olen Eestist. Kuidas läheb? Hea meel teiega kõigiga kohtuda!",
  "Ethiopia": "ሰላም! እኔ ከኢትዮጵያ ነኝ። እንዴት ነህ? ሁሉንም በማግኘቴ ደስ ብሎኛል!",
  "Fiji": "Bula! Au mai Viti. O vakacava tiko? Marau ni veiqaravi vei kemuni kece!",
  "Finland": "Hei! Olen Suomesta. Mitä kuuluu? Hauska tavata teidät kaikki!",
  "France": "Bonjour! Je viens de France. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Georgia": "გამარჯობა! მე ვარ საქართველოდან. როგორ ხარ? მოხარული ვარ ყველას გაცნობისთვის!",
  "Germany": "Hallo! Ich komme aus Deutschland. Wie geht es Ihnen? Nett, Sie alle kennenzulernen!",
  "Ghana": "Hello! I'm from Ghana. How are you? Nice to meet everyone!",
  "Greece": "Γειά σου! Είμαι από την Ελλάδα. Τι κάνεις? Χαίρομαι που σας γνωρίζω όλους!",
  "Guatemala": "¡Hola! Soy de Guatemala. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Haiti": "Bonjou! Mwen soti Ayiti. Kijan ou ye? Kontan wè nou tout!",
  "Honduras": "¡Hola! Soy de Honduras. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Hong Kong": "你好! 我來自香港。你好嗎? 很高興認識大家!",
  "Hungary": "Szia! Magyarországról jöttem. Hogy vagy? Örülök, hogy megismerhetlek titeket!",
  "Iceland": "Halló! Ég er frá Íslandi. Hvað segirðu? Gaman að hitta ykkur öll!",
  "India": "नमस्ते! मैं भारत से हूँ। आप कैसे हैं? आप सभी से मिलकर अच्छा लगा!",
  "Indonesia": "Halo! Aku dari Indonesia. Apa kabar? Salam kenal semuanya!",
  "Iran": "سلام! من از ایران هستم. چطوری؟ از آشنایی با همه خوشحالم!",
  "Iraq": "مرحباً! أنا من العراق. كيف حالك؟ سعيد بلقاء الجميع!",
  "Ireland": "Hello! I'm from Ireland. How are you? Nice to meet everyone!",
  "Israel": "שלום! אני מישראל. מה שלומך? נעים להכיר את כולם!",
  "Italy": "Ciao! Vengo dall'Italia. Come stai? Piacere di conoscervi tutti!",
  "Jamaica": "Hello! I'm from Jamaica. How are you? Nice to meet everyone!",
  "Japan": "こんにちは! 私は日本から来ました。お元気ですか? 皆さん、はじめまして!",
  "Jordan": "مرحباً! أنا من الأردن. كيف حالك؟ سعيد بلقاء الجميع!",
  "Kazakhstan": "Сәлем! Мен Қазақстаннанмын. Қалың қалай? Баршаңызбен танысқаныма қуаныштымын!",
  "Kenya": "Habari! Mimi ni kutoka Kenya. U hali gani? Ninafuraha kukutana nanyi nyote!",
  "Kuwait": "مرحباً! أنا من الكويت. كيف حالك؟ سعيد بلقاء الجميع!",
  "Laos": "ສະບາຍດີ! ຂ້ອຍມາຈາກປະເທດລາວ. ເຈົ້າສະບາຍດີບໍ່? ຍິນດີທີ່ໄດ້ຮູ້ຈັກທຸກຄົນ!",
  "Latvia": "Sveiki! Esmu no Latvijas. Kā jums iet? Prieks ar jums visiem iepazīties!",
  "Lebanon": "مرحباً! أنا من لبنان. كيف حالك؟ سعيد بلقاء الجميع!",
  "Liberia": "Hello! I'm from Liberia. How are you? Nice to meet everyone!",
  "Libya": "مرحباً! أنا من ليبيا. كيف حالك؟ سعيد بلقاء الجميع!",
  "Lithuania": "Labas! Aš esu iš Lietuvos. Kaip sekasi? Malonu su visais susipažinti!",
  "Luxembourg": "Moien! Ech kommen aus Lëtzebuerg. Wéi geet et? Frou, Iech alleguer kennenzeléieren!",
  "Malaysia": "Halo! Saya dari Malaysia. Apa khabar? Salam kenal semua!",
  "Maldives": "Salam! Ma'ah Maldives in. Haalu kihineh? Hama hammeheh'ge salam!",
  "Mali": "Bonjour! Je viens du Mali. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Malta": "Ħelow! Jiena minn Malta. Kif int? Ninsab ferħan li niltaqa' magħkom ilkoll!",
  "Mexico": "¡Hola! Soy de México. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Mongolia": "Сайн уу! Би Монгол Улсаас ирсэн. Та сайн уу? Бүгдэнтэй танилцсандаа баяртай байна!",
  "Montenegro": "Zdravo! Ja sam iz Crne Gore. Kako ste? Drago mi je da vas sve upoznam!",
  "Morocco": "مرحباً! أنا من المغرب. كيف حالك؟ سعيد بلقاء الجميع!",
  "Mozambique": "Olá! Eu sou de Moçambique. Como você está? Prazer em conhecer a todos!",
  "Myanmar": "မင်္ဂလာပါ! ကျွန်တော် မြန်မာနိုင်ငံကပါ။ နေကောင်းလား? အားလုံးနဲ့သိကျွမ်းရတာ ဝမ်းသာပါတယ်!",
  "Nepal": "नमस्ते! म नेपालबाट आएको छु। तपाईंलाई कस्तो छ? सबैलाई भेट्न पाउँदा खुसी लाग्यो!",
  "Netherlands": "Hallo! Ik kom uit Nederland. Hoe gaat het? Leuk iedereen te ontmoeten!",
  "New Zealand": "Hello! I'm from New Zealand. How are you? Nice to meet everyone!",
  "Nicaragua": "¡Hola! Soy de Nicaragua. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Nigeria": "Hello! I'm from Nigeria. How are you? Nice to meet everyone!",
  "Norway": "Hei! Jeg er fra Norge. Hvordan har du det? Hyggelig å møte dere alle!",
  "Oman": "مرحباً! أنا من عمان. كيف حالك؟ سعيد بلقاء الجميع!",
  "Pakistan": "اسلام و علیکم! میں پاکستان سے ہوں۔ آپ کا کیا حال ہے؟ آپ سب سے مل کر خوشی ہوئی!",
  "Panama": "¡Hola! Soy de Panamá. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Papua New Guinea": "Hello! Mi kam long Papua New Guinea. Hau yu stap? नाइस टु मीट एव्रीवन!",
  "Paraguay": "¡Hola! Soy de Paraguay. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Peru": "¡Hola! Soy de Perú. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Philippines": "Kumusta! Ako ay mula sa Pilipinas. Kumusta ka? Ikinagagalak kong makilala kayong lahat!",
  "Poland": "Cześć! Jestem z Polski. Jak się masz? Miło mi was wszystkich poznać!",
  "Portugal": "Olá! Eu sou de Portugal. Como você está? Prazer em conhecer a todos!",
  "Qatar": "مرحباً! أنا من قطر. كيف حالك؟ سعيد بلقاء الجميع!",
  "Romania": "Bună ziua! Sunt din România. Ce mai faceți? Încântat să vă cunosc pe toți!",
  "Russia": "Привет! Я из России. Как дела? Приятно познакомиться со всеми!",
  "Saudi Arabia": "مرحباً! أنا من المملكة العربية السعودية. كيف حالك؟ سعيد بلقاء الجميع!",
  "Senegal": "Bonjour! Je viens du Sénégal. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Serbia": "Zdravo! Ja sam iz Srbije. Kako ste? Drago mi je da vas sve upoznam!",
  "Singapore": "Hello! I'm from Singapore. How are you? Nice to meet everyone!",
  "Slovakia": "Ahoj! Som zo Slovenska. Ako sa máš? Rád vás všetkých spoznávam!",
  "Slovenia": "Živjo! Sem iz Slovenije. Kako ste? Vesel sem, da vas vse spoznam!",
  "South Africa": "Hello! I'm from South Africa. How are you? Nice to meet everyone!",
  "South Korea": "안녕하세요! 저는 한국에서 왔어요. 어떻게 지내세요? 모두 만나서 반갑습니다!",
  "Spain": "¡Hola! Soy de España. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Sri Lanka": "ආයුබෝවන්! මම ශ්‍රී ලංකාවෙන්. කොහොමද? ඔබ සැමව දැන හඳුනා ගැනීමට ලැබීම සතුටක්!",
  "Sudan": "مرحباً! أنا من السودان. كيف حالك؟ سعيد بلقاء الجميع!",
  "Sweden": "Hej! Jag är från Sverige. Hur mår du? Trevligt att träffa er alla!",
  "Switzerland": "Hallo! Ich komme aus der Schweiz. Wie geht es Ihnen? Nett, Sie alle kennenzulernen!",
  "Syria": "مرحباً! أنا من سوريا. كيف حالك؟ سعيد بلقاء الجميع!",
  "Taiwan": "你好! 我來自台灣。你好嗎? 很高興認識大家!",
  "Tanzania": "Habari! Mimi ni kutoka Tanzania. U hali gani? Ninafuraha kukutana nanyi nyote!",
  "Thailand": "สวัสดี! ฉันมาจากประเทศไทย สบายดีไหม? ยินดีที่ได้รู้จักทุกคน!",
  "Togo": "Bonjour! Je viens du Togo. Comment ça va? Enchanté de faire la connaissance de tout le monde!",
  "Tunisia": "مرحباً! أنا من تونس. كيف حالك؟ سعيد بلقاء الجميع!",
  "Turkey": "Merhaba! Türkiye'den geliyorum. Nasılsın? Hepinizle tanışmak güzel!",
  "Uganda": "Habari! Mimi ni kutoka Uganda. U hali gani? Ninafuraha kukutana nanyi nyote!",
  "Ukraine": "Привіт! Я з України. Як справи? Приємно познайомитися з усіма!",
  "United Arab Emirates": "مرحباً! أنا من الإمارات العربية المتحدة. كيف حالك؟ سعيد بلقاء الجميع!",
  "United Kingdom": "Hello! I'm from the United Kingdom. How are you? Nice to meet everyone!",
  "United States of America": "Hello! I'm from the United States of America. How are you? Nice to meet everyone!",
  "Uruguay": "¡Hola! Soy de Uruguay. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Uzbekistan": "Salom! Men Oʻzbekistondanman. Qalaysiz? Hammangiz bilan tanishganimdan xursandman!",
  "Vanuatu": "Halo! Mi blong Vanuatu. Homas taem? Glaed long mitim yufala evriwan!",
  "Vatican City": "Ave! Ego sum e Vaticano. Quid agis? Gratus vobis omnibus obviam fieri!",
  "Venezuela": "¡Hola! Soy de Venezuela. ¿Cómo estás? ¡Mucho gusto a todos!",
  "Vietnam": "Chào! Tôi đến từ Việt Nam. Bạn khỏe không? Rất vui được gặp tất cả các bạn!",
  "Yemen": "مرحباً! أنا من اليمن. كيف حالك؟ سعيد بلقاء الجميع!",
  "Zambia": "Hello! I'm from Zambia. How are you? Nice to meet everyone!",
  "Zimbabwe": "Hello! I'm from Zimbabwe. How are you? Nice to meet everyone!"
};

const data = Object.keys(countries);

const searchInput = document.getElementById('search');
const suggestionsBox = document.getElementById('suggestions');
const submitBtn = document.getElementById('submit-btn');

searchInput.addEventListener('input', () => {
  const value = searchInput.value.trim().toLowerCase();
  if (!value) { suggestionsBox.style.display = 'none'; return; }

  const filtered = data.filter(c => c.toLowerCase().includes(value));
  if (filtered.length === 0) { suggestionsBox.style.display = 'none'; return; }

  suggestionsBox.innerHTML = filtered.map(c => `<div>${c}</div>`).join('');
  suggestionsBox.style.display = 'block';

  suggestionsBox.querySelectorAll('div').forEach(div => {
    div.onclick = () => {
      searchInput.value = div.textContent;
      suggestionsBox.style.display = 'none';
    };
  });
});

// Submit dengan button atau Enter
submitBtn.onclick = showResult;
// Use keydown (more reliable than deprecated 'keypress') for Enter handling
searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); showResult(); } });

function showResult() {
  const country = searchInput.value.trim();
  if (!countries[country]) {
    alert("Negara tidak ditemukan!");
    return;
  }

  document.getElementById('main-content').style.display = 'none';
  const result = document.getElementById('result');
  result.style.display = 'flex';

  document.getElementById('greeting-title').textContent = `Kamu dari ${country}!`;
  document.getElementById('greeting-text').textContent = countries[country];
}

// Sembunyikan autocomplete kalau klik luar
document.addEventListener('click', e => {
  if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
    suggestionsBox.style.display = 'none';
  }
});