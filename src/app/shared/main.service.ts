import { Injectable } from "@angular/core";
export interface City {
  id: number,
  city_ascii: string,
  lat: number,
  lng: number,
  point: any,
}
@Injectable({providedIn: 'root'})
export class MainService {
  city: City[] = [
    {
      id: 0,
      city_ascii: "Kyiv",
      lat: 50.4546600,
      lng: 30.5238000,
      point:
      [
        {
          id: 0,
          name: "Памятник основателям Киева",
          lat: 50.429097,
          lng: 30.568911,
          url: "https://autotravel.ru/phalbum/90249/133.jpg",
        },
        {
          id: 1,
          name: "Костел Святого Николая",
          lat: 50.4268987,
          lng: 30.5177478,
          url: "https://autotravel.ru/phalbum/90248/180.jpg",
        },
        {
          id: 2,
          name: "Замок Ричарда Львиное Сердце",
          lat: 50.4599541,
          lng: 30.5160138,
          url: "https://autotravel.ru/phalbum/90190/171.jpg"
        },
        {
          id: 3,
          name: "Бессарабский рынок и улица Крещатик",
          lat: 50.4421077,
          lng: 30.5214986,
          url: "https://autotravel.ru/phalbum/91529/113.jpg"
        }
      ]
    },
    {
      id: 1,
      city_ascii: "Odesa(FOR TESTING)",
      lat: 46.4775,
      lng: 30.7326,
      point:[
        {
          id: 0,
          name: "Одесский государственный академический театр оперы и балета",
          lat: 46.29123,
          lng: 30.44469,
          url: "https://autotravel.ru/phalbum/90192/104.jpg"
        },
        {
          id: 1,
          name: "Памятник Дюку Де Ришелье",
          lat: 46.29288,
          lng: 30.44473,
          url: "https://autotravel.ru/phalbum/90317/160.jpg",
        }
      ]

    }
  ]
}
