import Image from "next/image";

import copperMedal from "../../assets/medal-copper.svg"
import silverMedal from "../../assets/medal-silver.svg"
import goldMedal from "../../assets/medal-gold.svg"

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
    <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
      Ranking de indicações
    </h2>

    <div className="space-y-4">
      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">1°</span> | André Souza
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1.128
        </span>

        <Image src={goldMedal} alt="" className="absolute top-0 right-8" />
      </div>

      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">2°</span> | Melissa Loures
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          928
        </span>

        <Image src={silverMedal} alt="" className="absolute top-0 right-8" />
      </div>

      <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
        <span className="text-sm text-gray-300 leading-none">
          <span className="font-semibold">3°</span> | Rodrigo Gonçalves
        </span>
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          875
        </span>

        <Image src={copperMedal} alt="" className="absolute top-0 right-8" />
      </div>
    </div>
  </div>
  )
}