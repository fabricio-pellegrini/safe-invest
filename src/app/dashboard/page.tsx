import { getCategories, getCategory, getTotalInvested, getTotalInvestedByCategory } from "@/app/api/backend";
import Summary from "@/components/summary/Summary";

export default async function Page() {

  const [categories, totalInvested] = await Promise.all([getCategories(), getTotalInvested()]);

  const data = await Promise.all(
    categories
      .map(async category => {
        const value = await getTotalInvestedByCategory(await getCategory(category));
        return { id: category.toLowerCase(), label: category, value, currentValue: value };
      })
  );

  const filteredData = data.filter(asset => asset.value > 0).sort((a, b) => b.value - a.value);

  return (<Summary title="Geral" data={filteredData} total={totalInvested} totalProfit={0}/> 
  );
}