/**
 * Generated Tool: blocksTool_0090
 * Domain: Blocks
 * ID: 0090
 */
exports.blocksTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0090:', error);
    throw error;
  }
};
