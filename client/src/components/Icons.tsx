import FontAwesome from '@expo/vector-icons/FontAwesome'

type IconType = {
  className?: string
}

export const CircleInfoIcon = ({ className }: IconType) => {
  return <FontAwesome name='info-circle' size={24} className={`${className}`} />
}

export const HomeIcon = ({ className }: IconType) => {
  return <FontAwesome name='home' size={24} className={`${className}`} />
}

export const UserIcon = ({ className }: IconType) => {
  return <FontAwesome name='user' size={24} className={`${className}`} />
}

export const UserPlusIcon = ({ className }: IconType) => {
  return <FontAwesome name='user-plus' size={24} className={`${className}`} />
}

export const UserTimesIcon = ({ className }: IconType) => {
  return <FontAwesome name='user-times' size={24} className={`${className}`} />
}

export const SingOutIcon = ({ className }: IconType) => {
  return <FontAwesome name='sign-out' size={24} className={`${className}`} />
}

export const SearchIcon = ({ className }: IconType) => {
  return <FontAwesome name='search' size={24} className={`${className}`} />
}
export const InfoIcon = ({ className }: IconType) => {
  return <FontAwesome name='info' size={24} className={`${className}`} />
}

export const TagsIcon = ({ className }: IconType) => {
  return <FontAwesome name='tags' size={24} className={`${className}`} />
}

export const ShoppingBagIcon = ({ className }: IconType) => {
  return <FontAwesome name='shopping-bag' size={24} className={`${className}`} />
}

export const EnvelopeIcon = ({ className }: IconType) => {
  return <FontAwesome name='envelope' size={24} className={`${className}`} />
}

export const ShoppingCartIcon = ({ className }: IconType) => {
  return <FontAwesome name='shopping-cart' size={24} className={`${className}`} />
}

export const MinusIcon = ({ className }: IconType) => {
  return <FontAwesome name='minus' size={24} className={`${className}`} />
}

export const MayusIcon = ({ className }: IconType) => {
  return <FontAwesome name='plus' size={24} className={`${className}`} />
}

export const NavIcon = ({ className }: IconType) => {
  return <FontAwesome name='navicon' size={24} className={`${className}`} />
}

export const ChevronLeftIcon = ({ className }: IconType) => {
  return <FontAwesome name='chevron-left' size={24} className={`${className}`} />
}
