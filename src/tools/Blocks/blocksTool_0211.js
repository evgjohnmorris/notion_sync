/**
 * Generated Tool: blocksTool_0211
 * Domain: Blocks
 * ID: 0211
 */
exports.blocksTool_0211 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0211:', error);
    throw error;
  }
};
