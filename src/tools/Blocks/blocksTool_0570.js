/**
 * Generated Tool: blocksTool_0570
 * Domain: Blocks
 * ID: 0570
 */
exports.blocksTool_0570 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0570:', error);
    throw error;
  }
};
