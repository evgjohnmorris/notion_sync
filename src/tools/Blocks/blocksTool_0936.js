/**
 * Generated Tool: blocksTool_0936
 * Domain: Blocks
 * ID: 0936
 */
exports.blocksTool_0936 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0936:', error);
    throw error;
  }
};
