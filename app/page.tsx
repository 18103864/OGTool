import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TrendingUp,
  Eye,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const kpis = [
  {
    label: "Avg. sentiment across target keywords",
    value: "49%",
    delta: "↑ from 44% baseline",
    status: "good" as const,
    icon: TrendingUp,
  },
  {
    label: "Page 1 / visible ranking threads",
    value: "6",
    delta: "↑ 2 new ranking threads",
    status: "good" as const,
    icon: Eye,
  },
  {
    label: "Avg. mentions per keyword set",
    value: "24.8",
    delta: "Early movement, not full saturation yet",
    status: "warn" as const,
    icon: MessageCircle,
  },
  {
    label: "Best performing theme",
    value: '"Is EatClub legit?"',
    delta: "Trust objection content is resonating",
    status: "good" as const,
    icon: Sparkles,
    smallValue: true,
  },
];

const keywords = [
  {
    keyword: "is eatclub legit australia",
    sentiment: "52%",
    mentions: 31,
    status: "Working",
    tier: "good" as const,
  },
  {
    keyword: "is eatclub legit london",
    sentiment: "50%",
    mentions: 27,
    status: "Working",
    tier: "good" as const,
  },
  {
    keyword: "what is eatclub",
    sentiment: "47%",
    mentions: 22,
    status: "Needs more volume",
    tier: "warn" as const,
  },
  {
    keyword: "is eatclub legit manchester",
    sentiment: "46%",
    mentions: 19,
    status: "Too early",
    tier: "warn" as const,
  },
  {
    keyword: "best apps for restaurant discounts australia",
    sentiment: "49%",
    mentions: 25,
    status: "Rising",
    tier: "good" as const,
  },
  {
    keyword: "best restaurant discount app london",
    sentiment: "43%",
    mentions: 12,
    status: "Weak thread pickup",
    tier: "bad" as const,
  },
];

const themes = [
  { label: "Trust / legitimacy threads", pct: 84 },
  { label: "London launch threads", pct: 73 },
  { label: 'Explainer / "what is EatClub"', pct: 61 },
  { label: "Category comparison keywords", pct: 42 },
];

const actions = [
  'Double down on "legit" and payment-process threads for London + Manchester.',
  "Add 2 comparison-style threads against generic discount apps to sharpen differentiation.",
  "Turn the strongest live threads into follow-on replies that answer common objections: restaurant quality, hidden catches, and card flow.",
  "Track app signups from Reddit landing paths weekly so we connect sentiment movement to business outcome.",
];

const statusStyles = {
  good: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warn: "bg-amber-50 text-amber-700 ring-amber-200",
  bad: "bg-red-50 text-red-700 ring-red-200",
};

const deltaStyles = {
  good: "text-emerald-600",
  warn: "text-amber-600",
  bad: "text-red-600",
};

const StatusIcon = ({ tier }: { tier: "good" | "warn" | "bad" }) => {
  if (tier === "good")
    return <CheckCircle2 className="size-3.5 text-emerald-600" />;
  if (tier === "warn")
    return <AlertTriangle className="size-3.5 text-amber-600" />;
  return <XCircle className="size-3.5 text-red-600" />;
};

const barGradient = (pct: number) => {
  if (pct >= 70) return "from-emerald-400 to-emerald-500";
  if (pct >= 50) return "from-blue-400 to-blue-500";
  return "from-amber-400 to-amber-500";
};

export default function HomePage() {
  return (
    <div className="w-full grow bg-gray-50/60">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            EatClub Pilot Results Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            2 weeks into 1-month pilot
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:px-6 lg:px-8">
        {/* KPI cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <CardContent className="flex flex-col gap-2 justify-center h-full">
                <p
                  className={`font-bold tracking-tight ${kpi.smallValue ? "text-2xl" : "text-3xl"}`}
                >
                  {kpi.value}
                </p>
                <p className={`text-xs ${deltaStyles[kpi.status]}`}>
                  {kpi.delta}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Keyword table + What's working */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Campaign performance</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50/50">
                    <TableHead className="pl-4">Keyword</TableHead>
                    <TableHead>Sentiment</TableHead>
                    <TableHead>Mentions</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywords.map((row) => (
                    <TableRow key={row.keyword}>
                      <TableCell className="pl-4 font-medium text-gray-900">
                        {row.keyword}
                      </TableCell>
                      <TableCell className="tabular-nums">
                        {row.sentiment}
                      </TableCell>
                      <TableCell className="tabular-nums">
                        {row.mentions}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[row.tier]}`}
                        >
                          <StatusIcon tier={row.tier} />
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Trust is moving first, while broader category keywords need
                another cycle.
              </p>
            </CardFooter>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>What&apos;s working right now</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {themes.map((t) => (
                <div key={t.label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{t.label}</span>
                    <span className="font-semibold tabular-nums">{t.pct}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full bg-linear-to-r ${barGradient(t.pct)} transition-all`}
                      style={{ width: `${t.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Objection-handling content is producing earlier signal than broad
                category demand capture. That is normal for a 2-week-old Reddit
                campaign.
              </p>
            </CardFooter>
          </Card>
        </section>

        {/* Recommended actions */}
        <section className="grid grid-cols-1 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended next actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="flex flex-col gap-3">
                {actions.map((action, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{action}</span>
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
