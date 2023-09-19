function canExecuteFastAttack(knightIsAwake) 
{
   return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) 
{
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) 
{
    return prisonerIsAwake && !archerIsAwake;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) 
{
  if (petDogIsPresent) 
  {
   return !archerIsAwake;
  } 
  else 
  {
    return !knightIsAwake && !archerIsAwake && prisonerIsAwake;
  }
}

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = false;
const canFree = canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent);
console.log(canFree); 