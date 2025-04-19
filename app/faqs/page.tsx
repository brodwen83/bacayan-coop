import { SectionTitle } from "@/components/section-title";

const faqs = [
  {
    question: "What is a multipurpose cooperative?",
    answer:
      "A multipurpose cooperative is an organization owned and operated by its members to provide multiple services, such as savings and credit, livelihood assistance, and more, depending on community needs.",
  },
  {
    question: "Who can join BMPC?",
    answer:
      "Any resident or worker within Bacayan and nearby areas who is willing to uphold our cooperative values and contribute to our goals may apply for membership.",
  },
  {
    question: "How do I become a member?",
    answer:
      "To become a member, you need to fill out a membership application, attend a Pre-Membership Education Seminar (PMES), and comply with the minimum share capital requirements.",
  },
  {
    question: "What services do you offer?",
    answer:
      "BMPC offers savings and loan services, livelihood programs, training and education for members, and other community-support initiatives.",
  },
  {
    question: "Where is your office located?",
    answer:
      "Our office is located in Bacayan, Cebu City. Visit our Contact Us page for detailed directions and contact numbers.",
  },
];

export default function FAQsPage() {
  return (
    <div className="container mx-auto max-w-4xl p-8 space-y-12 py-12">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Get quick answers to the most common inquiries about BMPC"
      />

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-xl border bg-muted p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
