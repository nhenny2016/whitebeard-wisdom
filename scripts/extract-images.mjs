import fs from "node:fs";

const files = [
  ["home", "C:/Users/nickh/AppData/Local/Temp/ce-home.html"],
  ["coaching", "C:/Users/nickh/AppData/Local/Temp/ce-coaching.html"],
  ["photo", "C:/Users/nickh/AppData/Local/Temp/ce-photo.html"],
  ["about", "C:/Users/nickh/AppData/Local/Temp/ce-about.html"],
];

for (const [label, path] of files) {
  const html = fs.readFileSync(path, "utf8");
  const re = /&quot;name&quot;:&quot;([^&]+)&quot;,&quot;uri&quot;:&quot;(16111b_[^&]+)&quot;/g;
  console.log(`\n=== ${label} ===`);
  let match;
  while ((match = re.exec(html))) {
    console.log(`${match[1]} => ${match[2]}`);
  }
}
