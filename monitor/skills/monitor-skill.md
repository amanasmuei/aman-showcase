# Aman Monitor — Monitoring Skills & Expertise

## What Can Be Monitored

### Financial Instruments
- **Cryptocurrency**: Bitcoin, Ethereum, Solana, BNB, and any token with a public price feed
- **Stocks**: US equities (NYSE, NASDAQ), Bursa Malaysia (KLCI, individual counters)
- **Commodities**: Gold, silver, crude oil, natural gas
- **Palm oil futures**: CPO (Crude Palm Oil) — critical for Malaysian market context
- **Forex**: USD/MYR, EUR/USD, GBP/MYR, SGD/MYR — any major or minor pair
- **Indices**: KLCI, S&P 500, NASDAQ Composite, Dow Jones, HSI

### Web & Infrastructure
- **Website uptime**: Is a URL returning 200 OK? How fast?
- **Content changes**: Did a specific page change? (price page, job listings, product availability)
- **API health**: Response time, error rate, availability
- **SSL certificate expiry**: Days until cert expires
- **Domain expiry**: Days until domain registration lapses

### Social & News
- **Keyword mentions**: Track a brand name, topic, or phrase across news feeds
- **News topics**: Industry terms, competitor names, your company
- **Social media trends**: Hashtag activity, mention volume (via search tools)

### Business Intelligence
- **Competitor pricing**: Product price changes on e-commerce sites
- **Google reviews**: New reviews appearing (via search)
- **Job postings**: New roles at specific companies
- **Tenders/contracts**: Government procurement announcements (Malaysia: ePerolehan)

### Personal Tracking
- **Flight prices**: Alert when fare drops below target on a route
- **Product prices**: Alert when item hits target price on Lazada, Shopee, Amazon
- **Event tickets**: Alert when tickets become available or drop in price
- **Exchange rates**: Alert when rate hits your target for transferring money

---

## Malaysian Market Context

**Bursa Malaysia**
- KLCI (FBM KLCI) — main index, benchmark for Malaysian equities
- Major counters: Maybank, Tenaga, CIMB, Public Bank, Petronas Chemicals, Top Glove
- Trading hours: 9am–5pm MYT, Mon–Fri (pre-market from 8:30am)
- Use akit web-search with queries like "KLCI price today" or "Maybank share price"

**Ringgit Exchange Rates**
- USD/MYR is the primary pair to watch for import costs, travel, and foreign investments
- BNM (Bank Negara Malaysia) publishes official indicative rates
- Key levels: watch for MYR weakness vs USD crossing 4.50, 4.55, 4.60
- TNG e-wallet (Touch 'n Go): sometimes offers better rates than bank counters

**Commodities**
- Palm oil (CPO) is critical for the Malaysian economy — affects FBM plantation stocks
- Rubber prices — relevant for Hartalega, Kossan, Top Glove
- Crude oil (Brent/WTI) — affects Petronas-linked counters and transport costs

**Local Context Shortcuts**
- "Bursa" = Bursa Malaysia
- "ringgit" or "MYR" = Malaysian Ringgit
- "TNG" = Touch 'n Go e-wallet
- "PTPTN" = national student loan scheme
- "KWSP" or "EPF" = Employees Provident Fund

---

## Alert Design Principles

### Severity Levels

**🔴 Critical** — Threshold crossed. Send immediately. Owner must see this.
- Bitcoin is $1,000 below their threshold
- Website has been down for 5+ minutes
- Forex crossed the action level

**🟡 Warning** — Approaching threshold. Include in next digest or hourly update.
- Price is within 5% of threshold
- Uptime has been at 99.2% (threshold: 99%)
- Rate is 0.02 away from alert level

**🟢 Info** — Normal. All within range. Include in daily digest only.
- Price moved within normal range
- Uptime is 99.9%
- No threshold activity

### What Makes a Good Alert

1. **Lead with the key fact**: "Bitcoin dropped below $70,000" — not "There is news about Bitcoin."
2. **Give percentage AND absolute**: "-3.2% in 4 hours" AND "-$2,300"
3. **Include trend**: Is this a spike or a trend? "Declining since 2pm" vs "brief dip, recovering"
4. **Reference the threshold**: Remind the owner what they set and why it matters
5. **Give recent range**: "24h range: $68,450–$72,100" — shows if this is a new low
6. **Ask if action is needed**: Don't assume. The owner decides.

---

## Trend & Pattern Detection

### Basic Metrics (compute from stored data points)
- **Simple moving average (SMA)**: Average over last N periods — smooths out noise
- **Rate of change**: (Current − Previous) / Previous × 100 — % change per period
- **Volatility**: Standard deviation of % changes over window — is this asset stable or wild?
- **All-time high/low in window**: Max/min in the monitored period

### Pattern Recognition
- **Spike vs trend**: A single outlier reading vs a consistent direction over multiple checks
- **Seasonal patterns**: Daily price cycles (crypto often dips in Asian morning hours)
- **Correlation**: Does USD/MYR tend to move with a particular event? Note patterns in history

### Reporting Trends
- Use directional language: "rising steadily", "declining sharply", "flat/stable", "volatile"
- Use emoji direction indicators: 📈 📉 ➡️
- Always give a timeframe: "rising over the past 3 days" not just "rising"

---

## Integration: Tools That Make Monitoring Better

### akit web-search
The primary tool for fetching real-time data. Use with targeted queries:
- `"Bitcoin price USD site:coinmarketcap.com"`
- `"USD MYR exchange rate today"`
- `"[company name] website down"`
- `"palm oil price today CPO"`
- `"[keyword] news past 24 hours"`

### akit fetch
For checking URLs directly — website uptime, content change detection.
- Fetch a URL → check HTTP status → compare content hash to previous check
- Useful for: e-commerce price pages, government tender pages, product availability

### Without Real-Time Tools
If web-search/fetch are not available:
- Be transparent: "I can't fetch live data right now — showing last known value from [timestamp]"
- Use memory to compute trends from historical stored data
- Suggest the owner enable web-search for better monitoring accuracy

---

## Limitations & Honesty

**Not true real-time**
Monitoring frequency depends on when the LLM is invoked. Checks happen on schedule — not continuously. A 1-minute outage may be missed if checks are hourly. Be transparent about this.

**Data source quality**
Web-search results can vary. Cross-check critical values when possible. Note when a data source seems unusual.

**Memory dependency**
Without persistent memory, trend analysis is impossible. If memory is unavailable, state this clearly and request setup.

**API rate limits**
Frequent checks on many monitors simultaneously may hit API rate limits. Stagger checks if needed. Prioritize critical monitors.
