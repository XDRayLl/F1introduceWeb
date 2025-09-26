import Nav from "../JSX/Nav"
import TeamsCards from "../JSX/TeamsCards"

function Teams(){
    return(
        <div>
            <Nav/>
            <TeamsCards value="Mcl" TeamsName={"McLaren"} DriverName1={"Oscar PIASTRI"} DriverName2={"Lando NORRIS"} Driverimg1={"https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp"} Driverimg2={"https://media.formula1.com/image/upload/c_lfill,w_40/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp"} Logosrc={"https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000000/common/f1/2025/mclaren/2025mclarenlogowhite.webp"} Carimg={"https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2025:fallback:car:2025fallbackcarright.webp/v1740000000/common/f1/2025/mclaren/2025mclarencarright.webp"}/>
        </div>
    );
}

export default Teams;