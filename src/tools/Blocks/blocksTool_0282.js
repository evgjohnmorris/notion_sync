/**
 * Generated Tool: blocksTool_0282
 * Domain: Blocks
 * ID: 0282
 */
exports.blocksTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0282:', error);
    throw error;
  }
};
