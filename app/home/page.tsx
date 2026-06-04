import { Heart, LockKeyhole, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageContainer } from "@/components/layout/PageContainer";

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export default function HomePage() {
  return (
    <PageContainer maxWidth="sm" className="space-y-6">
      <section className="pt-4">
        <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-[rgba(15,82,186,0.12)] text-[#7DD3FC] shadow-xl shadow-[#0F52BA]/15">
          <Heart aria-hidden="true" className="size-7 fill-[#7DD3FC]/20" />
        </div>
        <p className="text-base text-[#CBD5E1]">{getGreeting()}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-[#F8FAFC]">
          Your private space is ready.
        </h1>
        <p className="mt-4 text-base leading-7 text-[#CBD5E1]">
          A quiet room for just the two of you. No feeds, no noise, no one else.
        </p>
      </section>

      <Card className="bg-[rgba(15,82,186,0.12)] p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1220] text-[#7DD3FC]">
            <LockKeyhole aria-hidden="true" className="size-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">
              Secure Connection Active
            </h2>
            <p className="mt-2 text-base leading-7 text-[#CBD5E1]">
              Your session is protected and ready for private messaging.
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B1220] text-[#38BDF8]">
            <Sparkles aria-hidden="true" className="size-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#F8FAFC]">
              Today&apos;s note
            </h2>
            <p className="mt-2 text-base leading-7 text-[#CBD5E1]">
              Keep it simple. Say the thing. Leave the rest outside.
            </p>
          </div>
        </div>
      </Card>

      <ButtonLink href="/chat" fullWidth>
        <MessageCircle aria-hidden="true" className="size-5" />
        Open Chat
      </ButtonLink>
    </PageContainer>
  );
}
