import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExportPdfButton } from "@/components/export-pdf-button";
import {
  TrendingUp,
  Eye,
  CheckCircle2,
  Target,
  ShieldCheck,
} from "lucide-react";

const kpis = [
  {
    label: "Sentiment",
    value: "49%",
    note: (
      <>
        <strong className="text-gray-900">Up from 44%</strong> baseline. Early
        proof that conversation quality is improving.
      </>
    ),
    icon: TrendingUp,
  },
  {
    label: "Visible trust threads",
    value: "6",
    note: (
      <>
        EatClub is showing up in high-intent searches like{" "}
        <strong className="text-gray-900">&ldquo;is EatClub legit&rdquo;</strong>
        .
      </>
    ),
    icon: Eye,
  },
];

const proofPoints = [
  {
    title: "We\u2019re showing up in the right places",
    description:
      'Users check trust-related Reddit searches before trying the product. That is why traction on \u201Cis EatClub legit\u201D matters more right now than broader category keywords.',
    icon: ShieldCheck,
  },
  {
    title: "Trust is moving in the right direction",
    description:
      "Sentiment has improved from 44% to 49%. It is still early, but the conversation is shifting in the direction we want.",
    icon: TrendingUp,
  },
];

const actions = [
  {
    title: "Double down on trust threads",
    description:
      'Keep pushing "is EatClub legit" and related trust questions, because that is where we are already seeing traction.',
  },
  {
    title: 'Expand into "how it works"',
    description:
      "Build on trust by reinforcing the payment flow and how EatClub works before users convert.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full grow bg-gray-50/60">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              EatClub Pilot Results
            </h1>
            <p className="text-sm text-muted-foreground">
              2 weeks into a 1-month pilot
            </p>
          </div>
          <ExportPdfButton />
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
        {/* Hero summary */}
        

        {/* KPI cards */}
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {kpi.label}
                  </span>
                  <kpi.icon className="size-4 text-muted-foreground/60" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p className="text-3xl font-bold tracking-tight">
                  {kpi.value}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {kpi.note}
                </p>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Progress toward target
                </span>
                <Target className="size-4 text-muted-foreground/60" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <p className="text-3xl font-bold tracking-tight">49% → 60%</p>
              <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-500"
                  style={{ width: "80%" }}
                />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                ~80% of the way to target. Clear movement toward improving
                trust.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What this means */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <Card className="border-emerald-100 bg-linear-to-b from-white to-gray-50/60 lg:col-span-2">
            <CardHeader>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <CheckCircle2 className="size-3.5" />
                Early signal is positive
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              
              <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl leading-snug max-w-2xl">
                Early traction is showing up in trust-related searches, where
                users decide whether to try EatClub.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                This matters because these are high-intent users. Improving
                trust here directly impacts whether someone tries the product.
              </p>
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>What this means</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-0">
              {proofPoints.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 py-3.5 ${i > 0 ? "border-t border-gray-100" : ""}`}
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-gray-100">
                    <item.icon className="size-4 text-gray-600" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </CardContent>
          </Card>
          
        </section>
        

        {/* Next steps */}
        <section className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Next steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="flex flex-col gap-3">
                {actions.map((action, i) => (
                  <li key={action.title} className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {action.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
