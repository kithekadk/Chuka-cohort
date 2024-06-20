import { TestBed } from "@angular/core/testing"
import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service"

xdescribe('CalculatorService', ()=>{

  it('should add two numbers', ()=>{
    //Arrange
    //create instance of the service class
    //check if it has any dependencies
    //since the logger service does not have a dependency we can just call its constructor
    const calculator = new CalculatorService(new LoggerService())

    //Act
    const result = calculator.add(2,2)

    //assert
    expect(result).toBe(4)
  })

  it('should subtract two numbers', ()=>{
    const logger = new LoggerService
    const calculator = new CalculatorService(logger)

    const result = calculator.subtract(3, 1)

    expect(result).toBe(2)
  })

})


//SPYING ON THE LOGGER SERVICE

xdescribe('CalculatorService with Logger Spy', ()=>{

  it('should add two numbers with spy', ()=>{
    const logger = new LoggerService()

    spyOn(logger, 'log')

    const calculator = new CalculatorService(logger)

    const result = calculator.add(2,2)

    expect(result).toBe(4)
    expect(logger.log).toHaveBeenCalledTimes(1)
  })

  it('should subtract two numbers', ()=>{
    const logger = new LoggerService
    const calculator = new CalculatorService(logger)

    const result = calculator.subtract(3, 1)

    expect(result).toBe(2)
  })

})

//Using Fake logger service as a dependency

xdescribe('CalculatorService with fake Logger', ()=>{

  it('should add two numbers with spy', ()=>{
    const logger = jasmine.createSpyObj('LoggerService', ['log'])

    const calculator = new CalculatorService(logger)

    const result = calculator.add(3,4)

    expect(result).toBe(7)

    expect(logger.log).toHaveBeenCalledTimes(1)
  })
})


// USING EXECUTION BLOCKS

xdescribe('CalculatorService with Logger Spy', ()=>{
  let loggerSpy:any
  let calculator: CalculatorService

  beforeEach(()=>{
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])
    calculator = new CalculatorService(loggerSpy)
  })

  it('should add two numbers with spy', ()=>{
    const result = calculator.add(2,2)

    expect(result).toBe(4)
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })

  it('should subtract two numbers', ()=>{
    const result = calculator.subtract(3, 1)

    expect(result).toBe(2)
  })

})

// USING DEPENDENCY INJECTION
fdescribe('Destructuring the calc tests using Dependency Injection', ()=>{

  let calculator: CalculatorService
  let loggerSpy:any

  beforeEach(()=>{
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log'])

    TestBed.configureTestingModule({
      providers: [CalculatorService,{
        provide: LoggerService, useValue: loggerSpy
      }]
    })

    calculator = TestBed.inject(CalculatorService)
  })

  it('should add two numbers', ()=>{
    const result = calculator.add(5,3)

    expect(result).toBe(8)
  })

  it("should subtract two numbers", ()=>{
    const result =  calculator.subtract(3,3)

    expect(result).toBe(0)

    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  })
})