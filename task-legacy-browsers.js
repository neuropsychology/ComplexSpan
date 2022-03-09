/************* 
 * Task Test *
 *************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructions_memoryRoutineBegin());
flowScheduler.add(instructions_memoryRoutineEachFrame());
flowScheduler.add(instructions_memoryRoutineEnd());
const next_levelLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(next_levelLoopBegin, next_levelLoopScheduler);
flowScheduler.add(next_levelLoopScheduler);
flowScheduler.add(next_levelLoopEnd);
flowScheduler.add(instructions_processingRoutineBegin());
flowScheduler.add(instructions_processingRoutineEachFrame());
flowScheduler.add(instructions_processingRoutineEnd());
const repeat_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_practiceLoopBegin, repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopEnd);
flowScheduler.add(instructions_complex_pracRoutineBegin());
flowScheduler.add(instructions_complex_pracRoutineEachFrame());
flowScheduler.add(instructions_complex_pracRoutineEnd());
const span_recall_pracLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span_recall_pracLoopBegin, span_recall_pracLoopScheduler);
flowScheduler.add(span_recall_pracLoopScheduler);
flowScheduler.add(span_recall_pracLoopEnd);
flowScheduler.add(instructions_complexRoutineBegin());
flowScheduler.add(instructions_complexRoutineEachFrame());
flowScheduler.add(instructions_complexRoutineEnd());
const span_recallLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(span_recallLoopBegin, span_recallLoopScheduler);
flowScheduler.add(span_recallLoopScheduler);
flowScheduler.add(span_recallLoopEnd);
flowScheduler.add(finishedRoutineBegin());
flowScheduler.add(finishedRoutineEachFrame());
flowScheduler.add(finishedRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructions_memoryClock;
var instructions_2;
var key_resp_4;
var show_lettersClock;
var text_2;
var recallClock;
var key_resp_5;
var text_feedback;
var instructions_3;
var instructions_processingClock;
var instructions;
var key_resp_2;
var trials_processingClock;
var operation;
var key_resp;
var operation_feedback;
var instructions_8;
var feedbackClock;
var feedback_msg;
var final_feedbackClock;
var feedback_msg_2;
var key_resp_3;
var instructions_complex_pracClock;
var instructions_4;
var key_resp_6;
var trials_processing_pracClock;
var operation_3;
var key_resp_11;
var operation_feedback_2;
var instructions_9;
var feedback_quickClock;
var feedback_msg_4;
var operation_4;
var show_letters_pracClock;
var text_3;
var recall_pracClock;
var key_resp_9;
var text_feedback_3;
var instructions_6;
var feedback_2Clock;
var feedback_msg_3;
var instructions_complexClock;
var instructions_7;
var key_resp_10;
var trials_processing_2Clock;
var operation_2;
var key_resp_7;
var operation_feedback_3;
var instructions_10;
var feedback_quick_2Clock;
var feedback_msg_5;
var operation_5;
var show_letters_2Clock;
var text;
var recall_2Clock;
var key_resp_8;
var text_feedback_2;
var instructions_5;
var finishedClock;
var finish;
var key_resp_12;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions_memory"
  instructions_memoryClock = new util.Clock();
  instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_2',
    text: 'Letters will now appear one by one.\nPlease remember them in the correct order of appearance.\nDo not say the letters out loud while recalling.\n\nPress space to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "show_letters"
  show_lettersClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "recall"
  recallClock = new util.Clock();
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  instructions_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "instructions_processing"
  instructions_processingClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'You will now see a series of math equations, of which you will type in the correct answer.\n\nPlease also try to keep your score above 65%.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_processing"
  trials_processingClock = new util.Clock();
  operation = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  operation_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_feedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  instructions_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_8',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedback_msg = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "final_feedback"
  final_feedbackClock = new util.Clock();
  feedback_msg_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instructions_complex_prac"
  instructions_complex_pracClock = new util.Clock();
  instructions_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_4',
    text: 'In this block, each math equation will be followed by a letter to be recalled.\n\nEquations will continually be presented unless you correctly answer them in the limited time given.\nPlease accurately respond to the equations and remember the letters presented after.\n\nYou will first start with some practice trials where feedback is provided.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_processing_prac"
  trials_processing_pracClock = new util.Clock();
  operation_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  operation_feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_feedback_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  instructions_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_9',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback_quick"
  feedback_quickClock = new util.Clock();
  feedback_msg_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  operation_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_4',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "show_letters_prac"
  show_letters_pracClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "recall_prac"
  recall_pracClock = new util.Clock();
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  instructions_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_6',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "feedback_2"
  feedback_2Clock = new util.Clock();
  feedback_msg_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "instructions_complex"
  instructions_complexClock = new util.Clock();
  instructions_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_7',
    text: 'Now you will start the actual task.\n\nAgain, each math equation will be followed by a letter to be recalled.\n\nEquations will continually be presented unless you correctly answer them in the limited time given.\nPlease accurately respond to the equations and remember the letters presented after.\nNo feedback will be provided on whether the letters are correct or not.\nTry not to say the letters out loud while recalling.\n\nPress space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trials_processing_2"
  trials_processing_2Clock = new util.Clock();
  operation_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  operation_feedback_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_feedback_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  instructions_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_10',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "feedback_quick_2"
  feedback_quick_2Clock = new util.Clock();
  feedback_msg_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_msg_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  operation_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'operation_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "show_letters_2"
  show_letters_2Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "recall_2"
  recall_2Clock = new util.Clock();
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_feedback_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.15,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  instructions_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_5',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "finished"
  finishedClock = new util.Clock();
  finish = new visual.TextStim({
    win: psychoJS.window,
    name: 'finish',
    text: 'You have now come to the end of the task.\nPlease call the experimenter into the room.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_4_allKeys;
var instructions_memoryComponents;
function instructions_memoryRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_memory'-------
    t = 0;
    instructions_memoryClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    instructions_memoryComponents = [];
    instructions_memoryComponents.push(instructions_2);
    instructions_memoryComponents.push(key_resp_4);
    
    instructions_memoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_memoryRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_memory'-------
    // get current time
    t = instructions_memoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_2* updates
    if (t >= 0.5 && instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_2.tStart = t;  // (not accounting for frame time here)
      instructions_2.frameNStart = frameN;  // exact frame index
      
      instructions_2.setAutoDraw(true);
    }

    
    // *key_resp_4* updates
    if (t >= 0.5 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_memoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_memoryRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_memory'-------
    instructions_memoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "instructions_memory" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var next_level;
var currentLoop;
function next_levelLoopBegin(next_levelLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  next_level = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'next_level'
  });
  psychoJS.experiment.addLoop(next_level); // add the loop to the experiment
  currentLoop = next_level;  // we're now the current loop

  // Schedule all the trials in the trialList:
  next_level.forEach(function() {
    const snapshot = next_level.getSnapshot();

    next_levelLoopScheduler.add(importConditions(snapshot));
    const next_letterLoopScheduler = new Scheduler(psychoJS);
    next_levelLoopScheduler.add(next_letterLoopBegin, next_letterLoopScheduler);
    next_levelLoopScheduler.add(next_letterLoopScheduler);
    next_levelLoopScheduler.add(next_letterLoopEnd);
    next_levelLoopScheduler.add(recallRoutineBegin(snapshot));
    next_levelLoopScheduler.add(recallRoutineEachFrame(snapshot));
    next_levelLoopScheduler.add(recallRoutineEnd(snapshot));
    next_levelLoopScheduler.add(endLoopIteration(next_levelLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var next_letter;
function next_letterLoopBegin(next_letterLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  next_letter = new TrialHandler({
    psychoJS: psychoJS,
    nReps: stimuli_count, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'next_letter'
  });
  psychoJS.experiment.addLoop(next_letter); // add the loop to the experiment
  currentLoop = next_letter;  // we're now the current loop

  // Schedule all the trials in the trialList:
  next_letter.forEach(function() {
    const snapshot = next_letter.getSnapshot();

    next_letterLoopScheduler.add(importConditions(snapshot));
    next_letterLoopScheduler.add(show_lettersRoutineBegin(snapshot));
    next_letterLoopScheduler.add(show_lettersRoutineEachFrame(snapshot));
    next_letterLoopScheduler.add(show_lettersRoutineEnd(snapshot));
    next_letterLoopScheduler.add(endLoopIteration(next_letterLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function next_letterLoopEnd() {
  psychoJS.experiment.removeLoop(next_letter);

  return Scheduler.Event.NEXT;
}


function next_levelLoopEnd() {
  psychoJS.experiment.removeLoop(next_level);

  return Scheduler.Event.NEXT;
}


var repeat_practice;
function repeat_practiceLoopBegin(repeat_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_practice'
  });
  psychoJS.experiment.addLoop(repeat_practice); // add the loop to the experiment
  currentLoop = repeat_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  repeat_practice.forEach(function() {
    const snapshot = repeat_practice.getSnapshot();

    repeat_practiceLoopScheduler.add(importConditions(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    repeat_practiceLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    repeat_practiceLoopScheduler.add(trialsLoopScheduler);
    repeat_practiceLoopScheduler.add(trialsLoopEnd);
    repeat_practiceLoopScheduler.add(final_feedbackRoutineBegin(snapshot));
    repeat_practiceLoopScheduler.add(final_feedbackRoutineEachFrame(snapshot));
    repeat_practiceLoopScheduler.add(final_feedbackRoutineEnd(snapshot));
    repeat_practiceLoopScheduler.add(endLoopIteration(repeat_practiceLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/processing_only_2.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trials_processingRoutineBegin(snapshot));
    trialsLoopScheduler.add(trials_processingRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trials_processingRoutineEnd(snapshot));
    trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
    trialsLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function repeat_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_practice);

  return Scheduler.Event.NEXT;
}


var span_recall_prac;
function span_recall_pracLoopBegin(span_recall_pracLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  span_recall_prac = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'span_recall_prac'
  });
  psychoJS.experiment.addLoop(span_recall_prac); // add the loop to the experiment
  currentLoop = span_recall_prac;  // we're now the current loop

  // Schedule all the trials in the trialList:
  span_recall_prac.forEach(function() {
    const snapshot = span_recall_prac.getSnapshot();

    span_recall_pracLoopScheduler.add(importConditions(snapshot));
    const span_size_pracLoopScheduler = new Scheduler(psychoJS);
    span_recall_pracLoopScheduler.add(span_size_pracLoopBegin, span_size_pracLoopScheduler);
    span_recall_pracLoopScheduler.add(span_size_pracLoopScheduler);
    span_recall_pracLoopScheduler.add(span_size_pracLoopEnd);
    span_recall_pracLoopScheduler.add(recall_pracRoutineBegin(snapshot));
    span_recall_pracLoopScheduler.add(recall_pracRoutineEachFrame(snapshot));
    span_recall_pracLoopScheduler.add(recall_pracRoutineEnd(snapshot));
    span_recall_pracLoopScheduler.add(feedback_2RoutineBegin(snapshot));
    span_recall_pracLoopScheduler.add(feedback_2RoutineEachFrame(snapshot));
    span_recall_pracLoopScheduler.add(feedback_2RoutineEnd(snapshot));
    span_recall_pracLoopScheduler.add(endLoopIteration(span_recall_pracLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var span_size_prac;
function span_size_pracLoopBegin(span_size_pracLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  span_size_prac = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'span_size_prac'
  });
  psychoJS.experiment.addLoop(span_size_prac); // add the loop to the experiment
  currentLoop = span_size_prac;  // we're now the current loop

  // Schedule all the trials in the trialList:
  span_size_prac.forEach(function() {
    const snapshot = span_size_prac.getSnapshot();

    span_size_pracLoopScheduler.add(importConditions(snapshot));
    const repeat_if_wrong_pracLoopScheduler = new Scheduler(psychoJS);
    span_size_pracLoopScheduler.add(repeat_if_wrong_pracLoopBegin, repeat_if_wrong_pracLoopScheduler);
    span_size_pracLoopScheduler.add(repeat_if_wrong_pracLoopScheduler);
    span_size_pracLoopScheduler.add(repeat_if_wrong_pracLoopEnd);
    span_size_pracLoopScheduler.add(show_letters_pracRoutineBegin(snapshot));
    span_size_pracLoopScheduler.add(show_letters_pracRoutineEachFrame(snapshot));
    span_size_pracLoopScheduler.add(show_letters_pracRoutineEnd(snapshot));
    span_size_pracLoopScheduler.add(endLoopIteration(span_size_pracLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var repeat_if_wrong_prac;
function repeat_if_wrong_pracLoopBegin(repeat_if_wrong_pracLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_if_wrong_prac = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/processing_only_2.xlsx',
    seed: undefined, name: 'repeat_if_wrong_prac'
  });
  psychoJS.experiment.addLoop(repeat_if_wrong_prac); // add the loop to the experiment
  currentLoop = repeat_if_wrong_prac;  // we're now the current loop

  // Schedule all the trials in the trialList:
  repeat_if_wrong_prac.forEach(function() {
    const snapshot = repeat_if_wrong_prac.getSnapshot();

    repeat_if_wrong_pracLoopScheduler.add(importConditions(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(trials_processing_pracRoutineBegin(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(trials_processing_pracRoutineEachFrame(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(trials_processing_pracRoutineEnd(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(feedback_quickRoutineBegin(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(feedback_quickRoutineEachFrame(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(feedback_quickRoutineEnd(snapshot));
    repeat_if_wrong_pracLoopScheduler.add(endLoopIteration(repeat_if_wrong_pracLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function repeat_if_wrong_pracLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_if_wrong_prac);

  return Scheduler.Event.NEXT;
}


function span_size_pracLoopEnd() {
  psychoJS.experiment.removeLoop(span_size_prac);

  return Scheduler.Event.NEXT;
}


function span_recall_pracLoopEnd() {
  psychoJS.experiment.removeLoop(span_recall_prac);

  return Scheduler.Event.NEXT;
}


var span_recall;
function span_recallLoopBegin(span_recallLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  span_recall = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'span_recall'
  });
  psychoJS.experiment.addLoop(span_recall); // add the loop to the experiment
  currentLoop = span_recall;  // we're now the current loop

  // Schedule all the trials in the trialList:
  span_recall.forEach(function() {
    const snapshot = span_recall.getSnapshot();

    span_recallLoopScheduler.add(importConditions(snapshot));
    const span_sizeLoopScheduler = new Scheduler(psychoJS);
    span_recallLoopScheduler.add(span_sizeLoopBegin, span_sizeLoopScheduler);
    span_recallLoopScheduler.add(span_sizeLoopScheduler);
    span_recallLoopScheduler.add(span_sizeLoopEnd);
    span_recallLoopScheduler.add(recall_2RoutineBegin(snapshot));
    span_recallLoopScheduler.add(recall_2RoutineEachFrame(snapshot));
    span_recallLoopScheduler.add(recall_2RoutineEnd(snapshot));
    span_recallLoopScheduler.add(endLoopIteration(span_recallLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var span_size;
function span_sizeLoopBegin(span_sizeLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  span_size = new TrialHandler({
    psychoJS: psychoJS,
    nReps: span_count, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'span_size'
  });
  psychoJS.experiment.addLoop(span_size); // add the loop to the experiment
  currentLoop = span_size;  // we're now the current loop

  // Schedule all the trials in the trialList:
  span_size.forEach(function() {
    const snapshot = span_size.getSnapshot();

    span_sizeLoopScheduler.add(importConditions(snapshot));
    const repeat_if_wrongLoopScheduler = new Scheduler(psychoJS);
    span_sizeLoopScheduler.add(repeat_if_wrongLoopBegin, repeat_if_wrongLoopScheduler);
    span_sizeLoopScheduler.add(repeat_if_wrongLoopScheduler);
    span_sizeLoopScheduler.add(repeat_if_wrongLoopEnd);
    span_sizeLoopScheduler.add(show_letters_2RoutineBegin(snapshot));
    span_sizeLoopScheduler.add(show_letters_2RoutineEachFrame(snapshot));
    span_sizeLoopScheduler.add(show_letters_2RoutineEnd(snapshot));
    span_sizeLoopScheduler.add(endLoopIteration(span_sizeLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var repeat_if_wrong;
function repeat_if_wrongLoopBegin(repeat_if_wrongLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_if_wrong = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 999, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'resources/processing_only_2.xlsx',
    seed: undefined, name: 'repeat_if_wrong'
  });
  psychoJS.experiment.addLoop(repeat_if_wrong); // add the loop to the experiment
  currentLoop = repeat_if_wrong;  // we're now the current loop

  // Schedule all the trials in the trialList:
  repeat_if_wrong.forEach(function() {
    const snapshot = repeat_if_wrong.getSnapshot();

    repeat_if_wrongLoopScheduler.add(importConditions(snapshot));
    repeat_if_wrongLoopScheduler.add(trials_processing_2RoutineBegin(snapshot));
    repeat_if_wrongLoopScheduler.add(trials_processing_2RoutineEachFrame(snapshot));
    repeat_if_wrongLoopScheduler.add(trials_processing_2RoutineEnd(snapshot));
    repeat_if_wrongLoopScheduler.add(feedback_quick_2RoutineBegin(snapshot));
    repeat_if_wrongLoopScheduler.add(feedback_quick_2RoutineEachFrame(snapshot));
    repeat_if_wrongLoopScheduler.add(feedback_quick_2RoutineEnd(snapshot));
    repeat_if_wrongLoopScheduler.add(endLoopIteration(repeat_if_wrongLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function repeat_if_wrongLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_if_wrong);

  return Scheduler.Event.NEXT;
}


function span_sizeLoopEnd() {
  psychoJS.experiment.removeLoop(span_size);

  return Scheduler.Event.NEXT;
}


function span_recallLoopEnd() {
  psychoJS.experiment.removeLoop(span_recall);

  return Scheduler.Event.NEXT;
}


var show_lettersComponents;
function show_lettersRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_letters'-------
    t = 0;
    show_lettersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.300000);
    // update component parameters for each repeat
    text_2.setText(chosen_stimuli[loop_i]);
    // keep track of which components have finished
    show_lettersComponents = [];
    show_lettersComponents.push(text_2);
    
    show_lettersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function show_lettersRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_letters'-------
    // get current time
    t = show_lettersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.5 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    show_lettersComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_lettersRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_letters'-------
    show_lettersComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var recallComponents;
function recallRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'recall'-------
    t = 0;
    recallClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    instructions_3.setText('Answer and press enter.');
    // keep track of which components have finished
    recallComponents = [];
    recallComponents.push(key_resp_5);
    recallComponents.push(text_feedback);
    recallComponents.push(instructions_3);
    
    recallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recallRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'recall'-------
    // get current time
    t = recallClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_5* updates
    if (t >= 0.5 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'backspace', 'return'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys.map((key) => key.name);  // storing all keys
        key_resp_5.rt = _key_resp_5_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *text_feedback* updates
    if (t >= 0.5 && text_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback.tStart = t;  // (not accounting for frame time here)
      text_feedback.frameNStart = frameN;  // exact frame index
      
      text_feedback.setAutoDraw(true);
    }

    
    if (text_feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_feedback.setText(screen_text, false);
    }
    
    // *instructions_3* updates
    if (t >= 0.5 && instructions_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_3.tStart = t;  // (not accounting for frame time here)
      instructions_3.frameNStart = frameN;  // exact frame index
      
      instructions_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recallComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recallRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'recall'-------
    recallComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        }
    
    key_resp_5.stop();
    // the Routine "recall" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var instructions_processingComponents;
function instructions_processingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_processing'-------
    t = 0;
    instructions_processingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    instructions_processingComponents = [];
    instructions_processingComponents.push(instructions);
    instructions_processingComponents.push(key_resp_2);
    
    instructions_processingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_processingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_processing'-------
    // get current time
    t = instructions_processingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.5 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.5 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_processingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_processingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_processing'-------
    instructions_processingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instructions_processing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var trials_processingComponents;
function trials_processingRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trials_processing'-------
    t = 0;
    trials_processingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    operation.setText(Problem);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    instructions_8.setText('Answer?');
    // keep track of which components have finished
    trials_processingComponents = [];
    trials_processingComponents.push(operation);
    trials_processingComponents.push(key_resp);
    trials_processingComponents.push(operation_feedback);
    trials_processingComponents.push(instructions_8);
    
    trials_processingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trials_processingRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trials_processing'-------
    // get current time
    t = trials_processingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *operation* updates
    if (t >= 0.5 && operation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation.tStart = t;  // (not accounting for frame time here)
      operation.frameNStart = frameN;  // exact frame index
      
      operation.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.5 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys.map((key) => key.name);  // storing all keys
        key_resp.rt = _key_resp_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp.keys == Operation_answer) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *operation_feedback* updates
    if (t >= 0.5 && operation_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_feedback.tStart = t;  // (not accounting for frame time here)
      operation_feedback.frameNStart = frameN;  // exact frame index
      
      operation_feedback.setAutoDraw(true);
    }

    
    if (operation_feedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      operation_feedback.setText(operation_text, false);
    }
    
    // *instructions_8* updates
    if (t >= 0.5 && instructions_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_8.tStart = t;  // (not accounting for frame time here)
      instructions_8.frameNStart = frameN;  // exact frame index
      
      instructions_8.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trials_processingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_processingRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trials_processing'-------
    trials_processingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(Operation_answer)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trials_processing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    feedback_msg.setColor(new util.Color(msgColor));
    feedback_msg.setText(msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_msg);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg* updates
    if (t >= 0.5 && feedback_msg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg.tStart = t;  // (not accounting for frame time here)
      feedback_msg.frameNStart = frameN;  // exact frame index
      
      feedback_msg.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_msg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_msg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var final_feedbackComponents;
function final_feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'final_feedback'-------
    t = 0;
    final_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedback_msg_2.setText(proc_msg);
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    final_feedbackComponents = [];
    final_feedbackComponents.push(feedback_msg_2);
    final_feedbackComponents.push(key_resp_3);
    
    final_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function final_feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'final_feedback'-------
    // get current time
    t = final_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg_2* updates
    if (t >= 0.5 && feedback_msg_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg_2.tStart = t;  // (not accounting for frame time here)
      feedback_msg_2.frameNStart = frameN;  // exact frame index
      
      feedback_msg_2.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.5 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    final_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function final_feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'final_feedback'-------
    final_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "final_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var instructions_complex_pracComponents;
function instructions_complex_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_complex_prac'-------
    t = 0;
    instructions_complex_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    instructions_complex_pracComponents = [];
    instructions_complex_pracComponents.push(instructions_4);
    instructions_complex_pracComponents.push(key_resp_6);
    
    instructions_complex_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_complex_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_complex_prac'-------
    // get current time
    t = instructions_complex_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_4* updates
    if (t >= 0.5 && instructions_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_4.tStart = t;  // (not accounting for frame time here)
      instructions_4.frameNStart = frameN;  // exact frame index
      
      instructions_4.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.5 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_complex_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_complex_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_complex_prac'-------
    instructions_complex_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "instructions_complex_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var trials_processing_pracComponents;
function trials_processing_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trials_processing_prac'-------
    t = 0;
    trials_processing_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    operation_3.setText(Problem);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    instructions_9.setText('Answer?');
    // keep track of which components have finished
    trials_processing_pracComponents = [];
    trials_processing_pracComponents.push(operation_3);
    trials_processing_pracComponents.push(key_resp_11);
    trials_processing_pracComponents.push(operation_feedback_2);
    trials_processing_pracComponents.push(instructions_9);
    
    trials_processing_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trials_processing_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trials_processing_prac'-------
    // get current time
    t = trials_processing_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *operation_3* updates
    if (t >= 0.5 && operation_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_3.tStart = t;  // (not accounting for frame time here)
      operation_3.frameNStart = frameN;  // exact frame index
      
      operation_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_3.setAutoDraw(false);
    }
    
    // *key_resp_11* updates
    if (t >= 0.5 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_11.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys.map((key) => key.name);  // storing all keys
        key_resp_11.rt = _key_resp_11_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_11.keys == Operation_answer) {
            key_resp_11.corr = 1;
        } else {
            key_resp_11.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *operation_feedback_2* updates
    if (t >= 0.5 && operation_feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_feedback_2.tStart = t;  // (not accounting for frame time here)
      operation_feedback_2.frameNStart = frameN;  // exact frame index
      
      operation_feedback_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_feedback_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_feedback_2.setAutoDraw(false);
    }
    
    if (operation_feedback_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      operation_feedback_2.setText(operation_text_2, false);
    }
    
    // *instructions_9* updates
    if (t >= 0.5 && instructions_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_9.tStart = t;  // (not accounting for frame time here)
      instructions_9.frameNStart = frameN;  // exact frame index
      
      instructions_9.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instructions_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instructions_9.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trials_processing_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_processing_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trials_processing_prac'-------
    trials_processing_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_11.keys === undefined) {
      if (['None','none',undefined].includes(Operation_answer)) {
         key_resp_11.corr = 1;  // correct non-response
      } else {
         key_resp_11.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    psychoJS.experiment.addData('key_resp_11.corr', key_resp_11.corr);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "trials_processing_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_quickComponents;
function feedback_quickRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_quick'-------
    t = 0;
    feedback_quickClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    feedback_msg_4.setColor(new util.Color(msg3Color));
    feedback_msg_4.setText(msg3);
    operation_4.setText(Problem);
    // keep track of which components have finished
    feedback_quickComponents = [];
    feedback_quickComponents.push(feedback_msg_4);
    feedback_quickComponents.push(operation_4);
    
    feedback_quickComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_quickRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_quick'-------
    // get current time
    t = feedback_quickClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg_4* updates
    if (t >= 0 && feedback_msg_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg_4.tStart = t;  // (not accounting for frame time here)
      feedback_msg_4.frameNStart = frameN;  // exact frame index
      
      feedback_msg_4.setAutoDraw(true);
    }

    frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_msg_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_msg_4.setAutoDraw(false);
    }
    
    // *operation_4* updates
    if (t >= 0 && operation_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_4.tStart = t;  // (not accounting for frame time here)
      operation_4.frameNStart = frameN;  // exact frame index
      
      operation_4.setAutoDraw(true);
    }

    frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_quickComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_quickRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_quick'-------
    feedback_quickComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var show_letters_pracComponents;
function show_letters_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_letters_prac'-------
    t = 0;
    show_letters_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.300000);
    // update component parameters for each repeat
    text_3.setText(chosen_stimuli_3[loop_i_3]);
    // keep track of which components have finished
    show_letters_pracComponents = [];
    show_letters_pracComponents.push(text_3);
    
    show_letters_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function show_letters_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_letters_prac'-------
    // get current time
    t = show_letters_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.5 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    show_letters_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_letters_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_letters_prac'-------
    show_letters_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var recall_pracComponents;
function recall_pracRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'recall_prac'-------
    t = 0;
    recall_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    instructions_6.setText('Answer and press enter.');
    // keep track of which components have finished
    recall_pracComponents = [];
    recall_pracComponents.push(key_resp_9);
    recall_pracComponents.push(text_feedback_3);
    recall_pracComponents.push(instructions_6);
    
    recall_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_pracRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'recall_prac'-------
    // get current time
    t = recall_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_9* updates
    if (t >= 0.5 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', 'return'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys.map((key) => key.name);  // storing all keys
        key_resp_9.rt = _key_resp_9_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_9.keys == correct_answer_3) {
            key_resp_9.corr = 1;
        } else {
            key_resp_9.corr = 0;
        }
      }
    }
    
    
    // *text_feedback_3* updates
    if (t >= 0.5 && text_feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback_3.tStart = t;  // (not accounting for frame time here)
      text_feedback_3.frameNStart = frameN;  // exact frame index
      
      text_feedback_3.setAutoDraw(true);
    }

    
    if (text_feedback_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_feedback_3.setText(screen_text_3, false);
    }
    
    // *instructions_6* updates
    if (t >= 0.5 && instructions_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_6.tStart = t;  // (not accounting for frame time here)
      instructions_6.frameNStart = frameN;  // exact frame index
      
      instructions_6.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_pracRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'recall_prac'-------
    recall_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_9.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer_3)) {
         key_resp_9.corr = 1;  // correct non-response
      } else {
         key_resp_9.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    psychoJS.experiment.addData('key_resp_9.corr', key_resp_9.corr);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        }
    
    key_resp_9.stop();
    // the Routine "recall_prac" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_2Components;
function feedback_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_2'-------
    t = 0;
    feedback_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    feedback_msg_3.setColor(new util.Color(msg2Color));
    feedback_msg_3.setText(msg2);
    // keep track of which components have finished
    feedback_2Components = [];
    feedback_2Components.push(feedback_msg_3);
    
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_2'-------
    // get current time
    t = feedback_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg_3* updates
    if (t >= 0.5 && feedback_msg_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg_3.tStart = t;  // (not accounting for frame time here)
      feedback_msg_3.frameNStart = frameN;  // exact frame index
      
      feedback_msg_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_msg_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_msg_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_2'-------
    feedback_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var instructions_complexComponents;
function instructions_complexRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions_complex'-------
    t = 0;
    instructions_complexClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    instructions_complexComponents = [];
    instructions_complexComponents.push(instructions_7);
    instructions_complexComponents.push(key_resp_10);
    
    instructions_complexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructions_complexRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions_complex'-------
    // get current time
    t = instructions_complexClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_7* updates
    if (t >= 0.5 && instructions_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_7.tStart = t;  // (not accounting for frame time here)
      instructions_7.frameNStart = frameN;  // exact frame index
      
      instructions_7.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 0.5 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructions_complexComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_complexRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions_complex'-------
    instructions_complexComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "instructions_complex" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var trials_processing_2Components;
function trials_processing_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trials_processing_2'-------
    t = 0;
    trials_processing_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    operation_2.setText(Problem);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    instructions_10.setText('Answer?');
    // keep track of which components have finished
    trials_processing_2Components = [];
    trials_processing_2Components.push(operation_2);
    trials_processing_2Components.push(key_resp_7);
    trials_processing_2Components.push(operation_feedback_3);
    trials_processing_2Components.push(instructions_10);
    
    trials_processing_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trials_processing_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trials_processing_2'-------
    // get current time
    t = trials_processing_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *operation_2* updates
    if (t >= 0.5 && operation_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_2.tStart = t;  // (not accounting for frame time here)
      operation_2.frameNStart = frameN;  // exact frame index
      
      operation_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_2.setAutoDraw(false);
    }
    
    // *key_resp_7* updates
    if (t >= 0.5 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_7.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys.map((key) => key.name);  // storing all keys
        key_resp_7.rt = _key_resp_7_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_7.keys == Operation_answer) {
            key_resp_7.corr = 1;
        } else {
            key_resp_7.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *operation_feedback_3* updates
    if (t >= 0.5 && operation_feedback_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_feedback_3.tStart = t;  // (not accounting for frame time here)
      operation_feedback_3.frameNStart = frameN;  // exact frame index
      
      operation_feedback_3.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_feedback_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_feedback_3.setAutoDraw(false);
    }
    
    if (operation_feedback_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      operation_feedback_3.setText(operation_text_3, false);
    }
    
    // *instructions_10* updates
    if (t >= 0.5 && instructions_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_10.tStart = t;  // (not accounting for frame time here)
      instructions_10.frameNStart = frameN;  // exact frame index
      
      instructions_10.setAutoDraw(true);
    }

    frameRemains = 0.5 + RT - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (instructions_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      instructions_10.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trials_processing_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trials_processing_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trials_processing_2'-------
    trials_processing_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_7.keys === undefined) {
      if (['None','none',undefined].includes(Operation_answer)) {
         key_resp_7.corr = 1;  // correct non-response
      } else {
         key_resp_7.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    psychoJS.experiment.addData('key_resp_7.corr', key_resp_7.corr);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "trials_processing_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_quick_2Components;
function feedback_quick_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback_quick_2'-------
    t = 0;
    feedback_quick_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    feedback_msg_5.setColor(new util.Color(msg4Color));
    feedback_msg_5.setText(msg4);
    operation_5.setText(Problem);
    // keep track of which components have finished
    feedback_quick_2Components = [];
    feedback_quick_2Components.push(feedback_msg_5);
    feedback_quick_2Components.push(operation_5);
    
    feedback_quick_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_quick_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback_quick_2'-------
    // get current time
    t = feedback_quick_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_msg_5* updates
    if (t >= 0 && feedback_msg_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_msg_5.tStart = t;  // (not accounting for frame time here)
      feedback_msg_5.frameNStart = frameN;  // exact frame index
      
      feedback_msg_5.setAutoDraw(true);
    }

    frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (feedback_msg_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      feedback_msg_5.setAutoDraw(false);
    }
    
    // *operation_5* updates
    if (t >= 0 && operation_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      operation_5.tStart = t;  // (not accounting for frame time here)
      operation_5.frameNStart = frameN;  // exact frame index
      
      operation_5.setAutoDraw(true);
    }

    frameRemains = 0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (operation_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      operation_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_quick_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_quick_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback_quick_2'-------
    feedback_quick_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var show_letters_2Components;
function show_letters_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'show_letters_2'-------
    t = 0;
    show_letters_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.300000);
    // update component parameters for each repeat
    text.setText(chosen_stimuli_2[loop_i_2]);
    // keep track of which components have finished
    show_letters_2Components = [];
    show_letters_2Components.push(text);
    
    show_letters_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function show_letters_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'show_letters_2'-------
    // get current time
    t = show_letters_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.5 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    show_letters_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function show_letters_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'show_letters_2'-------
    show_letters_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var recall_2Components;
function recall_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'recall_2'-------
    t = 0;
    recall_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    instructions_5.setText('Answer and press enter.');
    // keep track of which components have finished
    recall_2Components = [];
    recall_2Components.push(key_resp_8);
    recall_2Components.push(text_feedback_2);
    recall_2Components.push(instructions_5);
    
    recall_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function recall_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'recall_2'-------
    // get current time
    t = recall_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_8* updates
    if (t >= 0.5 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', 'return'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys.map((key) => key.name);  // storing all keys
        key_resp_8.rt = _key_resp_8_allKeys.map((key) => key.rt);
        // was this correct?
        if (key_resp_8.keys == correct_answer_2) {
            key_resp_8.corr = 1;
        } else {
            key_resp_8.corr = 0;
        }
      }
    }
    
    
    // *text_feedback_2* updates
    if (t >= 0.5 && text_feedback_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback_2.tStart = t;  // (not accounting for frame time here)
      text_feedback_2.frameNStart = frameN;  // exact frame index
      
      text_feedback_2.setAutoDraw(true);
    }

    
    if (text_feedback_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      text_feedback_2.setText(screen_text_2, false);
    }
    
    // *instructions_5* updates
    if (t >= 0.5 && instructions_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_5.tStart = t;  // (not accounting for frame time here)
      instructions_5.frameNStart = frameN;  // exact frame index
      
      instructions_5.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    recall_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function recall_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'recall_2'-------
    recall_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (key_resp_8.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer_2)) {
         key_resp_8.corr = 1;  // correct non-response
      } else {
         key_resp_8.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    psychoJS.experiment.addData('key_resp_8.corr', key_resp_8.corr);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        }
    
    key_resp_8.stop();
    // the Routine "recall_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_12_allKeys;
var finishedComponents;
function finishedRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'finished'-------
    t = 0;
    finishedClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    // keep track of which components have finished
    finishedComponents = [];
    finishedComponents.push(finish);
    finishedComponents.push(key_resp_12);
    
    finishedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function finishedRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'finished'-------
    // get current time
    t = finishedClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finish* updates
    if (t >= 0.5 && finish.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish.tStart = t;  // (not accounting for frame time here)
      finish.frameNStart = frameN;  // exact frame index
      
      finish.setAutoDraw(true);
    }

    
    // *key_resp_12* updates
    if (t >= 0.5 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    finishedComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishedRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'finished'-------
    finishedComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "finished" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
