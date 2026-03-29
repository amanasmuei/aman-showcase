# FAQ Template

Use this structure to organize your business FAQs. Copy the format for each category and fill in your actual answers.

---

## How to Use This Template

1. Replace the example questions and answers with your own.
2. Add or remove categories as needed for your business.
3. Tell the bot your FAQs using the `add faq` command, or share this file with the bot to load them all at once.
4. To update an FAQ, use `update faq: [question]`.
5. To remove an FAQ, use `remove faq: [question]`.

---

## Category: Shipping & Delivery

**Q: How long does delivery take?**
A: Standard delivery takes 3–5 business days within Peninsular Malaysia. East Malaysia (Sabah and Sarawak) takes 5–7 business days.

**Q: Do you offer same-day or next-day delivery?**
A: Same-day delivery is available in [your area] for orders placed before 12pm. Next-day delivery is available nationwide for orders placed before 3pm.

**Q: How much does shipping cost?**
A: Standard shipping is RM [X]. Free shipping on orders above RM [Y].

**Q: How do I track my order?**
A: You will receive a tracking number via WhatsApp/email once your order ships. Use it at [courier website].

**Q: My order hasn't arrived. What should I do?**
A: If your order is past the expected delivery date, message us with your order number and we will check with the courier.

---

## Category: Returns & Exchanges

**Q: Can I return or exchange an item?**
A: Yes. Returns and exchanges are accepted within [X] days of delivery, provided the item is unused and in its original packaging.

**Q: How do I start a return?**
A: Message us with your order number and the reason for the return. We will guide you through the next steps.

**Q: How long does a refund take?**
A: Refunds are processed within [X] business days after we receive the returned item. It may take an additional [X] days to appear in your account depending on your bank.

**Q: Do I have to pay for return shipping?**
A: Return shipping is free if the item is defective or incorrect. For change-of-mind returns, the customer covers shipping costs.

---

## Category: Pricing & Payment

**Q: What payment methods do you accept?**
A: We accept bank transfer, credit/debit card, Touch 'n Go eWallet, and GrabPay.

**Q: Are your prices inclusive of GST/SST?**
A: All prices displayed are [inclusive / exclusive] of tax.

**Q: Do you offer discounts for bulk orders?**
A: Yes! Contact us directly for bulk pricing on orders of [X] units or more.

**Q: I was charged incorrectly. What should I do?**
A: Please message us with your order number and the amount you were charged. We will review and correct it immediately.

---

## Category: Business Hours & Contact

**Q: What are your business hours?**
A: We are open Monday to Friday, [time] to [time], and Saturday [time] to [time]. Closed on Sundays and public holidays.

**Q: How do I contact you?**
A: You can reach us here on Telegram, by email at [email], or by phone at [number] during business hours.

**Q: How quickly do you respond to messages?**
A: We aim to respond within [X] minutes during business hours. Messages received outside hours will be replied to the next business day.

**Q: Do you have a physical store?**
A: [Yes — our store is at (address). / No — we are an online store only.]

---

## Category: Products & Services

**Q: Is [product] available?**
A: Please message us with the product name and we will check current stock for you.

**Q: Do you do custom orders?**
A: [Yes, we accept custom orders with a minimum lead time of X days. / Currently we do not offer customization, but feel free to share your idea!]

**Q: Do you have a product catalogue?**
A: Yes! You can view our full catalogue at [link] or ask us to send it directly.

**Q: How do I place an order?**
A: [Describe your ordering process — website, DM, form, etc.]

---

## Adding Your Own FAQs

To add a new FAQ entry, tell the bot:

```
Add FAQ:
Category: [category name]
Question: [the question]
Answer: [the answer]
Also answers: [alternative phrasings, optional]
```

Example:
```
Add FAQ:
Category: Shipping
Question: Do you ship to Singapore?
Answer: We currently only ship within Malaysia. International shipping is coming soon!
Also answers: overseas shipping, ship abroad, international orders
```

The "Also answers" field helps the bot recognize when customers ask the same thing in different ways.
