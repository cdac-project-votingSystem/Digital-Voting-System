import React from "react";
import Verification from "./Verification";
import logo from '../../../assests/partyLogo/ncp.jpg';

const PoliticalPartyVerfication = (props) => {

  const politicalParties = [
    {
      name: "Bharatiya Janata Party",
      image: "/images/bjp.png",
      description: "A right-wing political party in India, founded in 1980, promoting nationalism and economic reforms."
    },
    {
      name: "Indian National Congress",
      image: "/images/congress.png",
      description: "One of India's oldest political parties, established in 1885, historically associated with the independence movement."
    },
    {
      name: "Aam Aadmi Party",
      image: "/images/aap.png",
      description: "Founded in 2012, it focuses on anti-corruption policies and good governance, emerging from the India Against Corruption movement."
    },
    {
      name: "Communist Party of India (Marxist)",
      image: "/images/cpi-m.png",
      description: "A left-wing party advocating for socialism and workers' rights, influential in states like Kerala and West Bengal."
    },
    {
      name: "Bahujan Samaj Party",
      image: "/images/bsp.png",
      description: "Founded in 1984, it primarily represents Dalits, Scheduled Castes, and other marginalized communities."
    },
    {
      name: "Shiv Sena",
      image: "/images/shiv-sena.png",
      description: "A regional party in Maharashtra, known for its pro-Marathi and Hindutva ideology, founded by Bal Thackeray."
    },
    {
      name: "Nationalist Congress Party",
      image: "/images/ncp.png",
      description: "A centrist party formed in 1999, split from the Indian National Congress, with influence in Maharashtra and other states."
    },
    {
      name: "Samajwadi Party",
      image: "/images/sp.png",
      description: "A socialist party founded in 1992, primarily influential in Uttar Pradesh, advocating for social justice and minority rights."
    }
  ];

  return (
    <div>
      <h3>Political Party Verification</h3>

      {politicalParties.map(party => (

        <Verification image={logo}>

        <h5 class="card-title">{party.name}</h5>
              <p class="card-text">
                {party.description}
              </p>
              
        </Verification>
      ))}

    </div>
  );
};

export default PoliticalPartyVerfication;
