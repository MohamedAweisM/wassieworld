import freshFades from "../../assets/LOOKBOOK/ENVIRONMENT/FRESH FADEZ.png";
import wucciStore from "../../assets/LOOKBOOK/ENVIRONMENT/WUCCI STORE.png";
import nightOut  from "../../assets/LOOKBOOK/ENVIRONMENT/NIGHT OUT.png";
import cookinUp from "../../assets/LOOKBOOK/ENVIRONMENT/COOKIN UP.png";
import tokyoStreets from "../../assets/LOOKBOOK/ENVIRONMENT/TOKYO STREETS.png";
import dinner from "../../assets/LOOKBOOK/ENVIRONMENT/DINNER.png";
import wenWambo from "../../assets/LOOKBOOK/ENVIRONMENT/WEN WAMBO.png";
import coldNightInStoke from "../../assets/LOOKBOOK/ENVIRONMENT/COLD NIGHT IN STOKE.png";
import boxOut from "../../assets/LOOKBOOK/ENVIRONMENT/BOX OUT.png";
import needFiat from "../../assets/LOOKBOOK/ENVIRONMENT/NEED FIAT.png";

export const environment = {
  type: 'Environment',
  list: [
    { name: 'FRESH FADES', image: freshFades, rarity: 0.12 },
    { name: 'WUCCI STORE', image: wucciStore, rarity: 2.43 },
    { name: 'NIGHT OUT', image: nightOut, rarity: 3.03 },
    { name: 'COOKIN UP', image: cookinUp, rarity: 3.21 },
    { name: 'TOKYO STREETS', image: tokyoStreets, rarity: 4.26 },
    { name: 'DINNER', image: dinner, rarity: 4.38 },
    { name: 'WEN WAMBO', image: wenWambo, rarity: 5.6 },
    { name: 'COLD NIGHT IN STOKE', image: coldNightInStoke, rarity: 5.85 },
    { name: 'BOX OUT', image: boxOut, rarity: 5.97 },
    { name: 'NEED FIAT', image: needFiat, rarity: 6.75 },
  ],
};
