// const statusCodes = {
// 	isUp: 1,
// 	isDown: 2,
// 	invalidDomain: 3
// };

export async function isUp(url: string): Promise<boolean> {
  const host = encodeURIComponent(new URL(url).host);
  const result: {
    status_code: 1 | 2 | 3,
  } = await (await fetch(`https://isitup.org/${host}.json`)).json();
  return result.status_code === 1;
}
