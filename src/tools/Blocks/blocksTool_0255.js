/**
 * Generated Tool: blocksTool_0255
 * Domain: Blocks
 * ID: 0255
 */
exports.blocksTool_0255 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0255:', error);
    throw error;
  }
};
