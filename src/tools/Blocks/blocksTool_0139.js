/**
 * Generated Tool: blocksTool_0139
 * Domain: Blocks
 * ID: 0139
 */
exports.blocksTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0139:', error);
    throw error;
  }
};
