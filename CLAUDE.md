# 🌸 BuildAthon — Directives Claude Code

Ce gabarit est utilisable avec **Antigravity** et **Claude Code**. Les consignes de l'agent sont partagées entre les deux outils : la source de vérité est `GEMINI.md` et les règles de `.agents/rules/`, importées ci-dessous. Applique-les intégralement.

@GEMINI.md

## Règles du projet

@.agents/rules/architecture.md
@.agents/rules/database.md
@.agents/rules/security.md
@.agents/rules/vibe-coding.md

---

## Précisions propres à Claude Code

- **Message d'accueil** : si le participant a installé le projet lui-même (terminal) et que ton premier échange n'est pas une demande d'installation, envoie quand même le message d'accueil décrit dans la section « Message de Fin d'Installation » de `GEMINI.md` (langue préférée, recommandation du guide du vibe coder, invitation à décrire son idée).
- **Skills** : les procédures du projet sont dans `.agents/skills/` et exposées comme commandes Claude Code dans `.claude/skills/` (`/bootstrap-project`, `/add-feature`, `/security-audit`, `/grill-me`). Utilise-les dans les mêmes situations que celles décrites dans `GEMINI.md`.
- **Autorisations** : les commandes courantes (`npm install`, `npm test`, `npm run …`, `npx drizzle-kit`, `npx tsc`, `npx vitest`) sont pré-autorisées dans `.claude/settings.json`. Pour toute suppression de fichiers ou réinitialisation, explique d'abord au participant ce que tu vas faire et pourquoi, pour qu'il puisse accepter en connaissance de cause.
- **Vocabulaire** : quand tu cites le guide du vibe coder ou les README, adapte les mentions d'« Antigravity » : c'est toi, Claude, le copilote IA du participant.
