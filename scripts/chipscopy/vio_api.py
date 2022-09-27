# Don't need CS_Server for Artix; Can check after report_versions(session)

import sys
import os
from chipscopy import get_design_files
from chipscopy import create_session, report_versions

# Locations of running hw_server and cs_server 
CS_URL = os.getenv("CS_SERVER_URL", "TCP:localhost:3042")
HW_URL = os.getenv("HW_SERVER_URL", "TCP:localhost:3121")

design_files = get_design_files("/home/dylan/Documents/FPGA/Vivado/FYP/fyp_rtl/fyp_rtl.runs/impl_1/")
PROGRAMMING_FILE = design_files.programming_file
PROBES_FILE = design_files.probes_file

print(f"HW_URL: {HW_URL}")
print(f"CS_URL: {CS_URL}")
print(f"PROGRAMMING_FILE: {PROGRAMMING_FILE}")
print(f"PROBES_FILE: {PROBES_FILE}")

# Create session; Need connect to Vivado 
session = create_session(cs_server_url=CS_URL, hw_server_url=HW_URL, bypass_version_check=True)
report_versions(session)

device = session.devices.filter_by(family="artix7").get()
print(f"Device: {device}")

# -- Bitstream flashed here --
device.program(PROGRAMMING_FILE)
device.discover_and_setup_cores(ltx_file=PROBES_FILE)
print("Debug cores setup and ready to use")

vio_cores = device.vio_cores
