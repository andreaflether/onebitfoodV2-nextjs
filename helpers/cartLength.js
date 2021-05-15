import { useRecoilState } from 'recoil'
import cartState from '../store/atoms/cartAtom'

export default function cartLength() {
  const [cart] = useRecoilState(cartState, []) 
  const totalLength = cart.products.reduce((a, b) => a + b['quantity'], 0)
  return totalLength
}