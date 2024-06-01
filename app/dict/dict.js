export const dict = (lang, word) => {
  if (lang === "en") return word;

  // bn dictionary
  const bn = {
    Checkout: "চেকআউট",
    "You must agree to the terms and conditions":
      "আপনাকে শর্তাবলী অনুমোদন করতে হবে",
    Name: "নাম",
    Company: "কোম্পানি",
    Country: "দেশ",
    Street: "রাস্তা",
    City: "শহর",
    "Phone Number": "ফোন নম্বর",
    Email: "ইমেইল",
    "Order Summary": "অর্ডার সারাংশ",
    Size: "আকার",
    Subtotal: "মোট পণ্যমূল্য",
    "Shipping Charge": "বহনমূল্য",
    Free: "বিনামূল্যে",
    Total: "সর্বমোট",
    "I agree to the": "আমি একমত",
    "terms and conditions": "শর্তাবলীর সাথে",
    "Place Order": "অর্ডার করুন",
    "Order Success!": "আপনার অর্ডারটি সম্পন্ন হয়েছে!",
    "Thank you for your purchase! Your order has been successfully placed.":
      "ক্রয়ের জন্য ধন্যবাদ! আপনার অর্ডারটি সফলভাবে স্থাপন করা হয়েছে।",
    "You can download your invoice by clicking the button below.":
      "নিচের বাটনে ক্লিক করে আপনি আপনার রশিদ ডাউনলোড করতে পারেন।",
    "Download Invoice": "রশিদ ডাউনলোড করুন",
    Login: "লগইন",
    Password: "পাসওয়ার্ড",
    "Or login with": "অথবা লগইন করুন",
    Facebook: "ফেসবুক",
    Google: "গুগল",
    "Don't have account?": "একাউন্ট নেই?",
    "Register Now": "এখনি নিবন্ধন করুন",
  };

  // mapping
  const dictionary = {
    bn,
  };

  // return the word
  return dictionary[lang][word] || word;
};
