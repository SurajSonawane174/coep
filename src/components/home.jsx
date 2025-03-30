
import { GoogleGeminiEffectDemo } from "./Google_effect_demo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";
import { SparklesPreview } from "./sparkleDemo";
import SearchBoxWithFilters from "./Search";


export default function Home (){
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center">
            <GoogleGeminiEffectDemo />  
            <SparklesPreview />
            <CardHoverEffectDemo />   
            <SearchBoxWithFilters />
        </div>
    )
};