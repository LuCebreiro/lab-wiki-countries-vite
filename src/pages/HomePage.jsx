
import { useEffect, useState } from "react";
import { countriesList } from "../services/countries-service";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

function HomePage() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        countriesList()
            .then((APIcountries) => {
                setCountries(APIcountries)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })

    }, []);

    const sortedCountries = countries.slice().sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });

    return (
        <div className="HomePage">
            {loading
            ? <div className="d-flex justify-content-center">
                <BarLoader />
            </div>
            : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">WikiCountries: Your Guide to the World</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCountries.map((country) => (
                            <tr key={country._id}>
                                <td>
                                    <Link to={`/${country.alpha3Code}`}>
                                        <div>
                                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                                        </div>
                                        <div>{country.name.common} </div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>

    )
}

export default HomePage;
