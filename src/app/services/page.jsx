// const { default: MockExam } = require("@/components/MockExam")

import { Navbar } from "../../components/Navbar";
import Services from "../../components/Services";




const Page = () => {
    return(
        <div className=" ">
            {/* <MockExam /> */}
            <Navbar />
            <Services />
        </div>

    )
} 

export default Page;