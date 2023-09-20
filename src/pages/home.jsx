import Welcome from "../components/Welcome"
import Categories from "../components/Categories"
import TopFive from "../components/TopFive"
import LoveLetters from "../components/LoveLetters"
import CreateTestimony from "../components/CreateTestimony"

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
            <LoveLetters/>
            <br></br>
            <br></br>
            <br></br>
            <CreateTestimony/>


            </div>
        </header>

    )
}