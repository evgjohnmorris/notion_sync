/**
 * Generated Tool: blocksTool_0573
 * Domain: Blocks
 * ID: 0573
 */
exports.blocksTool_0573 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0573:', error);
    throw error;
  }
};
