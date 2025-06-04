// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations
const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "apologies": "Apologies",
      "cancelMessage": "We regret to inform you that the user is currently unable to respond. Please try again later.",
      "waiting": "Please Wait For User Response",
      "requestCancelled": "Your request has been cancelled by the user. Please try again",
      "poweredBy": "Powered by",
      "privateAccount": "This account is private and cannot be viewed",
      "profession": "Profession",
      "organization": "Organization",
      "saveContact": "Save Contact",
      "exchangeContact": "Exchange Contact"

    }
  },
  ar: {
    translation: {
      "welcome": "مرحبا",
      "apologies": "اعتذارات",
      "cancelMessage": "نأسف لإبلاغك أن المستخدم غير قادر على الرد حالياً. يرجى المحاولة مرة أخرى لاحقاً.",
      "waiting": "يرجى الانتظار لرد المستخدم",
      "requestCancelled": "تم إلغاء طلبك من قبل المستخدم. يرجى المحاولة مرة أخرى",
      "poweredBy": "مدعوم من",
      "privateAccount": "هذا الحساب خاص ولا يمكن مشاهدته",
      "profession": "مهنة",
      "organization": "منظمة",
      "saveContact": "حفظ جهة الاتصال",
      "exchangeContact": "تبادل جهة الاتصال"

    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Function to change language and direction
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  document.documentElement.style.fontFamily = lng === 'ar' ? "'Tajawal', sans-serif" : "'Roboto', sans-serif";
};

export default i18n;