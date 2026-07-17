var expanded =
    VBX_RowDetail.getVisible();

VBX_RowDetail.setVisible(
    !expanded
);

if (expanded) {

    BTN_RowExpand.setIcon(
        "sap-icon://navigation-right-arrow"
    );

} else {

    BTN_RowExpand.setIcon(
        "sap-icon://navigation-down-arrow"
    );

}