
import { GoogleGeminiEffectDemo } from "./Google_effect_demo";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";//featues
import { SparklesPreview } from "./sparkleDemo";
import SearchBoxWithFilters from "./Search";
// import AdvancedFilter from "./filter";
import ContactForm from "./Contact";

// import TabsDemo from "./TabsDemo";


export default function Home (){
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center">
            <GoogleGeminiEffectDemo />  
            <SparklesPreview />
            <CardHoverEffectDemo />   
            {/* <SearchBoxWithFilters /> */}
            {/* <AdvancedFilter /> */}
            {/* <TabsDemo /> */}
            <ContactForm />
        </div>
    )
};