function subMove() {
    // Write here...
    // Jika TM sudah terisi
    if (opsLine[0]) {
        // Deactivate block
        crAct = document.getElementsByClassName("active");
        for (i = 0; i < crAct.length; i++) {
            crAct[i].className = crAct[i].className.replace(" active", "");
        }
        done = 0;

        moving(0, 1, "0", "X", 1);
        moving(0, 5, "C", "C", 1);
        moving(1, 1, "0", "0", 1);
        moving(1, 2, "C", "C", 1);
        moving(2, 2, "X", "X", 1);
        moving(2, 3, "0", "X", 0);
        moving(3, 3, "X", "X", 0);
        moving(3, 4, "C", "C", 0);
        moving(4, 4, "0", "0", 0);
        moving(4, 0, "X", "X", 1);
        moving(5, 5, "X", "B", 1);
        moving(5, 6, "0", "0", 0);
        moving(6, 6, "B", "B", 0);
        moving(6, 7, "C", "B", 0);
        moving(7, 7, "X", "B", 0);
        moving(7, 8, "B", "B", 1);

        // STATE 8 (FINAL STATE)
        if (state == 8) {
            // Selesai
            stopOpsAuto();
            opsTmLine.childNodes[opsLine.length - 3].scrollIntoView(false);

            // Add notif
            addNotif('Selesai');

            // Enable control
            enableOps(2);

            // Disable control
            disableOps(0);
            disableOps(1);
            disableOps(3);
            
            // Show answer in decimal
            showOpsAns();
        }
    }
}