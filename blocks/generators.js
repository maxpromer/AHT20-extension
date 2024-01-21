Blockly.Python['aht10_read'] = function (block) {
  Blockly.Python.definitions_['import_AHT10'] = 'import AHT10';

  var dropdown_type = block.getFieldValue('type');

  var code = `AHT10.read()[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
