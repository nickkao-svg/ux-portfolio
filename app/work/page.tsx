import { allCaseStudies } from "contentlayer/generated";
import { CaseStudyCard } from "@/components/CaseStudyCard";

export default function WorkPage() {
  return (
    <div className="space-y-10 py-10">
      {allCaseStudies.map((item) => (
        <CaseStudyCard key={item._id} item={item} />
      ))}
    </div>
  );
}

