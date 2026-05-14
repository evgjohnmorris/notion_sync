/**
 * Generated Tool: blocksTool_0159
 * Domain: Blocks
 * ID: 0159
 */
exports.blocksTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0159:', error);
    throw error;
  }
};
