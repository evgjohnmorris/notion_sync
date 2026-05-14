/**
 * Generated Tool: blocksTool_0146
 * Domain: Blocks
 * ID: 0146
 */
exports.blocksTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0146:', error);
    throw error;
  }
};
