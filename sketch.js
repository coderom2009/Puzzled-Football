const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var brick
var goal,goal_img
var welcome = 0
var settings  = 0.5
var help = 0.75
var ch_Gtype = 1
var lvl_intro = 2
var lvl_play = 3.1
var lvl_outro = 4
var GAME_S = lvl_intro

var setting
var play_bt
var play_bt_img
var bg1
var settings_img 
var blower_img
var Brick_texture
var conveyor_belt_img
var electric_gen_img
var electric_out_img
var gear_img
var pistol_img
var r_wheel_img
var s_off_img
var s_on_img
var trampoline_img
var w_banner,w_banner_img
var continue_btn,continue_img
var begin_btn,begin_img
var next_btn,next_img
var con = 0
var skip = 1
var g_type = con
var back_btn,back_img
var ballon
var ballon_img
var isOn = false
var r_block0
var block_0
var block_1
var block_2
var block_3
var block_4
var block_5
var block_6
var block_7
var block_8
var block_9
var bound
var block_10
var block_11
var ball_1,ball_2
var stair1,stair2,stair3,stair4
var st1,st2,st3
var puncher_1
var puch_img
var power_1
var elec_switch_1
var is_e1_on = false
var is_pu_on = false
var is_e2_on = false
var is_pu2_on = false
var tramp
var puncher_2,rabbit_2,tp_1,tp_2
var tp_img
var sel_obj
var sel_loc = []
var but_1
var but_2
var but_3

var can_d1 = false
var can_d2 = false
var can_d3 = false
var can_d4 = false
var execute_btn,execute_img
var f1 = 2
var f2 = 3
var obj_selected = 0
var loc = 0.5
var loc_selected = 1
var placed = 2
var Placing_stage
var tracker
var tr_img,tr_blank_img
var time
var can_s1 = true
var can_s2 = true
var can_s3 = true
var can_s4 = true
var next 
var secret
var check
var r_inv
var p_inv
var trim = 0
//loadImg
var inc_value = 0
var inc2_value = 0
var ground
var g_1,g_2,g_3
var punch_img
var punch2_img
var obj_op
var win_img,win
var reload,reload_img



function preload(){
  settings_img = loadImage("2659256-removebg-preview.png")
  bg1=loadImage("mechanical_bg3.jpg")
  
  Brick_texture = loadImage("Brick_texture.jpg")
  conveyor_belt_img = loadImage("Conveyor Belt.png")

  electric_out_img = loadImage("Electric_outlet.png")
  
  pistol_img = loadImage("Pistol.png")
  r_wheel_img = loadImage("Rabbit_wheel.png")
  s_off_img = loadImage("Switch_off.png")
  s_on_img = loadImage("Switch_on.png")
  trampoline_img = loadImage("Trampoline.png")
  play_bt_img = loadImage("Play_button.png")
  w_banner_img = loadImage("W_Banner.png")
  continue_img = loadImage("Continue_img.png")
  begin_img = loadImage("Begin_img.png")
  next_img = loadImage("next.png")
  back_img = loadImage("back.png")
  ballon_img = loadImage("Balloon.png")
  punch_img = loadImage("Punching.png")
  punch2_img = loadImage("Punching_op.png")
  tp_img = loadImage("teleport.png")
  execute_img = loadImage("execute.png")
  tr_blank_img = loadImage("blank.png")
  tr_img = loadImage("focus.png")
  goal_img = loadImage("goal.jpg")
  win_img = loadImage("win.png")
  reload_img = loadImage("reload.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //frameRate(80);
  engine = Engine.create();
  world = engine.world;

  

  //r_block0 = new Objects_G(windowWidth-100,windowHeight-windowHeight/2,175,30,Brick_texture)
  block_0= new Objects_G(windowWidth-270,windowHeight-windowHeight/4-6,50,375,Brick_texture)
  block_1 = new Objects_G(windowWidth-270,windowHeight-windowHeight/2-75,50,200,Brick_texture)
  block_2 = new Objects_G(windowWidth/2+100,windowHeight/2-160,825,25,Brick_texture)
  //block_3 = new Objects_G(windowWidth/2+250,85,10,200,Brick_texture)

  //block_4 = new Objects_G(windowWidth/2-275,windowHeight/2-150,175,15,Brick_texture)
  block_5 = new Objects_G(windowWidth/2,windowHeight/2-25,650,25,Brick_texture)
  block_6 = new Objects_G(windowWidth/2-230,windowHeight/2+75,25,220,Brick_texture)
  block_7 = new Objects_G(windowWidth/2-100,windowHeight/2+175,300,25,Brick_texture)
  block_8 = new Objects_G(windowWidth/2,windowHeight,25,70,Brick_texture)
  //block_9 = new Slope(windowWidth/2-285,windowHeight/2+145,100,10,Brick_texture)
  bound = new Objects_G(250,windowHeight/2,25,windowHeight,Brick_texture)
  block_10 = new Objects_G(windowWidth/2-400,windowHeight-5,225,14,Brick_texture)
  block_11 = new Objects_G(windowWidth/2-400+112,windowHeight,10,225,Brick_texture)
  ball_1 = new Ball(windowWidth/2+325,10,75,75)
  ball_2 = new Ball(windowWidth/2-120,windowHeight/2-100,75,75)
  puncher_1 = new Objects_G(windowWidth-300,140,200,100,punch_img)
  power_1 = new Objects_G(windowWidth-100,140,200,100,r_wheel_img)

  
  elec_switch_1 = createSprite(windowWidth-100,240)
  elec_switch_1.addImage(s_off_img)
  elec_switch_1.scale = 0.25
  
  st1 = new Objects_G(windowWidth-340,windowHeight-5,100,10,Brick_texture)
  st2 = new Objects_G(windowWidth-315,windowHeight-15,85,10,Brick_texture)
  st3 = new Objects_G(windowWidth-290,windowHeight-25,70,10,Brick_texture)
  puncher_2 = new Punch(100,100,200,100)

  ground = new Objects_G(windowWidth/2,windowHeight,windowWidth,2,Brick_texture)

  goal = createSprite(600,windowHeight-80)
  goal.addImage(goal_img)
  goal.scale = 0.15

  obj_op = new Objects_G(400,windowHeight-180,300,10,Brick_texture)

  reload = createSprite(100,windowHeight-200)
  reload.addImage(reload_img)
  reload.scale = 0.15



  
  


  

  
  rabbit_2 = new Rabbit(100,250,200,100)
  tp_1 = new Objects_G(100,400,75,25,tp_img)
  

  tracker = createSprite(100,100)
  tracker.addImage(tr_img)
  tracker.scale = 0.1

  but_1 = createSprite(100,100)
  but_1.addImage(punch_img)
  but_1.scale = 0.1

  but_2 = createSprite(100,250)
  but_2.addImage(r_wheel_img)
  but_2.scale = 0.2

  but_3 = createSprite(100,400)
  but_3.addImage(tp_img)
  but_3.scale = 0.3



  execute_btn = createSprite(windowWidth-75,windowHeight-75)
  execute_btn.addImage(execute_img)
  execute_btn.scale = 0.2

  setting = createSprite(windowWidth-100,100)
  setting.addImage(settings_img)
  setting.scale = 0.25
  setting.visible = false

  play_bt = createSprite(windowWidth/2,windowHeight-windowHeight/4+50)
  play_bt.addImage(play_bt_img)
  play_bt.scale = 0.7
  play_bt.visible = false

  w_banner = createSprite(windowWidth/2,windowHeight/4-50)
  w_banner.addImage(w_banner_img)
  w_banner.scale = 0.75
  w_banner.visible = false

  continue_btn = createSprite(windowWidth/3+10,windowHeight/2+100)
  continue_btn.addImage(continue_img)
  continue_btn.visible = false

  begin_btn = createSprite(windowWidth-windowWidth/3,windowHeight/2+100)
  begin_btn.addImage(begin_img)
  begin_btn.visible = false

  /*next_btn = createSprite(windowWidth-100,windowHeight-100)
  next_btn.addImage(next_img)
  next_btn.scale = 0.25
  next_btn.visible = false*/

  back_btn = createSprite(100,windowHeight-100)
  back_btn.addImage(back_img)
  back_btn.scale= 0.25
  back_btn.visible = false

  ballon = createSprite(windowWidth-100,windowHeight-windowHeight/4)
  ballon.addImage(ballon_img)
  ballon.scale = 0.2
 
  ballon.setCollider("circle",0,-300,225)

  next = createSprite(100,windowHeight-50)
  next.addImage(next_img)
  next.scale = 0.25

  win = createSprite(windowWidth/2,windowHeight/2)
  win.addImage(win_img)
  win.scale = 1.2
  win.visible = false

}

function draw() 
{
  if(GAME_S==welcome){
  background(bg1);    
  }else{
    background(bg1)
  }


var roa = 0
var toa = 0
  if(ballon.position.y<=elec_switch_1.position.y&&ballon.position.y>elec_switch_1.position.y-75){
    toa = 1
  }else{
toa = 0
  }

  if(toa == 1){
    is_e1_on = true
  }else {
    is_e1_on = false
  }


  if(is_e1_on == true){
    is_pu_on = true
    ball_1.body.force.x=-0.015
   //ball_2.body.position.x = 0
    
  }

  

  //////////////////////////////////

  
  

  if(ball_1.body.position.x <= rabbit_2.body.position.x+100&&ball_1.body.position.x> rabbit_2.body.position.x-100){
    roa = 1
    //trim = frameCount
    
  }else{
    roa = 0
  }

  if(roa == 1){
    is_e2_on = true
    inc_value = inc_value+0.01
  }else{
    is_e2_on = false
  }

  if(is_e2_on == true&&inc_value<0.7){
    is_pu2_on = true
    ball_2.body.force.x = 0.02
    
  }else if(inc_value >1){
    ball_2.body.force.x = 0
  }

  if(ball_1.body.position.x == 5)

  
///////////////////////////////////////////
inc2_value = inc2_value + 0.01
if(ball_2.body.position.x < st1.body.position.x&&ball_2.body.position.x>st1.body.position.x-100&&inc2_value<0.5&&ball_2.body.position.y>windowHeight-150&&puncher_2.body.position.x>200){
  ball_2.body.force.x = -0.02

}else if(inc2_value>1){
  ball_2.body.force.x = 0
}




///////////////////////////////////////////////

  


if(ball_2.body.position.x > tp_1.body.position.x&&ball_2.body.position.x<tp_1.body.position.x+90){
  if(ball_2.body.position.y>tp_1.body.position.y-90&&ball_2.body.position.y>tp_1.body.position.y-50){
    ball_2.body.force.y = -0.06
    ball_2.body.force.x = -0.09
    console.log("okkkkkkkkkkkkkkkkk")

  }
}


  if(ball_2.body.position.x <goal.position.x+150&&ball_2.body.position.y>goal.position.y-100){
    win.visible = true
    reload.depth = win.depth
    reload.depth = reload.depth+1
    reload.position.x = windowWidth/2
  }




  if(mousePressedOver(reload)){
    location.reload()
  }






/////////////////////////////////////

  if(mousePressedOver(but_1)&&can_s1 == true){
    Placing_stage = obj_selected
    sel_obj = 1
    
  }
  if(mousePressedOver(but_2)&&can_s2 == true){
    Placing_stage = obj_selected
    sel_obj = 2
    
  }
  if(mousePressedOver(but_3)&&can_s3 == true){
    Placing_stage = obj_selected
    sel_obj = 3
    
  }
  
  //console.log(Placing_stage,sel_obj)

  if(mousePressedOver(execute_btn)&&Placing_stage==obj_selected){
    Placing_stage = loc
    time = frameCount

    if(sel_obj == 1 ){
      tracker.addImage(punch2_img)
      tracker.scale = 0.18
    }
    if(sel_obj == 2 ){
      tracker.addImage(r_wheel_img)
      tracker.scale = 0.335
    }
    if(sel_obj == 3 ){
      tracker.addImage(tp_img)
      tracker.scale = 0.3
    }

    //tracker.addImage(tr_img)
  }

  if(Placing_stage == loc){
    tracker.position.x = mouseX
    tracker.position.y = mouseY
  }
var mx,my
  if(mousePressedOver(tracker)&&Placing_stage==loc&&frameCount>time + 15){
    Placing_stage = loc_selected
    mx = mouseX
    my = mouseY
    sel_loc = [mx,my]
    tracker.position.x= mx
    tracker.position.y = my
    time = frameCount
  }

    if(mousePressedOver(execute_btn)&&Placing_stage==loc_selected&&frameCount>time+20&&sel_obj==1){
      can_s1 = false
      tracker.addImage(tr_blank_img)
      Placing_stage = placed
      can_d1 = true
      but_1.position.x = 30000

      p_inv = new Objects_G(tracker.position.x,tracker.position.y,200,100,tr_img)
      p_inv.display()

      puncher_2.body.position.x = tracker.position.x
      puncher_2.body.position.y = tracker.position.y

    }


    if(mousePressedOver(execute_btn)&&Placing_stage==loc_selected&&frameCount>time+20&&sel_obj==2){
      can_s2 = false
      tracker.addImage(tr_blank_img)
      Placing_stage = placed
      can_d2 = true
      but_2.position.x = 30000

      r_inv = new Objects_G(tracker.position.x,tracker.position.y,200,100,tr_img)
      r_inv.display()
      
      rabbit_2.body.position.x = tracker.position.x
      rabbit_2.body.position.y = tracker.position.y
        }


    if(mousePressedOver(execute_btn)&&Placing_stage==loc_selected&&frameCount>time+20&&sel_obj==3){
      can_s3 = false
      tracker.addImage(tr_blank_img)
      Placing_stage = placed
      can_d3 = true
      but_3.position.x = 30000
      tp_1.body.position.x = tracker.position.x
      tp_1.body.position.y = tracker.position.y
        }


    

  //console.log(can_s1,can_s2,can_s3,can_s4)

  
//Matter.Body.applyForce(ball_1,{x:0,y:0},{x:-5,y:0})
  
  
  Engine.update(engine);

//console.log(is_e1_on)

  if(mousePressedOver(next)){
    GAME_S = lvl_play
  }

  if(GAME_S==welcome){
    
    setting.visible = true;
    play_bt.visible = true
    w_banner.visible = true

      if(mousePressedOver(play_bt)){
        GAME_S = lvl_play
      }
    
  }else if(GAME_S==settings){
    

  }/*else if(GAME_S==ch_Gtype){

    setting.visible =  true
    play_bt.visible = false
    w_banner.visible = true
    continue_btn.visible = true
    begin_btn.visible = true
    back_btn.visible = true

    if(mousePressedOver(continue_btn)){
      GAME_S = lvl_intro
      g_type = con
    }

    if(mousePressedOver(begin_btn)){
      GAME_S = lvl_intro
      g_type = skip
    }

    textSize(32)
    textAlign(CENTER, CENTER);
    fill("Red")
    text("Skip-key is a numberic key that you got when you clear any level",windowWidth/2,windowHeight-100)

  }*/else if(GAME_S==lvl_intro){











    play_bt.visible = false
    w_banner.visible = false
    ballon.velocityY = 0
    //r_block0.display()
    block_0.display()
    block_1.display()
    block_2.display()
    //block_3.display()
   // block_4.display()
    block_5.display()
    block_6.display()
    block_7.display()
    block_8.display()
    //block_9.display()
    bound.display()
    //block_10.display() //
    //block_11.display() //
    ball_1.show()
    ball_2.show()
    if(can_d1 == true){
      puncher_2.display()
    }
    if(can_d2 == true){
      rabbit_2.display()
    }
    if(can_d3 == true){
      tp_1.display()
    }
    

    puncher_1.display()
    power_1.display()
    
    
   
    st1.display()
    st2.display()
    st3.display()
    ground.display()
    obj_op.display()
    
    

  }else if(GAME_S==lvl_play){
    play_bt.visible = false
    w_banner.visible = false
    ballon.velocityY = -10
    //r_block0.display()
    block_0.display()
    block_1.display()
    block_2.display()
    //block_3.display()
   // block_4.display()
    block_5.display()
    block_6.display()
    block_7.display()
    block_8.display()
    //block_9.display()
    bound.display()
    //block_10.display()
    //block_11.display()
    ball_1.show()
    ball_2.show()
    if(can_d1 == true){
      puncher_2.display()
    }
    if(can_d2 == true){
      rabbit_2.display()
    }
    if(can_d3 == true){
      tp_1.display()
    }
    

    puncher_1.display()
    power_1.display()
    
    next.visible = false
   
    st1.display()
    st2.display()
    st3.display()
    ground.display()
    obj_op.display()
    
    

    
    
    

    if(s_o(r_block0,ballon,130)){
      ballon.velocityY = -1
    }else{
      ballon.velocityY = -1
    }

  }else if(GAME_S==lvl_outro){

  }
    
 
  
  //image(bg_img,0,0,width,height);



  
  drawSprites()

  
  
}

function s_o(body,sprite,dis){
  if(body!=null){
    var d = dist(body.body.position.x,body.body.position.y,sprite.position.x,sprite.position.y);
    if(d>=dis){
      //World.remove(engine.world,fruit);
      //fruit = null;
      return true; 
    }else {
      return true;
    }
  }
}
function o_o(body,body2,dis){
  if(body!=null&&body2!=null){
    var d = dist(body.body.position.x,body.body.position.y,body2.body.position.x,body2.body.position.y);
    if(d<=dis){
      //World.remove(engine.world,fruit);
      //fruit = null;
      return true; 
    }else {
      return true;
    }
  }
}

function s_s(sprite1,sprite,dis){
  
    var d = dist(sprite1.position.x,sprite1.position.y,sprite.position.x,sprite.position.y);
    if(d<=dis){
      //World.remove(engine.world,fruit);
      //fruit = null;
      return true; 
    }else{
      return false;
    }
  
}

function push_obj(){
  
}