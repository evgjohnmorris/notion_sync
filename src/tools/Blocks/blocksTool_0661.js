/**
 * Generated Tool: blocksTool_0661
 * Domain: Blocks
 * ID: 0661
 */
exports.blocksTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0661:', error);
    throw error;
  }
};
