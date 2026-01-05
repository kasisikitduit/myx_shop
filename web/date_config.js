// 可用日期列表
window.availableDates = [
  {id: '20251215', display: '2025-12-15', file: 'history/picks_20251215.json'},
  {id: '20251216', display: '2025-12-16', file: 'history/picks_20251216.json'},
  {id: '20251217', display: '2025-12-17', file: 'history/picks_20251217.json'},
  {id: '20251218', display: '2025-12-18', file: 'history/picks_20251218.json'},
  {id: '20251220', display: '2025-12-20', file: 'history/picks_20251220.json'},
  {id: '20251221', display: '2025-12-21', file: 'history/picks_20251221.json'},
  {id: '20251222', display: '2025-12-22', file: 'history/picks_20251222.json'},
  {id: '20251223', display: '2025-12-23', file: 'history/picks_20251223.json'},
  {id: '20251224', display: '2025-12-24', file: 'history/picks_20251224.json'},
  {id: '20251226', display: '2025-12-26', file: 'history/picks_20251226.json'},
  {id: '20251229', display: '2025-12-29', file: 'history/picks_20251229.json'},
  {id: '20251230', display: '2025-12-30', file: 'history/picks_20251230.json'},
  {id: '20251231', display: '2025-12-31', file: 'history/picks_20251231.json'},
  {id: '20260102', display: '2026-01-02', file: 'history/picks_20260102.json'},
];

// 默认选中最新日期
if (window.availableDates.length > 0) {
    window.defaultDate = window.availableDates[window.availableDates.length - 1].id;
}
