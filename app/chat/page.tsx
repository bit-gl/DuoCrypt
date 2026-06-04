"use client";

import {
  ImagePlus,
  LockKeyhole,
  Mic,
  MoreVertical,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageContainer } from "@/components/layout/PageContainer";

const messages = [
  {
    id: 1,
    side: "received",
    text: "I made it home. The rain finally stopped.",
    time: "8:41 PM",
  },
  {
    id: 2,
    side: "sent",
    text: "Good. I was waiting for that message.",
    time: "8:42 PM",
  },
  {
    id: 3,
    side: "received",
    text: "This little private room feels nice already.",
    time: "8:43 PM",
  },
  {
    id: 4,
    side: "sent",
    text: "Just us. Quiet, secure, and simple.",
    time: "8:44 PM",
  },
];

export default function ChatPage() {
  return (
    <PageContainer maxWidth="sm" className="flex flex-col">
      <header className="sticky top-0 z-10 -mx-4 mb-4 border-b border-[#1E293B] bg-[#050816]/90 px-4 pb-4 pt-2 backdrop-blur-xl sm:-mx-6 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F52BA] to-[#38BDF8] text-base font-bold shadow-xl shadow-[#0F52BA]/25">
              A
              <span className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#050816] bg-[#22C55E]" />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-xl font-semibold text-[#F8FAFC]">
                My Love
              </h1>
              <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-[#1E293B] bg-[rgba(15,82,186,0.12)] px-2.5 py-1 text-sm text-[#7DD3FC]">
                <LockKeyhole aria-hidden="true" className="size-3.5" />
                Secure connection
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-label="Conversation options"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-2xl text-[#CBD5E1] transition hover:bg-[#111827] hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
          >
            <MoreVertical aria-hidden="true" className="size-5" />
          </button>
        </div>
      </header>

      <section
        aria-label="Conversation"
        className="flex-1 space-y-5 overflow-y-auto pb-4"
      >
        <div className="mx-auto w-fit rounded-full border border-[#1E293B] bg-[#0B1220] px-3 py-1 text-sm text-[#CBD5E1]">
          Today
        </div>

        {messages.map((message) => {
          const sent = message.side === "sent";

          return (
            <div
              key={message.id}
              className={`flex ${sent ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[82%] ${sent ? "items-end" : "items-start"}`}>
                <div
                  className={`rounded-2xl px-4 py-3 text-base leading-7 shadow-xl ${
                    sent
                      ? "rounded-br-md bg-gradient-to-r from-[#0F52BA] to-[#38BDF8] text-[#F8FAFC] shadow-[#0F52BA]/20"
                      : "rounded-bl-md border border-[#1E293B] bg-[#111827] text-[#F8FAFC] shadow-black/20"
                  }`}
                >
                  {message.text}
                </div>
                <p
                  className={`mt-1 px-1 text-sm text-[#CBD5E1]/70 ${
                    sent ? "text-right" : "text-left"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      <Card className="sticky bottom-24 mt-2 bg-[#0B1220]/95 p-3">
        <form className="flex items-end gap-2" aria-label="Message composer">
          <button
            type="button"
            aria-label="Add attachment"
            className="flex min-h-12 min-w-12 items-center justify-center rounded-2xl text-[#CBD5E1] transition hover:bg-[#111827] hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70"
          >
            <ImagePlus aria-hidden="true" className="size-5" />
          </button>

          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            rows={1}
            placeholder="Message privately..."
            className="min-h-12 flex-1 resize-none rounded-2xl border border-[#1E293B] bg-[#111827] px-4 py-3 text-base text-[#F8FAFC] outline-none transition placeholder:text-[#CBD5E1]/50 focus:border-[#38BDF8]/60 focus:ring-2 focus:ring-[#38BDF8]/15"
          />

          <button
            type="button"
            aria-label="Record voice message"
            className="hidden min-h-12 min-w-12 items-center justify-center rounded-2xl text-[#CBD5E1] transition hover:bg-[#111827] hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]/70 min-[390px]:flex"
          >
            <Mic aria-hidden="true" className="size-5" />
          </button>

          <Button type="button" aria-label="Send message" className="min-w-12 px-0">
            <Send aria-hidden="true" className="size-5" />
          </Button>
        </form>
      </Card>
    </PageContainer>
  );
}
