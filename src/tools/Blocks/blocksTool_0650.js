/**
 * Generated Tool: blocksTool_0650
 * Domain: Blocks
 * ID: 0650
 */
exports.blocksTool_0650 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0650:', error);
    throw error;
  }
};
