import { Inter } from "@next/font/google";
import Plane from "../src/components/organisms/Plane";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <Plane />;
}
