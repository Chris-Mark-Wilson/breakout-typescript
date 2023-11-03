import { BallProps } from "../types";

export const setNewCoords = (
  ballCoords: BallProps,
  setBallCoords: React.Dispatch<React.SetStateAction<BallProps>>,
  scrWidth: number,
  scrHeight: number,
  bat: { x: number; y: number; width: number }
): void => {
  let { x, y, direction } = ballCoords;
  const speed = 10;
  let xv = 0;
  let yv = 0;

  // calculate new position based on direction

  if (direction > 0 && direction < 90) {
    xv = Math.cos((direction * 3.14) / 180);
    yv = Math.sin((direction * 3.14) / 180);
    x += xv * speed;
    y -= yv * speed;
    console.log("xv:",yv," xy:",yv," direcion:",direction)
  } else if (direction > 90 && direction < 180) {
    xv = Math.cos(((direction - 90) * 3.14) / 180);
    yv = Math.sin(((direction - 90) * 3.14) / 180);
    x += xv * speed;
    y += yv * speed;
    console.log("xv:",yv," xy:",yv," direcion:",direction)
  } else if (direction > 180 && direction < 270) {
    xv = Math.cos(((direction - 180) * 3.14) / 180);
    yv = Math.sin(((direction - 180) * 3.14) / 180);
    x -= xv * speed;
    y += yv * speed;
    console.log("xv:",yv," xy:",yv," direcion:",direction)
  } else if (direction > 270 && direction < 360) {
    xv = Math.cos(((direction - 270) * 3.14) / 180);
    yv = Math.sin(((direction - 270) * 3.14) / 180);
    console.log("xv:",yv," xy:",yv," direcion:",direction)
    x -= xv * speed;
    y -= yv * speed;
  }

  if (direction === 90) {
    x += 1 * speed;
  }
  if (direction === 180) {
    y += 1 * speed;
  }
  if (direction === 270) {
    x -= 1 * speed;
  }
  if (direction === 360 || direction === 0) {
    y -= 1 * speed;
  }

  //got new position, check borders
  if (x >= scrWidth - 20) {
    // hit rh side

    if (direction < 90) {
      direction = 360 - direction;
    } else if (direction > 90) {
      direction = 180 - direction + 180;
    } else if (direction === 90) {
      direction = 270;
    }
  }

  if (x <= 0) {
    //hit lh side

    if (direction > 270) {
      direction = 360 - direction;
    } else if (direction < 270) {
      direction = 180 - (direction - 180);
    } else if (direction === 270) {
      direction = 90;
    }
  }

  if (y <= 100) {
    //check bricks

    if (direction < 360 && direction > 270) {
      direction = 270 - (direction - 270);
    } else if (direction > 0 && direction < 90) {
      direction = 90 + (90 - direction);
    }
  }

  if (y >= bat.y - 10) {
    // below baseline

    if (x > bat.x && x < bat.x + bat.width) {
      //hit the bat
      if (x <= bat.x + bat.width / 2) {
        //left hand side
        console.log("hit left at "+direction);

        let angleOfIncidence:number;
if(direction>180){
    angleOfIncidence=270-direction
}else if(direction<180){
    angleOfIncidence=90-direction
} else angleOfIncidence=0
console.log("angle of incidence "+angleOfIncidence)
//ok so far...

let impactPoint=(x-bat.x)/(((bat.width/2)+bat.x)-bat.x)
console.log("impact point "+impactPoint," x=",x," bat.x=",bat.x)
//ok again...

//this bits now right..
direction=270+((1-impactPoint)*angleOfIncidence)
        
console.log("new direction "+direction)

      }
      if (x >= bat.x + bat.width / 2) {
        //right hand side
        console.log("hit right");

        let angleOfIncidence:number;
        if(direction>180){
            angleOfIncidence=270-direction
        }else if(direction<180){
            angleOfIncidence=90-direction
        } else angleOfIncidence=0
        console.log("angle of incidence "+angleOfIncidence)
        //ok so far...
        
        let impactPoint=(x-((bat.x)+bat.width/2))/(((bat.width)+bat.x)-((bat.x)+bat.width/2))

        console.log("impact point "+impactPoint," x=",x," bat.x=",bat.x)
        
        direction=90-((impactPoint)*angleOfIncidence)

        console.log("new direction "+direction)

      }
    }
  }
  
  setBallCoords({ x, y, direction });
}; //end function

