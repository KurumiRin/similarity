import LargeHeading from "@/ui/LargeHeading"
import Paragraph from "@/ui/Paragraph"
import { FC } from "react"
import "simplebar-react/dist/simplebar.min.css"

import DocumentationTabs from "@/components/DocumentationTabs"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Similarity API | Documentation",
  description: "Free & open-source text similarity API",
}
const page: FC = ({}) => {
  return (
    <div className="container max-w-7xl max-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Maiking a request</LargeHeading>
        <Paragraph>api/v1/similarity</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page
