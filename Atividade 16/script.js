

const showInfo = () => {
  const select = document.querySelector('select');
  const selected = select.options[select.selectedIndex];
  const url = selected.getAttribute('data-url');

  const confirmation = confirm('O curso correto foi selecionado?');

  if (confirmation) {
      newWindow = window.open("", "newWindow", "width=600,height=300");
      newWindow.document.open();
      newWindow.document.write(`<iframe src="${url}" style="width: 100%; height: 100%;"></iframe>`);
      newWindow.document.close();
      newWindow.focus();
  }
};