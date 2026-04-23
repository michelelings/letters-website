import { Lead } from "@/components/article";
import { GuidesFocusBar } from "@/components/GuidesFocusBar";
import { GuideCardList } from "./GuideCardList";
import type { GuidesIndexData } from "./types";

export function GuidesIndexBody({ data }: { data: GuidesIndexData }) {
  return (
    <>
      <h1>{data.h1}</h1>
      <Lead>{data.lead}</Lead>
      <p className="guides-focus-hint">
        {data.focusHint}
      </p>
      <GuidesFocusBar
        label={data.focusBar.label}
        defaultOptionLabel={data.focusBar.defaultOptionLabel}
        languageOptions={data.focusBar.options}
      />

      <section
        className="guides-index__section"
        aria-labelledby={data.general.headingId}
      >
        <h2 className="guides-index__heading" id={data.general.headingId}>
          {data.general.title}
        </h2>
        <p className="guides-index__section-intro">{data.general.intro}</p>
        <GuideCardList items={data.general.items} />
      </section>

      <div className="guides-index__lang-wrap" id="guides-lang-sections">
        {data.langColumns.map((col) => (
          <section
            key={col.headingId}
            className="guides-index__section"
            data-guide-lang={col.dataGuideLang}
            data-order={col.dataOrder}
            aria-labelledby={col.headingId}
          >
            <h2 className="guides-index__heading" id={col.headingId}>
              {col.title}
            </h2>
            {col.blocks.map((block, i) => (
              <div key={i}>
                {block.sectionIntro && (
                  <p className="guides-index__section-intro">{block.sectionIntro}</p>
                )}
                <GuideCardList items={block.items} />
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
