Blockly.defineBlocksWithJsonArray([
{
  "type": "aht20_read",
  "message0": "AHT20 read %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "temperature (°C)",
          "0"
        ],
        [
          "humidity (%RH)",
          "1"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#8b507c",
  "tooltip": "",
  "helpUrl": ""
}
]);
