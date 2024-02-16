//    SelectProps={{
//                 multiple: true,
//                 onClose: () => suppliersSearchSet(""),
//                 renderValue: (selected: any) => {
//                   const displayedOptions =
//                     selected.length > 1 ? selected.slice(0, 1) : selected;
//                   const remainingCount =
//                     selected.length - displayedOptions.length;
//                   return (
//                     <Box sx={{ display: "flex", flexWrap: "wrap" }}>
//                       {displayedOptions.map((value: any, i: number) => {
//                         const index = suppliers.findIndex(
//                           (val: IOption) => val._id === value
//                         );
//                         if (index < 0) return;
//                         return (
//                           <React.Fragment key={value}>
//                             {suppliers[index].name.length <= 7 ? (
//                               <GuiChip
//                                 label={suppliers[index].name}
//                                 onDelete={() => {
//                                   const newSelected = selected.filter(
//                                     (s: any) => s !== value
//                                   );
//                                   handleSuppliersChange(newSelected);
//                                 }}
//                                 onMouseDown={(e: any) => {
//                                   e.preventDefault();
//                                   e.stopPropagation();
//                                 }}
//                               />
//                             ) : selectedSuppliers &&
//                               selectedSuppliers.length < 3 ? (
//                               <GuiChip
//                                 label={suppliers[index].name}
//                                 onDelete={() => {
//                                   const newSelected = selected.filter(
//                                     (s: any) => s !== value
//                                   );
//                                   handleSuppliersChange(newSelected);
//                                 }}
//                                 onMouseDown={(e: any) => {
//                                   e.preventDefault();
//                                   e.stopPropagation();
//                                 }}
//                               />
//                             ) : (
//                               <GuiTooltip
//                                 title={suppliers[index].name}
//                                 placement="top"
//                               >
//                                 <Box>
//                                   <GuiChip
//                                     label={
//                                       suppliers[index].name.substring(0, 7) +
//                                       "..."
//                                     }
//                                     onDelete={() => {
//                                       const newSelected = selected.filter(
//                                         (s: any) => s !== value
//                                       );
//                                       handleSuppliersChange(newSelected);
//                                     }}
//                                     onMouseDown={(e: any) => {
//                                       e.preventDefault();
//                                       e.stopPropagation();
//                                     }}
//                                   />
//                                 </Box>
//                               </GuiTooltip>
//                             )}
//                           </React.Fragment>
//                         );
//                       })}
//                       {remainingCount > 0 && (
//                         <Box display="flex" alignItems="center">
//                           <Typography sx={{ fontSize: "14px" }}>
//                             &nbsp;&nbsp;{remainingCount} +
//                           </Typography>
//                         </Box>
//                       )}
//                     </Box>
//                   );
//                 },
//               }}

//  {rowsPerPageOptions.map((option: any) => (
//                   <MenuItem
//                     key={option}
//                     value={option}
//                     onClick={() => handleChangeRowsPerPage(`${option}}`)}
//                   >
//                     {option}
//                   </MenuItem>
