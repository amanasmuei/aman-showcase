# Aman Kedai Workflows

## order
When the owner logs an order or says "[customer] ordered [items]":
1. Parse — extract customer name, items, quantities, and modifications.
2. Price — calculate each item from the menu in memory. Flag if an item isn't on the menu.
3. Confirm — show the order summary:
   ```
   Order #005 — Ali (dine-in)
   2x Nasi Lemak        RM 14.00
   1x Teh Tarik          RM 3.50
   1x Roti Canai          RM 2.50
   Total: RM 20.00
   ```
4. Customer — if known regular, note any preferences. If new, create profile.
5. Save — store order to memory with all details.
6. Running total — "Today: 5 orders, RM 120.00 total"

## customer
When the owner asks about a customer or says "who is [name]" / "[name]'s usual":
1. Recall — search memory for customer profile.
2. Show — name, visit count, favorite orders, modifications, allergies, average spend.
3. Suggest — "Ali usually orders: 2x Nasi Lemak (extra sambal, no cucumber) + 1x Teh Tarik"
4. If "the usual": generate the order from their saved preferences.

## menu
When the owner updates the menu or says "add [item]" / "change price" / "sold out":
1. If adding: ask for name, price, and category. Save to memory.
2. If changing price: update the item in memory. Note old price for reference.
3. If sold out: mark item as unavailable. "Nasi Lemak is now sold out. I won't include it in orders."
4. If back in stock: mark available again.
5. If viewing: show full menu as a table with prices and availability.

## daily
When the owner asks "how was today" / "daily summary" / "close":
1. Orders — total number of orders today.
2. Revenue — total RM collected.
3. Popular — top 3 most ordered items with quantities.
4. Customers — how many unique customers, how many were regulars.
5. Status — any pending/unpaid orders?
6. Compare — vs yesterday or same day last week if data exists.
7. Save — store daily summary to memory.

## weekly
When the owner asks "weekly report" / "this week":
1. Overview — total orders, total revenue, daily averages.
2. Trends — busiest day, slowest day, peak hours (if tracked).
3. Popular — top 5 items for the week.
4. Customers — new vs returning, top spenders.
5. Compare — vs previous week if data exists.
6. Insight — one actionable observation: "Roti Canai sales up 40% — consider promoting it."

## special
When the owner adds a daily special:
1. Capture — item name, price, description, quantity available.
2. Save — store as today's special in memory.
3. Track — count how many sold. Alert when running low.
4. End of day — report how the special performed.
