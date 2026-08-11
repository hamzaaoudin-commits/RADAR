export function SectionDivider({
  word,
  caption,
}: {
  word: string
  caption: string
}) {
  return (
    <div className="bg-brand px-6 py-14 text-center sm:py-16">
      <div className="font-serif text-[clamp(2.2rem,7vw,3.6rem)] font-bold leading-none tracking-[-0.01em] text-ink">
        {word}
      </div>
      <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.14em] text-ink/60">{caption}</div>
    </div>
  )
}
