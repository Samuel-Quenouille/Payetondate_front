import Categories from "../components/Categories"
import TopFive from "../components/TopFive"
import Letterlove from "../components/Letterlove"
import Tellus from "../components/Tellus"

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
            <br></br>
            <br></br>
            <br></br>
            <Tellus/>


            </div>
        </header>

    )
}