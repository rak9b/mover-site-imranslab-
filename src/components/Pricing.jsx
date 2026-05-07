import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { pricingData } from '../data/siteData';

/* ── Helpers ─────────────────────────────────────────── */
function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const badgeStyles = {
  primary: 'bg-primary/20 text-primary border border-primary/30',
  accent:  'bg-accent/20  text-accent-light border border-accent/30',
  amber:   'bg-amber-500/20 text-amber-300 border border-amber-500/30',
};

const glowStyles = {
  primary: 'group-hover:shadow-[0_20px_60px_rgba(255,61,0,0.2)]',
  accent:  'group-hover:shadow-[0_20px_60px_rgba(2,132,199,0.2)]',
  amber:   'group-hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]',
};

const topBorderStyles = {
  primary: 'from-primary/60',
  accent:  'from-accent/60',
  amber:   'from-amber-400/60',
};

/* ── Tier Card ───────────────────────────────────────── */
function TierCard({ tier, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`group relative h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2
          ${glowStyles[tier.badgeColor]}`}
      >
        {/* Animated top border */}
        <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${topBorderStyles[tier.badgeColor]} via-transparent to-transparent`} />

        {/* Hover glow overlay */}
        <div className={`absolute -inset-px bg-gradient-to-b ${topBorderStyles[tier.badgeColor].replace('from-', 'from-').replace('/60', '/10')} via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

        <div className="p-8 flex flex-col h-full relative z-10">
          {/* Badge + Icon */}
          <div className="flex items-start justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <ion-icon name={tier.icon} class="text-3xl text-white/70" />
            </div>
            <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${badgeStyles[tier.badgeColor]}`}>
              {tier.badge}
            </span>
          </div>

          {/* Name + Tagline */}
          <h3 className="text-2xl font-heading font-black text-white mb-1">{tier.name}</h3>
          <p className="text-sm text-slate-400 mb-5 italic">{tier.tagline}</p>

          {/* Price */}
          <div className="mb-5 pb-5 border-b border-white/10">
            <span className="text-4xl font-heading font-black text-white">{tier.priceFrom}</span>
            <p className="text-xs text-slate-500 mt-1">{tier.priceDesc}</p>
          </div>

          {/* Price examples */}
          <div className="space-y-2 mb-6">
            {tier.examples.map((ex, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-slate-400">{ex.label}</span>
                <span className="font-semibold text-white/90 font-heading">{ex.price}</span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-8 flex-grow">
            {tier.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <ion-icon name="checkmark-circle-outline" class="text-base mt-0.5 shrink-0 text-primary/80" />
                {h}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="block text-center py-3.5 px-6 rounded-2xl font-heading font-bold text-sm tracking-wider uppercase
              bg-primary/10 hover:bg-primary text-primary hover:text-white
              border border-primary/30 hover:border-primary
              transition-all duration-300"
          >
            {tier.cta}
          </a>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Route Timeline ──────────────────────────────────── */
function RouteTimeline() {
  return (
    <FadeIn delay={0.1}>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
            <ion-icon name="map-outline" class="text-primary text-xl" />
          </div>
          <div>
            <h3 className="font-heading font-black text-white text-xl">Trans-Canada Route Stops</h3>
            <p className="text-slate-400 text-xs mt-0.5">En-route pickups &amp; drop-offs available at every stop</p>
          </div>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[18px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-accent to-amber-500 opacity-30" />

          <div className="space-y-5">
            {pricingData.routeStops.map((stop, i) => {
              const isLast = i === pricingData.routeStops.length - 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-5 pl-1"
                >
                  {/* Node */}
                  <div className={`relative z-10 mt-0.5 w-9 h-9 rounded-full flex items-center justify-center shrink-0 border
                    ${isLast
                      ? 'bg-amber-500/20 border-amber-500/50'
                      : 'bg-primary/10 border-primary/30'
                    }`}>
                    <ion-icon
                      name={stop.icon}
                      class={`text-sm ${isLast ? 'text-amber-400' : 'text-primary'}`}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-1">
                    <div>
                      <span className={`font-heading font-bold text-base ${isLast ? 'text-amber-300' : 'text-white'}`}>
                        {stop.city}
                      </span>
                      <span className="ml-3 text-xs text-slate-500 font-mono">{stop.km}</span>
                    </div>
                    <p className="text-xs text-slate-400 w-full sm:w-auto">{stop.note}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Vehicle Specs ───────────────────────────────────── */
function VehicleSpecs() {
  return (
    <FadeIn delay={0.15}>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <ion-icon name="speedometer-outline" class="text-accent-light text-xl" />
          </div>
          <div>
            <h3 className="font-heading font-black text-white text-xl">Vehicle Fleet</h3>
            <p className="text-slate-400 text-xs mt-0.5">Built for 10–12+ hour daily operations</p>
          </div>
        </div>

        <div className="space-y-4">
          {pricingData.vehicleSpecs.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <ion-icon name={v.icon} class="text-accent-light text-lg" />
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-white text-sm mb-1">{v.name}</h4>
                <p className="text-xs text-slate-400 mb-1">{v.capacity}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <span className="text-[11px] text-accent-light/80 font-medium">{v.range}</span>
                  <span className="text-[11px] text-slate-500">Best for: {v.best}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Add-ons ─────────────────────────────────────────── */
function AddOns() {
  return (
    <FadeIn delay={0.2}>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <ion-icon name="add-circle-outline" class="text-amber-400 text-xl" />
          </div>
          <div>
            <h3 className="font-heading font-black text-white text-xl">Extra Services</h3>
            <p className="text-slate-400 text-xs mt-0.5">Add to any package at checkout</p>
          </div>
        </div>

        <div className="space-y-3">
          {pricingData.addOns.map((addon, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70 shrink-0" />
                <span className="text-sm text-slate-300">{addon.label}</span>
              </div>
              <span className="text-sm font-heading font-bold text-white/90 tabular-nums">{addon.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Route Overview Banner ───────────────────────────── */
function RouteBanner() {
  const { routeOverview } = pricingData;
  const stats = [
    { icon: 'navigate-circle-outline', label: 'Distance',     value: routeOverview.distance },
    { icon: 'time-outline',            label: 'Driving Time', value: routeOverview.drivingTime },
    { icon: 'calendar-outline',        label: 'Trip Duration',value: routeOverview.tripDuration },
    { icon: 'flame-outline',           label: 'Fuel Stops',   value: routeOverview.fuelStops },
  ];

  return (
    <FadeIn>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/10 via-white/5 to-accent/10 backdrop-blur-xl p-6 md:p-8 mb-14">
        <div className="flex flex-wrap gap-1 items-center justify-center mb-6">
          {routeOverview.provinces.map((p, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="text-xs font-bold font-heading text-white bg-white/10 border border-white/10 px-3 py-1 rounded-full">
                {p}
              </span>
              {i < routeOverview.provinces.length - 1 && (
                <ion-icon name="arrow-forward-outline" class="text-white/30 text-xs" />
              )}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <ion-icon name={s.icon} class="text-2xl text-primary mb-2" />
              <p className="text-xl font-heading font-black text-white">{s.value}</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Main Component ──────────────────────────────────── */
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary-light relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[42rem] h-[42rem] bg-primary/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[36rem] h-[36rem] bg-accent/5 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] bg-amber-500/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 justify-center mb-4">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {pricingData.subtitle}
              </p>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              {pricingData.title}
            </h2>
            <p className="mt-5 text-slate-300 text-lg leading-relaxed font-light">
              {pricingData.description}
            </p>
          </div>
        </FadeIn>

        {/* Route Overview Banner */}
        <RouteBanner />

        {/* Pricing Tier Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {pricingData.tiers.map((tier, i) => (
            <TierCard key={tier.id} tier={tier} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom 3-col grid: Route Stops | Vehicle Specs | Add-ons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <RouteTimeline />
          <VehicleSpecs />
          <AddOns />
        </div>

        {/* Footer Note */}
        <FadeIn delay={0.1}>
          <p className="text-center text-slate-500 text-sm mt-12">
            All prices in CAD. Final quote provided after consultation. En-route stops include Ottawa, Sudbury, Thunder Bay, Winnipeg &amp; Regina.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
