/**
 * Generated Tool: blocksTool_0096
 * Domain: Blocks
 * ID: 0096
 */
exports.blocksTool_0096 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0096:', error);
    throw error;
  }
};
