import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countryDetail } from "../services/countries-service";

function CountryDetailsPage() {
    const [country, setCountry] = useState(null)
    const { alpha3Code } = useParams()

    useEffect(() => {
        countryDetail(alpha3Code)
            .then((countryDetail) => {
                setCountry(countryDetail)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [alpha3Code])

    return (
        <div className="CountryDetailsPage">
            <h1>Country Details</h1>
        </div>

    )
}

export default CountryDetailsPage;
