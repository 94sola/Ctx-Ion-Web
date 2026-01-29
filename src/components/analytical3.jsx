import Wrapper from "./wrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Brush,
  BarChart,
  Bar,
} from "recharts";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";


const chromatogramA = [
  { rt: 1.2, intensity: 10 },
  { rt: 2.1, intensity: 160, id: "Methanol" },
  { rt: 3.4, intensity: 35 },
  { rt: 4.2, intensity: 240, id: "Acetone" },
  { rt: 5.6, intensity: 60 },
  { rt: 6.8, intensity: 320, id: "Toluene" },
  { rt: 8.2, intensity: 40 },
];

const chromatogramB = chromatogramA.map(p => ({
  ...p,
  intensity: Math.round(p.intensity * 0.75),
}));


const massSpectrum = [
  { mz: 31, intensity: 100 },
  { mz: 43, intensity: 380 },
  { mz: 45, intensity: 260 },
  { mz: 57, intensity: 500 },
  { mz: 71, intensity: 320 },
  { mz: 91, intensity: 420 },
  { mz: 105, intensity: 180 },
];

const exportPDF = async () => {
  const element = document.getElementById("gcms-report");
  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const width = 190;
  const height = (canvas.height * width) / canvas.width;

  pdf.addImage(imgData, "PNG", 10, 10, width, height);
  pdf.save("CTX-ION_GCMS_Report.pdf");
};

export default function GCMSAdvancedReport() {
  return (
    <Wrapper>
      <section className="font-manrope ">
        <div
          id="gcms-report"
          className="max-w-7xl mx-auto px-10 py-14 bg-white"
        >

          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0b1c2d] mb-8">
            Common Applications of GC-MS Method Development Service
          </h2>
          <div className="overflow-x-auto mb-14">
            <table className="w-full border mx-auto max-w-4xl border-gray-300 text-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border px-4 py-3 text-left font-semibold">
                    Application
                  </th>
                  <th className="border px-4 py-3 text-left font-semibold">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="border px-4 py-3">
                    Residual Solvent Screening (USP &lt;467&gt;)
                  </td>
                  <td className="border px-4 py-3">
                    Compliance with ICH Q3C and regulatory submissions
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">
                    Volatile Impurity Profiling
                  </td>
                  <td className="border px-4 py-3">
                    Stability and degradation pathway evaluation
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">
                    Extractables &amp; Leachables Analysis
                  </td>
                  <td className="border px-4 py-3">
                    Container closure and packaging system assessment
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">
                    VOC Detection in Raw Materials
                  </td>
                  <td className="border px-4 py-3">
                    Incoming quality control (IQC)
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3">
                    Specialty Polymer &amp; Excipient Testing
                  </td>
                  <td className="border px-4 py-3">
                    Drug delivery and controlled-release systems
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mb-14">
            <div className="w-20 h-px bg-gray-400" />
          </div>

          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-semibold text-[#0b1c2d]">
              GC-MS Method Development – Analytical Results
            </h3>

            <button
              onClick={exportPDF}
              className="border px-4 py-2 text-sm rounded-md hover:bg-gray-100"
            >
              Export PDF Report
            </button>
          </div>

            <div>
              <p className="text-gray-700 leading-relaxed mb-6 max-w-4xl  ">
                CTX-ION Analytical Research Laboratory develops validated GC-MS
                methods for trace-level residual solvents and volatile impurities,
                ensuring regulatory compliance and analytical reproducibility.
              </p>

              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Headspace, direct injection, and SPME GC-MS techniques</li>
                <li>ICH Q3C-aligned impurity profiling</li>
                <li>Validated LOD, LOQ, accuracy, and precision</li>
                <li>Audit-ready documentation and reports</li>
              </ul>
            </div>

     
            <div className="h-80 border p-4 my-10 max-w-4xl mx-auto">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart>
                  <XAxis dataKey="rt" type="number" />
                  <YAxis />
                  <Tooltip />
                  <Brush dataKey="rt" height={25} />

                  <Line
                    data={chromatogramA}
                    dataKey="intensity"
                    stroke="#0a1440"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    data={chromatogramB}
                    dataKey="intensity"
                    stroke="#5aaad6"
                    strokeWidth={2}
                    dot={false}
                  />

                  {chromatogramA
                    .filter(p => p.id)
                    .map((p, i) => (
                      <ReferenceDot
                        key={i}
                        x={p.rt}
                        y={p.intensity}
                        r={4}
                        fill="#0a1440"
                        label={{
                          value: `${p.id} (${p.rt} min)`,
                          position: "top",
                          fontSize: 11,
                        }}
                      />
                    ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          

   
          <h3 className="text-xl font-semibold mb-4 max-w-4xl mx-auto">
            Electron Ionization Mass Spectrum
          </h3>

          <div className="h-64 border p-4 max-w-4xl mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={massSpectrum}>
                <XAxis dataKey="mz" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="intensity" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </section>
    </Wrapper>
  );
}
