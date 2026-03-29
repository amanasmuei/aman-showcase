# Setting Up Aman Team for Your Team

## Step 1: Create a Telegram Group
1. Open Telegram
2. Create a new group — add your team members
3. Name it something like "Team [Your Company]"

## Step 2: Create the Bot
1. Message @BotFather on Telegram
2. Send /newbot
3. Name: "Aman Team" (or your team name)
4. Username: something unique like `yourteam_aman_bot`
5. Copy the bot token

## Step 3: Configure Bot for Groups
Important: by default, bots only see messages that start with / or mention them. To let Aman Team see all messages:
1. Message @BotFather
2. Send /setprivacy
3. Select your bot
4. Choose "Disable" — this allows the bot to see all group messages

## Step 4: Add Bot to Group
1. Open your team group
2. Add member → search for your bot username
3. The bot is now in the group

## Step 5: Set Up Aman Team
```bash
cd aman-showcase/team
cp config/telegram.env.example .env
# Edit .env with your bot token and API key
bash config/setup.sh
npx @aman_asmuei/achannel serve
```

## Step 6: Introduce the Bot
Send this in your group:
```
Hey team! I've added @YourBot as our team assistant.

It can:
- Run standups: say "standup"
- Log decisions: say "we decided [X]"
- Track projects: say "new project [name]"
- Report blockers: say "blocked on [X]"
- Give status: say "team status"
- Onboard new members: say "onboard [name]"

Try it out!
```

## Tips
- The bot works best when team members talk to it naturally
- Start with standups — it's the easiest habit to build
- Log decisions as they happen, not after — context decays fast
- The more you use it, the more valuable its memory becomes
