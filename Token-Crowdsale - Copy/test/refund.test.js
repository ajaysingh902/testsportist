// const { ether } = require("./helpers/ether");
// const { advanceBlock } = require("./helpers/advanceToBlock");
// const { increaseTimeTo, duration } = require("./helpers/increaseTime");
// const { latestTime } = require("./helpers/latestTime");
// const { expectThrow } = require("./helpers/expectThrow");
// const { EVMRevert } = require("./helpers/EVMRevert");
// const { ethGetBalance } = require("./helpers/web3");
// const { assertRevert } = require("./helpers/assertRevert");
// const time = require("./helpers/time");
// const BigNumber = web3.BigNumber;

// require("chai")
//   .use(require("chai-bignumber")(BigNumber))
//   .should();

// const RefundableCrowdsale = artifacts.require("RefundableCrowdsaleImpl");
// const SimpleToken = artifacts.require("SimpleToken");
// const SportlistToken = artifacts.require("Token");
// const SportlistCrowdsale = artifacts.require("TokenCrowdsale");

// contract("refund", function([
//   _,
//   wallet,
//   investor,
//   investor2,
//   foundersFund,
//   foundationFund,
//   partnersFund
// ]) {
//   // beforeEach(async function()){

//   // }
//   const cap = ether(100);
//   const changedcap = ether(100);
//   const rate = 500;
//   const lessThanGoal = ether(20);

//   beforeEach(async function() {
//     before(async function() {
//       // Advance to the next block to correctly read time in the solidity "now" function interpreted by ganache
//       await advanceBlock();
//     });

//     // Token config
//     this.name = "DappToken";
//     this.symbol = "DAPP";
//     this.decimals = 18;

//     // Deploy Token
//     this.token = await SportlistToken.new(
//       this.name,
//       this.symbol,
//       this.decimals,
//       2000000000
//     );
//     this.rate = 500;
//     this.wallet = wallet;
//     this.cap = ether(100);
//     this.openingTime = new Date("2019-01-01T00:00:00").getTime() / 1000; //(await time.latest()) + time.duration.weeks(1); //Math.floor(new Date().getTime() / 1000); //latestTime() + duration.weeks(1);
//     this.closingTime = this.openingTime + time.duration.weeks(1); //this.openingTime + 1 * 60 * 60 * 24; //this.openingTime + duration.weeks(1);
//     this.goal = ether(50);
//     this.crowdsale = await SportlistCrowdsale.new(
//       this.rate,
//       this.wallet,
//       this.token.address,
//       this.openingTime,
//       this.closingTime,
//       this.cap,
//       this.goal,
//       this.wallet
//     );
//   });
//   describe("before opening time ", function() {
//     //   it("denies refunds", async function() {
//     //     await expectThrow(this.crowdsale.claimRefund(investor), EVMRevert);
//     //     console.log(this.crowdsale.address);
//     //   });
//     // });
//     // describe("after opening time", function() {
//     //   beforeEach(async function() {
//     //     await increaseTimeTo(this.openingTime);
//     //   });
//     //   it("denies refunds", async function() {
//     //     await expectThrow(this.crowdsale.claimRefund(investor), EVMRevert);
//     //   });
//     describe("with unreached goal", function() {
//       beforeEach(async function() {
//         await this.crowdsale.send(10000, {
//           from: investor
//         });
//       });
//       it("refunds", async function() {
//         // const pre = await ethGetBalance(investor);
//         // await this.crowdsale.claimRefund(investor, { gasPrice: 0 });
//         // const post = await ethGetBalance(investor);
//         // post.minus(pre).should.be.bignumber.equal(lessThanGoal);
//       });
//     });
//   });
// });
