/**
 * Generated Tool: blocksTool_0951
 * Domain: Blocks
 * ID: 0951
 */
exports.blocksTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0951:', error);
    throw error;
  }
};
