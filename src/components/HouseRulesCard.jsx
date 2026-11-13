import { useState } from "react";
import {
  FaShoePrints,
  FaSmokingBan,
  FaPaw,
  FaUtensils,
  FaBirthdayCake,
  FaFire,
  FaMoon,
  FaBed,
  FaWifi,
  FaClock,
  FaKey,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const HOUSE_RULES = [
  {
    icon: FaShoePrints,
    color: "text-red-500",
    en: "No shoes in the house",
    zh: "屋内禁止穿鞋",
  },
  {
    icon: FaSmokingBan,
    color: "text-red-500",
    en: "No smoking indoors (Fine RM 500)",
    zh: "室内禁止吸烟",
  },
  {
    icon: FaPaw,
    color: "text-red-500",
    en: "No pets allowed",
    zh: "禁止携带宠物",
  },
  {
    icon: FaUtensils,
    color: "text-red-500",
    en: "No eating in the room (especially durian / mangosteen)",
    zh: "房间内禁止进食（特别是榴莲 / 山竹）",
  },
  {
    icon: FaBirthdayCake,
    color: "text-red-500",
    en: "No parties or events",
    zh: "禁止举办派对或活动",
  },
  {
    icon: FaFire,
    color: "text-red-500",
    en: "No heavy cooking",
    zh: "禁止进行重型烹饪",
  },
  {
    icon: FaMoon,
    color: "text-red-500",
    en: "No overnight visitors (unless extra fee is paid)",
    zh: "禁止留宿访客（除非需征收附加费用）",
  },
  {
    icon: FaBed,
    color: "text-red-500",
    en: "Do not stain bed",
    zh: "请勿弄脏床单",
  },
  {
    icon: FaWifi,
    color: "text-blue-500",
    en: "Free Wi-Fi (restart router/modem if connection issues occur)",
    zh: "免费 Wi-Fi (请重启路由器/调制解调器，如有连接问题）",
  },
  {
    icon: FaClock,
    color: "text-gray-600",
    en: "Check-in: 3:00 PM | Check-out: 11:00 AM",
    zh: "入住时间为下午3点, 退房时间为上午11点",
  },
  {
    icon: FaKey,
    color: "text-amber-600",
    en: "Lost keys or property damage subject to RM 200+ fine",
    zh: "钥匙遗失或财物损坏将被处以 RM 200 罚款",
  },
];

export default function HouseRulesCard({ initialCount = 4 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleRules = isExpanded
    ? HOUSE_RULES
    : HOUSE_RULES.slice(0, initialCount);
  const remainingCount = HOUSE_RULES.length - initialCount;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 space-y-4">
      <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">
        House Rules
      </h2>

      <ul className="space-y-3.5">
        {visibleRules.map((rule, index) => {
          const Icon = rule.icon;
          return (
            <li key={index} className="flex items-start gap-3">
              <Icon className={`${rule.color} mt-1 shrink-0 text-base`} />
              <div className="text-sm leading-snug">
                <p className="font-medium text-gray-800">{rule.en}</p>
                <p className="text-gray-500 text-xs mt-0.5">{rule.zh}</p>
              </div>
            </li>
          );
        })}
      </ul>

      {remainingCount > 0 && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              View Less <FaChevronUp className="text-xs" />
            </>
          ) : (
            <>
              View More ({remainingCount} more){" "}
              <FaChevronDown className="text-xs" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
