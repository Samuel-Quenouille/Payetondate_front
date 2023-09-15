import Categories from "../components/Categories"
import TopFive from "../components/TopFive"
import Letterlove from "../components/Letterlove"

export default function Home() {

    return (
        <header>
            <div className="container">
            <Categories/>
            <TopFive/>
            <br></br>
            <br></br>
            <br></br>
            <Letterlove/>

            </div>
        </header>

    )
}