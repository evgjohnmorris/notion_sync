/**
 * Generated Tool: blocksTool_0998
 * Domain: Blocks
 * ID: 0998
 */
exports.blocksTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0998:', error);
    throw error;
  }
};
