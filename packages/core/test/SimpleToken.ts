import { loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect } from 'chai'
import hre from 'hardhat'
import { getAddress, parseEther, parseGwei } from 'viem'

describe('SimpleToken', () => {
  async function deploySimpleTokenFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.viem.getWalletClients()
    const NAME = 'PengPengCoin'
    const SYMBOL = 'PPC'
    const TOTAL_SUPPLY = parseEther('100000')
    const simpleToken = await hre.viem.deployContract('SimpleToken', [
      NAME,
      SYMBOL,
      TOTAL_SUPPLY,
    ])
    const publicClient = await hre.viem.getPublicClient()
    return {
      simpleToken,
      owner,
      otherAccount,
      publicClient,
      name: NAME,
      symbol: SYMBOL,
      totalSupply: TOTAL_SUPPLY,
    }
  }

  describe('Deployment', () => {
    it('should set the correct info', async () => {
      const { simpleToken, name, symbol, totalSupply } = await loadFixture(
        deploySimpleTokenFixture
      )
      expect(await simpleToken.read.name()).to.equal(name)
      expect(await simpleToken.read.symbol()).to.equal(symbol)
      expect(await simpleToken.read.totalSupply()).to.equal(totalSupply)
    })
  })
})
