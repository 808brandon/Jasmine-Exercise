it('should calculate the monthly rate correctly', function () {
    const values = {amount : 40000, years : 5, rate : 1.99} 
    
    expect (calculateMonthlyPayment(values)).toEqual('700.94')
  }); 
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {amount : 15090, years : 4, rate : 7} 
    
    expect (calculateMonthlyPayment(values)).toEqual('361.35')
  });
  