import { getAssetsByCategory, getCategory, getTodayPrice, getTotalInvestedByAsset, getTotalInvestedByCategory } from "@/app/api/backend";
import Summary from "@/components/summary/Summary";

export default async function Page({
    params,
}: Readonly<{
    params: Promise<{ category: string }>
}>) {

    const category = await getCategory((await params).category);
    const [assets, totalInvested] = await Promise.all([getAssetsByCategory(category), getTotalInvestedByCategory(category)]);

    const data = await Promise.all(
        assets
            .filter(asset => asset.total > 0)
            .map(async asset => {
                const value = await getTotalInvestedByAsset(asset.label);
                const currentValue = await getTodayPrice(asset.label);
                return { id: asset.label.toLowerCase(), label: asset.label, amount: asset.total, value, currentValue };
            })
    );

    const filteredData = data.filter(asset => asset.value > 0).sort((a, b) => b.value - a.value);

    return (
        <Summary title={category} data={filteredData} total={totalInvested} totalProfit={0} withAmount />
    );
}