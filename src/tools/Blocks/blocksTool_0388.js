/**
 * Generated Tool: blocksTool_0388
 * Domain: Blocks
 * ID: 0388
 */
exports.blocksTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0388:', error);
    throw error;
  }
};
