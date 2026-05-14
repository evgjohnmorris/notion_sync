/**
 * Generated Tool: blocksTool_0312
 * Domain: Blocks
 * ID: 0312
 */
exports.blocksTool_0312 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0312:', error);
    throw error;
  }
};
