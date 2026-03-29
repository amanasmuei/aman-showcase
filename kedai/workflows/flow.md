# Aman Kedai Workflows

## transaction
When the owner logs a sale, order, or appointment:
1. Parse — extract customer name, items/services, quantities, modifications.
2. Price — calculate from inventory/menu in memory. Flag unknown items.
3. Confirm — show structured summary:
   ```
   #005 — Ali
   2x Nasi Lemak        RM 14.00
   1x Teh Tarik          RM  3.50
   Total: RM 17.50
   ```
   (Adapt format to business type — services show duration, repairs show device info, etc.)
4. Customer — if known regular, note preferences. If new, create profile.
5. Save — store transaction with all details.
6. Running total — "Today: 5 transactions, RM 187.50"

## customer
When the owner asks about a customer:
1. Recall — search memory for customer profile.
2. Show — name, visit count, preferences, history, average spend, special notes.
3. Suggest — show their usual order/service if they're a regular.
4. If "the usual" / "macam biasa": generate the transaction from saved preferences.

## inventory
When the owner updates inventory, menu, or services:
1. If adding: name, price, category. Save to memory.
2. If changing price: update in memory. Note old price.
3. If sold out / unavailable: mark status. Don't include in new transactions.
4. If restocked / available: mark active again.
5. If viewing: show full list as table with prices and status.

## daily
When the owner asks "how was today" / "daily summary" / "tutup kedai":
1. Transactions — total count today.
2. Revenue — total RM.
3. Popular — top 3 items/services with quantities.
4. Customers — unique count, regulars vs new.
5. Pending — any incomplete transactions?
6. Compare — vs yesterday or last week if data exists.
7. Save — store daily summary.

## weekly
When the owner asks "weekly report" / "minggu ini":
1. Overview — total transactions, revenue, daily averages.
2. Trends — busiest day, slowest day.
3. Popular — top 5 items/services.
4. Customers — new vs returning, top spenders.
5. Compare — vs previous week.
6. Insight — one actionable observation.

## special
When the owner adds a daily special or promotion:
1. Capture — item/service, price, description, quantity/slots available.
2. Save — store as today's special.
3. Track — count how many sold. Alert when running low.
4. End of day — report performance.

## setup
When a new owner starts for the first time:
1. Ask — "What type of kedai do you run?" (makan, kopi, gunting, dobi, telefon, bunga, kek, runcit, other)
2. Store — save business type to memory.
3. Adapt — switch vocabulary and workflow language to match.
4. Menu/Services — ask them to share their items/services and prices.
5. Ready — "Your Aman Kedai is set up! Start logging transactions and I'll remember everything."
