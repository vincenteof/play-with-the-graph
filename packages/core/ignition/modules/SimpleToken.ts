import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'
import { parseEther } from 'viem'

const DEFAULT_NAME = 'PengPengCoin'
const DEFAULT_SYMBOL = 'PPC'
const DEFAULT_TOTAL_SUPPLY = parseEther('100000')

const SimpleTokenModule = buildModule('SimpleToken', (m) => {
  const name = m.getParameter('name', DEFAULT_NAME)
  const symbol = m.getParameter('symbol', DEFAULT_SYMBOL)
  const totalSupply = m.getParameter('totalSupply', DEFAULT_TOTAL_SUPPLY)
  const simpleToken = m.contract('SimpleToken', [name, symbol, totalSupply])
  return {
    simpleToken,
  }
})

export default SimpleTokenModule
