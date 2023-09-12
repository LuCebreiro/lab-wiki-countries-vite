
import { useEffect, useState } from "react";
import { countriesList } from "../services/countries-service";
import { Link } from "react-router-dom";

function HomePage() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        countriesList()
            .then((APIcountries) => {
                setCountries(APIcountries)
                console.log(APIcountries[0])
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);


    return (
        <div className="HomePage">
            {countries.length ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">WikiCountries: Your Guide to the World</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => (
                            <tr key={country._id}>
                                <td>
                                    <Link to={`/${country.alpha3Code}`}>
                                        <div>
                                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                                        </div>
                                        <div>{country.name.common} </div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No countries to show</p>
            )}

        </div>

    )
}

export default HomePage;
