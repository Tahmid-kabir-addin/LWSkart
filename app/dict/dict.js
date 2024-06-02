export const dict = (lang, word) => {
  if (lang === "en" || !lang) return word;

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
    Product: "পণ্য",
    Trending: "ট্রেন্ডিং",
    Reviews: "টি রিভিউ",
    Availability: "প্রাপ্যতা",
    "In Stock": "স্টকে আছে",
    "Out of Stock": "স্টকে নেই",
    Brand: "ব্র্যান্ড",
    Category: "বিভাগ",
    "RELATED PRODUCTS": "সম্পর্কিত পণ্য",
    "Create an account": "একটি অ্যাকাউন্ট তৈরি করুন",
    "Add to cart": "কার্টে যোগ করুন",
    "Adding to cart...": "কার্টে যোগ করা হচ্ছে...",
    "Add to wishlist": "উইশলিস্টে যোগ করুন",
    "Share Via": "শেয়ার করুন",
    Quantity: "পরিমাণ",
    "Register for new cosutumer": "নতুন গ্রাহকের জন্য নিবন্ধন করুন",
    "Full Name": "পুরো নাম",
    "Confirm password": "পাসওয়ার্ড নিশ্চিত করুন",
    Register: "নিবন্ধন",
    "Or signup with": "অথবা সাইনআপ করুন",
    "Already have account?": "আগেই একাউন্ট আছে?",
    "Login now": "এখনি লগইন করুন",
    Shop: "দোকান",
    Categories: "বিভাগ",
    Bedroom: "বেডরুম",
    Sofa: "সোফা",
    Mattress: "তোষক",
    Outdoor: "আউটডোর",
    "Living Room": "লিভিং রুম",
    Price: "মূল্য",
    min: "সর্বনিম্ন",
    max: "সর্বোচ্চ",
    Apply: "প্রয়োগ করুন",
    Reset: "রিসেট",
    Size: "আকার",
    "Reset Filter": "ফিল্টার রিসেট করুন",
    Previous: "পূর্ববর্তী",
    Next: "পরবর্তী",
    "No products found in this category.": "এই বিভাগে কোন পণ্য পাওয়া যায়নি।",
    "Find more products": "আরো পণ্য খুঁজুন",
    here: "এখানে",
    Products: "পণ্য",
    Wishlist: "উইশলিস্ট",
    "No items in wishlist. Explore items":
      "উইশলিস্টে কোন আইটেম নেই। আইটেম অন্বেষণ করুন",
    "Loading...": "লোড হচ্ছে...",
    Logout: "লগআউট",
  };

  // mapping
  const dictionary = {
    bn,
  };

  // return the word
  return dictionary[lang][word] || word;
};
