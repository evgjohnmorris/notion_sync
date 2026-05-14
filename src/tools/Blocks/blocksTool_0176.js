/**
 * Generated Tool: blocksTool_0176
 * Domain: Blocks
 * ID: 0176
 */
exports.blocksTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0176:', error);
    throw error;
  }
};
