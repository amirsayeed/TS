interface Developer<T, X=null>{
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X; 
}

interface BrandCharaWatch{
    heartRate: string;
    stopWatch: boolean;
}

interface AppleWatch{
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeatures: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch> = {
    name: "Mr. Poor",
    salary: 1000,
    device: {
        brand: "lenevo",
        model: "ThinkPad X1 Carbon",
        releasedYear: "2020"
    },
    smartWatch: {
        heartRate: "80 bpm",
        stopWatch: true
    }
}

const richDeveloper: Developer<AppleWatch, string> = {
    name: "Mr. Rich",
    salary: 100000,
    device: {
        brand: "Apple",
        model: "MacBook Pro",
        releasedYear: "2022"
    },
    smartWatch: {   
        heartRate: "70 bpm",
        callSupport: true,
        calculator: true,
        AiFeatures: true
    },
    bike: "Ducati Panigale V4"
}