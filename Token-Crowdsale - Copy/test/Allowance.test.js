// const { ether } = require('./helpers/ether');
// const { advanceBlock } = require('./helpers/advanceToBlock');
// const { increaseTimeTo, duration } = require('./helpers/increaseTime');
// const { latestTime } = require('./helpers/latestTime');
// const { expectThrow } = require('./helpers/expectThrow');
// const { EVMRevert } = require('./helpers/EVMRevert');
// const { ethGetBalance } = require('./helpers/web3');
// const { assertRevert } = require('./helpers/assertRevert');
// const BigNumber = web3.BigNumber;

// require('chai')
//   .use(require('chai-bignumber')(BigNumber))
//   .should();

// // const SportlistCrowdsale = artifacts.require('SportlistCrowdsaleImpl');
// const SimpleToken = artifacts.require('SimpleToken');
// const SportlistToken = artifacts.require('Token');
// const SportlistCrowdsale = artifacts.require('TokenCrowdsale');


// contract('StagedCrowdsale', function([_, investor, wallet, purchaser, tokenWallet]) {

//     // beforeEach(async function()){

//         const rate = new BigNumber(1);
//         const goal = ether(20);
//         const lessThanGoal = ether(16);
//         const tokenSupply = new BigNumber('1e22');
        
//         const value = ether(2);
//         const expectedTokenAmount = rate.mul(value);
//         const tokenAllowance = new BigNumber('1e22');
//         const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
//         // beforeEach(async function () {
           
        
//         //     this.token = await SimpleToken.new();
//         //   });

//     // }

//     beforeEach(async function () {
//       this.openingTime = (await latestTime()) + duration.weeks(1);
//       this.closingTime = this.openingTime + duration.weeks(1);
//       this.afterClosingTime = this.closingTime + duration.seconds(1);
//       this.preWalletBalance = await ethGetBalance(wallet);
//       // this.rate = 500;
//       this.wallet = wallet;
//       this.preWalletBalance = await ethGetBalance(wallet);
//       this.cap = ether(100);
      
//         // Token config
//         this.name = "DappToken";
//         this.symbol = "DAPP";
//         this.decimals = 18;
    
//         // Deploy Token
//         this.token = await SportlistToken.new(
//           this.name,
//           this.symbol,
//           this.decimals,
//           2000000000
//         );
       
//         // this.goal = ether(50);
//         this.crowdsale=await SportlistCrowdsale.new(rate,this.wallet,this.token.address,
//             this.openingTime,this.closingTime,
//             this.cap,
//             goal,
//             this.wallet);
//     });
//     describe('accepting payments', function () {
//         it('should have token wallet', async function () {
//           (await this.crowdsale.tokenWallet()).should.be.equal(wallet);
//         });
    
//         it('should accept sends', async function () {
//           await this.crowdsale.send(value);
//         });
    
//         it('should accept payments', async function () {
//           await this.crowdsale.buyTokens(investor, { value: value, from: purchaser });
//         });
//       });
    
//       // describe('high-level purchase', function () {
//       //   it('should log purchase', async function () {
//       //     const { logs } = await this.crowdsale.sendTransaction({ value: value, from: investor });
//       //     const event = logs.find(e => e.event === 'TokensPurchased');
//       //     should.exist(event);
//       //     event.args.purchaser.should.equal(investor);
//       //     event.args.beneficiary.should.equal(investor);
//       //     event.args.value.should.be.bignumber.equal(value);
//       //     event.args.amount.should.be.bignumber.equal(expectedTokenAmount);
//       //   });
    
//       //   it('should assign tokens to sender', async function () {
//       //     await this.crowdsale.sendTransaction({ value: value, from: investor });
//       //     (await this.token.balanceOf(investor)).should.be.bignumber.equal(expectedTokenAmount);
//       //   });
    
//       //   it('should forward funds to wallet', async function () {
//       //     const pre = await ethGetBalance(wallet);
//       //     await this.crowdsale.sendTransaction({ value, from: investor });
//       //     const post = await ethGetBalance(wallet);
//       //     post.minus(pre).should.be.bignumber.equal(value);
//       //   });
//       // });
    
//       // describe('check remaining allowance', function () {
//       //   it('should report correct allowace left', async function () {
//       //     const remainingAllowance = tokenAllowance - expectedTokenAmount;
//       //     await this.crowdsale.buyTokens(investor, { value: value, from: purchaser });
//       //     (await this.crowdsale.remainingTokens()).should.be.bignumber.equal(remainingAllowance);
//       //   });
//       // });
    
//       // describe('when token wallet is different from token address', function () {
//       //   it('creation reverts', async function () {
//       //     this.token = await SimpleToken.new({ from: tokenWallet });
//       //     await assertRevert(AllowanceCrowdsale.new(rate, wallet, this.token.address, ZERO_ADDRESS));
//       //   });
//       // });
//     });
    