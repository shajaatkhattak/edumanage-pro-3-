// ── STATE ──
const S = {
  auth:null,school:null,page:'dashboard',
  students:[
    {id:'S001',name:'Aisha Khan',cls:'10-A',dob:'2009-03-15',gender:'Female',guardian:'Tariq Khan',phone:'0311-2345678',addr:'Gulshan, Karachi',roll:'1001',session:'2024-25',status:'Active',fee:25000,paid:25000,bal:0,adm:'2024-02-01',dueDate:'2025-02-10'},
    {id:'S002',name:'Bilal Ahmed',cls:'9-B',dob:'2010-06-22',gender:'Male',guardian:'Sajid Ahmed',phone:'0322-3456789',addr:'DHA, Lahore',roll:'1002',session:'2024-25',status:'Active',fee:22000,paid:11000,bal:11000,adm:'2024-02-01',dueDate:'2025-02-10'},
    {id:'S003',name:'Fatima Malik',cls:'8-A',dob:'2011-01-10',gender:'Female',guardian:'Usman Malik',phone:'0333-4567890',addr:'G-9, Islamabad',roll:'1003',session:'2024-25',status:'Active',fee:20000,paid:0,bal:20000,adm:'2024-01-15',dueDate:'2025-02-10'},
    {id:'S004',name:'Hamza Raza',cls:'10-B',dob:'2009-08-30',gender:'Male',guardian:'Ali Raza',phone:'0344-5678901',addr:'Model Town, Gujranwala',roll:'1004',session:'2024-25',status:'Active',fee:25000,paid:25000,bal:0,adm:'2023-08-01',dueDate:'2025-02-10'},
    {id:'S005',name:'Zara Siddiqui',cls:'7-A',dob:'2012-04-18',gender:'Female',guardian:'Imran Siddiqui',phone:'0355-6789012',addr:'Bahria Town, Rawalpindi',roll:'1005',session:'2024-25',status:'Active',fee:18000,paid:9000,bal:9000,adm:'2024-04-01',dueDate:'2025-02-10'},
  ],
  teachers:[
    {id:'T001',name:'Prof. Nadia Hussain',subject:'Mathematics',qual:'M.Sc Math',phone:'0300-1234567',email:'nadia@school.edu',join:'2020-01-15',status:'Active',basic:65000,allow:12000,ded:5000},
    {id:'T002',name:'Mr. Kamran Javed',subject:'Physics',qual:'M.Sc Physics',phone:'0311-2345678',email:'kamran@school.edu',join:'2019-08-01',status:'Active',basic:60000,allow:10000,ded:4500},
    {id:'T003',name:'Ms. Sana Butt',subject:'English',qual:'MA English',phone:'0322-3456789',email:'sana@school.edu',join:'2021-03-10',status:'Active',basic:55000,allow:9000,ded:4000},
    {id:'T004',name:'Mr. Adeel Rana',subject:'Chemistry',qual:'M.Sc Chem',phone:'0333-4567890',email:'adeel@school.edu',join:'2022-07-01',status:'Active',basic:58000,allow:10000,ded:4200},
    {id:'T005',name:'Ms. Rabia Shah',subject:'Biology',qual:'M.Sc Bio',phone:'0344-5678901',email:'rabia@school.edu',join:'2018-09-01',status:'On Leave',basic:62000,allow:11000,ded:4800},
  ],
  classes:[
    {id:'C001',name:'10-A',grade:'Grade 10',teacher:'T001',room:'101',students:28},
    {id:'C002',name:'10-B',grade:'Grade 10',teacher:'T002',room:'102',students:30},
    {id:'C003',name:'9-A',grade:'Grade 9',teacher:'T003',room:'201',students:32},
    {id:'C004',name:'9-B',grade:'Grade 9',teacher:'T004',room:'202',students:27},
    {id:'C005',name:'8-A',grade:'Grade 8',teacher:'T005',room:'301',students:25},
    {id:'C006',name:'7-A',grade:'Grade 7',teacher:'T001',room:'302',students:22},
  ],
  timetable:{
    '10-A':[
      ['Math','English','Physics','Urdu','Chemistry'],
      ['English','Math','Chemistry','Physics','Biology'],
      ['Physics','Urdu','Math','English','Computer'],
      ['Urdu','Chemistry','English','Math','Physics'],
      ['Biology','Math','Urdu','Chemistry','English'],
    ]
  },
  attendance:{},
  exams:[
    {id:'E001',title:'Mid-Term Exam',cls:'10-A',date:'2025-02-15',totalMarks:100,results:{'S001':88,'S004':75}},
    {id:'E002',title:'Unit Test 1',cls:'9-B',date:'2025-01-20',totalMarks:50,results:{'S002':38}},
  ],
  feeRecs:[
    {id:'F001',sid:'S001',month:'Jan 2025',amount:25000,date:'2025-01-05',method:'Bank Transfer',status:'Paid',rcpt:'REC-001'},
    {id:'F002',sid:'S002',month:'Jan 2025',amount:11000,date:'2025-01-12',method:'Cash',status:'Partial',rcpt:'REC-002'},
    {id:'F003',sid:'S004',month:'Jan 2025',amount:25000,date:'2025-01-03',method:'Online',status:'Paid',rcpt:'REC-003'},
  ],
  salaryRecs:[],
  notices:[
    {id:'N001',title:'Annual Day Ceremony',body:'Annual Day will be held on March 15, 2025. All students and parents are invited to attend.',type:'event',author:'Principal',date:'2025-01-10',pinned:true,audience:'staff',reads:[]},
    {id:'N002',title:'Fee submission deadline',body:'Last date for fee submission is January 31, 2025. A late fine of Rs.500 will be charged after the deadline.',type:'urgent',author:'Admin',date:'2025-01-08',pinned:false,audience:'parents-all',reads:[]},
    {id:'N003',title:'PTM scheduled',body:'Parent-Teacher Meeting is scheduled for February 5, 2025 from 9 AM to 1 PM.',type:'info',author:'Principal',date:'2025-01-05',pinned:false,audience:'staff',reads:[]},
  ],
  homework:[
    {id:'H001',cls:'10-A',subject:'Mathematics',title:'Chapter 5 exercises',desc:'Complete Q1–Q15 from Chapter 5 (Quadratic Equations).',dueDate:'2025-02-12',postedBy:'Prof. Nadia Hussain',date:'2025-02-05'},
    {id:'H002',cls:'9-B',subject:'Physics',title:'Lab report',desc:'Submit the lab report on the pendulum experiment.',dueDate:'2025-02-14',postedBy:'Mr. Kamran Javed',date:'2025-02-06'},
  ],
  remarks:[
    {id:'R001',sid:'S001',teacher:'Prof. Nadia Hussain',remark:'Excellent performance in class tests. Keep up the good work.',date:'2025-01-20'},
  ],
  notifications:[],
  expenses:[
    {id:'X001',cat:'Utilities',desc:'Electricity bill',amount:45000,date:'2025-01-05',method:'Bank'},
    {id:'X002',cat:'Maintenance',desc:'Plumbing repair',amount:12000,date:'2025-01-10',method:'Cash'},
    {id:'X003',cat:'Stationery',desc:'Office supplies',amount:8500,date:'2025-01-12',method:'Cash'},
    {id:'X004',cat:'Transport',desc:'Van fuel',amount:22000,date:'2025-01-15',method:'Cash'},
    {id:'X005',cat:'Utilities',desc:'Water bill',amount:6000,date:'2025-01-18',method:'Bank'},
  ],
  users:[
    {id:'U001',name:'Dr. Rashid Khan',email:'principal@sunrise.edu',role:'admin',status:'Active',lastLogin:'2025-01-15'},
    {id:'U002',name:'Prof. Nadia Hussain',email:'nadia@school.edu',role:'teacher',status:'Active',lastLogin:'2025-01-14'},
    {id:'U003',name:'Mr. Kamran Javed',email:'kamran@school.edu',role:'teacher',status:'Active',lastLogin:'2025-01-13'},
    {id:'U004',name:'Ms. Zainab Mirza',email:'accounts@sunrise.edu',role:'accountant',status:'Active',lastLogin:'2025-01-15'},
  ],
  parents:[
    {id:'PAR-S001',studentId:'S001',name:'Tariq Khan',email:'parent.s001@sunrise.edu',password:'parent123',status:'active'},
    {id:'PAR-S002',studentId:'S002',name:'Sajid Ahmed',email:'parent.s002@sunrise.edu',password:'parent123',status:'active'},
    {id:'PAR-S003',studentId:'S003',name:'Usman Malik',email:'parent.s003@sunrise.edu',password:'parent123',status:'active'},
    {id:'PAR-S004',studentId:'S004',name:'Ali Raza',email:'parent.s004@sunrise.edu',password:'parent123',status:'active'},
    {id:'PAR-S005',studentId:'S005',name:'Imran Siddiqui',email:'parent.s005@sunrise.edu',password:'parent123',status:'active'},
  ],
  platform:{
    superAdmin:{email:'super@edumanage.pro',password:'super123'},
    schools:[
      {id:'SCH001',name:'Sunrise Academy',type:'Secondary School',admin:'Dr. Rashid Khan',email:'admin@sunrise.edu',password:'password123',students:245,teachers:18,joined:'2023-08-01',status:'active'},
      {id:'SCH002',name:'Greenfield College',type:'Higher Secondary',admin:'Ms. Ayesha Noor',email:'admin@greenfield.edu',password:'green@2022',students:512,teachers:34,joined:'2022-03-14',status:'active'},
      {id:'SCH003',name:'Al-Huda Public School',type:'Primary',admin:'Mr. Faisal Iqbal',email:'admin@alhuda.edu',password:'alhuda@321',students:98,teachers:9,joined:'2024-01-20',status:'paused'},
      {id:'SCH004',name:'Bright Future Academy',type:'Secondary School',admin:'Mrs. Sadia Chaudhry',email:'admin@brightfuture.edu',password:'bright#456',students:176,teachers:14,joined:'2023-11-05',status:'active'},
      {id:'SCH005',name:'National Grammar School',type:'Higher Secondary',admin:'Mr. Waqas Malik',email:'admin@ngs.edu',password:'ngs@secure1',students:389,teachers:27,joined:'2021-09-01',status:'active'},
    ],
    users:[
      {id:'PU001',name:'Dr. Rashid Khan',school:'Sunrise Academy',role:'admin',email:'admin@sunrise.edu',password:'password123',status:'active'},
      {id:'PU002',name:'Prof. Nadia Hussain',school:'Sunrise Academy',role:'teacher',email:'nadia@school.edu',password:'nadia@2020',status:'active'},
      {id:'PU003',name:'Ms. Ayesha Noor',school:'Greenfield College',role:'admin',email:'admin@greenfield.edu',password:'green@2022',status:'active'},
      {id:'PU004',name:'Mr. Faisal Iqbal',school:'Al-Huda Public School',role:'admin',email:'admin@alhuda.edu',password:'alhuda@321',status:'paused'},
      {id:'PU005',name:'Mrs. Sadia Chaudhry',school:'Bright Future Academy',role:'admin',email:'admin@brightfuture.edu',password:'bright#456',status:'active'},
      {id:'PU006',name:'Ms. Zainab Mirza',school:'Sunrise Academy',role:'accountant',email:'accounts@sunrise.edu',password:'zainab@99',status:'active'},
    ],
  },
};

// ── PLATFORM PERSISTENCE (schools/users pause state survives reloads) ──
const DB_KEY='edumanage_platform_db';
function saveState(){
  try{ localStorage.setItem(DB_KEY, JSON.stringify(S.platform)); }
  catch(e){ console.error('Could not save platform state', e); }
}
function loadState(){
  try{
    const raw=localStorage.getItem(DB_KEY);
    if(!raw)return;
    const parsed=JSON.parse(raw);
    if(parsed&&Array.isArray(parsed.schools)&&Array.isArray(parsed.users)){
      S.platform.schools=parsed.schools;
      S.platform.users=parsed.users;
      if(parsed.superAdmin)S.platform.superAdmin=parsed.superAdmin;
    }
  }catch(e){ console.error('Could not load saved platform state', e); }
}
loadState();

// ── CLOUD SYNC (Supabase — makes data shared across every browser/device) ──
const SUPABASE_URL='https://zcbrgydsmevkarohhklg.supabase.co';
const SUPABASE_KEY='sb_publishable_B-w3zTY4_yhe08QO6PkCnQ_vmoY2aTL';
const CLOUD_ROW_ID='default';
let cloudSyncOK=true; // flips to false if the table/connection isn't reachable, so we stop retrying noisily
let _cloudTimer;
function scheduleCloudSave(){
  if(!cloudSyncOK)return;
  clearTimeout(_cloudTimer);
  _cloudTimer=setTimeout(saveCloudState,1200);
}
async function saveCloudState(){
  if(!cloudSyncOK)return;
  try{
    const res=await fetch(`${SUPABASE_URL}/rest/v1/app_state`,{
      method:'POST',
      headers:{
        'apikey':SUPABASE_KEY,
        'Authorization':'Bearer '+SUPABASE_KEY,
        'Content-Type':'application/json',
        'Prefer':'resolution=merge-duplicates'
      },
      body:JSON.stringify({id:CLOUD_ROW_ID,data:S,updated_at:new Date().toISOString()})
    });
    if(!res.ok)throw new Error('save failed: '+res.status);
  }catch(e){
    console.error('Cloud save failed — falling back to local-only storage for this session',e);
    cloudSyncOK=false;
  }
}
async function loadCloudState(){
  try{
    const res=await fetch(`${SUPABASE_URL}/rest/v1/app_state?id=eq.${CLOUD_ROW_ID}&select=data`,{
      headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY}
    });
    if(!res.ok)throw new Error('load failed: '+res.status);
    const rows=await res.json();
    if(rows&&rows[0]&&rows[0].data){
      for(const k in S)delete S[k];
      Object.assign(S,rows[0].data);
      return true;
    }
    // no cloud row yet — this is the very first run, seed the cloud with current defaults
    await saveCloudState();
    return false;
  }catch(e){
    console.error('Cloud load failed — using local data for this session (changes will not sync to other browsers until this is resolved)',e);
    cloudSyncOK=false;
    return false;
  }
}

// ── MONTHLY AUTO-SUSPENSION (all schools auto-pause from the 7th of each month) ──
function ymKey(d){ return d.getFullYear()+'-'+(d.getMonth()+1); }
function applyMonthlyAutoPause(){
  const now=new Date();
  if(now.getDate()<7)return; // rule only kicks in on/after the 7th
  const ym=ymKey(now);
  let changed=false;
  S.platform.schools.forEach(s=>{
    if(s.lastAutoPauseApplied!==ym){
      s.status='paused';
      s.lastAutoPauseApplied=ym;
      changed=true;
    }
  });
  if(changed)saveState();
}

// ── AUTH ──
function initAuth(){
  let tab='login',step=1,sd={};
  function render(){
    const ab=document.getElementById('authBody');
    if(tab==='login'){
      ab.innerHTML=`
        <div class="at"><button class="atb active">Sign in</button><button class="atb" onclick="toSU()">Register school</button></div>
        <div style="font-size:18px;font-weight:700;margin-bottom:3px">Welcome back</div>
        <div style="font-size:13px;color:var(--txts);margin-bottom:1.1rem">Sign in to your school portal</div>
        <div class="fg"><label>Email</label><input id="le" placeholder="you@school.edu" type="email"/></div>
        <div class="fg"><label>Password</label><input id="lp" type="password" placeholder="••••••••"/></div>
        <button class="btn bp" style="width:100%;justify-content:center;margin-top:.5rem" onclick="doLogin()">Sign in →</button>
        <div style="text-align:center;margin-top:1rem;padding-top:.9rem;border-top:1px solid var(--border)">
          <a href="javascript:void(0)" onclick="toParentLogin()" style="font-size:12px;color:var(--txts);text-decoration:none">👨‍👩‍👧 Parent? <strong style="color:var(--navy)">Sign in here</strong></a>
          &nbsp;·&nbsp;
          <a href="javascript:void(0)" onclick="toSuperLogin()" style="font-size:12px;color:var(--txts);text-decoration:none">🛡️ Platform admin</a>
        </div>`;
    } else if(tab==='super'){
      ab.innerHTML=`
        <div style="font-size:18px;font-weight:700;margin-bottom:3px">🛡️ Platform admin</div>
        <div style="font-size:13px;color:var(--txts);margin-bottom:1.1rem">Manage every school on EduManage Pro</div>
        <div class="fg"><label>Email</label><input id="sue" placeholder="you@edumanage.pro" type="email"/></div>
        <div class="fg"><label>Password</label><input id="sup" type="password" placeholder="••••••••"/></div>
        <button class="btn bp" style="width:100%;justify-content:center;margin-top:.5rem" onclick="doSuperLogin()">Sign in as platform admin →</button>
        <div style="text-align:center;margin-top:1rem">
          <a href="javascript:void(0)" onclick="toLogin()" style="font-size:12px;color:var(--txts)">← Back to school sign in</a>
        </div>`;
    } else if(tab==='parent'){
      ab.innerHTML=`
        <div style="font-size:18px;font-weight:700;margin-bottom:3px">👨‍👩‍👧 Parent portal</div>
        <div style="font-size:13px;color:var(--txts);margin-bottom:1.1rem">Sign in to view your child's school details</div>
        <div class="fg"><label>Email</label><input id="pae" placeholder="parent.s001@school.edu" type="email"/></div>
        <div class="fg"><label>Password</label><input id="pap" type="password" placeholder="••••••••"/></div>
        <button class="btn bp" style="width:100%;justify-content:center;margin-top:.5rem" onclick="doParentLogin()">Sign in →</button>
        <div style="text-align:center;margin-top:1rem">
          <a href="javascript:void(0)" onclick="toLogin()" style="font-size:12px;color:var(--txts)">← Back to school sign in</a>
        </div>`;
    } else {
      const steps=['School info','Admin account','Documents'];
      ab.innerHTML=`
        <div class="at"><button class="atb" onclick="toLogin()">Sign in</button><button class="atb active">Register school</button></div>
        <div class="step-w">
          ${steps.map((s,i)=>`
            <div class="step-c ${i+1<step?'dn':i+1===step?'ac_':''}">
              <div class="step-dot">${i+1<step?'✓':i+1}</div>
              <div class="step-lbl">${s}</div>
            </div>
            ${i<steps.length-1?`<div class="step-line ${i+1<step?'dn':''}"></div>`:''}
          `).join('')}
        </div>
        ${step===1?`
          <div style="font-size:17px;font-weight:700;margin-bottom:3px">School information</div>
          <div style="font-size:12px;color:var(--txts);margin-bottom:1rem">Tell us about your institution</div>
          <div class="fg"><label>School name *</label><input id="sn" value="${sd.sn||''}" placeholder="e.g. Sunrise Academy"/></div>
          <div class="fr"><div class="fg"><label>Type *</label><select id="st"><option>Select type</option><option ${sd.st==='Primary'?'selected':''}>Primary</option><option ${sd.st==='Secondary'?'selected':''}>Secondary</option><option ${sd.st==='Higher Secondary'?'selected':''}>Higher Secondary</option><option ${sd.st==='College'?'selected':''}>College</option></select></div><div class="fg"><label>Est. year</label><input id="sy" value="${sd.sy||''}" placeholder="2005"/></div></div>
          <div class="fg"><label>Email *</label><input id="se" type="email" value="${sd.se||''}" placeholder="info@school.edu"/></div>
          <div class="fg"><label>Phone</label><input id="sp" value="${sd.sp||''}" placeholder="021-XXXXXXXX"/></div>
          <div class="fg"><label>Address</label><input id="sa" value="${sd.sa||''}" placeholder="Full address"/></div>
          <div class="flex gap1" style="margin-top:.5rem">
            <button class="btn bo" onclick="toLogin()">Cancel</button>
            <button class="btn bp f1" style="justify-content:center" onclick="ns1()">Next →</button>
          </div>
        `:step===2?`
          <div style="font-size:17px;font-weight:700;margin-bottom:3px">Admin account</div>
          <div style="font-size:12px;color:var(--txts);margin-bottom:1rem">Create your administrator credentials</div>
          <div class="fg"><label>Full name *</label><input id="an" value="${sd.an||''}" placeholder="Principal / Admin name"/></div>
          <div class="fr"><div class="fg"><label>Email *</label><input id="ae" type="email" value="${sd.ae||''}" placeholder="admin@school.edu"/></div><div class="fg"><label>Phone</label><input id="ap" value="${sd.ap||''}" placeholder="03XX-XXXXXXX"/></div></div>
          <div class="fr"><div class="fg"><label>Password *</label><input id="aw_" type="password" value="${sd.aw_||''}" placeholder="Min. 8 chars"/></div><div class="fg"><label>Confirm password</label><input id="aw2" type="password" placeholder="Repeat password"/></div></div>
          <div class="flex gap1" style="margin-top:.5rem">
            <button class="btn bo" onclick="ps()">← Back</button>
            <button class="btn bp f1" style="justify-content:center" onclick="ns2()">Next →</button>
          </div>
        `:`
          <div style="font-size:17px;font-weight:700;margin-bottom:3px">Upload documents</div>
          <div style="font-size:12px;color:var(--txts);margin-bottom:1rem">Optional — you can add these later</div>
          ${['logo','cert','aff'].map((key,i)=>{
            const labels=['School logo (PNG/JPG)','Registration certificate (PDF)','Affiliation letter (PDF)'];
            const accepts=['image/png,image/jpeg','application/pdf','application/pdf'];
            const icons=['🖼️','📄','📜'];
            const f=sd.docs&&sd.docs[key];
            return `
            <div class="fg"><label>${labels[i]}</label>
              <input type="file" id="fUp_${key}" accept="${accepts[i]}" style="display:none" onchange="handleDocFile(event,'${key}')"/>
              <div onclick="document.getElementById('fUp_${key}').click()" style="border:2px dashed ${f?'var(--green)':'var(--borderS)'};border-radius:8px;padding:1rem;text-align:center;cursor:pointer;background:${f?'var(--gbg)':'var(--bg)'};transition:border .15s" onmouseover="if(!'${f?1:0}')this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='${f?'var(--green)':'var(--borderS)'}'">
                <div style="font-size:22px;margin-bottom:4px">${f?'✅':icons[i]}</div>
                <div style="font-size:12px;color:${f?'var(--gdk)':'var(--txts)'};word-break:break-all">${f?f.name:'Click to upload'}</div>
              </div>
            </div>`;
          }).join('')}
          <div class="flex gap1" style="margin-top:.5rem">
            <button class="btn bo" onclick="ps()">← Back</button>
            <button class="btn bp f1" style="justify-content:center" onclick="completeReg()">Complete setup 🎉</button>
          </div>
        `}`;
    }
  }
  window.toSU=()=>{tab='signup';step=1;sd={};render()};
  window.toLogin=()=>{tab='login';render()};
  window.toSuperLogin=()=>{tab='super';render()};
  window.toParentLogin=()=>{tab='parent';render()};
  window.ns1=()=>{
    sd.sn=document.getElementById('sn').value;
    sd.st=document.getElementById('st').value;
    sd.sy=document.getElementById('sy').value;
    sd.se=document.getElementById('se').value;
    sd.sp=document.getElementById('sp').value;
    sd.sa=document.getElementById('sa').value;
    if(!sd.sn||sd.st==='Select type'||!sd.se)return toast('⚠️ Fill required fields');
    step=2;render();
  };
  window.ns2=()=>{
    sd.an=document.getElementById('an').value;
    sd.ae=document.getElementById('ae').value;
    sd.ap=document.getElementById('ap').value;
    sd.aw_=document.getElementById('aw_').value;
    if(!sd.an||!sd.ae||!sd.aw_)return toast('⚠️ Fill required fields');
    step=3;render();
  };
  window.ps=()=>{step--;render()};
  window.handleDocFile=(ev,key)=>{
    const file=ev.target.files[0];
    if(!file)return;
    if(file.size>5*1024*1024){toast('⚠️ File too large — max 5MB');ev.target.value='';return;}
    const reader=new FileReader();
    reader.onload=()=>{
      sd.docs=sd.docs||{};
      sd.docs[key]={name:file.name,data:reader.result,type:file.type};
      render();
      toast('✅ '+file.name+' attached');
    };
    reader.onerror=()=>toast('⚠️ Could not read that file');
    reader.readAsDataURL(file);
  };
  window.completeReg=()=>{
    S.school={name:sd.sn,type:sd.st,year:sd.sy,email:sd.se,phone:sd.sp,addr:sd.sa,logo:sd.docs?.logo?.data||null};
    S.school.documents=[
      sd.docs?.cert?{icon:'📄',name:'Registration Certificate',status:'Verified',color:'green',data:sd.docs.cert.data,fileName:sd.docs.cert.name}:null,
      sd.docs?.aff?{icon:'📜',name:'Affiliation Letter',status:'Pending',color:'amber',data:sd.docs.aff.data,fileName:sd.docs.aff.name}:null,
      sd.docs?.logo?{icon:'🖼️',name:'School Logo',status:'Uploaded',color:'green',data:sd.docs.logo.data,fileName:sd.docs.logo.name}:null,
    ].filter(Boolean);
    S.auth={name:sd.an,email:sd.ae,role:'admin'};
    S.students=[];S.teachers=[];S.feeRecs=[];S.classes=[];
    boot();
  };
  render();
}

function doLogin(){
  const e=document.getElementById('le').value,p=document.getElementById('lp').value;
  if(!e||!p)return toast('⚠️ Enter credentials');
  const pu=S.platform.users.find(u=>u.email.toLowerCase()===e.toLowerCase());
  if(pu){
    const sch=S.platform.schools.find(s=>s.name===pu.school);
    if(pu.status==='paused')return toast('🚫 Your account has been suspended by the platform administrator.');
    if(sch&&sch.status==='paused')return toast('🚫 '+sch.name+' has been suspended by the platform administrator. Contact support.');
  }
  let role='admin',name='Dr. Rashid Khan';
  if(e.includes('principal')){role='principal';name='Dr. Rashid Khan';}
  else if(e.includes('teacher')){role='teacher';name='Prof. Nadia Hussain';}
  else if(e.includes('accounts')){role='accountant';name='Ms. Zainab Mirza';}
  S.auth={name,email:e,role};
  if(!S.school){
    S.school={name:'Sunrise Academy',type:'Secondary School',year:'2005',email:'info@sunrise.edu',phone:'021-34567890',addr:'Block 5, Gulshan-e-Iqbal, Karachi',logo:null,documents:[
      {icon:'📄',name:'Registration Certificate',status:'Verified',color:'green',data:null,fileName:null},
      {icon:'📜',name:'Affiliation Letter',status:'Pending',color:'amber',data:null,fileName:null},
      {icon:'🖼️',name:'School Logo',status:'Uploaded',color:'green',data:null,fileName:null},
    ]};
  }
  boot();
}

function doSuperLogin(){
  const e=document.getElementById('sue').value,p=document.getElementById('sup').value;
  if(!e||!p)return toast('⚠️ Enter credentials');
  if(e.toLowerCase()!==S.platform.superAdmin.email.toLowerCase()||p!==S.platform.superAdmin.password){
    return toast('⚠️ Invalid platform admin credentials');
  }
  document.getElementById('authWrap').style.display='none';
  document.getElementById('superWrap').classList.remove('hidden');
  document.querySelectorAll('.ni[data-sp]').forEach(el=>{
    el.onclick=()=>superNav(el.dataset.sp);
  });
  superNav('platform-dashboard');
}

// ─────────────── PARENT PORTAL ───────────────
let curParent=null;
function doParentLogin(){
  const e=v('pae'),p=v('pap');
  if(!e||!p)return toast('⚠️ Enter credentials');
  const par=S.parents.find(x=>x.email.toLowerCase()===e.toLowerCase());
  if(!par)return toast('⚠️ No parent account found for that email');
  if(par.status==='paused')return toast('🚫 This parent account has been suspended. Contact the school.');
  curParent=par;
  document.getElementById('authWrap').style.display='none';
  document.getElementById('parentWrap').classList.remove('hidden');
  const stu=S.students.find(s=>s.id===par.studentId);
  document.getElementById('paName').textContent=par.name;
  document.getElementById('paChild').textContent=stu?`Parent of ${stu.name}`:'Parent portal';
  document.getElementById('paInitials').textContent=par.name.split(' ').filter(Boolean).map(w=>w[0]).join('').toUpperCase().slice(0,2);
  document.querySelectorAll('.ni[data-pp]').forEach(el=>{el.onclick=()=>parentNav(el.dataset.pp);});
  parentNav('p-overview');
}
function parentLogout(){
  curParent=null;
  document.getElementById('parentWrap').classList.add('hidden');
  document.getElementById('authWrap').style.display='flex';
  initAuth();
}
const parentPageTitles={'p-overview':'Student overview','p-attendance':'Attendance','p-fees':'Fees & receipts','p-exams':'Exams & results','p-homework':'Homework','p-timetable':'Timetable','p-announce':'Announcements','p-notify':'Notifications'};
function parentNav(p){
  document.querySelectorAll('.ni[data-pp]').forEach(el=>el.classList.toggle('active',el.dataset.pp===p));
  document.getElementById('ppgTitle').textContent=parentPageTitles[p]||p;
  ({'p-overview':ppgOverview,'p-attendance':ppgAttendance,'p-fees':ppgFees,'p-exams':ppgExams,'p-homework':ppgHomework,'p-timetable':ppgTimetable,'p-announce':ppgAnnounce,'p-notify':ppgNotify}[p]||ppgOverview)();
}
function ppgSet(html){document.getElementById('ppgContent').innerHTML=html;}
function curStudent(){return S.students.find(s=>s.id===curParent.studentId);}

function ppgOverview(){
  const s=curStudent();
  if(!s)return ppgSet('<div class="card"><div class="cb">Student record not found.</div></div>');
  const rmk=S.remarks.filter(r=>r.sid===s.id).sort((a,b)=>b.date.localeCompare(a.date));
  const recentNotice=S.notices.find(n=>noticeVisibleToParent(n,s));
  ppgSet(`
    <div class="phead" style="margin-bottom:1.25rem"><div class="pav">${s.name[0]}</div><div class="pmeta"><h2>${s.name}</h2><p>${s.cls} · Roll ${s.roll} · Session ${s.session}</p></div><span class="bd bdb">${s.status}</span></div>
    <div class="sg" style="grid-template-columns:repeat(4,1fr)">
      <div class="sc"><div class="si" style="background:#dbeafe">🆔</div><div class="sv" style="font-size:16px">${s.id}</div><div class="sl">Student ID</div></div>
      <div class="sc"><div class="si" style="background:${s.bal>0?'#fee2e2':'#dcfce7'}">💳</div><div class="sv">₨${s.bal.toLocaleString()}</div><div class="sl">Fee balance</div></div>
      <div class="sc"><div class="si" style="background:#fef3c7">📚</div><div class="sv">${S.homework.filter(h=>h.cls===s.cls).length}</div><div class="sl">Homework items</div></div>
      <div class="sc"><div class="si" style="background:#ede9fe">📢</div><div class="sv">${S.notices.filter(n=>noticeVisibleToParent(n,s)).length}</div><div class="sl">Announcements</div></div>
    </div>
    <div class="g2" style="margin-top:1.25rem">
      <div class="card">
        <div class="ch"><div class="ct">Student details</div></div>
        <div class="dg">
          <div class="di"><label>Date of birth</label><p>${s.dob||'N/A'}</p></div>
          <div class="di"><label>Gender</label><p>${s.gender}</p></div>
          <div class="di"><label>Guardian</label><p>${s.guardian}</p></div>
          <div class="di"><label>Phone</label><p>${s.phone||'N/A'}</p></div>
          <div class="di"><label>Address</label><p>${s.addr||'N/A'}</p></div>
          <div class="di"><label>Admission date</label><p>${s.adm}</p></div>
        </div>
      </div>
      <div class="card">
        <div class="ch"><div class="ct">Latest teacher remarks</div></div>
        <div class="cb">${rmk.slice(0,3).map(r=>`<div style="padding:.5rem 0;border-bottom:1px solid var(--border)"><div style="font-size:13px">${r.remark}</div><div style="font-size:11px;color:var(--txts);margin-top:2px">— ${r.teacher} · ${r.date}</div></div>`).join('')||'<div style="font-size:13px;color:var(--txtx)">No remarks yet</div>'}</div>
      </div>
    </div>
  `);
}
function noticeVisibleToParent(n,s){
  const aud=n.audience||'staff';
  if(aud==='parents-all')return true;
  if(aud===`parents-class:${s.cls}`)return true;
  if(aud===`parents-student:${s.id}`)return true;
  return false;
}
function ppgAttendance(){
  const s=curStudent();if(!s)return;
  const rows=Object.keys(S.attendance).filter(k=>k.endsWith('_'+s.cls)).map(k=>({date:k.split('_')[0],status:S.attendance[k][s.id]})).filter(r=>r.status).sort((a,b)=>b.date.localeCompare(a.date));
  const p=rows.filter(r=>r.status==='P').length,a=rows.filter(r=>r.status==='A').length,l=rows.filter(r=>r.status==='L').length;
  const pct=rows.length?Math.round((p/rows.length)*100):null;
  ppgSet(`
    <div class="sg" style="grid-template-columns:repeat(4,1fr)">
      <div class="sc"><div class="si" style="background:#dcfce7">✅</div><div class="sv">${p}</div><div class="sl">Present</div></div>
      <div class="sc"><div class="si" style="background:#fee2e2">❌</div><div class="sv">${a}</div><div class="sl">Absent</div></div>
      <div class="sc"><div class="si" style="background:#fef3c7">🟡</div><div class="sv">${l}</div><div class="sl">Leave</div></div>
      <div class="sc"><div class="si" style="background:#dbeafe">📊</div><div class="sv">${pct===null?'N/A':pct+'%'}</div><div class="sl">Attendance rate</div></div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Attendance history</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Date</th><th>Status</th></tr></thead>
        <tbody>${rows.map(r=>`<tr><td>${r.date}</td><td><span class="bd ${r.status==='P'?'bdg':r.status==='A'?'bdr':'bda'}">${r.status==='P'?'Present':r.status==='A'?'Absent':'Leave'}</span></td></tr>`).join('')||'<tr><td colspan="2" style="text-align:center;padding:2rem;color:var(--txtx)">No attendance recorded yet</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}
function ppgFees(){
  const s=curStudent();if(!s)return;
  const recs=S.feeRecs.filter(f=>f.sid===s.id);
  ppgSet(`
    <div class="sg" style="grid-template-columns:repeat(3,1fr)">
      <div class="sc"><div class="si" style="background:#dbeafe">💰</div><div class="sv">₨${s.fee.toLocaleString()}</div><div class="sl">Total annual fee</div></div>
      <div class="sc"><div class="si" style="background:#dcfce7">✅</div><div class="sv">₨${s.paid.toLocaleString()}</div><div class="sl">Amount paid</div></div>
      <div class="sc"><div class="si" style="background:${s.bal>0?'#fee2e2':'#dcfce7'}">⏳</div><div class="sv">₨${s.bal.toLocaleString()}</div><div class="sl">Balance due${s.bal>0?' · due '+(s.dueDate||'N/A'):''}</div></div>
    </div>
    ${s.bal>0?`<div class="card mb2"><div class="cb" style="display:flex;justify-content:space-between;align-items:center"><div>A fee challan is available for the outstanding balance.</div><button class="btn bp" onclick="printChallan('${s.id}')">🧾 Print challan</button></div></div>`:''}
    <div class="card">
      <div class="ch"><div class="ct">Fee receipts</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Receipt</th><th>Month</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${recs.map(r=>`<tr>
          <td style="font-family:monospace;font-size:12px">${r.rcpt}</td>
          <td>${r.month}</td><td>₨${r.amount.toLocaleString()}</td><td>${r.method}</td><td>${r.date}</td>
          <td><span class="bd ${r.status==='Paid'?'bdg':'bda'}">${r.status}</span></td>
          <td><button class="btn bo bsm" onclick="printRcpt('${r.id}')">🖨️</button></td>
        </tr>`).join('')||'<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--txtx)">No payment records yet</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}
function ppgExams(){
  const s=curStudent();if(!s)return;
  const exForCls=S.exams.filter(e=>e.cls===s.cls);
  ppgSet(`
    <div class="card mb2">
      <div class="ch"><div class="ct">Exam schedule & results</div><button class="btn bpu bsm" onclick="showReportCard('${s.id}')">📋 Report card</button></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Exam</th><th>Date</th><th>Total marks</th><th>Marks obtained</th><th>Status</th></tr></thead>
        <tbody>${exForCls.map(e=>{const m=e.results[s.id];return`<tr>
          <td>${e.title}</td><td>${e.date}</td><td>${e.totalMarks}</td>
          <td>${m!==undefined?m:'—'}</td>
          <td>${m!==undefined?'<span class="bd bdg">Result declared</span>':'<span class="bd bda">Upcoming / pending</span>'}</td>
        </tr>`;}).join('')||'<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--txtx)">No exams scheduled for this class yet</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}
function ppgHomework(){
  const s=curStudent();if(!s)return;
  const hw=S.homework.filter(h=>h.cls===s.cls).sort((a,b)=>b.date.localeCompare(a.date));
  ppgSet(`
    <div class="card">
      <div class="ch"><div class="ct">Homework & assignments — ${s.cls}</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Subject</th><th>Title</th><th>Details</th><th>Due date</th><th>Posted by</th></tr></thead>
        <tbody>${hw.map(h=>`<tr><td>${h.subject}</td><td><strong>${h.title}</strong></td><td>${h.desc}</td><td>${h.dueDate}</td><td>${h.postedBy}</td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--txtx)">No homework posted yet</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}
function ppgTimetable(){
  const s=curStudent();if(!s)return;
  const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const grid=S.timetable[s.cls]; // stored as grid[periodIndex][dayIndex]
  ppgSet(`
    <div class="card">
      <div class="ch"><div class="ct">Weekly timetable — ${s.cls}</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Day</th><th>Period 1</th><th>Period 2</th><th>Period 3</th><th>Period 4</th><th>Period 5</th></tr></thead>
        <tbody>${grid?days.map((d,di)=>`<tr><td style="font-weight:600">${d}</td>${[0,1,2,3,4].map(pi=>`<td>${(grid[pi]&&grid[pi][di])||'Free'}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--txtx)">Timetable not published for ${s.cls} yet</td></tr>`}</tbody>
      </table></div></div>
    </div>
  `);
}
function ppgAnnounce(){
  const s=curStudent();if(!s)return;
  const visible=S.notices.filter(n=>noticeVisibleToParent(n,s));
  visible.forEach(n=>markNoticeRead(n.id,{name:curParent.name,role:'parent',email:curParent.email}));
  ppgSet(`
    <div class="card">
      <div class="ch"><div class="ct">School announcements (${visible.length})</div></div>
      <div class="cb">${visible.map(n=>`
        <div class="notice-card nc-${n.type}">
          <div class="flex ic gap2 mb1"><span class="bd ${n.type==='urgent'?'bdr':n.type==='event'?'bdg':'bdb'}">${n.type}</span><span style="margin-left:auto;font-size:11px;color:var(--txts)">${n.date} · ${n.author}</span></div>
          <div class="nc-title">${n.title}</div>
          <div class="nc-body">${n.body}</div>
        </div>`).join('')||'<div style="text-align:center;padding:2rem;color:var(--txts)">No announcements yet</div>'}
      </div>
    </div>
  `);
}
function ppgNotify(){
  const s=curStudent();if(!s)return;
  const reminders=S.notifications.filter(n=>n.studentId===s.id);
  const notices=S.notices.filter(n=>noticeVisibleToParent(n,s)).map(n=>({id:n.id,msg:'📢 '+n.title,date:n.date,type:'announcement'}));
  const all=[...reminders.map(r=>({id:r.id,msg:'💳 '+r.msg,date:r.date,type:r.type})),...notices].sort((a,b)=>b.date.localeCompare(a.date));
  ppgSet(`
    <div class="card">
      <div class="ch"><div class="ct">Notifications (${all.length})</div></div>
      <div class="cb" style="padding:0">${all.map(n=>`<div style="padding:.75rem 1rem;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start">
        <div style="width:8px;height:8px;border-radius:50%;background:${n.type==='fee-reminder'?'var(--red)':'var(--accent)'};margin-top:5px;flex-shrink:0"></div>
        <div><div style="font-size:13px">${n.msg}</div><div style="font-size:11px;color:var(--txts)">${n.date}</div></div>
      </div>`).join('')||'<div style="text-align:center;padding:2rem;color:var(--txts)">No notifications</div>'}</div>
    </div>
  `);
}

function superLogout(){
  document.getElementById('superWrap').classList.add('hidden');
  document.getElementById('authWrap').style.display='flex';
  initAuth();
}

const superPageTitles={'platform-dashboard':'Platform overview','platform-schools':'Schools','platform-users':'Users'};
function superNav(p){
  document.querySelectorAll('.ni[data-sp]').forEach(el=>el.classList.toggle('active',el.dataset.sp===p));
  document.getElementById('spgTitle').textContent=superPageTitles[p]||p;
  document.getElementById('spgActs').innerHTML=`
    <input type="file" id="dbImportInput" accept="application/json" style="display:none" onchange="importDB(event)"/>
    <button class="btn bo bsm" onclick="document.getElementById('dbImportInput').click()">⬆️ Import DB</button>
    <button class="btn bp bsm" onclick="exportDB()">⬇️ Export DB</button>`;
  ({'platform-dashboard':spgDashboard,'platform-schools':spgSchools,'platform-users':spgUsers}[p]||spgDashboard)();
}
function spgSet(html){document.getElementById('spgContent').innerHTML=html;}

function exportDB(){
  try{
    const blob=new Blob([JSON.stringify(S,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=`edumanage-db-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast('⬇️ Database exported');
  }catch(e){
    toast('⚠️ Export failed');
  }
}
function importDB(ev){
  const file=ev.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const parsed=JSON.parse(reader.result);
      if(!parsed||typeof parsed!=='object'||!parsed.platform)throw new Error('bad format');
      for(const k in S)delete S[k];
      Object.assign(S,parsed);
      saveState();
      toast('✅ Database imported — '+file.name);
      superNav(document.querySelector('.ni[data-sp].active')?.dataset.sp||'platform-dashboard');
    }catch(e){
      toast('⚠️ Invalid database file');
    }
    ev.target.value='';
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsText(file);
}

function spgDashboard(){
  const schools=S.platform.schools,users=S.platform.users;
  const active=schools.filter(s=>s.status==='active').length;
  const paused=schools.filter(s=>s.status==='paused').length;
  const totStudents=schools.reduce((a,s)=>a+s.students,0);
  spgSet(`
    <div class="sg">
      <div class="sc"><div class="si" style="background:#dbeafe">🏫</div><div class="sv">${schools.length}</div><div class="sl">Total schools</div></div>
      <div class="sc"><div class="si" style="background:#dcfce7">✅</div><div class="sv">${active}</div><div class="sl">Active schools</div></div>
      <div class="sc"><div class="si" style="background:#fee2e2">⏸️</div><div class="sv">${paused}</div><div class="sl">Paused schools</div></div>
      <div class="sc"><div class="si" style="background:#ede9fe">🎓</div><div class="sv">${totStudents.toLocaleString()}</div><div class="sl">Students across platform</div></div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <div class="ch"><div class="ct">Schools</div><span class="bd bdb">${users.length} users</span></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>School</th><th>Admin</th><th>Students</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${schools.map(s=>`<tr>
          <td style="font-weight:600">${s.name}</td>
          <td>${s.admin}</td>
          <td>${s.students}</td>
          <td><span class="bd ${s.status==='active'?'bdg':'bdr'}">${s.status==='active'?'Active':'Paused'}</span></td>
          <td><button class="btn ${s.status==='active'?'bo':'bg_'} bsm" onclick="togglePlatformSchool('${s.id}')" style="margin-right:4px">${s.status==='active'?'⏸️ Pause':'▶️ Resume'}</button><button class="btn br bsm" onclick="removePlatformSchool('${s.id}')">🗑️ Remove</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>
    </div>
  `);
}

function pwCell(pw){
  const safe=String(pw||'').replace(/'/g,"\\'");
  return `<button class="btn bo bsm" style="font-family:monospace" onclick="this.textContent=this.textContent==='••••••••'?'${safe}':'••••••••'">••••••••</button>`;
}
function spgSchools(){
  const schools=S.platform.schools;
  spgSet(`
    <div class="card">
      <div class="ch"><div class="ct">All schools</div><span class="bd bdb">${schools.length} total</span></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>School</th><th>Type</th><th>Admin</th><th>Username</th><th>Password</th><th>Students</th><th>Teachers</th><th>Joined</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${schools.map(s=>`<tr>
          <td style="font-weight:600">${s.name}</td>
          <td>${s.type}</td>
          <td>${s.admin}</td>
          <td>${s.email}</td>
          <td>${pwCell(s.password)}</td>
          <td>${s.students}</td>
          <td>${s.teachers}</td>
          <td>${s.joined}</td>
          <td><span class="bd ${s.status==='active'?'bdg':'bdr'}">${s.status==='active'?'Active':'Paused'}</span></td>
          <td><button class="btn ${s.status==='active'?'bo':'bg_'} bsm" onclick="togglePlatformSchool('${s.id}')" style="margin-right:4px">${s.status==='active'?'⏸️ Pause':'▶️ Resume'}</button><button class="btn br bsm" onclick="removePlatformSchool('${s.id}')">🗑️ Remove</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>
    </div>
  `);
}

function spgUsers(){
  const users=S.platform.users;
  spgSet(`
    <div class="card">
      <div class="ch"><div class="ct">All users</div><span class="bd bdb">${users.length} total</span></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Name</th><th>School</th><th>Role</th><th>Username</th><th>Password</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${users.map(u=>`<tr>
          <td style="font-weight:600">${u.name}</td>
          <td>${u.school}</td>
          <td style="text-transform:capitalize">${u.role}</td>
          <td>${u.email}</td>
          <td>${pwCell(u.password)}</td>
          <td><span class="bd ${u.status==='active'?'bdg':'bdr'}">${u.status==='active'?'Active':'Paused'}</span></td>
          <td><button class="btn ${u.status==='active'?'bo':'bg_'} bsm" onclick="togglePlatformUser('${u.id}')" style="margin-right:4px">${u.status==='active'?'⏸️ Pause':'▶️ Resume'}</button><button class="btn br bsm" onclick="removePlatformUser('${u.id}')">🗑️ Remove</button></td>
        </tr>`).join('')}</tbody>
      </table></div></div>
    </div>
  `);
}

function togglePlatformSchool(id){
  const s=S.platform.schools.find(x=>x.id===id);if(!s)return;
  s.status=s.status==='active'?'paused':'active';
  saveState();
  toast((s.status==='active'?'▶️ Resumed ':'⏸️ Paused ')+s.name);
  superNav(document.querySelector('.ni[data-sp].active')?.dataset.sp||'platform-dashboard');
}
function togglePlatformUser(id){
  const u=S.platform.users.find(x=>x.id===id);if(!u)return;
  u.status=u.status==='active'?'paused':'active';
  saveState();
  toast((u.status==='active'?'▶️ Resumed ':'⏸️ Paused ')+u.name);
  superNav(document.querySelector('.ni[data-sp].active')?.dataset.sp||'platform-dashboard');
}
function removePlatformSchool(id){
  const s=S.platform.schools.find(x=>x.id===id);if(!s)return;
  if(!confirm(`Permanently remove "${s.name}" from the platform? This also removes its users. This cannot be undone.`))return;
  S.platform.schools=S.platform.schools.filter(x=>x.id!==id);
  S.platform.users=S.platform.users.filter(u=>u.school!==s.name);
  saveState();
  toast('🗑️ Removed '+s.name);
  superNav(document.querySelector('.ni[data-sp].active')?.dataset.sp||'platform-dashboard');
}
function removePlatformUser(id){
  const u=S.platform.users.find(x=>x.id===id);if(!u)return;
  if(!confirm(`Permanently remove user "${u.name}"? This cannot be undone.`))return;
  S.platform.users=S.platform.users.filter(x=>x.id!==id);
  saveState();
  toast('🗑️ Removed '+u.name);
  superNav(document.querySelector('.ni[data-sp].active')?.dataset.sp||'platform-dashboard');
}

function boot(){
  document.getElementById('authWrap').style.display='none';
  document.getElementById('appWrap').classList.remove('hidden');
  document.getElementById('sbSchool').textContent=S.school.name;
  document.getElementById('sbType').textContent=S.school.type;
  document.getElementById('sbName').textContent=S.auth.name;
  document.getElementById('sbRole').textContent=S.auth.role==='admin'?'Administrator':S.auth.role==='principal'?'Principal':S.auth.role==='teacher'?'Teacher':'Accountant';
  document.getElementById('sbInitials').textContent=S.auth.name.split(' ').filter(Boolean).map(w=>w[0]).join('').toUpperCase().slice(0,2);
  // restrict nav by role (reset first so a previous session's role doesn't leak into this one)
  document.querySelectorAll('.ni[data-p]').forEach(el=>el.style.display='');
  if(S.auth.role==='teacher'){
    document.querySelectorAll('.ni[data-p="salary"],[data-p="expenses"],[data-p="users"],[data-p="fees"],[data-p="teachers"],[data-p="school"],[data-p="reports"]').forEach(el=>el.style.display='none');
  } else if(S.auth.role==='accountant'){
    document.querySelectorAll('.ni[data-p="timetable"],[data-p="attendance"],[data-p="exams"],[data-p="classes"],[data-p="users"],[data-p="homework"],[data-p="school"]').forEach(el=>el.style.display='none');
  } else if(S.auth.role==='principal'){
    document.querySelectorAll('.ni[data-p="fees"],[data-p="salary"],[data-p="expenses"],[data-p="users"],[data-p="school"]').forEach(el=>el.style.display='none');
  }
  nav('dashboard');
}

function logout(){
  S.auth=null;
  document.getElementById('appWrap').classList.add('hidden');
  document.getElementById('authWrap').style.display='flex';
  initAuth();
}

// ── NAV ──
document.querySelectorAll('.ni').forEach(el=>{
  el.addEventListener('click',()=>nav(el.dataset.p));
});
const pageTitles={dashboard:'Dashboard',classes:'Classes',timetable:'Timetable',attendance:'Attendance',exams:'Exams & results',students:'Students',fees:'Fee management',teachers:'Teachers',salary:'Salary management',notices:'Notice board',expenses:'Expenses',users:'User roles',school:'School profile',reports:'Reports','pending-fees':'Pending fees',homework:'Homework & assignments'};

function nav(p){
  S.page=p;
  document.querySelectorAll('.ni').forEach(el=>el.classList.toggle('active',el.dataset.p===p));
  document.getElementById('pgTitle').textContent=pageTitles[p]||p;
  document.getElementById('pgActs').innerHTML='';
  ({dashboard:pgDash,classes:pgClasses,timetable:pgTimetable,attendance:pgAttendance,exams:pgExams,students:pgStudents,fees:pgFees,teachers:pgTeachers,salary:pgSalary,notices:pgNotices,expenses:pgExpenses,users:pgUsers,school:pgSchool,reports:pgReports,'pending-fees':pgPendingFees,homework:pgHomework}[p]||pgDash)();
}

// ─────────────── DASHBOARD ───────────────
function pgDash(){
  const totFee=S.feeRecs.filter(f=>f.status==='Paid').reduce((a,b)=>a+b.amount,0);
  const pending=S.students.reduce((a,s)=>a+s.bal,0);
  const salBill=S.teachers.filter(t=>t.status==='Active').reduce((a,t)=>a+(t.basic+t.allow-t.ded),0);
  const attToday=Object.keys(S.attendance).length;
  const pendStudents=S.students.filter(s=>s.bal>0);
  const canSeeFees=['admin','accountant','principal'].includes(S.auth?.role);
  set(`
    <div class="sg">
      <div class="sc"><div class="si" style="background:#dbeafe">🎓</div><div class="sv">${S.students.length}</div><div class="sl">Students enrolled</div><div class="st tu">↑ ${S.students.filter(s=>s.status==='Active').length} active</div></div>
      <div class="sc"><div class="si" style="background:#dcfce7">👩‍🏫</div><div class="sv">${S.teachers.length}</div><div class="sl">Teaching staff</div><div class="st tu">↑ ${S.teachers.filter(t=>t.status==='Active').length} active</div></div>
      <div class="sc"><div class="si" style="background:#fef3c7">💳</div><div class="sv">₨${Math.round(totFee/1000)}K</div><div class="sl">Fee collected</div><div class="st ${pending>0?'td':'tu'}">₨${Math.round(pending/1000)}K pending</div></div>
      <div class="sc"><div class="si" style="background:#ede9fe">💰</div><div class="sv">₨${Math.round(salBill/1000)}K</div><div class="sl">Monthly salaries</div><div class="st td">Monthly outflow</div></div>
      ${canSeeFees?`<div class="sc" style="cursor:pointer;border:1px solid var(--red)" onclick="nav('pending-fees')"><div class="si" style="background:#fee2e2">⏳</div><div class="sv">${pendStudents.length}</div><div class="sl">Pending fees</div><div class="st td">₨${pending.toLocaleString()} due — view list →</div></div>`:''}
    </div>
    <div class="qa-g">
      <div class="qa" onclick="nav('students')"><div class="qa-ic">🎓</div><div class="qa-lb">Add student</div></div>
      <div class="qa" onclick="nav('fees')"><div class="qa-ic">💳</div><div class="qa-lb">Collect fee</div></div>
      <div class="qa" onclick="nav('attendance')"><div class="qa-ic">✅</div><div class="qa-lb">Mark attendance</div></div>
      <div class="qa" onclick="nav('exams')"><div class="qa-ic">📝</div><div class="qa-lb">Enter results</div></div>
      <div class="qa" onclick="nav('notices')"><div class="qa-ic">📢</div><div class="qa-lb">Post notice</div></div>
      <div class="qa" onclick="nav('timetable')"><div class="qa-ic">🗓️</div><div class="qa-lb">View timetable</div></div>
      <div class="qa" onclick="nav('salary')"><div class="qa-ic">💰</div><div class="qa-lb">Pay salaries</div></div>
      <div class="qa" onclick="nav('reports')"><div class="qa-ic">📋</div><div class="qa-lb">Reports</div></div>
    </div>
    <div class="g2">
      <div class="card">
        <div class="ch"><div class="ct">Recent notices</div><a onclick="nav('notices')" style="font-size:12px;color:var(--accent);cursor:pointer">View all</a></div>
        <div class="cb" style="padding:0">
          ${S.notices.slice(0,3).map(n=>`<div style="padding:.75rem 1rem;border-bottom:1px solid var(--border);display:flex;gap:10px;align-items:flex-start">
            <div style="width:8px;height:8px;border-radius:50%;background:${n.type==='urgent'?'var(--red)':n.type==='event'?'var(--green)':'var(--accent)'};margin-top:5px;flex-shrink:0"></div>
            <div><div style="font-size:13px;font-weight:500">${n.title}</div><div style="font-size:11.5px;color:var(--txts)">${n.date} · ${n.author}</div></div>
            ${n.pinned?'<span class="bd bdr" style="margin-left:auto;flex-shrink:0">Pinned</span>':''}
          </div>`).join('')}
        </div>
      </div>
      <div class="card">
        <div class="ch"><div class="ct">Fee defaulters</div><span class="bd bdr">${S.students.filter(s=>s.bal>0).length} students</span></div>
        <div class="cb" style="padding:0">
          <div class="tw"><table>
            <thead><tr><th>Student</th><th>Class</th><th>Due</th></tr></thead>
            <tbody>${S.students.filter(s=>s.bal>0).map(s=>`<tr>
              <td><span class="av">${s.name[0]}</span>${s.name}</td>
              <td>${s.cls}</td>
              <td style="color:var(--red);font-weight:600">₨${s.bal.toLocaleString()}</td>
            </tr>`).join('')||'<tr><td colspan="3" style="text-align:center;padding:1.5rem;color:var(--txtx)">All fees cleared ✅</td></tr>'}</tbody>
          </table></div>
        </div>
      </div>
    </div>
  `);
}

// ─────────────── CLASSES ───────────────
function pgClasses(){
  acts(`<button class="btn bp" onclick="openAddClass()">+ Add class</button>`);
  set(`<div class="card">
    <div class="ch"><div class="ct">All classes (${S.classes.length})</div></div>
    <div class="cb" style="padding:0"><div class="tw"><table>
      <thead><tr><th>Class</th><th>Grade</th><th>Class teacher</th><th>Room</th><th>Students</th><th>Actions</th></tr></thead>
      <tbody>${S.classes.map(c=>{
        const t=S.teachers.find(x=>x.id===c.teacher);
        return`<tr>
          <td style="font-weight:700;font-size:15px">${c.name}</td>
          <td>${c.grade}</td>
          <td>${t?t.name:'Not assigned'}</td>
          <td>Room ${c.room}</td>
          <td><span class="bd bdb">${c.students} students</span></td>
          <td>
            <button class="btn bo bsm" onclick="nav('timetable')" style="margin-right:4px">Timetable</button>
            <button class="btn br bsm" onclick="delClass('${c.id}')">Delete</button>
          </td>
        </tr>`;
      }).join('')||'<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--txtx)">No classes added</td></tr>'}</tbody>
    </table></div></div>
  </div>`);
}
function openAddClass(){
  modal(`<div class="moh"><div class="mot">Add new class</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Class name *</label><input id="cn" placeholder="e.g. 10-A"/></div><div class="fg"><label>Grade</label><input id="cg" placeholder="Grade 10"/></div></div>
    <div class="fr"><div class="fg"><label>Class teacher</label><select id="ct_">${S.teachers.map(t=>`<option value="${t.id}">${t.name}</option>`).join('')}</select></div><div class="fg"><label>Room no.</label><input id="cr" placeholder="101"/></div></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveClass()">Save class</button></div>`);
}
function saveClass(){
  const n=v('cn'),g=v('cg');
  if(!n)return toast('⚠️ Class name required');
  S.classes.push({id:'C'+Date.now(),name:n,grade:g||n,teacher:v('ct_'),room:v('cr'),students:0});
  cm();pgClasses();toast('✅ Class added');
}
function delClass(id){
  if(!confirm('Delete this class?'))return;
  S.classes=S.classes.filter(c=>c.id!==id);pgClasses();toast('🗑️ Class deleted');
}

// ─────────────── TIMETABLE ───────────────
function pgTimetable(){
  const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const periods=['Period 1\n8:00–9:00','Period 2\n9:00–10:00','Period 3\n10:30–11:30','Period 4\n11:30–12:30','Period 5\n1:00–2:00'];
  const cls=S.classes.length?S.classes[0].name:'10-A';
  const tt=S.timetable[cls]||Array(5).fill(Array(5).fill('—'));
  const colors=['#dbeafe','#dcfce7','#ede9fe','#fef3c7','#fee2e2','#ccfbf1','#fce7f3'];
  const subColors={Math:'#dbeafe',English:'#dcfce7',Physics:'#ede9fe',Urdu:'#fef3c7',Chemistry:'#fee2e2',Biology:'#ccfbf1',Computer:'#fce7f3'};
  acts(`<button class="btn bp" onclick="toast('🗓️ Timetable editing coming in next update')">✏️ Edit timetable</button>`);
  set(`
    <div class="card mb2">
      <div class="ch">
        <div class="ct">Weekly timetable</div>
        <select onchange="changeTT(this.value)" style="padding:5px 10px;border:1px solid var(--borderS);border-radius:6px;font-size:13px;font-family:inherit">
          ${S.classes.map(c=>`<option value="${c.name}">${c.name}</option>`).join('')||'<option>10-A</option>'}
        </select>
      </div>
      <div class="cb">
        <div class="tt" id="ttGrid">
          <div class="tth" style="padding:10px">Period / Day</div>
          ${days.map(d=>`<div class="tth">${d}</div>`).join('')}
          ${periods.map((p,pi)=>`
            <div class="tttime">${p.replace('\n','<br>')}</div>
            ${days.map((d,di)=>{
              const sub=(tt[pi]&&tt[pi][di])||'Free';
              const bg=subColors[sub]||'#f3f4f6';
              return`<div class="ttc"><div class="ttp" style="background:${bg}">${sub}</div></div>`;
            }).join('')}
          `).join('')}
        </div>
      </div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Subject colour legend</div></div>
      <div class="cb"><div class="flex" style="flex-wrap:wrap;gap:8px">
        ${Object.entries(subColors).map(([s,c])=>`<div style="display:flex;align-items:center;gap:5px"><div style="width:14px;height:14px;border-radius:4px;background:${c}"></div><span style="font-size:12px">${s}</span></div>`).join('')}
      </div></div>
    </div>
  `);
}
window.changeTT=function(cls){
  nav('timetable');
};

// ─────────────── ATTENDANCE ───────────────
function pgAttendance(){
  const today=new Date().toISOString().split('T')[0];
  const clsList=[...new Set(S.students.map(s=>s.cls))].sort();
  let selCls=clsList[0]||'10-A';
  acts(`<button class="btn bp" onclick="saveAttendance()">Save attendance</button>`);

  function drawAtt(cls){
    const stInCls=S.students.filter(s=>s.cls===cls);
    const key=`${today}_${cls}`;
    const rec=S.attendance[key]||{};
    document.getElementById('attBody').innerHTML=`
      <div class="tw"><table>
        <thead><tr><th>Roll no.</th><th>Student</th><th>Status</th></tr></thead>
        <tbody>${stInCls.map(st=>`<tr>
          <td>${st.roll}</td>
          <td><span class="av">${st.name[0]}</span>${st.name}</td>
          <td>
            <div class="flex gap1">
              ${['P','A','L'].map(s=>`<button class="btn bsm att-btn" data-id="${st.id}" data-s="${s}" onclick="setAtt('${st.id}','${s}','${cls}')"
                style="background:${rec[st.id]===s?(s==='P'?'var(--green)':s==='A'?'var(--red)':'var(--amber)'):'#f3f4f6'};color:${rec[st.id]===s?'#fff':'var(--txts)'}">
                ${s==='P'?'Present':s==='A'?'Absent':'Leave'}
              </button>`).join('')}
            </div>
          </td>
        </tr>`).join('')||'<tr><td colspan="3" style="text-align:center;padding:2rem;color:var(--txtx)">No students in this class</td></tr>'}</tbody>
      </table></div>
      <div style="margin-top:1rem;padding:.75rem;background:var(--bg);border-radius:8px;font-size:13px">
        <strong>Summary:</strong> 
        Present: <span style="color:var(--green);font-weight:600">${Object.values(rec).filter(v=>v==='P').length}</span> · 
        Absent: <span style="color:var(--red);font-weight:600">${Object.values(rec).filter(v=>v==='A').length}</span> · 
        Leave: <span style="color:var(--amber);font-weight:600">${Object.values(rec).filter(v=>v==='L').length}</span> · 
        Not marked: <span style="color:var(--txts);font-weight:600">${stInCls.length-Object.keys(rec).length}</span>
      </div>`;
  }

  set(`
    <div class="g2 mb2">
      <div class="card">
        <div class="ch">
          <div class="ct">Mark attendance — ${today}</div>
          <select id="clsSel" onchange="selCls=this.value;drawAtt(this.value)" style="padding:5px 10px;border:1px solid var(--borderS);border-radius:6px;font-size:13px;font-family:inherit">
            ${clsList.map(c=>`<option>${c}</option>`).join('')||'<option>10-A</option>'}
          </select>
        </div>
        <div class="cb" id="attBody"></div>
      </div>
      <div class="card">
        <div class="ch"><div class="ct">Attendance calendar — ${selCls}</div></div>
        <div class="cb">
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:6px">
            ${['S','M','T','W','T','F','S'].map(d=>`<div style="text-align:center;font-size:11px;font-weight:600;color:var(--txts);padding:3px">${d}</div>`).join('')}
          </div>
          <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px">
            ${Array.from({length:31},(_,i)=>{
              const d=i+1;
              const cls_=d<=15?'att-P':d<=20?'att-A':d>28?'att-H':'att-none';
              return`<div class="att-day ${cls_}" title="Jan ${d}">${d}</div>`;
            }).join('')}
          </div>
          <div class="flex gap1" style="margin-top:.75rem;flex-wrap:wrap">
            ${[['att-P','Present'],['att-A','Absent'],['att-L','Leave'],['att-H','Holiday'],['att-none','No data']].map(([c,l])=>`<div class="flex ic gap1"><div class="att-day ${c}" style="width:18px;height:18px;font-size:9px;pointer-events:none"></div><span style="font-size:11px">${l}</span></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Monthly attendance report</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Student</th><th>Class</th><th>Present</th><th>Absent</th><th>Leave</th><th>Attendance %</th></tr></thead>
        <tbody>${S.students.map(s=>{
          const p=Math.floor(Math.random()*5+20);const a=Math.floor(Math.random()*3);const l=Math.floor(Math.random()*2);
          const pct=Math.round((p/(p+a+l))*100);
          return`<tr>
            <td><span class="av">${s.name[0]}</span>${s.name}</td>
            <td>${s.cls}</td>
            <td style="color:var(--green);font-weight:600">${p}</td>
            <td style="color:var(--red);font-weight:600">${a}</td>
            <td style="color:var(--amber);font-weight:600">${l}</td>
            <td><div class="flex ic gap1"><div style="flex:1;background:var(--border);border-radius:3px;height:5px"><div style="width:${pct}%;background:${pct>=90?'var(--green)':pct>=75?'var(--amber)':'var(--red)'};height:100%;border-radius:3px"></div></div><span style="font-size:12px;font-weight:600;min-width:32px">${pct}%</span></div></td>
          </tr>`;
        }).join('')||'<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--txtx)">No student data</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
  drawAtt(selCls);
  window.selCls=selCls;
  window.drawAtt=drawAtt;
}

window.setAtt=function(sid,status,cls){
  const today=new Date().toISOString().split('T')[0];
  const key=`${today}_${cls}`;
  if(!S.attendance[key])S.attendance[key]={};
  S.attendance[key][sid]=status;
  if(window.drawAtt)window.drawAtt(cls);
};
window.saveAttendance=function(){toast('✅ Attendance saved for today');};

// ─────────────── EXAMS ───────────────
function pgExams(){
  acts(`<button class="btn bp" onclick="openAddExam()">+ Create exam</button>`);
  function grade(m,t){const p=Math.round((m/t)*100);return p>=90?'A+':p>=80?'A':p>=70?'B+':p>=60?'B':p>=50?'C':'F';}
  set(`
    <div class="g2 mb2">
      ${S.exams.map(ex=>`
        <div class="card">
          <div class="ch">
            <div><div class="ct">${ex.title}</div><div style="font-size:11.5px;color:var(--txts)">${ex.cls} · ${ex.date} · Total: ${ex.totalMarks} marks</div></div>
            <button class="btn ba bsm" onclick="openEnterMarks('${ex.id}')">Enter marks</button>
          </div>
          <div class="cb" style="padding:0"><div class="tw"><table>
            <thead><tr><th>Student</th><th>Marks</th><th>Grade</th><th>%</th></tr></thead>
            <tbody>${Object.entries(ex.results).map(([sid,marks])=>{
              const st=S.students.find(x=>x.id===sid);
              const g=grade(marks,ex.totalMarks);
              const pct=Math.round((marks/ex.totalMarks)*100);
              return`<tr>
                <td>${st?st.name:sid}</td>
                <td>${marks}/${ex.totalMarks}</td>
                <td class="grade-${g.replace('+','')}">${g}</td>
                <td>${pct}%</td>
              </tr>`;
            }).join('')||'<tr><td colspan="4" style="text-align:center;padding:1.5rem;color:var(--txtx)">No results entered</td></tr>'}</tbody>
          </table></div></div>
        </div>
      `).join('')||'<div class="card cb" style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--txtx)">No exams created yet</div>'}
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Generate report card</div></div>
      <div class="cb">
        <div class="flex gap1 mb2">
          <select id="rcSel" style="padding:7px 11px;border:1px solid var(--borderS);border-radius:8px;font-size:13px;font-family:inherit">
            ${S.students.map(s=>`<option value="${s.id}">${s.name} (${s.cls})</option>`).join('') }
          </select>
          <button class="btn ba" onclick="showReportCard(document.getElementById('rcSel').value)">Generate report card</button>
        </div>
      </div>
    </div>
  `);
}

function openAddExam(){
  modal(`<div class="moh"><div class="mot">Create exam</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Exam title *</label><input id="et" placeholder="e.g. Mid-Term Exam"/></div><div class="fg"><label>Class *</label><select id="ec">${[...new Set(S.students.map(s=>s.cls))].sort().map(c=>`<option>${c}</option>`).join('')||'<option>10-A</option>'}</select></div></div>
    <div class="fr"><div class="fg"><label>Date</label><input type="date" id="ed"/></div><div class="fg"><label>Total marks</label><input type="number" id="em" value="100"/></div></div>
    <div class="fg"><label>Subject</label><input id="es" placeholder="e.g. Mathematics"/></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveExam()">Create exam</button></div>`);
}
function saveExam(){
  const t=v('et');if(!t)return toast('⚠️ Title required');
  S.exams.push({id:'E'+Date.now(),title:t,cls:v('ec'),date:v('ed'),totalMarks:parseInt(v('em'))||100,subject:v('es'),results:{}});
  cm();pgExams();toast('✅ Exam created');
}
function openEnterMarks(eid){
  const ex=S.exams.find(e=>e.id===eid);if(!ex)return;
  const stInCls=S.students.filter(s=>s.cls===ex.cls);
  modal(`<div class="moh"><div class="mot">Enter marks — ${ex.title}</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="inf">Total marks: ${ex.totalMarks} · Class: ${ex.cls}</div>
    ${stInCls.map(s=>`<div class="fg"><label>${s.name} (Roll: ${s.roll})</label><input type="number" id="m_${s.id}" value="${ex.results[s.id]||''}" min="0" max="${ex.totalMarks}" placeholder="Out of ${ex.totalMarks}"/></div>`).join('')||'<p style="color:var(--txts)">No students in this class</p>'}
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveMarks('${eid}')">Save marks</button></div>`);
}
function saveMarks(eid){
  const ex=S.exams.find(e=>e.id===eid);if(!ex)return;
  S.students.filter(s=>s.cls===ex.cls).forEach(s=>{
    const val=document.getElementById('m_'+s.id)?.value;
    if(val!==''&&val!==undefined)ex.results[s.id]=parseInt(val)||0;
  });
  cm();pgExams();toast('✅ Marks saved');
}
function showReportCard(sid){
  const s=S.students.find(x=>x.id===sid);if(!s)return;
  const exForCls=S.exams.filter(e=>e.cls===s.cls&&e.results[sid]!==undefined);
  function grade(m,t){const p=Math.round((m/t)*100);return p>=90?'A+':p>=80?'A':p>=70?'B+':p>=60?'B':p>=50?'C':'F';}
  const totalObt=exForCls.reduce((a,e)=>a+(e.results[sid]||0),0);
  const totalMax=exForCls.reduce((a,e)=>a+e.totalMarks,0);
  modal(`<div class="moh"><div class="mot">Report card</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="rc print-area">
      <div class="rc-head">
        <div class="rc-school">${S.school.name}</div>
        <div class="sl-sub">${S.school.addr||''}</div>
        <div class="rc-title" style="margin-top:6px">STUDENT REPORT CARD — SESSION ${s.session}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:13px;margin-bottom:1rem">
        <div><span style="color:var(--txts)">Name:</span><br><strong>${s.name}</strong></div>
        <div><span style="color:var(--txts)">Class:</span><br><strong>${s.cls}</strong></div>
        <div><span style="color:var(--txts)">Roll no.:</span><br><strong>${s.roll}</strong></div>
        <div><span style="color:var(--txts)">Session:</span><br><strong>${s.session}</strong></div>
      </div>
      <table style="width:100%;font-size:13px;border-collapse:collapse">
        <thead><tr style="background:var(--bg)"><th style="padding:7px;text-align:left;border-bottom:1px solid var(--border)">Exam</th><th style="padding:7px;text-align:center;border-bottom:1px solid var(--border)">Marks</th><th style="padding:7px;text-align:center;border-bottom:1px solid var(--border)">Grade</th></tr></thead>
        <tbody>${exForCls.map(e=>{const m=e.results[sid];const g=grade(m,e.totalMarks);return`<tr><td style="padding:7px;border-bottom:1px solid var(--border)">${e.title}</td><td style="padding:7px;text-align:center;border-bottom:1px solid var(--border)">${m}/${e.totalMarks}</td><td style="padding:7px;text-align:center;border-bottom:1px solid var(--border)" class="grade-${g.replace('+','')}">${g}</td></tr>`;}).join('')||'<tr><td colspan="3" style="padding:1rem;text-align:center;color:var(--txts)">No exam results available</td></tr>'}</tbody>
      </table>
      ${totalMax>0?`<div style="display:flex;justify-content:space-between;font-weight:700;padding:.75rem 7px;border-top:2px solid var(--navy);margin-top:4px"><span>Overall</span><span>${totalObt}/${totalMax} — ${grade(totalObt,totalMax)}</span></div>`:''}
      <div style="text-align:center;font-size:11px;color:var(--txtx);margin-top:1rem">Generated on ${new Date().toLocaleDateString()} · ${S.school.name}</div>
    </div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print</button></div>`);
}

// ─────────────── STUDENTS ───────────────
function pgStudents(){
  acts(`<input type="file" id="stImportInput" accept=".csv,.xlsx,.xls" style="display:none" onchange="importStudentsFile(event)"/>
    <button class="btn bo" onclick="document.getElementById('stImportInput').click()" style="margin-right:6px">⬆️ Import (CSV/Excel)</button>
    <div class="dd" style="display:inline-block;position:relative;margin-right:6px">
      <button class="btn bo" onclick="toggleDD('stExpDD')">⬇️ Export ▾</button>
      <div id="stExpDD" class="dd-menu hidden">
        <div onclick="exportStudentsCSV();toggleDD('stExpDD')">📄 Export as CSV</div>
        <div onclick="exportStudentsExcel();toggleDD('stExpDD')">📊 Export as Excel</div>
      </div>
    </div>
    <button class="btn bp" onclick="openAddStudent()">+ Add student</button>`);
  function draw(f=''){
    const fi=S.students.filter(s=>s.name.toLowerCase().includes(f)||s.cls.toLowerCase().includes(f)||s.id.toLowerCase().includes(f));
    document.getElementById('stBody').innerHTML=fi.map(s=>`<tr>
      <td><span class="av">${s.name[0]}</span><strong>${s.name}</strong><br><small style="color:var(--txtx)">${s.id}</small></td>
      <td>${s.cls}</td><td>${s.roll}</td>
      <td>${s.guardian}<br><small style="color:var(--txtx)">${s.phone}</small></td>
      <td><span class="bd bd${s.bal===0?'g':s.paid>0?'a':'r'}">₨${s.bal.toLocaleString()} due</span></td>
      <td><span class="bd bdb">${s.status}</span></td>
      <td><button class="btn bo bsm" onclick="viewSt('${s.id}')" style="margin-right:4px">View</button><button class="btn bpu bsm" onclick="openCertModal('student','${s.id}')" style="margin-right:4px">🏆 Certificate</button><button class="btn br bsm" onclick="delSt('${s.id}')">Del</button></td>
    </tr>`).join('')||'<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--txtx)">No students found</td></tr>';
  }
  set(`<div class="card">
    <div class="ch"><div class="ct">All students (${S.students.length})</div>
      <div class="sb_" style="width:240px">🔍 <input placeholder="Search by name, class or ID…" id="stSrch"/></div>
    </div>
    <div class="cb" style="padding:0"><div class="tw"><table>
      <thead><tr><th>Student</th><th>Class</th><th>Roll</th><th>Guardian</th><th>Fee status</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody id="stBody"></tbody>
    </table></div></div>
  </div>`);
  document.getElementById('stSrch').addEventListener('input',function(){draw(this.value.toLowerCase())});
  draw();
}
function openAddStudent(){
  modal(`<div class="moh"><div class="mot">Add new student</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Full name *</label><input id="stn"/></div><div class="fg"><label>Roll number *</label><input id="str"/></div></div>
    <div class="fr"><div class="fg"><label>Class *</label><select id="stc">${[...new Set([...S.classes.map(c=>c.name),'6-A','7-A','8-A','9-A','9-B','10-A','10-B'])].map(c=>`<option>${c}</option>`).join('')}</select></div><div class="fg"><label>Gender</label><select id="stg"><option>Male</option><option>Female</option></select></div></div>
    <div class="fr"><div class="fg"><label>Date of birth</label><input type="date" id="std"/></div><div class="fg"><label>Session</label><input id="stse" value="2024-25"/></div></div>
    <div class="fg"><label>Guardian name *</label><input id="stgu" placeholder="Parent/Guardian"/></div>
    <div class="fr"><div class="fg"><label>Phone</label><input id="stph" placeholder="03XX-XXXXXXX"/></div><div class="fg"><label>Annual fee (₨)</label><input type="number" id="stfe" placeholder="25000"/></div></div>
    <div class="fg"><label>Address</label><input id="stad" placeholder="Home address"/></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveSt()">Save student</button></div>`);
}
function saveSt(){
  const n=v('stn'),r=v('str'),g=v('stgu');
  if(!n||!r||!g)return toast('⚠️ Fill required fields');
  const fee=parseInt(v('stfe'))||0;
  const id='S'+String(Date.now()).slice(-4);
  const stu={id,name:n,cls:v('stc'),roll:r,gender:v('stg'),dob:v('std'),session:v('stse'),guardian:g,phone:v('stph'),addr:v('stad'),status:'Active',fee,paid:0,bal:fee,adm:new Date().toISOString().split('T')[0],dueDate:new Date(Date.now()+30*86400000).toISOString().split('T')[0]};
  S.students.push(stu);
  createParentAccount(stu);
  cm();pgStudents();toast('✅ Student added — parent login created');
}
function createParentAccount(stu){
  if(S.parents.some(p=>p.studentId===stu.id))return;
  const pass='parent'+Math.floor(1000+Math.random()*9000);
  S.parents.push({
    id:'PAR-'+stu.id,
    studentId:stu.id,
    name:stu.guardian||'Parent/Guardian',
    email:'parent.'+stu.id.toLowerCase()+'@'+(S.school?.email?.split('@')[1]||'school.edu'),
    password:pass,
    status:'active'
  });
}
function viewSt(id){
  const s=S.students.find(x=>x.id===id);if(!s)return;
  const recs=S.feeRecs.filter(f=>f.sid===id);
  if(!S.parents.some(p=>p.studentId===id))createParentAccount(s);
  const par=S.parents.find(p=>p.studentId===id);
  const rmk=S.remarks.filter(r=>r.sid===id).sort((a,b)=>b.date.localeCompare(a.date));
  modal(`<div class="moh"><div class="mot">Student profile</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="phead"><div class="pav">${s.name[0]}</div><div class="pmeta"><h2>${s.name}</h2><p>${s.cls} · Roll ${s.roll} · ${s.session}</p></div><span class="bd bdb">${s.status}</span></div>
    <div class="dg mb2">
      <div class="di"><label>Student ID</label><p>${s.id}</p></div>
      <div class="di"><label>Date of birth</label><p>${s.dob||'N/A'}</p></div>
      <div class="di"><label>Gender</label><p>${s.gender}</p></div>
      <div class="di"><label>Guardian</label><p>${s.guardian}</p></div>
      <div class="di"><label>Phone</label><p>${s.phone||'N/A'}</p></div>
      <div class="di"><label>Admission date</label><p>${s.adm}</p></div>
    </div>
    <div class="fb">
      <div class="fr2"><span>Total annual fee</span><span>₨${s.fee.toLocaleString()}</span></div>
      <div class="fr2"><span>Amount paid</span><span style="color:var(--green)">₨${s.paid.toLocaleString()}</span></div>
      <div class="fr2 tot"><span>Balance due</span><span style="color:${s.bal>0?'var(--red)':'var(--green)'}">₨${s.bal.toLocaleString()}</span></div>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="ch"><div class="ct">Parent portal login</div></div>
      <div class="cb" style="font-size:13px;display:flex;gap:1.5rem;flex-wrap:wrap">
        <div><span style="color:var(--txts)">Username:</span> <strong>${par.email}</strong></div>
        <div><span style="color:var(--txts)">Password:</span> ${pwCell(par.password)}</div>
      </div>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="ch"><div class="ct">Teacher remarks</div></div>
      <div class="cb">
        <div id="rmkList" style="margin-bottom:.75rem">${rmk.map(r=>`<div style="padding:.6rem 0;border-bottom:1px solid var(--border)"><div style="font-size:13px">${r.remark}</div><div style="font-size:11px;color:var(--txts);margin-top:2px">— ${r.teacher} · ${r.date}</div></div>`).join('')||'<div style="font-size:13px;color:var(--txtx)">No remarks yet</div>'}</div>
        <div class="fr"><input id="rmkTxt" placeholder="Add a remark…" style="flex:1"/><button class="btn bp bsm" onclick="addRemark('${id}')">Add</button></div>
      </div>
    </div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn ba" onclick="cm();nav('fees')">Collect fee</button><button class="btn bpu" onclick="cm();showReportCard('${id}')">Report card</button><button class="btn bpu" onclick="cm();openCertModal('student','${id}')">🏆 Certificate</button></div>`);
}
function addRemark(sid){
  const txt=v('rmkTxt');
  if(!txt)return toast('⚠️ Enter a remark');
  S.remarks.unshift({id:'R'+Date.now(),sid,teacher:S.auth?.name||'Staff',remark:txt,date:new Date().toISOString().split('T')[0]});
  toast('✅ Remark added');
  viewSt(sid);
}
function delSt(id){if(!confirm('Delete student?'))return;S.students=S.students.filter(s=>s.id!==id);S.parents=S.parents.filter(p=>p.studentId!==id);pgStudents();toast('🗑️ Student deleted');}

// ─────────────── FEES ───────────────
function pgFees(){
  acts(`<button class="btn bp" onclick="openRecFee()">+ Record payment</button>`);
  const totCol=S.feeRecs.filter(f=>f.status==='Paid').reduce((a,b)=>a+b.amount,0);
  const totPen=S.students.reduce((a,s)=>a+s.bal,0);
  set(`
    <div class="sg" style="grid-template-columns:repeat(3,1fr)">
      <div class="sc"><div class="si" style="background:#dcfce7">✅</div><div class="sv">₨${Math.round(totCol/1000)}K</div><div class="sl">Collected</div></div>
      <div class="sc"><div class="si" style="background:#fee2e2">⏳</div><div class="sv">₨${Math.round(totPen/1000)}K</div><div class="sl">Pending</div></div>
      <div class="sc"><div class="si" style="background:#dbeafe">🎓</div><div class="sv">${S.students.filter(s=>s.bal===0).length}/${S.students.length}</div><div class="sl">Cleared</div></div>
    </div>
    <div class="card mb2">
      <div class="ch"><div class="ct">Student fee status</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Student</th><th>Class</th><th>Total</th><th>Paid</th><th>Balance</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${S.students.map(s=>`<tr>
          <td><span class="av">${s.name[0]}</span><strong>${s.name}</strong></td>
          <td>${s.cls}</td>
          <td>₨${s.fee.toLocaleString()}</td>
          <td>₨${s.paid.toLocaleString()}</td>
          <td style="color:${s.bal>0?'var(--red)':'var(--green)'};font-weight:600">₨${s.bal.toLocaleString()}</td>
          <td><span class="bd ${s.bal===0?'bdg':s.paid>0?'bda':'bdr'}">${s.bal===0?'Cleared':s.paid>0?'Partial':'Unpaid'}</span></td>
          <td>${s.bal>0?`<button class="btn ba bsm" onclick="openRecFee('${s.id}')">Collect</button>`:'<span style="color:var(--green);font-size:12px">✓</span>'}</td>
        </tr>`).join('')||'<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--txtx)">No students</td></tr>'}</tbody>
      </table></div></div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Payment records</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Receipt</th><th>Student</th><th>Month</th><th>Amount</th><th>Method</th><th>Date</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${S.feeRecs.map(r=>{const st=S.students.find(s=>s.id===r.sid);return`<tr>
          <td style="font-family:monospace;font-size:12px">${r.rcpt}</td>
          <td>${st?.name||'Unknown'}</td>
          <td>${r.month}</td>
          <td>₨${r.amount.toLocaleString()}</td>
          <td>${r.method}</td>
          <td>${r.date}</td>
          <td><span class="bd ${r.status==='Paid'?'bdg':'bda'}">${r.status}</span></td>
          <td><button class="btn bo bsm" onclick="printRcpt('${r.id}')">🖨️</button></td>
        </tr>`;}).join('')||'<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--txtx)">No records</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}
function openRecFee(pre=''){
  modal(`<div class="moh"><div class="mot">Record fee payment</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fg"><label>Student *</label><select id="fst" onchange="updFeeInfo(this.value)"><option value="">-- Select --</option>${S.students.filter(s=>s.bal>0).map(s=>`<option value="${s.id}" ${s.id===pre?'selected':''}>${s.name} (${s.cls}) — ₨${s.bal.toLocaleString()} due</option>`).join('')}</select></div>
    <div id="feeInfo"></div>
    <div class="fr"><div class="fg"><label>Amount (₨) *</label><input type="number" id="fam" placeholder="Amount"/></div><div class="fg"><label>Month</label><input id="fmo" value="January 2025"/></div></div>
    <div class="fr"><div class="fg"><label>Method</label><select id="fme"><option>Cash</option><option>Bank Transfer</option><option>Online</option><option>Cheque</option></select></div><div class="fg"><label>Date</label><input type="date" id="fdt" value="${new Date().toISOString().split('T')[0]}"/></div></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveFee()">Save & receipt</button></div>`);
  if(pre)setTimeout(()=>updFeeInfo(pre),50);
}
window.updFeeInfo=function(id){
  const s=S.students.find(x=>x.id===id);
  document.getElementById('feeInfo').innerHTML=s?`<div class="inf" style="margin-bottom:.9rem">Balance: <strong>₨${s.bal.toLocaleString()}</strong> · Total: ₨${s.fee.toLocaleString()} · Paid: ₨${s.paid.toLocaleString()}</div>`:'' ;
  if(s)document.getElementById('fam').value=s.bal;
};
function saveFee(){
  const sid=v('fst'),amt=parseInt(v('fam'));
  if(!sid)return toast('⚠️ Select a student');
  if(!amt||amt<=0)return toast('⚠️ Enter valid amount');
  const s=S.students.find(x=>x.id===sid);
  const rcpt='REC-'+String(S.feeRecs.length+1).padStart(3,'0');
  const rec={id:'F'+Date.now(),sid,month:v('fmo'),amount:amt,date:v('fdt'),method:v('fme'),status:amt>=s.bal?'Paid':'Partial',rcpt};
  S.feeRecs.push(rec);s.paid+=amt;s.bal=Math.max(0,s.bal-amt);
  cm();printRcpt(rec.id);pgFees();
}
function printRcpt(id){
  const r=S.feeRecs.find(x=>x.id===id);if(!r)return;
  const s=S.students.find(x=>x.id===r.sid);
  modal(`<div class="moh"><div class="mot">Fee receipt</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob"><div class="slip print-area">
    <div class="sl-h"><div class="sl-sch">${S.school.name}</div><div class="sl-sub">${S.school.addr||''}</div><div class="sl-sub" style="font-weight:700;margin-top:4px">FEE RECEIPT</div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:13px;margin-bottom:.9rem">
      <div><span style="color:var(--txts)">Receipt:</span><br><strong>${r.rcpt}</strong></div>
      <div><span style="color:var(--txts)">Date:</span><br><strong>${r.date}</strong></div>
      <div><span style="color:var(--txts)">Student:</span><br><strong>${s?.name||'N/A'}</strong></div>
      <div><span style="color:var(--txts)">Class:</span><br><strong>${s?.cls||'N/A'}</strong></div>
      <div><span style="color:var(--txts)">Month:</span><br><strong>${r.month}</strong></div>
      <div><span style="color:var(--txts)">Method:</span><br><strong>${r.method}</strong></div>
    </div>
    <div class="sl-tot"><span>Amount paid</span><span style="color:var(--green)">₨${r.amount.toLocaleString()}</span></div>
    <div class="sl-r" style="margin-top:.5rem"><span style="color:var(--txts)">Remaining</span><span>₨${s?.bal?.toLocaleString()||0}</span></div>
    <div style="text-align:center;margin-top:1.25rem;font-size:11px;color:var(--txtx)">${S.school.name} · Computer-generated receipt</div>
  </div></div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print</button></div>`);
  toast('✅ Payment recorded · '+r.rcpt);
}

// ─────────────── PENDING FEES (dashboard widget target) ───────────────
function pgPendingFees(){
  acts(`<button class="btn bo" onclick="nav('fees')">← Back to Fee management</button>`);
  const pend=S.students.filter(s=>s.bal>0);
  const totDue=pend.reduce((a,s)=>a+s.bal,0);
  const clsList=[...new Set(pend.map(s=>s.cls))].sort();
  function draw(f='',cls=''){
    let list=pend.filter(s=>s.name.toLowerCase().includes(f)||s.id.toLowerCase().includes(f));
    if(cls)list=list.filter(s=>s.cls===cls);
    document.getElementById('pfBody').innerHTML=list.map(s=>`<tr>
      <td><span class="av">${s.name[0]}</span><strong>${s.name}</strong><br><small style="color:var(--txtx)">${s.id}</small></td>
      <td>${s.cls}</td>
      <td>${s.guardian}<br><small style="color:var(--txtx)">${s.phone||'N/A'}</small></td>
      <td style="color:var(--red);font-weight:700">₨${s.bal.toLocaleString()}</td>
      <td>${s.dueDate||'N/A'}</td>
      <td>
        <button class="btn bo bsm" onclick="viewSt('${s.id}')" style="margin-right:3px">View</button>
        <button class="btn bo bsm" onclick="printChallan('${s.id}')" style="margin-right:3px">🧾 Challan</button>
        <button class="btn ba bsm" onclick="openRecFee('${s.id}')" style="margin-right:3px">💳 Pay</button>
        <button class="btn bpu bsm" onclick="sendReminder('${s.id}')">💬 WhatsApp</button>
      </td>
    </tr>`).join('')||'<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--txtx)">No pending fees found</td></tr>';
  }
  set(`
    <div class="sg" style="grid-template-columns:repeat(3,1fr)">
      <div class="sc"><div class="si" style="background:#fee2e2">⏳</div><div class="sv">${pend.length}</div><div class="sl">Students with pending fees</div></div>
      <div class="sc"><div class="si" style="background:#fee2e2">💸</div><div class="sv">₨${totDue.toLocaleString()}</div><div class="sl">Total amount due</div></div>
      <div class="sc"><div class="si" style="background:#dbeafe">🎓</div><div class="sv">${S.students.length-pend.length}/${S.students.length}</div><div class="sl">Fully cleared</div></div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Pending fees (${pend.length})</div>
        <div class="flex gap1" style="margin-left:auto">
          <select id="pfCls" style="padding:5px 10px;border:1px solid var(--borderS);border-radius:6px;font-size:13px;font-family:inherit">
            <option value="">All classes</option>${clsList.map(c=>`<option>${c}</option>`).join('')}
          </select>
          <div class="sb_" style="width:220px">🔍 <input placeholder="Search by name or ID…" id="pfSrch"/></div>
        </div>
      </div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Student</th><th>Class</th><th>Parent contact</th><th>Due amount</th><th>Due date</th><th>Actions</th></tr></thead>
        <tbody id="pfBody"></tbody>
      </table></div></div>
    </div>
  `);
  const upd=()=>draw(document.getElementById('pfSrch').value.toLowerCase(),document.getElementById('pfCls').value);
  document.getElementById('pfSrch').addEventListener('input',upd);
  document.getElementById('pfCls').addEventListener('change',upd);
  draw();
}
function printChallan(sid){
  const s=S.students.find(x=>x.id===sid);if(!s)return;
  const no='CH-'+s.id+'-'+String(Date.now()).slice(-5);
  modal(`<div class="moh"><div class="mot">Fee challan</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob"><div class="slip print-area">
    <div class="sl-h"><div class="sl-sch">${S.school.name}</div><div class="sl-sub">${S.school.addr||''}</div><div class="sl-sub" style="font-weight:700;margin-top:4px;color:var(--red)">FEE CHALLAN — UNPAID</div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:13px;margin-bottom:.9rem">
      <div><span style="color:var(--txts)">Challan No:</span><br><strong>${no}</strong></div>
      <div><span style="color:var(--txts)">Issue date:</span><br><strong>${new Date().toISOString().split('T')[0]}</strong></div>
      <div><span style="color:var(--txts)">Student:</span><br><strong>${s.name}</strong></div>
      <div><span style="color:var(--txts)">Class:</span><br><strong>${s.cls}</strong></div>
      <div><span style="color:var(--txts)">Student ID:</span><br><strong>${s.id}</strong></div>
      <div><span style="color:var(--txts)">Due date:</span><br><strong style="color:var(--red)">${s.dueDate||'N/A'}</strong></div>
    </div>
    <div class="sl-tot"><span>Amount due</span><span style="color:var(--red)">₨${s.bal.toLocaleString()}</span></div>
    <div class="sl-r" style="margin-top:.5rem"><span style="color:var(--txts)">Total annual fee</span><span>₨${s.fee.toLocaleString()}</span></div>
    <div class="sl-r"><span style="color:var(--txts)">Already paid</span><span>₨${s.paid.toLocaleString()}</span></div>
    <div style="text-align:center;margin-top:1.25rem;font-size:11px;color:var(--txtx)">Please pay before the due date to avoid a late fine · ${S.school.name}</div>
  </div></div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print / Save PDF</button></div>`);
}
function toWhatsAppNumber(phone){
  // normalizes a local Pakistani mobile number (0322-3456789) to WhatsApp's international format (923223456789)
  let d=String(phone||'').replace(/\D/g,'');
  if(!d)return null;
  if(d.startsWith('0'))d='92'+d.slice(1);
  else if(!d.startsWith('92'))d='92'+d;
  return d;
}
function sendReminder(sid){
  const s=S.students.find(x=>x.id===sid);if(!s)return;
  S.notifications.unshift({id:'NT'+Date.now(),studentId:sid,type:'fee-reminder',msg:`Fee reminder: ₨${s.bal.toLocaleString()} due by ${s.dueDate||'the due date'}.`,date:new Date().toISOString().split('T')[0]});
  const wa=toWhatsAppNumber(s.phone);
  if(!wa){
    toast(`⚠️ No phone number on file for ${s.guardian} — reminder logged in their parent portal only`);
    return;
  }
  const msg=`Dear ${s.guardian}, this is a reminder from ${S.school.name} that a fee balance of ₨${s.bal.toLocaleString()} for ${s.name} (${s.cls}) is due by ${s.dueDate||'the due date'}. Please arrange payment at your earliest convenience. Thank you.`;
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`,'_blank');
  toast(`📨 Reminder logged · opening WhatsApp for ${s.guardian}`);
}

// ─────────────── HOMEWORK & ASSIGNMENTS ───────────────
function pgHomework(){
  const canPost=['admin','principal','teacher'].includes(S.auth?.role);
  acts(canPost?`<button class="btn bp" onclick="openAddHomework()">+ Post homework</button>`:'');
  const clsList=[...new Set(S.students.map(s=>s.cls))].sort();
  set(`
    <div class="card">
      <div class="ch"><div class="ct">Homework & assignments (${S.homework.length})</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Class</th><th>Subject</th><th>Title</th><th>Due date</th><th>Posted by</th>${canPost?'<th>Action</th>':''}</tr></thead>
        <tbody>${[...S.homework].sort((a,b)=>b.date.localeCompare(a.date)).map(h=>`<tr>
          <td><span class="bd bdb">${h.cls}</span></td>
          <td>${h.subject}</td>
          <td><strong>${h.title}</strong><br><small style="color:var(--txtx)">${h.desc}</small></td>
          <td>${h.dueDate}</td>
          <td>${h.postedBy}</td>
          ${canPost?`<td><button class="btn br bsm" onclick="delHomework('${h.id}')">Del</button></td>`:''}
        </tr>`).join('')||`<tr><td colspan="${canPost?6:5}" style="text-align:center;padding:2rem;color:var(--txtx)">No homework posted yet</td></tr>`}</tbody>
      </table></div></div>
    </div>
  `);
  window._hwClsList=clsList;
}
function openAddHomework(){
  const clsList=[...new Set(S.students.map(s=>s.cls))].sort();
  modal(`<div class="moh"><div class="mot">Post homework</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Class *</label><select id="hwc">${clsList.map(c=>`<option>${c}</option>`).join('')}</select></div><div class="fg"><label>Subject *</label><input id="hws" placeholder="e.g. Mathematics"/></div></div>
    <div class="fg"><label>Title *</label><input id="hwt" placeholder="e.g. Chapter 5 exercises"/></div>
    <div class="fg"><label>Description</label><textarea id="hwd" rows="3"></textarea></div>
    <div class="fg"><label>Due date</label><input type="date" id="hwdue" value="${new Date(Date.now()+7*86400000).toISOString().split('T')[0]}"/></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveHomework()">Post</button></div>`);
}
function saveHomework(){
  const t=v('hwt'),sub=v('hws');
  if(!t||!sub)return toast('⚠️ Fill required fields');
  S.homework.unshift({id:'H'+Date.now(),cls:v('hwc'),subject:sub,title:t,desc:v('hwd'),dueDate:v('hwdue'),postedBy:S.auth?.name||'Staff',date:new Date().toISOString().split('T')[0]});
  cm();pgHomework();toast('✅ Homework posted');
}
function delHomework(id){
  if(!confirm('Delete this homework?'))return;
  S.homework=S.homework.filter(h=>h.id!==id);
  pgHomework();toast('🗑️ Homework deleted');
}
function pgTeachers(){
  acts(`<input type="file" id="tchImportInput" accept=".csv,.xlsx,.xls" style="display:none" onchange="importTeachersFile(event)"/>
    <button class="btn bo" onclick="document.getElementById('tchImportInput').click()" style="margin-right:6px">⬆️ Import (CSV/Excel)</button>
    <div class="dd" style="display:inline-block;position:relative;margin-right:6px">
      <button class="btn bo" onclick="toggleDD('tchExpDD')">⬇️ Export ▾</button>
      <div id="tchExpDD" class="dd-menu hidden">
        <div onclick="exportTeachersCSV();toggleDD('tchExpDD')">📄 Export as CSV</div>
        <div onclick="exportTeachersExcel();toggleDD('tchExpDD')">📊 Export as Excel</div>
      </div>
    </div>
    <button class="btn bp" onclick="openAddTeacher()">+ Add teacher</button>`);
  function draw(f=''){
    document.getElementById('tchBody').innerHTML=S.teachers.filter(t=>t.name.toLowerCase().includes(f)||t.subject.toLowerCase().includes(f)).map(t=>{
      const net=t.basic+t.allow-t.ded;
      return`<tr>
        <td><span class="av">${t.name.split(' ').pop()[0]}</span><strong>${t.name}</strong><br><small style="color:var(--txtx)">${t.email}</small></td>
        <td>${t.subject}</td><td>${t.qual}</td><td>${t.phone}</td>
        <td style="font-weight:600">₨${net.toLocaleString()}</td>
        <td><span class="bd ${t.status==='Active'?'bdg':t.status==='On Leave'?'bda':'bdr'}">${t.status}</span></td>
        <td><button class="btn bo bsm" onclick="viewTch('${t.id}')" style="margin-right:4px">View</button><button class="btn bpu bsm" onclick="openCertModal('teacher','${t.id}')" style="margin-right:4px">📜 Experience</button><button class="btn br bsm" onclick="delTch('${t.id}')">Del</button></td>
      </tr>`;
    }).join('')||'<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--txtx)">No teachers</td></tr>';
  }
  set(`<div class="card"><div class="ch"><div class="ct">Teaching staff (${S.teachers.length})</div><div class="sb_" style="width:220px">🔍 <input id="tchSrch" placeholder="Search…"/></div></div>
    <div class="cb" style="padding:0"><div class="tw"><table>
      <thead><tr><th>Teacher</th><th>Subject</th><th>Qualification</th><th>Phone</th><th>Net salary</th><th>Status</th><th>Actions</th></tr></thead>
      <tbody id="tchBody"></tbody>
    </table></div></div></div>`);
  document.getElementById('tchSrch').addEventListener('input',function(){draw(this.value.toLowerCase())});
  draw();
}
function openAddTeacher(){
  modal(`<div class="moh"><div class="mot">Add new teacher</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Full name *</label><input id="tn"/></div><div class="fg"><label>Subject *</label><input id="tsu"/></div></div>
    <div class="fr"><div class="fg"><label>Qualification</label><input id="tq" placeholder="M.Sc Physics"/></div><div class="fg"><label>Join date</label><input type="date" id="tj"/></div></div>
    <div class="fr"><div class="fg"><label>Email</label><input type="email" id="te" placeholder="teacher@school.edu"/></div><div class="fg"><label>Phone</label><input id="tp" placeholder="03XX-XXXXXXX"/></div></div>
    <div class="dvd"/><div style="font-weight:600;font-size:13px;margin-bottom:.7rem">Salary details</div>
    <div class="fr"><div class="fg"><label>Basic salary (₨)</label><input type="number" id="tb" placeholder="55000"/></div><div class="fg"><label>Allowances (₨)</label><input type="number" id="ta" placeholder="8000"/></div></div>
    <div class="fr"><div class="fg"><label>Deductions (₨)</label><input type="number" id="td_" placeholder="4000"/></div><div class="fg"><label>Status</label><select id="ts_"><option>Active</option><option>On Leave</option><option>Inactive</option></select></div></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveTch()">Save teacher</button></div>`);
}
function saveTch(){
  const n=v('tn'),su=v('tsu');if(!n||!su)return toast('⚠️ Name and subject required');
  S.teachers.push({id:'T'+Date.now(),name:n,subject:su,qual:v('tq'),join:v('tj'),email:v('te'),phone:v('tp'),status:v('ts_'),basic:parseInt(v('tb'))||0,allow:parseInt(v('ta'))||0,ded:parseInt(v('td_'))||0});
  cm();pgTeachers();toast('✅ Teacher added');
}
function viewTch(id){
  const t=S.teachers.find(x=>x.id===id);if(!t)return;
  const net=t.basic+t.allow-t.ded;
  modal(`<div class="moh"><div class="mot">Teacher profile</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="phead"><div class="pav">${t.name.split(' ').pop()[0]}</div><div class="pmeta"><h2>${t.name}</h2><p>${t.subject} · ${t.qual}</p></div><span class="bd ${t.status==='Active'?'bdg':t.status==='On Leave'?'bda':'bdr'}">${t.status}</span></div>
    <div class="dg mb2">
      <div class="di"><label>ID</label><p>${t.id}</p></div>
      <div class="di"><label>Join date</label><p>${t.join||'N/A'}</p></div>
      <div class="di"><label>Email</label><p>${t.email||'N/A'}</p></div>
      <div class="di"><label>Phone</label><p>${t.phone||'N/A'}</p></div>
    </div>
    <div class="fb">
      <div class="fr2"><span>Basic salary</span><span>₨${t.basic.toLocaleString()}</span></div>
      <div class="fr2"><span>Allowances</span><span style="color:var(--green)">+₨${t.allow.toLocaleString()}</span></div>
      <div class="fr2"><span>Deductions</span><span style="color:var(--red)">-₨${t.ded.toLocaleString()}</span></div>
      <div class="fr2 tot"><span>Net salary</span><span>₨${net.toLocaleString()}</span></div>
    </div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn ba" onclick="cm();openSlip('${id}')">Salary slip</button><button class="btn bpu" onclick="cm();openCertModal('teacher','${id}')">📜 Experience certificate</button></div>`);
}
function delTch(id){if(!confirm('Delete teacher?'))return;S.teachers=S.teachers.filter(t=>t.id!==id);pgTeachers();toast('🗑️ Teacher deleted');}

// ─────────────── CERTIFICATES ───────────────
const CERT_DEFAULTS={
  Completion:'has successfully completed the prescribed course of study for the academic session with satisfactory performance, and is hereby awarded this certificate of completion.',
  Character:'has been a student of good moral character, sincere conduct, and regular attendance throughout their time at this institution. No disciplinary action was ever recorded against them.',
  Merit:'has demonstrated outstanding academic performance and exemplary conduct, and is hereby awarded this certificate of merit in recognition of their achievement.',
  Transfer:'has satisfactorily cleared all dues and completed the requisite formalities, and is hereby granted a transfer certificate from this institution.',
};
const CERT_TITLES={Completion:'Certificate of Completion',Character:'Character Certificate',Merit:'Certificate of Merit',Transfer:'Transfer Certificate'};

function openCertModal(kind,id){
  if(kind==='student'){
    const s=S.students.find(x=>x.id===id);if(!s)return;
    modal(`<div class="moh"><div class="mot">Generate certificate — ${s.name}</div><button class="moc" onclick="cm()">✕</button></div>
    <div class="mob">
      <div class="fg"><label>Certificate type</label><select id="ctType" onchange="ctPrefill()">
        <option value="Completion">Certificate of Completion</option>
        <option value="Character">Character Certificate</option>
        <option value="Merit">Certificate of Merit</option>
        <option value="Transfer">Transfer Certificate</option>
      </select></div>
      <div class="fg"><label>Certificate text</label><textarea id="ctRemarks" rows="3"></textarea></div>
      <div class="fg"><label>Issue date</label><input type="date" id="ctDate" value="${new Date().toISOString().split('T')[0]}"/></div>
    </div>
    <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="genStudentCert('${id}')">Generate certificate</button></div>`);
    setTimeout(ctPrefill,20);
  } else {
    const t=S.teachers.find(x=>x.id===id);if(!t)return;
    modal(`<div class="moh"><div class="mot">Experience certificate — ${t.name}</div><button class="moc" onclick="cm()">✕</button></div>
    <div class="mob">
      <div class="fr"><div class="fg"><label>Employment end date</label><input id="ecEnd" placeholder="e.g. 2026-06-30 or 'present'" value="present"/></div><div class="fg"><label>Issue date</label><input type="date" id="ecDate" value="${new Date().toISOString().split('T')[0]}"/></div></div>
      <div class="fg"><label>Remarks</label><textarea id="ecRemarks" rows="3">was found sincere, hardworking, and punctual throughout the tenure. We wish them continued success in their future endeavors.</textarea></div>
    </div>
    <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="genTeacherCert('${id}')">Generate certificate</button></div>`);
  }
}
window.ctPrefill=function(){
  const type=document.getElementById('ctType')?.value;
  const el=document.getElementById('ctRemarks');
  if(el)el.value=CERT_DEFAULTS[type]||'';
};
function certQR(data){
  const url='https://api.qrserver.com/v1/create-qr-code/?size=90x90&margin=0&data='+encodeURIComponent(data);
  return `<div class="cert-qr"><img src="${url}" width="72" height="72" alt="Verification QR"/></div>`;
}
function certNo(prefix,id){
  return prefix+'-'+id+'-'+String(Date.now()).slice(-5);
}
function certLetterhead(){
  return `<div class="cert-logo">${S.school.logo?`<img src="${S.school.logo}" style="height:52px;object-fit:contain"/>`:'<div style="font-size:34px">🏫</div>'}</div>
      <div class="cert-school">${S.school.name}</div>`;
}
function certFooter(){
  return `<div class="cert-foot">${S.school.addr||''}</div>`;
}
function genStudentCert(id){
  const s=S.students.find(x=>x.id===id);if(!s)return;
  const type=v('ctType')||'Completion',remarks=v('ctRemarks')||CERT_DEFAULTS[type],date=v('ctDate')||new Date().toISOString().split('T')[0];
  const no=certNo('CERT',s.id);
  const qrData=`EDU-CERT|School:${S.school.name}|Name:${s.name}|StudentID:${s.id}|Class:${s.cls}|Type:${type}|Date:${date}|CertNo:${no}`;
  cm();
  modal(`<div class="moh"><div class="mot">${CERT_TITLES[type]}</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob"><div class="cert print-area">
    <div class="cert-inner">
      ${certQR(qrData)}
      ${certLetterhead()}
      <div class="cert-kicker">This is to certify that</div>
      <div class="cert-title">${CERT_TITLES[type]}</div>
      <div class="cert-name">${s.name}</div>
      <div class="cert-body">Son/Daughter of <strong>${s.guardian||'N/A'}</strong>, a student of class <strong>${s.cls}</strong> (Roll No. ${s.roll}), bearing Student ID <strong>${s.id}</strong>, ${remarks}</div>
      <div class="cert-meta"><span>Session: ${s.session||'N/A'}</span><span>Cert No: ${no}</span><span>Date: ${date}</span></div>
      <div class="cert-signs">
        <div class="cert-sign"><div class="cert-sign-line"></div>Class Teacher</div>
        <div class="cert-sign"><div class="cert-sign-line"></div>Principal</div>
      </div>
      ${certFooter()}
    </div>
  </div></div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print / Save PDF</button></div>`);
  toast('✅ Certificate generated');
}
function genTeacherCert(id){
  const t=S.teachers.find(x=>x.id===id);if(!t)return;
  const end=v('ecEnd')||'present',date=v('ecDate')||new Date().toISOString().split('T')[0],remarks=v('ecRemarks')||'was found sincere, hardworking, and punctual throughout the tenure.';
  const no=certNo('EXP',t.id);
  const qrData=`EDU-CERT|School:${S.school.name}|Name:${t.name}|EmployeeID:${t.id}|Role:${t.subject} Teacher|Date:${date}|CertNo:${no}`;
  cm();
  modal(`<div class="moh"><div class="mot">Experience Certificate</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob"><div class="cert print-area">
    <div class="cert-inner">
      ${certQR(qrData)}
      ${certLetterhead()}
      <div class="cert-kicker">This is to certify that</div>
      <div class="cert-title">Experience Certificate</div>
      <div class="cert-name">${t.name}</div>
      <div class="cert-body">holding the qualification <strong>${t.qual||'N/A'}</strong>, served this institution as <strong>${t.subject} Teacher</strong> from <strong>${t.join||'N/A'}</strong> to <strong>${end}</strong>. During this period, they ${remarks}</div>
      <div class="cert-meta"><span>Employee ID: ${t.id}</span><span>Cert No: ${no}</span><span>Date: ${date}</span></div>
      <div class="cert-signs">
        <div class="cert-sign"><div class="cert-sign-line"></div>HR / Admin</div>
        <div class="cert-sign"><div class="cert-sign-line"></div>Principal</div>
      </div>
      ${certFooter()}
    </div>
  </div></div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print / Save PDF</button></div>`);
  toast('✅ Certificate generated');
}

// ─────────────── SALARY ───────────────
function pgSalary(){
  const curMo=new Date().toLocaleString('default',{month:'long',year:'numeric'});
  const bill=S.teachers.filter(t=>t.status==='Active').reduce((a,t)=>a+(t.basic+t.allow-t.ded),0);
  const paid=S.salaryRecs.filter(r=>r.month===curMo).length;
  acts(`<button class="btn bp" onclick="payAll()">Pay all salaries</button>`);
  set(`
    <div class="sg" style="grid-template-columns:repeat(3,1fr)">
      <div class="sc"><div class="si" style="background:#ede9fe">💰</div><div class="sv">₨${Math.round(bill/1000)}K</div><div class="sl">Monthly bill</div></div>
      <div class="sc"><div class="si" style="background:#dcfce7">✅</div><div class="sv">${paid}</div><div class="sl">Paid this month</div></div>
      <div class="sc"><div class="si" style="background:#fee2e2">⏳</div><div class="sv">${S.teachers.filter(t=>t.status==='Active').length-paid}</div><div class="sl">Pending</div></div>
    </div>
    <div class="card mb2">
      <div class="ch"><div class="ct">Salary — ${curMo}</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Teacher</th><th>Subject</th><th>Basic</th><th>Allowances</th><th>Deductions</th><th>Net</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${S.teachers.map(t=>{
          const net=t.basic+t.allow-t.ded;
          const isPaid=S.salaryRecs.find(r=>r.tid===t.id&&r.month===curMo);
          return`<tr>
            <td><span class="av">${t.name.split(' ').pop()[0]}</span><strong>${t.name}</strong></td>
            <td>${t.subject}</td>
            <td>₨${t.basic.toLocaleString()}</td>
            <td style="color:var(--green)">+₨${t.allow.toLocaleString()}</td>
            <td style="color:var(--red)">-₨${t.ded.toLocaleString()}</td>
            <td style="font-weight:700">₨${net.toLocaleString()}</td>
            <td><span class="bd ${isPaid?'bdg':'bda'}">${isPaid?'Paid':'Pending'}</span></td>
            <td>${isPaid?`<button class="btn bo bsm" onclick="openSlip('${t.id}')">📄 Slip</button>`:`<button class="btn ba bsm" onclick="paySal('${t.id}')">Pay</button>`}</td>
          </tr>`;
        }).join('')||'<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--txtx)">No teachers</td></tr>'}</tbody>
      </table></div></div>
    </div>
    ${S.salaryRecs.length?`<div class="card"><div class="ch"><div class="ct">Salary history</div></div><div class="cb" style="padding:0"><div class="tw"><table>
      <thead><tr><th>Teacher</th><th>Month</th><th>Net salary</th><th>Date</th><th>Action</th></tr></thead>
      <tbody>${S.salaryRecs.map(r=>{const t=S.teachers.find(x=>x.id===r.tid);return`<tr><td>${t?.name||'?'}</td><td>${r.month}</td><td>₨${r.amount.toLocaleString()}</td><td>${r.date}</td><td><button class="btn bo bsm" onclick="openSlip('${r.tid}','${r.month}')">📄</button></td></tr>`;}).join('')}</tbody>
    </table></div></div></div>`:''}
  `);
}
window.paySal=function(id){
  const t=S.teachers.find(x=>x.id===id);if(!t)return;
  const mo=new Date().toLocaleString('default',{month:'long',year:'numeric'});
  const net=t.basic+t.allow-t.ded;
  S.salaryRecs.push({tid:id,month:mo,amount:net,date:new Date().toISOString().split('T')[0]});
  toast('✅ Salary paid — ₨'+net.toLocaleString());pgSalary();
};
window.payAll=function(){
  const mo=new Date().toLocaleString('default',{month:'long',year:'numeric'});
  const unpaid=S.teachers.filter(t=>t.status==='Active'&&!S.salaryRecs.find(r=>r.tid===t.id&&r.month===mo));
  if(!unpaid.length)return toast('ℹ️ All salaries already paid');
  unpaid.forEach(t=>{S.salaryRecs.push({tid:t.id,month:mo,amount:t.basic+t.allow-t.ded,date:new Date().toISOString().split('T')[0]});});
  toast(`✅ ${unpaid.length} salaries paid`);pgSalary();
};
window.openSlip=function(id,mo){
  const t=S.teachers.find(x=>x.id===id);if(!t)return;
  const mon=mo||new Date().toLocaleString('default',{month:'long',year:'numeric'});
  const net=t.basic+t.allow-t.ded;
  modal(`<div class="moh"><div class="mot">Salary slip</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob"><div class="slip print-area">
    <div class="sl-h"><div class="sl-sch">${S.school.name}</div><div class="sl-sub">${S.school.addr||''}</div><div class="sl-sub" style="font-weight:700;margin-top:4px">SALARY SLIP — ${mon.toUpperCase()}</div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;font-size:13px;margin-bottom:.9rem">
      <div><span style="color:var(--txts)">Employee:</span><br><strong>${t.name}</strong></div>
      <div><span style="color:var(--txts)">Employee ID:</span><br><strong>${t.id}</strong></div>
      <div><span style="color:var(--txts)">Designation:</span><br><strong>${t.subject} Teacher</strong></div>
      <div><span style="color:var(--txts)">Join date:</span><br><strong>${t.join||'N/A'}</strong></div>
    </div>
    <div class="sl-sec">Earnings</div>
    <div class="sl-r"><span>Basic salary</span><span>₨${t.basic.toLocaleString()}</span></div>
    <div class="sl-r"><span>Allowances</span><span>₨${t.allow.toLocaleString()}</span></div>
    <div class="sl-r" style="font-weight:600"><span>Gross salary</span><span>₨${(t.basic+t.allow).toLocaleString()}</span></div>
    <div class="sl-sec">Deductions</div>
    <div class="sl-r"><span>Deductions</span><span style="color:var(--red)">-₨${t.ded.toLocaleString()}</span></div>
    <div class="sl-tot"><span>Net salary</span><span style="color:var(--navy)">₨${net.toLocaleString()}</span></div>
    <div style="text-align:center;font-size:11px;color:var(--txtx);margin-top:1.25rem">${S.school.name} · Computer-generated</div>
  </div></div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button><button class="btn bp" onclick="window.print()">🖨️ Print</button></div>`);
};

// ─────────────── NOTICES ───────────────
const AUDIENCE_LABELS={staff:'Internal staff',all:'Internal staff','parents-all':'All parents',parents:'All parents'};
function audienceLabel(n){
  const aud=n.audience||'staff';
  if(aud==='staff')return '🏫 Internal staff';
  if(aud==='parents-all')return '👨‍👩‍👧 All parents';
  if(aud.startsWith('parents-class:'))return '👨‍👩‍👧 Parents — Class '+aud.split(':')[1];
  if(aud.startsWith('parents-student:')){const sid=aud.split(':')[1];const s=S.students.find(x=>x.id===sid);return '👨‍👩‍👧 Parent of '+(s?s.name:sid);}
  return aud;
}
function noticeExpectedReaders(n){
  const aud=n.audience||'staff';
  if(aud==='staff')return S.users.map(u=>({name:u.name,role:u.role,email:u.email}));
  if(aud==='parents-all')return S.parents.map(p=>({name:p.name,role:'parent',email:p.email}));
  if(aud.startsWith('parents-class:')){
    const cls=aud.split(':')[1];
    const sids=S.students.filter(s=>s.cls===cls).map(s=>s.id);
    return S.parents.filter(p=>sids.includes(p.studentId)).map(p=>({name:p.name,role:'parent',email:p.email}));
  }
  if(aud.startsWith('parents-student:')){
    const sid=aud.split(':')[1];
    return S.parents.filter(p=>p.studentId===sid).map(p=>({name:p.name,role:'parent',email:p.email}));
  }
  return [];
}
function markNoticeRead(noticeId,reader){
  const n=S.notices.find(x=>x.id===noticeId);if(!n)return;
  if(!n.reads)n.reads=[];
  if(n.reads.some(r=>r.email===reader.email))return;
  const now=new Date();
  n.reads.push({name:reader.name,role:reader.role,email:reader.email,date:now.toISOString().split('T')[0],time:now.toTimeString().slice(0,5)});
}
function pgNotices(){
  const role=S.auth?.role;
  const canBroadcastAll=['admin','principal','accountant'].includes(role); // teachers can't blast the whole school/all parents
  acts(`<button class="btn bp" onclick="openAddNotice()">+ Post notice</button>`);
  function draw(){
    // opening the notice board counts as "reading" every notice shown to this staff member
    if(S.auth){
      S.notices.forEach(n=>markNoticeRead(n.id,{name:S.auth.name,role:S.auth.role,email:S.auth.email}));
    }
    document.getElementById('noticeList').innerHTML=S.notices.map(n=>{
      const readCount=(n.reads||[]).length,expCount=noticeExpectedReaders(n).length;
      return `
      <div class="notice-card nc-${n.type}">
        <div class="flex ic gap2 mb1" style="flex-wrap:wrap">
          <span class="bd ${n.type==='urgent'?'bdr':n.type==='event'?'bdg':'bdb'}">${n.type}</span>
          <span class="bd bdb">${audienceLabel(n)}</span>
          ${n.pinned?'<span class="bd bdr">📌 Pinned</span>':''}
          <span style="margin-left:auto;font-size:11px;color:var(--txts)">${n.date} · ${n.author}</span>
          ${['admin','principal'].includes(role)?`<button class="btn bo bsm" onclick="showNoticeReads('${n.id}')">👁️ ${readCount}/${expCount} read</button>`:''}
          <button class="btn bo bsm" onclick="delNotice('${n.id}')">Delete</button>
        </div>
        <div class="nc-title">${n.title}</div>
        <div class="nc-body">${n.body}</div>
      </div>`;
    }).join('')||'<div style="text-align:center;padding:2rem;color:var(--txts)">No notices posted</div>';
    document.getElementById('noticeBadge').textContent=S.notices.filter(n=>n.pinned).length||'';
    if(!S.notices.filter(n=>n.pinned).length)document.getElementById('noticeBadge').style.display='none';
  }
  set(`
    <div class="g2">
      <div>
        <div class="card mb2">
          <div class="ch"><div class="ct">All notices (${S.notices.length})</div></div>
          <div class="cb" id="noticeList"></div>
        </div>
      </div>
      <div>
        <div class="card">
          <div class="ch"><div class="ct">Post new notice</div></div>
          <div class="cb">
            <div class="fg"><label>Title *</label><input id="ntt" placeholder="Notice title"/></div>
            <div class="fg"><label>Content *</label><textarea id="nbd" rows="4" placeholder="Notice content…" style="resize:vertical"></textarea></div>
            <div class="fr"><div class="fg"><label>Type</label><select id="nty">
              <option value="info">Information</option><option value="urgent">Urgent</option><option value="event">Event</option>
            </select></div><div class="fg"><label>Author</label><input id="nau" value="${S.auth?.name||'Admin'}"/></div></div>
            <div class="fg"><label>Send to *</label><select id="naud" onchange="naudChange()">
              <option value="staff">🏫 Internal staff</option>
              ${canBroadcastAll?'<option value="parents-all">👨‍👩‍👧 All parents</option>':''}
              <option value="parents-class">👨‍👩‍👧 Specific class parents</option>
              <option value="parents-student">👨‍👩‍👧 Specific student's parent</option>
            </select></div>
            <div id="naudSub"></div>
            <div class="fg" style="display:flex;align-items:center;gap:8px"><input type="checkbox" id="npin" style="width:auto"/><label style="text-transform:none;letter-spacing:0;margin-bottom:0">Pin this notice</label></div>
            <button class="btn bp" style="width:100%;justify-content:center;margin-top:.5rem" onclick="postNotice()">Post notice</button>
          </div>
        </div>
      </div>
    </div>
  `);
  draw();
  window.drawNotices=draw;
  window.naudChange();
}
window.naudChange=function(){
  const val=document.getElementById('naud')?.value;
  const sub=document.getElementById('naudSub');
  if(!sub)return;
  if(val==='parents-class'){
    const clsList=[...new Set(S.students.map(s=>s.cls))].sort();
    sub.innerHTML=`<div class="fg"><label>Class *</label><select id="naudCls">${clsList.map(c=>`<option>${c}</option>`).join('')}</select></div>`;
  } else if(val==='parents-student'){
    sub.innerHTML=`<div class="fg"><label>Student *</label><select id="naudStu">${S.students.map(s=>`<option value="${s.id}">${s.name} (${s.cls})</option>`).join('')}</select></div>`;
  } else {
    sub.innerHTML='';
  }
};
function openAddNotice(){toast('📢 Use the form on the right to post notices');}
function postNotice(){
  const t=document.getElementById('ntt')?.value;
  const b=document.getElementById('nbd')?.value;
  if(!t||!b)return toast('⚠️ Title and content required');
  const audVal=document.getElementById('naud').value;
  let audience='staff';
  if(audVal==='parents-all')audience='parents-all';
  else if(audVal==='parents-class')audience='parents-class:'+v('naudCls');
  else if(audVal==='parents-student')audience='parents-student:'+v('naudStu');
  S.notices.unshift({id:'N'+Date.now(),title:t,body:b,type:document.getElementById('nty').value,author:document.getElementById('nau').value,date:new Date().toISOString().split('T')[0],pinned:document.getElementById('npin').checked,audience,reads:[]});
  document.getElementById('ntt').value='';
  document.getElementById('nbd').value='';
  if(window.drawNotices)window.drawNotices();
  toast('✅ Notice posted to '+({staff:'internal staff','parents-all':'all parents'}[audience]||'target audience'));
}
function delNotice(id){
  if(!confirm('Delete this notice?'))return;
  S.notices=S.notices.filter(n=>n.id!==id);
  if(window.drawNotices)window.drawNotices();
  toast('🗑️ Notice deleted');
}
function showNoticeReads(id){
  const n=S.notices.find(x=>x.id===id);if(!n)return;
  const expected=noticeExpectedReaders(n);
  const readEmails=new Set((n.reads||[]).map(r=>r.email));
  const notRead=expected.filter(p=>!readEmails.has(p.email));
  modal(`<div class="moh"><div class="mot">Read report — ${n.title}</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="inf" style="margin-bottom:1rem">Audience: <strong>${audienceLabel(n)}</strong> · ${(n.reads||[]).length}/${expected.length} read</div>
    <div class="ch" style="padding:0 0 .5rem"><div class="ct" style="font-size:13px">✅ Read (${(n.reads||[]).length})</div></div>
    <div class="tw"><table>
      <thead><tr><th>Name</th><th>Role</th><th>Date</th><th>Time</th></tr></thead>
      <tbody>${(n.reads||[]).map(r=>`<tr><td>${r.name}</td><td style="text-transform:capitalize">${r.role}</td><td>${r.date}</td><td>${r.time}</td></tr>`).join('')||'<tr><td colspan="4" style="text-align:center;padding:1rem;color:var(--txtx)">No one has read this yet</td></tr>'}</tbody>
    </table></div>
    <div class="ch" style="padding:1rem 0 .5rem"><div class="ct" style="font-size:13px">⏳ Not read (${notRead.length})</div></div>
    <div class="tw"><table>
      <thead><tr><th>Name</th><th>Role</th></tr></thead>
      <tbody>${notRead.map(r=>`<tr><td>${r.name}</td><td style="text-transform:capitalize">${r.role}</td></tr>`).join('')||'<tr><td colspan="2" style="text-align:center;padding:1rem;color:var(--txtx)">Everyone has read this ✅</td></tr>'}</tbody>
    </table></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Close</button></div>`);
}

// ─────────────── EXPENSES ───────────────
function pgExpenses(){
  acts(`<button class="btn bp" onclick="openAddExp()">+ Log expense</button>`);
  const cats=['Utilities','Maintenance','Stationery','Transport','Salaries','Other'];
  const totExp=S.expenses.reduce((a,e)=>a+e.amount,0);
  const totInc=S.feeRecs.filter(f=>f.status==='Paid').reduce((a,f)=>a+f.amount,0);
  const bycat={};S.expenses.forEach(e=>{bycat[e.cat]=(bycat[e.cat]||0)+e.amount;});
  set(`
    <div class="sg">
      <div class="sc"><div class="si" style="background:#fee2e2">📊</div><div class="sv">₨${Math.round(totExp/1000)}K</div><div class="sl">Total expenses</div></div>
      <div class="sc"><div class="si" style="background:#dcfce7">💳</div><div class="sv">₨${Math.round(totInc/1000)}K</div><div class="sl">Fee income</div></div>
      <div class="sc"><div class="si" style="background:${totInc-totExp>=0?'#dcfce7':'#fee2e2'}">📈</div><div class="sv" style="color:${totInc-totExp>=0?'var(--green)':'var(--red)'}">₨${Math.round(Math.abs(totInc-totExp)/1000)}K</div><div class="sl">${totInc-totExp>=0?'Net surplus':'Net deficit'}</div></div>
      <div class="sc"><div class="si" style="background:#ede9fe">🗓️</div><div class="sv">${S.expenses.length}</div><div class="sl">Transactions</div></div>
    </div>
    <div class="g2 mb2">
      <div class="card">
        <div class="ch"><div class="ct">Expense by category</div></div>
        <div class="cb">
          ${cats.map(c=>{const amt=bycat[c]||0;const pct=totExp>0?Math.round((amt/totExp)*100):0;return`
            <div style="margin-bottom:.9rem">
              <div class="flex ic gap2 mb1"><span style="font-size:13px;font-weight:500">${c}</span><span style="margin-left:auto;font-size:13px;font-weight:600">₨${amt.toLocaleString()}</span><span style="font-size:12px;color:var(--txts)">${pct}%</span></div>
              <div class="exp-bar"><div class="exp-fill" style="width:${pct}%;background:${c==='Utilities'?'var(--accent)':c==='Maintenance'?'var(--amber)':c==='Salaries'?'var(--red)':c==='Transport'?'var(--purple)':'var(--green)'}"></div></div>
            </div>`}).join('')}
        </div>
      </div>
      <div class="card">
        <div class="ch"><div class="ct">Recent expenses</div></div>
        <div class="cb" style="padding:0"><div class="tw"><table>
          <thead><tr><th>Date</th><th>Category</th><th>Description</th><th>Amount</th></tr></thead>
          <tbody>${S.expenses.map(e=>`<tr>
            <td>${e.date}</td>
            <td><span class="bd bdb">${e.cat}</span></td>
            <td>${e.desc}</td>
            <td style="font-weight:600">₨${e.amount.toLocaleString()}</td>
          </tr>`).join('')||'<tr><td colspan="4" style="text-align:center;padding:2rem;color:var(--txtx)">No expenses logged</td></tr>'}</tbody>
        </table></div></div>
      </div>
    </div>
  `);
}
function openAddExp(){
  modal(`<div class="moh"><div class="mot">Log expense</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fr"><div class="fg"><label>Category *</label><select id="ec_"><option>Utilities</option><option>Maintenance</option><option>Stationery</option><option>Transport</option><option>Salaries</option><option>Other</option></select></div><div class="fg"><label>Date</label><input type="date" id="ed_" value="${new Date().toISOString().split('T')[0]}"/></div></div>
    <div class="fg"><label>Description *</label><input id="edes" placeholder="Brief description"/></div>
    <div class="fr"><div class="fg"><label>Amount (₨) *</label><input type="number" id="eam" placeholder="Amount"/></div><div class="fg"><label>Payment method</label><select id="eme"><option>Cash</option><option>Bank</option><option>Cheque</option></select></div></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveExp()">Save expense</button></div>`);
}
function saveExp(){
  const d=v('edes'),a=parseInt(v('eam'));
  if(!d||!a)return toast('⚠️ Fill required fields');
  S.expenses.push({id:'X'+Date.now(),cat:v('ec_'),desc:d,amount:a,date:v('ed_'),method:v('eme')});
  cm();pgExpenses();toast('✅ Expense logged');
}

// ─────────────── USER ROLES ───────────────
function pgUsers(){
  acts(`<button class="btn bp" onclick="openAddUser()">+ Add user</button>`);
  set(`<div class="card">
    <div class="ch"><div class="ct">System users (${S.users.length})</div></div>
    <div class="cb" style="padding:0"><div class="tw"><table>
      <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Last login</th><th>Actions</th></tr></thead>
      <tbody>${S.users.map(u=>`<tr>
        <td><span class="av">${u.name[0]}</span><strong>${u.name}</strong></td>
        <td style="color:var(--txts)">${u.email}</td>
        <td><span class="role-tag role-${u.role==='admin'?'admin':u.role==='teacher'?'teacher':'acc'}">${u.role==='admin'?'Administrator':u.role==='teacher'?'Teacher':'Accountant'}</span></td>
        <td><span class="bd ${u.status==='Active'?'bdg':'bdr'}">${u.status}</span></td>
        <td style="color:var(--txts)">${u.lastLogin}</td>
        <td>
          <button class="btn bo bsm" onclick="editUser('${u.id}')" style="margin-right:4px">Edit</button>
          <button class="btn br bsm" onclick="delUser('${u.id}')">Delete</button>
        </td>
      </tr>`).join('')}</tbody>
    </table></div></div>
  </div>
  <div class="card" style="margin-top:1rem">
    <div class="ch"><div class="ct">Role permissions</div></div>
    <div class="cb"><div class="tw"><table>
      <thead><tr><th>Feature</th><th>Administrator</th><th>Teacher</th><th>Accountant</th></tr></thead>
      <tbody>
        ${[['Dashboard','✅','✅','✅'],['Classes & timetable','✅','✅','❌'],['Attendance','✅','✅','❌'],['Exams & results','✅','✅','❌'],['Students','✅','✅ (view)','✅ (view)'],['Fee management','✅','❌','✅'],['Teachers','✅','❌','❌'],['Salary','✅','❌','✅'],['Notice board','✅','✅ (view)','✅ (view)'],['Expenses','✅','❌','✅'],['User roles','✅','❌','❌'],['School profile','✅','❌','❌'],['Reports','✅','❌','✅']].map(([f,...roles])=>`<tr><td style="font-weight:500">${f}</td>${roles.map(r=>`<td style="text-align:center">${r}</td>`).join('')}</tr>`).join('')}
      </tbody>
    </table></div></div>
  </div>`);
}
function openAddUser(){
  modal(`<div class="moh"><div class="mot">Add user</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fg"><label>Full name *</label><input id="un_" placeholder="Full name"/></div>
    <div class="fg"><label>Email *</label><input type="email" id="ue" placeholder="user@school.edu"/></div>
    <div class="fr"><div class="fg"><label>Role *</label><select id="ur"><option value="admin">Administrator</option><option value="teacher">Teacher</option><option value="accountant">Accountant</option></select></div><div class="fg"><label>Password</label><input type="password" id="upw" placeholder="Temp password"/></div></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveUser()">Add user</button></div>`);
}
function saveUser(){
  const n=v('un_'),e=v('ue');if(!n||!e)return toast('⚠️ Name and email required');
  S.users.push({id:'U'+Date.now(),name:n,email:e,role:v('ur'),status:'Active',lastLogin:'Never'});
  cm();pgUsers();toast('✅ User added');
}
function editUser(id){
  const u=S.users.find(x=>x.id===id);if(!u)return;
  modal(`<div class="moh"><div class="mot">Edit user role</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fg"><label>Name</label><input id="eun" value="${u.name}" readonly style="background:var(--bg)"/></div>
    <div class="fg"><label>Role</label><select id="eur"><option value="admin" ${u.role==='admin'?'selected':''}>Administrator</option><option value="teacher" ${u.role==='teacher'?'selected':''}>Teacher</option><option value="accountant" ${u.role==='accountant'?'selected':''}>Accountant</option></select></div>
    <div class="fg"><label>Status</label><select id="eus"><option ${u.status==='Active'?'selected':''}>Active</option><option ${u.status==='Inactive'?'selected':''}>Inactive</option></select></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="updUser('${id}')">Save changes</button></div>`);
}
function updUser(id){
  const u=S.users.find(x=>x.id===id);if(!u)return;
  u.role=document.getElementById('eur').value;u.status=document.getElementById('eus').value;
  cm();pgUsers();toast('✅ User updated');
}
function delUser(id){
  if(!confirm('Delete this user?'))return;
  S.users=S.users.filter(u=>u.id!==id);pgUsers();toast('🗑️ User deleted');
}

// ─────────────── SCHOOL PROFILE ───────────────
function pgSchool(){
  const sc=S.school||{};
  acts(`<button class="btn bp" onclick="editSchool()">✏️ Edit profile</button>`);
  set(`
    <div class="g2">
      <div class="card">
        <div class="ch"><div class="ct">School information</div></div>
        <div class="cb">
          <div class="phead">
            <div class="pav" style="background:var(--navy);color:#fff;font-size:26px">🏫</div>
            <div class="pmeta"><h2>${sc.name||'Your School'}</h2><p>${sc.type||'School Type'} · Est. ${sc.year||'N/A'}</p></div>
          </div>
          <div class="dg">
            <div class="di"><label>Email</label><p>${sc.email||'N/A'}</p></div>
            <div class="di"><label>Phone</label><p>${sc.phone||'N/A'}</p></div>
            <div class="di" style="grid-column:1/-1"><label>Address</label><p>${sc.addr||'N/A'}</p></div>
            <div class="di"><label>Admin name</label><p>${S.auth?.name||'N/A'}</p></div>
            <div class="di"><label>Admin email</label><p>${S.auth?.email||'N/A'}</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="ch"><div class="ct">Documents</div><label class="btn bo bsm" style="margin:0">+ Upload<input type="file" style="display:none" accept="image/png,image/jpeg,application/pdf" onchange="addSchoolDoc(event)"/></label></div>
        <div class="cb">
          ${(S.school.documents||[]).map((d,i)=>`
          <div style="display:flex;align-items:center;gap:10px;padding:.7rem;background:var(--bg);border-radius:8px;border:1px solid var(--border);margin-bottom:.6rem">
            <span style="font-size:21px">${d.icon}</span>
            <div style="flex:1"><div style="font-size:13px;font-weight:500">${d.name}</div><div style="font-size:11px;color:var(--txts)">${d.fileName||'No file attached yet'}</div></div>
            <span class="bd bd${d.color==='green'?'g':'a'}">${d.status}</span>
            ${d.data?`<button class="btn bo bsm" onclick="viewSchoolDoc(${i})">View</button>`:''}
          </div>`).join('')||'<div style="text-align:center;padding:1.5rem;color:var(--txtx);font-size:13px">No documents yet — click + Upload to add one</div>'}
        </div>
      </div>
    </div>
    <div class="card" style="margin-top:1rem">
      <div class="ch"><div class="ct">Quick statistics</div></div>
      <div class="cb"><div class="sg">
        <div class="sc"><div class="sv">${S.students.length}</div><div class="sl">Students enrolled</div></div>
        <div class="sc"><div class="sv">${S.teachers.length}</div><div class="sl">Teaching staff</div></div>
        <div class="sc"><div class="sv">${S.classes.length}</div><div class="sl">Active classes</div></div>
        <div class="sc"><div class="sv">${S.users.length}</div><div class="sl">System users</div></div>
      </div></div>
    </div>
  `);
}
function addSchoolDoc(ev){
  const file=ev.target.files[0];
  if(!file)return;
  if(file.size>5*1024*1024){toast('⚠️ File too large — max 5MB');ev.target.value='';return;}
  const reader=new FileReader();
  reader.onload=()=>{
    S.school.documents=S.school.documents||[];
    S.school.documents.push({icon:file.type==='application/pdf'?'📄':'🖼️',name:file.name,status:'Uploaded',color:'green',data:reader.result,fileName:file.name});
    pgSchool();
    toast('✅ '+file.name+' uploaded');
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsDataURL(file);
}
function viewSchoolDoc(i){
  const d=S.school.documents[i];
  if(!d?.data)return;
  const w=window.open();
  if(!w){toast('⚠️ Allow pop-ups to view the file');return;}
  if(d.data.startsWith('data:application/pdf')){
    w.document.write(`<iframe src="${d.data}" style="border:none;width:100%;height:100vh"></iframe>`);
  } else {
    w.document.write(`<img src="${d.data}" style="max-width:100%;display:block;margin:2rem auto"/>`);
  }
}
function editSchool(){
  const sc=S.school||{};
  modal(`<div class="moh"><div class="mot">Edit school profile</div><button class="moc" onclick="cm()">✕</button></div>
  <div class="mob">
    <div class="fg"><label>School name</label><input id="epn" value="${sc.name||''}"/></div>
    <div class="fr"><div class="fg"><label>Type</label><select id="ept"><option ${sc.type==='Primary'?'selected':''}>Primary</option><option ${sc.type==='Secondary'?'selected':''}>Secondary</option><option ${sc.type==='Higher Secondary'?'selected':''}>Higher Secondary</option></select></div><div class="fg"><label>Est. year</label><input id="epy" value="${sc.year||''}"/></div></div>
    <div class="fg"><label>Email</label><input id="epe" value="${sc.email||''}"/></div>
    <div class="fg"><label>Phone</label><input id="epp" value="${sc.phone||''}"/></div>
    <div class="fg"><label>Address</label><input id="epa" value="${sc.addr||''}"/></div>
  </div>
  <div class="mof"><button class="btn bo" onclick="cm()">Cancel</button><button class="btn bp" onclick="saveSchool()">Save changes</button></div>`);
}
function saveSchool(){
  S.school.name=v('epn');S.school.type=v('ept');S.school.year=v('epy');
  S.school.email=v('epe');S.school.phone=v('epp');S.school.addr=v('epa');
  document.getElementById('sbSchool').textContent=S.school.name;
  document.getElementById('sbType').textContent=S.school.type;
  cm();pgSchool();toast('✅ School profile updated');
}

// ─────────────── REPORTS ───────────────
function pgReports(){
  const totFee=S.feeRecs.filter(f=>f.status==='Paid').reduce((a,b)=>a+b.amount,0);
  const totExp=S.expenses.reduce((a,e)=>a+e.amount,0);
  const salPaid=S.salaryRecs.reduce((a,r)=>a+r.amount,0);
  set(`
    <div class="g3 mb2">
      ${[['💳','Fee collection report','nav(\'fees\')'],['💰','Salary report','nav(\'salary\')'],['🎓','Student report','nav(\'students\')'],['⚠️','Fee defaulters','nav(\'fees\')'],['📊','Expense report','nav(\'expenses\')'],['👩‍🏫','Staff report','nav(\'teachers\')'],['✅','Attendance report','nav(\'attendance\')'],['📝','Exam results','nav(\'exams\')'],['📋','Annual summary','toast(\'📊 Generating…\')']].map(([ic,lb,ac])=>`
        <div class="qa" onclick="${ac}"><div class="qa-ic">${ic}</div><div class="qa-lb">${lb}</div></div>`).join('')}
    </div>
    <div class="card mb2">
      <div class="ch"><div class="ct">Financial summary</div><span class="bd bdb">Current session</span></div>
      <div class="cb"><div class="sg">
        <div class="sc"><div class="sv" style="color:var(--green)">₨${Math.round(totFee/1000)}K</div><div class="sl">Fee income</div></div>
        <div class="sc"><div class="sv" style="color:var(--red)">₨${Math.round(totExp/1000)}K</div><div class="sl">Total expenses</div></div>
        <div class="sc"><div class="sv" style="color:var(--amber)">₨${Math.round(salPaid/1000)}K</div><div class="sl">Salaries paid</div></div>
        <div class="sc"><div class="sv" style="color:${totFee-totExp-salPaid>=0?'var(--green)':'var(--red)'}">₨${Math.round(Math.abs(totFee-totExp-salPaid)/1000)}K</div><div class="sl">${totFee-totExp-salPaid>=0?'Net surplus':'Net deficit'}</div></div>
      </div></div>
    </div>
    <div class="card">
      <div class="ch"><div class="ct">Fee collection by class</div></div>
      <div class="cb" style="padding:0"><div class="tw"><table>
        <thead><tr><th>Class</th><th>Students</th><th>Total fees</th><th>Collected</th><th>Pending</th><th>Collection %</th></tr></thead>
        <tbody>${[...new Set(S.students.map(s=>s.cls))].sort().map(cls=>{
          const ss=S.students.filter(s=>s.cls===cls);
          const total=ss.reduce((a,s)=>a+s.fee,0);
          const paid=ss.reduce((a,s)=>a+s.paid,0);
          const pending=ss.reduce((a,s)=>a+s.bal,0);
          const pct=total>0?Math.round((paid/total)*100):0;
          return`<tr>
            <td style="font-weight:600">${cls}</td>
            <td>${ss.length}</td>
            <td>₨${total.toLocaleString()}</td>
            <td style="color:var(--green)">₨${paid.toLocaleString()}</td>
            <td style="color:${pending>0?'var(--red)':'var(--green)'}">₨${pending.toLocaleString()}</td>
            <td><div class="flex ic gap1"><div style="flex:1;background:var(--border);border-radius:3px;height:6px"><div style="width:${pct}%;background:${pct>=80?'var(--green)':pct>=50?'var(--amber)':'var(--red)'};height:100%;border-radius:3px"></div></div><span style="font-size:12px;font-weight:600;min-width:32px">${pct}%</span></div></td>
          </tr>`;
        }).join('')||'<tr><td colspan="6" style="text-align:center;padding:2rem;color:var(--txtx)">No data</td></tr>'}</tbody>
      </table></div></div>
    </div>
  `);
}

// ── HELPERS ──
function set(html){document.getElementById('pgContent').innerHTML=html;}
function acts(html){document.getElementById('pgActs').innerHTML=html;}
function modal(html){document.getElementById('modalWrap').innerHTML=`<div class="mbk" onclick="cmo(event)"><div class="mo">${html}</div></div>`;}
function cm(){document.getElementById('modalWrap').innerHTML='';}
function cmo(e){if(e.target.classList.contains('mbk'))cm();}
let _tt;
function toast(msg){const el=document.getElementById('toastEl');el.textContent=msg;el.classList.remove('hidden');clearTimeout(_tt);_tt=setTimeout(()=>el.classList.add('hidden'),3000);scheduleCloudSave();}
function toggleDD(id){
  const el=document.getElementById(id);if(!el)return;
  const willOpen=el.classList.contains('hidden');
  document.querySelectorAll('.dd-menu').forEach(m=>m.classList.add('hidden'));
  if(willOpen)el.classList.remove('hidden');
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.dd'))document.querySelectorAll('.dd-menu').forEach(m=>m.classList.add('hidden'));
});
function v(id){return document.getElementById(id)?.value||'';}

// ── CSV IMPORT / EXPORT (students & teachers) ──
function csvEscape(val){
  const s=String(val??'');
  return /[",\n]/.test(s) ? '"'+s.replace(/"/g,'""')+'"' : s;
}
function csvParse(text){
  const rows=[];let row=[],field='',inQuotes=false;
  for(let i=0;i<text.length;i++){
    const c=text[i];
    if(inQuotes){
      if(c==='"'){
        if(text[i+1]==='"'){field+='"';i++;}else{inQuotes=false;}
      }else field+=c;
    }else{
      if(c==='"')inQuotes=true;
      else if(c===','){row.push(field);field='';}
      else if(c==='\n'||c==='\r'){
        if(c==='\r'&&text[i+1]==='\n')i++;
        row.push(field);field='';rows.push(row);row=[];
      }else field+=c;
    }
  }
  if(field!==''||row.length){row.push(field);rows.push(row);}
  return rows.filter(r=>r.length>1||r[0]!=='');
}
function downloadCSV(filename,headers,rows){
  const csv=[headers.join(','),...rows.map(r=>r.map(csvEscape).join(','))].join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const STUDENT_CSV_COLS=['id','name','cls','roll','gender','dob','session','guardian','phone','addr','status','fee','paid','bal','adm'];
function exportStudentsCSV(){
  downloadCSV(
    `students-${new Date().toISOString().slice(0,10)}.csv`,
    STUDENT_CSV_COLS,
    S.students.map(s=>STUDENT_CSV_COLS.map(k=>s[k]))
  );
  toast('⬇️ Students exported (CSV)');
}
function exportStudentsExcel(){
  if(typeof XLSX==='undefined')return toast('⚠️ Excel library failed to load — check your internet connection');
  const data=S.students.map(s=>{const o={};STUDENT_CSV_COLS.forEach(k=>o[k]=s[k]);return o;});
  const ws=XLSX.utils.json_to_sheet(data,{header:STUDENT_CSV_COLS});
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Students');
  XLSX.writeFile(wb,`students-${new Date().toISOString().slice(0,10)}.xlsx`);
  toast('⬇️ Students exported (Excel)');
}
function applyStudentRecords(records){
  let added=0,updated=0,skipped=0;
  records.forEach((rec,i)=>{
    if(!rec.name){skipped++;return;}
    const fee=parseInt(rec.fee)||0,paid=parseInt(rec.paid)||0;
    const obj={
      id:rec.id||('S'+String(Date.now()).slice(-4)+i),
      name:rec.name,cls:rec.cls||'',roll:rec.roll||'',gender:rec.gender||'',dob:rec.dob||'',
      session:rec.session||'2024-25',guardian:rec.guardian||'',phone:rec.phone||'',addr:rec.addr||'',
      status:rec.status||'Active',fee,paid,bal:rec.bal!==undefined&&rec.bal!==''?parseInt(rec.bal):Math.max(0,fee-paid),
      adm:rec.adm||new Date().toISOString().split('T')[0]
    };
    const existing=S.students.findIndex(s=>s.id===obj.id);
    if(existing>=0){S.students[existing]=obj;updated++;}
    else{S.students.push(obj);added++;if(!S.parents.some(p=>p.studentId===obj.id))createParentAccount(obj);}
  });
  pgStudents();
  toast(`✅ Imported: ${added} added, ${updated} updated${skipped?`, ${skipped} skipped (no name)`:''}`);
}
function importStudentsFile(ev){
  const file=ev.target.files[0];if(!file)return;
  const name=file.name.toLowerCase();
  if(name.endsWith('.xlsx')||name.endsWith('.xls'))importStudentsExcel(file);
  else importStudentsCSV(file);
  ev.target.value='';
}
function importStudentsCSV(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const rows=csvParse(reader.result);
      if(rows.length<2)throw new Error('empty');
      const hdr=rows[0].map(h=>h.trim().toLowerCase());
      const records=[];
      for(let i=1;i<rows.length;i++){
        const r=rows[i];if(!r.length)continue;
        const rec={};hdr.forEach((h,idx)=>rec[h]=r[idx]??'');
        records.push(rec);
      }
      applyStudentRecords(records);
    }catch(e){
      toast('⚠️ Could not read that CSV file');
    }
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsText(file);
}
function importStudentsExcel(file){
  if(typeof XLSX==='undefined')return toast('⚠️ Excel library failed to load — check your internet connection');
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const wb=XLSX.read(reader.result,{type:'array'});
      const sheet=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(sheet,{defval:'',raw:false});
      if(!rows.length)throw new Error('empty');
      const records=rows.map(row=>{
        const rec={};
        Object.entries(row).forEach(([k,val])=>{rec[String(k).trim().toLowerCase()]=String(val??'').trim();});
        return rec;
      });
      applyStudentRecords(records);
    }catch(e){
      toast('⚠️ Could not read that Excel file');
    }
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsArrayBuffer(file);
}

const TEACHER_CSV_COLS=['id','name','subject','qual','phone','email','join','status','basic','allow','ded'];
function exportTeachersCSV(){
  downloadCSV(
    `teachers-${new Date().toISOString().slice(0,10)}.csv`,
    TEACHER_CSV_COLS,
    S.teachers.map(t=>TEACHER_CSV_COLS.map(k=>t[k]))
  );
  toast('⬇️ Teachers exported (CSV)');
}
function exportTeachersExcel(){
  if(typeof XLSX==='undefined')return toast('⚠️ Excel library failed to load — check your internet connection');
  const data=S.teachers.map(t=>{const o={};TEACHER_CSV_COLS.forEach(k=>o[k]=t[k]);return o;});
  const ws=XLSX.utils.json_to_sheet(data,{header:TEACHER_CSV_COLS});
  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Teachers');
  XLSX.writeFile(wb,`teachers-${new Date().toISOString().slice(0,10)}.xlsx`);
  toast('⬇️ Teachers exported (Excel)');
}
function applyTeacherRecords(records){
  let added=0,updated=0,skipped=0;
  records.forEach((rec,i)=>{
    if(!rec.name){skipped++;return;}
    const obj={
      id:rec.id||('T'+String(Date.now()).slice(-4)+i),
      name:rec.name,subject:rec.subject||'',qual:rec.qual||'',phone:rec.phone||'',email:rec.email||'',
      join:rec.join||'',status:rec.status||'Active',
      basic:parseInt(rec.basic)||0,allow:parseInt(rec.allow)||0,ded:parseInt(rec.ded)||0
    };
    const existing=S.teachers.findIndex(t=>t.id===obj.id);
    if(existing>=0){S.teachers[existing]=obj;updated++;}
    else{S.teachers.push(obj);added++;}
  });
  pgTeachers();
  toast(`✅ Imported: ${added} added, ${updated} updated${skipped?`, ${skipped} skipped (no name)`:''}`);
}
function importTeachersFile(ev){
  const file=ev.target.files[0];if(!file)return;
  const name=file.name.toLowerCase();
  if(name.endsWith('.xlsx')||name.endsWith('.xls'))importTeachersExcel(file);
  else importTeachersCSV(file);
  ev.target.value='';
}
function importTeachersCSV(file){
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const rows=csvParse(reader.result);
      if(rows.length<2)throw new Error('empty');
      const hdr=rows[0].map(h=>h.trim().toLowerCase());
      const records=[];
      for(let i=1;i<rows.length;i++){
        const r=rows[i];if(!r.length)continue;
        const rec={};hdr.forEach((h,idx)=>rec[h]=r[idx]??'');
        records.push(rec);
      }
      applyTeacherRecords(records);
    }catch(e){
      toast('⚠️ Could not read that CSV file');
    }
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsText(file);
}
function importTeachersExcel(file){
  if(typeof XLSX==='undefined')return toast('⚠️ Excel library failed to load — check your internet connection');
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const wb=XLSX.read(reader.result,{type:'array'});
      const sheet=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(sheet,{defval:'',raw:false});
      if(!rows.length)throw new Error('empty');
      const records=rows.map(row=>{
        const rec={};
        Object.entries(row).forEach(([k,val])=>{rec[String(k).trim().toLowerCase()]=String(val??'').trim();});
        return rec;
      });
      applyTeacherRecords(records);
    }catch(e){
      toast('⚠️ Could not read that Excel file');
    }
  };
  reader.onerror=()=>toast('⚠️ Could not read that file');
  reader.readAsArrayBuffer(file);
}

(async function boot_(){
  await loadCloudState(); // pulls shared data from Supabase so every browser/device sees the same app state
  applyMonthlyAutoPause();
  initAuth();
})();
