

function CrewMember (position) {
  this.position = position;
  this.currentShip = 'Looking for a Rig';
}

CrewMember.prototype.engageWarpDrive = function(){
  if (this.position === 'Pilot' && typeof(this.currentShip) !== 'string')
  	{ this.currentShip.warpDrive ='engaged!';}
  else{
    return 'had no effect';
  }
}
CrewMember.prototype.setsInvisibility = function(){
  if (this.position === 'Defender' && typeof(this.currentShip) !== 'string') {
    this.currentShip.cloaked = true;
  }
  else{
    return 'had no effect';
  }
}
CrewMember.prototype.chargePhasers = function(){
  if (this.position === 'Gunner' && typeof(this.currentShip) !== 'string') {
    this.currentShip.phasersCharge = 'charged!';
  }
  else{
    return 'had no effect';
  }
}
