"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Trophy, Target, HeartHandshake, ClipboardCheck, AlertTriangle, Medal, Feather, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AreYouChickenMockup() {
  const leaderboard = [
    { rank: "🥇", name: "Captain Courage", status: "Saved Themselves", amount: "$50" },
    { rank: "🥈", name: "The Johnson Family", status: "Passed It On", amount: "$35" },
    { rank: "🥉", name: "Downtown Auto", status: "Business Brave", amount: "$100" },
    { rank: "🐔", name: "Mystery Nominee", status: "Still Thinking", amount: "—" },
  ];

  const steps = [
    {
      icon: <Target className="h-7 w-7" />,
      title: "1. Get Nominated",
      text: "A friend, family member, or local business challenges you to prove you are not chicken.",
    },
    {
      icon: <HeartHandshake className="h-7 w-7" />,
      title: "2. Donate",
      text: "Make a small donation to support local cadet activities, training, and community programs.",
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "3. Nominate Others",
      text: "Pass the challenge along to a few good-humoured people who can take a joke.",
    },
    {
      icon: <Trophy className="h-7 w-7" />,
      title: "4. Join the Board",
      text: "Brave donors and funny holdouts appear on the moderated community leaderboard.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-50">
      <header className="sticky top-0 z-20 border-b border-stone-800/80 bg-stone-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-yellow-400 text-2xl shadow-lg shadow-yellow-400/20">🐔</div>
            <div>
              <div className="text-lg font-black tracking-tight">ARE YOU CHICKEN?</div>
              <div className="text-xs uppercase tracking-[0.25em] text-yellow-300">Cadets Fundraiser</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <a href="#how" className="hover:text-yellow-300">How It Works</a>
            <a href="#leaderboard" className="hover:text-yellow-300">Leaderboard</a>
            <a href="#rules" className="hover:text-yellow-300">Rules</a>
            <Button className="rounded-2xl bg-yellow-400 font-bold text-stone-950 hover:bg-yellow-300">Donate</Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(220,38,38,0.3),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-200">
                <Shield className="h-4 w-4" /> Community challenge · manually moderated
              </div>
              <h1 className="max-w-3xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
                Are you <span className="text-yellow-300">chicken?</span>
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-stone-300">
                Get nominated. Donate to support local cadets. Pass the challenge on. Or risk being gently, publicly, and harmlessly declared chicken.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-2xl bg-yellow-400 px-7 py-6 text-base font-black text-stone-950 hover:bg-yellow-300">Save Yourself</Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-stone-600 bg-stone-900/60 px-7 py-6 text-base font-bold text-stone-100 hover:bg-stone-800">Nominate Someone</Button>
              </div>
              <p className="mt-4 text-sm text-stone-400">Prototype only — buttons are visual placeholders.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }} className="relative">
              <Card className="rounded-[2rem] border-yellow-400/30 bg-stone-900/80 shadow-2xl shadow-yellow-500/10">
                <CardContent className="p-7">
                  <div className="rounded-[1.5rem] bg-yellow-300 p-8 text-stone-950">
                    <div className="text-center text-8xl">🐔</div>
                    <div className="mt-5 text-center text-4xl font-black">WANTED</div>
                    <div className="mt-2 text-center text-lg font-bold">For suspected chicken behaviour</div>
                    <div className="mt-6 rounded-2xl bg-stone-950 p-5 text-stone-50">
                      <div className="text-sm uppercase tracking-[0.25em] text-yellow-300">Current Challenge</div>
                      <div className="mt-2 text-2xl font-black">Donate $10+ or nominate 3 brave souls.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="how" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-9 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black tracking-tight">How it works</h2>
              <p className="mt-3 max-w-2xl text-stone-400">A simple, funny fundraiser with clear guardrails and adult review before anything public appears.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {steps.map((step) => (
              <Card key={step.title} className="rounded-3xl border-stone-800 bg-stone-900">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-700 text-yellow-200">{step.icon}</div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-400">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="leaderboard" className="border-y border-stone-800 bg-stone-900/60">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-yellow-100">Live-ish Mock Leaderboard</div>
              <h2 className="text-4xl font-black tracking-tight">Hall of Courage</h2>
              <p className="mt-4 text-stone-400">Celebrate donors, sponsors, and good sports. The “chicken” entries stay playful and moderated.</p>
              <Button className="mt-7 rounded-2xl bg-yellow-400 font-black text-stone-950 hover:bg-yellow-300">View Full Board</Button>
            </div>
            <Card className="rounded-3xl border-stone-800 bg-stone-950">
              <CardContent className="p-4">
                <div className="overflow-hidden rounded-2xl border border-stone-800">
                  {leaderboard.map((row, idx) => (
                    <div key={row.name} className={`grid grid-cols-[70px_1fr_150px_80px] items-center gap-4 px-5 py-4 ${idx !== leaderboard.length - 1 ? "border-b border-stone-800" : ""}`}>
                      <div className="text-3xl">{row.rank}</div>
                      <div>
                        <div className="font-black">{row.name}</div>
                        <div className="text-sm text-stone-500">Approved public entry</div>
                      </div>
                      <div className="text-sm font-semibold text-yellow-200">{row.status}</div>
                      <div className="text-right font-black">{row.amount}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="rounded-3xl border-stone-800 bg-stone-900">
              <CardContent className="p-7">
                <ClipboardCheck className="h-9 w-9 text-yellow-300" />
                <h3 className="mt-5 text-2xl font-black">Nomination Form</h3>
                <p className="mt-3 text-stone-400">Name, contact, donation pledge, and funny reason. Submissions wait for admin approval.</p>
                <Button variant="outline" className="mt-6 rounded-2xl border-stone-700 bg-stone-950 text-stone-100">Open Mock Form</Button>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-stone-800 bg-stone-900">
              <CardContent className="p-7">
                <Medal className="h-9 w-9 text-yellow-300" />
                <h3 className="mt-5 text-2xl font-black">Sponsor Spots</h3>
                <p className="mt-3 text-stone-400">Local businesses can buy their way out, sponsor a challenge, or match donations.</p>
                <Button variant="outline" className="mt-6 rounded-2xl border-stone-700 bg-stone-950 text-stone-100">Become a Sponsor</Button>
              </CardContent>
            </Card>
            <Card id="rules" className="rounded-3xl border-red-800/70 bg-red-950/50">
              <CardContent className="p-7">
                <AlertTriangle className="h-9 w-9 text-yellow-300" />
                <h3 className="mt-5 text-2xl font-black">Ground Rules</h3>
                <p className="mt-3 text-stone-300">No anonymous harassment. No minors listed publicly. No real animals. Everything public is reviewed first.</p>
                <Button variant="outline" className="mt-6 rounded-2xl border-red-700 bg-red-950 text-stone-100">Read Rules</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20 text-center">
          <div className="rounded-[2rem] border border-yellow-400/30 bg-yellow-400 p-10 text-stone-950 shadow-2xl shadow-yellow-400/10">
            <Feather className="mx-auto h-10 w-10" />
            <h2 className="mt-4 text-4xl font-black tracking-tight">Support the cadets. Save your reputation.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-stone-800">A funny community challenge designed to raise funds, recognize good sports, and keep the whole thing safe, friendly, and well moderated.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" className="rounded-2xl bg-stone-950 px-7 py-6 font-black text-yellow-200 hover:bg-stone-800">Donate Now</Button>
              <Button size="lg" variant="outline" className="rounded-2xl border-stone-950 px-7 py-6 font-black text-stone-950 hover:bg-yellow-300">Start a Challenge</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 px-5 py-8 text-center text-sm text-stone-500">
        Are You Chicken? Cadets Fundraiser · Static mockup · No payment or form processing connected
      </footer>
    </div>
  );
}
