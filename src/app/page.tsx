"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroGlobeOverlay from '@/components/sections/hero/HeroGlobeOverlay';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardNine from '@/components/sections/team/TeamCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactParallax from '@/components/sections/contact/ContactParallax';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Rocket, Target, Lightbulb, Zap, Award, Users, Quote, CheckCircle, TrendingUp, Network, Briefcase, Globe, DollarSign, Star, BarChart3, Linkedin, Twitter, Mail, Youtube } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="noise"
      cardStyle="inset"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Fresh Fund"
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Started",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroGlobeOverlay
          title="Global Tech Investment Reimagined"
          description="Fresh Fund is Israel's premier technology investment fund, identifying and empowering the next generation of innovative startups from Tel Aviv and beyond."
          tag="Tel Aviv Based"
          tagIcon={Rocket}
          buttons={[
            { text: "Explore Opportunities", href: "#services" },
            { text: "Meet Our Team", href: "#team" }
          ]}
          ariaLabel="Hero section with globe overlay"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="About Fresh Fund"
          description="Backing visionary entrepreneurs who are transforming the global tech landscape with bold ideas and cutting-edge solutions."
          tag="Our Story"
          tagIcon={Target}
          textboxLayout="default"
          contentTag="INVESTMENT PHILOSOPHY"
          contentTagIcon={Lightbulb}
          contentTitle="Early-stage ventures with exponential potential"
          contentDescription="We specialize in identifying exceptional founders and providing them with the capital, networks, and expertise needed to scale their technology to global markets. Our focus is on companies solving real problems with innovative approaches."
          contentButtons={[{ text: "Learn More", href: "#services" }]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794714686-r3o601z0.jpg"
          imageAlt="Fresh Fund Tel Aviv office"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Our Investment Approach"
          description="A comprehensive process designed to identify and nurture exceptional technology companies."
          tag="Services"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          features={[
            {
              id: "1",
              title: "Deep Due Diligence",
              description: "We conduct comprehensive analysis of technology, market potential, and team capabilities to identify truly exceptional opportunities.",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794715687-0mx9hxzx.jpg" },
              items: [
                { icon: CheckCircle, text: "Technical architecture review" },
                { icon: TrendingUp, text: "Market size validation" },
                { icon: Users, text: "Team capability assessment" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Active Partnership",
              description: "Beyond capital, we provide strategic guidance, introduce portfolio companies to key partners, and help scale operations globally.",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794716609-7realuk0.jpg" },
              items: [
                { icon: Network, text: "Strategic introductions" },
                { icon: Briefcase, text: "Business development support" },
                { icon: Globe, text: "International expansion guidance" }
              ],
              reverse: true
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Fresh Fund Impact"
          description="Measurable results driving innovation across the global tech ecosystem."
          tag="Track Record"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          gridVariant="uniform-all-items-equal"
          containerStyle="default"
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Companies Funded",
              description: "Active portfolio companies across fintech, deeptech, and enterprise software",
              icon: TrendingUp
            },
            {
              id: "2",
              value: "2.5B",
              title: "Deployed Capital",
              description: "Total investment across portfolio with average check size of 500k-2M USD",
              icon: DollarSign
            },
            {
              id: "3",
              value: "10+",
              title: "Unicorns",
              description: "Portfolio companies that achieved billion-dollar valuations",
              icon: Star
            },
            {
              id: "4",
              value: "15%",
              title: "Fund Return",
              description: "Average annualized return across managed funds",
              icon: BarChart3
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardNine
          title="Meet Our Investment Team"
          description="Experienced investors and operators committed to building the future of technology."
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          members={[
            {
              id: "1",
              name: "David Chen",
              role: "Managing Partner & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794717426-zitjzqry.jpg",
              imageAlt: "David Chen",
              socialLinks: [
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
              ]
            },
            {
              id: "2",
              name: "Rona Avakian",
              role: "Partner & Investor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794718057-mf5tl3i6.jpg",
              imageAlt: "Rona Avakian",
              socialLinks: [
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
              ]
            },
            {
              id: "3",
              name: "Itai Blumenthal",
              role: "Principal Investor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794718688-wox5ns9c.jpg",
              imageAlt: "Itai Blumenthal",
              socialLinks: [
                { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <ProductCardThree
          title="Portfolio Companies"
          description="Meet the innovative companies we're backing and scaling globally."
          tag="Our Portfolio"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          containerStyle="default"
          products={[
            {
              id: "1",
              name: "CloudSecure",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794719565-xrqr49pe.jpg",
              imageAlt: "CloudSecure - Enterprise security platform",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "QuantumML",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794720207-6mh8hg2c.jpg",
              imageAlt: "QuantumML - Machine learning infrastructure",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "DataFlow",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794720974-wlbdghew.jpg",
              imageAlt: "DataFlow - Real-time data platform",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "HealthTech AI",
              price: "Series A",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794721921-0fdfubx5.jpg",
              imageAlt: "HealthTech AI - Healthcare analytics",
              initialQuantity: 1
            },
            {
              id: "5",
              name: "FinTech Innovations",
              price: "Series C",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794722806-o5fwc28i.jpg",
              imageAlt: "FinTech Innovations - Payment solutions",
              initialQuantity: 1
            },
            {
              id: "6",
              name: "CyberShield Labs",
              price: "Series B",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794723461-td6d3bhm.jpg",
              imageAlt: "CyberShield Labs - Cybersecurity platform",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactParallax
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34YrpHTNyoPHUh85bjA10KHfDge/uploaded-1765794724228-l0yso3kl.jpg"
          imageAlt="Get in touch with Fresh Fund"
          buttons={[
            { text: "Send Inquiry", href: "mailto:hello@freshfund.io" },
            { text: "Schedule Call", href: "#footer" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          description="Fresh Fund is a Tel Aviv-based venture capital firm investing in exceptional technology companies. We combine deep operational expertise with global networks to help our portfolio companies scale globally."
          logoText="Fresh Fund"
          copyrightText="© 2025 Fresh Fund. All rights reserved."
          columns={[
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Services", href: "services" },
                { label: "Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Portfolio", href: "https://portfolio.freshfund.io" },
                { label: "Insights", href: "https://insights.freshfund.io" },
                { label: "Press", href: "https://press.freshfund.io" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cookie Policy", href: "cookies" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com/company/freshfund", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com/freshfund", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:hello@freshfund.io", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
