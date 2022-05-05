export const calcPercentage = (
  targetNumber: number,
  total: number,
  fixedChar?: number
) => {
  const result = (targetNumber / total) * 100;
  const fixedResult = result.toFixed(fixedChar);

  return `${fixedResult}%`;
};
calcPercentage.defaultProps = {
  fixedChar: 0,
};

export const calcByte = (targetByte: number) => {
  const KB = 1024;
  const MB = KB ** 2;
  const GB = KB ** 3;
  const TB = KB ** 4;

  let targetUnit: { size: string | null; unit: string };
  if (targetByte >= KB) {
    const size = (targetByte / KB).toFixed(2);
    targetUnit = { size, unit: 'KB' };
  } else if (targetByte >= MB) {
    const size = (targetByte / MB).toFixed(2);
    targetUnit = { size, unit: 'MB' };
  } else if (targetByte >= GB) {
    const size = (targetByte / GB).toFixed(2);
    targetUnit = { size, unit: 'GB' };
  } else if (targetByte >= TB) {
    const size = (targetByte / TB).toFixed(2);
    targetUnit = { size, unit: 'TB' };
  } else {
    targetUnit = {
      size: targetByte.toLocaleString('ja-JP'),
      unit: 'byte',
    };
  }

  return `${targetUnit.size} ${targetUnit.unit}`;
};

export default { calcPercentage };
