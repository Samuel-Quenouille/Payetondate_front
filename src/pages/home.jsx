import Welcome from "../components/Welcome"
import Categories from "../components/Categories"
import TopFive from "../components/TopFive"
import Letterlove from "../components/Letterlove"
import Tellus from "../components/Tellus"

export default function Home() {

    return (
        <header>
            <div className="container">
            <Welcome/>
            <br></br>
            <br></br>
            <br></br>
            <Categories/>
            <br></br>
            <br></br>
            <br></br>
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