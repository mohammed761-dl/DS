"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Brain,
  ChevronRight,
  Database,
  Github,
  Linkedin,
  MessageSquare,
  Moon,
  Sun,
  Twitter,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
            <Brain className="h-6 w-6" />
            <span>Hardtec</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-300"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors duration-300"
            >
              Testimonials
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex text-neutral-900 dark:text-neutral-50 transition-colors duration-300 hover:scale-105"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              className="hidden md:flex text-neutral-900 dark:text-neutral-50 transition-colors duration-300 hover:scale-105"
              asChild
            >
              <Link href="/dashboard">Log In</Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 hover:scale-105"
            >
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 transition-colors duration-300">
                    Revolutionizing Customer Retention with AI & Big Data
                  </h1>
                  <p className="max-w-[600px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                    Predict churn, enhance service, and drive client
                    satisfaction.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/dashboard">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-neutral-900 dark:border-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-300 hover:scale-105"
                  >
                    <Link href="/dashboard">
                      Go to Dashboard
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end animate-fade-in">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-300 hover:scale-105">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-32 w-32 text-neutral-300 dark:text-neutral-700 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center ">
              <div className="flex justify-center lg:justify-start order-last lg:order-first">
                <div className="relative w-full max-w-[500px] aspect-square rounded-xl hover:scale-105 overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <Database className="h-32 w-32 text-neutral-300 dark:text-neutral-700" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-neutral-900 dark:text-neutral-50">
                    About Hardtec
                  </h2>
                  <p className="max-w-[600px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Hardtec is at the forefront of customer retention
                    innovation, leveraging cutting-edge AI and Big Data
                    technologies to help businesses predict customer behavior
                    and enhance service delivery.
                  </p>
                  <p className="max-w-[600px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our platform integrates seamlessly with your existing CRM
                    systems, providing actionable insights that drive customer
                    satisfaction and loyalty.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
                    <span className="font-medium text-neutral-900 dark:text-neutral-50">
                      Artificial Intelligence
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
                    <span className="font-medium text-neutral-900 dark:text-neutral-50">
                      Big Data Analytics
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
                    <span className="font-medium text-neutral-900 dark:text-neutral-50">
                      Predictive Modeling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                  Core Features
                </h2>
                <p className="max-w-[900px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                  Our platform offers powerful tools to help you retain
                  customers and grow your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
                    <Users className="h-8 w-8 text-neutral-900 dark:text-neutral-50 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                    Churn Prediction
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                    Identify at-risk customers before they leave using our
                    advanced AI algorithms.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
                    <MessageSquare className="h-8 w-8 text-neutral-900 dark:text-neutral-50 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                    Personalized Recommendations
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                    Deliver tailored service recommendations based on customer
                    behavior and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300">
                    <BarChart3 className="h-8 w-8 text-neutral-900 dark:text-neutral-50 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                    CRM Integration
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                    Seamlessly integrate with your existing CRM systems for a
                    unified customer view.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to be intuitive and powerful, helping
                  you make data-driven decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Connect Your Data
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Integrate your CRM and customer data sources with our secure
                  platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  AI Analysis
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Our AI analyzes patterns and predicts customer behavior with
                  high accuracy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Take Action
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Receive actionable insights and recommendations to improve
                  retention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-neutral-600 dark:text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                  Hear from businesses that have transformed their customer
                  retention with Hardtec.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <Card className="bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                      &ldquo;Hardtec&apos;s platform has revolutionized how we
                      approach customer retention. We&apos;ve seen a 35%
                      reduction in churn within just three months of
                      implementation.&rdquo;
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full overflow-hidden h-12 w-12 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-colors duration-300">
                        <Users className="h-6 w-6 text-neutral-500 dark:text-neutral-400 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                          Sarah Johnson
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          CTO, TechCorp
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-neutral-50 dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-neutral-400 dark:hover:border-neutral-600">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <p className="italic text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                      &ldquo;The personalized recommendations generated by
                      Hardtec&apos;s AI have helped us increase customer
                      satisfaction scores by 42%. It&apos;s been a game-changer
                      for our business.&rdquo;
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full overflow-hidden h-12 w-12 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center transition-colors duration-300">
                        <Users className="h-6 w-6 text-neutral-500 dark:text-neutral-400 transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
                          Michael Chen
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                          CEO, RetailPlus
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-neutral-900 dark:bg-neutral-50 text-neutral-50 dark:text-neutral-900 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-colors duration-300">
                  Ready to Transform Your Customer Retention?
                </h2>
                <p className="max-w-[900px] text-neutral-300 dark:text-neutral-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                  Start using our AI-powered tools today or access your
                  dashboard directly for personalized insights.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                <Button
                  size="lg"
                  className="bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-neutral-50 dark:text-neutral-900 border-neutral-50 dark:border-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-neutral-900 dark:text-neutral-50" />
                <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                  Hardtec
                </span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Revolutionizing customer retention with AI & Big Data.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Product
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Integrations
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Updates
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Company
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="#about"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Blog
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Resources
              </h3>
              <nav className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Status
                </a>
              </nav>
            </div>
          </div>
          <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                © {new Date().getFullYear()} Hardtec. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
