 import { Image, Link } from "@heroui/react"

const Groups = () => {
  return (
    <>
    <section className="my-16">
      <header className="flex flex-col items-center text-lg" >      
      <Image src="/gif/people.gif" height={50} width={50}/>
      Recommended Groups
      </header>
      <div className="snap-mandatory snap-x scrollbar-hide overflow-scroll groups flex justify-center my-6 gap-8 ">

      
      <Link className="snap-center min-w-[50px]" href="https://t.me/collezian_bcece_le">
      <Image  src="/Groups_Image/collezian_dsa.jpg" height={80} width={80}/>
      </Link>

      <Link className="snap-center min-w-[50px]" href="https://t.me/collezian_bcece_le">
      <Image src="/Groups_Image/bcece_le_quiz.png" height={80} width={80}/>
      </Link>

      <Link className="snap-center min-w-[50px]" href="https://t.me/collezian_bcece_le">
      <Image src="/Groups_Image/off_campus_placements.jpg" height={80} width={80}/>
      </Link>
      
      <Link className="snap-center min-w-[50px]" href="https://t.me/collezian_bcece_le">
      <Image src="/Groups_Image/off_campus_placements.jpg" height={80} width={80}/>
      </Link>
    
      

      </div>
    </section>
    </>
  )
}

export default Groups