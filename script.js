/* ===================== DARK VEIL EFFECT ===================== */
document.addEventListener("mousemove", e => {
  document.querySelector(".veil-follow")
    .style.setProperty("--mx", e.clientX + "px");
  document.querySelector(".veil-follow")
    .style.setProperty("--my", e.clientY + "px");
});

/* ===================== DATA ===================== */
const countries = {
  "Indonesia": "Halo! Aku dari Indonesia. Salam kenal semuanya!",
  "India": "नमस्ते! मैं भारत से हूँ।",
  "Ireland": "Hello! I'm from Ireland!",
  "Italy": "Ciao! Vengo dall'Italia!",
  "Japan": "こんにちは！日本から来ました！",
  "Germany": "Hallo! Ich komme aus Deutschland!",
  "France": "Bonjour! Je viens de France!"
};

/* ===================== TRIE ===================== */
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.word = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const c of word.toLowerCase()) {
      node.children[c] ??= new TrieNode();
      node = node.children[c];
    }
    node.isEnd = true;
    node.word = word;
  }

  search(prefix) {
    let node = this.root;
    for (const c of prefix.toLowerCase()) {
      if (!node.children[c]) return [];
      node = node.children[c];
    }
    return this.collect(node);
  }

  collect(node, res = []) {
    if (node.isEnd) res.push(node.word);
    for (const k in node.children) {
      this.collect(node.children[k], res);
    }
    return res;
  }
}

const trie = new Trie();
Object.keys(countries).forEach(c => trie.insert(c));

/* ===================== DOM ===================== */
const input = document.getElementById("search");
const box = document.getElementById("suggestions");
const submit = document.getElementById("submit-btn");

let active = -1;

/* ===================== HELPER ===================== */
const highlight = (text, q) =>
  text.replace(new RegExp(`(${q})`, "ig"),
    `<strong style="color:cyan">$1</strong>`);

const debounce = (fn, d = 120) => {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), d);
  };
};

/* ===================== AUTOCOMPLETE ===================== */
const update = debounce(() => {
  const q = input.value.trim();
  box.innerHTML = "";
  active = -1;

  if (!q) return box.style.display = "none";

  const results = trie.search(q);

  if (!results.length) {
    const div = document.createElement("div");
    div.innerHTML = `Tambah "<strong>${q}</strong>"`;
    div.onclick = () => addCountry(q);
    box.appendChild(div);
  } else {
    results.forEach(r => {
      const div = document.createElement("div");
      div.innerHTML = highlight(r, q);
      div.onclick = () => select(r);
      box.appendChild(div);
    });
  }

  box.style.display = "block";
});

/* ===================== ACTION ===================== */
const select = val => {
  input.value = val;
  box.style.display = "none";
};

const addCountry = name => {
  const cap = name[0].toUpperCase() + name.slice(1);
  const greet = prompt(`Masukkan salam untuk ${cap}`);
  if (!greet) return;
  countries[cap] = greet;
  trie.insert(cap);
  select(cap);
};

function showResult() {
  const c = input.value.trim();
  if (!countries[c]) return alert("Negara tidak ditemukan!");

  document.getElementById("main-content").style.display = "none";
  document.getElementById("result").style.display = "flex";
  document.getElementById("greeting-title").textContent = `Kamu dari ${c}!`;
  document.getElementById("greeting-text").textContent = countries[c];
}

/* ===================== EVENTS ===================== */
input.addEventListener("input", update);

input.addEventListener("keydown", e => {
  const items = [...box.children];
  if (!items.length) return;

  if (e.key === "ArrowDown") active = (active + 1) % items.length;
  if (e.key === "ArrowUp") active = (active - 1 + items.length) % items.length;
  if (e.key === "Enter" && active >= 0) items[active].click();

  items.forEach((el, i) =>
    el.style.background = i === active ? "rgba(100,150,255,.3)" : "");
});

submit.onclick = showResult;

document.addEventListener("click", e => {
  if (!input.contains(e.target) && !box.contains(e.target)) {
    box.style.display = "none";
  }
});
