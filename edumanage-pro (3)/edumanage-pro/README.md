# EduManage Pro

A school management dashboard (students, teachers, classes, timetable, attendance, exams, fees, salary, expenses, notices, users, reports) — runs entirely client-side with in-memory demo data, no backend required.

## Structure
```
edumanage-pro/
├── index.html      # page markup only
├── css/style.css   # all styling
├── js/app.js       # all app logic (state, rendering, page functions)
└── README.md
```

## Running it
Just open `index.html` in a browser — or serve the folder locally, e.g.:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Note on your uploaded `style.css`
Your originally uploaded `style.css` uses expanded class names (`.btn-primary`, `.card-header`, etc.) that don't match the compact classes actually used in the HTML/JS (`.bp`, `.ch`, etc.), so it wouldn't render correctly if linked as-is. The `css/style.css` in this project is extracted directly from the working `<style>` block in your original file instead, so everything renders identically to the original. Happy to reconcile the two naming schemes if you'd rather use the more readable class names throughout.

## Fixes in this version
- **Print buttons** (fee receipt, salary slip, report card) previously only showed a toast and did nothing. They now call the browser's real print dialog (`window.print()`), where you can choose "Save as PDF."
- **Document upload** (registration step 3, and the "+ Upload" button on School Profile) previously just showed a placeholder toast. Both now open a real file picker, read the file, and show it as attached/uploaded.

## New: Super Admin panel
On the sign-in screen there's now a **"🛡️ Platform administrator? Sign in here"** link, separate from the regular school login.

- Demo login: `super@edumanage.pro` / `super123`
- Lets you see every school registered on the platform, pause/resume a school, and pause/resume individual users
- A paused school's users (or an individually-paused user) are blocked from signing in to their school portal with a clear message
- Try it: pause "Al-Huda Public School" (already paused by default), then attempt to sign in as `admin@alhuda.edu` / any password on the regular login screen — it will be rejected

## New: persistence, monthly auto-suspension, DB export/import

**Why "Resume" wasn't sticking before:** all app data lived only in a JS variable that reset on every page reload/new tab. Pausing or resuming a school in the Super Admin panel now saves to the browser's `localStorage`, so it survives reloads and new visits **in that same browser**.
> Note: `localStorage` is per-browser. If you resume a school in Chrome, it won't show as resumed if you open the site in a different browser or a private/incognito window — that's a browser storage limitation, not a bug. A real multi-device rollout would need a backend/database instead.

**Monthly auto-suspension (day 7 rule):** every school is automatically set to "Paused" the first time the app loads on or after the 7th of each month. It stays paused until the Super Admin resumes it — and once resumed, it will *not* re-pause again until the 7th of the *next* month.
> Important caveat: this is a static site with no server, so there's no clock running in the background — the rule can only be *checked* when someone actually opens the app. In practice this means: on the 7th, the very next time anyone loads the site, all schools flip to paused. If literally nobody opens the site between the 6th and the 8th, the pause is applied the next time it *is* opened, not at the exact stroke of midnight. If you need true "runs even if nobody visits" scheduling, that requires a real backend (e.g. a scheduled server job or Netlify Scheduled Function) — happy to help set that up if you want it.

**Export / Import DB (Super Admin only):** in the Super Admin panel, every page now has "⬇️ Export DB" and "⬆️ Import DB" buttons.
- Export downloads the entire app's current data as a `.json` file to your computer.
- Import lets you pick a previously-exported `.json` file to restore the whole app's data from — this also updates what's saved in the browser, so it persists after import too.
## New: student & teacher certificates

Both the **Students** and **Teachers** pages now have a certificate button on each row (and inside the profile view):
- **Students:** "🏆 Certificate" — pick a type (Completion, Character, Merit, or Transfer certificate), edit the wording if you like, set an issue date, then generate. Print/Save as PDF from there.
- **Teachers:** "📜 Experience" — set an employment end date (or leave it as "present"), edit the remarks, then generate an experience certificate.

**Uses your uploaded letterhead:** if a school logo was uploaded (registration step 3 or School Profile → Documents), it's automatically used at the top of every certificate. If no logo has been uploaded yet, it falls back to a plain school icon so certificates still look clean.

Like the receipts and slips, certificates print via the browser's real print dialog, so "Save as PDF" works the same way.

## Latest fixes

**Certificate redesign:**
- Added a small QR code (top-right) on every certificate encoding the student/teacher's verification details (school, name, ID, cert number, date) — scan it to read back the certificate's details for manual verification. It's generated via a free public QR image API (`api.qrserver.com`), so it needs an internet connection at print time, same as any other web page.
- School name is now a clear subhead near the top, right under the logo.
- School address moved to a proper footer at the bottom (previously it was squeezed under the school name at the top).
- Removed the gold medal emoji from the bottom-right corner.

**Login page:** removed the permanent red "Suspended demo" box — it was meant as a hint but looked like a live suspension notice. The suspension message now only appears (as a toast) at the moment someone actually tries to sign in with a paused school or paused account — resuming them from the Super Admin panel immediately lets them log in again, same as before.

**Super Admin — Remove school/user:** every school and user row in the Super Admin panel (Platform Overview, Schools, Users) now has a "🗑️ Remove" button next to Pause/Resume. This permanently deletes that school (and its associated users) or that individual user from the platform — a confirmation prompt appears first since it can't be undone.

## Latest fixes (round 3)

**Login pages are now blank by default.** No prefilled email/password on either the school sign-in or platform admin sign-in, and the "Demo: ..." credential hint text has been removed from both. (Credentials for testing are listed further down in this README instead.)

**Super Admin — usernames & passwords visible:** the Schools and Users tables in the Super Admin panel now show a Username and Password column. Passwords are masked by default (••••••••) — click the password cell to reveal it, click again to re-mask.
> Heads up: showing plaintext passwords like this is fine for a demo/mock system, but it's not how a real production app should handle credentials — a real backend would store passwords hashed and never display them, even to a super admin. Worth keeping in mind if this ever becomes a real production system.

**Students & Teachers — CSV Import/Export:** both pages now have "⬆️ Import CSV" and "⬇️ Export CSV" buttons.
- Export downloads the current list as a `.csv` file (opens fine in Excel/Google Sheets).
- Import reads a `.csv` file and adds new records — if a row's `id` matches an existing student/teacher, that record is updated instead of duplicated.
- Expected columns — Students: `id,name,cls,roll,gender,dob,session,guardian,phone,addr,status,fee,paid,bal,adm`. Teachers: `id,name,subject,qual,phone,email,join,status,basic,allow,ded`. Leave `id` blank on new rows and one will be generated automatically.

## Test credentials (for your reference — not shown in the app UI anymore)
- School admin: `admin@sunrise.edu` / `password123`
- Platform admin: `super@edumanage.pro` / `super123`
- Paused school demo: `admin@alhuda.edu` / `alhuda@321`

## Major update: Pending Fees widget, Announcement read-tracking, Parent Portal, targeted Parent Announcements

### 1. Dashboard Pending Fees widget
Admin/Accountant/Principal dashboards now show a "Pending fees" stat card (count of students with a balance + total amount due). Clicking it opens a dedicated Pending Fees page with search, class filter, and per-student actions: View profile, Print Challan (unpaid demand notice), Record Payment (opens the existing fee-collection form pre-filled with that student), and Send Reminder (logs a reminder that shows up in that student's parent's Notifications).

### 2. Announcement read tracking
Every notice now tracks who has read it — name, role, date, and time. Opening the Notice Board marks all currently-visible notices as read for the logged-in staff member (or parent, from their Announcements page). Administrators and Principals see a "👁️ X/Y read" button on each notice that opens a full read/not-read breakdown.

### 3. Parent Portal
A parent login is automatically created every time a student is added (visible in the student's profile under "Parent portal login" — username + a reveal-on-click password). Parents sign in from a new "👨‍👩‍👧 Parent? Sign in here" link on the main login screen, into a dedicated portal covering: student profile, attendance, fees + receipts + challans, exam schedule/results (with report card), homework, timetable, teacher remarks (on the overview page), announcements, and notifications.
> Demo parent logins (password `parent123` for all): `parent.s001@sunrise.edu` through `parent.s005@sunrise.edu`, matching the five seed students.

### 4 & 5. Targeted Parent Announcements + role-based composing
The existing Notice Board's "Post notice" form now has a "Send to" field: Internal staff, All parents, Specific class's parents, or a specific student's parent. Teachers can only target their own class or a specific student (not a school-wide/all-parents blast) — Admin, Principal, and Accountant can target any audience. Each notice's read-report reflects the right audience (staff roster, or the relevant parent accounts).

### Also added
- **Principal role**: log in with any email containing "principal" (e.g. `principal@sunrise.edu`) to test that persona — same broad access as Admin, minus fee/salary/expense/user-management pages.
- **Homework & Assignments**: new nav item — Admin/Principal/Teachers can post homework per class; parents see it filtered to their child's class.
- **Teacher remarks**: added directly inside a student's profile (view any student → Teacher remarks section) — visible to parents on their Overview page.
- Role-based sidebar visibility was tightened up for Teacher, Accountant, and the new Principal role (and a latent bug was fixed where a previous session's hidden nav items could leak into the next login).

### Scope notes (being upfront about simplifications)
- Attendance in the Parent Portal reflects only days that have actually been marked in Attendance → Take Attendance for that class — it won't show historical data that was never entered (same as the rest of this demo).
- "Send Reminder" simulates sending — no real SMS/email integration.
- All of this is still in-memory only except the Super Admin platform data (schools/users pause state), which persists via `localStorage`. Students, fees, homework, notices, etc. reset on reload unless exported/imported via the Super Admin DB export feature.

## WhatsApp fee reminders
The "💬 WhatsApp" button on the Pending Fees page (previously "📨 Remind") now opens a WhatsApp click-to-chat link (`wa.me`) addressed to that student's guardian phone number, with a fee reminder message pre-filled. It opens in a new tab — the sender still needs to hit Send inside WhatsApp themselves.
> This is the honest, backend-free way to do this: fully automatic WhatsApp sending (no human click) requires the official WhatsApp Business API with server-side credentials and an approved business account — not something that can live safely in a static site's JavaScript. The click-to-chat approach needs no backend, no API keys, and no approval process.
- It also still logs the reminder to that student's parent-portal Notifications, same as before.
- If a student has no phone number on file, it skips WhatsApp and just logs the reminder internally, with a toast explaining why.
- Phone numbers are normalized from local Pakistani format (e.g. `0322-3456789`) to WhatsApp's international format automatically.

## Excel import/export for Students & Teachers
Both the Students and Teachers pages now support real `.xlsx` Excel files, not just CSV.

- **Import** — one button now accepts both `.csv` and `.xlsx`/`.xls`; it auto-detects the format from the file extension and parses accordingly. Same add-or-update-by-`id` behavior as before.
- **Export** — the Export button is now a dropdown with two choices: "📄 Export as CSV" or "📊 Export as Excel." The Excel file opens correctly in Microsoft Excel, Google Sheets, and LibreOffice Calc.
- Uses the [SheetJS](https://sheetjs.com) library (`xlsx.full.min.js`), loaded from cdnjs — this needs an internet connection to load once per page visit, same as the Google Fonts stylesheet already in use.
- I tested a full export→reopen→reimport round trip with real spreadsheet data to confirm nothing gets mangled in translation (number fields, dates, etc. all come back correctly as strings and get re-parsed the same way as CSV).

Column layout is unchanged from the CSV version — Students: `id,name,cls,roll,gender,dob,session,guardian,phone,addr,status,fee,paid,bal,adm`. Teachers: `id,name,subject,qual,phone,email,join,status,basic,allow,ded`.

## Cloud sync (Supabase) — cross-browser/cross-device persistence
The app now syncs its entire data set to a shared Supabase database, so the same data shows up whether you open the app from Chrome, Edge, your phone, or a different computer.

**How it works:**
- On page load, the app fetches the shared save file from Supabase and loads it in — if there's nothing there yet (first-ever run), it seeds the cloud with the current defaults.
- After that, virtually every action that changes data (adding a student, recording a payment, posting a notice, pausing a school, etc.) triggers a debounced save (waits ~1.2s after the last change, so rapid actions don't spam the network) that pushes the entire app state back to Supabase.
- `localStorage` is still kept as a same-browser fallback underneath this, but Supabase is now the real source of truth across devices.
- If the Supabase connection fails for any reason (table not created yet, wrong key, offline, etc.), the app fails gracefully — it keeps working with local-only data for that session instead of breaking, and logs the reason to the browser console (F12 → Console tab) rather than to the UI.

### ⚠️ Before this works, you need to have run the setup SQL
I sent this earlier — if you haven't run it yet, go to your Supabase project → SQL Editor → paste and run:
```sql
create table app_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table app_state enable row level security;
create policy "Allow anon read" on app_state for select using (true);
create policy "Allow anon write" on app_state for insert with check (true);
create policy "Allow anon update" on app_state for update using (true);
```
Without this table, every save/load attempt will fail (harmlessly — the app just won't sync) until it exists.

### How to verify it's actually working
1. Redeploy this updated code to Netlify.
2. Open the app in one browser, log in, add a test student.
3. Open the app in a *different* browser (or an incognito window), log in with the same credentials — the test student should be there.
4. If it's not: open DevTools (F12) → Console tab, look for a message starting with "Cloud load failed" or "Cloud save failed" — that'll tell you what's wrong (usually: the SQL above hasn't been run yet, or the table name doesn't match).

### Known limitations, being upfront
- **Single shared save file, not per-school isolation.** Every visitor currently reads/writes the *same* row — there's no real multi-tenant separation of different schools' data yet. Fine for your current single-school use; would need Supabase Auth wired in properly if you ever have multiple real, separate schools using this simultaneously and needing private data from each other.
- **Free Supabase projects pause after 7 days of no activity** — if that happens, cloud sync will fail until you manually resume the project from the Supabase dashboard (the app still works locally in the meantime, just without cross-device sync).
- **No conflict resolution.** If two people edit data in two different browsers at the *exact* same moment, the last save wins and silently overwrites the other — there's no merge logic. Unlikely to matter for typical single-admin-at-a-time usage, but worth knowing.
