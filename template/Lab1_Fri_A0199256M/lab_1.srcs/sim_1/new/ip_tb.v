`timescale 1ns / 1ps
//////////////////////////////////////////////////////////////////////////////////
// Company: 
// Engineer: 
// 
// Create Date: 02.09.2022 16:19:49
// Design Name: 
// Module Name: ip_tb
// Project Name: 
// Target Devices: 
// Tool Versions: 
// Description: 
// 
// Dependencies: 
// 
// Revision:
// Revision 0.01 - File Created
// Additional Comments:
// 
//////////////////////////////////////////////////////////////////////////////////


module ip_tb();
  reg clk = 1;
  reg btnU, btnC;
  wire [15:0] led;
  wire dp;
  wire [7:0] anode;
  wire [6:0] cathode;
  
  Top
  dut (
    .clk(clk),
    .btnU(btnU),
    .btnC(btnC),
    .led(led),
    .dp(dp),
    .anode(anode),
    .cathode(cathode)
  ); 
  
  always
    #10 clk = ~clk; // T = 20ns
    
  initial begin
    // total number of instructions; 15
    // total number of data: 19
    // each instruction/data requires 2 clock cycles (MSB then LSB)
    
    // 4 clock period for normal: 2*20*4*2 = 320ns per instruction 
    // 1 clock period for speed up: 2*20*2 = 80ns per instruction
     
    // first 10 instruction: run as per normal
    btnU = 0;
    btnC = 0;
    #3200;
    
    // pause
    btnC = 1;
    #960;
    
    // next 5 instructions: run as per normal
    btnC = 0;
    btnU = 0;
    #1600;
    
    // speed up for INST_MEM[15] to INST_MEM[128]
    btnU = 1;
    btnC = 0;
    #9040;
    
    // 19 data: run as per normal
    btnU = 0;
    btnC = 0;
    #6080;
    
    #1600;
    $finish;
  end
endmodule
