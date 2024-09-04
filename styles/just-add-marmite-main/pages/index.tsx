import { createClient } from 'contentful'
import type { NextPage } from 'next'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipe" })

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 1
  }
}

const Recipes: NextPage = ({ recipes }) => {
  console.log(recipes)
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align:center
        }
        @media (max-width:930px){
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr;
        }
        }
      `}</style>

    </div>
  )
}

export default Recipes