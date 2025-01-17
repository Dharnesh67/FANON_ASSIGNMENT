import { Slot,Stack ,Tabs} from "expo-router"
export default function RootLayout(){
    return (
        <>
           {/* <Stack/>  */}
           <Stack screenOptions={{headerShown:false}}/>
        </>
    )
}