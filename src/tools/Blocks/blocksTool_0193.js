/**
 * Generated Tool: blocksTool_0193
 * Domain: Blocks
 * ID: 0193
 */
exports.blocksTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0193:', error);
    throw error;
  }
};
