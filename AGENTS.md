# Guizang PPT Skill

For requests to create or revise Guizang HTML presentations, editorial or Swiss-style decks, presenter notes, or deck covers, use `$guizang-ppt-skill`. If the skill picker does not list it, open [.agents/skills/guizang-ppt-skill/SKILL.md](.agents/skills/guizang-ppt-skill/SKILL.md) and follow its workflow. For example, ask “Use $guizang-ppt-skill to turn this outline into a Swiss-style HTML deck.”

Work in the existing checkout. The repository includes the skill, both HTML templates, bundled assets, scripts, and references. It pins [upstream revision 93d21bf](https://github.com/op7418/guizang-ppt-skill/tree/93d21bf4a73a851907a6eb00acbf30618236667a) under AGPL-3.0. Use the pinned copy for deck work. Refresh it only as an explicit repository update. Preserve the local browser overrides, guards for empty decks and unavailable Lucide, and registered Swiss seed layout IDs when updating. The upstream per-use Git update commands are for a standalone skill checkout.

## Linux preview and validation

Copy the chosen template into the deck's output directory. Put the bundled `motion.min.js` in the deck's adjacent `assets/` directory to match the template's relative import. Use a loopback HTTP server such as `python3 -m http.server 8000 --bind 127.0.0.1 --directory path/to/deck` for browser previews so local JavaScript modules load. Headless Chromium can render the deck without a desktop or credentials. With external requests blocked, fonts and Lucide icons can differ from the online preview.

From the checkout root, run these Node.js commands. Replace `path/to/index.html` with the finished deck path. Run the Swiss check only for Style B.

```bash
skill_dir=.agents/skills/guizang-ppt-skill
node "$skill_dir/scripts/check-presenter-runtime-sync.mjs"
node "$skill_dir/scripts/validate-presenter-mode.mjs" path/to/index.html
node "$skill_dir/scripts/validate-swiss-deck.mjs" path/to/index.html
```

The Swiss validator adds rendered measurements when it can resolve Playwright. On Codex Web, the following uses the bundled Playwright and system Chromium when available. Start the loopback server described above before running this command. Set the URL and file argument to the same deck. Managed Chromium can block direct file navigation. Other runtimes can use Playwright with its standard Chromium install and omit the overrides when file navigation is available.

```bash
runtime_modules="$(dirname "$(dirname "$(command -v node)")")/node_modules"
NODE_PATH="$runtime_modules${NODE_PATH:+:$NODE_PATH}" \
GUIZANG_PREVIEW_URL=http://127.0.0.1:8000/index.html \
GUIZANG_CHROMIUM_EXECUTABLE="$(command -v chromium)" \
node .agents/skills/guizang-ppt-skill/scripts/validate-swiss-deck.mjs path/to/index.html
```

Check the validator output for skipped measurements. The editorial seed is empty. The Swiss seed includes placeholder cover and closing slides. Replace the placeholder content and keep slide IDs, registered layout IDs, and presenter notes in sync. Review the finished deck in-browser. Live audience-window and projector checks require an interactive browser and the presentation hardware.


## Skill-4S — No-code workshop demo

For requests to clean up Vietnamese meeting or work notes, apply `$skill-4s`.
The skill lives at [`.agents/skills/skill-4s/SKILL.md`](.agents/skills/skill-4s/SKILL.md).
If automatic skill discovery is unavailable, explicitly read that file and follow the 4S steps: **Sàng lọc → Sắp xếp → Soạn → Soát**.
It requires no APIs, scripts or external services. Never send the draft email or invent missing information.

Ready-to-run example:

> Use `$skill-4s` to process `demos/skill-4s/ghi-chu-hop.md` and save the result to `demos/skill-4s/ket-qua.md`. Do not modify other files.

Workshop presenter guide: [`demos/skill-4s/HUONG-DAN-DEMO.md`](demos/skill-4s/HUONG-DAN-DEMO.md).


## Skill-4S-Slide — Workshop: plain white vs designed green

This is a **deliberate educational comparison of two treatments of the same content**, not a benchmark of model capability.

- Shared content source: [`demos/skill-4s-slide/noi-dung.md`](demos/skill-4s-slide/noi-dung.md). **It does not define any palette or visual system.**
- **NO SKILL** request: create a plain **white background, black Arial text**, very basic 16:9 HTML slide deck at `demos/skill-4s-slide/no-skill/index.html`. Do NOT invoke or read any design skill, including Guizang. This explicit educational request overrides the general Guizang recommendation above.
- **WITH SKILL** request: read and follow [`.agents/skills/skill-4s-slide/SKILL.md`](.agents/skills/skill-4s-slide/SKILL.md). This is the ONLY source of its five-color Renewal Green / Graphite Teal style and art direction. Generate `demos/skill-4s-slide/with-skill/index.html`. Do not invoke Guizang for this A/B demo.
- Regenerate output in a new Codex task, from the source brief and the applicable instructions; do not copy from existing illustrative previews.
- All three slides retain identical semantic content. Prebuilt preview pages are a **workshop fallback**, not experimental results. The static comparison is `demos/skill-4s-slide/index.html`, published at `/slide-demo/` after deployment.
- Presenter guide: `demos/skill-4s-slide/HUONG-DAN-DEMO.md`. Avoid editing unrelated projects.
