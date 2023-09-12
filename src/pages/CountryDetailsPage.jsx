import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { countryDetail } from "../services/countries-service";
import { BarLoader } from "react-spinners";

function CountryDetailsPage() {
  const [country, setCountry] = useState(null);
  const { alpha3Code } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countryDetail(alpha3Code)
      .then((countryDetail) => {
        setCountry(countryDetail);
        console.log(countryDetail);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [alpha3Code]);

  return (
    <div className="CountryDetailsPage">
      <h1 className="fw-bold">Country Details</h1>

      {loading ? (
        <div className="d-flex justify-content-center">
          <BarLoader />
        </div>
      ) : (
        <div>
          <div className="d-flex flex-column align-items-center mt-5">
            <img
              className="mb-5"
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              width={100}
            />
            <h1>{country.name.common}</h1>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Capital</th>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <th scope="row">Area</th>
                <td>
                  {country.area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <th scope="row">Borders</th>
                <td>
                  {country.borders.map((borderCountry) => (
                    <p colSpan="2" key={borderCountry}>
                        <Link to={`/${borderCountry}`}>{borderCountry} </Link>
                    </p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountryDetailsPage;
