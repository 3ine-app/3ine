import { MetaTags } from '@redwoodjs/web'
import MediumEditor from 'src/components/MediumEditor/MediumEditor'

const HomePage = () => {
  return (
    <div>
      <MetaTags title="Home" description="3ine.app home page"></MetaTags>
      <MediumEditor
        onSave={(serialized) => {
          console.log(serialized)
        }}
      />
    </div>
  )
}

export default HomePage
