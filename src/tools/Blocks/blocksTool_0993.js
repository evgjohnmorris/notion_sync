/**
 * Generated Tool: blocksTool_0993
 * Domain: Blocks
 * ID: 0993
 */
exports.blocksTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0993:', error);
    throw error;
  }
};
