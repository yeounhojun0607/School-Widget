// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: school;
/*
School Widget v.1.5 릴리즈

Made by @yeounhojun0607.
Copyright ©yeounhojun0607 2021.

공유시, Notion 페이지 링크를 공유해 주세요. (https://schoolwidget.ml이며, 추후 변경될 수 있습니다. 변경시 디스코드 (Scriptable Lab)을 확인해 주세요.)
*/

//위젯 환경설정
let fontlight = "NEXON Lv2 Gothic Light"
let font = "NEXON Lv2 Gothic" 
let fontbold = "NEXON Lv2 Gothic Bold" 
let fontcolor = "#000"
let bgcolor = "#fff"

//개인화 설정
let 학교이름 = ""
let 학년 = ""
let 반 = ""
let 선생님이름 = ""
let 선생님링크 = ""
let 학급링크 = ""
let 교과링크 = ""
let 멤버링크 = ""

//시간표 설정
//쉬는 날의 경우 "수업이 없는 날입니다:) "를 입력해 주세요. (맨 뒤에 공백이 있어야 합니다.)

let 월요일 = ""
let 화요일 = ""
let 수요일 = ""
let 목요일 = ""
let 금요일 = ""
let 토요일 = "수업이 없는 날입니다:) "
let 일요일 = "수업이 없는 날입니다:) "

//여기서부터 위젯 코드가 시작됩니다.
//기본 설정
let file = FileManager.iCloud()

//이미지 받아오기
const ticonurl = "https://i.ibb.co/jRVLvR7/5-B50-F2-CE-6-A07-4-EE3-9-B9-D-CEAD291-E78-FF.png"
const ticon = await new Request(ticonurl).loadImage()

const miconurl = "https://i.ibb.co/zPzPz6C/72-A38-C3-F-80-A1-4-C9-B-B66-D-FEC5460-C3-E85.png"
const micon = await new Request(miconurl).loadImage()

//레이아웃을 설정합니다.
let widget = new ListWidget()

let h1stack = widget.addStack()		
  h1stack.layoutVertically()

let titlestack = h1stack.addStack()
  titlestack.layoutHorizontally()

h1stack.addSpacer(15)

let timetablestack = h1stack.addStack()
  timetablestack.layoutVertically()

widget.addSpacer(40)
  
let h2stack = widget.addStack()	
  h2stack.layoutHorizontally()
  
let v1stack = h2stack.addStack()
   v1stack.layoutVertically()

h2stack.addSpacer()
  
let v2stack = h2stack.addStack()
  v2stack.layoutVertically()

h2stack.addSpacer()

widget.backgroundColor = new Color(bgcolor) 

//상단 제목 부분 
let title = titlestack.addText("Studenty.")
  title.font = new Font(fontbold, 20)
  title.textColor = new Color(fontcolor)
  
titlestack.addSpacer()

let logopath = file.bookmarkedPath("logo")
let image = file.readImage(logopath)

let logo = titlestack.addImage(image)
  logo.imageSize = new Size(21, 21)
  logo.centerAlignImage()

titlestack.addSpacer(5)
let sname = titlestack.addText(학교이름)
  sname.textColor = new Color(fontcolor)
  sname.font = new Font(fontbold, 20)

//시간표 처리
var day = new Date()
var week = new Array(일요일, 월요일, 화요일, 수요일, 목요일, 금요일, 토요일)
let date = week[day.getDay()]

let tt = date
let input = tt
thelength = Math.round(input.length/ 2)
thearray = input.split(" ")
line1 = ""
line2 = ""
for(var i = 0; i < thearray.length - 1; i ++){
if(line1.length < thelength){
if(line1.length > 0){line1 = line1 + " "}
line1 = line1 + thearray[i]
}
if((i < thearray.length - 1) & (line1.length > thelength)){
if(line2.length > 0){line2 = line2 + " "}
line2 = line2 + thearray[i+1]
}
}

//시간표 부분
let timetabletitle = timetablestack.addText("시간표")
  timetabletitle.font = new Font(fontbold, 20)
  timetabletitle.textColor = new Color(fontcolor)

timetablestack.addSpacer(10)

let datewidget1 = timetablestack.addText(line1)
  datewidget1.textColor = new Color(fontcolor)
  datewidget1.font = new Font(font, 19)

timetablestack.addSpacer(5)

let datewidget2 = timetablestack.addText(line2)
  datewidget2.textColor = new Color(fontcolor)
  datewidget2.font = new Font(font, 19)

timetablestack.addSpacer()

//하단 좌측 링크 부분
let classnamedata = 학년 + "학년 " + 반 + "반"
let classname = v1stack.addText(classnamedata)
  classname.font = new Font(fontbold, 20)
  classname.textColor = new Color(fontcolor)
  
v1stack.addSpacer()

let btn1 = v1stack.addText("# Keep 메모")
  btn1.font = new Font(font, 15)
  btn1.textColor = new Color("#dc143c")
  btn1.url = 'ComgoogleKeep://'
  
v1stack.addSpacer()

let btn2 = v1stack.addText("# 카카오톡")
  btn2.font = new Font(font, 15)
  btn2.textColor = new Color("#d0ab00")
  btn2.url = 'kakaolink://'
  
v1stack.addSpacer()

let btn3 = v1stack.addText("# 학급밴드")
  btn3.font = new Font(font, 15)
  btn3.textColor = new Color("#80d038")
  btn3.url = 학급링크

v1stack.addSpacer()

let btn4 = v1stack.addText("# 교과밴드")
  btn4.font = new Font(font, 15)
  btn4.textColor = new Color("#80d038")
  btn4.url = 교과링크
  
v1stack.addSpacer()

let btn5 = v1stack.addText("# ZOOM")
  btn5.font = new Font(font, 15)
  btn5.textColor = new Color("#007CD3")
  btn5.url = 'zoomus://'

//선생님 프로필
let ttitlestack = v2stack.addStack()
  ttitlestack.layoutVertically()
  
let teacher = ttitlestack.addText("선생님")
  teacher.font = new Font(fontbold, 20)
  teacher.textColor = new Color(fontcolor)

ttitlestack.addSpacer(5)

let tcontentstack  = v2stack.addStack()
  tcontentstack.layoutHorizontally() 

let timgstack = tcontentstack.addStack()
  timgstack.layoutVertically()
  

timgstack.addSpacer(8)

let profile = timgstack.addImage(ticon)
  profile.cornerRadius = 5
  profile.borderColor = new Color("#000")
  profile.borderWidth = 0
  profile.imageSize = new Size(40, 40)
  profile.centerAlignImage()

timgstack.addSpacer(7)

let more = timgstack.addImage(micon)
  more.cornerRadius = 5
  more.borderColor = new Color("#000")
  more.borderWidth = 0
  more.imageSize = new Size(40, 40)
  more.centerAlignImage()
  
tcontentstack.addSpacer(10)

let tdatastack = tcontentstack.addStack()
  tdatastack.layoutVertically()
  
tdatastack.addSpacer(8)

let tdata = tdatastack.addText(선생님이름)
  tdata.font = new Font(font, 20)
  tdata.textColor = new Color(fontcolor)
  tdata.url = 선생님링크
  
tdatastack.addSpacer(5)

let tapopen = tdatastack.addText("탭해서 채팅하기 >")
  tapopen.font = new Font(fontlight, 15)
  tapopen.textColor = new Color(fontcolor)
  tapopen.textOpacity = 0.5
  tapopen.url = 선생님링크
  
tdatastack.addSpacer(15)

let tapmore = tdatastack.addText("더보기")
  tapmore.font = new Font(font, 20)
  tapmore.textColor = new Color(fontcolor)
  tapmore.url = 멤버링크

tdatastack.addSpacer(5)

let tapopenmore = tdatastack.addText("탭해서 채팅하기 >")
  tapopenmore.font = new Font(fontlight, 15)
  tapopenmore.textColor = new Color(fontcolor)
  tapopenmore.textOpacity = 0.5
  tapopenmore.url = 멤버링크
  
//위젯 미리보기
//필요한 경우 주석을 해제해 주세요.

//widget.presentLarge()
