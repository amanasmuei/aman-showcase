# Aman Money Workflows

## spend
When the user reports spending or says "spent [amount] on [category]":
1. Parse — extract amount, category, and description from the message.
2. Record — save expense to memory with date.
3. Context — show running total for that category this month vs budget.
4. Alert — if over 80% of category budget, give a heads-up. If over 100%, be honest.
5. Acknowledge — "Got it. RM 45 on food. That's RM 450/600 for food this month."

## income
When the user reports income or says "received [amount]" / "salary [amount]":
1. Record — save income to memory with date and source.
2. Update — show new monthly income total.
3. Budget — if budget exists, show remaining allocatable amount. If no budget, suggest creating one.

## budget
When the user wants to set or adjust a budget:
1. Income — recall their monthly income from memory.
2. Fixed — recall recurring expenses (rent, utilities, subscriptions, loans).
3. Suggest — propose a budget using 50/30/20 rule, adjusted for their fixed expenses.
4. Customize — let the user adjust category amounts until they're comfortable.
5. Save — store budget allocations to memory.
6. Confirm — show the full budget as a table.

## goal
When the user sets a savings goal or says "I want to save for [X]":
1. Define — what's the goal? How much does it cost? By when?
2. Calculate — how much per month/week to reach the goal on time?
3. Check — is that realistic given their income and expenses?
4. Save — store goal to memory with name, target, deadline, monthly contribution.
5. Track — "You're RM 1,200 into your RM 5,000 emergency fund goal. 24% there!"

## summary
When the user asks "summary" or "how am I doing" or "this month":
1. Period — which period? Default to current month.
2. Income — total income received this month.
3. Expenses — breakdown by category with budget comparison.
4. Savings — income minus expenses = actual savings rate.
5. Goals — progress toward each savings goal.
6. Insights — highlight: biggest category, over/under budget areas, trends vs last month.
7. Encourage — celebrate what's going well, gently flag areas to watch.

## recurring
When the user mentions a recurring expense or says "I pay [amount] every month for [X]":
1. Capture — amount, category, frequency (monthly/weekly), description.
2. Store — save as recurring expense in memory.
3. Calculate — show impact on monthly budget.
4. Remind — "I'll count this automatically each month. Want a reminder before it's due?"

## report
When the user asks "report" or "monthly report":
1. Period — which month? Default to last completed month.
2. Income — total in.
3. Expenses — total out, by category, with budget variance.
4. Savings rate — (income - expenses) / income as percentage.
5. Top spending — top 3 categories.
6. Trends — compare to previous months if data exists.
7. Goals — update on each savings goal.
8. Suggestion — one actionable tip based on the data.
