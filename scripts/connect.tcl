set output_dir {path_to_project}; # Filled by JS form

# Create VIO IP


# Add Wrapper.v to sources
import_files ./rtl/Wrapper.v

# Set Wrapper.v as top file
set_property top Wrapper [current_fileset]
update_compile_order -fileset sources_1
update_compile_order -fileset sim_1

# Disable input constraints

# Generate bitstream
launch_runs synth_1
wait_on_run synth_1
set_property STEPS.PHYS_OPT_DESIGN.IS_ENABLED true [get_runs impl_1]
launch_runs impl_1 -to_step write_bitstream
wait_on_run impl_1
puts "Implementation done!"
