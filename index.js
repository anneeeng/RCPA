<script>
var shiftObject = {
  "1st": {
    "Major": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Minor": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Observation": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"], 
  },
  "2nd": {
    "Major": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Minor": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Observation": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],   
  },
   "3rd": {
    "Major": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Minor": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"],
    "Observation": ["Internal QMS Audit", "Manufacturing Audit", "Product Audit", "Online Audit", "Internal EMS Audit", "External IATF 16949 Audit", "External EMS Audit"], 
  }
}
window.onload = function() {
  var shiftSel = document.getElementById("shift");
  var classSel = document.getElementById("class");
  var auditSel = document.getElementById("audit");
  var docSel = document.getElementById("docs");
  for (var x in shiftObject) {
    shiftSel.options[shiftSel.options.length] = new Option(x, x);
  }
  shiftSel.onchange = function() {
    //empty class, audit type- and docs- dropdowns
    auditSel.length = 1;
    classSel.length = 1;
    docSel.length = 1;
    //display correct values
    for (var y in shiftObject[this.value]) {
      classSel.options[classSel.options.length] = new Option(y, y);
    }
  }
  classSel.onchange = function() {
    //empty audit type dropdown
    auditSel.length = 1;
    //display correct values
    var z = shiftObject[shiftSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      auditSel.options[auditSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
</script>