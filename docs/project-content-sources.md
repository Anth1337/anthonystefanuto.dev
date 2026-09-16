# Project content sources

Reviewed September 15, 2026. Descriptions in `src/main.ts` describe repository functionality, not individual authorship or production readiness. READMEs were checked against dependency files and representative implementation files. External project code was read, not executed.

The two supplied PDFs were read as research sources and their result tables visually checked. At the user's subsequent request, unchanged copies were added under `public/reports/` and linked from the project cards and dialogs. Existing About wording was preserved.

Later user-provided clarifications are reflected in the copy: Macrova and Cadence are mobile apps; Cadence tracks sleep, stress, and heart rate and recommends routine changes alongside a habit tracker/calendar; Yarkovsky Drift was built at Bram Hacks 2025. The previously skipped market tracker is now CS:GO Market Tracker, described by the user as a Discord bot with live item-price notifications and instant lookups. SunPay's overview now describes its intended payment flow rather than its test setup; the repository's sandbox limitations below remain part of this source record. Campus Robotics Dashboard uses its display name in prose while retaining the supplied repository URL.

## Anth1337/ht6-2026

- Repository: https://github.com/Anth1337/ht6-2026
- Reviewed tree: `e334002e1053dcef827c2d440728613da5000a3c`
- Read: README.md; app/package.json; merchant/package.json; app/src/lib/engine.ts; supplied Devpost page.
- Content decisions: Sandbox only. Float and merchant settlement are simulated. Award wording comes from Devpost: MLH: Best Use of Auth0.

## wkdghdus/Predicting-Purchasing-Intention

- Repository: https://github.com/wkdghdus/Predicting-Purchasing-Intention
- Reviewed tree: `9e6777ec5777cc25df24a8ab9e3232f24665b8da`
- Read: README.md; random forest and XGBoost model notebooks; supplied final_report (2).pdf, especially page 4.
- Content decisions: The README is only a short introduction. Notebooks establish the stack and methods. Reported RF F1 is 0.651, XGBoost ROC-AUC is 0.930. RF uses a 70/30 split, XGBoost 80/20; do not claim a matched-split comparison or universally leakage-safe preprocessing.

## Anth1337/Thumos14ActionTransformer

- Repository: https://github.com/Anth1337/Thumos14ActionTransformer
- Reviewed tree: `1689d9067bac1cf27b56c778c6f14c8533e8960c`
- Read: README.md; modal_pipeline/modal_train.py; modal_pipeline/modal_extract.py; configs/thumos_i3d_actionformer.yaml; supplied 4452report_vFINAL.pdf.
- Content decisions: Report table II (page 6) gives 66.76% for I3D + ActionFormer. Pages 7-9 explain stride, pyramid depth, tuning, and single-seed limitations. This adapts ActionFormer, not an entirely original architecture or a verified published paper.

## ccarlis1/Macrova

- Repository: https://github.com/ccarlis1/Macrova
- Reviewed tree: `ee58fcc05c1ee7912f5a63968eb2807b3a5c73a5`
- Read: README.md; requirements.txt; frontend/pubspec.yaml; src/planning/orchestrator.py; src/llm/client.py; test tree.
- Content decisions: Deterministic meal planning with optional recipe generation and validation, not photo-based food logging. Avoid the old Docker/CI claim and fixed test count without confirming them.

## DanielKaminsky05/Riskgaurd

- Repository: https://github.com/DanielKaminsky05/Riskgaurd
- Reviewed tree: `d49a4eca095a4013b11f0bf1934714b8f12b09ed`
- Read: README.md; backend/requirements.txt; frontend/package.json; extension/package.json; backend/utils/bias_detector.py; extension/src/entrypoints/overlay/Overlay.tsx; supplied Devpost page.
- Content decisions: Behavioural signals and a browser intervention, not a broker-level order block or proven financial protection. Devpost describes an Investopedia Simulator demo and Gemini integration.

## Anth1337/MLB-Breakout-Player-Predictor

- Repository: https://github.com/Anth1337/MLB-Breakout-Player-Predictor
- Reviewed tree: `297bb5b7511c439aa77946325c0a9ee6eddd88ad`
- Read: README.md; requirements.txt; breakout_predictor.ipynb (code cells).
- Content decisions: Source takes precedence over the README's proposed web app and XGBoost stack. Implemented notebook uses MLB Stats API, scikit-learn logistic regression/random forest/histogram gradient boosting, and SHAP. Breakout target is 500 future MLB PA and aggregate OPS >= 0.740 over six seasons. No deployed dashboard claimed.

## WesternDeveloperSociety/TangApp

- Repository: https://github.com/WesternDeveloperSociety/TangApp
- Reviewed tree: `ecaa74900f3bc5ba7f90f6a2ce8b0ac91c93291c`
- Read: README.md; client/README.md; server/README.md; client/package.json; server/package.json; client/app/(tabs)/index.tsx; client/app/(tabs)/robots.tsx; server/controllers/robotController.js.
- Content decisions: React Native/Expo prototype. Map exists, list has fixed sample entries, robot detail navigation is a placeholder, location handler is empty. Do not claim live telemetry, task assignment, or completed robot control.

## Anth1337/Pet-Life

- Repository: https://github.com/Anth1337/Pet-Life
- Reviewed tree: `c236c1b3ab88bb424f5feb1bad1b818ea7286737`
- Read: README.md; pom.xml; src/main/java/org/group70/Pet.java; source and test tree.
- Content decisions: Java 17 Swing desktop game, Gson saves, Maven and JUnit. Not a JavaScript browser game.

## Anth1337/BramHacks-2025

- Repository: https://github.com/Anth1337/BramHacks-2025
- Reviewed tree: `a956c9aab00c9f870d0ef2ce96e6b623b4f45b01`
- Read: README.md; requirements.txt; frontend/package.json; endpoints.py; frontend/app.js.
- Content decisions: FastAPI loads a random forest and calibration data; Spacekit.js renders the viewer. API returns point estimates, not the README's proposed uncertainty bands or follow-up ranking. Unknown drift direction is sampled from a prior.

## Anth1337/Cadence

- Repository: https://github.com/Anth1337/Cadence
- Reviewed tree: `fcf966240f1304eae7cc0f5504ec63b611837785`
- Read: README.md; GoalTracker/package.json; GoalTracker/hooks/healthFetchers.ios.ts; GoalTracker/hooks/healthFetchers.android.ts; services/GoalService.cpp; core/bridge/test tree.
- Content decisions: React Native/Expo with C++17 core and SQLite. HealthKit and Health Connect adapters are implemented. No claim of production readiness or cloud synchronization.

## Anth1337/TheHokage

- Repository: https://github.com/Anth1337/TheHokage
- Reviewed tree: `47efbb2f0855c0dd3d1a6bff586c5057db8ff7b7`
- Read: Recursive tree; build.gradle; PollCommand.java; StudyCommand.java; TruthDareCommand.java; PomodoroCommand.java; PointsCommand.java.
- Content decisions: No README exists in the checked tree. Source confirms Java/JDA, polls, study-role opt-in, truth/dare buttons. Pomodoro and points handlers are stubs. Lavaplayer is a dependency but that alone does not demonstrate working music playback.
