# Design System Inspired by The Wedd

## 1. Visual Theme & Atmosphere

The Wedd design system embodies luxury, romance, and timeless elegance tailored for high-end wedding photography and videography services. The aesthetic combines sophisticated minimalism with warm, intimate moments through a carefully balanced palette of deep burgundy accents, creamy neutrals, and charcoal foundations. The visual language emphasizes editorial elegance—generous whitespace, serif typography for headings, and refined photography as the primary design element. This creates an atmosphere of exclusivity and artisanal craftsmanship, positioning The Wedd as a premium creative studio that celebrates cultural richness (reflected in Vietnamese language integration) while maintaining universal sophistication. The design conveys confidence, romance, and meticulous attention to detail through every interaction.

**Key Characteristics**
- Luxury and romance-focused visual identity
- Deep burgundy primary accent with warm cream and charcoal grounding
- Serif-driven typography hierarchy (Times New Roman for display)
- Photography-first layout strategy with ample whitespace
- Soft shadow treatments for subtle depth
- Circular accent buttons as signature interactive elements
- Bilingual (Vietnamese/English) content support with refined typography
- Editorial, gallery-quality presentation aesthetic

## 2. Color Palette & Roles

### Primary
- **Deep Burgundy** (`#9C3129`): Primary brand accent for CTAs, interactive elements, accents, and visual anchors. Appears on signature circular buttons, section highlights, and brand touchpoints. Conveys luxury and emotional warmth.
- **Wine Accent** (`#653239`): Secondary burgundy for hover states and active navigation elements. Deeper tonality for elevated emphasis.

### Accent Colors
- **Cream** (`#E2D4C7`): Warm off-white used for typography overlays and highlights over dark backgrounds. Softens the luxury palette and adds warmth.
- **Warm Tan** (`#A99B92`): Mid-tone accent for secondary text and decorative elements. Bridges neutral and primary palettes.
- **Light Taupe** (`#B8B5AC`): Tertiary accent for subtle borders and dividers.

### Interactive
- **Primary CTA** (`#9C3129`): Main button background and link accents.
- **CTA Text** (`#F3F0ED`): Light text on primary interactive elements for contrast.
- **Neutral Interactive** (`#1E1E1E`): Icon buttons and secondary interactions on light backgrounds.

### Neutral Scale
- **Deep Charcoal** (`#1E1E1E`): Primary text color used throughout (403 instances). Strong contrast and sophistication.
- **Pure Black** (`#000000`): Emphasis text and heavy typography.
- **Off-White** (`#F3F0ED`): Primary page background and light surfaces.
- **Pure White** (`#FFFFFF`): Card backgrounds and overlay text.
- **Medium Gray** (`#504C49`): Tertiary text and subtle UI elements.
- **Light Gray** (`#D0D0D0`): Borders and dividers.
- **Gray Neutral** (`#93948E`): Disabled states and secondary elements.

### Surface & Borders
- **Background Surface** (`#F3F0ED`): Main page background, warm and inviting.
- **Card Surface** (`#FFFFFF`): Card and container backgrounds.
- **Border/Divider** (`#D0D0D0`): Subtle horizontal rules and separators.

### Semantic / Status
- **Warm Brown** (`#534739`, `#5D4B3F`, `#615A48`, `#594A37`): Used sparingly for hero overlays, text contrast layers, and editorial imagery overlays. Create depth within photographic compositions.

## 3. Typography Rules

### Font Family
**Primary (Display & Headings):** Times New Roman, Georgia, serif  
**Secondary (Body & UI):** Tenor Sans, Helvetica, sans-serif  
**Icon Font:** Wfolio Card Icons (for interactive icon buttons)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display/H1 | Times New Roman | 60px | 400 | 66px | 0px | Page hero headings, maximum impact |
| Heading 2 | Times New Roman | 36px | 400 | normal | 0px | Section headings and major titles |
| Heading 3 | Times New Roman | 24px | 400 | 26.4px | 0px | Subsection headings and cards |
| Body | Tenor Sans | 16px | 400 | 20.8px | 0px | Primary body text and paragraphs |
| Small Body | Tenor Sans | 14px | 400 | 14px | 0px | Caption text, navigation, list items |
| Button | Tenor Sans | 18px | 400 | normal | 0px | Primary button labels |
| Navigation | Tenor Sans | 14px | 400 | 14px | 0px | Top navigation items, links |
| Code/Mono | Tenor Sans | 14px | 400 | 14px | 0px | Inline code and monospace text |

### Principles
- **Serif for Editorial:** Times New Roman creates a timeless, upscale editorial voice for display and headings.
- **Sans for Legibility:** Tenor Sans ensures excellent readability in UI elements, body text, and navigation.
- **Generous Line Height:** Body text uses 1.3x line height for luxury breathing room and readability.
- **Restrained Color:** Typography relies on `#1E1E1E` for primary text, avoiding unnecessary color variation to maintain elegance.
- **Hierarchy Through Scale:** Font size changes are the primary hierarchy tool; weight remains consistent at 400 throughout the system.

## 4. Component Stylings

### Buttons

#### Primary Solid Button
- **Background:** `#9C3129`
- **Text Color:** `#F3F0ED`
- **Font:** Tenor Sans, 14px, weight 400
- **Padding:** `14px 15px`
- **Border Radius:** `50px`
- **Height:** `45px`
- **Border:** None
- **Box Shadow:** None
- **Hover State:** Background `#7A1F17`, text remains `#F3F0ED`
- **Active State:** Background `#653239`, text remains `#F3F0ED`

#### Circular Icon Button
- **Background:** `#9C3129`
- **Text/Icon Color:** `#F3F0ED`
- **Font:** Wfolio Card Icons, 28px, weight 400
- **Padding:** `0px`
- **Border Radius:** `50%`
- **Width/Height:** `60px`
- **Border:** None
- **Box Shadow:** `rgba(0, 0, 0, 0.15) 0px 3px 8px 1px`
- **Hover State:** Background `#7A1F17`, shadow increases to `rgba(0, 0, 0, 0.25) 0px 5px 12px 2px`
- **Active State:** Background `#653239`, shadow reduces

#### Ghost Navigation Button
- **Background:** Transparent
- **Text Color:** `#1E1E1E`
- **Font:** Tenor Sans, 16px, weight 400
- **Padding:** `0px`
- **Border Radius:** `0px`
- **Height:** `24px`
- **Border:** None
- **Box Shadow:** None
- **Underline Style:** Underline on hover
- **Hover State:** Text color `#9C3129`, underline appears

#### Icon Button (Transparent)
- **Background:** Transparent
- **Text/Icon Color:** `#1E1E1E`
- **Font:** Wfolio Card Icons, 16px, weight 400
- **Padding:** `16px`
- **Border Radius:** `0px`
- **Height:** `50px`
- **Border:** None
- **Box Shadow:** None
- **Hover State:** Background `rgba(156, 49, 41, 0.08)`, color `#9C3129`

### Cards & Containers

#### Image Card
- **Background:** `#FFFFFF`
- **Border Radius:** `8px`
- **Box Shadow:** `rgba(0, 0, 0, 0.06) 0px 12px 24px 0px`
- **Padding:** `0px` (images bleed to edges)
- **Border:** None
- **Hover State:** Box shadow increases to `rgba(0, 0, 0, 0.15) 0px 5px 20px 0px`

#### Content Card
- **Background:** `#FFFFFF`
- **Border Radius:** `8px`
- **Box Shadow:** `rgba(0, 0, 0, 0.06) 0px 12px 24px 0px`
- **Padding:** `32px` to `52px`
- **Text Color:** `#1E1E1E`
- **Border:** None
- **Font:** Tenor Sans, 16px, weight 400, line-height 20.8px

#### Hero Section Container
- **Background:** Full-bleed photography with overlay `rgba(0, 0, 0, 0.2)` or brand burgundy `#9C3129` at `0.3` opacity
- **Min Height:** `600px`
- **Padding:** `100px 40px`
- **Text Color (Overlay):** `#FFFFFF` or `#F3F0ED` for contrast
- **Border Radius:** `0px`

### Inputs & Forms

#### Text Input
- **Background:** `#FFFFFF`
- **Text Color:** `#1E1E1E`
- **Placeholder Color:** `#93948E`
- **Font:** Tenor Sans, 16px, weight 400
- **Padding:** `12px 16px`
- **Border:** `1px solid #D0D0D0`
- **Border Radius:** `4px`
- **Focus State:** Border color `#9C3129`, box shadow `rgba(156, 49, 41, 0.1) 0px 0px 0px 3px`
- **Height:** `44px`

#### Text Area
- **Background:** `#FFFFFF`
- **Text Color:** `#1E1E1E`
- **Font:** Tenor Sans, 14px, weight 400
- **Padding:** `12px 16px`
- **Border:** `1px solid #D0D0D0`
- **Border Radius:** `4px`
- **Focus State:** Border color `#9C3129`, box shadow `rgba(156, 49, 41, 0.1) 0px 0px 0px 3px`
- **Min Height:** `120px`

#### Form Label
- **Font:** Tenor Sans, 14px, weight 400
- **Color:** `#1E1E1E`
- **Margin Bottom:** `8px`
- **Font Weight:** 400 (remains regular for consistency)

### Navigation

#### Top Navigation Bar
- **Background:** `#F3F0ED`
- **Height:** `80px`
- **Padding:** `0px 40px`
- **Display:** Flex, center-aligned
- **Alignment:** Justify-content: center

#### Navigation Link
- **Color:** `#1E1E1E`
- **Font:** Tenor Sans, 14px, weight 400
- **Padding:** `8px 16px`
- **Border Bottom:** `2px solid transparent` (default)
- **Hover State:** Border bottom `2px solid #9C3129`, color `#9C3129`
- **Active State:** Border bottom `2px solid #9C3129`, color `#9C3129`
- **Text Decoration:** None (except hover state underline effect)

#### Dropdown Menu
- **Background:** `#FFFFFF`
- **Border:** `1px solid #D0D0D0`
- **Border Radius:** `0px`
- **Box Shadow:** `rgba(0, 0, 0, 0.15) 0px 5px 20px 0px`
- **Padding:** `8px 0px`

#### Dropdown Item
- **Padding:** `12px 16px`
- **Font:** Tenor Sans, 14px, weight 400
- **Color:** `#1E1E1E`
- **Hover State:** Background `rgba(156, 49, 41, 0.08)`, color `#9C3129`

### Badges

#### Status Badge
- **Background:** `#9C3129`
- **Text Color:** `#F3F0ED`
- **Font:** Tenor Sans, 12px, weight 400
- **Padding:** `4px 12px`
- **Border Radius:** `12px`
- **Display:** Inline-block

## 5. Layout Principles

### Spacing System

**Base Unit:** 4px  
**Scale:** 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 52px, 60px, 64px, 100px, 120px

**Usage Context:**
- **Micro spacing (4px–8px):** Inline text spacing, icon padding, tight component grouping
- **Compact spacing (12px–20px):** Button padding, form field spacing, card internal padding
- **Default spacing (24px–32px):** Section margins, card spacing within grids, list item spacing
- **Generous spacing (40px–60px):** Major section separation, hero section padding, full-width container padding
- **Expansive spacing (100px–120px):** Page-level section breaks, hero to content transitions, maximum breathing room

### Grid & Container

- **Max Container Width:** `1200px` (for content sections)
- **Column Strategy:** 12-column responsive grid
- **Page Margins:** `40px` left and right on desktop, `20px` on tablet, `16px` on mobile
- **Image/Hero Sections:** Full-bleed (100vw) with contained text overlays
- **Card Grids:** 3 columns (desktop), 2 columns (tablet), 1 column (mobile), with `32px` gap between cards

### Whitespace Philosophy

The Wedd prioritizes generous whitespace to emphasize photography and content quality. Negative space is treated as a design element—not empty space, but intentional breathing room that communicates luxury and editorial sophistication. Hero sections use full-bleed images with restrained text overlays. Content sections maintain minimum `40px` top and bottom padding. Photography and visual assets are never cramped; they expand naturally with surrounding whitespace.

### Border Radius Scale

- **None (Sharp):** `0px` — Navigation, full-width sections, hero containers, form inputs
- **Subtle Rounded:** `4px` — Form inputs, subtle UI elements, small cards
- **Medium Rounded:** `8px` — Standard card containers, image cards, modal backgrounds
- **Pill (Rounded):** `50px` — Primary buttons, secondary CTA buttons, badge-style elements
- **Circle:** `50%` — Icon buttons, avatar-style elements, floating action buttons (60px diameter)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (No Elevation) | No box shadow, `box-shadow: none` | Navigation bars, hero sections, form inputs, flat containers |
| Subtle | `rgba(0, 0, 0, 0.06) 0px 12px 24px 0px` | Standard cards, content containers, gallery grid items |
| Medium | `rgba(0, 0, 0, 0.15) 0px 3px 8px 1px` | Icon buttons, floating elements, dropdowns, interactive overlays |
| Elevated | `rgba(0, 0, 0, 0.15) 0px 5px 20px 0px` | Modal backgrounds, expanded card states, hover states on elevated elements |
| Deep | `rgba(0, 0, 0, 0.25) 0px 8px 32px 2px` | Full-screen overlays, modals, floating menus |

**Shadow Philosophy:** Shadows are used sparingly to indicate depth and interactivity without overwhelming the refined aesthetic. Soft, diffused shadows with high blur values create an editorial quality. Interactive elements (buttons, icon triggers) use subtle shadows to signal elevation. Cards use minimal shadows to remain lightweight. Hover states may increase shadow intensity slightly to indicate response to interaction, but never aggressively. The overall effect is sophisticated subtlety—depth implied rather than announced.

## 7. Do's and Don'ts

### Do
- **Use photography as design:** Images are primary; UI supports the visual story. Ensure ample space around imagery.
- **Apply burgundy strategically:** Use `#9C3129` for primary CTAs, interactive touchpoints, and accent highlights. Do not overuse—maintain restraint.
- **Leverage serif typography for elegance:** Times New Roman headings signal luxury and editorial quality. Pair with Tenor Sans body for legibility.
- **Maintain whitespace generously:** Empty space is design. Sections should breathe. Minimum `40px` padding between major sections.
- **Use circular buttons consistently:** Signature burgundy circular buttons create brand recognition for interactive elements.
- **Underline navigation links on hover:** Simple, refined hover state that maintains sophistication without flashiness.
- **Stack content vertically with breathing room:** Center-aligned sections with contained max-width (`1200px`) for editorial presentation.
- **Bilingual support:** Ensure Vietnamese and English text render cleanly; consider language-specific typography adjustments if needed.
- **Test on photography:** All UI elements should look refined and unobtrusive when layered over wedding photography.

### Don't
- **Overuse color:** The palette is restrained. Avoid introducing new accent colors. Stick to `#9C3129` and neutral palette.
- **Mix serif and sans in body text:** Serif (Times New Roman) for display/headings only. Tenor Sans for body, UI, and navigation.
- **Use heavy shadows:** Shadows are subtle. Avoid harsh, high-opacity shadows that feel dated or clunky.
- **Add unnecessary animations:** Transitions should be smooth (0.2s–0.3s ease) but not distracting. This is editorial, not playful.
- **Crowd content:** Whitespace is intentional. Never reduce padding to fit more content; instead, restructure or reduce content.
- **Use accent colors for body text:** Burgundy should never appear in body paragraphs. Stick to `#1E1E1E` for all body text.
- **Forget about photography quality:** Low-resolution images undermine the luxury positioning. All photography should be high-resolution and professionally shot.
- **Break the grid arbitrarily:** Maintain alignment to the 12-column grid except for intentional asymmetrical hero compositions.
- **Use generic sans-serif fonts:** Tenor Sans is the approved secondary font. Helvetica or Arial are fallbacks only.
- **Compromise on form accessibility:** Form inputs must maintain minimum `44px` height and clear focus states for accessibility.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | 1 column layouts, `16px` padding, `24px` spacing, h1 reduces to 40px, font size 14px default |
| Tablet | 768px–1023px | 2 column layouts, `24px` padding, `32px` spacing, h1 reduces to 48px, font size 15px default |
| Desktop | 1024px+ | 3 column layouts, `40px` padding, `40px–60px` spacing, h1 at 60px, font size 16px default |
| Wide | 1440px+ | Max container width `1200px`, centered with full-bleed hero images |

### Touch Targets

- **Minimum Touch Target:** `44px × 44px` for buttons, links, and interactive elements
- **Recommended Spacing:** `8px` minimum between adjacent touch targets
- **Icon Buttons:** `50px × 50px` minimum (includes internal padding)
- **Navigation Links:** `40px` minimum height with `12px` horizontal padding
- **Form Inputs:** `44px` minimum height, `16px` padding horizontal and vertical
- **Circular Buttons:** `60px` diameter minimum (fixed at 60px for brand consistency)

### Collapsing Strategy

**Hero Section:**
- Desktop: Full-height `600px+` with large text overlay (`60px` h1)
- Tablet: `450px` height, h1 reduces to 48px, padding `32px 24px`
- Mobile: `350px` height, h1 reduces to 40px, padding `24px 16px`, text centered with max-width `90vw`

**Card Grid:**
- Desktop: 3 columns, `32px` gap
- Tablet: 2 columns, `24px` gap
- Mobile: 1 column, full width minus `16px` margins on each side, `16px` gap

**Navigation:**
- Desktop: Horizontal inline navigation, `14px` font
- Tablet: Horizontal navigation with reduced padding `8px 12px`, font remains `14px`
- Mobile: Hamburger menu (collapse to off-canvas or dropdown), navigation items stack vertically in modal

**Typography:**
- Desktop: h1 `60px`, h2 `36px`, h3 `24px`, body `16px`, small `14px`
- Tablet: h1 `48px`, h2 `28px`, h3 `20px`, body `15px`, small `14px`
- Mobile: h1 `40px`, h2 `24px`, h3 `18px`, body `14px`, small `12px`

**Spacing Reductions:**
- Desktop: `40px` section padding, `60px` margins between sections
- Tablet: `32px` section padding, `40px` margins between sections
- Mobile: `20px` section padding, `24px` margins between sections

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Deep Burgundy (`#9C3129`) — buttons, accents, interactive elements
- **CTA Text:** Cream (`#F3F0ED`) — text on burgundy backgrounds
- **Background:** Off-White (`#F3F0ED`) — page background, light surfaces
- **Heading Text:** Deep Charcoal (`#1E1E1E`) — all headings and primary text
- **Body Text:** Deep Charcoal (`#1E1E1E`) — paragraphs, descriptive content
- **Secondary Text:** Medium Gray (`#504C49`) — tertiary information, metadata
- **Disabled/Subtle:** Gray Neutral (`#93948E`) — inactive elements, borders
- **Border/Divider:** Light Gray (`#D0D0D0`) — subtle separators
- **Card Background:** Pure White (`#FFFFFF`) — contained card surfaces
- **Hover State (Text):** Deep Burgundy (`#9C3129`) — links and navigation on hover
- **Overlay (Dark):** Wine Accent (`#653239`) — dark mode text, high-contrast overlays

### Iteration Guide

1. **Always use `#9C3129` for primary interactive elements** — buttons, CTAs, accent highlights. This is the brand's defining color and should appear as the primary call-to-action.

2. **Typography hierarchy relies on font family and size, not weight** — Times New Roman for display (h1, h2, h3), Tenor Sans for body and UI. All weights remain 400 for consistency. Hierarchy emerges through scale and serif vs. sans contrast.

3. **Maintain 1.3x+ line height in body text** — Use `20.8px` line height for `16px` body text; `14px` body uses `14px` line height. This generous spacing communicates luxury and improves readability.

4. **Apply circular buttons (`50px` radius) for brand signature elements** — Primary buttons use `50px` border-radius; icon buttons use `50%` for perfect circles at `60px × 60px`. This distinctive styling reinforces brand identity.

5. **Limit shadows to three levels** — Subtle (`0px 12px 24px`), Medium (`0px 3px 8px`), and Elevated (`0px 5px 20px`). Use blur values `12px–24px` for soft, editorial feel. Avoid harsh shadows.

6. **Whitespace is non-negotiable** — Minimum `40px` padding on sections, `60px` margin between major sections. Reduce to `24px` padding on mobile, `32px` on tablet. Never cramped.

7. **Navigation underlines activate on hover, not on page load** — Ghost buttons (nav links) show no underline by default; underline appears on `:hover`. Active state shows underline with `#9C3129` color.

8. **Form inputs maintain `44px` minimum height** — Padding `12px 16px`, border `1px solid #D0D0D0`, focus state adds `3px` inset shadow in `rgba(156, 49, 41, 0.1)`. Never reduce to save space.

9. **Photography is always full-resolution and full-bleed** — Hero sections bleed to viewport edges; cards contain images with `8px` border-radius. Images are primary design; UI is supporting player.

10. **Grid collapse strategy: 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)** — Maintain `24px–32px` gaps between cards. On mobile, cards expand to full width minus `16px` margins.

11. **Colors never invert for dark mode** — This is a light-first design. All text remains `#1E1E1E` on light backgrounds. No dark mode variant in scope.

12. **Responsive font sizes reduce predictably** — Desktop h1 `60px` → Tablet `48px` → Mobile `40px`. Body text Desktop `16px` → Tablet `15px` → Mobile `14px`. Maintain readable minimums.