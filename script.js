// ฟังก์ชันสุ่มคำทำนายเซียมซีคุณนามิยะ
function drawOmikuji() {
  const box = document.getElementById('omikuji-box-img');
  const resultBox = document.getElementById('result-box');
  const fortuneTag = document.getElementById('result-fortune');
  const resultText = document.getElementById('result-text');

  box.classList.add('shake-box');
  resultBox.classList.add('hidden');

  const fortunes = [
    { tag: "大吉 (โชคดีมาก)", text: "จดหมายตอบกลับจะนำทางสว่างมาสู่หัวใจ ความกังวลในวันนี้จะได้รับการคลี่คลายอย่างอบอุ่น ✨" },
    { tag: "吉 (โชคดี)", text: "ขอเพียงคุณก้าวไปข้างหน้าด้วยความจริงใจ อนาคตที่รออยู่จะสะท้อนความตั้งใจของคุณเสมอ 🌸" },
    { tag: "中吉 (ปานกลาง)", text: "ลองมองปัญหาในมุมใหม่หรือเปิดใจปรึกษาใครสักคน ทางออกที่ตามหาอาจอยู่ใกล้ตัวมากกว่าที่คิด 💌" },
    { tag: "小吉 (โชคดีเล็กน้อย)", text: "พักผ่อนจิบชาอุ่นๆ สักแก้ว ให้เวลาช่วยเยียวยา แล้ววันพรุ่งนี้จะเป็นวันที่ดีขึ้นแน่นอน 🍵" }
  ];

  setTimeout(() => {
    box.classList.remove('shake-box');
    const randomItem = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    fortuneTag.textContent = randomItem.tag;
    resultText.textContent = randomItem.text;
    resultBox.classList.remove('hidden');
  }, 600);
}

// ฟังก์ชันคลิกเปิด/ปิด ซองจดหมาย
function toggleLetter() {
  const envelope = document.getElementById('interactive-envelope');
  envelope.classList.toggle('open');
}