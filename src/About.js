import React from "react";

const About = () => {
  return (
    <div className="about_main_div">
      <p className="about_main_para">
        BNBMinter - An Investment platform built on BSC
      </p>
      <p class="minter_words">
        BNBminter is a fork of BNBstake.app but better. Contract is the same
        with two major tweaks to increase the lifespan of the contract.
      </p>
      <p class="minter_words">
        1. We changed the daily percent increment from 0.5% to 0.2%. This will
        limit the daily mint rates for new stakes and expands the longevity of
        the contract reserves.
      </p>
      <p class="minter_words">
        2. We also included withdrawal fees of 5% which are re-deposited into
        the contract to increase its reserves.
      </p>
      <p class="minter_words">
        This onchain investment programme is very secure, the contract has been
        studied and verified to be 100% safe. With the tweak we included, the
        contract will be able to sustain itself for a very long time.
      </p>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>Incentives</strong>
        </h5>
        <p>
          • Basic interest rate (only for new deposits): +0.2% every 24 hours
        </p>
        <p>
          • Total income (based on your tariff plan): from 5% to 8% daily +
          Basic interest rate (growing daily)
        </p>
        <p>• Minimal deposit: 0.05 BNB and no maximal limit</p>
        <p>
          • Earnings every moment, withdraw any time if you use capitalization
          of interest you can withdraw only after end of your deposit Investment
          Plans We have two types of tariff plans with different periods and
          percentages of profitability
        </p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>Plan Type №2 (Yellow) - Withdraw profit Anytime</strong>
        </h5>
        <p>
          • Basic interest rate (only for new deposits): +0.2% every 24 hours
        </p>
        <p>• Plan 2 - (21 days) - 6.5% per day - 136% profit</p>
        <p>• Plan 3 - (28 days) - 5% per day - 140% profit Explanations:</p>
        <p>
          1. Starting percentages (what you see on the slide) increase every day
          by 0.2% For example: on plan 1 on day 20 of the project, the starting
          percentage will already be equal to 14% per day (20 * 0.2 + 8)
        </p>
        <p>
          2. The percentage is fixed at the start of the plan. For example: on
          the 12th day of your plan, the percentage will be the same as it was
          at the very beginning of its work.
        </p>
        <p>
          Investment Plans We have two types of tariff plans with different
          periods and percentages of profitability
        </p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>
            Plan Type №2 (green) - Withdraw profit end of plan + use
            capitalization of interest
          </strong>
        </h5>
        <p>• Plan 4 - (14 days) - 8% per day - 193% profit</p>
        <p>• Plan 5 - (21 days) - 6.5% per day - 275% profit</p>
        <p>• Plan 6 - (28 days) - 5% per day - 292% profit Explanations:</p>
        <p>
          1. Starting percentages (what you see on the slide) increase every day
          by 0.2%
        </p>
        <p>
          2. This plan type use capitalization of interest (every day) to
          calculate the percentage of profit. example: in 1 day you get, + 8%
          for the amount of 1 BNB = 1.08 BNB. On the second day, you will
          already receive 8.2% on the amount from the previous day 1.08 * 8.2% =
          1.16856 BNB. The next day, 8.4% on the amount of the day passed, and
          so on.
        </p>
        <p>3. The profit percentage is growing every day.</p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>
            Referral System Get additional income by inviting people to follow
            your link You will receive
          </strong>
        </h5>
        <p>• 5% from each level 1 referral deposits</p>
        <p>• 2.5% from each level 2 referral deposits</p>
        <p>• 0.5% from each level 3 referral deposits Explanations:</p>
        <p>1. You need to have at least 1 deposit to start receive earnings</p>
        <p>
          2. You need to use your referral link to record the people you refer
        </p>
        <p>
          3. Your reward is credited to a separate place in the smart contract
          and can be withdrawn at any time by pressing a button «Mint BNB»
        </p>
        <p>
          4. It is forbidden to use illegal methods of advertising your referral
          link Smart Contract Smart-Contract is safe for use in the Binance
          Smart Chain main network
        </p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>Contract Information & Audit</strong>
        </h5>
        <p>
          • Contract Address:{" "}
          <a
            href="https://bscscan.com/address/0x734Bf4623296dAb55de6Fced4D1395e6638e9D65"
            target="_blank"
            style={{
              color: "white",
              fontWeight: "500",
              overflowWrap: "break-word",
            }}
          >
            https://bscscan.com/address/0x734Bf4623296dAb55de6Fced4D1395e6638e9D65
          </a>
        </p>
        <p>
          • Audit Report:
          <a
            href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/BNBMinter.pdf"
            target="_blank"
            style={{
              color: "white",
              fontWeight: "500",
              overflowWrap: "break-word",
            }}
          >
            https://github.com/TechRate/Smart-Contract-Audits/blob/main/BNBMinter.pdf
          </a>
        </p>
        <p>
          • Working on Binance Smart Chain fast and secured network by Binance
        </p>
        <p>
          • The code was tested with compatible compilers and simulate manually
          reviewed for all commonly known and specific vulnerabilities.
        </p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>Connecting to BNBMinter With Metamask</strong>
        </h5>
        <p>
          • MetaMask can be downloaded on Chrome and Firefox, or on iOS and
          Android if you’re a mobile user here:
          <a
            href="https://metamask.io/download.html"
            target="_blank"
            style={{
              color: "white",
              fontWeight: "500",
              overflowWrap: "break-word",
            }}
          >
            Download Metamask
          </a>
        </p>
        <p>
          • Next, follow along with the setup specified by the app. Go ahead and
          click Create a Wallet. Write down the backup seed phrase somewhere
          secret
        </p>
        <p>• Select Settings from the dropdown menu</p>
        <p>• On the Settings page, we want to locate the Networks menu</p>
        <p>
          • Click Add Network in the top-right corner to manually add the
          Binance Smart Chain one (see next page)
        </p>
        <p>
          • Once you Save the Network and return to the main view and select
          Binance Smart Chain Connecting to BNBStake
        </p>
        <p>Network Name: Binance Smart Chain </p>
        <p>Network New RPC URL: https://bsc-dataseed.binance.org/</p>
        <p>ChainID: 56 Symbol: BNB</p>
        <p>
          Block Explorer URL:
          <a
            href="https://bscscan.com"
            target="_blank"
            style={{
              color: "white",
              fontWeight: "500",
              overflowWrap: "break-word",
            }}
          >
            https://bscscan.com
          </a>
        </p>
      </div>
      <div class="about_div_wrap">
        <h5 class="about_para_title">
          <strong>Contact Informations</strong>
        </h5>
        <p>
          Telegram Group:
          <a
            href="https://t.me/bnbminter"
            target="_blank"
            style={{
              color: "rgb(241, 119, 155)",
              fontWeight: "600",
              overflowWrap: "break-word",
            }}
          >
            https://t.me/bnbminter
          </a>
        </p>
        <p>
          Telegram Group - SPANISH:
          <a
            href="https://t.me/bnbminter-spanish"
            target="_blank"
            style={{
              color: "rgb(241, 119, 155)",
              fontWeight: "600",
              overflowWrap: "break-word",
            }}
          >
            https://t.me/bnbminter-spanish
          </a>
        </p>
        <p>
          Website:
          <a
            href="www.bnbminter.app"
            target="_blank"
            style={{
              color: "rgb(241, 119, 155)",
              fontWeight: "600",
              overflowWrap: "break-word",
            }}
          >
            www.bnbminter.app
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
