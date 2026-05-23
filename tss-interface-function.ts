interface ISmartphone {
  maker: string;
  name: string;
    battery: number;
  created_at: Date;
  features: string[];
}

let iPhoneX: ISmartphone = {
  maker: 'Apple',
  name: 'iPhone X',
  battery: 65,
  created_at: new Date(2017),
  features: ['스피커', '카메라', 'FaceID']
}

let galaxyS10: ISmartphone ={
  maker: 'Samsung',
  name: 'Galaxy S10',
  battery: 40,
  created_at: new Date(2020),
  features: ['카메라', '5g', '지문인식']
}

console.log(galaxyS10);
console.log(iPhoneX);


interface Car {
    brand: string;
    color: string;
    maxPeople: number;
}

interface ship {
    brand: string;
    color: string;
    maxPeople: number;
    price: number
    isDoubleDecker: boolean;
}

interface Bus extends Car {
    PRICE: number;
    isPrivate: boolean;
}

const checkBusTime = (bus: Bus): Date => {
    // 버스 시간 확인 코드 가정
    return new Date();

}

const testFunction = (isBoolean: boolean, isSentence: string): { result: string }  =>  {
    return{
        result: 'complete'
    }
}