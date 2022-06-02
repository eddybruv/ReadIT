import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";

const categories = [
  {
    title: "Code",
    available: "3k",
    icon: <CodeOffOutlinedIcon fontSize="large" style={{fill: "#67a2af"}} />,
  },
  {
    title: "Science",
    available: "1.2k",
    icon: <BiotechOutlinedIcon fontSize="large" />,
  },
  {
    title: "Arts",
    available: "1.8k",
    icon: <HistoryEduIcon fontSize="large" />,
  },
  {
    title: "Design",
    available: "80",
    icon: <DesignServicesOutlinedIcon fontSize="large" />,
  },
  {
    title: "Cooking",
    available: "180",
    icon: <OutdoorGrillOutlinedIcon fontSize="large" />,
  },
  {
    title: "Money",
    available: "1k",
    icon: <PaidOutlinedIcon fontSize="large" />,
  },
];

export default categories;
