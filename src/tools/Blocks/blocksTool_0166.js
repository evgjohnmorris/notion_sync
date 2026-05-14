/**
 * Generated Tool: blocksTool_0166
 * Domain: Blocks
 * ID: 0166
 */
exports.blocksTool_0166 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0166:', error);
    throw error;
  }
};
