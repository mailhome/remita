import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";


const font = Open_Sans({
    subsets: ["latin"],
})

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({
    children
}: Props) => {
  return (
    <div className={cn("min-h-screen flex flex-col", font.className)}>
        <Navbar />
        <div className="justify-center items-center h-full flex flex-1">
            { children }
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout