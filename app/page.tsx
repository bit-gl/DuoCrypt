import Image from "next/image";
export default function Home() {
  return (
    <main className="h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Secure Chat
        </h1>

        <p className="text-gray-400">
          End-to-End Encrypted Private Messenger
        </p>
      </div>
    </main>
  )
}