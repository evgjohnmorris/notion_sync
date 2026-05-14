/**
 * Generated Tool: blocksTool_0170
 * Domain: Blocks
 * ID: 0170
 */
exports.blocksTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0170:', error);
    throw error;
  }
};
