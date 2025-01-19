import { Image, Link } from "@heroui/react";
import { MdOutlineArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const image1 = "https://img.freepik.com/free-photo/books-with-graduation-cap-digital-art-style-education-day_23-2151164378.jpg?t=st=1715367635~exp=1715371235~hmac=e902115f9106b161051057a3beeeac44e2cc42efcb27a186e21b1e2a47664b30&w=740";
const image2 = "https://img.freepik.com/free-photo/person-with-books-digital-art-style-education-day_23-2151164365.jpg?t=st=1715367255~exp=1715370855~hmac=6616b045dc59ed9880ec92f36067d364b27266aef0dbddfd46f5fba17ac27f44&w=740";
const image3 = "https://img.freepik.com/premium-photo/floral-selfcare-human-brain-tree-generative-ai_94628-12606.jpg?w=740";


const Features = () => {
    return (
        <>

            <section className=" py-12 hidden">
                <h2 className="text-2xl font-bold text-center uppercase  CardTittle ">Explore More</h2>
                <p className="text-sm text-justify CardTittle lg:text-center">We aim to be your one-stop destination for all things related to Engineering. Here&apos;s what you can expect to find on our platform.</p>
            </section>


            <div className="snap-mandatory snap-x flex scrollbar-hide overflow-scroll card  gap-8 px-[5%] content-stretch ">
                <div key={1} className="snap-center min-w-[350px] gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip">
                    <div>
                        <img className=" object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full " src={image1} alt="" />
                    </div>


                    <div className="grid justify-center p-[5%] bg-gray-100">
                        <h1 className=" font-semibold uppercase ">Engineering Materials</h1>
                        <p className="text-gray-700 text-sm">
                            Access all state engineering study materials, including PYQs, Syllabus and notes.
                        </p>
                        <Link as={NavLink} to="Materials" className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat">Explore Materials<MdOutlineArrowRight /> </Link>
                    </div>
                </div>

                <div key={2} className="snap-center min-w-[350px] content-start h-full gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip">
                    <div>
                        <img className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full " src={image2} alt="" />
                    </div>


                    <div className="grid justify-center p-[5%] bg-gray-100">
                        <h1 className=" font-semibold uppercase">Career Roadmaps</h1>
                        <p className="text-gray-700 text-sm">
                            Plan your academic and professional journey with curated roadmaps.
                        </p>
                        <Link className="mt-2 text-sm font-semibold cursor-pointer" color="primary" variant="flat"> View Roadmaps<MdOutlineArrowRight /> </Link>
                    </div>
                </div>

                <div key={3} className="snap-center min-w-[350px] content-start h-full gap-12 m-auto shadow-md hover:shadow-lg transition-shadow duration-350  bg-white/5 rounded-3xl overflow-clip">
                    <div>
                        <img className="object-cover aspect-[16/9] ease-in duration-350 delay-0  z-0 w-full h-full" src={image3} alt="" />
                    </div>


                    <div className="grid justify-center p-[5%] bg-gray-100">
                        <h1 className=" font-semibold uppercase ">Exam Results</h1>
                        <p className="text-gray-700 text-sm">
                            Stay updated with the latest exam results and academic achievements.
                        </p>
                        <Link className="mt-2 text-sm cursor-pointer font-semibold" color="primary" variant="flat">Check Results<MdOutlineArrowRight /> </Link>
                    </div>
                </div>

            </div>
            <center>
                <Image className=" " src="/gif/dotted-line.png" width={40} />
            </center>
      
        </>
    );
}

export default Features
