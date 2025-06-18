import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import all flag images
const flagImages = [
  "/src/assets/Flags/us.svg",
  "/src/assets/Flags/gb.svg",
  "/src/assets/Flags/ca.svg",
  "/src/assets/Flags/au.svg",
  "/src/assets/Flags/nz.svg",
  "/src/assets/Flags/in.svg",
  "/src/assets/Flags/sg.svg",
  "/src/assets/Flags/my.svg",
  "/src/assets/Flags/ph.svg",
  "/src/assets/Flags/id.svg",
  "/src/assets/Flags/vn.svg",
  "/src/assets/Flags/th.svg",
  "/src/assets/Flags/mm.svg",
  "/src/assets/Flags/kh.svg",
  "/src/assets/Flags/la.svg",
  "/src/assets/Flags/br.svg",
  "/src/assets/Flags/mx.svg",
  "/src/assets/Flags/ar.svg",
  "/src/assets/Flags/cl.svg",
  "/src/assets/Flags/co.svg",
  "/src/assets/Flags/pe.svg",
  "/src/assets/Flags/ec.svg",
  "/src/assets/Flags/ve.svg",
  "/src/assets/Flags/uy.svg",
  "/src/assets/Flags/py.svg",
  "/src/assets/Flags/bo.svg",
  "/src/assets/Flags/pa.svg",
  "/src/assets/Flags/cr.svg",
  "/src/assets/Flags/gt.svg",
  "/src/assets/Flags/sv.svg",
  "/src/assets/Flags/hn.svg",
  "/src/assets/Flags/ni.svg",
  "/src/assets/Flags/do.svg",
  "/src/assets/Flags/pr.svg",
  "/src/assets/Flags/jm.svg",
  "/src/assets/Flags/tt.svg",
  "/src/assets/Flags/bb.svg",
  "/src/assets/Flags/lc.svg",
  "/src/assets/Flags/vc.svg",
  "/src/assets/Flags/gd.svg",
  "/src/assets/Flags/ag.svg",
  "/src/assets/Flags/bs.svg",
  "/src/assets/Flags/cu.svg",
  "/src/assets/Flags/ht.svg",
  "/src/assets/Flags/dm.svg",
  "/src/assets/Flags/kn.svg",
  "/src/assets/Flags/ai.svg",
  "/src/assets/Flags/ms.svg",
  "/src/assets/Flags/tc.svg",
  "/src/assets/Flags/vg.svg",
  "/src/assets/Flags/ky.svg",
  "/src/assets/Flags/bm.svg",
  "/src/assets/Flags/aw.svg",
  "/src/assets/Flags/cw.svg",
  "/src/assets/Flags/sx.svg",
  "/src/assets/Flags/mq.svg",
  "/src/assets/Flags/gp.svg",
  "/src/assets/Flags/mf.svg",
  "/src/assets/Flags/bl.svg",
  "/src/assets/Flags/pm.svg",
  "/src/assets/Flags/wf.svg",
  "/src/assets/Flags/pf.svg",
  "/src/assets/Flags/nc.svg",
  "/src/assets/Flags/vu.svg",
  "/src/assets/Flags/fj.svg",
  "/src/assets/Flags/to.svg",
  "/src/assets/Flags/ws.svg",
  "/src/assets/Flags/ck.svg",
  "/src/assets/Flags/nu.svg",
  "/src/assets/Flags/ki.svg",
  "/src/assets/Flags/tv.svg",
  "/src/assets/Flags/nr.svg",
  "/src/assets/Flags/mh.svg",
  "/src/assets/Flags/pw.svg",
  "/src/assets/Flags/fm.svg",
  "/src/assets/Flags/mp.svg",
  "/src/assets/Flags/gu.svg",
  "/src/assets/Flags/as.svg",
  "/src/assets/Flags/um.svg",
  "/src/assets/Flags/vi.svg",
  "/src/assets/Flags/pr.svg",
  "/src/assets/Flags/do.svg",
  "/src/assets/Flags/ht.svg",
  "/src/assets/Flags/jm.svg",
  "/src/assets/Flags/tt.svg",
  "/src/assets/Flags/bb.svg",
  "/src/assets/Flags/lc.svg",
  "/src/assets/Flags/vc.svg",
  "/src/assets/Flags/gd.svg",
  "/src/assets/Flags/ag.svg",
  "/src/assets/Flags/bs.svg",
  "/src/assets/Flags/cu.svg",
  "/src/assets/Flags/dm.svg",
  "/src/assets/Flags/kn.svg",
  "/src/assets/Flags/ai.svg",
  "/src/assets/Flags/ms.svg",
  "/src/assets/Flags/tc.svg",
  "/src/assets/Flags/vg.svg",
  "/src/assets/Flags/ky.svg",
  "/src/assets/Flags/bm.svg",
  "/src/assets/Flags/aw.svg",
  "/src/assets/Flags/cw.svg",
  "/src/assets/Flags/sx.svg",
  "/src/assets/Flags/mq.svg",
  "/src/assets/Flags/gp.svg",
  "/src/assets/Flags/mf.svg",
  "/src/assets/Flags/bl.svg",
  "/src/assets/Flags/pm.svg",
  "/src/assets/Flags/wf.svg",
  "/src/assets/Flags/pf.svg",
  "/src/assets/Flags/nc.svg",
  "/src/assets/Flags/vu.svg",
  "/src/assets/Flags/fj.svg",
  "/src/assets/Flags/to.svg",
  "/src/assets/Flags/ws.svg",
  "/src/assets/Flags/ck.svg",
  "/src/assets/Flags/nu.svg",
  "/src/assets/Flags/ki.svg",
  "/src/assets/Flags/tv.svg",
  "/src/assets/Flags/nr.svg",
  "/src/assets/Flags/mh.svg",
  "/src/assets/Flags/pw.svg",
  "/src/assets/Flags/fm.svg",
  "/src/assets/Flags/mp.svg",
  "/src/assets/Flags/gu.svg",
  "/src/assets/Flags/as.svg",
  "/src/assets/Flags/um.svg",
  "/src/assets/Flags/vi.svg"
];

const Page8 = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="w-full h-screen overflow-hidden bg-black relative">
      <motion.div
        style={{ x, y }}
        className="absolute top-0 left-0 grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4 p-4 w-[200vw] h-[200vh]"
      >
        {flagImages.map((src, idx) => (
          <div key={idx} className="w-40 h-28 bg-gray-900 rounded-md overflow-hidden flex items-center justify-center">
            <img
              src={src}
              alt={`flag-${idx}`}
              className="w-full h-full object-contain p-2"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Page8;



