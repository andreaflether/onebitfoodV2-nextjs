import Link from 'next/link'
import Image from 'next/image'

export default function Category(props) {
  return(
    <div className="">
      <Link href={`/restaurants?category=${props.title}`}>
        <a>
          <Image 
            src={props.image_url}
            alt={props.title}
            width={300}
            height={200}
            className="px1 clickable-effect"
          />
        </a>
      </Link>
      <p className="fw-bold">{props.title}</p>
    </div>
  )
}