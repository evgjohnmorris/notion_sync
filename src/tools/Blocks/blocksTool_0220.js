/**
 * Generated Tool: blocksTool_0220
 * Domain: Blocks
 * ID: 0220
 */
exports.blocksTool_0220 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0220:', error);
    throw error;
  }
};
