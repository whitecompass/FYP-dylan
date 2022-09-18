`timescale 1ns / 1ps
///////////////////////////////////////////////////////////////////////////////
// This module is to generate an enable signal for different display frequency 
// based on pushbuttons
// Fill in the blank to complete this module 
// (c) Gu Jing, ECE, NUS
///////////////////////////////////////////////////////////////////////////////

module Clock_Enable (
	input clk,        // fundamental clock 100MHz
	input btnU,       // button BTNU for 4Hz speed
	input btnC,       // button BTNC for pause
	output reg enable // output signal used to enable the reading of next memory 
                    // data
);

  reg [25:0] counter = 0; 
    
  always @(posedge clk) begin
    // pause
    if (btnC) begin
      enable <= 1'b0;
    end
    // unpause
    else begin
      counter <= counter + 1'b1;

      // 5.96Hz
      if (btnU) begin
        enable <= counter[23];
//        enable <= counter[0]; // For simulation
      end 
      // 1.49Hz
      else begin
        enable <= counter[25];
//        enable <= counter[2]; // For simulation
      end
    end
  end
endmodule