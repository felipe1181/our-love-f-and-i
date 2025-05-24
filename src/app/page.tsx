"use server";

import { fetchMessage } from "@/app/utils/useMessage";
import Countdown from "@/app/components/countdown";

export interface MessageResponse {
  message: string;
  daysUntilMeeting: number;
}

export default async function Home() {
  const data = await fetchMessage();

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
          Nosso Amor F&I ❤️
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-4">
            Faltam {data?.daysUntilMeeting} dias para nos encontrarmos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 italic">
            {data?.message}
          </p>
        </div>

        <div>
          <Countdown />
        </div>
      </div>
    </main>
  );
}
