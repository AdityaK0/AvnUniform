// components/WhatsAppButton.tsx
import { Phone } from "lucide-react"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+917984679362" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      {/* <img
        src="/whatsapp.svg" // You can use a local image or CDN link
        alt="WhatsApp"
        className="w-6 h-6"
      /> */}
      <Phone/>
      <span className="hidden sm:inline font-medium">Let’s connect</span>
    </a>
  )
}
