Blockly.Python['aht20_read'] = function (block) {
  Blockly.Python.definitions_['import_AHT20'] = 'import AHT20';

  var dropdown_type = block.getFieldValue('type');

  var code = `AHT20.read()[${dropdown_type}]`;
  return [code, Blockly.Python.ORDER_NONE];
};
