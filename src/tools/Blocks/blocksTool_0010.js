/**
 * Generated Tool: blocksTool_0010
 * Domain: Blocks
 * ID: 0010
 */
exports.blocksTool_0010 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0010:', error);
    throw error;
  }
};
