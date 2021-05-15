import { useRecoilState } from 'recoil'
import addressState from '../store/atoms/addressAtom'
import truncateString from './truncateString'

export default function currentAddress() {
  const [address] = useRecoilState(addressState, []) 
  const currentAddress = `${truncateString(address.street, 30)}, ${address.number}`
  return currentAddress ? currentAddress : 'Endereço' 
}