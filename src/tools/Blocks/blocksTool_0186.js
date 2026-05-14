/**
 * Generated Tool: blocksTool_0186
 * Domain: Blocks
 * ID: 0186
 */
exports.blocksTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.blocks.children.append(params);
    return response;
  } catch (error) {
    console.error('Error in blocksTool_0186:', error);
    throw error;
  }
};
