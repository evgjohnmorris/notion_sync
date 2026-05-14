/**
 * Generated Tool: blocksTool_0765
 * Domain: Blocks
 * ID: 0765
 */
exports.blocksTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0765:', error);
    throw error;
  }
};
