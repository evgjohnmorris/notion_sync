/**
 * Generated Tool: blocksTool_0098
 * Domain: Blocks
 * ID: 0098
 */
exports.blocksTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0098:', error);
    throw error;
  }
};
