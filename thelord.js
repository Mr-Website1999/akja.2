var text = ["Jeremiah 29:11 ~ For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", 
"Deuteronomy 31:6 ~ Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.”",
 "Proverbs 3:5-6 ~ Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",
'Lamentations 3:22-23 ~ The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.','Psalm 34:8 ~ Oh, taste and see that the Lord is good! Blessed is the man who takes refuge in him!',
'Isaiah 41:10 ~ Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.',
'2 Corinthians 4:16-18 ~ So we do not lose heart. Though our outer self is wasting away, our inner self is being renewed day by day. For this light momentary affliction is preparing for us an eternal weight of glory beyond all comparison, as we look not to the things that are seen but to the things that are unseen. For the things that are seen are transient, but the things that are unseen are eternal.',];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 86400);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}