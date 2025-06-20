const brands = ["Wilson", "Yonex", "Head", "Babolat"] as const;

export type IBrand = typeof brands[number];