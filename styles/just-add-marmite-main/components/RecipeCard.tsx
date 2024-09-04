import Image from "next/image"
import Link from "next/link"

interface recipeProps {
  recipe: any
}

const RecipeCard: React.FC<recipeProps> = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields
  return (
    <div className="card">
      <div className="featured">
        {/* featured image */}
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={320}
          height={250}
          alt="thumbnail"
          draggable="false"
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}><a>Cook this</a></Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
          text-align:center
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: 130px;
          width:300px
        }
        .info {
          padding: 3px;
        }
        @media (max-width:900px){
          .content {
            right: 277px;
          }
        }
        
        .info h4 {
          margin: 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 3px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: #f01b29;
          padding: 5px 8px;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
export default RecipeCard