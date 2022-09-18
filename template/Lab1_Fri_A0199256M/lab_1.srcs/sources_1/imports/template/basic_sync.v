`timescale 1ns/1ps

/*
 * Synchronizes an asynchronous signal to a given clock using n flops
 */

module basic_sync #(
  parameter WIDTH=1, // width of input and output signals
  parameter N=2 // number of flops used
)(
  input wire clk,
  input  wire [WIDTH-1:0] in,
  output wire [WIDTH-1:0] out
);
  // Intermediary regs
  (* ASYNC_REG = "TRUE" *) reg [WIDTH-1:0] sync_reg[N-1:0];
  integer i;

  always @(posedge clk) begin
    sync_reg[0] <= in;
    for (i = 1; i < N; i = i + 1)
      sync_reg[i] <= sync_reg[i-1];
  end

  assign out = sync_reg[N-1];
endmodule