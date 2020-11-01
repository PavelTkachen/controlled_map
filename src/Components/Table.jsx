import React, { Component } from 'react';
import MUIDataTable from 'mui-datatables';

class Table extends Component {
  render() {
    const {
      textLabels,
      options: { data, columns, options, title = title },
    } = this.props;
    return (
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={{
          ...options,
          textLabels,
          onRowSelectionChange: (row, selectedRow) => {
            selectedRow.length > 0 ? this.props.onSelectedObject(row[0].index) : this.props.onSelectedObject(null);
          },
        }}
      />
    );
  }
}

export default Table;

Table.defaultProps = {
  title: 'Таблица',
  data: [],
  columns: [],
  textLabels: {
    body: {
      noMatch: 'Ничего не найдено',
      toolTip: 'Сортировать',
      columnHeaderTooltip: (column) => `Сортировать по ${column.label}`,
    },
    pagination: {
      next: 'Следующая страница',
      previous: 'Предыдущая страница',
      rowsPerPage: 'Строк на странице:',
      displayRows: 'из',
    },
    toolbar: {
      search: 'Поиск',
      downloadCsv: 'Экспорт в CSV',
      print: 'Печать',
      viewColumns: 'Настройка колонок',
      filterTable: 'Фильтр',
    },
    filter: {
      all: 'Все',
      title: 'Фильтры',
      reset: 'Сбросить',
    },
    viewColumns: {
      title: 'Показать колонку',
      titleAria: 'Показать/скрыть колонку',
    },
    selectedRows: {
      text: 'Отмечено',
      delete: 'Удалить',
      deleteAria: 'Удалить выбранные',
    },
  },
};
