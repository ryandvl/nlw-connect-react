import Image from "next/image";

import { getRanking } from "@/http/api";

import copperMedal from "../../../assets/medal-copper.svg"
import goldMedal from "../../../assets/medal-gold.svg"
import silverMedal from "../../../assets/medal-silver.svg"

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          let medal = null
          let medalName = ''
          switch (rankingPosition) {
            case 1:
              medal = goldMedal
              medalName = 'Medalha de Ouro'
              break;

            case 2:
              medal = silverMedal
              medalName = 'Medalha de Prata'
              break;

            case 3:
              medal = copperMedal
              medalName = "Medalha de Bronze"
              break
          }

          return (
            <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}°</span> | {item.name}
              </span>
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {item.score}
              </span>

              {medal && <Image src={medal} alt={medalName} className="absolute top-0 right-8" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}