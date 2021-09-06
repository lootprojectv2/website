// Imports
import { useState, useEffect } from "react";
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles
import { ethers } from "ethers";

const provider = new ethers.providers.InfuraProvider();

// Types
import type { ReactElement } from "react";

function getRandomTokenId() {
  return Math.floor(Math.random() * (23970 - 16000) + 16000);
}
export default function Home(): ReactElement {
  const [value, setValue] = useState<number>(getRandomTokenId());
  const [image, setImage] = useState("");
  useEffect(() => {
    async function fetchTokenURI(tokenId) {
      const abi = [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_tokenId",
              type: "uint256",
            },
          ],
          name: "tokenURI",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
        },
      ];
      const lootContract = new ethers.Contract("0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089", abi, provider);
      const tokenURIBase64 = await lootContract.tokenURI(tokenId);

      const image = JSON.parse(window.atob(tokenURIBase64.substring(29))).image;
      setImage(image);
    }
    fetchTokenURI(value);
  }, [value]);
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    // { name: "OpenSea", url: "https://opensea.io/collection/lootproject" },
    // { name: "Synthetic Loot", url: "/synthloot" },
    {
      name: "Twitter",
      url: "https://twitter.com/lootprojectv3",
    },
    {
      name: "Contract",
      url: "https://etherscan.io/address/0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089",
    },
  ];

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeBags = () => {
    const shuffled = defaultBags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const handleClick = () => {
    setValue(getRandomTokenId());
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>LootV3</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            LootV3 is third set of Loot, a randomized adventurer gear generated and stored on chain.
            <br />
            LootV3 compatible with Loot & Extension Loot（xLOOT).
            <br />
            You can retrieve token ownership within V3 contract.
            <br />
            <b>Extend, not Break.</b>
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>
            Give me tokenID:
            <input value={value} onChange={(e) => setValue(+e.target.value)} />
            <button onClick={handleClick}>random</button>
            <p>Loot V3 tokenId from 16001 to 23970</p>
          </span>
          {image && (
            <a href={`https://opensea.io/assets/0x2464Df245C5E0Ff013b4f65DCA212A9a5B451089/${value}`} target="_blank" rel="noopener noreferrer" className={styles.home__bag}>
              <img src={image} />
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}
